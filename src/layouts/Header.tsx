import logo from '/src/assets/images/logo.png'

const Header = () => {
    return (
        <header>
            {' '}
            return (
            <>
                <div
                    className={`flex bg-[#0d253f] flex-col md:flex-row justify-between items-center p-4 px-16 text-black-300`}
                >
                    <div className="w-32">
                        <img src={logo}></img>
                    </div>
                    <div
                        className={`flex justify-between items-center space-x-4 gap-3 md:my-0 my-5 font-semibold border border-white rounded-full px-12 py-2`}
                    >
                        <a className="hover:text-blue-400 cursor-pointer">
                            Home
                        </a>
                        <a className="hover:text-blue-400 cursor-pointer">
                            Proyects
                        </a>
                        <a className="hover:text-blue-400 cursor-pointer">
                            Creators
                        </a>
                        <a className="hover:text-blue-400 cursor-pointer">
                            More
                        </a>
                    </div>
                    <div className="flex justify-between items-center space-x-3  font-semibold">
                        <button className="bg-[#1967bb] text-white px-4 py-2 rounded-full hover:bg-blue-600 cursor-pointer">
                            Login
                        </button>
                        <button className="bg-[#1967bb] text-white px-4 py-2 rounded-full hover:bg-blue-600 cursor-pointer">
                            Register
                        </button>
                    </div>
                </div>
            </>
        </header>
    )
}

export default Header
