export default function Nav() {
    return (
        <nav className="sticky flex justify-between items-center py-4 px-8 border border-gray-200 rounded">
            <div className="text-xl font-bold">Manish</div>
            <div className="hidden md:flex gap-4 text-sm">
                {/* Menu List */}
                <div>Home</div>
                <div>About</div>
                <div>Skills</div>
                <div>Projects</div>
                <div>Contact</div>
            </div>
            <div>
                <button
                    className="border border-gray-200 rounded px-3 py-1 text-sm font-medium"
                >
                    Resume
                </button>
            </div>
        </nav>
    );
}