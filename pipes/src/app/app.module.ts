import { BrowserModule,  } from '@angular/platform-browser';
import { LOCALE_ID , NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';



import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

// the second parameter 'fr' is optional
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID,
      useValue:"pt"
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
