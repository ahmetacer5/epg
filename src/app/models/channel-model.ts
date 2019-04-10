import { ScheduleModel } from './schedule-model';

export class ChannelModel {
  Id: string;
  Title: string;
  Image: string;
  Schedules: ScheduleModel[];
}
