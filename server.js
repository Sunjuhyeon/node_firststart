const express = require('express')();
//서버를 구동하려면 express모듈 필요
const app = express(); 
//서버 구동 -> 서버이름은 app

const PORT = process.env.PORT || 1215;
//1순위 process.env.PORT 2순위 1215

app.post('/', (req, res) => { 
    res.send('노드서버 첫화면'); 
})
//localhost:1215/로 요청하면 ('노드서버 첫화면') 화면에 띄어줌
app.post('/node', (req, res) => { 
    res.send('내가 만든 첫번째 라우트'); 
})
//localhost:1215/node로 요청하면 ('내가 만든 첫번째 라우트') 화면에 띄어줌
app.post('/sjh', (req, res) => { 
    res.send('선주현'); 
})
//localhost:1215/로 요청하면 ('선주현') 화면에 띄어줌

app.listen(app.get('port'), () => {
    console.log('콘솔에서 시간으로 확인해보면 바로 알게됨');
})
//서버는 듣겠다. 1215에 대한 요청이 발생시 콘솔창에 아래의 메세지 출력