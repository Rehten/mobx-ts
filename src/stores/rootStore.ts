import { ProductStore } from "./productStore";
import { UserStore } from "./userStore";

export class RootStore {
    public readonly productStore = new ProductStore();
    public readonly userStore = new UserStore();
}
