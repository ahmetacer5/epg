import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ChannelsViewComponent } from './views/channels-view/channels-view.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { DateSelectorComponent } from './components/time-line/date-selector/date-selector.component';
import { DateSelectorItemComponent } from './components/time-line/date-selector/date-selector-item/date-selector-item.component';
import { ChannelListComponent } from './components/time-line/channel-list/channel-list.component';
import { ChannelListItemComponent } from './components/time-line/channel-list/channel-list-item/channel-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleListComponent } from './components/time-line/channel-list/channel-list-item/schedule-list/schedule-list.component';
import { ScheduleListItemComponent } from './components/time-line/channel-list/channel-list-item/schedule-list/schedule-list-item/schedule-list-item.component';
import { TimeRowComponent } from './components/time-line/time-row/time-row.component';
import { FixScheduleScrollingDirective } from './directives/fix-schedule-scrolling.directive';
import { BlockResizerDirective } from './directives/block-resizer.directive';
import { CurrentTimeIndicatorComponent } from './components/time-line/current-time-indicator/current-time-indicator.component';
import { RealTimeClockDirective } from './directives/real-time-clock.directive';
import { NowButtonComponent } from './components/now-button/now-button.component';
import { DetailLayoutComponent } from './layouts/detail-layout/detail-layout.component';
import { ProgramViewComponent } from './views/program-view/program-view.component';
import { ProgramTitleComponent } from './components/program-title/program-title.component';
import { ProgramDescriptionComponent } from './components/program-description/program-description.component';
import { ProgramSeriesComponent } from './components/program-series/program-series.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainLayoutComponent,
    HeaderComponent,
    ChannelsViewComponent,
    TimeLineComponent,
    DateSelectorComponent,
    DateSelectorItemComponent,
    ChannelListComponent,
    ChannelListItemComponent,
    ScheduleListComponent,
    ScheduleListItemComponent,
    TimeRowComponent,
    FixScheduleScrollingDirective,
    BlockResizerDirective,
    CurrentTimeIndicatorComponent,
    RealTimeClockDirective,
    NowButtonComponent,
    DetailLayoutComponent,
    ProgramViewComponent,
    ProgramTitleComponent,
    ProgramDescriptionComponent,
    ProgramSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
