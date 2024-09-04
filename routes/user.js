const express = require('express')
const router = express.Router()

// const {login, signup, sendotp} = require("../controllers/auth")
const {login, signup} = require("../controllers/auth")
const {auth, isStudent, isAdmin} = require('../middlewares/authMiddle')

const { getAllUsers,deleteUser,addUser } = require('../admin/admin');

router.post('/login', login)
router.post('/signup', signup)
// router.post('/sendotp', sendotp)


router.get("/test",auth, (req,res)=>{
    res.json({
        success: true,
        message: "You are a valid Tester "
    })
})
router.get('/student', auth, isStudent, (req,res)=>{
    res.json({
        success: true,
        message: "You are a valid Student "
    })
})

router.get('/admin', auth, isAdmin, getAllUsers);

router.delete('/admin/:id', auth, isAdmin, deleteUser);

router.post('/admin', auth, isAdmin, addUser);

module.exports = router