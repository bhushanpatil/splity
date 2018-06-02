import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import multer from 'multer'
import testRoutes from './routes/test.route'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import connectToDb from './utils/db'
import userRoutes from './routes/users.route'
const app = express();


connectToDb();


app.set('port', process.env.PORT || 3001)


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('combined',{stream: accessLogStream }))



app.get('/', (req,res)=>{
	res.send("200","Hello There!")
})

app.use('/test',testRoutes)
app.use(userRoutes);

//error handlers

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});


app.listen(app.get('port'),()=>{
	console.log(`App started on port ${app.get('port')} `)
});



//todo
/*
1. setup logger
2. setup mongodb
3. mongo model + curd
4. aws s3 file upload
5. aws other service api
6. unit test
7. file handling
8. cluster + fork + scaling 
9. authentication using passport + jwt
10.middelware
*/