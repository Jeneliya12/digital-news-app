// <----  React and NextDataPathnameNormalizer.js ------->

/* How do useState Work
import { useState } from "react";

const [count, setCount] = useState(0);*/

/* How do useEffect Work
 useEffect(()=> {
 console.log("Component Mounted");
 }, []);*/ // Dependency array ensures it runs once

/*
Optimize React App
1. React.memo for component re-renders
2. Lazy-load components with React.lazy
3. Use state management library like Redux or Context Api Effectivly
4. Avoid passing propes unnecessarily
*/

/*getServerSideProps: fetches data in every request,
getStaticProps: Fetches data at build time for static content.
*/

// <----  Angular ------->
/*
component and directive
component has templete, style and logic
directive adds behaviour to elements

angular dependency injection
Angular injects dependencies injection through constructors
using providers configured in @NgModule
*/

// <----  Backend Development ------->
// <----  Node.js/Express.js ------->
/*
Middleware: 
It processes request before reaching the route handler

app.use((req, res, next) => {
console.log("Middleware executed");
next();
})

How do you handle errors in Express?

Use a centralized error handler:

app.use((err,req,res,next)=> {
console.log(err.stack)
res.status(500).send("Seomething Broke");
})

What is the event-driven architecture in Node.js?

    Node.js uses an event loop to handle non-blocking 
    I/O operations efficiently, enabling scalability.
*/

// <----  Java/Spring Boot ------->
/* What is the purpose of @Component, @Service, and @Repository?
@Component: Generic Bean
@Service: Business Logic
@Repository: Data access layer
*/

// <----  API Development ------->
/* What is the difference between REST and GraphQL?
REST: It has fixed endpoints and retrives entire resources.
GraphQL: It has single endpoint and retrives specific data fields.

How do you secure API?
Use OAuth2 or JWT for authentication
Validate input and use HTTPS.

*/

// <----  Database Managment ------->
/*
SQL/NoSQL
What is the difference between SQL and NoSQL?
SQL: Relational databases (e.g., PostgreSQL).
NoSQL: Non-relational, stores unstructured data (e.g., MongoDB).

What are ACID properties?
Atomicity, Consistency, Isolation, Durability ensure data reliability in transactions.

PostgreSQL/MongoDB

    How do you use indexing?
        Indexing improves query performance by reducing search time.
        
        CREATE INDEX idx_user_name ON users(name);

*/

// <----  Testing and Quality Assurance ------->
/*
How do you write test cases with Jest?

    Write unit tests to validate functionality:

    test("adds 1 + 2 to equal 3", () => {
      expect(1 + 2).toBe(3);
    });

    What is the difference between unit and integration tests?

        Unit tests: Test individual components.
        Integration tests: Test how components work together.
*/

// <----  DevOps and Deployment ------->
/*
    Docker/Kubernetes

        What is the difference between Docker and virtual machines?
            Docker: Lightweight, shares the host OS.
            VM: Includes a full OS, heavier.

        How do you deploy with Docker Compose?
            Use docker-compose.yml to manage multi-container applications:

    services:
    app:
        build: .
        ports:
        - "3000:3000"
*/

//<--------------CODING CHALLENGES----------------->
/*
Coding Challenges

    Frontend Challenge (Weather App):

    Build a React component fetching data from OpenWeatherMap API.
        
    useEffect(() => {
    fetch("api.openweathermap.org/data/2.5/weather?q=London")
    .then((res) => res.json())
    .then((data) => setWeather(data));
    }, []);

    Backend Challenge (CRUD API):

    Build an Express route for user data:

    app.post("/users", (req, res) => {
    const user = req.body;
    res.Status(201).json(user);
    });

    Data Structures:

    Write a function to find duplicates in an array:

    function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index );
    }

*/
