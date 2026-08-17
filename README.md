Wanderlist

Wanderlist is a travel discovery web application built to showcase tourist destinations that we researched and compiled ourselves. Each listing includes a description, category, rating, opening hours, entry fee, and additional details, giving users a single place to browse and compare places worth visiting.

The project was built as a two-person effort. Both of us contributed to the codebase, the data collection, and the overall design decisions described below.

Project Idea

The goal behind Wanderlist was to move away from generic listing sites and build something where every entry is curated by hand. Instead of pulling data from an external tourism API, we researched real locations, wrote our own descriptions, and structured the information in a way that is easy to browse, search, and filter. The result is a lightweight, single-page application focused on discovery: users can look through destinations, filter by category or rating, search by name, mark places as favorites, and manage the destination list directly from the interface.

Overview

Wanderlist is a React single-page application backed by a mock REST API for data persistence during development, with local storage used to keep the user's session and changes intact between visits. The interface supports both a light and a dark theme, and every part of the UI, from the navigation bar to the destination cards, adapts to the selected theme.

Users can:

Browse destinations in a paginated grid layout
View full details for a destination, including hours, entry fee, and a longer description
Add new destinations through a guided form
Edit or remove existing destinations
Mark destinations as favorites and filter the list down to favorites only
Filter by category, filter by rating, or search by name
Sort destinations alphabetically or by rating
Switch between light and dark mode, with the preference and login state preserved across sessions
Log in through a simple authentication form, with the logged-in username reflected in the navigation bar

Features

Destination Management Full create, read, update, and delete flow for destinations. Each entry stores a name, category, rating, opening hours, entry fee, description, additional details, and an image.

Search and Filtering A dedicated search bar and filter controls let users narrow the destination list by category, by minimum rating, or by free text search on the destination name. A separate view surfaces favorited destinations only.

Sorting Destinations can be sorted alphabetically or ranked by rating, independent of the active filter.

Pagination The destination grid is paginated to keep the layout consistent regardless of how many destinations are in the list, rather than rendering every result on a single long page.

Favorites Users can mark or unmark any destination as a favorite from its detail page. Favorited destinations persist between sessions and can be filtered into their own view.

Theming A light and dark mode toggle is available from the navigation bar. Both modes were designed with a consistent color palette across every component, including forms, dialogs, cards, and pagination controls.

Notifications Every state-changing action (adding, editing, or removing a destination, toggling a favorite, or switching theme) triggers a snackbar notification, giving the user immediate feedback that the action was registered.

Persistence Destinations, favorites, theme preference, and the logged-in username are stored in the browser's local storage. This means a user's changes and preferences survive a page refresh without needing a backend to persist them.

Authentication A login screen gates access to the destination list. Once logged in, the username is displayed in the navigation bar for the duration of the session.

Folder structure

src/Home/HomePage/ — main destination grid, search bar, filters, and navigation
src/Home/CardDetails/ — destination detail view, edit dialog, and delete dialog
src/Home/LoginPage/ — login form
src/contexts/ — shared application state
PlacesContext.jsx — destinations, categories, ratings, favorites, and theme
LoginFormInputContext.jsx — authentication state
SnackbarContext.jsx — global notification system
src/assets/ — static images
src/App.jsx — route definitions
src/main.jsx — application entry point

  State management Three React Context providers sit at the root of the application:

PlacesProvider holds the destination list, active filters, sort mode, theme state, and favorites. It also owns the local storage read and write logic, so any component that updates a destination, a filter, or the theme automatically persists that change without extra boilerplate.
LoginInputProvider holds the login form state and the currently logged-in username, also persisted to local storage.
SnackbarProvider exposes a single showSnackbar function through context so any component in the tree can trigger a notification without managing its own snackbar state.

Data flow On first load, the application checks local storage for an existing destination list. If none is found, it fetches the initial data set from a mock API. From that point on, every create, update, delete, or favorite action updates the shared context state, which is what the grid, the detail page, and the pagination logic all read from.

Routing Routing is handled with React Router, with three main routes: the login page, the home page with the destination grid, and a detail page for an individual destination reached by its ID.

Tech Stack
React 19
React Router
Material UI (MUI) for components such as dialogs, snackbars, and pagination
Tailwind CSS for layout and utility styling
Axios for the initial data fetch
Vite as the build tool and development server
ESLint for code linting
Browser local storage for client-side persistence

Contributors

This project was developed by two contributors who split the work by feature area.

Amr Rummaneh

Search bar and filtering logic
Favorites functionality
Add, edit, and delete flows for destinations
Color scheme and visual design across the application

Omar Emad

Category and rating filters, including sort by rating
Navigation bar and general color scheme work
Login and authentication flow
Repository

https://github.com/Pyramids-OA/Wanderlist
