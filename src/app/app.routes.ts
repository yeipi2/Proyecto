import { Routes } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponentComponent } from './tercer-dia-component/tercer-dia-component.component';
import { ProyectoFinalComponent } from './proyecto-final/proyecto-final.component';

export const routes: Routes = [
{
 path: '',
 component:PrimerDiaComponent
},
{
path:'primer-dia',
component:PrimerDiaComponent
},
{
 path:'segundo-dia',
 component:SegundoDiaComponent
},
{
    path:'tercer-dia',
    component:TercerDiaComponentComponent
},
{
    path:'proyecto-final',
    component:ProyectoFinalComponent
},
{
    path:'**',
    component:PrimerDiaComponent
}
   
   


];
