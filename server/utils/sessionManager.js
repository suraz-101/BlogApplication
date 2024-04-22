const { verifyJWT } = require("./token");
const userModel = require("../modules/users/user.model");

const checkRole = (sysRole) => {
  return async (req, res, next) => {
    try {
      const { access_token } = req.headers || "";
      if (!access_token) throw new Error("Access Token is required");
      const { data } = verifyJWT(access_token);
      console.log(data);
      const isValidRole = sysRole.some((role) => data.role.includes(role));
      if (!isValidRole) throw new Error("Permission Denied");
      const { email } = data;
      const user = await userModel.findOne({ email });
      // req.body.author = role.includes("user")
      //   ? user._id.toString()
      //   : req.body.author;
      req.currentUser = user?._id;
      req.role = user?.role;

      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { checkRole };
