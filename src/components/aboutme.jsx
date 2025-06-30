import { FiUser } from "react-icons/fi";

export default function Aboutme() {
    return (
        <div className="bg-gray-50 py-20 p-8 ">
            <div className=" flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
                <div className="flex flex-col gap-8">
                    <div className="flex text-3xl gap-2 font-extrabold items-center">
                        <div>
                            <div><FiUser /></div>
                        </div>
                        <div>About Me</div>
                    </div>
                    <div>
                        Hello! I'm a passionate frontend developer with a keen eye for design and a love for creating smooth, interactive user experiences. I specialize in building modern web applications using the latest technologies and best practices.
                        <br /><br />
                        With a background in both design and development, I bridge the gap between aesthetics and functionality. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
                        
                    </div>
                </div>
                <div className="flex flex-col col-span-1 w-full bg-white border border-gray-200 p-4 rounded-lg shadow-2xl text-black font-medium">
                    <div className="mb-6">Quick Info</div>
                    <div className="grid grid-cols-2 items-start ">
                        <div >Exprience : </div>
                        <div > 6+Months</div>
                    </div>
                    <div className="grid grid-cols-2 items-start">
                        <div >Location : </div>
                        <div >Haridwar</div>
                    </div>
                    <div className="grid grid-cols-2 items-start">
                        <div>Education : </div>
                        <div>B.Tech Computer Science</div>
                    </div>
                    <div className="grid grid-cols-2 items-start">
                        <div>Language : </div>
                        <div>English, Hindi</div>
                    </div>
                </div>
            </div>
        </div>
    );
}