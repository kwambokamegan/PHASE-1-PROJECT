# PHASE-1-PROJECT

# Overview 

For this phase 1 project, you're going build a Single Page Application (SPA). Building this application will be challenging because it will integrate everything you've learned up to this point. Your frontend will be built with HTML, CSS, and JavaScript and will communicate with a public API. The learning goals are 

* Integrate JavaScript and an external API
* Debug issues in small- to medium-sized project

## Introduction 

I begun by cloning my git hub repository (https://github.com/kwambokamegan/PHASE-1-PROJECT)

I then opened it in my vs code by running "cd PHASE-1-PROJECT"

I created the necessary files and begun to create data in my db.json file.

I then ran "json-server --watch db.json" to get the data in my server.

I made sure the data in the db.json was displayed in the server.

I used (`http://localhost:3000/dresses`) to access my data.


# HAPPILY EVER AFTER DRESSES

This is a website that showcases a collection of wedding dresses available for purchase. Users can see the dresses available, select the one that appeals to them, say their size and even submit any alteration requests they would like.

The files included are:

1.index,html file
2.css/style.css
3.app.js file
4.db.json file

## index.html file

### Description 
The index.html contains the general structure of the web page. It contains a header , main section and footer that give the structure of the page.

### Content

Onto the html structure: 

1. Head : The html is first linked with the css so that one can be able to style the page

2. Body :

* Header: Contains the header with the title (HAPPILY EVER AFTER DRESSES) .

* Main:

1. Business Description:It contains a little information about the business and welcomes them to the website.

2. Welcome Image: It is a welcoming gif designed to show some dresses to keep the client occupied.

3. Dress List and Display: Displays a list of dresses which upon being clicked , the shopper will be able to see the particular dress that has been clicked.

4.Alterations Section: A user is able to input their dress size and any alterations they would like.

5. Purchase Button: Enables users to purchase selected dresses and they get a message that they have successfully purchased the dress.

6. Footer: Concludes the webpage with contact information ,wedding planning services  and payment options available.  

7. Script: LInks the html to a js file that handles user interactions.

## css / style.css

### Description

The style.css file is used to style the web page and ensures that it is visually appealing to the user hence enhancing user experience.

### Code 

1. Fonts
* Google Fonts: Google fonts have een imported to create unique fonts to enhance appeal.

2. Body Styling
* font-family:
* line-height: Ensures spacing between lines of text.
* background-color: Sets the background color of the webpage

3. Header:  
* background-color: background color of the header 
* color: text color 

4. Container

* display: Uses flexbox to arrange items.
* justify-content: Ensures space-between items 

5. Dress List
* Dress List (#dress-list, .dress-item): Provides styling for the dress list and individual dress items 
* Uses Grid Layout (display: grid) for responsive and flexible layout of dress items.

6. Business Description Box
* Sets background color, padding, border-radius, and box shadow .

7. Footer Styling
* display: Uses Flexbox  for arranging items.
* justify-content: Ensures space-between items.
* Sets background color, padding, and text color for the footer.

8. Cart Message

* Uses Flexbox and positioning to ensure the message appears at the bottom center of the screen.
* Sets background color, text color, padding, and border-radius for a notification-style message.


## app.js file

### description

The app.js is responsible for user interactivity on the web page that should lead to lead to a seamless user experience.

## Code 

* Initialization: Starts after the DOM has fully loaded so that all elements will be ready.

* Fetching  Data: Retrieves dress information asynchronously from the server (http://localhost:3000/dresses) and  potential network errors are handled and the user receives any necessary feedback.

* Rendering Dress List: Creates HTML elements to display fetched dress items, allowing users to select their preferred dress and be able to see it individually.

* Dress Selection and Display: Updates the details displayed  when a dress is selected, enabling purchase and alteration options so that a user is able to handle a specific dress.

* Purchase and Alterations Handling: Enables one to submit the alternation requests and the purchase button and get an alert .

* Input Validation and Feedback: Limits text input length in the alterations text area .

* Display Messages: Controls the visibility and content of user messages.

The app.js fetches data from the link ahd is able to get it to be displayed in the web page.

It works assynchronously hence the code continues to run as long running tasks like fetching data from the server continue.

### Author

Megan Kwamboka Nyakina

### Date

18/07/2024

### Git hub link
(`https://github.com/kwambokamegan/PHASE-1-PROJECT`)

### Vercel link

[Link]()






















