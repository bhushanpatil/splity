import Mongoose from 'mongoose';
 
const userSchema = Mongoose.Schema({
	first_name : String,
	last_name: String,
	phone: String	
})


let UsersModel = Mongoose.model('User', userSchema);


UsersModel.getAll = () => {
    return UsersModel.find({});
}

UsersModel.addUser = (userToAdd) => {
    return userToAdd.save();
}

UsersModel.removeUser = (id) => {
    return UsersModel.removeUser({_id: id});
}

export default UsersModel;