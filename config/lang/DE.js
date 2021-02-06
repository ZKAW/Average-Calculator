function successAdd(nbrAwr, coefAwr) {
    return `The number ${nbrAwr} coefficient x${coefAwr} has been added successfully !`
  }
  
  function resultMsg(finalAverage) {
    return `The average is ${finalAverage}.`
  }
  
  module.exports = {
    negativNumberError: "Please enter only numbers with a value greater than zero.",
    negativCoefError: 'Please enter at least one number with a coefficient greater than 0.',
    emptyFieldError: 'Please fill in at least the "Number" box',
    numberLabel: 'Number',
    coefLabel: 'Coef x',
    resetBtnText: 'Reset',
    addBtnText: 'Add',
    numberPlaceholder: 'Positive number',
    coefPlaceholder: 'Coef [default=1]',
    successAdd: successAdd,
    resultMsg: resultMsg
  };