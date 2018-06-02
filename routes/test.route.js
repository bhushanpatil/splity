import express from 'express';
import testController from '../controllers/test.controller'

const router = express.Router();

router.get('/',(req,res)=>{
	testController.get(req,res);
})


export default router;