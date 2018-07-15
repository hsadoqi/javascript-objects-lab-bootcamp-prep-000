var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value){
  var new_object = Object.assign({}, object,{[key]: value})
  return new_object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var new_object = Object.assign({}, object, {[key]:value})
  delete new_object[key]
  return new_object
}