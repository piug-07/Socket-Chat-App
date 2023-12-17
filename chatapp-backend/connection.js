const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@chatapp.jswnkg3.mongodb.net/`,)
.then((res) => {
    console.log("Database connected Succesfully...");
})
.catch(error => {
    console.log(error);
});