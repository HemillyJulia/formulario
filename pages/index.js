import styles from "../styles/Home.module.css";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("AM");
  const [message, setMessage] = useState("");
  const [foto, setFoto] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const formulariobbb = {
      nome,
      nascimento,
      gender,
      email,
      contact,
      address,
      cep,
      city,
      state,
      message,
      foto,
    };
    console.log(formulariobbb);
  };

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
            name="nome"
            id="name"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <br></br> <br></br>
          <label type="date">Data de Nascimento:</label>
          <br></br>
          <input
            type="date"
            name="nascimento"
            id="nascimento"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
          ></input>
          <br></br> <br></br>


          <legend>Gênero:</legend>
          <input
            type="radio"
            id="gender"
            name="gender"
            value="masculine"
            checked={gender === "masculine" ? true : false}
            onChange={(e) => setGender(e.target.value)}
          ></input>


          <label> Masculino</label>
          <input
            type="radio"
            id="gender"
            name="gender"
            value="feminism"
            checked={gender === "feminism" ? true : false}
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label> Feminino</label>
          <input type="radio" 
          id="gender" 
          name="gender" 
          value="other" 
          checked={gender === "other" ? true : false}
          onChange={(e) => setGender (e.target.value)}>
          
          </input>
          <label> Outro</label>
          <br></br> <br></br>
          <label type="email"> E-mail:</label>
          <br></br>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br> <br></br>
          <label>Contato:</label>
          <br></br>
          <input
            type="contact"
            name="contact"
            id="contact"
            placeholder="(xx) xxxxx-xxxx"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          ></input>
          <br></br> <br></br>
          <label>Endereço:</label>
          <br></br>
          <input
            type="address"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>{" "}
          <label type="adress">CEP:</label>{" "}
          <input
            type="CEP"
            name="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          ></input>
          <br></br> <br></br>
          <label
            type="city"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></label>{" "}
          <label type="state">Cidade:</label>
          <br></br>
          <input type="city" name="estado" id="city"></input>
          <label type="state">Estado:</label>
          <select name="state" value={state} onChange={(e) => setState(e.target.value)}>
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
          <textarea
            id="message"
            name="message"
            rows="10"
            cols="50"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br></br> <br></br>
          <label type="file">Insira uma foto sua aqui:</label>
          <br></br>
          <input
            type="file"
            name="foto"
            accept="image.png, png, jpeg"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          ></input>
          <br></br> <br></br>
          <button id="botaosalvar" type="submit">
            {" "}
            Enviar Formulário
          </button>
        </fieldset>
      </form>
    </div>
  );
}
