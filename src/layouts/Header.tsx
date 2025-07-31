const Header = () => {
	return (
		<header className="relative z-10 flex justify-between items-center bg-gradient-to-r from-purple-600 via-white to-white p-4 shadow-lg rounded-b-lg">
			<h1 className="text-2xl font-bold text-pink-600">
				IT Academy Projects
			</h1>

			<div className="flex space-x-4">
				<button className="bg-white text-pink-400 shadow rounded-full px-4 py-2 hover:bg-pink-50 transition">
					Menú 1
				</button>
				<button className="bg-white text-pink-400 shadow rounded-full px-4 py-2 hover:bg-pink-50 transition">
					Menú 2
				</button>
			</div>
		</header>
	)
}

export default Header
