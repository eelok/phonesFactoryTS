import express, { Express, Request, Response } from 'express';
import { Manufacturer, Location } from './ManufacturerType';
import { location001, location002, lg, siemens } from '../repository';
import { ManufacturerRepository } from '../service/ManufacturerRepository';

const manufacturerRepo: ManufacturerRepository = new ManufacturerRepository();

export const createManufacturer = (req: Request, res: Response): void => {
  let data: Manufacturer = req.body;
  manufacturerRepo.saveManufacturer(data);
  manufacturerRepo.printAllManufacturers(manufacturerRepo.storage);
  // console.log(`Manufacturer id: ${data.id}`);
  // console.log("Manufacturer: ", data);
  res.send("Data Received: " + JSON.stringify(data));
}

export const getManufacturerByID = (req: Request, res: Response) => {
  const manufacturerID: number = +req.params.id;
  if (manufacturerID === 1) {
    return res.send(lg);
  }
  if (manufacturerID === 2) {
    return res.send(siemens);
  }
}