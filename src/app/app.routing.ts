import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    
    {
        path: 'login',
        loadChildren: './hanshin/hanshin.module#HanshinModule'
    }
    ,
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
    ,{
        path: '**',
        loadChildren: './hanshin/hanshin.module#HanshinModule'
    }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
