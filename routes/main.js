const express = require('express');
const router = express.Router();
const {data} = require('../data/projectData.json');
const portfolioProjects = data.projects;

router.get('/',(req, res) => {
    
    res.render('index', {portfolioProjects: portfolioProjects});
    
});

router.get('/about',(req, res) => {
    
    res.render('about');    
    
});

router.get('/project/:id', (req, res) => {

    const { id } = req.params;

    res.render('project', {project: portfolioProjects[id]});
    
});

module.exports = router;