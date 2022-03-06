# Overview

This web app is an app that creates and maintains music playlists made by the user. It uses login and authentication to create a session where a user can add songs to their personal playlists. Users can also display favorite songs to those who are not logged in. Here are the steps to run the web app:

1. Clone the git repository into code editor
2. Run "npm install" in the terminal
3. After the installation, run "npm start"
4. Go to your browser and enter: "localhost:5050" to run the server

Thir app is to exercise and refine my skills and knowledge in Node. 

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}
Watch the link below to review my demo:

[Software Demo Video](https://youtu.be/ANdgoDx4fWs)

# Web Pages

The main app.js file calls the routes folder which handles the controllers in the controllers folder. These controllers hold functions that render the web pages that have EJS injected into HTML code.

## Playlist Folder
The playlist.ejs page generates a list of songs that users have added.

## Auth Folder
The login.ejs page loads a form where the user can login.
The signup.ejs file loads a form where the user can create an account.

# Development Environment

{Describe the tools that you used to develop the software}
* Visual Studio Code
* Google Chrome Browser

{Describe the programming language that you used and any libraries.}
* node.js
* html
* css
* ejs
* node_modules
* express, express-session
* body-parser
* mongoose
* connect-mongodb-session
* csurf
* flash

# Useful Websites

* [Academind Videos Course](https://pro.academind.com/courses/enrolled/767386)

# Future Work

* Implement "Add Song to Playlist" feature
* Implement "Publish Playlist" feature
* Implement Spotify API