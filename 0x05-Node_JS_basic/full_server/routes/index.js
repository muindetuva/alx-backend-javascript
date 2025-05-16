import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

// Root route
router.get('/', AppController.getHomepage);

// List all students
router.get('/students', StudentsController.getAllStudents);

// List students by major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
