import { Field } from "./field";
import { LocStorage } from "./loc-storage";

export interface BaseForm {
    fields: Field[];
    locStorage: LocStorage;
    render(): string;
    save(): void;
}