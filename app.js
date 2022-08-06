//Part1

let favNumber = 7;
let url = "http://numbersapi.com";


// Q1.
// axios.get(`${url}/${favNumber}?json`).then(res => {
//   console.log(res);
// });

$.getJSON(`${url}/${favNumber}?json`).then(data => {
  console.log(data);
});

// Q2.
let favNumbers = [7, 8, 18];
$.getJSON(`${url}/${favNumbers}?json`).then(data => {
  console.log(data);
});

// Q3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<h2>${data.text}</h2>`));
});

