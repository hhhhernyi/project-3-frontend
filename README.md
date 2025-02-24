# Project: Client and Product Management App

## Description

The **Client and Product Management App** is a React-based web application designed to help users manage clients, products, and their profiles. The app provides features for adding, editing, and viewing client information, managing products by category, and tracking individual client-product relationships. It also includes user authentication to ensure secure access to the application.

---

## User Story

- As a user, I want to sign in or sign up to access the application.
- As a user, I want to view and manage a list of clients.
- As a user, I want to add, edit, and view detailed information about individual clients.
- As a user, I want to add products to a specific client.
- As a user, I want to view products by category.
- As a user, I want to manage my profile information.

---

## Features

1. **Authentication**:
   - Sign in and sign up functionality for secure access.

2. **Client Management**:
   - View a list of clients.
   - Add new clients using a form.
   - View detailed information about a specific client.
   - Edit client information.
   - Add products to a specific client.

3. **Product Management**:
   - View products by category.
   - View products within a specific category.

4. **Profile Management**:
   - View and manage user profile information.

5. **Navigation**:
   - A navigation system using React Router for seamless access to all features.

6. **404 Page**:
   - A custom 404 page for undefined routes.

---

## Technologies Used

- **Frontend**:
  - React (with React Router for navigation)
  - CSS for styling

- **State Management**:
  - React's `useContext` for managing user authentication state.

- **Backend**:
  - (Optional: Add backend technologies if applicable)

---

## Folder Structure

```
client-product-management/
├── public/
├── src/
│   ├── components/
│   │   ├── ClientForm.jsx
│   ├── pages/
│   │   ├── SignUp.jsx
│   │   ├── HomePage.jsx
│   │   ├── ClientList.jsx
│   │   ├── IndividualClientInfo.jsx
│   │   ├── EditClientPage.jsx
│   │   ├── AddNewProductsPage.jsx
│   │   ├── ProductList.jsx
│   │   ├── CategoryProductCard.jsx
│   │   ├── Profile.jsx
│   │   ├── SignInPage.jsx
│   │   ├── PageNotFound.jsx
│   ├── Contexts/
│   │   ├── UserContext.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
├── .env
├── package.json
├── README.md
```

---

## Usage

1. **Sign In/Sign Up**:
   - Navigate to `/` to sign in or `/sign-up` to create a new account.

2. **Client Management**:
   - Go to `/clients` to view the client list.
   - Navigate to `/clients/new` to add a new client.
   - Visit `/clients/:clientId` to view detailed information about a specific client.
   - Go to `/clients/:clientId/edit` to edit client information.
   - Navigate to `/clients/:clientId/product` to add products to a specific client.

3. **Product Management**:
   - Visit `/products/category` to view products by category.
   - Go to `/products/category/:categoryId` to view products within a specific category.

4. **Profile Management**:
   - Navigate to `/profile` to view and manage your profile.

5. **404 Page**:
   - Any undefined route will redirect to the 404 page.

---

## Pseudocode

### State Management

```javascript
const { user } = useContext(UserContext); // Manages user authentication state
```

### Conditional Routing

```javascript
{user ? (
  <Routes>
    <Route path="/" element={<SignInPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/clients" element={<ClientList />} />
    <Route path="/clients/new" element={<ClientForm />} />
    <Route path="/clients/:clientId" element={<IndividualClientInfo />} />
    <Route path="/clients/:clientId/edit" element={<EditClientPage />} />
    <Route path="/clients/:clientId/product" element={<AddNewProductsPage />} />
    <Route path="/products/category" element={<ProductList />} />
    <Route path="/products/category/:categoryId" element={<CategoryProductCard />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
) : (
  <Routes>
    <Route path="/" element={<SignInPage />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
)}
```

---

## Key Learnings

### State Management
- Proper state management is crucial for handling user authentication and conditional rendering of routes. Using `useContext` simplifies sharing state across components.

### Naming Conventions
- Clear and consistent naming conventions for components, variables, and functions improve code readability and maintainability.

### Data Flow
- Understanding how data flows between components (e.g., parent to child via props) is essential for building scalable applications.

---

## Planning Future Enhancements

1. **Backend Integration**:
   - Add a backend server to persist client and product data.

2. **Advanced Search**:
   - Implement advanced search and filtering for clients and products.

3. **User Roles**:
   - Introduce user roles (e.g., admin, user) with different access levels.

4. **Analytics Dashboard**:
   - Add a dashboard to visualize client and product metrics.

---

## Why This App?

As a business professional, managing clients and products efficiently is critical. This app provides a centralized platform to streamline client and product management, saving time and improving productivity.

---

Enjoy managing your clients and products! 🚀
``` 

This `README.md` file follows a similar format to the **Stock Portfolio Tracker App** and includes all the essential details about your **Client and Product Management App**. It provides a clear overview of the project, its features, technologies used, folder structure, usage instructions, and future enhancements.



# Project 3 front end docs

## Git version control
* need to use git branch <branch name> to create your own working branch
* git switch <branch name> to switch to your working branch
* start to work and  make changes on your own branch
* once you have completed work on your own branch, use git add . and git commit -m "message" to your own branch
* use git switch main to go back to main branch
* once back on main branch, git pull to get the latest copy of the main branch
* git merge --squash <branch name> to merge whatever you are working on with the main branch
* settle the conflict by accepting incoming or current copy
* once merge, check git status
* git add . , git commit -m "message" and then git push

