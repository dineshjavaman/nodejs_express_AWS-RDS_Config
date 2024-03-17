import express from'express';
import connect from './database/conn.js'

var app = express();

app.use(express.json());

const port=process.env.PORT || 8080 ;

app.get('/', (req, res) => {

try{
    res.json("home request")
}catch(error){
    res.json({error});
}

})
connect().then(() =>{
  try{
    app.listen (port, ()=> {
        console.log(`Server connected to http://localhost:${port}`);
    
    })
  }catch (error){
      console.log("cam't connect to server");
  }

}).catch((err)=>{
    console.log('Error connecting to the database')
});

