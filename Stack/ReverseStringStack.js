 // Reverse a string
 function reverseString(str) {
   let stack = [];
   for (let char of str) {
     console.log(char);
     stack.push(char);
   }

   let reverstring = "";
   while (stack.length > 0) {
     reverstring += stack.pop();
     console.log(reverstring);
   }
   return reverstring;
 }

 console.log(reverseString("Manav"));
