import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Buscar', url: '/pesquisar-profissionais', icon: 'navigate' },
    { title: 'Perfil', url: '/Perfil', icon: 'mail' }, 
    { title: 'Sair', url: '/login', icon: 'mail' },
    
  ];
  public labels = [];
  constructor() {}
}
