var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value){
  var new_object = Object.assign({}, object,{[key]: value})
  return new_object
}
