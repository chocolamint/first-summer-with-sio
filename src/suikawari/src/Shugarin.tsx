import shugarin from 'shugarin.png';
import 'Shugarin.css';
import { useEffect } from 'react';

export default function Shugarin(props: { x: number, y: string }) {
    const shugarinStyle = {
        left: props.x,
        top: props.y
    };
    return <div className="Shugarin" style={shugarinStyle}>
        <img src={shugarin} />
    </div>;
}