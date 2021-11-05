 class  RestaurantList{ 
     
    restaurantlist = [
        {"Name": "shewarma", "address":"gorakshanapeta", "city":"Rajahmundry"},
        {"Name": "fast foods", "address":"thadithota", "city":"kakinada"},
        {"Name": "ice creams", "address":"Kudlu", "city":"Bangalore"},
        {"Name": "KFC", "address":"charminar", "city":"Hyderabad"},
        {"Name": "Dominos", "address":"T nagar", "city":"Chennai"},
        {"Name": "Cake park", "address":"Arapukottai", "city":"Madurai"},
        {"Name": "Mc Donalds", "address":"Korlagunta", "city":"Tirupati"},
        {"Name": "inimai", "address":"Arapukottai", "city":"Madurai"},

    ]



PrintAllRestaurantNames = () => {
    
    for(let z of this.restaurantlist){
        console.log(z.Name)
    }
}



filterRestaurantByCity = (City) => {
    
    City = "Madurai"
    let ul = `<ul>`
    for (let x of this.restaurantlist){
        if(x.city == City){
            ul+= `<li>${x.Name}</li>`
        }  
    }
    `</ul>`
    document.getElementById('myid1').innerHTML = ul
}
}

 var abc = new RestaurantList()



const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    };
    



totalOrders = () =>{
    var total=0
    
    for(let z in orderData){
         total += orderData[z]
        
    }
    document.getElementById("myid2").innerHTML="Total number of orders placed = "+ total
}



orderProportions = () => {
    count = 0;
    document.getElementById("myid3").innerHTML = "List of order proportions = " + "[" + Object.keys(orderData) + "]"
    for (let z in orderData){
        count += 1
        
    }
    document.getElementById("myid3").innerHTML ="Total number of order proportions = "  + count
    document.getElementById("myid3").innerHTML = "List of order proportions = " + "[" + Object.keys(orderData) + "]" + `<br/>` + "Total number of order proportions = "  + count
}



percentage = () => {
   
    var total = 0
    for(let z in orderData ){
        total += orderData[z]
    }
    let resultArray = []
    const inputArray = Object.keys(orderData)
    for(let z in inputArray){
        resultArray.push( {
            id : parseInt(z)+1 ,
            order : inputArray[z],
            'order percentage' : ((orderData[inputArray[z]]/total)*100).toFixed(2),
            Restaurant : 'Punjabi Tadka',
         });
         
      ((orderData[z]/total)*100).toFixed(2)
       }
    
       console.log(resultArray)
    }