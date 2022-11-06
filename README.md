# Bookshelf

I tracked my book collection on GoodReads until they deprecated their APIs. 

Since I have a nice 
bookshelf on my [personal homepage](https://csokavar.hu/konyvespolc/) showcasing the books I got in touch with, 
I needed a way to programmatically process them.

I started with a simple json + covers repo. Later turned it into a proper editor with [Lit html](https://lit.dev/).

Today it's an analgam of a [static website](https://bookshelf.csokavar.hu) that I host on GitHub Pages and
an express.js app that I use locally to update my collection.
 
I simply run it as:

```
> npm install
> node start
```

I do my changes in a browser at http://localhost:8000 then push to GitHub. 
The site is refreshed by a GitHub action in a few seconds, and that's all, it's live.

I can show the latest bookshelf in my main website with including a script and
inserting a `my-bookshelf` element into the html:

```

<script type="module" src="https://bookshelf.csokavar.hu/bookshelf.js"></script>
<my-bookshelf src="https://bookshelf.csokavar.hu/books.json" />

```

This is a good way to separate the book collection from the main website and
maintain an integration between the two at the same time.


```
      _.--._  _.--._
,-=.-":;:;:;\’:;:;:;"-._
\\\:;:;:;:;:;\:;:;:;:;:;\
 \\\:;:;:;:;:;\:;:;:;:;:;\
  \\\:;:;:;:;:;\:;:;:;:;:;\
   \\\:;:;:;:;:;\:;::;:;:;:\
    \\\;:;::;:;:;\:;:;:;::;:\
     \\\;;:;::--::\:_:--:_;:;\
      \\\_.-"      :     : "-.\
       \`_..--""--.;.--""--.._\
```
