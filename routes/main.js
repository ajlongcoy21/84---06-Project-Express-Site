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

    req.params.id = Number(req.params.id);
    const id = req.params.id;

    console.log('This is the project ID:');    
    console.log(id);
    
    if (id > portfolioProjects.length) 
    {
        const err = new Error('Project Index Invalid');
        err.status = 404;

        res.locals.error = err;
        res.status(err.status);

        res.render('error');    
    }

    res.render('project', {project: portfolioProjects[id]});
    
});

module.exports = router;