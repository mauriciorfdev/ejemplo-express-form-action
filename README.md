# Introduction
Simple Example to understand how HTML Forms works with Express

**Objective**: Create a server that displays a form to the client, to see the differences when submitting data with GET/POST methods. 

## Folder Structure 
```
.
├── public
│   ├── index.html (FORM)
├── index.js (SERVER)
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

> The HTML form needs an *action* attribute that points to the server-side route, where the form data will be submitted. If is not set (or set no an empty string), then the form will be submitted back to the current page URL:

### GET Forms:
- *`<form action="", method='GET'> ... </form>`*



### POST Forms:
- *`<form action="", method='POST'> ... </form>`*

> Notice that the *name* attribute of the <*input*> tag is required for every input element in the form that you want to submit (GET or POST). 

- <input type="text" **name="fname"**>

> **Important:** If a form element does note have a *name* attribute, it will not be submitted to the server when a user submits the form. 

### Form Data:
 - GET METHOD: The form data is included in the URL as a query string:
```
http://localhost:3000/?fname=john&lname=doe
```

 - POST METHOD: The form data is included in the request body:
```
{"fname":"john","lname":"doe"}
```
## Handle Forms in Express

Routes needs to be defined to handle the form submission, using the method and specifying the url endpoint:

```
app.get('/', (req, res)=>{
    // Render the html form 
    // Or do something with req.query
}) 
```
```
app.post('/', (req, res)=>{
    // Access form data using req.body
    // Process/Store the data
    // Return a response
})
```
> When the user presses the submit button, the browser will make a POST request to the ``/`` URL.

> Forms can also send data using GET method, but in most cases you will use POST













