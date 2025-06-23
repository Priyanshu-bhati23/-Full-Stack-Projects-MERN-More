import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
import User from '../models/userModel';

export const sendEmail=async({email,emailType,userId})=>{
    try{

            const hashedToken=await bcryptjs.hash(userId.toString(),10)

        
        if(emailType==="VERIFY"){
            await User.findByIdAndUpdate(userId,{verifyToken:hashedToken,verifyTokenExpiry:Date.now() + 36000000})
        }else if(emailType==="RESET"){
            await User.findByIdAndUpdate(userId,{forgotPasswordToken:hashedToken,forgotPasswordTokenExpiry:Date.now()
        })
        //Todo: configure mail ofr usage



        const transporter = nodemailer.createTransport({
  host: "priyanshubhati2347@gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

 const mailOptions={
    from: 'priyanshubhati2347@gmail,com',
    to: email,

    subject: emailType==='VERIFY' ? "Verify your email":"Reset your password",

    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  };
  const mailResponse=await transporter.sendMail(mailOptions)

  return mailResponse

   }
 }catch(err){
        console.log(err);
    }
    
}
