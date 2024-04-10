import styles from './NovaTarefa.module.css'
import { FaCirclePlus } from "react-icons/fa6"


function NovaTarefa(){


    return (
        <div className={styles.novatarefa}>   
            
            <p>
                <label><i>Nova tarefa ...</i></label>
               
                <ul>
                    <li><FaCirclePlus/></li>
                </ul>
                
            </p>
            
        </div>
       
    )
}   

export default NovaTarefa