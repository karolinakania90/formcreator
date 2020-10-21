import { BaseForm } from "./base-form";
import { Form } from "./form";

export interface DataStorage {
    saveDocument(form: any): string;
    loadDocument(id: string): BaseForm;
    getDocuments(): string[];
}