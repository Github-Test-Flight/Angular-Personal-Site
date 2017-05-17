import { Experience } from '../classes/experience';

export const EXPERIENCES: Experience[] = [
    {
        company: 'TD Bank Group',
        company_site: 'https://www.td.com/',
        logo_link: '/assets/logos/td-logo.png',
        job_title: 'Innovation Developer',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.`,
        start: 'January 2017',
        end: 'April 2017',
        picture_links: [
            '/assets/td/1.jpg',
            '/assets/td/2.jpg',
            '/assets/td/3.jpg',
        ],
        skills: 'Angular, TngypeScript, ES2015, Sass, Android, Java, Git, Sketch, Figma'
    },
    {
        company: 'Kik Interactive Inc',
        company_site: 'https://www.kik.com/',
        logo_link: '/assets/logos/kik-logo.png',
        job_title: 'Release and QA Engineer',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.`,
        start: 'May 2017',
        end: 'August 2017',
        picture_links: [
            '/assets/kik/1.jpg',
            '/assets/kik/2.jpg',
            '/assets/kik/3.jpg',
        ],
        skills: 'JIRA, Mixpanel, Fabric, Augmentum, Git, Android, Espresso, Java'
    },
];
