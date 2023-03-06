'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CoffeeRefactor1677902908112 = void 0;
class CoffeeRefactor1677902908112 {
  async up(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
    );
  }
  async down(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
    );
  }
}
exports.CoffeeRefactor1677902908112 = CoffeeRefactor1677902908112;
//# sourceMappingURL=1677902908112-CoffeeRefactor.js.map
