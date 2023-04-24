import React from "react";

function Test() {
  return (
    <>
      <header>
        <h1>Título principal</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Enlace 1</a>
            </li>
            <li>
              <a href="#">Enlace 2</a>
            </li>
            <li>
              <a href="#">Enlace 3</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Título de sección</h2>
          <p>Este es un párrafo de texto.</p>
          <blockquote>
            <p>Esta es una cita.</p>
            <footer>- Autor de la cita</footer>
          </blockquote>
          <ol>
            <li>Elemento de lista 1</li>
            <li>Elemento de lista 2</li>
            <li>Elemento de lista 3</li>
          </ol>
          <ul>
            <li>Elemento de lista 1</li>
            <li>Elemento de lista 2</li>
            <li>Elemento de lista 3</li>
          </ul>
          <img
            src="(https://picsum.photos/300/300)"
            alt="Descripción de la imagen"
          />
        </section>
      </main>
      <hr />
      <form action="procesar.php" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
        <br />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" />
        <br />
        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad" />
        <br />
        <label for="fecha">Fecha:</label>
        <input type="date" id="fecha" name="fecha" />
        <br />
        <label for="color">Color favorito:</label>
        <input type="color" id="color" name="color" />
        <br />
        <label for="url">Sitio web:</label>
        <input type="url" id="url" name="url" />
        <br />
        <label for="archivo">Archivo:</label>
        <input type="file" id="archivo" name="archivo" />
        <br />
        <label for="checkbox">Checkbox:</label>
        <input type="checkbox" id="checkbox" name="checkbox" value="1" />
        <br />
        <label for="radio1">Opción 1:</label>
        <input type="radio" id="radio1" name="radio" value="1" />
        <br />
        <label for="radio2">Opción 2:</label>
        <input type="radio" id="radio2" name="radio" value="2" />
        <br />
        <label for="textarea">Texto:</label>
        <textarea id="textarea" name="textarea"></textarea>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <footer>
        <p>Pie de página</p>
      </footer>
    </>
  );
}

export default Test;
