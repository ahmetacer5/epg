import { RoleModel } from './role-model';
import { SeriesModel } from './series-model';

export class ProgramModel {
  Id: string;
  Title: string;
  Start: Date;
  End: Date;
  Image: string;
  CatchupExpiration: Date;
  LastTimePosition: number;
  ChannelId: string;
  ChannelTitle: string;
  ChannelImage: string;
  Year: number;
  Genres: string[];
  Cast: RoleModel[];
  Creators: RoleModel[];
  Series: SeriesModel[];
  Description: string;
}
