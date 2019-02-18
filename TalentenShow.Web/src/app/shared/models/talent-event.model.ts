import { BaseModel } from './base.model';

export interface TalentEvent extends BaseModel {

  Id: number;
  Name: string;
  Description: string;
  EventCode: string;
  MaxNumberOfParticipants: number;
  EntryStartDate: Date;
  EntryEndDate: Date;
  EventStartDate: Date;
  EventEndDate: Date;
  LocationId: number;
  ThemeId: number;

}
