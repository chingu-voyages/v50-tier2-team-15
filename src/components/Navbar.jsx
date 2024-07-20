//Making this component because GitHbu is not allowing me to push empty folders.

const Navbar = () => {
  return (
    <header>
      <div className="flex items-center justify-center mb-8 mr-25 ml-25">
        <div className="ml-0 pl-8 pr-14">
          <a href="your-logo-link-url">
            <img src="src/assets/flavorfinder-logo-orange-png.png" alt="logo" className="h-10" />
          </a>
        </div>
        <div className="flex items-center justify-center space-x-8 ml-auto text-purple-900">
          <a href="#home">Home</a>
          <a href="#our-foods">Our Foods</a>
          <a href="#about" className="font-bold">About</a>
          <a href="https://github.com/orgs/chingu-voyages/teams/v50-tier2-team-15">Chingu</a>
          <button>
            <a href="your-link-url" className="inline-block px-6 py-2 bg-white text-orange-600 rounded-full">
              Get Started
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
