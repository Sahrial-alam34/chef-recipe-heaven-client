/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import ReactDOM from "react-dom";
// import Pdf from "react-to-pdf";
// import { PDFViewer } from '@react-pdf/renderer';
const ref = React.createRef();
const Blog = () => {
    // const {user} = useContext(AuthContext)
    // console.log(user);


    return (
        <div className='container bg-secondary text-white p-5 mb-5'>
            {/* <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf> */}
            <div ref={ref}>
                {/* <h2>This is blog page: {user && user.displayName}</h2> */}
                <p>1. Tell us the differences between uncontrolled and controlled components?</p>
                <p>Ans: A component that value is controlled by React.In Controlled component  handled by user.  A component that controlled by browser is uncontrolled component.With an uncontrolled component, the browser handles user input, and you have less control over what the user enters.</p>
                <br></br>
                <p>2. How to validate React props using PropTypes?</p>
                <p>Ans: React PropTypes is a library which provides a way to validate the props passed to a component, ensuring that they meet the expected data type and structure. At first install props-types and then import. </p>
                <br></br>
                <p>3. Tell us the difference between nodejs and express js?</p>
                <p>Ans: Node JS:  An extension of JavaScript, NodeJS is an open-source server-side runtime environment built around the NodeJS language. Using a single-threaded approach for web loading and asynchronous programming, the framework has achieved great success in being highly-performant and scalable.

                    Express JS: ExpressJS is a framework for developing web applications with NodeJS. Among the two options, it is the most significant difference. The ExpressJS development services framework provides several exceptional features that make developing web apps easy and fast. By contrast, using the latter alone makes developing web apps more complex.

                </p>
                <br></br>
                <p>4. What is a custom hook, and why will you create a custom hook??</p>
                <p>Ans: Custom hook allows you to reuse stateful logic across multiple components. It is powerful feature for extracting logic that is typically used by multiple components and turning it into a reusable function. </p>
                <br></br>
            </div>

        </div>
    );
};

export default Blog;