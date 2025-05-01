import {motion} from "framer-motion"

export function About (){
    return(
        <section className="container mx-auto px-6 py-12 flex flex-col items-center text-center">

        {/* Foto animada */}

        <motion.img
            src="/public/assets/Foto.jpg" 
            alt="Minha Foto"
            className="w-40 h-40 rounded-full object-cover shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
        />

        {/* Texto de apresentação */}           
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl"
            >
            <h1 className="text-4x1 font-bold mb-4 text-gray-900">Sobre Mim</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
                Meu nome é Bruno e possuo 25 anos atualmente.
                Sou um rapaz apaixonado por tecnologia que está buscando aprimorar seus conhecimentos cada vez mais.
                Atualmente estou estudando por conta e estruturando alguns projetos para aprimorar minhas skills.
            </p>
            </motion.div>
        </section>
    );
}

