const Promise = require('bluebird')
const AppDAO = require('./dao')
const ProjectRepository = require('./project_repository')
function main() {
  const dao = new AppDAO('C:/Users/USER/Desktop/database.db')

  const projectRepo = new ProjectRepository(dao)

  projectRepo.getAll()
    .then((project) => {
      console.log(`nRetreived project from database`)
      console.log(project)
    })
    .catch((err) => {
      console.log('Error: ')
      console.log(JSON.stringify(err))
    })
}

main()