console.log("WYSIWYG!");

var people = [{
        title: " Norwegian Figure Skater, Three Time Olympic Champion, and Film Star",
        name: "Sonja Henie",
        bio: "Henie won more Olympic and World titles than any other ladies' figure skater. At the height of her acting career, she was one of the highest paid stars in Hollywood and starred in a series of box-office hits.",
        image: src = "images/sonjahenie.jpg",
        birth: "Lived: 1912 - 1969"

    },
    {
        title: "American Figure Skater, 1976 Olympic Champion",
        name: "Dorothy Hamill",
        bio: "In 1976, Dorothy Hamill won the gold medal at the Winter Olympic Games in Austria. Shortly after, she earned the World Championship title in Sweden. Hamill's sweet face, bobbed hairstyle and determination led her to become known as 'America's sweetheart.' ",
        image: src = "images/dorothyhamill.jpg",
        birth: "Born: 1956"

    },
    {
        title: " American Figure Skater & Olympic Gold Medalist",
        name: "Scott Hamilton",
        bio: "He won four consecutive U.S. championships (1981–1984), four consecutive World Championships (1981–1984) and a gold medal in the 1984 Olympics. His signature move is a backflip, a feat that few other figure skaters could perform.",
        image: src = "images/scotthamilton.jpg",
        birth: "Born: 1958"

    },
    {
        title: "Former Pair Skater, 1979 World Figure Skating Champion",
        name: "Tai Babilonia",
        bio: "Together with Randy Gardner, The pair qualified for the 1976 and 1980 Winter Olympics. Babilonia was the first figure skater of partial African American descent to compete for the United States at the Olympics and win world titles.",
        image: src = "images/tai.jpg",
        birth: "Born: 1959"
    },
    {
        title: "Former Figure Skater & Physician",
        name: "Debi Thomas",
        bio: "She was the 1986 World champion, the 1988 Olympic bronze medalist, and a two-time U.S. national champion. She was the first African-American to hold U.S. National titles in ladies' singles figure skating.Thomas was a pre-med student at Stanford University during this time although it was unusual for a top U.S. skater to go to college at the same time as competing.",
        image: src = "images/debithomas.jpg",
        birth: "Born: 1967"
    },
    {
        title: "Former Figure Skater & 1992 Olympic Champion",
        name: "Kristi Yamaguchi",
        bio: "Yamaguchi won the 1991 World Championships. That year the American ladies team, consisting of Yamaguchi, Harding and Nancy Kerrigan, became the only national ladies team to have its members place first, second and third at Worlds. In 1992, Yamaguchi won her first U.S. title and qualified for the 1992 Winter Olympics.",
        image: "images/kristiyamaguchi.jpg",
        birth: "Born: 1972"
    },
];

//connect to DOM:
let input = document.getElementById("user-input");
let output = document.getElementById("display-container");
let myBio = document.getElementById("bio");
//add element
let eachCard = document.createElement("person");



//iterate over array
for (let i = 0; i < people.length; i++) {

    //create card for array properties display to DO
    output.innerHTML += `<person class="container" id="card">
    <img id="pics" src="${people[i].image}"><br>
    <h3 class="name">${people[i].name}</h3>
    <h4 class="title">${people[i].title}</h4>
    <p id="bio">${people[i].bio}</p>
    <p class="lifespan">${people[i].birth}</p>
    </person>`;
};


for (let i = 0; i < people.length; i++) {

    //debugger
    //select each card with click event listener
    function addSelected(event) {
        //select each card
        let selectedCard = card[i];
        console.log(selectedCard);
        //select each bio
        let newBio = bio[i];
        console.log(newBio);
        selectedCard.addEventListener("click", function() {
            //call remove select function
            removeSelection();
            console.log(removeSelection);
            //adds dotted border on click
            selectedCard.classList.add("selectedCard");
            input.value = "";
            //places focus in text box on click
            input.focus();
            //call function to target text in bio
            keyEvent(myBio, newBio);
        })

        function keyEvent(selectedCard, myBio) {
            input.addEventListener("keyup", function(event) {
                let selectedCard = card[i];
                if (selectedCard.classList.contains("selectedCard")) {
                    console.log("run");
                    let newBio = event.currentTarget.value;
                    myBio.innerHTML = newBio;
                    //return clears text area
                    if (event.keyCode === 13) {
                        myBio.innerHTML = newBio;
                        input.value = " ";
                    }
                }
            })
        };
    }
    addSelected();
};



//remove border 
function removeSelection() {
    for (let i = 0; i < card.length; i++) {
        card[i].classList.remove("selectedCard");
    }
};