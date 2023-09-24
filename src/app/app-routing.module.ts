import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MarkdownModule.forRoot(),],
  exports: [RouterModule]
})

export class AppRoutingModule { }
