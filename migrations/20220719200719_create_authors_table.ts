import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('authors', (table) => {
        table.string('id', 36).primary()
        table.string('name', 256).notNullable()
        table.string('description', 512).notNullable()
        table.string('about_me', 2048)
        table.string('banner_hex_color', 7).notNullable()
        table.string('image_url').nullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('authors')
}

