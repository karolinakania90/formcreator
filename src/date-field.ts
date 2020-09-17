import { Field } from "./field";
import { FieldType } from "./field-type";
import { FieldLabel } from "./field-label";

export class DateField implements Field {
    name: string;
    label: string;
    type: FieldType;
    value: string;

    constructor (name: string, label: string, value: string) {
        this.name = name;
        this.label = label;
        this.type = FieldType.Date;
        this.value = value;
    }

    render(): string {
        let label = FieldLabel.render(this.label);
        let inputDate = ' <div class="form-group"><input type="' + this.type + '" name="' + this.name + '"></div>';

        return label + inputDate;
    }

    getValue() {
        return this.value;
     }

}