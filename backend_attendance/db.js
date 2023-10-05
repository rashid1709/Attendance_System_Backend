const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to mongodb database');
}).catch(error=>{
    console.log({error:"error while connected to mongo db database"});
})

module.exports = mongoose;