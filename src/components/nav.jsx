import { motion, useScroll } from 'motion/react'

export default function Nav() {
    const {scrollYProgress} = useScroll();
    function handleClick(id){
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <nav className="sticky top-0 border border-gray-200 rounded">
            <motion.div
                className='bg-black w-full h-1 origin-left '
                style={{
                    scaleX:scrollYProgress
                }}
            ></motion.div>
            <div className='flex justify-between items-center py-4 px-8'>
                <div className="text-xl font-bold">Manish</div>
                <div className="hidden md:flex gap-4 text-sm">
                    {/* Menu List */}
                    <div className="cursor-pointer" onClick={()=>handleClick('home')}>Home</div>
                    <div className="cursor-pointer" onClick={()=>handleClick('about')}>About</div>
                    <div className="cursor-pointer" onClick={()=>handleClick('skills')}>Skills</div>
                    <div className="cursor-pointer" onClick={()=>handleClick('projects')}>Projects</div>
                    <div className="cursor-pointer" onClick={()=>handleClick('contact')}>Contact</div>
                </div>
                <div>
                    <button
                        className="border border-gray-200 rounded px-3 py-1 text-sm font-medium"
                    >
                        Resume
                    </button>
                </div>
            </div>
        </nav>
    );
}