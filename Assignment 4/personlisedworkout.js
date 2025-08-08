function personalizedWorkout(Inputtime){
    const parts = Inputtime.split(" ");
    const time = parts[0];
    const AmorPm = parts[1];

    const minHr=time.split(":");
    let hr=Number(minHr[0]);

    if(hr>=5 && hr<9 && AmorPm=="AM"){
        return "cardio session";
    }
    else if(hr>=9 && hr<12 && AmorPm=="AM"){
        return "strength training";
    }
    else if(hr>=12 && hr<5 && AmorPm=="PM"){
        return "yoga and flexibilty";
    }
    else if(hr>=5 && hr<8 && AmorPm=="PM"){
        return "high-intensity interval training";;
    }
    else{
        return "light stretching and cool down";
    }

}

console.log(personalizedWorkout("06:30 AM"));
console.log(personalizedWorkout("10:15 AM"));
console.log(personalizedWorkout("03:00 PM"));
console.log(personalizedWorkout("05:45 PM"));
console.log(personalizedWorkout("09:10 PM"));