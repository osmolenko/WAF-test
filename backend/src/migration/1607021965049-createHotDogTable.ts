import {MigrationInterface, QueryRunner} from 'typeorm';

export class createHotDogTable1607021965049 implements MigrationInterface {
    name = 'createHotDogTable1607021965049';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "HotDog" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(32) NOT NULL, "price" integer NOT NULL, "description" character varying(300) NOT NULL, "link" character varying(500) NOT NULL, CONSTRAINT "PK_d335fa09e1ebbaab3870be5a59f" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "HotDog"`);
    }
}
