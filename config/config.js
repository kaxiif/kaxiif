
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Kashif",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Kashif Hussain",
	description: "I’m Software Engineer. I create mobile and web-apps.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1EH7ODzotlCxnxq2jVOJJ2hVPSiYpyawd/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated from University of Sindh  (UOS) in 2021 with a degree in Software Engineering. I kick started my professional career as mobile application and website developer working remotely as Freelancer and Teach on Youtube, Udamy and SkillShare.",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram and Teach a lot on Youtube, helping people who are just getting into the space of programming.",
		"When I’m not programming, I focus on my hobbies which are: Video games, Reading, meeting people and growing my network.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I create pixel perfect iOS and Andriod apps. Using React Native.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create proffisionl website. Using MongoDB, Express, React and Node (MERN Stack).",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Portfolio",
			description: "A portfolio project that describes all the skills and a lot about the developer any one can fork this project and can use this as their own.",
			icons: [

				{
					icon: faGithub,
					link: "https://github.com/kaxiif/personal-portfolio",
				},
			]
		},
		{
			title: "Degital Agency",
			description: "I run a vitual software company working with some of my team mates we al are alocated in saperate locations but i manage all the projects and we are a small software company Lets-Build-Here (LBH) ",

		},
		{
			title: "A Youtube Channel",
			description: "I have a Youtube channel where I teach people about coding and freelancing.",


		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at kashiemails@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:kashiemails@gmail.com",
			isPrimary: true,
		},
		{
			title: "Chat on Instagram",
			link: "https://www.instagram.com/kaxiif/",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Hashir Shoaib | Computer Engineer | Flutter | Reactjs developer",
	description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@kaxiif",
	description: "Programmer | Youtuber ",
	cards: [
		{
			title: "Youtube",
			link: "https://www.youtube.com/channel/UCjUGhujeWaNu2D3wA_-X9yw",
		},
		{
			title: "LetsBuildHere",
			link: "https://letsbuildhere.heroku.com",
		},
		{
			title: "Instagram",
			link: "https://www.instagram.com/kaxiif/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/kaxiif/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/kashif-hussain-484425197/",
		},
	]
}