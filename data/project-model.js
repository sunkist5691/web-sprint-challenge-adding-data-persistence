const db = require('../data/db-config')

module.exports = {
   getAllProject,
   getAllTask,
   getAllResource,
   findProjectById,
   findTaskById,
   findResourceById,
   addProject,
   addTask,
   addResource,
   getResourceProject,
   getTaskProject,
   getProjectfromResource
}

function findProjectById(id){
   return db('project')
      .where({ id })
      .first()
}
function findTaskById(id){
   return db('task')
      .where({ id })
      .first()
}
function findResourceById(id){
   return db('resource')
      .where({ id })
      .first()
}

function getAllProject(){
   return db('project')
}

function getAllTask(){

   /*
      select
         project_name as 'pn',
         description as 'des'
      from project as 'p'
      join project_task as 'pt'
         on pt.project_id = p.id
      join task as 't'
         on pt.task_id = t.id
      where t.id = 3
   */

   return db('project as p')
      .select('task_description', 'project_name', 'description')
      .join('project_task as pt', 'pt.project_id', 'p.id')
      .join('task as t', 'pt.task_id', 't.id')
}

function getAllResource(){
   return db('resource')
}

function addProject(project){
   return db('project')
      .insert(project)
      .then(([id]) => {
         return findProjectById(id)
      })
}

function addTask(task){
   return db('task')
      .insert(task)
      .then(([id]) => {
         return findTaskById(id)
      })
}

function addResource(resource){
   return db('resource')
      .insert(resource)
      .then(([id]) => {
         return findResourceById(id)
      })
}

function getResourceProject(id){
   /*
      select
         project_id,
         resource_name
      from project as 'p'
      join project_resource as 'pr'
         on pr.project_id = p.id
      join resource as 'r'
         on pr.resource_id = r.id
      where p.id = 1
   */

   return db('project as p')
      .select('project_id', 'resource_name')
      .join('project_resource as pr', 'pr.project_id', 'p.id')
      .join('resource as r', 'pr.resource_id', 'r.id')
      .where({ 'p.id': id})
}

function getTaskProject(id){
   return db('project as p')
      .select('project_id', 'task_description')
      .join('project_task as pt', 'pt.project_id', 'p.id')
      .join('task as t', 'pt.task_id', 't.id')
      .where({ 'p.id': id})
}

function getProjectfromResource(id){
   /* 
      select
         project_name,
         resource_id
      from project as p
      join project_resource as pr
         on pr.project_id = p.id
      join resource as r
         on pr.resource_id = r.id
      where r.id = 1
   */

   return db('project as p')
      .select('project_name', 'resource_id')
      .join('project_resource as pr', 'pr.project_id', 'p.id')
      .join('resource as r', 'pr.resource_id', 'r.id')
      .where({ 'r.id': id })
      
}