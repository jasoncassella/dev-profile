import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
	return (
		<div className='card'>
			<Avatar />
			<div className='data'>
				<Intro />
				<SkillList />
			</div>
		</div>
	);
}

function Avatar() {
	return <img className='avatar' src='kirby.jpg' alt='kirby' />;
}

function Intro() {
	return (
		<div>
			<h1>Jason Cassella</h1>
			<p>Help desk guy tryna get good at react</p>
		</div>
	);
}

function SkillList() {
	return (
		<div className='skill-list'>
			<Skill name='HTML + CSS' style={{ background: 'lightgreen' }} />
			<Skill name='JavaScript' style={{ background: 'yellow' }} />
			<Skill name='React' style={{ background: 'lightblue' }} />
			<Skill name='Git' style={{ background: 'orange' }} />
			<Skill name='Python' style={{ background: 'purple' }} />
			<Skill name='Web Design' style={{ background: 'red' }} />
		</div>
	);
}

function Skill(props) {
	return (
		<div className='skill' style={props.style}>
			{props.name}
		</div>
	);
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
