import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { FilmyComponent } from './filmy/filmy.component';
import {RouterModule, Routes} from "@angular/router";
import {KsiazkiComponent} from "./ksiazki/ksiazki.component";
import {Ksiazka} from "./ksiazki/Ksiazka";

const appRoutes: Routes = [
  {path: 'filmy', component: FilmyComponent},
  {path: 'ksiazki', component: KsiazkiComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmyComponent,
    KsiazkiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
