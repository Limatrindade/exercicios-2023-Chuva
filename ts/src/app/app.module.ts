import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { MainDetalhesComponent } from './components/main-detalhes/main-detalhes.component';
import { MainResumoComponent } from './components/main-resumo/main-resumo.component';
import { MainDiscussoesComponent } from './components/main-discussoes/main-discussoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MainHeaderComponent,
    MainSectionComponent,
    MainDetalhesComponent,
    MainResumoComponent,
    MainDiscussoesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
