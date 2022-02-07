# Explain what is HTML
_HTML stands for Hyper Text Markup Language. It's a markup language for describing web pages and it's a set of markup tags. HTML documents contain HTML tags and plain text. The tags describe document content._

# Explain what is CSS
_CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language. Styles define the visual presentation of HTML element._

# Explain what is JavaScript
_JavaScript is a programming language that allows to implement complex features on web pages. Javascript enables creating dynamically updating content, control multimedia, animate images that engage users.Beyond websites and apps, developers can also use JavaScript to build simple web servers and develop the back-end infrastructure using Node.js._

# Explain how the browser is loading and processing a web page
_The browser loading begins when a user selects a hyperlink, submits a form, or types a URL in a browser. This first step is also known as Initial request. 
The second step is when the request reaches the application for processing. Once the connection is established, the client sends a request to the server. This message contains the address, that you are trying to reach and specifies what kind of data is needed to display contents of the page. It could also contain the values of the input fields.
The step, that follows waiting is also called HTTP response. During this phase, the server sends the data, which is needed to display the contents of the web page back to the browser.
The user's browser begins receiving response, and starts to process the Document Object Model, or DOM.
The DOM finishes loading; this point is known as DOM ready. Using the DOM, the user's browser starts to render the page.
The page finishes rendering in the user's browser and the window load event._

# Explain how events work in JavaScript
_JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. When the page loads, it is called an event. When the user clicks a button, that click too is an event. Other examples include events like pressing any key, closing a window, resizing a window, etc. You can respond to any event using an Event Handler, which is a function that’s called when an event occurs. An Event Listener attaches a responsive interface to an element, which allows that particular element to wait and “listen” for the given event to fire. There are three ways to assign events to elements - inline event handlers, event handler properties and event listeners. Bubbling and capturing are the 2 models that events use to propagate. Bubbling means that the event propagates from the item that was clicked (the child) up to all its parent tree, starting from the nearest one.Capturing is the opposite: the outer event handlers are fired before the more specific handler. By default all events bubble._

# Build a web page that match the following requirements:

  #### 1. The page should have the following components: 
        i. Header
        ii. Navigation
        iii. Content
        iv. Footer
  
  #### 2. The page should be responsive following the “mobile first” approach
  #### 3. The styles should be written using a CSS preprocessor like SASS or LESS
  #### 4. Expanded navigation on desktop that transforms into sandwich menu on tablet and mobile
  #### 5. Build a “Back” button which appears when scroll 50% of the page
        i. Write a custom JS code using Vanilla JavaScript which scrolls to the top when the “Back” button is clicked
  #### 6. Build a responsive carousel using external JS library and show:
        i. 3 items for desktop and tablet
        ii. 1 item for mobile
  #### 7. Build a “Load more” button that fetch image URL from an external API endpoint and add it to the carousel (you can use jQuery & The Cat API)