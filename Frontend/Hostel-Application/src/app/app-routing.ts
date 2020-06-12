import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentformComponent } from './studentform/studentform.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentmarksComponent } from './studentmarks/studentmarks.component';
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'studentform', component: StudentformComponent },
    { path: 'studentsearch', component: StudentSearchComponent },
    { path: 'studentmarks', component: StudentmarksComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
}