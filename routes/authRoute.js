// First need to import the express

import express from "express";

import { loginHandler, registrationHandler } from "../controllers/authControllers.js";

// Secondly need to call the Router function
const router = express.Router()

router.post('/login', loginHandler)
router.post('/registration', registrationHandler)


// that means if we want to reach the login end point we can not simply call 
// localhost:5000/auth/login
// localhost:5000/auth/registration

export default router