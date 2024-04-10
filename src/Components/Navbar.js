import styles from './Navbar.module.css'

function Navbar(){
    return (
        <div className={styles.navbar}>
            <h5>Organização</h5>
            <button>Tarefas</button>
        </div>
    )
}

export default Navbar