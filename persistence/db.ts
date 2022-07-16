import { createConnection } from 'mysql'
import { Knex } from 'knex'

// TODO: We should take this vars from .env file
export const db = createConnection({
    host: 'localhost',
    database: 'blog',
    port: 3506,
    user: 'root',
    password: 'root'
})

export function getKnexConnectionConfig (): Knex.MySqlConnectionConfig {
    return {
        host: 'localhost',
        database: 'blog',
        port: 3506,
        user: 'root',
        password: 'root'
    }
}