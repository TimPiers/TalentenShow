import { BaseModel } from './base.model';

export interface Event extends BaseModel {

  id: number;
  name: string;
  description: string;
  eventCode: string;
  maxNumberOfParticipants: number;
  entryStartDate: Date;
  entryEndDate: Date;
  eventStartDate: Date;
  eventEndDate: Date;
  locationId: number;
  ThemeId: number;

}
