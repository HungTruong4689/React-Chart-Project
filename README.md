# Graph Dashboard Application

## Overview

This application is a Single Page Web Application (SPA) built using React and TypeScript. It leverages various libraries to create an interactive dashboard for displaying charts. The primary libraries used include MUI/React Bootstrap for UI components, Highcharts for chart visualization, and Redux for state management (optional). Additionally, middleware like Redux Thunk or Redux Saga can be integrated for advanced state management.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/HungTruong4689/React-Chart-Project.git

    ```

2. Install dependencies:

```bash
  npm install
```

3. Usage

### Development

Run the application in development mode:

```bash
  npm run dev
```

This will start the development server using Vite.

4. Building
   Build the application for production:

```bash
  npm run build
```

This command compiles TypeScript code and bundles the application using Vite.

5. Linting
   Lint the code using ESLint:

```bash
  npm run lint
```

This command uses ESLint to check the code for potential issues and enforces a consistent coding style.

6. Preview
   Preview the production build:

```bash
npm run preview
```

This command serves the production build locally for previewing before deployment.

7. Features

-   Responsive UI design.
-   Two main routes: "View mode" and "Settings."
-   "View mode" route displays a list of charts with a date range filter.
-   Date range filter affects the displayed charts based on selected dates.
-   "Settings" route allows users to add, edit, or remove charts using a modal window.
-   Users can customize chart properties such as name, type (line, spline, area), and color.

8.  Data Source
    The data for the charts can be either randomly generated. Each value should have "value" and "date" fields.

9.  Configuration
    Check the package.json file for details on dependencies and development scripts.
