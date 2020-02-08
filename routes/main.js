const express = require('express');
const router = express.Router();
const {data} = require('../data/projectData.json');
const portfolioProjects = data.projects;

router.get('/',(req, res) => {
    
    res.render('index', {portfolioProjects: portfolioProjects});
    console.log("here now");
    console.log(portfolioProjects[0].image_urls[0]);
        
    
});

router.get('/about',(req, res) => {
    
    res.render('about');    
    
});

module.exports = router;