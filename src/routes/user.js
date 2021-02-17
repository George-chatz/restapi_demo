const { Router } = require("express");
const { getMyProfile, addUser, updateUserById, deleteUser, login, logout } = require("../controllers/users");
const { hashPassword, auth } = require("../middleware/");
const userRouter = Router();

userRouter.get("/users/myProfile", auth, getMyProfile);
userRouter.post("/users", hashPassword, addUser);
userRouter.patch("/users/:id", hashPassword, updateUserById);
userRouter.delete("/users/:id", deleteUser);
userRouter.post("/users/login", auth, login);
userRouter.get("/user/logout", logout);

//tidier way
// userRouter.route("/users").get(getAllUsers).post(addUser);
// userRouter.route("/users/:id").patch(updateUserById).delete(deleteUser);

module.exports = {  
  userRouter,
};