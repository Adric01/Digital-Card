function toggleMode() {
  /*modo claro e escuro*/
  const html = document.documentElement
  html.classList.toggle("light")
  /*imagem fundo claro - imagem fundo escuro*/
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}