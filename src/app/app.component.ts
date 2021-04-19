import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Buscar', url: '/pesquisar-profissionais', icon: 'navigate' },
    { title: 'Contratações', url: '/contratacoes-anteriores', icon: 'person' },
    { title: 'Perfil', url: '/perfil', icon: 'person' }, 
    { title: 'Cadastro', url: '/cadastro-profissional', icon: 'person' }, 
    { title: 'Chat', url: '/chat', icon: 'chatbubble' },
    { title: 'Login', url: '/login', icon: 'arrow-back-circle' },
    { title: 'Agenda', url: '/agenda', icon: 'navigate' },
    { title: 'Pagamento', url: '/pagamento', icon: 'bag-check' },
    { title: 'Feedback', url: '/feedback', icon: 'chatbubble' },
   
    
    
    
    
  ];
  public labels = [];
  constructor() {}
}
