import { html, css, LitElement, unsafeCSS } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { property } from 'lit/decorators.js';
import { ActionButton } from './action-button.js';
import { NewBook } from './new-book.js';
import { BookViewer } from './book-viewer.js';
import { Book } from './book.js';
import bg from './bg.jpg';


export default class Bookshelf extends ScopedElementsMixin(LitElement) {
    static get scopedElements() {
        return {
            'x-book': BookViewer,
            'new-book': NewBook,
            'action-button': ActionButton,
        };
    };

    static styles = css`
    :host {
        display: flex;
        flex-wrap: wrap;
        background: #552a0a;
        background-image: url('${unsafeCSS(bg)}');
        border: 8px solid rgb(119 63 21);
        box-shadow: rgb(0 0 0) 0px 0px 25px -4px inset;
        align-items: flex-end;
    }

    :host > div, new-book {
        border-bottom: 8px solid rgb(119 63 21);
        min-height: 180px;
        display: flex;
        align-items: flex-end;
    }
    :host > div {
        flex: 1;
    }
  `;

    @property() src: string = "";

    @property() editable: boolean = false;

    @property() private _editingEnabled: boolean = false;

    @property() private _booksData: Book[] = [];

    resolve(path: string) {
        const base = new URL(this.src, window.location.href).href;
        return new URL(path, base).href;
    }

    async firstUpdated() {
        const getDate = (book:Book) => {
            for (const key of ["dateRead", "dateAdded", "yearPublished"] as Array<keyof Book>) {
                if (book[key]) {
                    return new Date(book[key]);
                }
            }
            return new Date('1970');
        }
        this._editingEnabled = await this.checkEditingFeature();
        const response = await fetch(this.src);
        let booksJson: Book[] = await response.json();
        booksJson = booksJson.map((book) => ({
            ...book,
            cover: this.resolve(book.cover),
            fullSizeCover: this.resolve(book.fullSizeCover),
        }));
        this._booksData = booksJson.sort((bookA, bookB) => getDate(bookB).getTime() - getDate(bookA).getTime());
    }

    async checkEditingFeature() {
        if (!this.editable) {
            return false;
        }

        const response = await fetch('api');
        return response.status >= 200  && response.status < 300;
    }

    deleteBook = async (book:Book):Promise<boolean> => {
        const newData = this._booksData.filter(bookT => bookT.id !== book.id);
        const response = await fetch(`api/book/${book.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });

        if (response.status >= 200 && response.status < 300) {
            this._booksData = newData;
            return true;
        } 
        return false;
    }

    updateBook = async (book:Book):Promise<boolean> => {
        let newData: Book[];
        let response: Response;

        if (book.id !== "") {
            newData = this._booksData.map(bookT => bookT.id === book.id ? book : bookT);
            response = await fetch(`api/book/${book.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });
        } else {
            newData = [...this._booksData];
            book.id = crypto.randomUUID();
            book.dateAdded = new Date().toISOString();
            newData.unshift(book);

            response = await fetch(`api/book/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });
        }

        if (response.status >= 200 && response.status < 300) {
            this._booksData = newData;
            return true;
        } 
        return false;
    }

    render() {
        if (this._editingEnabled) {
            const books = this._booksData.map((book) => 
                html`<div>
                    <x-book 
                        .book=${book} 
                        .updateBook=${this.updateBook}
                        .deleteBook=${this.deleteBook}
                    ></x-book>
                </div>`
            );
            return html`<new-book .updateBook=${this.updateBook}></new-book>${books}`;
        } 

        return this._booksData.map((book) => 
            html`<div><x-book .book=${book}></x-book></div>`
        );
    }
}
