import express from 'express'
import { userRegistor } from '../controllers/userController.js'

const router = express()

//REGISTOR || POST
router.post('/registor', userRegistor)



export default router