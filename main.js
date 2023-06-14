let gender=prompt("enter male or female");
let age=parseInt(prompt("enter the age"));

if (gender == "male" && age > 21) 
	{
    console.log("eligible for marraige");	
	}
else if(gender == "female" && age > 18)
	{
	console.log("eligible for marraige");
	}
else
	{
	console.log("not eligible for marraige");
	}