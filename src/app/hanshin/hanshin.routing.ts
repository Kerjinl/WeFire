import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HanshinComponent } from './hanshin.component'

const routes: Routes = [
    {
        path:'',
        component: HanshinComponent
    },{
        path: 'login',
        component: HanshinComponent
    }
]

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HanshinRoutingModule {

}