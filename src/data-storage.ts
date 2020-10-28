import { Form } from "./form";

export interface DataStorage {
    saveDocument(form: any, docId:string): string;
    loadDocument(id: string): Form;
    getDocuments(): string[];
}