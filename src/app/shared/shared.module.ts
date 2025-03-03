import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './pipes/full-name.pipe';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    FullNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [FullNamePipe, MatListModule]
})
export class SharedModule { }
