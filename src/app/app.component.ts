import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Buscar', url: '/pesquisar-profissionais', icon: 'navigate' },
    { title: 'Contratações', url: '/contratacoes-anteriores', icon: 'mail' },
    { title: 'Perfil', url: '/perfil', icon: 'mail' }, 
    { title: 'Login', url: '/login', icon: 'mail' },
    
    
  ];
  public labels = [];
  constructor() {}
}
