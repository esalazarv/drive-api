import { MigrationInterface, QueryRunner } from 'typeorm';

export class Storage1605689969430 implements MigrationInterface {
  name = 'Storage1605689969430';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `storage` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `public` tinyint NOT NULL DEFAULT 0, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, UNIQUE INDEX `IDX_252edd3cbb39e121d813196609` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX `IDX_252edd3cbb39e121d813196609` ON `storage`',
    );
    await queryRunner.query('DROP TABLE `storage`');
  }
}
