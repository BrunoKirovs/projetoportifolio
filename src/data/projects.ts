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

];