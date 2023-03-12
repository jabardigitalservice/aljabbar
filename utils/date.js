export function getHoursAndMinutes (date, separator = '.') {
  const time = new Date(date)
  const hour = `${time.getUTCHours()<10 ? '0' : ''}${time.getUTCHours()}`
  const minute = `${time.getUTCMinutes()<10 ? '0' : ''}${time.getUTCMinutes()}`
  return `${hour}${separator}${minute}`
}

export function getMinutesDifferenceFromNow (date) {
  let comparedTime = new Date(date)
  const hour = comparedTime.getUTCHours()
  const minute = comparedTime.getUTCMinutes()
  comparedTime = hour * 60 + minute 

  let now = new Date()
  const currentHour = now.getHours()
  const currentMinutes = now.getMinutes()
  now = currentHour * 60 + currentMinutes

  return (comparedTime - now)
}
