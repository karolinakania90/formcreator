import { FieldType } from "./field-type";

export interface Field {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    render(): string;
    getValue(): any;
}