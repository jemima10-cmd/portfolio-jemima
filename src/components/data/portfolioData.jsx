/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} videoSrc Url del video (opcional)
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @type {PortafolioData[]}
 */
export const portafolioData = [
    {
        videoSrc: 'https://files.catbox.moe/wjjsr4.mp4',
        title: 'Devine le nombre',
        skills: ['Python'],
        descripcion: "Un jeu où l'utilisateur doit deviner un nombre choisi aléatoirement par l'ordinateur, qui donne des indices comme 'plus grand' ou 'plus petit' pour aider à trouver la bonne réponse.",
        demoURL: 'https://files.catbox.moe/wjjsr4.mp4',
        repoURL: '',
        anim: 'fade-left',
        
    },
    {
        videoSrc: 'https://files.catbox.moe/fpim7z.mp4',
        title: 'Morpion',
        skills: ['Python'],
        descripcion:"Un jeu où deux joueurs s'affrontent sur une grille 3x3 en tentant d'aligner trois symboles identiques, horizontalement, verticalement ou en diagonale.",
        demoURL: 'https://files.catbox.moe/fpim7z.mp4',
        repoURL: '',
        anim: 'fade-left',
    },
    {
        videoSrc: 'https://files.catbox.moe/iwjere.mov',
        title: 'Boutique',
        skills: ['WordPress'],
        descripcion: 'Une boutique en ligne créée avec WordPress et Elementor, facile à naviguer et spécialisée dans les produits de soin.',
        demoURL: 'https://files.catbox.moe/iwjere.mov',
        repoURL: '',
        anim: 'fade-left',
    },
    {
        videoSrc: 'https://files.catbox.moe/s94e50.mp4',
        title: 'Accueil',
        skills: ['HTML', 'CSS'],
        descripcion: 'Une boutique simple et fluide, mettant en avant des produits avec un design épuré.',
        demoURL: 'https://files.catbox.moe/s94e50.mp4',
        repoURL: '',
        anim: 'fade-left',
    },
    {
        imgSrc: 'https://files.catbox.moe/s19lhu.PNG',
        title: 'Montage',
        skills: ['Photoshop'],
        descripcion: "Montage photo d’un mur retravaillé pour le rendre plus esthétique et jouer avec les couleurs et les textures.",
        demoURL: 'https://files.catbox.moe/s19lhu.PNG',
        repoURL: '',
        anim: 'fade-left',
    },
    {
        imgSrc: 'https://files.catbox.moe/0qy9yu.PNG',
        title: 'Montage',
        skills: ['Illustrator','Photoshop'],
        descripcion: "Montage photo réalisé à partir de plusieurs images rassemblées pour créer un visuel publicitaire, avec ajout d’un arrière-plan pour le rendre plus attrayant.",
        demoURL: 'https://files.catbox.moe/0qy9yu.PNG',
        repoURL: '',
        anim: 'fade-left',
        
    },
    {
        imgSrc: 'https://files.catbox.moe/zu8rvx.png',
        title: 'Montage',
        skills: ['Photoshop'],
        descripcion: "Montage photo de colorisation d’une image en noir et blanc pour sublimer les détails et jouer sur les contrastes.",
        demoURL: 'https://files.catbox.moe/zu8rvx.png',
        repoURL: '',
        anim: 'fade-left',
    },
    {
        imgSrc: 'https://files.catbox.moe/22jyal.jpg',
        title: 'Montage',
        skills: ['Photoshop'],
        descripcion: "Montage photo d’une photo ancienne restaurée, avec suppression des traces de déchirure et ajout d’un arrière-plan pour moderniser l’image.",
        demoURL: 'https://files.catbox.moe/22jyal.jpg',
        repoURL: '',
        anim: 'fade-left',
    },
    
   
    {
        imgSrc: 'https://files.catbox.moe/wdxajo.PNG',
        title: 'Montage',
        skills: ['Photoshop'],
        descripcion: "Montage photo d’un homme avec une tête transformée en ampoule, jouant avec les contrastes pour un effet visuel surprenant.",
        demoURL: 'https://files.catbox.moe/wdxajo.PNG',
        repoURL: '',
        anim: 'fade-left',
    },
    
];

const skillIcons = {
    JavaScript: 'skill-icons:javascript',
    WordPress:'logos:wordpress',
    Photoshop: 'logos:adobe-photoshop',
    Python:'logos:python',
    Illustrator: 'logos:adobe-illustrator',
    CSS: 'mdi:language-css3',
    HTML: 'mdi:language-html5',

};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 */
export const getPortafolioData = portafolioData.map((item) => {
    return {
        ...item,
        skills: item.skills.map((skill) => skillIcons[skill]),
    };
});
