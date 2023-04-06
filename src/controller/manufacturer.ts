import express, { Express, Request, Response } from 'express';
import { Manufacturer, Location } from './ManufacturerType';
import { statusCodes } from '../statusCodes';

let storage: Record<string, Manufacturer> = {};
//todo write unit test when manufacturer is null
export const createManufacturer = (req: Request, res: Response): void => {
    let manufacturer: Manufacturer = req.body;
    if (!manufacturer || typeof manufacturer !== "object") {
        res.status(statusCodes.BAD_REQUEST).send('Invalid manufacturer object');
        return;
    }
    let { name } = manufacturer;
    if (!name || !name.trim()) {
        res.status(statusCodes.BAD_REQUEST).send('Manufacturer name is required');
        return;
    }
    name = name.trim().toLowerCase();
    if (Object.keys(storage).length === 0) {
        storage[name] = manufacturer;
        res.status(statusCodes.CREATED).send(manufacturer);
        return;
    }
    if (storage[name]) {
        res.status(statusCodes.BAD_REQUEST).send('Manufacturer already exists');
        return;
    }
    storage[name] = manufacturer;
    res.status(statusCodes.CREATED).send(manufacturer);
}

export const getManufacturerByName = (req: Request, res: Response): void => {
    let name: string = req.params.name;
    if (!name || !name.trim().toLowerCase()) {
        res.status(statusCodes.BAD_REQUEST).send('name is required');
        return;
    }
    name = name.trim().toLowerCase()
    const manufacturer = storage[name];
    if (!manufacturer) {
        res.status(statusCodes.BAD_REQUEST).send('Manufacturer with the name ${name} does not exists');
        return;
    }
    res.status(statusCodes.OK).send(manufacturer);
}

export const getAllManufacturers = (req: Request, res: Response): void => {
    res.status(statusCodes.OK).send(storage);
}

export const deleteManufacturerByName = (req: Request, res: Response): void => {
    let manufacturerName: string = req.body.name;
    if (!manufacturerName || !manufacturerName.trim()) {
        res.status(statusCodes.BAD_REQUEST).send('Manufacturer name is required');
        return;
    }
    manufacturerName = manufacturerName.trim().toLowerCase();
    const manufacturer = storage[manufacturerName];
    if (!manufacturer) {
        res.status(statusCodes.NOT_FOUND).send(`Manufacturer with a name ${manufacturerName} was not found`);
        return;
    }
    if (!delete storage[manufacturerName]) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).send();
        return;
    }
    res.status(statusCodes.OK).send();
    return;
}

export const updateManufacturer = (req: Request, res: Response): void => {
    let { name, location: { country, city } }: Manufacturer = req.body;
    if (!name || !name.trim()) {
        res.status(statusCodes.BAD_REQUEST).send('Manufacturer name is required');
        return;
    }
    name = name.trim().toLowerCase()
    let foundManufacturer = storage[name];
    if (!foundManufacturer) {
        res.status(statusCodes.NOT_FOUND).send(`Manufacturer with a name ${name} was not found`);
        return;
    }
    if (country && country.trim()) {
        country = country.toLowerCase();
        foundManufacturer.location.country = country;
    }
    if (city && city.trim()) {
        city = city.toLowerCase();
        foundManufacturer.location.city = city;
    }
    res.status(statusCodes.OK).send(foundManufacturer);
}
