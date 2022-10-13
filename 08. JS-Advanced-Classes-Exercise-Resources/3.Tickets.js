function solve(input,sortingPrincipe){
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    for(element of input){
        let splitedInput  = element.split("|");
        let destination =  splitedInput[0];
        let price = splitedInput[1];
        let status = splitedInput[2];
        tickets.push(new Ticket(destination,price,status));
       
    };
    let sortedTickets;
    if(sortingPrincipe ==="destination"){
        sortedTickets = tickets.sort()//(curr,next)=>
        //curr.destination.localCompare(next.destination))
    }
    else if(sortedPrincipe === "price"){
     sortedTickets = tickets.sort((curr, next) => curr.price - next.price);
    }
    else{
      sortedTickets = tickets.sort((curr, next) =>
      curr.status.localeCompare(next.status))
    }
}
solve(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination')


