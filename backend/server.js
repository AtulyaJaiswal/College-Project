const app = require('./app');
const connectDatabase = require("./config/database");
const dotenv = require('dotenv');

//CONFIG
if(process.env.NODE_ENV !== "PRODUCTION"){
     require("dotenv").config({path: "backend/config/config.env"});
}

// CONNECT DATABASE
connectDatabase();

const server = app.listen(process.env.PORT, ()=>{
     console.log(`Server running on ${process.env.PORT}`);
});



module.exports = app;