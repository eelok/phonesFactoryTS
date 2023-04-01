import express, {Express, Request, Response} from 'express';
import {Manufacturer, Location} from './ManufacturerType';
import {statusCodes} from '../statusCodes';

let storage: Record<string, Manufacturer> = {};

export const createManufacturer = (req: Request, res: Response): void => {
    let manufacturer: Manufacturer = req.body;
    if(!manufacturer || typeof manufacturer !== "object"){
        res.status(statusCodes.BAD_REQUEST).send('Invalid manufacturer object');
        return;
    }
    let {name} = manufacturer;
    if (!name || !name.trim()) {
        res.status(statusCodes.BAD_REQUEST).send('Manufacturer name is required');
        return;
    }
    name = name.trim().toLowerCase();
    if(Object.keys(storage).length === 0) {
        storage[name] = manufacturer;
        res.send(statusCodes.CREATED).send(manufacturer);
        return;
    }
    if(storage[name]){
        res.status(statusCodes.BAD_REQUEST).send('Manufacturer already exists');
        return;
    }
    storage[name] = manufacturer;
    res.send(statusCodes.CREATED).send(manufacturer);
}

export const getManufacturerByName = (req: Request, res: Response): void => {
    let name: string = req.params.name;
    if(!name || !name.trim().toLowerCase()){
        res.send(statusCodes.BAD_REQUEST).send('name is required');
        return;
    }
    name = name.trim().toLowerCase()
    const manufacturer = storage[name];
    if(!manufacturer){
        res.send(statusCodes.BAD_REQUEST).send('Manufacturer with the name ${name} does not exists');
        return;
    }
    res.status(statusCodes.OK).send(manufacturer);
}
