import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Button from '../components/Button'

import mordomoImg from '../assets/images/mordomo.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotel 69</title>
      </Head>

      <div className="container">
        <header>
          <div>
            <Image
              src={mordomoImg}
              alt="Illustration Mordomo"
              width={200}
              height={200}
            />
          </div>
        </header>

        <main>
          <div>      
            <h2>Bem vindo ao</h2>
            <h1 className="hotel69">Hotel 69</h1>
            <h3>Convide alguém para conversar na privacidade de um quarto</h3>
          </div>
          <div>
          <Link href="/quarto/nome-do-quarto">
            <Button>              
                Reservar um quarto              
            </Button>
            </Link>
            <div className="separator">Já tem um quarto?</div>
            <Button SecondType>
              Check In
            </Button>
          </div>   

        </main>
      </div>      
    </>
  )
}
