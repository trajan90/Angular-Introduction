import { Component, Input, Output, EventEmitter } from '@angular/core';
enum Size {
  xl = 'XL',
  mini = 'mini',
  standard = 'standard',
}

interface Product {
  name: string;
  size: Size;
  description?: string;
  price?: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() childInputValue = '';
  @Output() childEVentOutputParent = new EventEmitter<string>();

  ngModelInputValue = 'Hello Ng Model';
  isDivVisible: boolean = true;
  CAINE: string = 'caine';
  PISICA: string = 'pisica';
  tipDeAnimal: string = 'pisica';
  products: Product[] = [
    {
      name: 'Phone1',
      size: Size.mini,
      description: 'A small but nice phone',
      price: 10,
    },
    {
      name: 'Phone2',
      size: Size.standard,
      description: 'A small but mid phone',
      price: 20,
    },
  ];
  constructor() {
    this.products.push({
      name: 'Phone3',
      description: 'A small but large phone',
      size: Size.xl,
      price: 30,
    });
  }

  handleViewDetails() {
    console.log('Shared');
  }
  handleClick() {
    this.isDivVisible = !this.isDivVisible;
  }
  handleDeleteClick() {
    this.products.pop();
  }
  randeazaSwitchCainii() {
    this.tipDeAnimal = this.CAINE;
  }
  randeazaSwitchPisici() {
    this.tipDeAnimal = this.PISICA;
  }
  handleClickEventBinding(event: MouseEvent, strValue: string) {
    console.dir(event.target);
    const target = event.target as HTMLElement;
    console.log('Clicked button', target.textContent, strValue);
  }
  handleOnInputChange(val: Event) {
    const t = val.target as HTMLInputElement;
    console.log(t.value);
  }
  handleNgModelChange(e: string) {
    console.log(e);
  }
  handleSendDataToParentClick() {
    this.childEVentOutputParent.emit('Hello');
  }
}
