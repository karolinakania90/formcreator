import { BaseForm } from "./base-form";
import { Form } from "./form";
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
            <th scope="col">Data wygnerowania</th>
            <th scope="col">Akcje</th>
          </tr>
        </thead>
        <tbody><tr>`;

        this.documents.forEach(doc => {
            table += '<th scope="row">' + new Date(Number.parseInt(doc)).toUTCString() + '</th>';
            table += '<th scope="row">' + '<a href="edit-document.html?id=' + doc + '">Edytuj</>' +
                '<a  id="' + doc + '" href="#" + ">  Usun</></th></tr>';

        })

        table += "</tbody></table>";

        return table;
    }

    setupDeleteActions() {
        this.documents.forEach(doc => {
            this.removeDocumentId(doc);
        })
    }

    getDocument(id: string): Form {
        var baseForm = this.localStorage.loadDocument(id);
        return new Form(baseForm.fields);
    }

    removeDocumentId(doc: string) {
        document.getElementById(doc).addEventListener('click', function () {
            localStorage.removeItem(doc);
            window.location.reload();
        });
    }
}