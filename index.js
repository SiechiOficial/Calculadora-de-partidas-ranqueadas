function calcularNivelDoJogador(vitorias, derrotas){
    
    var saldoVitorias = vitorias - derrotas
    
    var nivel
    
    if (vitorias < 10){
      nivel = "Ferro"
    } else if (vitorias >= 20 && derrotas <= 8){
      nivel = "Bronze"
    } else if (vitorias >= 20 && derrotas <= 16){
      nivel = "Prata"
    } else if (vitorias >= 50 && derrotas <= 32){
      nivel = "Ouro"
    } else if (vitorias >= 80 && derrotas <= 64){
      nivel = "Diamante"
    } else if (vitorias >= 100 && derrotas <= 128){
      nivel = "Lendário"
    } else (vitorias >= 101) 
      nivel = "Imortal"

    return "O Herói tem um saldo de " + saldoVitorias + " e está no nível " + nivel
  }
  
  var resultado = calcularNivelDoJogador(371, 232)
  console.log(resultado)
  