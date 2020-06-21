
const isRussianMessage = (message: string): boolean => {
  const russianSymbols = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('')

  for (const char of message) {
    if (russianSymbols.includes(char)) {
      return true
    }
  }

  return false
}

export default isRussianMessage