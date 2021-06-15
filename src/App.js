import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import './App.css';

function App() {

  const[remetente,setRemetente] = useState('');
  const[destinatario,setDestinatario] = useState('');
  const[destinatarioemail,setDestinatarioemail]=useState('');
  const[mensagem,setMensagem]=useState('');

  const handleRemetenteChange = (e) => {
    setRemetente(e.target.value);
  }

  //será executada pelo form
  const SendEmail = (e) => {
    e.preventDefault();

    var templateParams = {
      remetente: remetente,
      destinatario: destinatario,
      destinatarioemail: destinatarioemail,
      mensagem: mensagem
    };

    emailjs.send('service_gmail','template_sendemail',templateParams, 'user_3Yn5JL96hBqYHL0drafom')
    .then(function(response){
      console.log('Success!!!!', response.status, response.text);
    }, function(error){
      console.log('Failed...', error);
    });
    console.log(templateParams);
  }

  return (
   <>
      <header>
        <h1>Sistema de envio de mensagens por e-mail</h1>
      </header>
      <main>
        <fieldset>
          <legend>
            <h2> Presenteie quem você ama com uma mensagem...</h2>
          </legend>
          <form onSubmit={SendEmail}>
            <input type="text" name="remetente" placeholder="Nome do remetente" 
              onChange={(e) => {setRemetente(e.target.value);}} value={remetente}
            />
            <br />
            <input type="text" name="destinatario" placeholder="Nome do destinatário"
              onChange={(e)=>{setDestinatario(e.target.value);}} value={destinatario}
            />
            <br />
            <input type="email" name="destinatarioemail" placeholder="E-mail do destinátario"
              onChange = {(e)=>{setDestinatarioemail(e.target.value);}} value={destinatarioemail}
            />
            <br />
            <label>
              Escolha sua mensagem:
              <br />
              <select value={mensagem} 
                onChange = {(e)=>{setMensagem(e.target.value);}}>
                <option value="Que tal aprender React no Site https://www.dfilitto.com.br/ ?">
                Que tal aprender React no Site https://www.dfilitto.com.br/ ?
                </option>
                <option value="As rosas são vermelhas...">
                  As rosas são vermelhas...
                </option>
                <option value="Te amo meu Bebê!!!!">
                  Te amo meu Bebê!!!!
                </option>
              </select>
            </label>
            <br />
            <input type="submit" value="Enviar Mensagem" />
          </form>
        </fieldset>
      </main>
      <footer>
        <h2> www.dfilitto.com.br</h2>
      </footer>
   </>
  );
}

export default App;
