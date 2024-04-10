
function addTimes() {
    for(let i = 8; i <= 12; i++) {
        let onTheHour = document.createElement("div");
        let timeBlock = document.createElement("div");

        timeBlock.setAttribute("id", "times");
        timeBlock.innerHTML = i + ":00";

        onTheHour.appendChild(timeBlock);
        document.getElementById("dayTimes").appendChild(onTheHour); 

        for(let j = 15; j < 60; j += 15) {
            let block = document.createElement("div");
            let timeBlock = document.createElement("div");

            timeBlock.setAttribute("id", "times");
            timeBlock.innerHTML = i + ":" + j;

            block.appendChild(timeBlock);
            db.collection("Courses").doc("baseIdea").collection("TeeTimes").get().then((times) => {
                times.forEach(data => {
                    let secs = data.data().TeeTime.seconds;
                    var t = new Date(1970, 0, 1); // Epoch
                    t.setSeconds(secs - (7 * 60 * 60));
                    var time = t.getHours() + ":" + t.getMinutes();
                    if(time == timeBlock.innerHTML) {
                        console.log(data.data().Golfer);
                        db.collection("Golfers").doc(data.data().Golfer).get().then((golfer) => {
                            block.innerHTML += golfer.data().Name + " Joined By " + data.data().Players + " More";
                        });
                    }
                });
            });
            document.getElementById("dayTimes").appendChild(block);
        }
    }

    for(let i = 1; i <= 9; i++) {
        let onTheHour = document.createElement("div");
        let timeBlock = document.createElement("div");

        timeBlock.setAttribute("id", "times");
        timeBlock.innerHTML = i + ":00";

        onTheHour.appendChild(timeBlock);
        document.getElementById("dayTimes").appendChild(onTheHour); 

        for(let j = 15; j < 60; j += 15) {
            let block = document.createElement("div");
            let timeBlock = document.createElement("div");

            timeBlock.setAttribute("id", "times");
            timeBlock.innerHTML = i + ":" + j;

            block.appendChild(timeBlock);
            document.getElementById("dayTimes").appendChild(block);
        }
    }
}

addTimes();