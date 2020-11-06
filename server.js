const express = require('express')

const Project = require('./data/project-model')

// Create server
const server = express()

server.use(express.json())

// ADD resources at specific project
server.post('/api/resource',(req, res) => {
   Project.addResource(req.body)
      .then(resource => {
         res.status(201).json(resource)
      })
      .catch(error => {
         res.status(500).json({
            error: error.message
         })
      })
})

server.get('/api/resource', (req, res) => {
   Project.getAllResource()
      .then(resources => {
         res.status(201).json(resources)
      })
      .catch(error => {
         res.status(500).json({
            error: error.message
         })
      })
})

server.post('/api/project', (req, res) => {
   Project.addProject(req.body)
      .then(project => {
         res.status(201).json(project)
      })
      .catch(error => {
         res.status(500).json({
            error: error.message
         })
      })
})

server.get('/api/project', (req, res) => {
   Project.getAllProject()
      .then(projects => {
         res.status(201).json(projects)
      })
      .catch(error => {
         res.status(500).json({
            error: error.message
         })
      })
})

server.post('/api/task', (req, res) => {
   Project.addTask(req.body)
      .then(task => {
         res.status(201).json(task)
      })
      .catch(error => {
         res.status(500).json({
            error: error.message
         })
      })
})

server.get('/api/task', (req, res) => {
   Project.getAllTask()
      .then(tasks => {
         res.status(201).json(tasks)
      })
      .catch(error => {
         res.status(500).json({
            error: error.message
         })
      })
})

server.get('/api/project/:id/resource', (req, res) => {
   Project.getResourceProject(req.params.id)
      .then(resources => {
         res.status(201).json(resources)
      })
      .catch(error => {
         res.status(500).json({
            error: error.message
         })
      })
})

server.get('/api/project/:id/task', (req, res) => {
   Project.getTaskProject(req.params.id)
      .then(resources => {
         res.status(201).json(resources)
      })
      .catch(error => {
         res.status(500).json({
            error: error.message
         })
      })
})

server.get('/api/resource/:id/project', (req, res) => {
   Project.getProjectfromResource(req.params.id)
      .then(projects => {
         res.status(201).json(projects)
      })
      .catch(error => {
         res.status(500).json({
            error: error.message
         })
      })
})
module.exports = server