import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/components/login/login.component';
import { ProductDetailsComponent } from 'src/components/product-routing/product-details';
import { ProductListComponent } from 'src/components/product-routing/product-list';
import { SampleComponent } from 'src/components/default/sample.component';
import { UserForm } from 'src/components/reactive-forms-and-dynamic-form/forms.component';
import { HttpRestClientComponentComponent } from '../components/http-rest-client-component/http-rest-client-component.component';

const routes: Routes = [
  { path: '', component: SampleComponent },
  { path: 'login/:loginId', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forms', component: UserForm },
  { path: 'http-rest', component: HttpRestClientComponentComponent},
  { path: 'product-list', component: ProductListComponent, children: [
    { path: ':productId', component: ProductDetailsComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
