import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { SingleExhibitionComponent } from './single-exhibition/single-exhibition.component';
import { ExhibitionService } from './exhibitions/exhibition.service';
import { ExhibitDialogComponent } from './single-exhibition/exhibit-dialog/exhibit-dialog.component';
import { UserService } from './auth/user.service';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ExhibitionFilterPipe } from './exhibitions/exhibition-filter.pipe';
import { CreateExhibitionComponent } from './exhibitions/create-exhibition/create-exhibition.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExhibitionsComponent,
    SingleExhibitionComponent,
    ExhibitDialogComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ExhibitionFilterPipe,
    CreateExhibitionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    MatCardModule,
  ],
  providers: [ExhibitionService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
