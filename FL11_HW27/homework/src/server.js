const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const myRouter = require('./routes');
const middleware = require('./middlewares/delete-authorization');

app.use(bodyParser.json({ type: 'application/json' }));
app.use(middleware.deletePasswordCheck);
app.use('/car', myRouter);


app.get('/', (req, res) => res.send('Type  http://localhost:3000/car in the url'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
