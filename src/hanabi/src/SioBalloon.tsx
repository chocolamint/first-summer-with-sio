import 'SioBalloon.css';

function SioBalloon(props: { dialogue: string, isVisible: boolean }) {
    const className = ['SioBalloon', props.isVisible ? 'show' : 'hide'].join(' ');
    return <div className={className}>{props.dialogue}</div>;
}

export default SioBalloon;