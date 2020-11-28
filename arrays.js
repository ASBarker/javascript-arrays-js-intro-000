var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(){
  var food = ['pizza', 'nachos', 'chips']
  return ['foo', ...food]
}

function destructivelyAddElementToBeginningOfArray(){
  var food = ['pizza', 'nachos', 'chips']
  food.unshift ('foo')
  return food
}
