import { describe, it } from 'node:test';
import assert from 'node:assert';
import { MageBuilder } from './mageBuilder';
import { Mage } from '../characters/Mage';

describe('MageBuilder', () => {
  it('should build a Mage with specified armor and weapon', () => {
    const mageBuilder = new MageBuilder();
    const mage: Mage = mageBuilder
      .withArmor('Robe of the Archmage')
      .withWeapon('Staff of Power')
      .build();

    assert.strictEqual(mage.name, 'Gandalf');
    assert.strictEqual(mage.armor, 'Robe of the Archmage');
    assert.strictEqual(mage.weapon, 'Staff of Power');
  });
});