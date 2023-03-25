import { Model, Optional } from 'sequelize';
import { DataType } from 'sequelize-typescript';
import { sequelize } from '.';
import { Phone } from './Phone';

interface ManufacturerAttributes {
  id: string;
  name: string;
  country: string;
  city: string;
}

interface ManufacturerCreationAttributes
  extends Optional<ManufacturerAttributes, 'id'> { }

interface ManufacturerInstance
  extends Model<ManufacturerAttributes, ManufacturerCreationAttributes>,
  ManufacturerAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}


export const Manufacturer = sequelize.define<ManufacturerInstance>(
  'Manufacturer',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataType.UUID,
      unique: true,
    },
    name: {
      allowNull: false,
      type: DataType.STRING,
    },
    country: {
      allowNull: false,
      type: DataType.STRING,
    },
    city: {
      allowNull: false,
      type: DataType.STRING,
    }
  },
);


Manufacturer.hasMany(Phone, {
  foreignKey: 'manufacturerId',
  as: 'phones',
});

Phone.belongsTo(Manufacturer, {
  foreignKey: 'phoneId',
  as: 'manufacturer',
});

