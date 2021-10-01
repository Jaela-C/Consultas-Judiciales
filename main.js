const Promise = require('bluebird')
const AppDAO = require('./dao')
const ProjectRepository = require('./project_repository')

function main() {
  const dao = new AppDAO('database.db');
  const projectRepo = new ProjectRepository(dao);
  const acciones = [];
  var newArr

  projectRepo.getAll()
    .then((project) => {
      for (i in project){
        acciones.push(project[i].Acciones)
      }
      console.log(acciones)
      /*newArr = acciones.filter(function(el){
        return(el.project[i].Acciones == 'RAZON')
      })
      console.log(newArr)*/
      
      return acciones
    })
    .catch((err) => {
      console.log('Error: ')
      console.log(JSON.stringify(err))
    })
  //console.log(acciones)
}



main()