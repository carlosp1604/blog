import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('authors', (table) => {
        table.string('id', 36).primary()
        table.string('name', 256).notNullable()
        table.string('description', 512).notNullable()
        table.string('about_me', 2048)
        table.string('banner_hex_color', 7).notNullable()
        table.string('image_url').nullable()
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        table.timestamp('updated_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('authors')
}

