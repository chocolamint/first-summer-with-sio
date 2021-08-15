import 'SioBalloon.css';

function SioBalloon(props: { dialogue: string | null }) {
    const className = ['SioBalloon', props.dialogue ? 'show' : 'hide'].join(' ');
    return <div className={className}>{props.dialogue ? props.dialogue : ''}</div>;
}

export default SioBalloon;