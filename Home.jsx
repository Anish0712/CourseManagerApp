import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [courses,setCourses]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/course')
        .then((result) => {
            setCourses(result.data)
        }).catch((err) => {
            console.log(err)
        });
    },[])
  return (
    <>
        <div className="container">
            <div className="row justify-content-center align-items-center g-2">

                {
                    courses.map((course) => (
                        <div className="col" key={course._id}>
                            <div className="card text-start">

                                <img
                                    className="card-img-top"
                                    src={course.imageUrl}
                                    alt="Title"
                                />

                                <div className="card-body">
                                    <h4 className="card-title">
                                        {course.courseName}
                                    </h4>

                                    <p className="card-text">
                                        {course.category}
                                    </p>

                                    <NavLink
                                        className="btn btn-primary"
                                        to={`/show/${course._id}`}
                                    >
                                        Know More
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </>
)
}

export default Home