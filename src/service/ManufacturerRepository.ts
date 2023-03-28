import { Manufacturer } from '../controller/ManufacturerType';

export class ManufacturerRepository {
  // storage: Manufacturer[] = [];
  public storage: Record<string, Manufacturer> = {};

  saveManufacturer(someManufacturer: Manufacturer): Manufacturer | undefined {
    if (someManufacturer) {
      const foundManufacturer = this.storage[someManufacturer.id];
      
      if (!foundManufacturer) {
        this.storage[someManufacturer.id] = someManufacturer;
        
        return someManufacturer;
      } else {
        throw new Error('Manufacturer already exists');
      }
    }
  };

  printAllManufacturers(storage: Record<string, Manufacturer>): void {
    let counter: number = 0;
    for (const key in storage) {
      console.log(`Manufacturer ${++counter}: ${storage[key]}`);
    }
  }
}