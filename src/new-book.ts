import { html,HTMLTemplateResult, LitElement } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { property } from 'lit/decorators.js';
import { AddButton } from './add-button.js';
import { BookHandler } from './book.js';
import { BookDetails } from './book-details.js';

type BookViewerModes = "closed" | "open";

export class NewBook extends ScopedElementsMixin(LitElement) {
    static get scopedElements() {
        return {
            'add-button': AddButton,
            'book-details': BookDetails,
        };
    };

    @property() updateBook: BookHandler | null = null;

    @property() private mode: BookViewerModes = "closed";

    render() {
        const setMode = (mode:BookViewerModes) => (e:MouseEvent) => {
            this.mode = mode; 
            e?.stopPropagation(); 
       }

        let details: HTMLTemplateResult | null = null;
        if (this.mode === "open") {
            details = html`<book-details 
                .close=${setMode("closed")}
                .editing=${true}
                .updateBook=${this.updateBook}
            ></book-details>`; 
        }

        return html`<add-button @click=${setMode("open")}></add-button>${details}`;
    }
}
