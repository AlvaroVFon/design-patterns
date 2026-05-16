import { Mage } from './characters/Mage'
import { Dragon } from './creatures/Dragon'
import { CreatureAdapter } from './adapters/creature.adapter'
import { Character } from './interfaces/Character'

const mage = new Mage()
const dragon = new Dragon()
const adaptedDragon = new CreatureAdapter(dragon)

function activateCharacter(character: Character) {
  character.attack()
  character.takeDamage(15)
  character.showStatus()
}

activateCharacter(adaptedDragon)
activateCharacter(mage)
