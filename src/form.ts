import { Field } from "./field";
import { LocStorage } from "./loc-storage";

export class Form {
    fields: Field[];
    locStorage: LocStorage;

    constructor(fields: Field[]) {
        this.fields = fields;
        this.locStorage = new LocStorage();
    }

    getValue(): string {
        return '';
    }

    save() {
        this.locStorage.saveDocument(this);
    }

    render(): string {
        let result = '';
        this.fields.forEach(field => result += field.render());

        result += this.getSaveButton();
         result += this.getBackButton();
        return result;
    }

    getSaveButton(): string {        
        return '<button id="saveButton" type="button" class="btn btn-primary">Save</button>';
    }

    getBackButton(): string {
        return '<button id="backButton" type="button" class="btn btn-primary">Back</button>';
    }

}

 