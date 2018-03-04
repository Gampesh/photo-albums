import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatSelectModule,
  MatTableModule,
  MatHeaderCellDef, MatHeaderRowDef,
  MatRow, MatRowDef,  MatCell, MatCellDef
} from '@angular/material';
import {PlatformModule} from '@angular/cdk/platform';

@NgModule({
  exports: [
    // Material Modules
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatSelectModule,
    PlatformModule,
    MatHeaderCellDef, MatHeaderRowDef,
    MatRow, MatRowDef,  MatCell, MatCellDef
  ],
  imports: [MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatSelectModule,
    PlatformModule
  ],
  declarations: []
})
export class AppMaterialModules { }
