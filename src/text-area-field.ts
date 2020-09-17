import { Field } from "./field";
import { FieldType } from "./field-type";
import { FieldLabel } from "./field-label";

export class TextAreaField implements Field {
    name: string;
    label: string;
    type: FieldType;
    value: string;

    constructor (name: string, label: string, value: string) {
        this.name = name;
        this.label = label;
        this.type = FieldType.Text;
        this.value = value;
    }
    render(): string {
      let label = FieldLabel.render(this.label);
      let text = ' <div class="form-group"><textarea class="form-control" rows="4"  type="' + this.type.toString() + '" name="' + this.name + '"></textarea></div>';

      return label + text;
    }

    getValue() {
      return this.value;
   }
}