var nodemailer = require("nodemailer");
 var smtpTransport = require('nodemailer-smtp-transport');
var transport = nodemailer.createTransport(smtpTransport({
    host: "smtp.163.com",
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
    auth: {
        user: "xxxx@163.com",
        pass: "xxxx"
    }
}));
 
transport.sendMail({
    from : "xx@163.com",
    to : "xx@qq.com",
    subject: "主题？",
    generateTextFromHTML : true,
    html : "啊哈哈哈"
}, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }
    transport.close();
});