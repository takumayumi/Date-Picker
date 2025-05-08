# Date Picker

This is a simple date picker application built with React and Webpack from scratch. The application allows users to navigate through calendar and select a date.

## Features

- **Date Display**: The calendar displays the current date and allows users to navigate through different months and years.
- **Date Selection**: Users can click on a date to select it. The selected date is highlighted, and the corresponding event handler (onDateClick) is triggered.
- **Dynamic Views**: The calendar can switch between date, month, and year views. Users can navigate using buttons that update the current view.
- **Loading State**: A loading spinner is displayed while data is being fetched or processed, providing visual feedback to users.
- **Responsive Design**: The calendar is designed to be responsive, ensuring usability on various screen sizes.
- **Redux Integration**: State management is handled through Redux, allowing for centralized state updates and easier management of selected dates and views.

## Technologies Used

- **React**: Enables reusable UI components, improving organization and maintainability.
- **Webpack**: Efficiently bundles JavaScript modules and assets, enhancing performance and loading times.
- **Babel**: Transforms modern JavaScript and JSX into backward-compatible code for broader browser support.
- **Tailwind CSS**: Allows rapid styling with utility classes, promoting consistency and responsive design.
- **Redux**: Manages application state globally, facilitating predictable state management and easier debugging.
- **Prettier**: An opinionated code formatter that enforces consistent style across your codebase.
- **Font Awesome**: Provides a vast library of icons, enhancing UI aesthetics and functionality.
- **classnames**: A utility for conditionally joining class names together, simplifying dynamic class management.

## Getting Started

1. After unzipping the downloaded files and open the terminal in the project directory:

   ```bash
   cd date-picker
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. To start the development server, run:

   ```bash
   npm start
   ```

4. Open your browser and navigate to http://localhost:3000 to see the application in action.
