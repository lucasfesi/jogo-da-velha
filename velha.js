var jogador = 'x';
var jogada = 0;

function chkCpu() {
	var cpu = document.getElementById('cpu').checked
	if(cpu) {
		alert("Jogo modo computador, escolha o nível");
		document.getElementById("textoNivel").style.visibility = "none";
	} else {
		alert("Jogo modo dois jogadores");
		document.getElementById("textoNivel").style.visibility = "hidden";
	}
}

function chkJogo(id) {
	var alt = chkAlt(id);
	var cpu = document.getElementById('cpu').checked;
	var nivel = document.getElementsByName("nivel");
		
	if(alt == "branco") {
		document.getElementById(id).src = "img/" + jogador + ".png";
		document.getElementById(id).alt = jogador;
		
		jogada++;
		
		if(chkVitoria()) {
			alert("Acabou, vitoria do jogador: " + jogador);
			location.reload();		
		}
		if(jogada >= 9) {
			alert("Empatou o jogo ");
			location.reload();
		}
			
		if(jogador == 'x') {
			jogador = 'o';
		} else {
			jogador = 'x';
		}
	}
	if(cpu && jogador == 'o') {
		chkJogo(jogadaDoComputador());
	}
		
}

function jogadaDoComputador() {
    var idCpu = jogadaVenceComputador();
	if (idCpu != "") {
		return idCpu;
	} 
	
	var idCpu = jogadaDefendeComputador(); 
	if (idCpu != "") {
		return idCpu;
	} 
	
	var idCpu = jogadaPadraoComputador(); 
	if (idCpu != "") {
		return idCpu;
	}	
	return 'cel' + Math.floor((Math.random() * 9) + 1);
}



