import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path: 'authors',
    component: AuthorComponent,
    // children: [
    //   { path: '', component: TestComponent },
    //    { path: 'update/:id', component: UpdateAuthorComponent }
    // ]
  },
  {
    path: 'books',
    component: BookComponent
  },
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
