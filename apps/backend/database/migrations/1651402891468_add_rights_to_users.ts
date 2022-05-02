import { RIGHTS } from '@galadrim-rooms/shared/src'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
    protected tableName = 'users'

    public async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.bigInteger('rights').defaultTo(RIGHTS.DEFAULT)
        })
    }

    public async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('rights')
        })
    }
}
