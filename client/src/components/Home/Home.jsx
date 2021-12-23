import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'

export default function Home() {
    const navigate = useNavigate();

    function handleClick(e) {
        navigate(`/play/${e.target.title}`)
    }

  return(
    <div className={styles.container}>

        <div>
            <h3 className={styles.title}>Bienvenidos a</h3>

            <h1 className={styles.titleName}>Trivia Questions</h1>
        </div>

        <div className={styles.categoriesContainer}> 
        
            <div className={styles.containerOne}>
                <div className={`${styles.divCategory} ${styles.history}`}>
                    <h3 
                        title='historia' 
                        className={styles.catTitle} 
                        onClick={(e) => handleClick(e)}
                    >Historia</h3>
                </div>

                <div className={`${styles.divCategory} ${styles.science}`}>
                    <h3 
                        title='ciencia' 
                        className={styles.catTitle} 
                        onClick={(e) => handleClick(e)}
                    >Ciencia</h3>
                </div>

                <div className={`${styles.divCategory} ${styles.sports}`}>
                    <h3 
                        title='deportes' 
                        className={styles.catTitle} 
                        onClick={(e) => handleClick(e)}
                    >Deportes</h3>
                </div>
            </div>

            <div className={styles.containerTwo}>

                <div className={`${styles.divCategory} ${styles.arts}`}>
                    <h3 
                        title='arte' 
                        className={styles.catTitle} 
                        onClick={(e) => handleClick(e)}
                    >Arte</h3>
                </div>
           
                <div className={`${styles.divCategory} ${styles.entertainment}`}>
                    <h3 
                        title='entretenimiento' 
                        className={styles.catTitle} 
                        onClick={(e) => handleClick(e)}
                    >Entretenimiento</h3>
                </div>
                
                <div className={`${styles.divCategory} ${styles.geography}`}>
                    <h3 
                        title='geografia' 
                        className={styles.catTitle} 
                        onClick={(e) => handleClick(e)}
                    >Geografía</h3>
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