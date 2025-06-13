import { gameCharacter, otherCharacter } from '@/assets/data/gameData'
function sortCharactersByName(dict: { [name: string]: Character }): { [name: string]: Character } {
  return Object.fromEntries(
    Object.entries(dict).sort(([, a], [, b]) => a.name.localeCompare(b.name, 'zh-Hans-CN'))
  )
}
export const character = reactive<{
  game: { [name: string]: Character }
  other: { [name: string]: OtherCharacter }
  custom: { [name: string]: CustomCharacter }
}>({
  game: sortCharactersByName(gameCharacter),
  other: otherCharacter,
  custom: {}
})
