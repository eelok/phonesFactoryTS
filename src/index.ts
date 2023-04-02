import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {
  createManufacturer,
  deleteManufacturerByName,
  getAllManufacturers,
  getManufacturerByName,
  updateManufacturer
} from './controller/manufacturer';

const bodyParser = require('body-parser')

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/create', createManufacturer);

app.get('/', getAllManufacturers);

app.get('/:name', getManufacturerByName);

app.delete('/:name', deleteManufacturerByName);

app.put('/:name', updateManufacturer);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
