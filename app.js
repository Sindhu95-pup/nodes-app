const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, AWS Elastic Beanstalk,this is version 3!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
