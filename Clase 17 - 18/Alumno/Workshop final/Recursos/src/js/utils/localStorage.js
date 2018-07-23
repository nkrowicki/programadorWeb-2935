//Devuelve un array con lo que hay en el localstorage 'name'
let getLocalList = (name) => {

  let data = localStorage.getItem(name)

  if (data) {
    try {
      data = JSON.parse(data)
      return data
    } catch (e) {
      console.log(e)
    }
  }
  return []

}

//Permite guardar una lista en el localStorage en formato JSON
let setLocalList = (key, value) => {

  if (key !== null && typeof key === 'string' && value !== null && Array.isArray(value)) {
    try {
      //Convierto a json el array
      value = JSON.stringify(value)
      // Guardo en el localStorage pisando la key
      localStorage.setItem(key, value)
    } catch (e) {
      console.log(e)
    }
  }
}

export {
  getLocalList,
  setLocalList
}