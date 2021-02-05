function successAdd(nbrAwr, coefAwr) {
  return `Le nombre ${nbrAwr} coef x${coefAwr} a été ajouté avec succès !`
}

function resultMsg(finalAverage) {
  return `La moyenne est de ${finalAverage}.`
}

module.exports = {
  negativNumberError: "Veuillez entrer uniquement des chiffres d'une valeur supérieure à zéro.",
  negativCoefError: 'Veuillez entrer au minimum un nombre avec un coef supérieur à 0.',
  emptyFieldError: 'Veuillez remplir au moins la case "Nombre"',
  successAdd: successAdd,
  resultMsg: resultMsg
};