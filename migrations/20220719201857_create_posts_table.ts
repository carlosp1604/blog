import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('posts', (table) => {
        table.string('id', 36).primary()
        table.string('slug', 256).notNullable().unique()
        table.string('parent_id')
            .notNullable()
            .references('id')
            .inTable('posts')
        table.string('author_id')
            .notNullable()
            .references('id')
            .inTable('authors')
        table.string('course_id')
            .nullable()
            .references('id')
            .inTable('courses')
        table.string('title', 256).notNullable()
        table.string('image_url', 512).nullable()
        table.integer('read_time').notNullable()
        table.timestamp('published_at').nullable()
        table.timestamp('last_update').nullable()
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        table.timestamp('updated_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
        table.index('slug')
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('posts')
}

