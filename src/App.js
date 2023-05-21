import React, { useState } from 'react';
//importamos useState nos permite crear y manejar variables de estado en el componente.
import './App.css';
// Crea un componente que tome un arreglo de nombres y muestre la
// lista en orden alfabético. Utiliza una variable de estado para guardar
// el arreglo y mostrar el resultado.

// Declaramos un componente funcional llamado ListaEstudiantes.
const ListaEstudiantes = () => {
  //Declaramos dos variables de estado utilizando el hook useState
  //nombres almacenará el arreglo de nombres ingresados por el usuario, inicializado como arreglo vacio
  //setNombre es la función que utilizaremos para actualizar el valor de nombres.
  const [nombres, setNombre] = useState([]);

  const [inputValue, setInputValue] = useState('');
  //inputValue almacenará el valor del input del usuario inicializado como una cadena vacia.
  //setInputValue es la función para actualizar inputValue.

  //Definimos la función handleInputChange, que se ejecuta cada vez que el valor del input cambia.
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //handleSubmit, que se ejecuta cuando el formulario se envía.
  const handleSubmit = (event) => {
    event.preventDefault();//Metodo para que no se recargue la pagina
    //setNombre para agregar el valor de inputValue al arreglo nombres utilizando el operador spread (...),
    //creando una nueva matriz con los elementos existentes y el nuevo elemento al final.
    // Aquí se utiliza el operador de propagación (...) para crear una nueva matriz que incluya todos los elementos
    //actuales de nombres y agregar inputValue al final.
    //[Esto se hace para mantener los nombres anteriores en el estado y agregar el nuevo nombre 
    //ingresado por el usuario].
    setNombre([...nombres, inputValue]);
    setInputValue('');//actualiza el estado de la variable inputValue estableciéndola como una cadena vacía
    //Esto se hace para restablecer el valor del input después de que el formulario se envía, 
    //borrando el contenido anterior y preparando el input para una nueva entrada del usuario.
  };

  //Creamos una nueva variable sortedNames que es una copia del arreglo nombres utilizando
  //el operador spread (...). Luego, llamamos al método sort() en el nuevo arreglo para ordenar los nombres alfabéticamente.
  const sortedNames = [...nombres].sort(); //para crear una copia del arreglo nombres en lugar de hacer referencia 
  //al arreglo original. Esto asegura que sortedNames contenga una versión ordenada alfabéticamente del arreglo 
  //original nombres, sin afectar el orden de nombres en sí.

  //Returnamos el componente como JSX
  return (
    <div>
      <h1>Ingrese nombres</h1>
      {/* handleSubmit cuando se envía (onSubmit). */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          // handleInputChange que se ejecuta cada vez que el valor del input cambia.
          onChange={handleInputChange}
          placeholder="Ingresa un nombre"
        />
        <button type="submit">Agregar</button>
        <h3>Nombres ordenados alfabeticamente</h3>
      </form>
      {/* Se utiliza un elemento <ul> para crear una lista desordenada. */}
      <ul>
      {/* Se utiliza el método map() en el arreglo sortedNames para iterar sobre cada nombre y
      crear un elemento <li> para cada uno.  */}
        {sortedNames.map((nombres, index) => (
          // Cada elemento tiene un atributo key establecido como el index para identificar de manera única
          //los elementos en la lista.
          <li key={index}>{nombres}</li>
          // El contenido de cada elemento <li> es el nombre actual (name).
        ))}
      </ul>
    </div>
  );
};


function App() {
  return (
    <div className="App">
     <ListaEstudiantes/>
    </div>
  );
}

export default App;
