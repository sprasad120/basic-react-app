import { useState } from "react";
import Alert from "./Alert";

interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger';
    onClick?: () => void;
}

const Button = ({ children, color = 'danger', onClick }: Props) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        if (onClick) {
            onClick();
        }
    }
  return (
    <>
    {clicked && <Alert>Button Clicked</Alert>}
    <button className={'btn btn-' + color} onClick={handleClick}>{children}</button>
    </>
  )
}

export default Button