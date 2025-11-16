# BITXBASE - University Event Planner

A modern, responsive web application designed to streamline event management within a university community. It provides a seamless platform for students and organizers to create, discover, and register for campus events.

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 🌟 Overview

BITXBASE is built to enhance campus life by making event organization and participation effortless. It features a clean, intuitive interface that works beautifully on both desktop and mobile devices. With subtle animations and a consistent, modern theme, it offers a delightful user experience.


## ✨ Key Features

-   **Responsive Design:** A beautiful and intuitive UI that works flawlessly on both desktop and mobile devices.
-   **Dynamic Routing:** Utilizes React Router for a smooth, fast, single-page application experience.
-   **Event Creation:** Organizers can easily add new events with detailed information, including title, description, date, location, and a promotional image.
-   **Event Discovery:** Students can browse a list of upcoming events, complete with all necessary details.
-   **Seamless Registration:** A simple and straightforward form for students to register for events they are interested in.
-   **Modern UI/UX:** Features subtle scroll animations (via AOS), smooth transitions, and a consistent theme that enhances user experience.
-   **Confirmation Pages:** Provides clear confirmation for both event creation and registration, improving user feedback.

---

## 🛠️ Tech Stack

-   **Frontend:** [React.js](https://reactjs.org/)
-   **Bundler:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Routing:** [React Router DOM](https://reactrouter.com/)
-   **Animations:** [Animate On Scroll (AOS)](https://michalsnik.github.io/aos/)

---

## 🚀 Local Development

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

-   [Node.js](https://nodejs.org/) (v18.x or later recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/MaduJoseph101/EventPlanner.git
    cd EventPlanner
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` (or the port specified in your console).

### Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run lint`: Lints the source code using ESLint.
-   `npm run preview`: Serves the production build locally.

---
## Credentials

**Note:** This project is currently a front-end demonstration and does not include a backend server or database. The credentials below are hardcoded for testing and demonstration purposes, allowing you to explore the application's features from different user roles.

You can use the following dummy credentials to test the application:

### Student Login

-   **Username:** `Student`
-   **Password:** `1234`

### Admin Login

-   **Username:** `Admin`
-   **Password:** `1234`

---

## 📂 Project Structure

The project is organized with a clear and scalable structure:

```
src/
├── App.jsx             # Main application component with routing
├── Header.jsx          # Shared header component
├── Homepage.jsx        # Landing page
├── About.jsx           # About page with testimonials and gallery
├── Register.jsx        # Page to display and select events for registration
├── AddEvent.jsx        # Form for creating a new event
├── Form.jsx            # Registration form for a selected event
├── *.css               # Global styles and Tailwind CSS setup
└── main.jsx            # Entry point of the React application
```

---

## ✍️ Author

**Madu Joseph**

-   **GitHub:** @MaduJoseph101
-   **LinkedIn:** Madu Joseph
-   **Instagram:** @madujoseph101

---
Feel free to contribute to this project by submitting issues or pull requests.