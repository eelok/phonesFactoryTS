import {Manufacturer} from '../controller/ManufacturerType';
import {v4 as uuidv4} from 'uuid';

export class ManufacturerRepository {
    public storage: Record<string, Manufacturer> = {};
// {
    //   "8934": {
    //     name: "LG",
    //     location: {
    //         country: "South Korean",
    //         city: "Seoul",
    //     }
    //   }
// }

    saveManufacturer(someManufacturer: Manufacturer) {
        if (someManufacturer) {
            if(Object.keys(this.storage).length === 0) {
                const id: string = uuidv4();
                this.storage[id] = someManufacturer;
            } else {
                for( const [key, value]of Object.entries(this.storage)){
                    if(value.name === someManufacturer.name){
                        throw new Error(`manufacturer with name ${someManufacturer.name} is already exists`);
                    }
                }
                this.storage[uuidv4()] = someManufacturer;
            }
        }
    };
}
