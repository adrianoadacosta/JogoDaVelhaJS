let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas que vai incrementar a cada rodada comeca zerado
let player1 = 0;
let player2 = 0;

//ve quem vai jogar
function checkEl(player1, player2) {
  if (player1 == player2) {
    //x
    el = x;
  } else {
    //o
    el = o;
  }
  return el;
}
// adicionando evento de click nos boxes que vão receber as jogadas
for (let i = 0; i < boxes.length; i++) {
  // quando alguém clica na caixa
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    if (this.childNodes.length == 0) {
      //verifica se não tem nada dentro do box pra não ter dois itens no mesmo box
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);

      // computa a jogada alternando os jogadores
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }
    }
  });
}
