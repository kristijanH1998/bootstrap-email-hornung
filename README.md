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
* Connecting this frontend application to backend code to arrive at a full-stack application for sending and receiving emails

