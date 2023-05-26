import React from 'react';
import Pdf from "react-to-pdf";


const Blog = () => {
    const ref = React.createRef();
    return (
        <section className="bg-white my-10 md:mx-16">
            <h1 className="text-3xl font-semibold text-gray-600 capitalize lg:text-4xl text-center">From the blog</h1>

            <div className='w-full flex justify-center mt-5'>
            <Pdf targetRef={ref} filename="Bfoody-blog.pdf">
                {({ toPdf }) => <button className='px-4 py-2 bg-yellow-100 rounded-lg' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            </div>
            <div ref={ref}>
                <div className="container px-6 py-10 mx-auto">
                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://i.ibb.co/N7CCFtY/b4.jpg" alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-sm text-blue-500 uppercase">FAQ</p>

                            <h2 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline  md:text-3xl">
                                Tell us the differences between uncontrolled and controlled components.
                            </h2>

                            <p className="mt-3 text-sm text-gray-500  md:text-sm">
                                Uncontrolled components manage their own state internally, while controlled components rely on an external component to manage their state. Uncontrolled components are typically created using standard HTML form elements, while controlled components are often custom components created for a particular use case. Controlled components provide a more explicit and controlled way of managing state, while uncontrolled components are often simpler and require less code.
                            </p>

                            <div className="flex items-center mt-6">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 ">Amelia. Anderson</h1>
                                    <p className="text-sm text-gray-500 ">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container px-6 py-10 mx-auto">
                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://i.ibb.co/hCBPf8B/b3.png" alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-sm text-blue-500 uppercase">FAQ</p>

                            <h2 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline  md:text-3xl">
                                How to validate React props using PropTypes
                            </h2>

                            <p className="mt-3 text-sm text-gray-500  md:text-sm">
                                PropTypes is a library that is used for typechecking in React. It allows you to specify the type of data that should be passed to a component as props, and it will throw a warning in the console if the wrong type of data is passed. To use PropTypes, you import it from the 'prop-types' package and specify the types of your props using a set of predefined validators. You can use PropTypes to validate the type, required, default value, and shape of your props. It is a good practice to use PropTypes to ensure that your components are receiving the correct props and to make your code more reliable and maintainable.
                            </p>

                            <div className="flex items-center mt-6">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 ">Amelia. Anderson</h1>
                                    <p className="text-sm text-gray-500 ">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container px-6 py-10 mx-auto">
                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://i.ibb.co/0Y3mr9V/b2.png" alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-sm text-blue-500 uppercase">FAQ</p>

                            <h2 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline md:text-3xl">
                                Tell us the difference between nodejs and express js.
                            </h2>

                            <p className="mt-3 text-sm text-gray-500 md:text-sm">

                                Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine. It allows developers to run JavaScript on the server-side and execute server-side logic without a web browser. Node.js provides a set of built-in modules that allow developers to build web servers, network applications, and command-line tools.

                                Express.js is a web application framework for Node.js that simplifies the process of building web applications by providing a set of features and tools. It allows developers to create robust and scalable web applications by providing a set of middleware functions for routing, handling HTTP requests and responses, and managing sessions and cookies. Express.js is widely used for building APIs, web applications, and real-time applications.
                            </p>

                            <div className="flex items-center mt-6">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 ">Amelia. Anderson</h1>
                                    <p className="text-sm text-gray-500 ">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container px-6 py-10 mx-auto">
                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://i.ibb.co/fntZWdB/b1.jpg" alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-sm text-blue-500 uppercase">FAQ</p>

                            <h2 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline md:text-3xl">
                                What is a custom hook, and why will you create a custom hook?
                            </h2>

                            <p className="mt-3 text-sm text-gray-500  md:text-sm">
                                A custom hook is a reusable function in React that contains stateful logic and can be shared between components. You create a custom hook to extract complex or repetitive logic from components, making them more reusable and easier to maintain. Custom hooks can also help to organize code and abstract away implementation details from the component's implementation, making it easier to reason about the code.
                            </p>

                            <div className="flex items-center mt-6">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 ">Amelia. Anderson</h1>
                                    <p className="text-sm text-gray-500 ">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Blog;