import { BaseModel } from './base.model';

export interface News extends BaseModel {

  id: number;
  title: string;
  content: string;
  isHidden: boolean;
  publishDate: Date;

}