//funcao busca se existe alguma jogada para o computador vencer o jogo
function jogadaVenceComputador() {
	// valida se a cel1 esta em branco
	if(chkAlt("cel1") == "branco") {
		if (((chkAlt("cel2") == jogador) && (chkAlt("cel3") == jogador)) || ((chkAlt("cel5") == jogador) && (chkAlt("cel9") == jogador)) || ((chkAlt("cel4") == jogador) && (chkAlt("cel7") == jogador))) {
			return "cel1";
		}
	}
	// valida se a cel2 esta em branco
	if(chkAlt("cel2") == "branco") {
		if (((chkAlt("cel1") == jogador) && (chkAlt("cel3") == jogador)) || ((chkAlt("cel5") == jogador) && (chkAlt("cel8") == jogador))) {
			return "cel2";
		}
	}
	// valida se a cel3 esta em branco
	if(chkAlt("cel3") == "branco") {
		if (((chkAlt("cel1") == jogador) && (chkAlt("cel2") == jogador)) || ((chkAlt("cel5") == jogador) && (chkAlt("cel7") == jogador)) || ((chkAlt("cel6") == jogador) && (chkAlt("cel9") == jogador))) {
			return "cel3";
		}
	}
	// valida se a cel4 esta em branco
	if(chkAlt("cel4") == "branco") {
		if (((chkAlt("cel1") == jogador) && (chkAlt("cel7") == jogador)) || ((chkAlt("cel5") == jogador) && (chkAlt("cel6") == jogador))) {
			return "cel4";
		}
	}
	// valida se a cel5 esta em branco
	if(chkAlt("cel5") == "branco") {
		if (((chkAlt("cel1") == jogador) && (chkAlt("cel9") == jogador)) || ((chkAlt("cel2") == jogador) && (chkAlt("cel8") == jogador)) || ((chkAlt("cel3") == jogador) && (chkAlt("cel7") == jogador)) || ((chkAlt("cel4") == jogador) && (chkAlt("cel6") == jogador))) {
			return "cel5";
		}
	}
	// valida se a cel6 esta em branco
	if(chkAlt("cel6") == "branco") {
		if (((chkAlt("cel3") == jogador) && (chkAlt("cel9") == jogador)) || ((chkAlt("cel4") == jogador) && (chkAlt("cel5") == jogador))) {
			return "cel6";
		}
	}
	// valida se a cel7 esta em branco
	if(chkAlt("cel7") == "branco") {
		if (((chkAlt("cel1") == jogador) && (chkAlt("cel4") == jogador)) || ((chkAlt("cel3") == jogador) && (chkAlt("cel5") == jogador)) || ((chkAlt("cel8") == jogador) && (chkAlt("cel9") == jogador))) {
			return "cel7";
		}
	}
	// valida se a cel8 esta em branco
	if(chkAlt("cel8") == "branco") {
		if (((chkAlt("cel2") == jogador) && (chkAlt("cel5") == jogador)) || ((chkAlt("cel7") == jogador) && (chkAlt("cel9") == jogador))) {
			return "cel8";
		}
	}
	// valida se a cel9 esta em branco
	if(chkAlt("cel9") == "branco") {
		if (((chkAlt("cel1") == jogador) && (chkAlt("cel5") == jogador)) || ((chkAlt("cel3") == jogador) && (chkAlt("cel6") == jogador)) || ((chkAlt("cel7") == jogador) && (chkAlt("cel8") == jogador))) {
			return "cel9";
		}
	}
	return "";
}
//funcao busca se existe a necessidade de defesa por parte do computador
function jogadaDefendeComputador() {
	// verifica qual letra do jogador para defender da letra inversa
	if(jogador == "x") {
		var adversario = "o";
	} else {
		var adversario = "x";
	}
	// valida se a cel1 esta em branco
	if(chkAlt("cel1") == "branco") {
		if (((chkAlt("cel2") == adversario) && (chkAlt("cel3") == adversario)) || ((chkAlt("cel5") == adversario) && (chkAlt("cel9") == adversario)) || ((chkAlt("cel4") == adversario) && (chkAlt("cel7") == adversario))) {
			return "cel1";
		}
	}
	// valida se a cel2 esta em branco
	if(chkAlt("cel2") == "branco") {
		if (((chkAlt("cel1") == adversario) && (chkAlt("cel3") == adversario)) || ((chkAlt("cel5") == adversario) && (chkAlt("cel8") == adversario))) {
			return "cel2";
		}
	}
	// valida se a cel3 esta em branco
	if(chkAlt("cel3") == "branco") {
		if (((chkAlt("cel1") == adversario) && (chkAlt("cel2") == adversario)) || ((chkAlt("cel5") == adversario) && (chkAlt("cel7") == adversario)) || ((chkAlt("cel6") == adversario) && (chkAlt("cel9") == adversario))) {
			return "cel3";
		}
	}
	// valida se a cel4 esta em branco
	if(chkAlt("cel4") == "branco") {
		if (((chkAlt("cel1") == adversario) && (chkAlt("cel7") == adversario)) || ((chkAlt("cel5") == adversario) && (chkAlt("cel6") == adversario))) {
			return "cel4";
		}
	}
	// valida se a cel5 esta em branco
	if(chkAlt("cel5") == "branco") {
		if (((chkAlt("cel1") == adversario) && (chkAlt("cel9") == adversario)) || ((chkAlt("cel2") == adversario) && (chkAlt("cel8") == adversario)) || ((chkAlt("cel3") == adversario) && (chkAlt("cel7") == adversario)) || ((chkAlt("cel4") == adversario) && (chkAlt("cel6") == adversario))) {
			return "cel5";
		}
	}
	// valida se a cel6 esta em branco
	if(chkAlt("cel6") == "branco") {
		if (((chkAlt("cel3") == adversario) && (chkAlt("cel9") == adversario)) || ((chkAlt("cel4") == adversario) && (chkAlt("cel5") == adversario))) {
			return "cel6";
		}
	}
	// valida se a cel7 esta em branco
	if(chkAlt("cel7") == "branco") {
		if (((chkAlt("cel1") == adversario) && (chkAlt("cel4") == adversario)) || ((chkAlt("cel3") == adversario) && (chkAlt("cel5") == adversario)) || ((chkAlt("cel8") == adversario) && (chkAlt("cel9") == adversario))) {
			return "cel7";
		}
	}
	// valida se a cel8 esta em branco
	if(chkAlt("cel8") == "branco") {
		if (((chkAlt("cel2") == adversario) && (chkAlt("cel5") == adversario)) || ((chkAlt("cel7") == adversario) && (chkAlt("cel9") == adversario))) {
			return "cel8";
		}
	}
	// valida se a cel9 esta em branco
	if(chkAlt("cel9") == "branco") {
		if (((chkAlt("cel1") == adversario) && (chkAlt("cel5") == adversario)) || ((chkAlt("cel3") == adversario) && (chkAlt("cel6") == adversario)) || ((chkAlt("cel7") == adversario) && (chkAlt("cel8") == adversario))) {
			return "cel9";
		}
	}
	return "";
}

