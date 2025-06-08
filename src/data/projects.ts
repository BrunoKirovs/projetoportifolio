// Código para inclusão dos projetos dentro da página.

export interface Project {
    id: number;
    title: string;
    description: string;
    imagem:string;
    link:string;
}

export const projects: Project[] = [
    {
        id: 1,
        title:"Newsletter",
        description:"Projeto Alura",
        imagem:"/public/assets/icone-mergulhador.svg",
        link:"https://tailwind-newsletter-nu.vercel.app/",
    },
    {
        id: 2,
        title:"Dashboard",
        description:"",
        imagem:" ",
        link:"",
    },
        {
        id: 3,
        title:"Dashboard",
        description:"",
        imagem:" ",
        link:"",
    },
        {
        id: 4,
        title:"Dashboard",
        description:"",
        imagem:" ",
        link:"",
    },
        {
        id: 5,
        title:"Dashboard",
        description:"",
        imagem:" ",
        link:"",
    },
        {
        id: 6,
        title:"Dashboard",
        description:"",
        imagem:" ",
        link:"",
    },
];