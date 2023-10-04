const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Registrationform",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log('connecting successful');
}).catch((e)=>{
    console.log(e);
});
