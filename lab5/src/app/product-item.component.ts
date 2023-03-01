import { Component, Input, Output, EventEmitter } from '@angular/core';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  products = products;
  @Input() selectedProduct: string | undefined;

  share(a: string) {
    window.open('{https://t.me/share/url?url=http://localhost:4200/&text='+a);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}