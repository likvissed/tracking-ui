import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TimelineModule } from 'primeng/timeline';

const modules: any[] = [
  ButtonModule,
  MenubarModule,
  MenuModule,
  TableModule,
  BadgeModule,
  DropdownModule,
  MultiSelectModule,
  TooltipModule,
  DynamicDialogModule,
  TimelineModule

];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: []
})
export class PrimengModule {}
