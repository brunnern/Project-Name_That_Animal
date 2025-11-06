const setUpBoxes = () => {
    let wrapperRef = $('.wrapper');
    animals.forEach((animal)=>{
        // added p element with class "name"
        // moved both p elements into div element with class "content" to better manage styling
        let boxMarkup = `
            <div class="box">
                <img class="animal_pic" src="./animal_pics/${animal.animal_name.toLowerCase()}.png" />    
                <div class = "content">
                    <p class = "name"></p>
                    <p class = "care"></p>
                </div>
            </div>
        `;
        wrapperRef.append(boxMarkup);
    });
}

const showInformation = () => {
    setUpBoxes();
    jQuery.each($(".box"), establishFeedTimes);
    $(".box").on("click", function () {
        let indexOfAnimal = $(".box").index(this);
        $(this).find("p.care").text(animals[indexOfAnimal].warning);
    });
    $(".box").on("mouseover", function () {
        let indexOfAnimal = $(".box").index(this);
        $(this).find("p.care").text(animals[indexOfAnimal].scoops + " scopps " + animals[indexOfAnimal].food);
    });
    $(".box").on("mouseout", function () {
        let indexOfAnimal = $(".box").index(this);
        // add line to display name
        $(this).find("p.name").text(animals[indexOfAnimal].animal_name);
        $(this).find("p.care").text(animals[indexOfAnimal].feed_times);
    });
}

const establishFeedTimes = (index) => {
    // add name to console
    console.log(animals[index].animal_name);
    console.log(animals[index].feed_times);
    // add name to display card
    $(".name").eq(index).text(animals[index].animal_name);
    $(".care").eq(index).text(animals[index].feed_times);
}

$(document).ready(showInformation);