import { Link, useLocation } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';

const Nav = () => {
  const location = useLocation();

  const handleClick: React.MouseEventHandler<SVGElement> = (e) => {
    document.querySelector('.menu')?.classList.toggle('hidden');
  };
  return (
    <nav className="w-full flex justify-between items-start sm:items-center p-4 md:p-6 bg-backImg text-blackLight font-bold text-xl ">
      <div className="logo">
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
      </div>
      <div className="nav-items flex flex-col items-center gap-2">
        <AiOutlineMenu className="sm:hidden" onClick={handleClick} />
        
        <ul className="menu-list hidden sm:flex sm:flex-row justify-end gap-10 mr-20">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          {location.pathname !== '/shop' ? (
            <div className="flex justify-center items-center text-2xl">
              <Link to="/cart">
                <AiOutlineShoppingCart />
              </Link>
            </div>
          ) : (
            ''
          )}
        </ul>
        <div className="menu flex flex-col gap-2 hidden sm:hidden ">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          {location.pathname !== '/shop' ? (
            <div className="flex justify-center items-center text-2xl">
              <Link to="/cart">
                <AiOutlineShoppingCart />
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>

      </div>
    </nav>
  );
};

export default Nav;
