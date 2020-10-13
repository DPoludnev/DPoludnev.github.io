const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
    const countires = ['U.S.A', 'Russia', 'England', 'France'];
    const country = countires[Math.floor(Math.random() * countires.length - 1)];
    document.write("The random country is: " + country)
}