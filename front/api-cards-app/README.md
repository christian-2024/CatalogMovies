# API Cards App

This project is a React application that displays a list of APIs using cards. Each card provides details about a specific API, including its name and description.

## Project Structure

- **src/**: Contains the source code for the application.
  - **index.tsx**: Entry point of the application.
  - **App.tsx**: Main application component that sets up routing.
  - **pages/**: Contains the page components.
    - **Home.tsx**: Displays the list of APIs.
  - **components/**: Contains reusable components.
    - **ApiCard.tsx**: Represents a single API card.
    - **ApiList.tsx**: Fetches and displays a list of ApiCard components.
  - **services/**: Contains functions for API calls.
    - **api.ts**: Functions to fetch API data.
  - **hooks/**: Contains custom hooks.
    - **useFetch.ts**: Custom hook for fetching data.
  - **types/**: Contains TypeScript type definitions.
    - **api.d.ts**: Type definitions for API data.
  - **styles/**: Contains global styles.
    - **globals.css**: Global CSS styles for the application.

## Installation

To install the project dependencies, run:

```
npm install
```

## Running the Application

To start the development server, run:

```
npm run dev
```

The application will be available at `http://localhost:3000`.

## Building the Application

To build the application for production, run:

```
npm run build
```

## License

This project is licensed under the MIT License.