function jogadaPadraoComputador () {
	// verifica qual letra do adversario
	if(jogador == "x") {
		var adversario = "o";
	} else {
		var adversario = "x";
	}
	// regra para jogada 1
	if(jogada == 0) {
		return "cel1";
	}
	// regra para jogada 2
	if(jogada == 1) {
		if(chkAlt("cel5") == "branco") {
			return "cel5";
		} else {
			return "cel1"
		}
	}
	// regra para jogada 3 - AINDA NAO NECESSÁRIO
	if(jogada == 2) {
		return "";
	}
	// regra para jogada 4
	if(jogada == 3) {
		// Ver se o centro é do adversário
		if(chkAlt("cel5") == adversario) {
			return "cel3";
		// indica que o centro é do jogador
		} else {
			casaAdversario1 = chkCasa1(adversario);
			casaAdversario2 = chkCasa2(adversario, casaAdversario1);
			// varremos as casas com branco e vemos se esta é uma boa opcao de jogada
			var casaDisponivel = chkAlt("cel1");
			if (casaDisponivel == "branco") {
				if	((casaAdversario1 == "cel2" && casaAdversario2 == "cel8") ||
					 (casaAdversario1 == "cel2" && casaAdversario2 == "cel6") ||
					 (casaAdversario1 == "cel4" && casaAdversario2 == "cel8") ||
					 (casaAdversario1 == "cel4" && casaAdversario2 == "cel6") ||
					 (casaAdversario1 == "cel2" && casaAdversario2 == "cel9") ||
					 (casaAdversario1 == "cel4" && casaAdversario2 == "cel9")){
					return "cel1";
				}
			}
			// não achei situação para jogar na 2
			//var casaDisponivel = chkAlt("cel2");

			var casaDisponivel = chkAlt("cel3");
			if (casaDisponivel == "branco") {
				if	((casaAdversario1 == "cel2" && casaAdversario2 == "cel7") ||
					 (casaAdversario1 == "cel2" && casaAdversario2 == "cel4") ||
					 (casaAdversario1 == "cel6" && casaAdversario2 == "cel7") ||
					 (casaAdversario1 == "cel6" && casaAdversario2 == "cel8")){
					return "cel3";
				}
			}
			var casaDisponivel = chkAlt("cel4");
			if (casaDisponivel == "branco") {
				if	((casaAdversario1 == "cel1" && casaAdversario2 == "cel9") ||
					 (casaAdversario1 == "cel3" && casaAdversario2 == "cel7")){
					return "cel4";
				}
			}
			// não achei situação para jogar na 6
			// var casaDisponivel = chkAlt("cel6");

			var casaDisponivel = chkAlt("cel7");
			if (casaDisponivel == "branco") {
				if	((casaAdversario1 == "cel3" && casaAdversario2 == "cel4") ||
					 (casaAdversario1 == "cel3" && casaAdversario2 == "cel8")){
					return "cel7";
				}
			}
			// não achei situação para jogar na 8
			//var casaDisponivel = chkAlt("cel8");

			var casaDisponivel = chkAlt("cel9");
			if (casaDisponivel == "branco") {
				if	((casaAdversario1 == "cel1" && casaAdversario2 == "cel8") ||
					 (casaAdversario1 == "cel1" && casaAdversario2 == "cel6")){
					return "cel9";
				}
			}
		}
	}
	return "";
	
}

