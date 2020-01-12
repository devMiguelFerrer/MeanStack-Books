import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatDividerModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
