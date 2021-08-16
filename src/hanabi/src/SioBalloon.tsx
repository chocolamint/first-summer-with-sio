import 'SioBalloon.css';

function SioBalloon(props: { message: string, isVisible: boolean }) {
    const className = ['SioBalloon', props.isVisible ? 'show' : 'hide'].join(' ');
    return <div className={className} dangerouslySetInnerHTML={{ __html: props.message }}></div>;
}

export default SioBalloon;