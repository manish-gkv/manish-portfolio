import { FiMail } from "react-icons/fi";

export default function Contact() {
    return (
        <>
            <div id="contact" className="py-20 p-8 md:px-0 flex flex-col gap-4 max-w-3xl mx-auto">
                <div className="text-3xl font-extrabold flex gap-2 items-center">
                    <FiMail />
                    <div>Get In Touch</div>
                </div>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full">
                            <label className="block font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="block font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder="yourmail@gmail.com"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            type="textarea"
                            placeholder="Your Message"
                            rows="5"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                    <input type="submit" value="Submit" className="bg-black text-white py-2 rounded-md font-medium" />
                </form>
            </div>
        </>
    );
}