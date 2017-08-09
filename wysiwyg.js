console.log("WYSIWYG!");

var people = [{
        title: " Norwegian Figure Skater, three-time Olympic Champion, and Film Star",
        name: "Sonja Henie",
        bio: "Henie won more Olympic and World titles than any other ladies' figure skater. At the height of her acting career, she was one of the highest paid stars in Hollywood and starred in a series of box-office hits.",
        image: src = "images/sonjahenie.jpg",
        birth: "Lived: 1912 - 1969"

    },
    {
        title: "American figure skater, 1976 Olympic champion",
        name: "Dorothy Hamill",
        bio: "In 1976, Dorothy Hamill won the gold medal at the Winter Olympic Games in Austria. Shortly after, she earned the World Championship title in Sweden. Hamill's sweet face, bobbed hairstyle and determination led her to become known as 'America's sweetheart.' ",
        image: src = "images/dorothyhamill.jpg",
        birth: "Born: 1956"

    },
    {
        title: " American figure skater and Olympic gold medalist",
        name: "Scott Hamilton",
        bio: "He won four consecutive U.S. championships (1981–1984), four consecutive World Championships (1981–1984) and a gold medal in the 1984 Olympics. His signature move is a backflip, a feat that few other figure skaters could perform.",
        image: src = "images/scotthamilton.jpg",
        birth: "Born: 1958"

    },
    {
        title: "Former pair skater, 1979 World Figure Skating Champion",
        name: "Tai Babilonia",
        bio: "Together with Randy Gardner, The pair qualified for the 1976 and 1980 Winter Olympics. Babilonia was the first figure skater of partial African American descent to compete for the United States at Olympics and win world titles. She is also part Filipino on her father's side and part Native American.",
        image: src = "images/tai.jpg",
        birth: "Born: 1959"
    },
    {
        title: "former figure skater and physician",
        name: "Debi Thomas",
        bio: "She was the 1986 World champion, the 1988 Olympic bronze medalist, and a two-time U.S. national champion. She was the first African-American to hold U.S. National titles in ladies' singles figure skating.[4] Thomas was a pre-med student at Stanford University during this time although it was unusual for a top U.S. skater to go to college at the same time as competing.",
        image: src = "images/debithomas.jpg",
        birth: "Born: 1967"
    },
    {
        title: "Former figure skater. In ladies' singles, Yamaguchi is the 1992 Olympic champion",
        name: "Kristi Yamaguchi",
        bio: "Yamaguchi won the 1991 World Championships. That year the American ladies team, consisting of Yamaguchi, Harding and Nancy Kerrigan, became the only national ladies team to have its members place first, second and third at Worlds. In 1992, Yamaguchi won her first U.S. title and gained a spot to the 1992 Winter Olympics in Albertville, France.",
        image: "images/kristiyamaguchi.jpg",
        birth: "Born: 1972"
    },
];
// debugger
//connect to DOM:
let input = document.getElementById("user-input");
let output = document.getElementById("display-container");
let dynamicCard = document.createElement("person");


for (let i = 0; i < people.length; i++) {
    output.innerHTML += `<div class="container" id="[i]"><person class="container" class="card">
    <img id="pics" src="${people[i].image}"><br>
    <h3 class="name">${people[i].name}</h3>
    <h4 class="title">${people[i].title}</h4>
    <p class="bio">${people[i].bio}</p>
    <p class="lifespan">${people[i].birth}</p>
    </person>
    </div>`;
};








//     let personName = item;
//     let personBio = item;
//     let personDates = item;

//create make card, card to dom function:
// function makeCard() {
//get text from input using .value
// let userInput = input.value;



//     //create div element for HTML