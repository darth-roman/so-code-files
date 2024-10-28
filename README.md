# SoCode: Web Dev Course : HTML

The HTML stands for `HyperText Markup Language` where:

* `Markup` language is one that is designed for defining and presenting text.
* `Hypertext` refers to links that connect web pages to one another.

The basic HTML document strucure is:

```html
    <!DOCTYPE html>
    <html>
        <head>
            <!-- metadata here -->
        </head>
        <body>
            <!-- content here -->
        </body>
    </html>
```

As seen, the document has 4 essensial elemnets:

* **`<!DOCTYPE html>`** : To tell our browser that we are using HTML version 5 **(HTML5)**
* **`html` element** : the root (top-level) element of an HTML document
* **`head` element** : **[[Go to Section](#the-head-element)]**
* **`body` element** : **[[Go to Section](#the-body-element)]**

### The `head` element

This element contains machine-readable information (metadata) about the document. There can be only one `head` element in the document.

The `head` element can have these elements inside of it:

* `<meta>`: They give extra data/information about the document, data and information that cannot be delivered by the other tags
* `<title>`: Gives the document a title (seen in the tab name of the browser)

### The `body` element

element represents the content of an HTML document. There can be only one `body` element in the document.

The `head` element can have these elements inside of it: (ones we did so far)

* **heading** (`<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>`)
* **paragraphs** (`<p>`)
* **lists** (`<ol>` and `<ul>`)
* **media elements** (`<audio>`, `<video>`, `<img>`)
* Other elements ... (we will go through them with time :fire: 👀)

So, an example of a valid HTML5 doc would be like:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Page</title>
    </head>
    <body>
        <h1>Hello to my page</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Molestias delectus ipsam, tenetur doloremque magni sint.
            Repudiandae at corrupti quibusdam tempora saepe assumenda veritatis aliquid facilis! 
            Vero eveniet obcaecati ullam velit?
        </p>

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>

        <img src="img/my_image.png" alt="This is a small desc for my image">
    </body>
</html>
```

> TIP:
As you can seem we are dealing with levels of content, so for a betterorganisation for our code, we will use  ==indentation== to express moving from a level to another.

> **Indentation: the spaces or tabs at the beginning of a line of code**

![Levels in HTML](md-images/html%20(20241028053539).png "Levels and indentations in HTML")

#### Our Projects List:
* [Basic HTML](projects/basic-html/index.html)

> This list will be enriched more as we move with the course