import React from 'react';
import Lottie from 'react-lottie';
import fadeInAnimation from '../taskForm/Animation - 1700475415786.json'

interface AnimatedButtonProps {
    onClick: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick }) => {
    const fadeInOptions = {
        loop: false,
        autoplay: false,
        animationData: fadeInAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Lottie
            options={fadeInOptions}
            height={50}
            width={200} // Adjust the width based on your animation
            isClickToPauseDisabled={true}
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        />
    );
};

export default AnimatedButton;
