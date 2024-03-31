const router = require("express").Router();
const roleController = require("./role.controller");

router.get("/", async (req, res) => {
  try {
    const result = await roleController.getAllRole();
    res.json({ roles: result });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const roleData = await req.body;
    const result = await roleController.createRole(roleData);
    res.json({ roles: result });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      message: `We are inside put request of roles and the id is ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      message: `We are inside patch request of roles and the id is ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      message: `We are inside delete request of roles and the id is ${id}`,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
