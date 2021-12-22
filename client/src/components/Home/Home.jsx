import React from 'react';
import { Link } from 'react-router-dom';
import { getTrivia } from '../../common/redux/actions';
import {  useDispatch } from 'react-redux';
import styles from './Home.module.css'

export default function Home() {
    const dispatch = useDispatch();

    function handleClick(e) {
        dispatch(getTrivia(e.target.title));
    }

  return(
    <div className={styles.container}>

        <div className={styles.categoriesContainer}> 
        
            <div className={styles.containerOne}>
                <div className={styles.divCategory}>
                    <Link className={styles.link} to="/play">
                        <h3 title='historia' onClick={(e) => handleClick(e)}>Historia</h3>
                    </Link>
                </div>

                <div className={styles.divCategory}>
                    <Link className={styles.link} to="/play">
                        <h3 title='ciencia' onClick={(e) => handleClick(e)}>Ciencia</h3>
                    </Link>
                </div>

                <div className={styles.divCategory}>
                    <Link className={styles.link} to="/play">
                        <h3 title='deportes' onClick={(e) => handleClick(e)}>Deportes</h3>
                    </Link>
                </div>
            </div>

            <div className={styles.containerTwo}>
                <div className={styles.divCategory}>
                    <Link className={styles.link} to="/play">
                        <h3 title='arte' onClick={(e) => handleClick(e)}>Arte</h3>
                    </Link>
                </div>

                <div className={styles.divCategory}>
                    <Link className={styles.link} to="/play">
                        <h3 title='entretenimiento' onClick={(e) => handleClick(e)}>Entretenimiento</h3>
                    </Link>
                </div>

                <div className={styles.divCategory}>
                    <Link className={styles.link} to="/play">
                        <h3 title='geografia' onClick={(e) => handleClick(e)}>Geografía</h3>
                    </Link>
                </div>
            </div>
                
        </div>
    </div>
)
}

// {
//     categories.map((category, index) => (      
          
//         <Link key={index} to="/play">
//             <div 
//                 className={styles.divCategory}
//                 key={index} 
//                 title={category === 'Geografía' ? 'geografia' : category.toLowerCase()} 
//                 onClick={(e) => handleClick(e)}
//             >
//                 {category}
//             </div>
//         </Link>
//     ))
// }