import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { UserComponent } from './user/user.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { CredentialComponent } from './credential/credential.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BooksComponent } from './books/books.component';
import { StepListComponent } from './step-list/step-list.component';
import { VideoClassComponent } from './video-class/video-class.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RankComponent } from './rank/rank.component';
import { UsersComponent } from './users/users.component';
import { InterviewComponent } from './interview/interview.component';
import { HintsComponent } from './hints/hints.component';
import { TrophyRoomComponent } from './trophy-room/trophy-room.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { VirtualInterviewComponent } from './virtual-interview/virtual-interview.component';
//  { NgMetro4Module } from '../../node_modules/ng-metro4';

import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    CredentialsComponent,
    CredentialComponent,
    SidebarComponent,
    BooksComponent,
    StepListComponent,
    VideoClassComponent,
    NotFoundComponent,
    RankComponent,
    UsersComponent,
    InterviewComponent,
    HintsComponent,
    TrophyRoomComponent,
    AchievementsComponent,
    VirtualInterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
