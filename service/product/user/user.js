const mongoose = require("mongoose");
const user = require("../../../model/user/user");


const createUser = async (userObj) => {
  const newUser = await user.create(userObj);

  return newUser;
};

const fetchAllUsers = async (params) => {
  const users = await user.find();
  return users;
};

const deleteById = async (userId) => {
  const product = await user.findByIdAndDelete(userId);
  return product;
};

module.exports = { createUser, fetchAllUsers, deleteById };
