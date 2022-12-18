const {Router} = require("express");
const UserRepository = require("../repositories/UserRepository")
const UserService = require("../services/UserService")

const userRouter = Router();
const userRepository = new UserRepository();

userRouter.get("/", async (request, response) => {
  const users = await userRepository.findAll();
  return response.send(users)
});

userRouter.post("/", async (request, response) => {
  try {
    const {name, email} = request.body;
  
    const userService = new UserService(userRepository);
    const user = await userService.create({name, email});

    return response.send(user);
  } catch (err) {
    return response.status(401).json({error: err.message})
  }

})
module.exports = userRouter;