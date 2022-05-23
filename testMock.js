var Mock = require("mockjs");
const express = require("express");
const app = express();
app.get('/testMock',(req,res)=>{
    var data = Mock.mock({
        'list|1-20':[{
            'name|3-5':/[a-z][A=Z]/,
            'age|10-15':15,
            'gender|1':true,
        }]
    })
    res.end(JSON.stringify(data));
});

app.get('/test111',(req,res)=>{
    var data = Mock.mock('aaaaa')
    res.end(JSON.stringify(data));
});
app.listen(8001,()=>{console.log("服务器已启动,端口8001监听中......")});
