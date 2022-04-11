function receivesAFunction (girl){
  return girl();
}
receivesAFunction(function (){ return 'Two';});

function returnsANamedFunction (){
  return function me (){
    return 1 + 2;
  }
}
returnsANamedFunction();

function returnsAnAnonymousFunction (){
  return function () {
    return 3 * 2;
  }
}
returnsAnAnonymousFunction ();