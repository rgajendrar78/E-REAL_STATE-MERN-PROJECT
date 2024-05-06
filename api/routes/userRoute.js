import express from "express";
import {
  deleteUserByID,
  getCurrentUser,
  getUserByID,
  getUsers,
  signIn,
  signUp,
  updateUserByID,
} from "../controllers/userController.js";
import { roleAuthorize } from "../middlewares/roleAuthorize.js";
import { verifyToken } from "../middlewares/varifyToken.js";
import { validateUpdateRequestBody } from "../middlewares/validateRequestBody.js";
const router = express.Router();

// User authentication routes
router.post("/api/user/signUp", signUp);

router.post("/api/user/signIn", signIn);
router.get("/api/user/current", verifyToken, getCurrentUser);

// Routes accessible only by moderator
router.get("/api/users", verifyToken, roleAuthorize("admin"), getUsers);
router.get(
  "/api/user/:id",
  verifyToken,
  roleAuthorize("admin"),
  getUserByID
);
router.delete(
  "/api/user/:id",
  verifyToken,
  roleAuthorize("admin"),
  deleteUserByID
);
router.put(
  "/api/user/:id",
  validateUpdateRequestBody,
  verifyToken,
  roleAuthorize("admin"),
  updateUserByID
);

export default router;
