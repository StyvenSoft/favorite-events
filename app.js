const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send("Working");
})

app.listen(PORT, () => {
    console.log(`Server in listen on http://localhost:${PORT}`);
});