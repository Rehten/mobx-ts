import { action, observable } from 'mobx';
import { Product } from '../entities/Product';

export class ProductStore {
    @observable public productsList: Product[] = [];

    @action
    public addProduct(product: Product): void {
        this.productsList.push(product);
    }
}
