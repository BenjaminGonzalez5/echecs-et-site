import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoccinellesComponent } from './coccinelles/coccinelles.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SetupComponent } from './setup/setup.component';
import { StarwarsComponent } from './starwars/starwars.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'starwars', component: StarwarsComponent },
  { path: 'coccinelles', component: CoccinellesComponent },
  { path: 'setup', component: SetupComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
