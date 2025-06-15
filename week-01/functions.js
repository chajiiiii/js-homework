// 1. 인사말 메시지
// 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.

function greetUser(name) {
  return `안녕하세요! ${name}님. 좋은 하루되세요!`;
}

console.log(greetUser("George"));

// 2. 원가 계산
// 판매가를 입력 받아 원가를 계산하는 함수를 작성합니다

const calculateOriginalPrice = function (priceWithTax) {
  let taxRate = 3.3;
  return (priceWithTax / (taxRate + 100)) * 100;
};

console.log(calculateOriginalPrice(36300));

// 3. 주류 판매 가능 여부
// 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.

const canSellAlcohol = (registrationCard) => registrationCard.age >= 19;

const registrationCard01 = {
  name: "Ben",
  age: 23,
  gender: "male",
};

console.log(canSellAlcohol(registrationCard01));

// 4. 할인가 계산
// 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다.

const getDiscountedPrice = (originalPrice, discountPercent) => {
  return originalPrice * (1 - discountPercent / 100);
};

console.log(getDiscountedPrice(18700, 20));

// 5. 등급 판단
// 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.

function grades(score) {
  let gradeObj = { score: score };

  if (score >= 90) {
    gradeObj.grade = "A";
    gradeObj.description = "매우우수";
  } else if (score >= 80) {
    gradeObj.grade = "B";
    gradeObj.description = "우수";
  } else if (score >= 70) {
    gradeObj.grade = "C";
    gradeObj.description = "보통";
  } else if (score >= 60) {
    gradeObj.grade = "D";
    gradeObj.description = "미달, 통과 기준 근접";
  } else {
    gradeObj.grade = "F";
    gradeObj.description = "낙제";
  }

  return gradeObj;
}

console.log(grades(68));
