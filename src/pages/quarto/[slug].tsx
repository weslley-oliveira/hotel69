import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Button from '../../components/Button'

import styles from '../../styles/pages/Reserva.module.scss'

import mordomoImg from '../../assets/images/mordomo.png'


export default function Reserva() {
  const [roomName, setRoomName] = useState('')  
  const [dica, setDica] = useState('')
  const [question, setQuestion] = useState('')
  
  const [pageName, setPageName] = useState(true)
  const [pageDica, setPageDica] = useState(false)
  const [pageQuestion, setPageQuestion] = useState(false)

  function goToNextPage(){
    setPageName(false)
    setPageDica(true)
    if(pageDica){
      setPageDica(false)
      setPageQuestion(true)
    }
  }

  return (
    <>
      <Head>
        <title>Hotel 69</title>
      </Head>    
    
      <div className={styles.container}>
        <header>
            <div>
              <Image
                src={mordomoImg}
                alt="Illustration Mordomo"
                width={100}
                height={100}
              />
            </div>
            {pageName?
              <p>Seu dia de sorte, temos muitos quartos disponíveis.</p>
              :
              <p>O Hotel 69 se preocupa com sua privacidade e segurança.</p> 
            }           
        </header>
        <main>
          {pageName &&
            <>          
              <p>Para que possamos identificar seu quarto, por gentileza forneça um nome</p>
              <input
                onChange={event => setRoomName(event.target.value)}
                value={roomName}
                placeholder="Ex: Suíte Presidencial"/>                        
            </>
          }
          {pageDica &&
            <>
              <p>Forneça um dica para que apenas seu convidado possa te reconhecer</p>
              <textarea
                onChange={event => setDica(event.target.value)}
                value={dica}
                placeholder="Ex: Costumávamos nos encontrar no pátio"/>         
            </>
          }

          {pageQuestion && 
            <>                    
              <p>Saiba se é a pessoa certa que vai entrar no seu quarto, forneca uma pergunta secreta</p>
              <input placeholder="Ex: Qual era nosso lugar favorito? "/>
              <p>Forneca 4 opcoes</p>
              <form>
                <input placeholder="Ex: Biblioteca"/><div/>
                <input placeholder="Ex: Sala de aula "/><div/>
                <input placeholder="Ex: Lanchonete"/><div/>
                <input placeholder="Ex: Jardim"/><div/>
                <p>*seleciona apenas uma resposta correta.</p>
              </form>
            </>
          }
        </main>
        <footer>
          <Button onClick={goToNextPage}>
            {pageQuestion ? 'Finalizar Reserva' : 'Próximo'}
          </Button>
        </footer>
      </div>
    </>
  )
}


