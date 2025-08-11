import { createCharacter } from './Creator'

function main() {
  const warrior = createCharacter('warrior')
  const mage = createCharacter('mage')
  const healer = createCharacter('healer')

  warrior.attack()
  mage.attack()
  healer.attack()
  
  warrior.greet()
  mage.greet()
  healer.greet()
}

main()
