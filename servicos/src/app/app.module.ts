import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';



@NgModule({
  declarations: [
    AppComponent,
    CursosComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CriarCursoModule
  ],
  providers: [
   // CursosService
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
