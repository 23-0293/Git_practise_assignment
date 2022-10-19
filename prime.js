// taking a number
let num=23;
let count = 0;

// checking wither number is prime or not
for(let i=2; i<num; i++)
{
	if(num%i==0)
	{
		count = 1;
		console.log("not Prime");
		break;
	}
}
if(count == 0)
{
	console.log("prime");
}
