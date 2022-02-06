import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1644163322453 implements MigrationInterface {
    name = 'myInit1644163322453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customers" ("id" SERIAL NOT NULL, "customer_name" character varying NOT NULL, "address" character varying NOT NULL, "zipCode" boolean NOT NULL, "varNumber" boolean NOT NULL, CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customers"`);
    }

}
