import React from 'react';
import styles from './ProgressBar.module.css'
// import styled, { keyframes } from 'styled-components'

// const pulse = keyframes`
// from {
// background-color: #001F3F;
// }

// to {
// background-color: #FF4136;
// }
// `
// const Bar = styled.div`
// color: #000;
// position: absolute;
// width: 100%;
// animation: ${pulse} ${lifetimeSeconds}s ease-in-out;
// animation-iteration-count: infinite;
// `


export default function ProgressBar ({ lifetimeSeconds }) {

    // const fillerStyles = {
    //     position: 'absolute', 
    //     height: '100%',
    //     backgroundColor:'blue',
    //     animationName: progres
    // }
    return (
        <div className={styles.progressBarContainer}>
               <div style={{
                    position: 'absolute', 
                    height: '100%',
                    backgroundColor:'blue',
                    animationName: 'progress',
                    animationDuration: lifetimeSeconds
                }}></div>
        </div>
    )
}