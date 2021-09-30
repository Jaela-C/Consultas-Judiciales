const Promise = require('bluebird')
const AppDAO = require('./dao')
const ProjectRepository = require('./project_repository')

function main() {
  const dao = new AppDAO('C:/Users/USER/Desktop/database.db');
  const projectRepo = new ProjectRepository(dao);
  const acciones = [];

  projectRepo.getAll()
    .then((project) => {
      for (i in project){
        acciones.push(project[i].Acciones)
      }
      console.log(acciones)
      return acciones
    })
    .catch((err) => {
      console.log('Error: ')
      console.log(JSON.stringify(err))
    })
}

main()