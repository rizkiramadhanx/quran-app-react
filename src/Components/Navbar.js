const Navbar = () => {
  return (
    <div className="w-full bg-teal-400 bg-fixed h-14 flex items-center font-Inter">
      <div className="m-auto w-11/12">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-medium">Quran App</div>
          <div>
            <ul className="flex">
              <li className="mr-5">Github</li>
              <li className="mr-5">About</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
