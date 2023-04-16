
// javascript task#1

//Task 1:
//Calculate the zakat value, first, create a variable named "zakatPercentage" and
//store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
//named "userInput" and take the input from the user using the prompt. Make sure
//the input value is of a type number by converting the input string to a number
//using a suitable method. Then, create a variable named "result" and assign its value
//to the multiplication of the zakat percentage and user input. Finally, use an alert
//message to display the calculated zakat value. The message should look like this:
//"Your zakat value is xxx".




//var zakatPercentage = 0.025;

//var userinput = +prompt("Enter your total value of zakat","zakat value must be a number");

//var result = zakatPercentage * userinput;

//alert("your zakat value is " + result);






//javascript task#2 


//Task 2:
//calculate the fitrah amount, first, ask the user to enter the total number of family
//members using the prompt and store the value in a variable called
//"familyMembers". Next, ask the user to choose a fitrah method by providing them
//options using the prompt, and store the selected method and its price in variables.
//Then, use an if-else block to check the user's input and calculate the fitrah amount
//by multiplying the selected method's price with the number of family members.
//Finally, display the calculated fitrah amount using an alert message.




//var wheat = 250;
//var barley = 450;
//var dates= 2100;
//var raisin = 2800;
//var  familyMembers=+prompt("Total number of family members?");

//var fitrahMethod=prompt("Choose the fitrah method \n a) Dates = 2100 \n b) Wheat = 250 \n c) Raisin = 2800 \n d) Barley = 450");

//fitrahMethod=fitrahMethod.toLowerCase();

//if (fitrahMethod == "a" )

//{
//   totalFitrah=wheat * familyMembers;
//}

//else if (fitrahMethod == "b" )

//{
//  var totalFitrah= barley * familyMembers;
//}

//else if(fitrahMethod == "c" )

//{
//   var totalFitrah= dates * familyMembers;
//}

//else if(fitrahMethod == "d" )

//{
//var totalFitrah = raisin * familyMembers;
//}

//else
//{
//   alert("Invalid Input detected.")
//}
//alert ( "Amount of fitrah for this year is "+"" + totalFitrah );







// JAVASCRIPT task#3


//Task 3:
//Create a program that generates a random number between 1 and 10 and stores it
//in a variable called "secretNumber". Then, ask the user to enter a guess for the
//secret number using a prompt.
//Use an if-else statement to check if the user's guess matches the secret number. If
//the guess is correct, display a message using an alert saying "Congratulations! You
//guessed the secret number". Otherwise, if the guess is too high or too low, display
//an appropriate message informing the user to guess again.



//var secretNumber= "6";

//var guessNumber=prompt("Guess the secret number between 1-10");

//if (guessNumber == secretNumber)
//{
//    alert("Congratulation! You guessed the secret number")
//}
//else if(guessNumber > secretNumber)
//{
//   alert("guessed number is too higher than the secret number. Please guess again")
//}
//else if(guessNumber < secretNumber)
//{
//   alert("guessed number is too lower than the secret number. Please guess again")
//}
//else{
//    alert("Invalid Output.")
//}







 // JAVASCRIPT task#4 


 //Task 4:
 //Create a program that asks the user to enter a name, and then prints out the name
 //with the first letter capitalized (Make your name in capitalized case).


 
 //var userName=prompt("Please enter your name");

 //var lowerCase=userName.toLowerCase();

 //var a = userName[0].toUpperCase();

 //var b = a + lowerCase.slice(1);

 //alert(b);




 // JAVASCRIPT task#5

 
 //Task 5:
 //In this task, you will be creating two empty arrays called "contactNumbers" and
 //"contactNames". Using the prompt, you will ask the user to enter a contact number
 //and contact name. You will then push these values into their respective arrays
 //using the push method. After adding all the contacts, you will display the contact
 //numbers and names in the console. To do this, you will need to use a for loop to
 //iterate through both arrays and log each element to the console.
 //Make sure to use descriptive variable names and comment on your code for clarity.





//var contactNames=[];

//var contactNumbers=[];

//contactNames.push(prompt("Enter name:"));

//contactNumbers.push(+prompt("Enter contact number:"));

//contactNames.push(prompt("Enter name:"));

//contactNumbers.push(+prompt("Enter contact number:"));

//contactNames.push(prompt("Enter name:"));

//contactNumbers.push(+prompt("Enter contact number:"));

//alert("Name: "+contactNames[0]+"   "+"Number: "+contactNumbers[0]

//+"\nName: "+contactNames[1]+"   "+"Number: "+contactNumbers[1] 

//+"\nName: "+contactNames[2]+"   "+"Number: "+contactNumbers[2]);







//  JAVASCRIPT task#6


//Task 6:
//Create an Array that contains different products, and get input from the user in which you
//ask your user to give the position of that element he/she wants. Now remove that Item
//from your array and console the removed item, Also display the remaining items in the
//array and total number of items remaining.





// var product=["neutella shake" , "kitkat shake" , "Hershey's chocolate Milkshake" , "Chilled Chocoholic" , "Oreo shake" ];
 
// var item =prompt("Type the postion number of the flavour you desire: \n" +  product);

// if(item==0)

// {
// console.log("Your flavour: "+product.splice(0,1));
// }

// else if(item==1)

// {
//     console.log("Your flavour: "+product.splice(1,1));
// }

// else if(item==2)

// {
//     console.log("Your flavour: "+product.splice(2,1));
// }

// else if(item==3)

//{
//    console.log("Your flavour: "+product.splice(3,1));
//}

//else if(item==4)

//{
//    console.log("your flavour: "+product.splice(4,1));
//}

//else{
//    console.log("Your desried favour is not available");
//}

//alert("Additional flavours: " + product);
//alert("Entire Flavours: " + product.length);




// JAVASCRIPT task#7


// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible to vote.





// var nationality = prompt("Enter your nationality");

//         var gender = prompt("Enter your gender");

//         var age = +prompt("Enter your age");

//         if (nationality == 'Pakistani' || nationality == 'Indian') 

//         {
//             if (gender == "male" && age > 18) 

//             {
//                 alert("You are eligible to vote")
//             }
//             else if (gender == 'female' && age > 18)
//             {
//                 var marriage = prompt("Marital Status")
//                 if (marriage == "Married") 
//                 {
//                     alert("You are eligible to vote")
//                 }
//                 else 
//                 {
//                     alert("Sorry, You are not eligible to vote")
//                 }
//             }
//             else
//             {
//                 alert("You are not eligible to vote")
//             }

//         }
//         else 
//         {
//             alert("Sorry, You are not eligible to vote")
//         }





// JAVASCRIPT task#8


// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)




// WorldCupSquad = ['Muhammad Husnain','Babar Azam','Shadab khan','Naseem Shah','Shaheen Shah','Shahid Afridi','Muhammad Rizwan','Haris Sohail','Muhammad Amir','Sarfaraz Ahmed','Emmad Wasim','Hasan Ali','Saeed Ajaml','Asif Ali','Younus Khan'];

//  alert("Player selected for WorldCup \n\n"+WorldCupSquad);

//  finalTeamPlayers = WorldCupSquad.slice(0,11);

//  alert( "Players who are gonna play final match tomorrow! \n\n"+finalTeamPlayers);
