const router = require("express").Router();
const userController = require("./user.controller");
const {
  validate,
  resetValidate,
  userUpdateVlaidation,
  loginValidate,
  changePasswordValidation,
} = require("./user.validate");
const { checkRole } = require("../../utils/sessionManager");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images"); //make sure the new folders are in the public folder
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
    // console.log(file.originalname.split("."));
  },
});

const upload = multer({ storage: storage });

router.get("/", checkRole(["user"]), async (req, res, next) => {
  try {
    const { limit, page, name, role } = req.query;
    const search = { name, role };
    const result = await userController.getAllUsers(search, page, limit);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

router.post("/", validate, async (req, res) => {
  const userData = req.body;
  const result = await userController.createUser(userData);
  res.json({ data: result });
});

// router.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;
//   const result = await userController.updateUsersDetails(id, updatedData);
//   res.json({ message: result });
// });

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await userController.deleteUser(id);
  res.json({ message: result });
});

// router.patch("/:id", (req, res) => {
//   const { id } = req.params;
//   res.json({ message: `We are inside patch method of user` });
// });

router.post(
  "/register",
  upload.single("profilePic"),
  validate,
  async (req, res, next) => {
    try {
      if (req.file) {
        const { path } = req.file;
        req.body.profilePic = path.replace("public", "");
      }

      const result = await userController.registerUser(req.body);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

router.post("/login", loginValidate, async (req, res, next) => {
  try {
    const result = await userController.loginUser(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

// this api are used for forget password
router.post("/otpGeneration", async (req, res, next) => {
  try {
    const result = await userController.generateOTP(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

router.post("/verifyOtp", async (req, res, next) => {
  try {
    const result = await userController.verifyOTP(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

// this api used for reseting password by admin
router.patch(
  "/resetPassword",
  resetValidate,
  checkRole(["admin"]),
  async (req, res, next) => {
    try {
      const result = await userController.resetPassword(req.body);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

// this pau is used for get data of logged in user which is only accessible for specific users
router.get("/get-user", checkRole(["user"]), async (req, res, next) => {
  try {
    const { id } = req.body;
    
    if (!id) throw new Error("id is required");
    const result = await userController.getProfile(id);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

// this is the api accessible to only user role to change password
router.patch(
  "/changePassword",
  changePasswordValidation,
  checkRole(["user"]),
  async (req, res, next) => {
    try {
      const result = await userController.changePassword(req.body);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

// this is the api to update the profile of specific user which is only accessible forspecific user
router.put(
  "/updateProfile",
  userUpdateVlaidation,
  checkRole(["user"]),
  async (req, res, next) => {
    try {
      console.log(req);
      const { id, ...rest } = req.body;
      if (!id) throw new Error("Id is required");
      const result = await userController.updateProfile(id, rest);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
