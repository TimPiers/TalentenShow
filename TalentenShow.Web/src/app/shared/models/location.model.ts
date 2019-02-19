import { BaseModel } from './base.model';

export interface Location extends BaseModel {

  Id: number;
  Name: string;
  Adress: string;
  PostalCode: string;
  Place: string;

}
