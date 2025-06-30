import { motion, useScroll } from 'motion/react'

export default function Nav() {
    const {scrollYProgress} = useScroll();
    return (
        <nav className="sticky border border-gray-200 rounded">
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
                    <div className="cursor-pointer">Home</div>
                    <div className="cursor-pointer">About</div>
                    <div className="cursor-pointer">Skills</div>
                    <div className="cursor-pointer">Projects</div>
                    <div className="cursor-pointer">Contact</div>
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