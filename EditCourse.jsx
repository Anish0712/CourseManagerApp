import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditCourse = () => {

     const [course,setCourse]=useState({id:'',courseName:'',instructor:'',category:'',duration:'',level:'',imageUrl:''})
    const navigate=useNavigate()
    const {id}=useParams()

     useEffect(()=>{
        axios.get(`http://localhost:4000/course/${id}`)
        .then((result) => {
            setCourse(result.data)
        }).catch((err) => {
            console.log(err)
        });
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:4000/course/${id}`,course)
        .then(() => {
            navigate(`/show/${id}`)
        }).catch((err) => {
            console.log(err)
        });
    }

  return (
     <>
        <div
            className="container"
        >
            <div
                className="row justify-content-center align-items-center g-2"
            >
                <div className="col">
                    <div className="card">
                       
                        <div className="card-body">
                            <h4 className="card-title">Edit Course</h4>
                            <form onSubmit={handleSubmit} >
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        value={course.id}
                                        onChange={(e)=>setCourse({...course,id:e.target.value})}

                                    />
                                    <label htmlFor="formId1">ID</label>
                                </div>

                                 <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        value={course.courseName}
                                        onChange={(e)=>setCourse({...course,courseName:e.target.value})}

                                    />
                                    <label htmlFor="formId1">Course Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        value={course.instructor}
                                        onChange={(e)=>setCourse({...course,instructor:e.target.value})}

                                    />
                                    <label htmlFor="formId1">Instructor</label>
                                </div>

                                 <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        value={course.category}
                                        onChange={(e)=>setCourse({...course,category:e.target.value})}

                                    />
                                    <label htmlFor="formId1">Category</label>
                                </div>


                                 <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        value={course.duration}
                                        onChange={(e)=>setCourse({...course,duration:e.target.value})}

                                    />
                                    <label htmlFor="formId1">Duration</label>
                                </div>


                                 <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        value={course.level}
                                        onChange={(e)=>setCourse({...course,level:e.target.value})}

                                    />
                                    <label htmlFor="formId1">Level</label>
                                </div>

                                 <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        value={course.imageUrl}
                                        onChange={(e)=>setCourse({...course,imageurl:e.target.value})}

                                    />
                                    <label htmlFor="formId1">Image-Url</label>
                                </div>


                                

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Update
                                </button>
                                
                                
                            </form>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </>
  )
}

export default EditCourse