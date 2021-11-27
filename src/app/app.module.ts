import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from './pages/menu/menu.component';
import { ExibicaoComponent } from './pages/exibicao/exibicao.component';
import { BreadcrumbComponent } from './pages/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { HomeComponent } from './pages/home/home.component';
import { GeneroComponent } from './pages/genero/genero.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ExibicaoComponent,
    BreadcrumbComponent,
    HomeComponent,
    GeneroComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    BreadcrumbModule,
    MenubarModule
  ],

  providers: [ BreadcrumbComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
