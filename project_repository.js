class ProjectRepository {
    constructor(dao) {
      this.dao = dao
    }

    delete(id) {
      return this.dao.run(
        `DELETE FROM projects WHERE id = ?`,
        [id]
      )
    }

    getById(id) {
      return this.dao.get(
        `SELECT * FROM projects WHERE id = ?`,
        [id])
    }

    getAll() {
      return this.dao.all(`SELECT * FROM prueba`)
    }

    getTasks(projectId) {
      return this.dao.all(
        `SELECT * FROM tasks WHERE projectId = ?`,
        [projectId])
    }
  }
  
  module.exports = ProjectRepository;