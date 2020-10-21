import { Field } from "./field";
import { FieldType } from "./field-type";
import { FieldLabel } from "./field-label";

export class EmailField implements Field {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    private id: string;

    constructor (name: string, label: string, value: string) {
        this.name = name;
        this.label = label;
        this.type = FieldType.Email;
        this.value = value;
    }
    
    render(): string {
        let label = FieldLabel.render(this.label);
        this.id = this.type.toLowerCase() + '-' + Date.now();
        let input = ' <div class="form-group"><input id="' + this.id + '" class="form-control" type="' + this.type + '" name="' + this.name +  '" value="' + this.value + '"></div>';

        return label + input;
    }

    getValue() {
        const element = document.getElementById(this.id) as HTMLInputElement;
        return element.value;
     }
    

}