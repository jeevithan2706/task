import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdataComponent } from './userdata/userdata.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { NewuserComponent } from './newuser/newuser.component';
import { MatSelectModule } from '@angular/material/select';
import { DeletedataComponent } from './deletedata/deletedata.component';

const routes: Routes = [
  { path: 'userdata', component: UserdataComponent },
  { path: 'newuser', component: NewuserComponent },
  { path: 'updatedata', component: UpdatedataComponent },
  { path: 'deletedata', component: DeletedataComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserdataComponent,
    UpdatedataComponent,
    NewuserComponent,
    DeletedataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,


    RouterModule.forRoot(routes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
