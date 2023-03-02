import styles from './Header.module.css'

import Title from "../title/title"
import Subtitle from "../subtitle/subtitle"
import Icon from "../icon/Icon"

function Header () {
return (
  <div className={styles.header}>
 <Title>Jogo da Velha</Title>
 <Subtitle>Criado por Cézar Monteiro</Subtitle>
<div className={styles.iconContent}>
<Icon iconName="github" link="https://github.com/cezzarmonteiro" />
</div>
</div>
)

}

export default Header