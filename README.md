# CourseEnroll Webapp

This project is a ReactVite application that displays a list of courses and allows users to enroll in them. It also provides a shopping cart feature to keep track of the selected courses.

## Table of Contents

- [Language](#language)
- [Usage](#usage)
- [Features](#features)
- [Discussion](#discussion)

## Language
- ReactVite
- TailwindCSS

## Usage

1. Create a JSON file named `course.json` in the root directory of the project.
2. Populate the `course.json` file with an array of course objects. Each course object should have the following properties: `id`, `name`, `description`, `price`, `credit`, and `photo`.
3. Start the development server: `npm start`
4. Open your browser and visit `http://localhost:3000` to view the application.

## Features

- Display a list of courses fetched from the `course.json` file.
- Show the total number of courses available.
- Allow users to select a course and view its details.
- Add selected courses to the shopping cart.
- Calculate the total credit hours and price of the selected courses in the shopping cart.

## Discussion
In this project the useState hook, in React is extensively utilized for state management. Now lets delve into how each component handles state.

1. Courses Component:
- The useState hook is used to initialize the courses state as an empty array: useState([]); const [courses, setCourses] = useState([]);
- The useEffect hook is used to retrieve information from the course.json file and use the retrieved data to update the course state:

```bash
  useEffect(() => {
    fetch('course.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])
```
- The courses state is then used to render the list of courses.

2. Enroll Component:

- The Enroll component is designed to receive the course object as a prop.

- To access the properties of the course object we can use destructuring. In this case we can destructure the course object. Assign its properties to variables, like name, description, price, credit and photo.

- It's important to note that the Enroll component doesn't handle any state internally. Instead it focuses on rendering the course details based on the props provided.


3. Cart Component:

The Cart component receives the courseDetails array as a prop.
The totalCreditHours and totalPrice are calculated by reducing the courseDetails array using the reduce method:

```bash
  const totalCreditHours = courseDetails.reduce((total, course) => total + course.credit, 0);
  const totalPrice = courseDetails.reduce((total, course) => total + course.price, 0);
```
- The component then renders the remaining credit hours, the list of selected courses, and the total credit hours and price.

In general managing the state in this project is pretty simple. The Courses component takes care of handling the state for courses. Passes it down as props, to its child components, Enroll and Cart.
These child components then utilize the received props to display the required information.


