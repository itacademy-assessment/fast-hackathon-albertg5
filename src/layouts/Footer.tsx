export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0d253f] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <img alt="MovieApp Logo" className="mb-8 w-32" />
                        <button className="bg-transparent border border-white text-white py-2 px-4 rounded">
                            Get Started
                        </button>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-4">
                            The Basics
                        </h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white text-white"
                                >
                                    About IT Hackathon
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white text-white"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white text-white"
                                >
                                    Support Forums
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white text-white"
                                >
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white text-white"
                                >
                                    Terms of Use
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white text-white"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white text-white"
                                >
                                    DMCA Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white text-white"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white text-white"
                                >
                                    Proyects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white text-white"
                                >
                                    Creators
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white text-white"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
