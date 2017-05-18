import { Project } from '../classes/project';

export const PROJECTS: Project[] = [
    {
        name: 'Portfolio Website',
        skills: 'Angular, TypeScript, HTML, Sass',
        description: 'A dynamically populated website built following a component-Based architecture',
        github: 'github.com',
        pictures: [
            './assets/website/1.jpg',
            './assets/website/2.jpg'
        ]
    },
    {
        name: 'Pebble Otaku',
        skills: 'C, PebbleJS, AniList API',
        description: 'A pebble app that notifies users when their favorite anime is about to air.',
        github: 'github.com',
        pictures: [
            './assets/otaku/1.png',
            './assets/otaku/2.png',
            './assets/otaku/3.png',
        ]
    },
    {
        name: 'Bluetooth Image Plotter',
        skills: 'C, C++, Wolfram Language',
        description: 'A robot that processes online images and wirelessly plots them out on letter paper.',
        github: 'none',
        pictures: [
            './assets/printer/1.jpg',
            './assets/printer/2.jpg',
        ]
    },
    {
        name: 'Python Games',
        skills: 'Python, Pygame',
        description: 'Recreation of popular games from the 80s and a self designed falling ball survival game.',
        github: 'github.com',
        pictures: [
            './assets/python/1.jpg',
            './assets/python/2.jpg',
        ]
    }
];
