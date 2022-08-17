import knex from 'knex'

class KnexContainer {
    constructor(option, table){
        const db = knex(option)
        const table = table
    }
    async getAll()
    async getById()
    async deleteById()
}

export default KnexContainer