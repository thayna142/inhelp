import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroProfissionalPageRoutingModule } from './cadastro-profissional-routing.module';

import { CadastroProfissionalPage } from './cadastro-profissional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroProfissionalPageRoutingModule
  ],
  declarations: [CadastroProfissionalPage]
})
export class CadastroProfissionalPageModule {}
