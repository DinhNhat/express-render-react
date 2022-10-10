const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// DB URI import
// import mongoURI from './config/keys';

const app = express();
const PORT = 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
/* 
* all your other routes go here
*/
// rootRouter.get('(/*)?', async (req, res, next) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });
// app.use(rootRouter);

// app.get('/ping', (request, response) => {
//     return response.send(`pong`);
// });

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Running on Port: http://localhost:${PORT}`);
});