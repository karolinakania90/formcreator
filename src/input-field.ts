import { FieldType } from "../src/field-type";
import { FieldLabel } from "../src/field-label";
import { Field } from "./field";


export class InputField implements Field {
    name: string;
    label: string;
    type: FieldType;
    value: string;

    constructor(name: string, label: string, value: string) {
        this.label = label;
        this.name = name;
        this.type = FieldType.Input;
        this.value = value;
    }
    render(): string {
        let label = FieldLabel.render(this.label);
        let input = '<div class="form-group"><input class="form-control" type="' + this.type + '" name="' + this.name + '"></div>';

        return label + input;
    }

    getValue() {
        return this.value;
     }

}