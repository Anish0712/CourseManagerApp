import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const ShowCourse = () => {

    const [course,setCourse]=useState({})
    const {id}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:4000/course/course/${id}`)
        .then((result) => {
            setCourse(result.data)
        }).catch((err) => {
            console.log(err)
        });
    },[id])

    const handleDelete=()=>{
        axios.delete(`http://localhost:4000/course/${id}`)
        .then((result) => {
            navigate('/')
        }).catch((err) => {
            console.log(err);
            
        });
    }

  return (
   <div>
        <div
            className="container"
        >
            <div
                className="row justify-content-center align-items-center g-2"
            >
                <div className="col">
                    <div className="card text-start">
                        <img className="card-img-top" src={course.imageUrl} alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">Course Name: {course.courseName}</h4>
                            <h4  className="card-text"> Category: {course.category}</h4>
                            <h4>Instructor {course.instructor}</h4>
                            <h4>Duration of course: {course.duration}</h4>
                             <h4>Difficulty level: {course.level}</h4>
                            <NavLink
                                name=""
                                id=""
                                className="btn btn-primary"
                                to="/"
                                role="button"
                                >Back to home</NavLink>

                            <NavLink
                                name=""
                                id=""
                                className="btn btn-primary"
                                to={`/edit/${id}`}
                                role="button"
                                >Edit</NavLink>

                            <button type="submit"
                            onClick={handleDelete}>
                                Delete
                            </button>
                            
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default ShowCourse