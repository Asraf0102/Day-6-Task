//4.write a class to calculate uber price.
class Uber {
    constructor(BaseFare=15,CostPerMile=2,CostPerMinute=1,BookingFee=10,time=1,mile=2){
    this.BaseFare=BaseFare;
    this.CostPerMile=CostPerMile
    this.CostPerMinute=CostPerMinute;
    this.BookingFee=BookingFee;
    this.time=time;
    this.mile=mile;
    }
    totalPrice(){
       console.log(this.BaseFare+this.BookingFee+
        this.CostPerMile*this.time+this.mile)
    }
}
let bike = new Uber(); 
bike.totalPrice()
console.log(bike)
