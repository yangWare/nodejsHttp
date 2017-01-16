var request = require('request');

//for get
request('targetUrl', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // 打印返回数据
    }
});


