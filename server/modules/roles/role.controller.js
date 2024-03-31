const roleModel = require("./role.model");

const createRole = (payload) => {
  return roleModel.create(payload);
};

const getAllRole = () => {
  return roleModel.find();
};

const getRoleById = () => {};

const updateRole = () => {};

const deleteRole = () => {};

module.exports = {
  createRole,
  getAllRole,
  getRoleById,
  updateRole,
  deleteRole,
};
