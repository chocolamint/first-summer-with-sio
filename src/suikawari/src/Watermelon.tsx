import watermelon from 'watermelon.png';
import 'Watermelon.css';

export default function Watermelon(props: { x: number, y: number }) {
    const watermelonStyle = {
        left: props.x + 'vw',
        top: props.y + 'vh'
    };
    return <div className="Watermelon" style={watermelonStyle}>
        <img src={watermelon} />
    </div>
}