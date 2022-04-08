window.alert("This site is available in my language italian. Don't worry about it.");
var utente=window.prompt("Inserisci un nome. Se lasci vuoto o clicchi annulla la frase sara': Ciao! Sei nel sito per esperimenti sul mio Github.");
if (utente == null){
  document.write("Ciao! Sei nel sito per esperimenti sul mio Github.")
  utente = window.location.pathname
  document.write(utente)
}
else{
  document.write("Ciao ")
  document.write(utente);
  document.write("! Sei nel sito per esperimenti sul mio Github.")
}
