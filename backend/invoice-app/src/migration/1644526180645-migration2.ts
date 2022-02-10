import {MigrationInterface, QueryRunner} from "typeorm";

export class migration21644526180645 implements MigrationInterface {
    name = 'migration21644526180645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("customerName" character varying NOT NULL, "address" character varying NOT NULL, "zipCode" character varying NOT NULL, "vatNumber" character varying NOT NULL, CONSTRAINT "PK_6a69ab7591cb28e56ebdf420940" PRIMARY KEY ("customerName"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
