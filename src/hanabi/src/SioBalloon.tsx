import 'SioBalloon.css';

function SioBalloon(props: { dialogue: string }) {
    return <div className="SioBalloon">{props.dialogue}</div>;
}

export default SioBalloon;