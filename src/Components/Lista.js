import styles from './Lista.module.css'
import { FaPencilAlt, FaTrash} from "react-icons/fa";

function Lista(){
    return (
        <div className={styles.lista}>
            <p>
                <label>Limpar a casa</label>
                <input value='yes' type='checkbox'/>
                <ul>
                    <li><FaPencilAlt/></li>
                    <li><FaTrash/></li>
                </ul>
            </p>
            <p>
                <label>Responder e-mails</label> 
                <input value='yes' type='checkbox'/>
                <ul>
                    <li><FaPencilAlt/></li>
                    <li><FaTrash/></li>
                </ul>
            </p>
        </div>
    )
}   

export default Lista