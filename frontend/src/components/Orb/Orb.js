import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useWIndowSize } from '../../utils/useWindowSize'; 

function Orb()  {
    const { width, height } = useWIndowSize();

    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height / 2}px);
        }
        100%{
            transform: translate(0, 0);
        }    
    `;

    const OrbStyled = styled.div`
        height: 70vh;
        width: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-top: -37vh;
        margin-left: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(400px);
        animation: ${moveOrb} 15s alternate linear infinite;
    `;

  return (
    <OrbStyled>Orb</OrbStyled>
  )
}

export default Orb;
