import { CheckboxField } from "./checkbox-field";
import { DateField } from "./date-field";
import { DocumentList } from "./document-list";
import { EmailField } from "./email-field";
import { Form } from "./form";
import { InputField } from "./input-field";
import { Router } from "./router";
import { SelectField } from "./select-field";
import { TextAreaField } from "./text-area-field";

export class App {
    constructor() {

        if (window.localStorage.getItem('docType') === 'list') {
            document.addEventListener('DOMContentLoaded', function () {

                const documentList = new DocumentList();


                document.getElementById('document-list').innerHTML += documentList.render();
                documentList.setupDeleteActions();
            });
        }
        else if (window.localStorage.getItem('docType') === 'edit') {
            const docId = Router.getParam('id');
            const documentList = new DocumentList();
            const editForm = documentList.getDocument(docId);
            
            document.getElementById('main').innerHTML += editForm.render();

            document.getElementById('saveButton').addEventListener('click', function () {
                editForm.update(docId);
            })

            document.getElementById('backButton').addEventListener('click', function () {
                window.location.href = "index.html";
            })
        }
        else {
            document.addEventListener('DOMContentLoaded', function () {

                const nameInput = new InputField("name", "Imię", "");
                const lastMameInput = new InputField("lastname", "Nazwisko", "");


                const text = new TextAreaField("kontakt", "napisz do nas", "");

                const date = new DateField("data-urodzenia", "Data Urodzenia", "");

                const email = new EmailField("email", "Podaj e-mail", "");

                const studiesSelect = new SelectField("studies", "Wybrany kierunek studiów", "Informatyka i Ekonometria");

                const checkbox = new CheckboxField("e-learning", "Czy preferujesz e-learning?", "tak")

                const textarea = new TextAreaField('extras', "Uwagi", "");

                const fields = [];
                fields.push(nameInput);
                fields.push(lastMameInput);
                fields.push(email);
                fields.push(studiesSelect);
                fields.push(checkbox);
                fields.push(textarea);

                const form = new Form(fields);

                document.getElementById('main').innerHTML += form.render();

                document.getElementById('saveButton').addEventListener('click', function () {
                    form.save();
                })

                document.getElementById('backButton').addEventListener('click', function () {
                    window.location.href = "index.html";
                })
            });
        }
    }
}