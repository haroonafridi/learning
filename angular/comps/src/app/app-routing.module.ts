import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModsModule } from './mods/mods.module';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)
  },
  {
    path: 'collections', loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule)
  },
  {
    path: 'views', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  {
    path: 'modes', loadChildren: () => import('./mods/mods.module').then(m => m.ModsModule).finally(()=>{
      console.log("We are here!!");
    })
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
