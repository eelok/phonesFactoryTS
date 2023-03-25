import { Model, Optional } from 'sequelize';
import { DataType } from 'sequelize-typescript';
import { sequelize } from '.';
import { Manufacturer } from './Manufacturer';

interface PhoneAttributes {
  id: string;
  name: string;
  quantity: number;
  releaseDate: Date;
}

interface PhoneCreationAttributes
  extends Optional<PhoneAttributes, 'id'> { }

interface PhoneInstance
  extends Model<PhoneAttributes, PhoneCreationAttributes>,
  PhoneAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

export const Phone = sequelize.define<PhoneInstance>(
  'Phone',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      unique: true,
      type: DataType.UUID,
    },
    name: {
      allowNull: false,
      unique: true,
      type: DataType.STRING,
    },
    quantity: {
      allowNull: false,
      type: DataType.INTEGER,
    },
    releaseDate: {
      allowNull: true,
      type: DataType.DATE,
    }
  }
);