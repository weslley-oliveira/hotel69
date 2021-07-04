import styles from '../../styles/pages/Chat.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import mordomoImg from '../../assets/images/mordomo.png'

export default function chat() {
  return (
    <div className={styles.container}>
      <header>
        <span className="hotel69">Hotel 69</span>                  
        <p>Suite master <strong>#6969</strong></p>                      
      </header>
      <main>

      </main>
      <footer>
        <form>
          <input/>
          <button><FontAwesomeIcon 
            icon={faPaperPlane}
          ></FontAwesomeIcon></button>
        </form>
      </footer>
    </div>
  )
}
