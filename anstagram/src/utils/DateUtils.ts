export const getMillisToDateString = (millis: number) => {
  const date = new Date(millis);
  // 2022-01-01 처럼 한 글자 숫자 앞에 0을 붙여주기 위함
  return `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`
}