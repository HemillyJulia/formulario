import styles from "../styles/Home.module.css";

export default function Home() {

const onSubmit = (e) => {
  e.preventDefault()
  const data = {
    name: e.target.elements.name.value,
    nascimento: e.target.elements.nascimento.value,
    gender: e.target.elements.gender.value,
    email:e.target.elements.email.value,
    contact:e.target.elements.contact.value,
    address:e.target.elements.address.value,
    CEP:e.target.elements.CEP.value,
    city:e.target.elements.city.value,
    state:e.target.elements.state.value,
    message:e.target.elements.message.value,
    foto:e.target.elements.foto.value,
    
          

  }
  console.log(data)
  
}


  return (
    <div>
      <h1> Inscrição BBB - 2023</h1>
      <p> Que tal entrar na casa mais vigiada do Brasil?</p>

      <form onSubmit={onSubmit}>
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
        <input type="date" name="nascimento" id="nascimento" ></input>
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
        <input type="email" name="email" id="email"></input>
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
        <input type="city" name="estado" id="city"></input>{" "}
        <label type="state" >Estado:</label>{" "}
        <select name="state"  >
          <option value=""> Selecione aqui</option>
          <option value="state"></option>
          <option value="AM">AM</option>
          <option value="RJ">RJ</option>
          <option value="SP">SP</option>
          <option value="CE">CE</option>
          <option value="PR">PR</option>
          <option value="MG">MG</option>
          <option value="GO">GO</option>
          <option value="SC">SC</option>
          <option value="RN">RN</option>
          <option value="RO">RO</option>
          <option value="PI">PI</option>
          <option value="ES">ES</option>
          <option value="AL">AL</option>
        </select>
        <br></br> <br></br>
        <label type="message">
          Escreva abaixo por que você merece entrar no BBB 2023:
        </label>
        <br></br>
        <textarea id="message" name="message" rows="10" cols="50"></textarea>
        <br></br> <br></br>
        <label type="file">Insira uma foto sua aqui:</label><br></br>
        <input type="file" name="foto" accept="image.png, png, jpeg" ></input>
        <br></br> <br></br>
        <button id="botaosalvar" type="submit"> Enviar Formulário</button>
      </fieldset>
      </form>
    </div>
  );
}
