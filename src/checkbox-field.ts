import { Field } from "./field";
import { FieldType } from "./field-type";
import { FieldLabel } from "./field-label";

export class CheckboxField implements Field {
    name: string;
    label: string;
    type: FieldType;
    value: string;

    constructor(name: string, label: string, value: string) {
        this.name = name;
        this.label = label;
        this.type = FieldType.Checkbox;
        this.value = value;
    }
    
    getValue() {
       return this.value;
    }

    render(): string {
        let label = FieldLabel.render(this.label);
        let input = ' <div class="form-check"><input  class="form-check-input"  id="defaultCheck1" type="' + this.type + '" name="' + this.name + '"/><label class="form-check-label" for="defaultCheck1"">' + this.value +  '</label></div>';

        return label + input;
    }

}