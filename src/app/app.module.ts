import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatCardModule, MatDialogModule,  MatTableModule,
   MatMenuModule, MatProgressSpinnerModule,
    MatCheckboxModule,MatGridListModule,MatTabsModule,MatPaginatorModule,MatSortModule,MatChipsModule,MatDatepickerModule,
    MatNativeDateModule

} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';
import { ClientComponent } from './client/client.component';
import { DevisComponent } from './devis/devis.component';
import { RouterModule } from '@angular/router';
import { DevisService } from 'src/services/devis.service';
import { ClientService } from 'src/services/clients.service';
import { AddClientComponent } from './client/add-client/add-client.component';
import { AddDevisComponent } from './devis/add-devis/add-devis.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DevisComponent,
    AddClientComponent,
    AddDevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
     MatFormFieldModule,
    MatSelectModule, MatCardModule, MatDialogModule,  MatTableModule,
     MatMenuModule, MatProgressSpinnerModule,
     MatCheckboxModule,MatGridListModule,
     MatTabsModule,
     MatPaginatorModule,
     MatSortModule,
     MatChipsModule,
     MatDatepickerModule,
     MatNativeDateModule,
     FormsModule
  ],
  providers: [ClientService,DevisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
