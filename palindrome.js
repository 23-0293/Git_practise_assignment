// taking a string
let str="masai";

// Checking wither string is palindrome or not
let str1="";
for(let i=str.length-1; i>=0; i--)
{
	str1=str1+str[i];
}
if(str==str1)
{
	console.log(str+" is palindrome");
}
else
{
	console.log(str+" is not palindrome");
}
