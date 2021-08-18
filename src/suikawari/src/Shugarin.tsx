import shugarin from 'shugarin.png';
import 'Shugarin.css';

export default function Shugarin(props: { x: string, y: string }) {
    const shugarinStyle = {
        left: props.x,
        top: props.y
    };
    return <div className="Shugarin" style={shugarinStyle}>
        <img src={shugarin} />
    </div>;
}