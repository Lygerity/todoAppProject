// BlueButton.tsx

import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import '../../assets/stylesheets/components/blueButton.css';
interface BlueButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const BlueButton: React.FC<BlueButtonProps> = ({ children, ...props }) => {
    return (
        <button className="button-blue" {...props}>
            {children}
        </button>
    );
};

export default BlueButton;
