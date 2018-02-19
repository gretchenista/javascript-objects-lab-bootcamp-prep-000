var recipes = new Object ({
  prop : 1,
  prop2 : 2
});

function updateObjectWithKeyAndValue (recipes, key, value) {

 return Object.assign({}, recipes, {prop, prop2});
}

// updateObjectWithKeyAndValue(recipes, prop2, 2);
 

function destructivelyUpdateObjectWithKeyAndValue (recipes, prop, prop2) {
  recipes[prop] = 1;
  recipes[prop2] = 2;
  return recipes;
}

recipes;

function deleteFromObjectByKey (recipes, prop) {
    var obj = { prop: 1};
    var newObj = Object.assign({}, obj);
    delete newObj.prop[1];
}

newObj;


function destructivelyDeleteFromObjectByKey (recipes, prop, prop2) {
  delete recipes[prop];
  return recipes;
}