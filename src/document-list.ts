import { LocStorage } from "./loc-storage";

export class DocumentList {
    documents: string[];
    localStorage: LocStorage;

    constructor() {
        this.localStorage = new LocStorage();
        this.documents = [];
        this.getDocumentList();
    }

    private getDocumentList() {
        this.documents = this.localStorage.getDocuments();
    }

    render(): string {
        let table = `<table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
          </tr>
        </thead>
        <tbody>`;

        this.documents.forEach(doc => {
            table += '<tr><th scope="row">' + doc + '</th></tr>';
        })

        table += "</tbody></table>";

        return table;
    }
 }