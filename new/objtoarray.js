var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":7,"8":0,"9":0,"10":0,"11":0,"12":0}

function objectToArray(obj) {
    return Object.entries(obj);
  }


  const array= objectToArray(obj)
  console.log(array)