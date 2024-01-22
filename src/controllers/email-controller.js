const {StatusCodes}=require('http-status-codes');
const { EmailService } = require('../services');
const {SuccessResponse,ErrorResponse}=require('../utils/common');




async function sendEmail(req,res){
    try {
        const response=EmailService.sendEmail({
            mailFrom:req.body.mailFrom,
            mailTo:req.body.mailTo,
            subject:req.body.subject,
            text:req.body.text
        });
        SuccessResponse.success.data=response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function createTicket(req,res){
    try {
        const response=EmailService.createTicket({
            recipientEmail:req.body.mailTo,
            subject:req.body.subject,
            content:req.body.text
        });
        SuccessResponse.success.data=response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports={
    sendEmail,
    createTicket
}