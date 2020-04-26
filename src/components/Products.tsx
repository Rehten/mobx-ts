import React, { useState } from 'react';
import { inject, useObserver } from "mobx-react";
import { RootStore } from '../stores/rootStore';
import { ProductStore } from '../stores/productStore';

interface Props {
    productStore?: ProductStore,
}

export const Products = inject(
    ({ productStore } : RootStore) => {
        return { productStore };
    }
)(({productStore}: Props) => {
    const [ name, setName ] = useState<string>('');
    const [ id, setId ] = useState<number>(NaN);

    const addProduct = (name: string, id: number): void => {
        productStore?.addProduct({name, id});
    };

    return useObserver(() => <div>
        Добавить продукт:
        <input
            value={name}
            onChange={(e) => setName((e.target as HTMLInputElement).value)}
            type="text"
            placeholder="Введите название продукта"
        />
        <input
            value={isNaN(id) ? '' : id}
            onChange={(e) => setId(Number((e.target as HTMLInputElement).value))}
            type="text"
            placeholder="Введите ID продукта"
        />
        <button onClick={() => addProduct(name, id)}>Добавить продукт в список</button>

        Список продуктов:
        {
            productStore?.productsList.map(({name, id}) => <span key={id}>{id}: {name}</span>)
        }
    </div>)
});
