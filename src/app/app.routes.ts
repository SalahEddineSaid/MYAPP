import { Routes} from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DevisComponent } from './devis/devis.component';
import { AddDevisComponent } from './devis/add-devis/add-devis.component';

export const ROUTES : Routes = [

    {path:'client', component : ClientComponent},
    {path:'devis', component : DevisComponent},
    {path:'ajouter-devis', component : AddDevisComponent},
    
];
