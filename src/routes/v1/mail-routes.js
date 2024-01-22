const express=require('express');

const { EmailController }=require('../../controllers');

const router=express.Router();

router.post('/send',EmailController.sendEmail);
router.post('/ticket',EmailController.createTicket);



module.exports=router;