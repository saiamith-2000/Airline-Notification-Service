const express=require('express');

const {ServerConfig,Logger}= require('./config');
const apiRoutes=require('./routes');
const mailSender = require('./config/email-config');


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,async()=>{
    console.log(`Successfully started server on port:${ServerConfig.PORT}`);
    try {
        const response=await mailSender.sendMail({
            from:ServerConfig.GMAIL,
            to:'saiamith2000@gmail.com',
            subject:'Is service working or not?',
            text:'It\'s perfectly fine'
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
});
