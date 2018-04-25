import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageConfigurationComponent } from './page-configuration/page-configuration.component';
import { PageMapComponent } from './page-map/page-map.component';
import { PageSettingComponent } from './page-setting/page-setting.component';

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent
  },
  {
    path: 'home',
    component: PageHomeComponent
  },
  {
    path: 'map',
    component: PageMapComponent
  },
  {
    path: 'configuration',
    component: PageConfigurationComponent
  },
  {
    path: 'setting',
    component: PageSettingComponent
  },
  {
    path: 'about',
    component: PageAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
