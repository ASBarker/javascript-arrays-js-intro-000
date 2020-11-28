var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(){
  var food = ['pizza']
  return ['foo', ...food]
}

function destructivelyAddElementToBeginningOfArray(){
  var food = ['pizza']
  food.unshift ('foo')
  return food
}
