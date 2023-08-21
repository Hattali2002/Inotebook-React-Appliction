import React from 'react'

export default function About(props) {
    return (
        <>
            <div className={`container my-5 text-${props.mode === "black" ? "white" : "black"}`}>
                <h1 className="container my-3 text-center">About</h1>
                <div id="accordion">
                    <div className="card">
                        <div className={`card-header bg-${props.mode === "black" ? "black" : "light"}`} id="headingOne">
                            <h5 className="mb-0">
                                <button className={`btn text-${props.mode === "black" ? "white" : "black"}`} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>INotebook Full-Stack Web Application</strong>
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className={`card-body bg-${props.mode === "black" ? "black" : "light"} text-${props.mode === "black" ? "white" : "black"}`}>
                                <p>
                                    <strong>User Authentication :</strong>  Implemented user registration and login functionalities using JWT authentication and bcrypt for password hashing.
                                </p>
                                <p>
                                    <strong>Interactive UI :</strong> Designed a user-friendly interface using React components, offering seamless navigation and smooth user interactions.
                                </p>
                                <p>
                                    <strong>Note Management :</strong> Developed functionalities for creating, editing, and deleting notes with a dynamic note list display.
                                </p>
                                <p>
                                    <strong>Context Management :</strong> Utilized React Context API to manage the state of notes and user authentication across components.
                                </p>
                                <p>
                                    <strong>CRUD Operations :</strong> Established RESTful API endpoints for handling Create, Read, Update, and Delete operations on notes.
                                </p>
                                <p>
                                    <strong>Responsive Design :</strong> Ensured the application's responsiveness across different devices using responsive CSS frameworks and media queries.
                                </p>
                                <p>
                                    <strong>Technical Stack :</strong> 
                                </p>

                                    <ul>
                                        <li><strong>Frontend</strong>: React, react-bootstrap, react-router-dom</li>
                                        <li><strong>Backend</strong>: Node.js, Express.js, JWT, bcrypt</li>
                                        <li><strong>Database</strong>: MongoDB</li>
                                        <li><strong>Deployment</strong>: Deployed the application to a hosting platform for public access.</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
