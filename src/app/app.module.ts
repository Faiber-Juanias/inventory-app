import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ListInventoryComponent } from './components/list-inventory/list-inventory.component';
import { FormInventoryComponent } from './components/form-inventory/form-inventory.component';
import { InventoryServiceService } from './services/inventory-service.service';
import { DatePipe } from '@angular/common';
import { FormFilterComponent } from './components/form-filter/form-filter.component';

const routes: Routes = [
  { path: 'list', component: ListInventoryComponent },
  { path: 'form', component: FormInventoryComponent },
  { path: 'form/:id', component: FormInventoryComponent },
  { path: '', component: ListInventoryComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ListInventoryComponent,
    FormInventoryComponent,
    FormFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    InventoryServiceService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
