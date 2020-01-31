import { MONTHS } from '../constants'

export const getFormattedDate = (myDate) => {
  const date = myDate.getDate()
  const month = MONTHS[myDate.getMonth()]
  const hours = myDate.getHours()
  const minutes = myDate.getMinutes()

  return `${date} ${month} ${hours}:${minutes}`
}
