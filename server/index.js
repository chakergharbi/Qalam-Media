import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './Routes/posts.js'

 

// import express function
const app = Express();
app.use('/posts',postRoutes);
//app.use('/posts',router);
//use parse for body app  
app.use(bodyParser.json({limit:'30mb',extended:'true'}));
// decoded or coded app url 
app.use(bodyParser.urlencoded({limit:'30mb',extended:'true'}));
//access for origin elements javascript 
app.use(cors());

//configiration DataBase mongoDb 
const CONNECTION_URL='mongodb+srv://chakergharbi:chakergharbi30@cluster0.k7lnhnb.mongodb.net/?retryWrites=true&w=majority';
const port=process.env.PORT||5000 ;
//console.log(`${port}`);
mongoose.set('strictQuery',false);
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true , useUnifiedTopology : true})
.then(()=>app.listen(port,()=> console.log(`server is running on : ${port}`)))
.catch((error)=> console.log(error.message));
//console.log('the rest off the papers weill be sent');
//mongoose.set('usefindAndModify',false);
//mongoose.set('strictQuery', false);
    






