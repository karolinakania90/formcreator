import { Field } from "./field";
import { FieldType } from "./field-type";
import { FieldLabel } from "./field-label";

export class CheckboxField implements Field {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    private id: string;

    constructor(name: string, label: string, value: string) {
        this.name = name;
        this.label = label;
        this.type = FieldType.Checkbox;
        this.value = value;
        this.id = this.type + "_" + Date.now().toString();
    }

    getValue() {
        const element = document.getElementById(this.id) as HTMLInputElement;
        return element.checked;
    }

    render(): string {
        let label = FieldLabel.render(this.label);
        let input = ' <div class="form-check"><input  class="form-check-input"  id="' + this.id + '"type="' + this.type + '" name="' + this.name + '"/><label class="form-check-label" for="defaultCheck1"">' + this.value + '</label></div>';

        return label + input;
    }

}