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

    document.write(`$buses[2].from`);
}