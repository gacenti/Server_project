const express = require('express');
const app = express();
const port = 8080;
app.listen(port, function(){
    console.log(`서버가 실행되고 있습니다. \n 접속주소 : http://localhost:${port}`)
});

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

// 누군가가 /hello 로 방문을 하면..
// hello 관련된 안내문을 띄워주자

app.get('/hello', function(req, res){
    res.send('hello there nice to see you');

});

app.get('/write', function(req,res){
    res.sendFile(__dirname+'/write.html');
});