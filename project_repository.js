class ProjectRepository {
    constructor(dao) {
      this.dao = dao
    }

    getAll() {
      return this.dao.all(`SELECT * FROM prueba`)
    }
  }
  
  module.exports = ProjectRepository;