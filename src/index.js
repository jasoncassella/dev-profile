import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
	{
		skill: 'HTML + CSS',
		color: 'lightgreen',
	},
	{
		skill: 'JavaScript',
		color: 'yellow',
	},
	{
		skill: 'React',
		color: 'lightblue',
	},
	{
		skill: 'Git',
		color: 'orange',
	},
	{
		skill: 'Python',
		color: 'purple',
	},
];

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
			{skills.map(skill => (
				<Skill
					name={skill.skill}
					color={skill.color}
					key={skills.indexOf(skill)}
				/>
			))}
		</div>
	);
}

function Skill(props) {
	return (
		<div className='skill' style={{ background: props.color }}>
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
