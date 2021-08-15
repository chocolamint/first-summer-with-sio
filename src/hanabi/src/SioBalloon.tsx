import 'SioBalloon.css';

function SioBalloon(props: { dialogue: string }) {
    const className = ['SioBalloon', props.dialogue ? 'show' : 'hide'].join(' ');
    return <div className={className} dangerouslySetInnerHTML={{ __html: props.dialogue }}></div>;
}

export default SioBalloon;