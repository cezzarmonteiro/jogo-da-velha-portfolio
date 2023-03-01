import styles from './Header.module.css'

import Title from "../title/title"
import Subtitle from "../subtitle/subtitle"


function Header () {
return (
  <div className={styles.header}>
 <Title>Jogo da Velha</Title>
 <Subtitle>Criado por Cézar Monteiro</Subtitle>
  </div>
)

}

export default Header