function chkCasa1(letra) {
	varJogador = chkAlt("cel1");
	if(varJogador == letra) {
		return "cel1";
	}
	varJogador = chkAlt("cel2");
	if(varJogador == letra) {
		return "cel2";
	}
	varJogador = chkAlt("cel3");
	if(varJogador == letra) {
		return "cel3";
	}
	varJogador = chkAlt("cel4");
	if(varJogador == letra) {
		return "cel4";
	}
	varJogador = chkAlt("cel5");
	if(varJogador == letra) {
		return "cel5";
	}
	varJogador = chkAlt("cel6");
	if(varJogador == letra) {
		return "cel6";
	}
	varJogador = chkAlt("cel7");
	if(varJogador == letra) {
		return "cel7";
	}
	varJogador = chkAlt("cel8");
	if(varJogador == letra) {
		return "cel8";
	}
	varJogador = chkAlt("cel9");
	if(varJogador == letra) {
		return "cel9";
	}
}

function chkCasa2(letra, casa1) {
	varJogador = chkAlt("cel1");
	if(varJogador == letra && casa1 != "cel1") {
		return "cel1";
	}
	varJogador = chkAlt("cel2");
	if(varJogador == letra && casa1 != "cel2") {
		return "cel2";
	}
	varJogador = chkAlt("cel3");
	if(varJogador == letra && casa1 != "cel3") {
		return "cel3";
	}
	varJogador = chkAlt("cel4");
	if(varJogador == letra && casa1 != "cel4") {
		return "cel4";
	}
	varJogador = chkAlt("cel5");
	if(varJogador == letra && casa1 != "cel5") {
		return "cel5";
	}
	varJogador = chkAlt("cel6");
	if(varJogador == letra && casa1 != "cel6") {
		return "cel6";
	}
	varJogador = chkAlt("cel7");
	if(varJogador == letra && casa1 != "cel7") {
		return "cel7";
	}
	varJogador = chkAlt("cel8");
	if(varJogador == letra && casa1 != "cel8") {
		return "cel8";
	}
	varJogador = chkAlt("cel9");
	if(varJogador == letra && casa1 != "cel9") {
		return "cel9";
	}
}


function chkAlt(id) {
    var alt = document.getElementById(id).alt;
	return alt;
}

function chkVitoria() {
	if((chkAlt("cel1") == chkAlt("cel2")) && (chkAlt("cel1") == chkAlt("cel3")) && (chkAlt("cel1") != "branco")) {
		return true;
	}
	if((chkAlt("cel4") == chkAlt("cel5")) && (chkAlt("cel4") == chkAlt("cel6")) && (chkAlt("cel4") != "branco")) {
		return true;
	}
	if((chkAlt("cel7") == chkAlt("cel8")) && (chkAlt("cel7") == chkAlt("cel9")) && (chkAlt("cel7") != "branco")) {
		return true;
	}
	if((chkAlt("cel1") == chkAlt("cel5")) && (chkAlt("cel1") == chkAlt("cel9")) && (chkAlt("cel1") != "branco")) {
		return true;
	}
	if((chkAlt("cel1") == chkAlt("cel4")) && (chkAlt("cel1") == chkAlt("cel7")) && (chkAlt("cel1") != "branco")) {
		return true;
	}
	if((chkAlt("cel2") == chkAlt("cel5")) && (chkAlt("cel2") == chkAlt("cel8")) && (chkAlt("cel2") != "branco")) {
		return true;
	}
	if((chkAlt("cel3") == chkAlt("cel6")) && (chkAlt("cel3") == chkAlt("cel9")) && (chkAlt("cel3") != "branco")) {
		return true;
	}
	if((chkAlt("cel3") == chkAlt("cel5")) && (chkAlt("cel3") == chkAlt("cel7")) && (chkAlt("cel3") != "branco")) {
		return true;
	}
	return false
}
