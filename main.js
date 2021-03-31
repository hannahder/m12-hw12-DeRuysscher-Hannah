let colors = ["red",
                "blue.",
                "green.",
                "yellow.",
                "pink.",
                "purple.",
                "black.",
                "white.",
                "orange.",
                "grey."];

const button = document.getElementById('button')

button.onclick = function(){
  const randColor = colors[Math.floor(Math.random()*colors.length)];
  document.getElementById('color').innerHTML = randColor;
};
