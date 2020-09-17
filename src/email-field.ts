import { Field } from "./field";
import { FieldType } from "./field-type";
import { FieldLabel } from "./field-label";

export class EmailField implements Field {
    name: string;
    label: string;
    type: FieldType;
    value: string;

    constructor (name: string, label: string, value: string) {
        this.name = name;
        this.label = label;
        this.type = FieldType.Email;
        this.value = value;
    }
    
    render(): string {
        let label = FieldLabel.render(this.label);
        let input = ' <div class="form-group"><input class="form-control" type="' + this.type + '" name="' + this.name + '"></div>';


        return label + input;
    }

    getValue() {
        return this.value;
     }
    

}