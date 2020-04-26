import { action, observable } from 'mobx';
import { User } from '../entities/User';

export class UserStore {
    @observable public user: User = {
        name: '',
        birthday: '',
    };

    @action
    public setUser(user: User): void {
        this.user = user;
    }
}
