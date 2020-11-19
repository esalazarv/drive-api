import { MigrationInterface, QueryRunner } from 'typeorm';

export class Storage1605689969430 implements MigrationInterface {
  name = 'Storage1605689969430';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `storage` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `quota` bigint UNSIGNED NOT NULL DEFAULT '1000000', `usage` bigint UNSIGNED NOT NULL DEFAULT '0', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `userId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      'ALTER TABLE `storage` ADD CONSTRAINT `FK_1b6226fd0003dbe26f809118849` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `storage` DROP FOREIGN KEY `FK_1b6226fd0003dbe26f809118849`',
    );
    await queryRunner.query('DROP TABLE `storage`');
  }
}
