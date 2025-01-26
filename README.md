# Online Library System

## GitHub Repository
[GitHub Repository Link](https://github.com/am7876388/Library-Management-System)

## Objective
The Online Library System is a React-based web application that provides users with features to browse, add, and view detailed information about books in various categories.

---

## Features

### 1. Home Page
- A landing page with:
  - Welcome message.
  - List of book categories (e.g., Fiction, Non-Fiction, Sci-Fi, etc.).
  - Popular books list with links to view more details.
- A navigation bar with links to "Home", "Browse Books", and "Add Book".

### 2. Browse Books Page
- Displays a list of books filtered by category (using dummy data).
- Implements dynamic routing to filter books by category (e.g., `/books/:category`).
- Each book includes a "View Details" link, routing to the **Book Details** page.
- Includes a search bar to filter books by title or author.

### 3. Book Details Page
- Displays detailed information about a selected book using dynamic routes.
- Shows book title, author, description, and rating.
- Includes a "Back to Browse" button to return to the Browse Books page.

### 4. Add Book Page
- A form to add a new book to the library.
- Uses **Redux** to manage the state of the books list.
- Redirects the user to the Browse Books page after successfully adding a book.
- Displays the newly added book.
- Includes form validation to ensure all fields are filled correctly.

### 5. 404 Page
- A "Page Not Found" route for undefined paths.
- Includes a link back to the Home page.

---

## How to Run the Application

### 1. Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/am7876388/Online-Library-System.git
cd Online-Library-System
```

### 3. Install Dependencies
Install the required dependencies:
```bash
npm install
# or
yarn install
```

### 4. Start the Development Server
Run the application in development mode:
```bash
npm run dev
# or
yarn dev
```

The application will be accessible at `http://localhost:5173` by default.

### 5. Build for Production
To create a production-ready build, run:
```bash
npm run build
# or
yarn build
```
The production build will be located in the `dist` folder.

---

## Submission
- Ensure all features are implemented as described.
- Submit the link to your GitHub repository: [GitHub Repository Link](https://github.com/am7876388/Online-Library-System).
