import User from '../models/users.model'
const controller = {}

controller.find = async(req,res) => {
	try{
		let users = await User.getAll();
		res.send(users)
	}catch(err){
		res.send(
				{
					message: "Failed to fetch data!",
					details: err,
					error: true
				})
	}
}

controller.createUser = async(req,res)=> {
	try{
		let userToAdd = User({
	        first_name: req.body.first_name,
	        last_name: req.body.last_name,
	        phone: req.body.phone
	    });

	   const newUser = await User.addUser(userToAdd);

	   res.send({message: "new user added!", data: newUser});	

	}catch(err){
		res.send(
				{
					message: "Failed to create data!",
					details: err,
					error: true
				})
	}
}




controller.remove = async(req,res)=> {
	try{

		let id = req.params.id;
		const removedUser = await User.removeUser(id);
		res.send({message: "User removed successfully!", data: removedUser});

	}catch(err){
		res.send({message: 'Failed to delete',details: err, error: true})
	}
}



export default controller;