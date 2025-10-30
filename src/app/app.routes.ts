import { Routes } from '@angular/router';
import { hotels } from './hotels/hotels';
import { Addhotel } from './add-hotel/add-hotel';
import { Updatehotel } from './update-hotel/update-hotel';
import { RechercheParClassification } from './recherche-par-classification/recherche-par-classification';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom';
import { RegisterComponent } from './register/register';

export const routes: Routes = [
    {path: "hotels", component : hotels},
    {path: "add-hotel", component : Addhotel},
    {path: "", redirectTo: "hotels", pathMatch: "full"},
    {path: "rechercheParClassification", component : RechercheParClassification},
    {path: "rechercheParNom", component : RechercheParNomComponent},
    {path: "updatehotel/:id",  component: Updatehotel},
    {path: "register", component: RegisterComponent},

   
];
