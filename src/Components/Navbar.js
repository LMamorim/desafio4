import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.module.css'

function Newnavbar() {
  return (
    <div class={styles.navbar}>
        <p>
            <Navbar>
                
                    <Navbar.Brand>Organização</Navbar.Brand>
               
            </Navbar>
        </p>
      
        <p>
            <Navbar>
                
                    <Navbar.Brand>Tarefas</Navbar.Brand>
                
            </Navbar>
        </p>
    </div>
  );
}

export default Newnavbar