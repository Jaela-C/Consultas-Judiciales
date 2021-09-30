class ProjectRepository {
    constructor(dao) {
      this.dao = dao
    }

    delete(id) {
      return this.dao.run(
        `DELETE FROM prueba WHERE id = ?`,
        [id]
      )
    }

    getById(id) {
      return this.dao.get(
        `SELECT * FROM prueba WHERE id = ?`,
        [id])
    }

    getAll() {
      return this.dao.all(`SELECT * FROM prueba`)
    }
  }
  
  module.exports = ProjectRepository;