const movies = [
  {
    odgledan: false,
    naziv: "Miracle in Milan",
    godina: 1951,
    drzava: "Italia",
    napomena: "1h 37m",
    glumci: ["Emma Gramatica", "Francesco Golisano", "Paolo Stoppa"],
  },
  {
    odgledan: false,
    naziv: "The Lives of Others",
    godina: 2006,
    drzava: "Germany",
    napomena: "2h 17m",
    glumci: ["Ulrich Mühe", "Martina Gedeck", "Sebastian Koch"],
  },
  {
    odgledan: false,
    naziv: "A Beautiful Mind",
    godina: 2001,
    drzava: "USA",
    napomena: "2h 15m",
    glumci: ["Russell Crowe", "Ed Harris", "Jennifer Connelly"],
  },
];

let tablebody = document.getElementById("body");
let copyArr = [...movies];

//change row's backgroundColor regardless checkbox input
const checkOrUncheck = (num) => {
  movies[num].odgledan = !movies[num].odgledan;
  let row = document.querySelectorAll(".table-row");
  if (movies[num].odgledan) {
    row[num].classList.remove("red-background");
    row[num].classList.add("green-background");
  } else {
    row[num].classList.remove("green-background");
    row[num].classList.add("red-background");
  }
};

//Initial table printing
const createTable = (arr) => {
  arr.forEach((movie, i) => {
    /*  let tr = document.createElement("tr");
    tr.classList.add("table-row");
    tr.classList.add("red-background");
    let td = document.createElement("td");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.addEventListener("change", function () {
      checkOrUncheck(i);
    });
    td.appendChild(input);
    let td1 = document.createElement("td");
    td1.innerHTML = `${movie.naziv}`;
    let td2 = document.createElement("td");
    td2.innerHTML = `${movie.godina}`;
    let td3 = document.createElement("td");
    td3.innerHTML = `${movie.drzava}`;
    let td4 = document.createElement("td");
    td4.innerHTML = `${movie.napomena}`;
    let td5 = document.createElement("td");
    td5.innerHTML = `${movie.glumci}`;
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tablebody.appendChild(tr);
    console.log(tablebody.innerHTML, i); */

    //ovo je mnogo kraci nacin, ali nisam siguran da li je dobra praksa,pa ostavih i ovaj prvi zakomentarisan
    tablebody.innerHTML += `<tr class='table-row red-background' }>
<td><input type='checkbox' onchange='checkOrUncheck(${i})'/></td>
<td >${movie.naziv}</td>
<td>${movie.godina}</td>
<td>${movie.drzava}</td>
<td>${movie.glumci}</td>
<td>${movie.napomena}</td>
</tr>`;
  });
};
createTable(copyArr);

//input results are saving in object which function return
const createNewMovie = () => {
  let naziv = document.getElementById("naziv");
  let godina = document.getElementById("godina");
  let drzava = document.getElementById("drzava").value;
  let napomena = document.getElementById("napomena").value;
  let glumci = document.getElementById("glumci");
  let arr = glumci.value.split(",");

  let newMovie = {
    odgledan: false,
    naziv: naziv.value,
    godina: godina.value,
    drzava,
    napomena,
    glumci: arr,
  };
  validateData(newMovie);
  return newMovie;
};

//Button is active only if the input fields correct filled like placeholder says
const validateData = (movie) => {
  if (
    movie.naziv !== "" &&
    movie.godina > 1930 &&
    movie.godina < 2021 &&
    movie.glumci[0] !== ""
  ) {
    let btn = document.getElementById("add");
    btn.disabled = false;
    return true;
  }
  return false;
};

//adding  a movie
const addMovie = () => {
  let movie = createNewMovie();
  movies.push(movie);
  tablebody.innerHTML = "";
  naziv.value = "";
  godina.value = "";
  drzava.value = "";
  napomena.value = "";
  glumci.value = "";
  let btn = document.getElementById("add");
  btn.disabled = true;
  createTable(movies);
};
