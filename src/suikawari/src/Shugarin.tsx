import shugarin from 'shugarin.png';
import 'Shugarin.css';

export default function Shugarin(props: { imageId: string, x: number, y: number }) {
    const shugarinStyle = {
        left: props.x + 'vw',
        top: props.y + 'vh'
    };
    return <div className="Shugarin" style={shugarinStyle}>
        <img id={props.imageId} src={shugarin} alt="しゅがりん" />
    </div>;
}