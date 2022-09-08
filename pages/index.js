import styles from "../styles/Home.module.css";

export default function Home() {

function formulario (){
  // how to make a function that makes the console.log of the fields typed in my form in javascript?
var nameInput = document.getElementById('name');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(nameInput.value);    
});






}








  return (
    <div>
      <h1> Inscrição BBB - 2023</h1>
      <p> Que tal entrar na casa mais vigiada do Brasil?</p>

      <form action="">
      <fieldset>
        <legend> Faça sua inscrição e, boa sorte!</legend>
        <label type="name">Nome:</label> <br></br>
        <input
          type="text"
          name="Nome"
          id="name"
          placeholder="Digite seu nome completo"
        ></input>
        <br></br> <br></br>
        <label type="date">Data de Nascimento:</label>
        <br></br>
        <input type="date" value="1994-06-06"></input>
        <br></br> <br></br>
        <legend>Gênero:</legend>
        <input type="radio" id="gender" name="gender" value="masculine"></input>
        <label> Masculino</label>
        <input type="radio" id="gender" name="gender" value="feminism"></input>
        <label> Feminino</label>
        <input type="radio" id="gender" name="gender" value="other"></input>
        <label> Outro</label>
        <br></br> <br></br>
        <label type="email"> E-mail:</label>
        <br></br>
        <input type="email" name="E-mail" id="e-mail"></input>
        <br></br> <br></br>
        <label>Contato:</label>
        <br></br>
        <input
          type="contact"
          name="contact"
          id="contact"
          placeholder="(xx) xxxxx-xxxx"
        ></input>
        <br></br> <br></br>
        <label>Endereço:</label>
        <br></br>
        <input type="address" name="address" id="address"></input>{" "}
        <label type="adress">CEP:</label> <input type="CEP" name="CEP"></input>
        <br></br> <br></br>
        <label type="city" name="city" id="city"></label>{" "}
        <label type="state">Cidade:</label>
        <br></br>
        <input type="city" name="city" id="city"></input>{" "}
        <label type="state">Estado:</label>{" "}
        <select>
          <option value=""> Selecione aqui</option>
          <option value="state"></option>
          <option value="state">AM</option>
          <option value="state">RJ</option>
          <option value="state">SP</option>
          <option value="state">CE</option>
          <option value="state">PR</option>
          <option value="state">MG</option>
          <option value="state">GO</option>
          <option value="state">SC</option>
          <option value="state">RN</option>
          <option value="state">RO</option>
          <option value="state">PI</option>
          <option value="state">ES</option>
          <option value="state">AL</option>
        </select>
        <br></br> <br></br>
        <label type="message">
          Escreva abaixo por que você merece entrar no BBB 2023:
        </label>
        <br></br>
        <textarea id="message" name="message" rows="10" cols="50"></textarea>
        <br></br> <br></br>
        <label type="file">Insira uma foto sua aqui:</label><br></br>
        <input type="file" accept="image.png, png, jpeg" ></input>
        <br></br> <br></br>
        <button type="submit"> Enviar Formulário</button>
      </fieldset>
      </form>
    </div>
  );
}
