import styles from './Cabecalho.module.css'
import linha from '../Images/linha.svg'



function Cabecalho(){
    return (
        <div className={styles.cabecalho}>
            <section>
                <h4>Tarefa</h4>
                <h4>Status</h4>
                <h4>Opções</h4>
            </section>
             <img src={linha}/>
        </div>
    )
}

export default Cabecalho