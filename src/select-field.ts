import { Field } from "./field";
import { FieldType } from "./field-type";
import { FieldLabel } from "./field-label";

export class SelectField implements Field {
    name: string;
    label: string;
    type: FieldType;
    value: string;

    constructor (name: string, label: string, value: string) {
        this.name = name;
        this.label = label;
        this.type = FieldType.Select;
        this.value = value;
    }
    render(): string {
        
            let label = FieldLabel.render(this.label);
            let input = '<select class="" type="' + this.type + '" name="' + this.name + '"></select><br>';
    
    
            return label + input;
        
    }

    getValue() {
        return this.value;
     }

}