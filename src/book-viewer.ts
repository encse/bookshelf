import { html, css, LitElement, HTMLTemplateResult } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { property } from 'lit/decorators.js';
import { EditButton } from './edit-button.js';
import { DeleteButton } from './delete-button.js';
import { Book, BookHandler, emptyBook } from './book.js';
import { BookDetails } from './book-details.js';

type BookViewerModes = "closed" | "view" | "edit";

export class BookViewer extends ScopedElementsMixin(LitElement) {
    static get scopedElements() {
        return {
            'edit-button': EditButton,
            'delete-button': DeleteButton,
            'book-details': BookDetails,
        };
    };

    @property() book: Book = emptyBook();

    @property() updateBook: BookHandler | null = null;

    @property() deleteBook: BookHandler | null = null;

    @property() mode: BookViewerModes = "closed";

   
    static styles = css`
        :host {
            display: flex;
        }
        .book {
            display: grid;
            cursor: pointer;
        }

        div.cover {
           height: 100px;
           width: 100px;
        }
        .cover {
            display:flex;
            margin: 0 4px;
            box-shadow: 
                -0.5px -0.5px #444, 
                0.5px -0.5px #444, 
                -0.5px 0px #444, 

                0.5px 0px #444, 
                1px 0px #eee, 
                1.5px 0px #444, 
                2px 0px #eee;
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
            background: #eee;
            grid-column: 1;
            grid-row: 1;
        }

        .buttons {
            grid-column: 1;
            grid-row: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            visibility: hidden;
        }

        .book:hover .buttons {
            visibility: visible;
        }

    `;

    render() {
        const setMode = (mode:BookViewerModes) => (e:MouseEvent) => {
             this.mode = mode; 
             e?.stopPropagation(); 
        }
        const onDeleteBook = (e:MouseEvent) => {
            if (this.deleteBook && window.confirm(`Delete ${this.book.title}?`)) {
                this.deleteBook(this.book);
            }
            e?.stopPropagation(); 
        }

        let details: HTMLTemplateResult | null = null;
        if (this.mode === "view" || this.mode === "edit") {
            details = html`<book-details 
                .close=${setMode("closed")}
                .editing=${this.mode === "edit"}
                .book=${this.book}
                .updateBook=${this.updateBook}
            ></book-details>`; 
        }

        if (details != null) {
            window.document.body.style.overflow="hidden";
        } else {
            window.document.body.style.overflow="";
        }

        const height = this.book.heightCm * 5.5;

        return html`
            <div class="book" title=${this.book.title} @click="${setMode("view")}">
                ${this.book.cover ? 
                    html`<img class="cover" height=${height} src=${this.book.cover} alt=${this.book.title} loading="lazy" />`:
                    html`<div class="cover"></div>`
                }
                <div class="buttons">
                    ${this.deleteBook && html`<delete-button @click=${onDeleteBook}></delete-button>`}
                    ${this.updateBook && html`<edit-button @click=${setMode("edit")}></edit-button>`}
                </div>
            </div>
            ${details}
        `;
    }
}
