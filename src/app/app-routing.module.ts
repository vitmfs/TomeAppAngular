import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { BooksComponent } from './books/books.component';
import { CredentialComponent } from './credential/credential.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { VideoClassComponent } from './video-class/video-class.component';
import { UserComponent } from './user/user.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { StepListComponent } from './step-list/step-list.component';
import { NotFoundComponent } from './not-found/not-found.component';







const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'credentials', component: CredentialsComponent },
  { path: 'credential', component: CredentialComponent },
  { path: 'videoclass', component: VideoClassComponent },
  { path: 'user', component: UserComponent },
  { path: 'uploadfile', component: UploadFileComponent },
  { path: 'steplist', component: StepListComponent },
  { path: 'notfound', component: NotFoundComponent },
  // { path: '',   redirectTo: '/credentials', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
