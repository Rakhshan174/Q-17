//Shrinking Guest List : You just found out that your new dinner table won't arrive in time for the dinner, 
// and you space for only two guest.

//(a) Start with yoour program from Exercise 16.Add a new line that print a message saying that you can 
//invite only two people for dinner.
//(b) Remove guest from your list one at a time until only two names remain in your list.Each time you print a 
// message to that person letting them know you're sorry you can't invite them to dinner.
//(c) print a message to each of the two people still on your list, letting them know they're still invited.
// (d)Remove the last two name from your list, so you have an empty list. print your list to make sure 
//you actually have an empty list at the end of your program.

let guests : string[] =["Ali", "Bilal", "Carry" ];//"Dawood", "Hamza"];
//console.log("Due to limited space, only two people can be invited for dinner.");

// Removing guests until only two names remain

while (guests.length > 2) {
    const removedGuest = guests.pop();
   //console.log(`sorry, ${removedGuest}, you're no longer invited to dinner`);
}
// printing invitation to the remaining two guests
//guests.forEach((guest)=>{
    //console.log(`Dear ${guest}, you're still invited to dinner`);
 // });

 // Removing the last two names from list
 guests.pop();
 guests.pop();

 // printing the final list to confirm it's empty
 console.log("Final guest list:", guests);