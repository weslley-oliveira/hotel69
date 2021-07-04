import Image from 'next/image'

import Button from '../components/Button'

import styles from '../styles/pages/Reserva.module.scss'

import mordomoImg from '../assets/images/mordomo.png'

export default function Reserva() {
  return (
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
          <p>Seu dia de sorte, temos muitos quartos disponíveis.</p>
      </header>
      <main>
        {/* <p>Para que possamos identificar seu quarto, por gentileza forneça um nome</p>
        <input placeholder="Ex: Suíte Presidencial"/> */}
        
        {/* <p>Forneça um dica para que apenas seu convidado possa te reconhecer</p>
        <textarea placeholder="Ex: Costumávamos nos encontrar no pátio"/> */}
        
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
        
      </main>
      <footer>
        <Button>
          Próximo
        </Button>
      </footer>
    </div>
  )
}


