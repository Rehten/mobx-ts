import React, { useState } from 'react';
import { inject, useObserver } from "mobx-react";
import { RootStore } from '../stores/rootStore';
import { ProductStore } from '../stores/productStore';
import { UserStore } from '../stores/userStore';

interface Props {
    isConfirmed: boolean;
    productStore?: ProductStore,
    userStore?: UserStore,
}

export const UserInfo = inject(
    ({ productStore, userStore } : RootStore) => {
        return { productStore, userStore };
    }
)(({productStore, userStore, isConfirmed}: Props) => {
    const [ name, setName ] = useState<string>('');
    const [ birthday, setBirthday ] = useState<string>('');

    return useObserver(() => <div>
        Данные пользователя:
        <h6>Имя: {userStore?.user.name}</h6>
        <h6>Дата рождения: {userStore?.user.birthday}</h6>
        <h6>Сколько продуктов приобрел: {productStore?.productsList.length}</h6>
        {
            isConfirmed ? (
                <>
                    <h5>Изменить данные пользователя</h5>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        placeholder="Введите новое имя пользователя"
                    />
                    <input
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                        type="text"
                        placeholder="Введите новую дату рождения пользователя"
                    />
                    <button onClick={() => userStore?.setUser({ name, birthday })}>Заменить данные пользователя</button>
                </>
            ) : null
        }
    </div>)
});
