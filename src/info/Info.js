import self from "../img/self.png"
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export const info = {
    firstName: "Paresh",
    lastName: "Patel",
    initials: "ppatel",
    position: "a Kuberbetes Administrator",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'Fueled by Indian Tea'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Loking for new role Kubernetes Administrator"
        },
        {
            emoji: "📧",
            text: "pareshpatel2022@yahoo.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/profile.php?id=1609308772",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/patelpareshr123/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/pareshkubernetes",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Paresh. I'm a Kubernetes Administrator certified by CNCF. I studied Bsc and MCA in Computer Science from India, I enjoy listening Indian Music, and I believe AI-assisted Kubernetes orchestrator will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['Docker', 'Kubernetes', 'git', 'github', 'React', 'NodeJS', 'AWS', 'Azure', 'CI/CD', 'Cloud Security', 'Cluster Security', 'MongoDB'],
            exposedTo: ['AI based K8S', 'python', 'DevOps']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'learning new tech updates',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ]
}