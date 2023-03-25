import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { send } from 'process';
import { createManufacturer, getManufacturerByID } from './controller/manufacturer';


const bodyParser = require('body-parser')

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/home', (req: Request, res: Response) => {
  res.send('fackkkkk HELLO Express + TypeScript Server');
});

app.post('/create', createManufacturer);

app.get('/:id', getManufacturerByID);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});