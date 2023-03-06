import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync21677910165354 implements MigrationInterface {
    name = 'SchemaSync21677910165354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "description" TO "brand"`);
        await queryRunner.query(`ALTER TABLE "coffee" ALTER COLUMN "brand" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ALTER COLUMN "brand" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "brand" TO "description"`);
    }

}
