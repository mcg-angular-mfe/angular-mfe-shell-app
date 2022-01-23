import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // {
  //   path: 'mfe1',
  //   loadChildren: () =>
  //     import('mfe1/Module').then((m) => m.Mfe1Module),
  // }
  {
    path: 'mfe1',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        exposedModule: './Module'
      })
      .then(m => m.Mfe1Module)
      .catch(() => {
        return import('./page-not-found/page-not-found.module')
        .then(m => m.PageNotFoundModule)
      }) 
  },
  // {
  //   path: 'test',
  //   children: [
  //     {
  //       path: 'test-mfe',
  //       loadChildren: () => loadRemoteModule({
  //         type: 'module',
  //         remoteEntry: 'http://localhost:3001/remoteEntry.js',
  //         exposedModule: './Module'
  //       })
  //       .then(m => m.Mfe1Module)
  //       .catch(err => {
  //         return import('./page-not-found/page-not-found.module')
  //         .then(m => m.PageNotFoundModule)
  //       }) 
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
