import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pesquisar-profissionais',
    loadChildren: () => import('./pesquisar-profissionais/pesquisar-profissionais.module').then( m => m.PesquisarProfissionaisPageModule)
  },  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cadastrar-usuarios',
    loadChildren: () => import('./cadastrar-usuarios/cadastrar-usuarios.module').then( m => m.CadastrarUsuariosPageModule)
  },
  {
    path: 'contratacoes-anteriores',
    loadChildren: () => import('./contratacoes-anteriores/contratacoes-anteriores.module').then( m => m.ContratacoesAnterioresPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
