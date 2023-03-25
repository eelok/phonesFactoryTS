import {Location, Manufacturer} from './controller/ManufacturerType';

export const location001: Location = {
  country: "South Korean",
  city: "Seoul",
}

export const location002: Location = {
  country: "Germany",
  city: "Berlin",
}

export const lg: Manufacturer = {
  id: 1,
  name: "LG",
  location: location001,
}

export const siemens: Manufacturer = {
  id: 2,
  name: "Siemens",
  location: location002
}