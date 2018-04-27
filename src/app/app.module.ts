import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routing';

import { HomeComponent } from './routes/home/home.component';
import { ToDoListComponent } from './components/todo-list/todo-list.component';

import { ToDoGeneratorService } from './services';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoListComponent
  ],
  providers: [
    ToDoGeneratorService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
