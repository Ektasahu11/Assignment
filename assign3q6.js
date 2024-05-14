/* 6. inputArr = [1,2,3,9,10,7,5,4,3]
answer = [9, 10, 7]
User array.filter and return numbers greater than 5. */



const inputArr = [1,2,3,9,10,7,5,4,3];
const answer = inputArr.filter(number => number > 5);
console.log(answer);

/* 7. const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
    ];
    Output = [
    { name: "Ram", average: 70 },
    { name: "Mohan", average: 80 },
    { name: "Sai", average: 70 },
    { name: "Hemang", average: 85 },
    ];
    Use array.map and array.reduce.*/
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
    ];
  
    const output = students.map(student => ({
        name: student.name,
        average: student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length,
    }));
  console.log(output)

  /* 8. Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.*/

function findSingleDigitSum(num) {
    while (num >= 10) {
      let sum = 0;
      while (num > 0) {
        sum += num % 10;
        console.log('sum:',sum)
        num = Math.floor(num / 10);
        console.log("num",num)
      }
      num = sum;
    }
    return num;
  }
  
  const number = 456;
  const result = findSingleDigitSum(number);
  console.log("Result:", result);

  
  /* 9. Write a function to count the number of words in a paragraph.*/


let paragraph=" Write a function to  count  the number of words in a paragraph."
const words = paragraph.split(' ');
const filteredWords = words.filter(word => word.length > 0);
console.log(filteredWords)
console.log("Number of words is :",filteredWords.length)


/* 10. Write a function to reverse a string.
 Input - Hello
 Outpur - olleH */

 function reverseString(input) {
    const characters = input.split('');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join('');
    return reversedString;
  }
  const input = "Hello";
  const output = reverseString(input);
  console.log("Output:", output);


/* 11. Input

const students=[
    {student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    },
    {student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    },
    {student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.
*/


const students=[
    {student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    },
    {student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    },
    {student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    }
  ]
    
  
  let output =students.map((studentD)=>{
    let studentName=Object.keys(studentD)
    // console.log(studentName)
    let scores=Object.values(studentD[studentName])
    // console.log(scores)
    const average=scores.reduce((sum,score)=>sum+score,0)/scores.length
    // console.log(average)
    return {[studentName]:{average}}
  })
  
  console.log(output)
