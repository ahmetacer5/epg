import { EpgModel } from '../models/epg-model';
import { ChannelModel } from '../models/channel-model';
import { ScheduleModel } from '../models/schedule-model';
import { ProgramModel } from '../models/program-model';
import { RoleModel } from '../models/role-model';
import { SeriesModel } from '../models/series-model';
import { EpisodeModel } from '../models/episode-model';

export class Deserialize {

  static channelLogos = [
    {
      id: 'sky1',
      img: 'http://www.kataklo.com/wp-content/uploads/2015/09/Logo_sky1.png'
    },
    {
      id: 'silver',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Silver_logo.svg/400px-Silver_logo.svg.png'
    },
    {
      id: 'hbo',
      img: 'https://dxf1.com/images/jdownloads/screenshots/hbo.png'
    },
    {
      id: 'cw',
      img: 'http://static.tumblr.com/9ef77d95160ff5878612093b3f2f818e/hpncd5n/BUXp3i1a2/tumblr_static_7i06wx4wbxoog80o80cckkskk.png'
    },
    {
      id: 'vox',
      img: 'http://www.axartel.es/assets/img/sliders/tv-canales/vox.jpg'
    },
    {
      id: 'history',
      img: 'https://i.guim.co.uk/img/static/sys-images/Media/Pix/pictures/2002/05/31/history2.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=095dce30316f2c8b6b385c0366bb9841'
    },
    {
      id: 'sixx',
      img: 'https://www.prosiebensat1.com/uploads/2015/11/04/sixx_496x260.png'
    },
    {
      id: 'tv2norway',
      img: 'https://www.digitaltveurope.com/files/2016/05/Norway-TV-2-logo1.jpeg'
    },
    {
      id: 'channel5',
      img: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1486/cached.offlinehbpl.hbpl.co.uk/news/OMC/5-20140501011604805.jpg'
    }
  ];

  static dummyProgramImage = 'https://news.otakukart.com/wp-content/uploads/2019/01/downton-abbey-season6.jpg';

  static toEpgModel(data: any): EpgModel {
    const epg = new EpgModel();
    epg.Channels = data.channels.map(e => Deserialize.toChannelModel(e));
    return epg;
  }

  static toChannelModel(data: any): ChannelModel {
    const channel = new ChannelModel();
    channel.Id = data.id;
    channel.Title = data.title;
    channel.Image = Deserialize.channelLogos.find(e => e.id === channel.Id).img;
    channel.Schedules = data.schedules.map(e => Deserialize.toScheduleModel(e));
    return channel;
  }

  static toScheduleModel(data: any): ScheduleModel {
    const schedule = new ScheduleModel();
    schedule.Id = data.id;
    schedule.Title = data.title;
    schedule.StartDate = new Date(data.start);
    schedule.EndDate = new Date(data.end);
    return schedule;
  }

  static toRoleModel(data: any): RoleModel {
    const role = new RoleModel();
    role.Name = data.name;
    role.Role = data.role;
    return role;
  }

  static toEpisodeModel(data: any): EpisodeModel {
    const episode = new EpisodeModel();
    episode.Id = data.id;
    episode.Title = data.title;
    return episode;
  }

  static toSeriesModel(data: any): SeriesModel {
    const series = new SeriesModel();
    series.Title = data.title;
    series.Episodes = data.episodes.map(e => Deserialize.toEpisodeModel(e));
    return series;
  }

  static toProgramModel(data: any): ProgramModel {
    const program = new ProgramModel();
    program.Id = data.id;
    program.Title = data.title;
    program.Start = new Date(data.start);
    program.End = new Date(data.end);
    program.Image = Deserialize.dummyProgramImage;
    program.ChannelId = data.channelId;
    program.ChannelTitle = data.channelTitle;
    program.ChannelImage = Deserialize.channelLogos.find(e => e.id === program.ChannelId).img;
    program.Year = Number(data.meta.year);
    program.Genres = data.meta.genres;
    program.Cast = data.meta.cast.map(e => Deserialize.toRoleModel(e));
    program.Creators = data.meta.creators.map(e => Deserialize.toRoleModel(e));
    program.Series = data.series.map(e => Deserialize.toSeriesModel(e));
    program.Description = data.description;
    return program;
  }
}
