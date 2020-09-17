import { Form } from "./form";

export interface DataStorage {
    saveDocument(form: any): string;
    loadDocument(id: string): Form;
    getDocuments(): string[];
}