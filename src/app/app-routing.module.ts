import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { CourseComponent } from './components/course/course.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [ {path: '', component:HomeComponent},
{path: 'registration', component:MainComponent},
{path: 'courses', component:CourseComponent},
{path: 'student', component:ViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
