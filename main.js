function serchFunction() {
    document.getElementById("ticketList").classList.add("block");
    document.getElementById("ticketList").classList.remove("hidden");

    const buses=[
        {
            "from": "Dhaka",
            "to": "Chittagong",
            "fare": 1100,
            "date":"11-06-24"
        },
        {
            "from": "Dhaka",
            "to": "Chittagong",
            "fare": 1100,
            "date":"30-04-24"
        },
        {
            "from": "Dhaka",
            "to": "Chittagong",
            "fare": 1100,
            "date":"01-05-24"
        },
        {
            "from": "Barisal",
            "to": "Chittagong",
            "fare": 900,
            "date":"11-05-24"
        },
        {
            "from": "Barisal",
            "to": "Chittagong",
            "fare": 1200,
            "date":"21-05-24"
        },
        {
            "from": "Barisal",
            "to": "Chittagong",
            "fare": 900,
            "date":"14-05-24"
        },
        {
            "from": "Barisal",
            "to": "Rajshahi",
            "fare": 1900,
            "date":"28-04-24"
        },
        {
            "from": "Barisal",
            "to": "Rajshahi",
            "fare": 1900,
            "date":"02-05-24"
        }
    ];

    
    const fromin=document.getElementById("fromInput").Value.toUpperCase;
    const ton=document.getElementById("toInput").Value.toUpperCase;
    const jourd=document.getElementById("journeydate").Value;
    // console.log(`bnbhn${fromin}`);
    
    // if () {
    //     buses.forEach(bus => {
    //       const busItem = document.createElement('div');
    //       busItem.innerHTML = `
    //         <p>From: ${bus.from}</p>
    //         <p>To: ${bus.to}</p>
    //         <p>Date: ${bus.date}</p>
    //         <p>Time: ${bus.time}</p>
    //         <p>Fare: ${bus.fare}</p>
    //       `;
    //       busList.appendChild(busItem);
    //     });

    
    //   } else {
    //     document.getElementById("").innerHTML = '...';
    //   }
}