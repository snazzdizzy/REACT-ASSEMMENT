const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('<h1>Hello, I am express and I am listening</h1>')
});

app.get('/api', (req, res) =>{
     //https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/
     let cards = [
        {
        "id": 1,
        "imgeUrl": "https://d2vcaowhp5v7jq.cloudfront.net/olympian.jpeg",
        "description": "The only athlete in the world to do her Olympic routine in 2020",
        "title": "The Olympian",
        },
        {
        "id": 2,
        "imgeUrl": "https://d2vcaowhp5v7jq.cloudfront.net/dragon.jpeg",
        "description": "Grow your savings treasure and grow your dragon.",
        "title": "The Savings Jar",
        }, 
        {
        "id": 3,
        "imgeUrl": "https://d2vcaowhp5v7jq.cloudfront.net/skhokho.jpeg",
        "description": "Helping South Africans become #CashCleva with Skhokho and TymeBank",
        "title": "Skhokho seMali",
        }, 
        ];
     res.json(cards);

});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server started at https://localhost:${PORT}`));