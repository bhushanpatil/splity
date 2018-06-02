import express from 'express'
import UserController from '../controllers/users.controller'
let userRouter = express.Router();

userRouter.route('/users')
	.get((req,res) => {
		UserController.find(req,res);
	})
	.post((req,res) => {
		UserController.createUser(req,res)
	});


userRouter.route('/users/:id')
	.delete((req,res) => {
		UserController.remove(req,res);
	});



export default userRouter;	