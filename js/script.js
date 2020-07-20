var intervalo = null;
var intervaloAtivo = false;
var comecar = document.querySelector('#comecar');
var contador = document.querySelector('#contador');

comecar.addEventListener('click', function () {
  if (intervaloAtivo) {
    clearInterval(intervalo);
  }
  var numeroAtual = 0;
  contador.innerHTML = '<h1>0</h1>';
  intervalo = setInterval(function () {
    contador.innerHTML = '<h1>' + ++numeroAtual + '</h1>';
  }, 1000);
  intervaloAtivo = true;
});
