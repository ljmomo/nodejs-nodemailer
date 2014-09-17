var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'QQ',
    auth: {
        user: 'xxx@qq.com',
        pass: 'xxxxxx'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo  <xxx@qq.com>', // sender address
    to: 'xx@qq.com', // list of receivers
    subject: '我是来测试的', // Subject line
    text: '哈哈 测试看看发送是否成功', // plaintext body
    html: '<b>HTML 文本噢！</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});