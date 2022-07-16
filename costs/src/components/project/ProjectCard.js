import styles from './ProjectCard.module.css'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function ProjectCard(id, name, budget, category, handleRemove){
    return(
        <div>
            <h4>{name}</h4>
        </div>
    )
}

export default ProjectCard