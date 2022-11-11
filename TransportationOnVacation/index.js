function rentalCarCost(d) {
    //40 dollars daily
    //7+ days $50 off 7+ days equals sum of days - 50
    //+ days $20 off 3 to 6 days equals sum of days - 20
    let Cost = (d * 40)
    let low = 2 
    let high = 7
    
    if (d < 3) {
      return Cost;
    
    }else if ( d > 2 && d < 7) {
      return Cost - 20;
    
    }else {
      return Cost - 50;
    }
  }
    