import styles from '../styles/LeftSide.module.css';
import Image from 'next/image';
import bgImage from '../public/images/background.png';

function Leftside() {
  return (
     <div className={styles.left}>
      <img
        src="/images/background.png"
        alt="Image de fond d'écran"
        width="800"
        height="1200"
        className={styles.img}
      />
    </div>
  );
}

export default Leftside;