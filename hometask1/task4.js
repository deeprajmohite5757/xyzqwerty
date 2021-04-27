function rentalCarCost(days) {
  // Your solution here
  if (days < 3)
    //Total cost for under 3 days
    return days * 40;
  else if (days < 7)
    //Total cost for under 7 days
    return days * 40 - 20;
  //Total cost for above 7 days
  else return days * 40 - 50;
}
