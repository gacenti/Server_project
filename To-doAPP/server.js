const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 8080;

app.set('view engine', 'ejs')
app.set('views', './views')


app.listen(port, function(){
    console.log(`서버가 실행되고 있습니다. \n 접속주소 : http://localhost:${port}`)
});

app.get('/', function(req,res){
    res.render('home');
});

// 누군가가 /hello 로 방문을 하면..
// hello 관련된 안내문을 띄워주자

app.get('/hello', function(req, res){
    res.send('hello there nice to see you');

});

app.get('/write', function(req,res){
    res.sendFile(__dirname+'/write.html');
});

app.get('/temp', function(req,res){
    res.sendFile(__dirname+'/temp.html');
});