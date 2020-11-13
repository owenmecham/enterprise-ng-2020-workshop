import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureListComponent } from './feature-list/feature-list.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureListComponent,
    data: { title: 'mfework.menu.features' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureListRoutingModule {}
