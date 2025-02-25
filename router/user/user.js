const express = require ("express");
const { createUserController, createDeleteByIdController } = require("../../controllers/product/user/user");

const router = express.Router();

router.post("/user",createUserController)

router.get("/all-users",createUserController)

router.delete("/delete-id/:userId", createDeleteByIdController)


module.exports =router;
