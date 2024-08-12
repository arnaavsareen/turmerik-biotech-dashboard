# Turmerik Biotech Dashboard

This is a web application designed to manage and display various aspects of clinical trials being conducted. The dashboard allows users to monitor trials, sites, patients, and related documents, with features such as charts, tables, and interactive navigation.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
    - [Building the Project](#building-the-project)
5. [File Structure](#file-structure)
6. [Customizing](#customizing)

## Project Overview

This dashboard application is built using React and is styled with Bootstrap and custom CSS. The application is designed to provide real-time updates and data management for clinical trials, including patient recruitment, site management, document management, and more.

## Features

- **Dynamic Navigation**: Sidebar navigation for quick access to different sections.
- **Dashboard View**: Overview of patient recruitment and trial statistics.
- **Sites Management**: View and manage trial sites, including map integration.
- **Patient Statistics**: Real-time updates on patient recruitment, screening, and enrollment.
- **Document Management**: Access and manage trial-related documents.
- **Interactive Charts**: Display trends and analytics with Chart.js library.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Bootstrap**: CSS framework for responsive design.
- **React-Bootstrap**: Bootstrap components built with React.
- **Chart.js**: Library for creating charts and graphs.
- **React-Router-Dom**: Declarative routing for React applications.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js & npm**: Make sure you have Node.js and npm installed. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

2. **Install Dependencies**:
    Install the required npm packages by running:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server and run the project locally:

```bash
npm start
```

This will start the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building the Project

To build the project for production:

```bash
npm run build
```

This will create a `build` directory with the production-ready files. You can then deploy these files to your server.

## File Structure

Below is a brief overview of the file structure:

```
turmerik-biotech-dashboard/
├── public/
│   ├── index.html       # Main HTML template
│   └── ...              # Other public assets
├── src/
│   ├── components/
│   │   ├── Navbar.js    # Navbar component
│   │   ├── Sidebar.js   # Sidebar navigation component
│   │   ├── Dashboard.js # Main dashboard component
│   │   ├── Sites.js     # Sites management component
│   │   ├── Trials.js    # Trials management component
│   │   └── ...          # Other components
│   ├── App.js           # Main App component
│   ├── index.js         # Entry point for React
│   └── ...              # Other assets and files
├── package.json         # npm package configuration
└── README.md            # This file
```

## Customizing

You can customize the application by modifying the components in the `src/components` directory. Each component represents a section of the application, such as the sidebar, dashboard, and trials. Styles can be adjusted in the `index.html` file.

### Adding a New Page

1. **Create a New Component**:
    - Create a new React component in the `src/components` directory.
    - Example: `MyNewPage.js`.

2. **Update Sidebar**:
    - Add a new button in `Sidebar.js` that calls the `onSelectTab` function with your new page identifier.

3. **Update App.js**:
    - Import your new component into `App.js`.
    - Update the `renderContent` function to include a case for your new page.
