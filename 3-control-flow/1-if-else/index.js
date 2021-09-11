
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 3;

if (hour >= 6 && hour < 12) 
    console.log('Good Morning');

else if (hour >= 12 && hour < 18) 
    console.log('Good Afternoon');

else if (hour >= 18 && hour < 24)    
    console.log('Good Evening');
else
    console.log('Go back to sleep');

