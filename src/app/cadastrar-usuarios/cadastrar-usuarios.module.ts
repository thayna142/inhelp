import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarUsuariosPageRoutingModule } from './cadastrar-usuarios-routing.module';

import { CadastrarUsuariosPage } from './cadastrar-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarUsuariosPageRoutingModule
  ],
  declarations: [CadastrarUsuariosPage]
})
export class CadastrarUsuariosPageModule {}
