// routes/index.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); 
});

router.get('/report',  (req, res) =>{
    res.render('report'); 
});

router.get('/user/feedback', (req, res) => {
    res.render('feedback'); 
});


router.get('/advocacy', (req, res) => {
    res.render('advocacy'); 
});

router.get('/admin/login', (req, res) => {
    res.render('login');
});

router.get('/admin/signup', (req, res) => {
    res.render('signup');
});
export default router;