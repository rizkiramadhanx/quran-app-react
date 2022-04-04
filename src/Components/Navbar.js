import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-teal-400 bg-fixed h-14 flex items-center font-Inter">
      <div className="m-auto w-11/12">
        <nav className="flex justify-between items-center">
          <Link to={"/"}>
            <div className="text-xl font-medium">Quran App</div>
          </Link>
          <div>
            <ul className="flex">
              <li className="mr-5">
                <a
                  href="https://github.com/rizkiramadhanx/quran-app-react"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://portofolio-rizkiramadhanx.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
