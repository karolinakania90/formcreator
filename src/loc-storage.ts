import { CheckboxField } from "./checkbox-field";
import { DataStorage } from "./data-storage";
import { DateField } from "./date-field";
import { EmailField } from "./email-field";
import { Field } from "./field";
import { FieldLabel } from "./field-label";
import { FieldType } from "./field-type";
import { Form } from "./form";
import { InputField } from "./input-field";
import { SelectField } from "./select-field";
import { TextAreaField } from "./text-area-field";

export class LocStorage implements DataStorage {
    saveDocument(form: Form): string {
        const timestamp = Date.now().toString();
        window.localStorage.setItem(timestamp, JSON.stringify(form.fields));
        return timestamp;
    }

    loadDocument(id: string): Form {
        const storedFormJson = window.localStorage.getItem(id);
        let fields: Field[] = [];

        const savedForm = JSON.parse(storedFormJson) as Field[];

        savedForm.forEach((field) => {
            switch (field.type) {
                case FieldType.Input:
                    fields.push(new InputField(field.name, field.label, field.value));
                    break;
                case FieldType.Text:
                    fields.push(new TextAreaField(field.name, field.label, field.value));
                    break;
                case FieldType.Email:
                    fields.push(new EmailField(field.name, field.label, field.value));
                    break;
                case FieldType.Checkbox:
                    fields.push(new CheckboxField(field.name, field.label, field.value));
                    break;
                case FieldType.Date:
                    fields.push(new DateField(field.name, field.label, field.value));
                    break;
                case FieldType.Select:
                    fields.push(new SelectField(field.name, field.label, field.value));
                    break;
            }
        });

        return new Form(fields);
    }

    getDocuments(): string[] {
        const documents = [];


        Object.keys(window.localStorage).forEach((key) => {
            if (key !== 'docType')
                documents.push(key);
        });
        return documents;
    }

    saveForm(form: any) {

    }

    loadForm(form: any) {
        
    }
}