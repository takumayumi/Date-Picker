# Date Picker

This is a simple date picker application built with React and Webpack from scratch. The application allows users to navigate through calendar and select a date.

## Features

- Display a calendar with 6 rows regardless of the number of days in the month.
- Navigate to previous and next months.
- Clickable dates that alert the selected date.
- Days outside the current month shown in gray.

## Live Demo

You can see the live demo of the date picker [here](https://wareki.netlify.app/).

## Repository

Find the source code on GitHub at [this link](https://github.com/takumayumi/date-picker).

## Installation

1. After unzipping the downloaded files and open the terminal in the project directory:

   ```bash
   cd date-picker
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
date-picker/
├── public/                     # Static assets
│   ├── favicon.ico             # Favicon for the application
│   └── index.html              # Main HTML file serving as entry point
├── src/                        # Source code for the application
│   ├── components/             # Reusable React components
│   ├── redux/                  # Redux store and slices
│   ├── utils/                  # Utility functions
│   ├── App.jsx                 # Main application component
│   ├── index.jsx               # Application entry point
│   └── styles.css              # Global styles for the application
├── .gitattributes              # Git attributes file
├── .gitignore                  # Files and directories to ignore in Git
├── .prettierrc                 # Prettier configuration file
├── LICENSE                     # Project license information
├── package.json                # Project metadata and dependencies
├── postcss.config.js           # PostCSS configuration file
├── README.md                   # Project documentation
├── tailwind.config.js          # Tailwind CSS configuration file
└── webpack.config.js           # Webpack configuration for module bundling
```

### How It Works

The calendar component is built using React and Redux, allowing users to select dates, months, and years easily. Here’s a brief overview of its functionality:

1. **Date Display**: The calendar displays the current date and allows users to navigate through different months and years.
2. **Date Selection**: Users can click on a date to select it. The selected date is highlighted, and the corresponding event handler (onDateClick) is triggered.
3. **Dynamic Views**: The calendar can switch between date, month, and year views. Users can navigate using buttons that update the current view.
4. **Loading State**: A loading spinner is displayed while data is being fetched or processed, providing visual feedback to users.
5. **Responsive Design**: The calendar is designed to be responsive, ensuring usability on various screen sizes.
6. **Redux Integration**: State management is handled through Redux, allowing for centralized state updates and easier management of selected dates and views.

#### API Properties of the Calendar Component

Here's an updated API table including all relevant properties for the components in your calendar project:

### API Properties of the Calendar Component

| Name         | Type    | Default    | Description                                                    |
| ------------ | ------- | ---------- | -------------------------------------------------------------- |
| currentDate  | object  | new Date() | Date today in ISO format .                                     |
| view         | string  | "date"     | The current view of the calendar ("date", "month", or "year"). |
| currentDate  | object  | new Date() | The currently selected date.                                   |
| openCalendar | boolean | false      | Indicates whether the calendar is open or closed.              |

### API Properties of the CalendarHeader Component

| Name        | Type       | Default    | Description                                                    |
| ----------- | ---------- | ---------- | -------------------------------------------------------------- |
| currentDate | object     | new Date() | The currently selected date displayed in the header.           |
| view        | string     | "date"     | The current view of the calendar ("date", "month", or "year"). |
| onPrevClick | function() | -          | Called when the previous button is clicked.                    |
| onNextClick | function() | -          | Called when the next button is clicked.                        |
| onMidClick  | function() | -          | Called when the mid button is clicked to switch views.         |

### API Properties of the DatePicker Component

| Name         | Type           | Default | Description                                       |
| ------------ | -------------- | ------- | ------------------------------------------------- |
| selectedDate | string         | null    | The currently selected date in ISO format.        |
| openCalendar | boolean        | false   | Indicates whether the calendar is open or closed. |
| onDateChange | function(date) | -       | Called when the date input changes.               |

### API Properties of the DatePickerInput Component

| Name      | Type            | Default | Description                              |
| --------- | --------------- | ------- | ---------------------------------------- |
| value     | string          | ""      | The value displayed in the input field.  |
| onChange  | function(event) | -       | Called when the input value changes.     |
| onKeyDown | function(event) | -       | Called on key down events for the input. |
| onFocus   | function(event) | -       | Called when the input field is focused.  |
| maxLength | number          | 5       | The maximum length of the input value.   |
| title     | string          | ""      | The title attribute for the input field. |

### API Properties of the Dates Component

| Name         | Type           | Default    | Description                                    |
| ------------ | -------------- | ---------- | ---------------------------------------------- |
| onDateClick  | function(date) | -          | Called when a date in the calendar is clicked. |
| currentDate  | object         | new Date() | The currently selected date.                   |
| selectedDate | object         | null       | The date currently selected by the user.       |

### API Properties of the Months Component

| Name         | Type            | Default | Description                              |
| ------------ | --------------- | ------- | ---------------------------------------- |
| onMonthClick | function(month) | -       | Called when a month is clicked.          |
| selectedDate | object          | null    | The date currently selected by the user. |

### API Properties of the Years Component

| Name         | Type           | Default    | Description                              |
| ------------ | -------------- | ---------- | ---------------------------------------- |
| onYearClick  | function(year) | -          | Called when a year is clicked.           |
| currentDate  | object         | new Date() | The currently selected date.             |
| selectedDate | object         | null       | The date currently selected by the user. |

### API Properties of Utility Functions

#### handleDateClick

| Name        | Type     | Description                                |
| ----------- | -------- | ------------------------------------------ |
| day         | number   | The day of the month to select.            |
| currentDate | string   | The current date object.                   |
| dispatch    | function | Redux dispatch function for state updates. |

#### handleMonthChange

| Name        | Type     | Description                                                      |
| ----------- | -------- | ---------------------------------------------------------------- |
| direction   | number   | The direction to change the month (-1 for previous, 1 for next). |
| currentDate | string   | The current date object.                                         |
| dispatch    | function | Redux dispatch function for state updates.                       |

#### validateDate

| Name  | Type   | Description                    |
| ----- | ------ | ------------------------------ |
| year  | string | The year to validate.          |
| month | string | The month to validate (01-12). |
| day   | string | The day to validate (01-31).   |

### Additional API Properties

In addition to the above properties, there are other API properties available in the utils folder. Each utility function has parameters with descriptions to help you understand their usage.

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
