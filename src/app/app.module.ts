import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from 'src/components/login/login.component';
import { ChildComponent } from 'src/components/parent-child/child.component';
import { ParentComponent } from 'src/components/parent-child/parent.componet';
import { ProductDetailsComponent } from 'src/components/product-routing/product-details';
import { ProductListComponent } from 'src/components/product-routing/product-list';
import { SampleComponent } from 'src/components/default/sample.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserForm } from 'src/components/reactive-forms-and-dynamic-form/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHighlightDirective } from 'src/directives/app-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SampleComponent,
    LoginComponent,
    UserForm,
    AppHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
