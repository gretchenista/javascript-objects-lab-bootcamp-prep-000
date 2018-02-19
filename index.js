var recipes = new Object ({

});

function updateObjectWithKeyAndValue (recipes, key, value) {

 return Object.assign({}, recipes, {[key]: value});
}

// updateObjectWithKeyAndValue(recipes, prop2, 2);
 

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

recipes;

function deleteFromObjectByKey (recipes, key) {
    var obj = {key};
    var newObj = Object.assign({}, obj);
    delete newObj.key;
}

newObj;


function destructivelyDeleteFromObjectByKey (recipes, prop, prop2) {
  delete recipes[prop];
  return recipes;
}