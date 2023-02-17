const app = require('express')();
const { getAllCustomersController, getCustomerByIdController, addCustomerController, addOrUpdateCustomerController, patchUserController } = require('./controllers/customersController');
const bodyParser = require('body-parser')


// REST
// GET: id should be passed in url, if no id return all data
// PUT: id should be passed in url, if no id found add new entity, if values not passed values should be overriten with null 
// PATCH: id should be passed in url, data should be passed in body. Update specific fields
// POST: add new data, should return id for specific entity
// DELETE: id should be passed in url, delete specific field


// const app = express()
const port = 3000;

app.use(bodyParser.json());

app.get('/customers', async (req, res) => getAllCustomersController(req, res))
app.get('/customers/:id', async (req, res) => getCustomerByIdController(req, res))
app.post('/customers', async (req, res) => addCustomerController(req, res))
app.put('/customers/:id', async (req, res) => addOrUpdateCustomerController(req, res))
app.patch('/customers/:id', async (req, res) => patchUserController(req, res))
//TODO home work finish endpoint DELETE




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})