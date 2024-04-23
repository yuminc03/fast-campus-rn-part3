export const getRandomSixNumber = () => {
  const numberArray = [];

  while(numberArray.length < 6) {
    const number = (Math.floor(Math.random() * 45)) + 1;
    const hasNumber = numberArray.filter((prev) => prev === number).length > 0;

    // 뽑은 숫자가 numberArray에 없어야 숫자를 넣음
    if (!hasNumber) {
      numberArray.push(number);
    }
  }

  // 오름차순으로 정렬
  return numberArray.sort((numA, numB) => numA - numB);
}