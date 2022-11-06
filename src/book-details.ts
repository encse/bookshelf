import { html, css, LitElement } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { property } from 'lit/decorators.js';
import { ActionButton } from './action-button.js';
import { Book, BookHandler, emptyBook } from './book.js';

export class BookDetails extends ScopedElementsMixin(LitElement) {
    static get scopedElements() {
        return {
            'action-button': ActionButton,
        };
    }

    @property() book: Book = emptyBook();

    @property() updateBook: BookHandler | null = null;

    @property() close: (() => void) = () => {};

    @property() editing: boolean = false;


    static styles = css`
        .wrap {
            position: fixed;
            z-index: 1;
            inset: 0px;
            display: flex;
            border: 0px;
            justify-content: center;
        }

        .details {
            background: white;
            position: relative;
            color: black;
            line-height: 1.4;
            padding: 32px;
            width: 600px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            overflow: auto;
        }

        .info {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
        }

        .cover {
            box-shadow: 
                -1px -1px #444, 
                -1px 1px #444, 
                1px 1px #444, 
                2px 1px #eee, 
                3px 1px #444, 
                4px 1px #eee,
                5px 1px #444;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            display: grid;
            margin: 0 auto;
        }
        
        .cover img {
            width: 200px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            grid-column: 1;
            grid-row: 1;
        }

        .bookMeta {
            width: 300px;
        }
        
        .bookMeta div {
            display: flex;
        }

        .title {
            font-weight: 800;
        }
        .author, .additionalAuthors {
            font-style: italic;
        }

        .review {
            width: 100%;
            white-space: pre-wrap;
            flex-grow: 1;
        }

        input, textarea {
            font: inherit;
            border: none;
            width: 100%;
            resize: none;
            background: #f7f7f7;
            margin:0;
            padding:0;
            display: flex;
        }
        
        textarea {
            height: 100%;
        }

        input:focus, textarea:focus {
            outline-offset: 0px;
            outline: none;
        }

    `;

    bookFromInput(): Book {
        return {
            ...this.book,
            title: (this as any).shadowRoot.getElementById('title').value,
            author: (this as any).shadowRoot.getElementById('author').value,
            additionalAuthors: (this as any).shadowRoot.getElementById('additionalAuthors').value,
            publisher: (this as any).shadowRoot.getElementById('publisher').value,
            yearPublished: (this as any).shadowRoot.getElementById('yearPublished').value,
            review: (this as any).shadowRoot.getElementById('review').value,
            heightCm: (this as any).shadowRoot.getElementById('heightCm').value,
        }
    }

    save = async () => {
        if (!this.updateBook) {
            return;
        }

        const success = await this.updateBook(this.bookFromInput())
        if (success) {
            this.close();
        }
    }

    coverClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = "image/png, image/gif, image/jpeg";
        input.click();
        input.onchange = () => {
            if (FileReader != null && input.files != null && input.files.length > 0) {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    if (typeof fileReader.result !== 'string') {
                        return;
                    }

                    const img = document.createElement("img");
                    img.onload = () => {
                        const canvas = document.createElement("canvas");
                        canvas.width = img.width;
                        canvas.height = img.height;

                        const ctx = canvas.getContext("2d");
                        if (ctx == null) {
                            return;
                        }

                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                        this.book = this.bookFromInput();
                        this.book.fullSizeCover = canvas.toDataURL('image/jpeg');
                        if (canvas.width > canvas.height) {
                            canvas.width = 150 * canvas.width / canvas.height;
                            canvas.height = 150;
                        } else {
                            canvas.height = 150 * canvas.height / canvas.width;
                            canvas.width = 150;
                        }
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        this.book.cover = canvas.toDataURL('image/jpeg');
                    }
                    
                    img.src = fileReader.result;
                }
                fileReader.readAsDataURL(input.files[0]);
            }
        };
    }

    renderEditMode() {
        return html`
            <div class="info">
                <div class="cover">
                    <img src=${this.book.fullSizeCover} @click=${this.coverClick}/>
                </div>
                <div class="bookMeta">
                    <div class="title"><textarea id="title" placeholder="title">${this.book.title}</textarea></div>
                    <div class="author"><input id="author" placeholder="author"  .value=${this.book.author} /></div>
                    <div class="additionalAuthors"><input id="additionalAuthors" placeholder="authors"  value=${this.book.additionalAuthors} /></div>
                    <div class="publisher"><input id="publisher" placeholder="publisher"  value=${this.book.publisher} /></div>
                    <div class="yearPublished"><input id="yearPublished" placeholder="year of publish"  value=${this.book.yearPublished} /></div>
                    <div class="heightCm"><input id="heightCm" placeholder="height (cm)"  value=${this.book.heightCm} /></div>
                </div>
            </div>
            <div class="review"><textarea placeholder="My review" id="review">${this.book.review}</textarea></div>
            <div class="actions">
                <action-button @click=${this.save}>OK</action-button>
                <action-button @click=${this.close}>Mégsem</action-button>
            </div>
        `
    }

    renderDisplayMode() {
        return html`
            <div class="info" >
                <div class="cover">
                <img src=${this.book.cover}/>
                <img src=${this.book.fullSizeCover} />
                </div>
                <div class="bookMeta">
                    <div class="title">${this.book.title}</div>
                    <div class="author">${this.book.author}</div>
                    <div class="additionalAuthors">${this.book.additionalAuthors}</div>
                    <div class="publisher">${this.book.publisher}</div>
                    <div class="yearPublished">${this.book.yearPublished}</div>
                </div>
            </div>
            <div class="review">${this.book.review}</div>
        `;
    }

    render() {
        return html`
            <div class="wrap" @click=${this.editing ? null : this.close}>
                <div class="details">
                    ${this.editing ? this.renderEditMode() : this.renderDisplayMode()}
                </div>
            </div>
        `;
    }
}

