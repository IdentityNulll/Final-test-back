const express = require("express");
const {
  createUser,
  loginUser,
  getProfile,
  getUsers,
  getUserById,
  deleteUser
} = require("../controllers/user.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
module.exports = router;
