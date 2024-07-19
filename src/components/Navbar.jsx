//Making this component because GitHbu is not allowing me to push empty folders.

const Navbar = () => {

  return (
    <header>
      <div className=" flex items-center justify-center mb-8 mr-25 ml-25">
        <div className="ml-0 pl-8 pr-14">
        <a>logo</a>
        </div>
        <div className="flex items-center justify-center space-x-8 ml-auto">
          <a href="#home">Home</a>
          <a>Our Foods</a>
          <a href="#about">About</a>
          <a href="https://github.com/orgs/chingu-voyages/teams/v50-tier2-team-15">Chingu</a>
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;