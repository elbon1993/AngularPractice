import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    'selector': 'product-list',
    'template': `
    <div>
        <h1 (click)="navigateToLogin()">Login</h1>
        <ol *ngFor="let product of products">
            <a [routerLink]="[product.id]">{{product.name}}</a>
        </ol>
        <router-outlet></router-outlet>
    </div>
    
    `
})

export class ProductListComponent {

    constructor(private router: Router) {}

    products: IProduct[] = [
        { id:1, name: 'iPhone', price: 80000 },
        { id:2, name: 'OnePlus', price: 50000 }
    ]

    navigateToLogin() {
        this.router.navigate(['login','1']);
    }
}



export interface IProduct {
    id: number;
    name: string;
    price: number;
}