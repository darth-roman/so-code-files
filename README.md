# SoCode: Web Dev Course

## Content

* **[HTML](#html):**
  * [Basic HTML](#html-intro-and-basics)
  * [Forms](#forms) 🆕
  * [`<div>` Element](#div-element) 🆕
  * [Parent-Child Relationship](#parent-child-relationship) 🆕
  * [`class` attriue](#class-attribute) 🆕

### HTML intro and basics

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

#### The `head` element

This element contains machine-readable information (metadata) about the document. There can be only one `head` element in the document.

The `head` element can have these elements inside of it:

* `<meta>`: They give extra data/information about the document, data and information that cannot be delivered by the other tags
* `<title>`: Gives the document a title (seen in the tab name of the browser)

#### The `body` element

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

### Forms

The `<form>` element is a crusial element in HTML and web in general, as you allow the audience and/or clients to interact with you and your web application, collection information from their part or just receieving fan mail

```html
<form>
    <input type="text" >
    <input type="password" >
    <input type="color" >
    <input type="email" >
    <input type="checkbox" >
    <input type="submit" value="Click me">
</form>
<!--There are even more types of inputs -->
<!--Check the resources by the end of this document -->
```

### `<div> Element`

The `<div>` element works as a divider for your HTML code and parts, they can help you create components for a **cleaner**, **more organised** and **reusalble** code.

The `<div>` element can also be used to target specific elements or components or even to create new ones (as said earlier).
They are very critical elements in HTML and web dev in general and it will be the most used element to use, because their behaviour can be easily predicted and altered to your liking.
Here are some examples of using `<div>` element:

```html
<!-- In this example i am using the same thing but written diffrently -->

<!-- Navbar 0 -->
<div class="navbar">
    <div class="logo">
        <!-- Logo here -->
    </div>
    <div class="nav-list">
        <ul>
            <li>Item 0</li>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
</div>

<!-- Navbar 1 -->
<nav>
    <div class="navbar">
        <div class="logo">
        <!-- Logo here -->
        </div>
        <ul>
            <li>Item 0</li>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
</nav>

<!-- Navbar 2 -->
<nav>
    <div class="navbar">
        <div class="logo">
        <!-- Logo here -->
        </div>
        <div class="nav-list">
            <ul>
                <li>Item 0</li>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>
    </div>
</nav>

<!-- 
    * The navbars above renders/results the same in the browser
        but they differ in code organisation and grouping.
    * You (the developer) decides what is better for the display
        of the elements and the organisation of their code. 
            Or as we caall it NESTING
-->
```

### Parent-Child relationship

So, to recapulate. HTML is just a markup langauage that we use to display content on our browser.
The CSS (That we will see later in upcoming sections) power comes mainly from the ***parent-child relationship*** of the elements.
Based on a hierarchy of elements, and if we want to make it easier to see, we can see it as a tree, where `<html>` is the **root** and it has two branches, the `<head>` element and `<body>` element.
So take this HTML code as an example:
```html
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Socode School</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div>
            <p>
                This is a paragraph
                <a href="#">Oh look, a link</a>
            </p>
            <ul>
                <li>Item 0</li>
                <li>
                    <ol>
                        <li>Order 0</li>
                        <li>Order 1</li>
                        <li>Order 2</li>
                        <li>Order 3</li>
                    </ol>
                </li>
                <li>Item 2</li>
                <li>
                    Item 3
                    + <a href="#">Oh another link</a>
                </li>
            </ul>
        </div>
        <div>
            <p>
                This is a paragraph
                <a href="#">Oh look, a link</a>
            </p>
            <img src="image.png" alt="alternative" >
        </div>

    </body>
</html>
```
![Levels in HTML](md-images/Project%20(20241109092724).png "Parent-Child Tree")

### Attributes and their values
Attributes are **additional values** that **configure** the elements or **adjust their behavior** in various ways to meet the criteria the users want.
All Elements can have attributes, some of them are **obligatory** to certain elements to have  in order to work as expected or even function correctly and other are **optional** (Depending on your element).

#### `class` attribute
Classes allow CSS and JavaScript to select and access specific elements via the class selectors
The class attribute is a list of class values separated by white space (`" "`)

Web developers are encouraged to use names that describe the semantic purpose of the element.

Examples:
```html
<!-- no value -->
<div class="">
    <!-- More HTML Here -->
</div>

<!-- 1 class -->
<div class="class0">
    <!-- More HTML Here -->
</div>

<div class="flex-container">
    <!-- More HTML Here -->
</div>

<!-- multiple classes -->
<div class="class0 class1 class2 class3">
    <!-- More HTML Here -->
</div>

<div class="flex-container padding-none margin-1 border-radius-2">
    <!-- More HTML Here -->
</div>
```


#### Our Projects List:

* [Basic HTML](projects/basic-html/index.html)
* [Forms Project](projects/forms-html) 🆕
* [Div Demo](projects/div-demo/index.html) 🆕
* [Personal Page Example](projects/personal-page) 🆕
* [Todo JS DOM](projects/todo-js-dom/) 🆕

> This list will be enriched more as we move with the course

# Resources 🆕

* ###### HTML Resources

    * [Input types list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
