export default function Hero() {
    return (
        <>
            <div className="flex flex-col h-screen px-8 py-4 items-center justify-center gap-4 sm:gap-6 font-medium w-full">
                <div className=""><span className="bg-gray-200 rounded-full text-sm py-1 px-3">FullStack Developer</span></div>
                <div className="text-black font-bold text-4xl md:text-6xl text-center tracking-tighter text-balance">
                    Building Scalable Web Solutions from Frontend to Backend
                </div>
                <div className="text-xl text-gray-500 text-center text-balance">
                    I create modern, responsive, and high-performance web applications using technologies like NextJs, ReactJs, ExpressJs and NodeJs.
                </div>
                <div className="flex flex-wrap sm:flex-row gap-4">
                    <div className="bg-black text-white text-center px-6 py-2 rounded text-nowrap w-full md:w-fit">
                        View My Work
                    </div>
                    <div className="text-center border border-gray-400 px-6 py-2 rounded text-nowrap w-full md:w-fit">
                        Get In Touch
                    </div>
                </div>
            </div>
        </>
    );
}