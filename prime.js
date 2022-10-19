// taking a number
let num=23;

// checking wither number is prime or not
for(let i=2; i<num; i++)
{
	if(num%i==0)
	{
		console.log("not Prime");
		break;
	}
}
if(i==num)
{
	console.log("prime");
}
