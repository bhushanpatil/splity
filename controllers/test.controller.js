
const controller = {}

controller.get = (req,res) => {
	//res.json()
	res.send({message : "hello there! this is test routes!"})
}


export default controller;