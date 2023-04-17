function examOne(first, second) {
  if (typeof first === "string" && typeof second === "string") {
    console.log("문자열 데이터를 입력하셨습니다");
  } else if (typeof first === "number" && typeof second === "number") {
    console.log(first + second);
  }
}

examOne("안", "녕"); // "문자열 데이터를 입력하셨습니다"
examOne(4, 3); // 7

//숫자여야만 실행되도록 하기
function examTwo(first, second, third) {
  if (
    typeof first === "number" &&
    typeof second === "number" &&
    typeof third === "number"
  ) {
    console.log(first + second + third);
  } else {
    console.log("error");
  }
}

examTwo(4, 3, 9); //?16
examTwo(4, 3.9, "안녕"); //? error

function examThree(str) {
  // 문자열만 실행되도록 타입을 확인하는 로직을 작성하시오.
  // length 프로퍼티를 사용하지 않고 길이값을 구하시오.
  if (typeof str === "string") {
    let count = 0;
    // for (let i = 0; i < str.length; i++) {
    for (let char of str) {
      //0으로 시작해서 str만큼 1씩 증가
      count++;
    }
    console.log(count);
  } else {
    console.log("error");
  }
}
examThree("jieun"); //? 5

// function examFour(array) {
//   // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
//   if (Array.isArray(array)) {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] < min) {
//         min = array[i];
//       }
//     }
//   }
// }
// examFour([1, 2, 3, 4, 5]);
function examFour(array) {
  // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
  if (Array.isArray(array)) {
    let min = array[0];
    //배열의 첫번째 값을 최솟값으로
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        //배열의 값이 min 보다 작으면 그게 최소값이 됨
        min = array[i];
      }
    }
    console.log(min);
  } else {
    console.log();
  }
}

examFour([11, 2, 9]);

// function examFive(array) {
//   // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
// }

// console.log(examOne(2, 3)); //Question1 덧셈 로직 만들기
// console.log(examTwo(2, 3, 4)); //Question 2 곱셈 로직 만들기
// console.log(examThree("hello")); //Question 3 문자열 길이 구하기.
// console.log(examFour([3, 1, 4, 2])); //Question 4 최솟값 판별하기.
// console.log(examFive([1, 2, 3])); //Question 5 배열값 누산(총합)하기.
