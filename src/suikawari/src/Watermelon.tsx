import watermelon from 'watermelon.png';
import crashedWatermelon from 'crashed-watermelon.png';
import 'Watermelon.css';

export type WatermelonState = 'Normal' | 'Crashed';

export default function Watermelon(props: { imageId: string, x: number, y: number, state: WatermelonState }) {
    const watermelonStyle = {
        left: props.x + 'vw',
        top: props.y + 'vh'
    };
    return <div className="Watermelon" style={watermelonStyle}>
        <img id={props.imageId} src={props.state === 'Normal' ? watermelon : crashedWatermelon} alt="すいか" />
    </div>
}