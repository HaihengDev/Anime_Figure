import NavBar from '../components/NavBar';

export default function Header() {
  return (
    <header>
      <NavBar />

      <aside>
        <div>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>2</span>
        </div>

        <i className="fa-solid fa-circle-user"></i>
      </aside>
    </header>
  );
}
