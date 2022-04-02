const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-teal-400 p-5 items-center font-Inter">
      <div className="text-center text-sm">
        Copyright {currentYear} | Rizki Ramadhan
      </div>
    </div>
  );
};

export default Footer;
