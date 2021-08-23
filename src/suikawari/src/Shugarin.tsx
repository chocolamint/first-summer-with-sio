import shugarin from 'shugarin.png';
import movingShugarin from 'shugarin-moving.png';
import successShugarin from 'shugarin-success.png';
import failShugarin from 'shugarin-fail.png';
import 'Shugarin.css';

export type ShugarinState = 'Moving' | 'Success' | 'Fail';

export default function Shugarin(props: { imageId: string, x: number, y: number, state: ShugarinState }) {
    const shugarinStyle = {
        left: props.x + 'vw',
        top: props.y + 'vh'
    };
    const imageSource = props.state === 'Moving' ?
        movingShugarin :
        props.state === 'Success' ?
        successShugarin :
        failShugarin;

    return <div className="Shugarin" style={shugarinStyle}>
        <img id={props.imageId} src={imageSource} alt="しゅがりん" />
    </div>;
}