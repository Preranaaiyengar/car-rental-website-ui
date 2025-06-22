import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarComponent } from './pages/car/car.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'car', component: CarComponent },
];
