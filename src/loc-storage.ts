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


        Object.keys(window.localStorage).forEach((key) => {
            if (key!== 'docType')
                documents.push(key);
        });
        return documents;
    }
}