
import PostMessage from '../models/postMessege.js';



export const getPosts=async(req,res)=>{
   try {
      const postMessege = await PostMessage.find(); 
      res.status(200).json(postMessege);       
           
    } catch (error) {
        res.status(404).json({messge:error.message});    
     }
   
   
};

  

export const createPost = async(req, res)=> {
   const post = req.body;
   const nowPost = PostMessage(post);
   try {
      await nowPost.save();
      res.status(200).json(nowPost);
   } catch (error) {
      res.status(404).json({ message: error.message });

   }
}

   
   

 
