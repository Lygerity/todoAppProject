import './Button.css'
import React, { useRef, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { FunctionComponent, PropsWithChildren } from "react";
import animationData from './animation/Animation-1701680646366.json'; 

type Props = {
    label: String;
    isClicked: boolean;
    onClick?: () => void;
} & PropsWithChildren;

const Button: FunctionComponent<Props> = (props: Props)=>{

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(1);

    const animationRef = React.useRef<LottieRefCurrentProps>(null);

    const handleClick = () => {
        if(props.onClick){
            props.onClick();  
        }
        if (animationRef.current) {
            const targetFrame = currentFrame === 1 ? 69 : 1;

            setIsPlaying(false);
            animationRef.current.setDirection(1);

            // Animation de transition de 10 frames entre les deux frames
            animationRef.current.playSegments([currentFrame, targetFrame + 1], true);
            setTimeout(() => {
                if(animationRef.current){animationRef.current.playSegments([targetFrame, targetFrame + 1], true);}
            }, 450); // Ajustez la durée de transition selon vos besoins, ici 450 Attention à ajuster avec "fr":140 le frame rate

            setCurrentFrame(targetFrame);
        }
      };
    
    const handleComplete = () => {
        if (animationRef.current) {
            setIsPlaying(true);
            animationRef.current.setDirection(1); 
            animationRef.current.play();
        }
    };
    return(
        <>
        <div className="button" >
            <Lottie
                lottieRef={animationRef}
                animationData={animationData}
                loop={true}
                autoplay={isPlaying}
                onClick={handleClick}
                onComplete={handleComplete}
                style={{width: 50}}
                
            />
           
        </div>
        <p>{props.isClicked}</p>
        </>
    )
}


export default Button;
