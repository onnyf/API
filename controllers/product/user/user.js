const { createUser, deleteById  } = require("../../../service/product/user/user");

const createUserController = async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res
      .status(201)
      .json({
        data: newUser,
        message: `user created successfully`,
        status: true,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        data: error.message,
        message: `Failed to create user`,
        status: false,
      });
  }
};

const createAllUserController = async (req, res) => {
  try {
    const newUser = await createAllUser(req.body);
    res
      .status(201)
      .json({
        data: newUser,
        message: `user created successfully`,
        status: true,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        data: error.message,
        message: `Failed to create user`,
        status: false,
      });
  }
};

const createDeleteByIdController = async (req, res) => {
  try {
    const newUser = await deleteById(req.params.userId);
    res
      .status(200)
      .json({
        data: newUser,
        message: `user deleted successfully`,
        status: true,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        data: error.message,
        message: `Failed to delete user`,
        status: false,
      });
  }
};

module.exports = { createUserController, createDeleteByIdController };
