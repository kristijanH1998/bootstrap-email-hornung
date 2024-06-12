# Email Front-end Web Application
Bootstrap Grid Project - final JavaScript project for BVT Module 1 (Introduction to HTML and CSS)

## Table of Contents
- [Description](#description)
- [How to Run the Project](#how-to-run-the-project)
- [How to Use the Project](#how-to-use-the-project)
- [Credits, Developer Log, Wireframe](#credits-developer-log-wireframe)

## Description
#### Overview and Technologies used
* Responsive email template and design made in JavaScript/HTML/CSS with Bootstrap CSS framework. 
* JS/HTML/CSS tech stack was chosen due to its popularity in front-end web development, effectiveness in making responsive and interactive user interfaces, cross-browser compatibility, and the level of community support that exists for it (in the form of online resources and tutorials)
* Bootstrap library was chosen because of its ease of use, responsiveness of components across different screen sizes, cross-browser compatibility, consistency, and mainly customizability of its existing solutions (components, design classes, etc.) 
* Visual Studio Code was used for code editing and Git for version control, since these tools are most widely used in web development for code editing and source code version tracking
* This is a front-end web email application with interactivity that allows users to browse various email message categories (in folders such as Inbox, Tagged, Drafts, etc.), write new messages with specified recipient and subject, reply to messages in each folder, toggle the vertical navigation bar, and search for messages in the search bar. All this can be done with maximum level of responsiveness to changes in screen size, and all components are vertically scrollable
* This application is entirely responsive and supports mobile device view, tablet/half screen view, and fullscreen desktop view (for PCs) 

#### Challenges faced during development
* The hardest part of making the HTML code structure was to make the template fully responsive for 3 different screen sizes using Bootstrap breakpoint classes, while at the same time maintaining functionality of toggle buttons, as well as the scrollable property of message list container and main message container
* Vertical navigation bar and its toggle property initially caused bugs on tablet and phone screen sizes, and it was particularly difficult to make extra small screen size (phone) template display only one container, be it message list container, main message container, or the vertical navigation bar as folder selection menu

#### Features to be implemented in the future
* Delete buttons on message cards to be able to delete messages in folders
* Search bar functionality - to search for messages by title
* Connecting this frontend application to backend code to arrive at a full-stack application for sending and receiving emails, and replying to received messages

#### Motivation
* I made this project to learn more about creating responsive webpages with Bootstrap, and also to improve my front-end development skills in JS/HTML/CSS

#### Things I learned
* This project taught me how to use Bootstrap breakpoint classes to make design components responsive to screens for different devices
* I also learned a lot about making user interfaces (UIs) as part of frontend development
* Coming back to the project a couple months after it was finished, I realized that I can apply DRY (Don't Repeat Yourself) principle to the script.js by replacing repetitive .onclick event listener code for each button in the vertical navigation bar (for each message folder) with a more abstract single for loop that creates a click listener for all of those buttons, and opens corresponding sections for message list and message container. This optimization reduced the script file by more than 280 lines of code.

## How to Run the Project 
1. Download and install VS Code editor [here](https://code.visualstudio.com/download)
2. Use the terminal in VS Code (Bash, PowerShell, depending on the OS) to download and install Node.js, find instructions [here](https://nodejs.org/en/download/package-manager)
3. Use VS Code 'Extensions' page to search for and install latest version of 'HTML CSS Support' dependency (CSS Intellisense for HTML)
4. Use VS Code 'Extensions' page to search for and install latest version of 'Live Server' extension (to be able to run local development server)
5. (optional) Use VS Code 'Extensions' page to search for and install latest version of 'JavaScript (ES6) code snippets'
6. Use VS Code 'Extensions' page to search for and install latest version of 'ESLint' to integrate ESLint JavaScript into your code editor
7. Follow instructions on [this](https://github.com/git-guides/install-git) link to install Git
8. Choose the location (directory) for the project repository, navigate to it with 'cd [directory-name]' terminal command and inside of it clone the project repository by running the command 'git clone https://github.com/kristijanH1998/bootstrap-email-hornung.git' in your terminal
9. Select and open 'index.html' file in the code editor, and click on 'Go Live' button at the bottom right bar in VS Code - this should open the app in your default web browser

## How to Use the Project
* When the application opens in your browser, you should see a template like this:
![start screen - home page](/screenshots/home-page-inbox.png?raw=true "Starting Page")
* Click on any button in the vertical navigation bar on the left and it will take you to various message folders, from Inbox to Trash:
![Sent folder](/screenshots/message-folder-sent.png?raw=true "'Sent' folder")
* To see more folders, click on 'More' button
* To open a modal for sending new messages, click on 'Compose'
![New Message Modal](/screenshots/compose-modal.png?raw=true "New Message Modal")
* Click on any message card in the message list section to see full contents of the message on the right:
![Message Container](/screenshots/message-card-full-message.png?raw=true "Full Message Container")
* To reply to any message and open a modal for writing response, click on 'Reply' at bottom right corner of message container on the right
* To collapse or hide the vertical navigation bar on the left, click on the hamburger menu button to the left of the search bar:
![Collapse/Hide Navigation Bar](/screenshots/navbar-collapse.png?raw=true "Collapse/Hide Navigation Bar")
* These screenshots show how the app looks like on tablet-size screens:
<p align="middle"> 
    <img src="/screenshots/tablet-screen-1.png" width="500" height="600" hspace="20" title="Tablet Screen Home">
    <img src="/screenshots/tablet-screen-2.png" width="500" height="600" hspace="20" title="Tablet Screen Message Modal">
    <img src="/screenshots/tablet-screen-3.png" width="500" height="600" hspace="20" title="Tablet Screen Navbar Hidden">
</p>