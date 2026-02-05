# Naataanii Tsosie - Time Ninja

[My Notes](notes.md)

My application is a time tracking sheet for small business. Why over pay for expensive software when you can have a simple web app that does the same thing for a super low cost!

> [!NOTE]
> This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
> If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Time tracking for small businesses should not be complicated. Time Ninja makes it simple to track employee hours so you can focus on your business. With an easy-to-use interface, employees can clock in and out, and managers can review timesheets.

### Design

![Design image](./design/design.svg)

### Key features

- Real-time clock-in and clock-out for employees
- Manager dashboard for reviewing timesheets
- Exportable reports for payroll processing
- Time history tracking for employees

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - HTML will be used to structure the content of the web application, including the layout of pages, forms for user input, and navigation elements.
- **CSS** - CSS will be used to style the web application, customizing to the ninja theme.
- **React** - React will be used to build the user interface, allowing for dynamic updates and a responsive experience.
- **Service** - Be the layer between the frontend and the database, handling API requests and user authentication.
- **DB/Login** - Track user data, including login credentials, work hours, and work location.
- **WebSocket** - Enable real-time updates to see "who is on the clock". This will allow users to see live data without needing to refresh the page and allowing managers to make informed work decisions quickly.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://startup.tsosiebyu.org).

I deployed the startup server to EC2 and set up a custom domain name using Route 53. The server is accessible at the provided link.

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Give HTML pages that represent the ability to login, punch time, view history, and show help information.
- [x] **Proper HTML element usage** - I used form, section, head, header, html, a, div, and other tags properly.
- [x] **Links** - The login page automatically links to the punch page. Admin page links to the history page. A nav bar is present on every page. Image links to index.html.
- [x] **Text** - Descriptive text and a help page has been added. Users should easily be able to use the app.
- [x] **3rd party API placeholder** - In the footer, a Chuck Norris joke will be retrieved from a 3rd party api. See: https://api.chucknorris.io/
- [x] **Images** - The application logo is a png image that links to the home page!
- [x] **Login placeholder** - I added a login dialog on the home page.
- [x] **DB data placeholder** - Input box and submit button for login. The clock in/out history page is data pulled from the database. Admin data is pulled from database.
- [x] **WebSocket placeholder** - On the Admin Page, live updates to see "who is on the clock".

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Visually appealing colors and layout. No overflowing elements.** - The app uses flex box and works will all window sizes
- [x] **Use of a CSS framework** - Using Tailwind CSS. Importe on every html file.
- [x] **All visual elements styled using CSS** - In particular, I used Tailwind CSS with classes on my HTML.
- [x] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [x] **Use of a imported font** - Impored "NinjaNaruto". Added files to server.
- [ ] **Use of different types of selectors including element, class, ID, and pseudo selectors** - Element to apply "NinjaNaruto Font", <need more> and pseudo to highlight over nav hover.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
