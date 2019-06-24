import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import routers modules*/
import { RouterModule } from '@angular/router';
/*import forms module*/
import { FormsModule } from '@angular/forms';

/*import httpclient module*/
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './india/home/home.component';
import { HeadlinesService } from './services/headlines.service';
import { InternationalnewsComponent } from './internationalnews/internationalnews.component';
import { BusinessComponent } from './india/business/business.component';
import { EntertainmentComponent } from './india/entertainment/entertainment.component';
import { HealthComponent } from './india/health/health.component';
import { SportsComponent } from './india/sports/sports.component';
import { ScienceComponent } from './india/science/science.component';
import { TechnologyComponent } from './india/technology/technology.component';
import { PopularsourcesComponent } from './popularsources/popularsources.component';
import { SearcharticlesComponent } from './searcharticles/searcharticles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternationalnewsComponent,
    BusinessComponent,
    EntertainmentComponent,
    HealthComponent,
    SportsComponent,
    ScienceComponent,
    TechnologyComponent,
    PopularsourcesComponent,
    SearcharticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'us', component: InternationalnewsComponent },
      { path: 'business', component: BusinessComponent },
      { path: 'entertainment', component: EntertainmentComponent },
      { path: 'health', component: HealthComponent },
      { path: 'sports', component: SportsComponent },
      { path: 'science', component: ScienceComponent },
      { path: 'technology', component: TechnologyComponent },
      { path: 'sources', component: PopularsourcesComponent },
      { path: 'article', component: SearcharticlesComponent }
    ])
  ],
  providers: [HeadlinesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
