const express = require("express");

const connect = require("./config/db");

const app = express();

app.use(express.json());

const userController = require("./controller/user.controller");
const todoController = require("./controller/todo.controller");
const {register,login} = require("./controller/auth.controller");




app.use("/user", userController);
app.use("/todos",todoController);
app.use("/register", register);
app.use("/login", login);







app.listen(5000, async () => {
  try {
    await connect();
    console.log("Listening on Port 5000");
  } catch (error) {
    console.log(error);
  }
});
