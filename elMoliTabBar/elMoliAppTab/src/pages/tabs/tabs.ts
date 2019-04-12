import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { GaleriaPage } from '../galeria/galeria';
import { EventosPage } from '../eventos/eventos';
import { ListasPage } from '../listas/listas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GaleriaPage;
  tab3Root = EventosPage;
  tab4Root = ListasPage;

  constructor() {

  }
}
