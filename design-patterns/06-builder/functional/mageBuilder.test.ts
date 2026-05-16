import { describe, it } from 'node:test';
import assert from 'node:assert';
import { pipe } from './builder';
import { createMage, withArmor, withWeapon } from './mageBuilder';
import type { Mage } from './mageBuilder';

describe('MageBuilder (functional)', () => {
  it('should build a Mage with specified armor and weapon', () => {
    const mage: Mage = pipe(
      withArmor('Robe of the Archmage'),
      withWeapon('Staff of Power'),
    )(createMage('Gandalf'));

    assert.strictEqual(mage.name, 'Gandalf');
    assert.strictEqual(mage.armor, 'Robe of the Archmage');
    assert.strictEqual(mage.weapon, 'Staff of Power');
  });

  it('should not mutate the original mage', () => {
    const baseMage = createMage('Gandalf');
    const enhancedMage = withArmor('Robe')(baseMage);

    assert.strictEqual(baseMage.armor, null);
    assert.strictEqual(enhancedMage.armor, 'Robe');
  });

  it('should compose multiple pipe calls', () => {
    const mage = pipe(
      withArmor('Leather'),
      withWeapon('Dagger'),
    )(createMage('Rogue'));

    assert.strictEqual(mage.name, 'Rogue');
    assert.strictEqual(mage.armor, 'Leather');
    assert.strictEqual(mage.weapon, 'Dagger');
  });
});
