import { MONTHS } from '../constants'

export const getFormattedDate = (myDate) => {
  const date = myDate.getDate()
  const month = MONTHS[myDate.getMonth()]
  const hours = myDate.getHours()
  const minutes = myDate.getMinutes()

  return `${date} ${month} ${hours}:${minutes}`
}

export const capitalize = (str) => str.split(' ').map(word => word.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('')).join(' ')
