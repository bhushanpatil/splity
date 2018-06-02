import Mongoose from 'mongoose'
import config from '../config/dev.config'

const conectToDb = async () => {
	let dbHost = config.dbhost;
    let dbPort = config.dbport;
    let dbName = config.dbname;
	await Mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`);
}


const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log("db connected!!")
});


export default conectToDb;