const {addCourse,showCourses,showCourse,updateCourse,deleteCourse} = require('..//controller/controller');

const express = require('express');

const route=express.Router()

route.post('/add',addCourse)
route.get('/',showCourses)
route.get('/course/:id',showCourse)
route.put('/:id',updateCourse)
route.delete('/:id',deleteCourse)

module.exports=route