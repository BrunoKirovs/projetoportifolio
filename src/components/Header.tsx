import {motion} from "framer-motion"
import {Link} from "react-router-dom"

export function Header (){
    return (
        <header className="bg-gray-900 text-white p-4 flex justify-center items-center h-screen">
        <h1 className="text-2x1 font-bold px-4 w-1/2 lg:block">
            <Link to="">Meu Portifólio</Link>
        </h1>
        <div>
        <p className="text-2x1 justify-center p-4 h-1/2"> Sejam bem vindos ao meu Portifolio que irá mostrar um pouco quem sou eu.</p>
        <div className="flex justify-center gap-4"></div>
        </div>
        <nav className="flex space-x-4">
               {[
                {label: "Home", path: "/"},
                {label: "Sobre", path: "/about"},
                {label: "Projetos", path: "/projects"}
               ].map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1}}
                        whileTap={{ scale: 0.95}}
                        transition={{ type: 'spring', stiffness: 300}}>
                            <Link
                                to={item.path}
                                className=" bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-300 ">
                                {item.label}    
                                </Link>
                        </motion.div>
               ))}
            
            </nav>
        </header>
    )
}