import {MigrationInterface, QueryRunner} from "typeorm";

export class migration11644525126497 implements MigrationInterface {
    name = 'migration11644525126497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customers" ("id" SERIAL NOT NULL, "customerName" character varying NOT NULL, "address" character varying NOT NULL, "zipCode" character varying NOT NULL, "vatNumber" character varying NOT NULL, CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customers"`);
    }

}
