function successAdd(nbrAwr, coefAwr) {
  return `Die Zahl ${nbrAwr} mit dem Koeffizienten x${coefAwr} wurde erfolgreich hinzugefügt!`
}

function resultMsg(finalAverage) {
  return `Der Durchschnitt liegt bei ${finalAverage}.`
}
  
module.exports = {
  negativNumberError: "Bitte geben Sie nur Zahlen mit einem Wert größer als Null ein.",
  negativCoefError: 'Bitte geben Sie mindestens eine Zahl mit einem Koeffizienten größer als 0 ein.',
  emptyFieldError: 'Bitte füllen Sie mindestens das Feld "Nummer" aus.',
  numberLabel: 'Nummer',
  coefLabel: 'Koef x',
  resetBtnText: 'Zurücksetzen',
  addBtnText: 'Hinzufügen',
  numberPlaceholder: 'Positive Zahl',
  coefPlaceholder: 'Koef [default=1]',
  successAdd: successAdd,
  resultMsg: resultMsg
};