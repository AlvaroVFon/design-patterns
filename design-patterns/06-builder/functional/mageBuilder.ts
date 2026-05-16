export interface Mage {
  name: string;
  armor: string | null;
  weapon: string | null;
}

export const createMage = (name: string): Mage => ({
  name,
  armor: null,
  weapon: null,
});

export const withArmor = (armor: string) => (mage: Mage): Mage => ({
  ...mage,
  armor,
});

export const withWeapon = (weapon: string) => (mage: Mage): Mage => ({
  ...mage,
  weapon,
});
