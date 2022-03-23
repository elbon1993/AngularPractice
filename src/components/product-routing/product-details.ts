import { Component, Input, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    'selector': 'product-details',
    'template': `
    <div>
        Product Details: {{productId}}
    </div>
    `
})

export class ProductDetailsComponent implements OnInit {
    productId = 0;
    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        const routeParams = this.route.params.subscribe((params: any)=> {
            this.productId = Number(params.productId);
        });
    }
}