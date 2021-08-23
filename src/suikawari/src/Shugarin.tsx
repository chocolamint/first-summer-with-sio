import movingShugarin from 'shugarin-moving.png';
import confusedShugarin from 'shugarin-confused.png';
import successShugarin from 'shugarin-success.png';
import failShugarin from 'shugarin-fail.png';
import 'Shugarin.css';

export type ShugarinState = 'Moving' | 'Confused' | 'Success' | 'Fail';

export default function Shugarin(props: { imageId: string, x: number, y: number, state: ShugarinState }) {
    const shugarinStyle = {
        left: props.x + 'vw',
        top: props.y + 'vh'
    };
    const imageSource = props.state === 'Moving' ?
        movingShugarin :
        props.state === 'Confused' ?
        confusedShugarin :
        props.state === 'Success' ?
        successShugarin :
        failShugarin;

    const className = ['Shugarin', props.state].join(' ');

    return <div className={className} style={shugarinStyle}>
        <img id={props.imageId} className="ShugarinImage" src={imageSource} alt="しゅがりん" />
    </div>;
}