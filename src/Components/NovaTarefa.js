import styles from './NovaTarefa.module.css'
import { FaCirclePlus } from "react-icons/fa6"
import {useState} from 'react'
import { FaPencilAlt, FaTrash} from "react-icons/fa";


function NovaTarefa(){

    const [tarefa, setTarefa] = useState()
    const [userTarefa, setUserTarefa] = useState ()

        function addItens(e) {
            e.preventDefault()
            setUserTarefa(tarefa)
            console.log(userTarefa)
        
    }


    return (
        <div className={styles.novatarefa}>   
                {userTarefa && (
                    <p>
                        <label>{userTarefa}</label>
                        <input value='yes' type='checkbox'/>
                        <ul>
                            <li><FaPencilAlt/></li>
                            <li><FaTrash/></li>
                        </ul>
                    </p>
                )}
            
            <p>
                <label><i>Nova tarefa ...</i></label>
                <form>
                    <input 
                        type='text' 
                        placeholder='Digite uma nova tarefa'
                        onChange={(e) => setTarefa(e.target.value)}/>
                </form>
                <ul>
                    <li type='submit' onClick={addItens}><FaCirclePlus/></li>
                </ul>
                
            </p>
            
        </div>
       
    )
}   

export default NovaTarefa