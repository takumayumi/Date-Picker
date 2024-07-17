# Date Picker

This is a simple date picker application built with React and Webpack from scratch. The application allows users to navigate through calendar and select a date.

## Features

- Display a calendar with 6 rows regardless of the number of days in the month.
- Navigate to previous and next months.
- Clickable dates that alert the selected date.
- Days outside the current month shown in gray.

## Installation

1. After unzipping the downloaded files and open the terminal in the project directory:

   ```bash
   cd calendar
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

### Usage

1. To start the development server, run:

   ```bash
   npm start
   ```

2. Open your browser and navigate to http://localhost:3000 to see the application in action.

### Project Structure

```bash
calendar/
├── src/
│   ├── index.js         # Entry point of the application
│   ├── Calendar.js      # Calendar component
│   ├── DatePicker.js    # DatePicker component
│   └── styles.css       # Styles for the components
├── public/
│   └── index.html       # Main HTML file
├── package.json         # Project metadata and dependencies
└── webpack.config.js    # Webpack configuration file
```

### How It Works

The application uses a simple algorithm to calculate the day of the week and display the calendar. The days of the week are represented as follows:

- Sunday: 0
- Monday: 1
- Tuesday: 2
- Wednesday: 3
- Thursday: 4
- Friday: 5
- Saturday: 6

#### API Properties of the Calendar Component

| Name     | Type             | Default | Description                               |
| -------- | ---------------- | ------- | ----------------------------------------- |
| date     | object or string | null    | The date to be displayed in the calendar. |
| onSelect | function(date)   | -       | Called when a date is selected.           |

### Technologies Used

- **React**: Enables reusable UI components, improving organization and maintainability.
- **Webpack**: Efficiently bundles JavaScript modules and assets, enhancing performance and loading times.
- **Babel**: Transforms modern JavaScript and JSX into backward-compatible code for broader browser support.
- **Tailwind CSS**: Allows rapid styling with utility classes, promoting consistency and responsive design.
- **Redux**: Manages application state globally, facilitating predictable state management and easier debugging.
- **Prettier**: An opinionated code formatter that enforces consistent style across your codebase.
- **Font Awesome**: Provides a vast library of icons, enhancing UI aesthetics and functionality.
- **classnames**: A utility for conditionally joining class names together, simplifying dynamic class management.

### Author

Yumi Takuma

[Website](https://takumayumi.pages.dev/) | [LinekdIn](https://www.linkedin.com/in/takumayumi/) | [GitHub](https://github.com/takumayumi)
