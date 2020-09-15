import { MigrationInterface, QueryRunner } from "typeorm";

export class fs1600149083514 implements MigrationInterface {
  name = "fs1600149083514";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "prefectures" ("id" SERIAL NOT NULL, "prefecture" character varying NOT NULL, "flowerId" integer, CONSTRAINT "PK_cd76c54142d0f5caa63a82bf29a" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "flowers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_5dcdc7d45b8dbbde569c5f3f10c" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "prefectures" ADD CONSTRAINT "FK_3b60fe719f09b891bd00b7005bd" FOREIGN KEY ("flowerId") REFERENCES "flowers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "prefectures" DROP CONSTRAINT "FK_3b60fe719f09b891bd00b7005bd"`
    );
    await queryRunner.query(`DROP TABLE "flowers"`);
    await queryRunner.query(`DROP TABLE "prefectures"`);
  }
}
