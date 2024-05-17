# Introduction
Simple Example to understand how HTML Forms works with Express

**Objective**: Create a server that displays a form to the client, to see the differences when submitting data with GET/POST methods. 

## Folder Structure 
```
.
├── public
│   ├── index.html
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```
## HTML Form
```
<form>
    <label for="fname">FNAME: </label> 
    <input type="text" id="fname" name="fname"> <br> 
    <label for="lname">LNAME:</label>
    <input type="text" name="lname" id="lname"> <br>
    <button type="submit">SEND</button>
</form>
```
Notes:

> The *for* attribute of the <*label*> tag should be equal to the id attribute of the <*input*> element to bind them together.

- <label **for="X"**> 
- <input type="text" **id="X"**>


## Handle Forms in Express

> The HTML form needs an *action* attribute that points to the server-side route, where the form data will be submitted. If is not set (or set no an empty string), then the form will be submitted back to the current page URL.

### GET Forms  (*`<form action="", method='GET'> ... </form>`*):
The form data is included in the URL as a query string:
```
http://localhost:3000/?fname=john&lname=doe
```

### POST Forms (*`<form action="", method='POST'> ... </form>`*):
The form data is included in the request body:
```
{"fname":"john","lname":"doe"}
```

### Form Data
> Notice that the *name* attribute of the <*input*> tag is required for every input element in the form that you want to submit (GET or POST)

- <input type="text" **name="fname"**>
     - GET FORM: ``http://localhost:3000/?fname=john``
     - POST FORM: ``{"fname":"john"}``




