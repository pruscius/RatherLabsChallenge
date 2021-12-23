import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'

export default function Home() {
    const navigate = useNavigate();

    const [shade, setShade] = useState('');

    function handleClick(e) {
        navigate(`/play/${e.target.title}`)
    }

    function handleMouseOver(e) {
        setShade(e.target.title);
    }

    function handleMouseOut() {
        setShade(false);
    }

    return(
        <div className={styles.container}>

            <div>
                <h3 className={styles.title}>Bienvenidos a</h3>
                <h1 className={styles.titleName}>Trivia Questions</h1>
            </div>

            <div className={styles.categoriesContainer}> 
            
                <div className={styles.containerOne}>
                    <div 
                        className={`${styles.divCategory} ${styles.history} ${shade === 'historia' ? styles.shade : null}`}
                        title='historia' 
                        onClick={(e) => handleClick(e)}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <h3 className={styles.catTitle}>Historia</h3>
                    </div>

                    <div 
                        className={`${styles.divCategory} ${styles.science} ${shade === 'ciencia' ? styles.shade : null}`}
                        title='ciencia' 
                        onClick={(e) => handleClick(e)}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <h3 className={styles.catTitle}>Ciencia</h3>
                    </div>

                    <div 
                        className={`${styles.divCategory} ${styles.sports} ${shade === 'deportes' ? styles.shade : null}`}
                        title='deportes' 
                        onClick={(e) => handleClick(e)}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <h3 className={styles.catTitle}>Deportes</h3>
                    </div>
                </div>

                <div className={styles.containerTwo}>

                    <div 
                        className={`${styles.divCategory} ${styles.arts} ${shade === 'arte' ? styles.shade : null}`}
                        title='arte' 
                        onClick={(e) => handleClick(e)}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <h3 className={styles.catTitle}>Arte</h3>
                    </div>
            
                    <div 
                        className={`${styles.divCategory} ${styles.entertainment} ${shade === 'entretenimiento' ? styles.shade : null}`}
                        title='entretenimiento' 
                        onClick={(e) => handleClick(e)}    
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <h3 className={styles.catTitle}>Entretenimiento</h3>
                    </div>
                    
                    <div 
                        className={`${styles.divCategory} ${styles.geography} ${shade === 'geografia' ? styles.shade : null}`}
                        title='geografia' 
                        onClick={(e) => handleClick(e)}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <h3 className={styles.catTitle}>Geografía</h3>
                    </div>
                    
                </div>
                    
            </div>
        </div>
    )
}