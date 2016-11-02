const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}


function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}

function appendKitten(name){
  var new_array = [...kittens, name]
  return new_array
}

function prependKitten(name){
  var new_array = [name, ...kittens]
  return new_array
}

function removeLastKitten(){
  var new_array = kittens.slice(0, kittens.length -1)
  return new_array
}


function removeFirstKitten(){
  var new_array = kittens.slice(1, kittens.length)
  return new_array
}