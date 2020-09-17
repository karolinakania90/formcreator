import { DataStorage } from "./data-storage";
import { Form } from "./form";

export class LocStorage implements DataStorage {
    saveDocument(form: any): string {
        const timestamp = Date.now().toString();
        window.localStorage.setItem(timestamp, JSON.stringify(form));
        return timestamp;
    }
    loadDocument(id: string): Form {
        const storedFormJson = window.localStorage.getItem(id);
        return JSON.parse(storedFormJson) as Form;
    }
    getDocuments(): string[] {
        const documents = [];

        for (var key in window.localStorage) {
            documents.push(key);
        }
        return documents;
    }
}