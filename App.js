import "./styles.css";

export default function App() {
  return (
    <>
<head>
  <title>My Page</title>
</head>
<div>
<header className="header">
    <h5 className="header__title">Welcome to My Page</h5>
    <nav className="header__nav header__nav--inline">
      <ul>
        <li className="header__nav__item"><a href="#about" className="header__nav__link">About</a></li>
        <li className="header__nav__item"><a href="#services" className="header__nav__link">Services</a></li>
        <li className="header__nav__item"><a href="#contact" className="header__nav__link">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main className="main">
    <section id="about" className="main__section">
      <h2 className="main__section__title">About</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id leo eu quam fermentum ultricies. Proin at nulla non diam consequat tempus eu sed dolor. Sed auctor facilisis diam, sed facilisis magna consequat et. Nam vehicula felis sed dolor ultricies, id fermentum leo ultricies. Aliquam erat volutpat. Suspendisse potenti. Nullam quis elit diam. Nulla facilisi. Nam vel ultricies velit.</p>
      <p>
        <button className="main__section__btn">Learn More</button>
      </p>
    </section>
    <section id="services" className="main__section">
      <h2 className="main__section__title">Services</h2>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </section>
    <section id="contact" className="main__section">
      <h2 className="main__section__title">Contact</h2>
      <p>Phone: 555-555-5555</p>
      <p>Email: info@mypage.com</p>
      <p>
        <button href="#" className="main__section__btn">Send Message</button>
      </p>
    </section>
  </main>
  <footer className="footer">
    <p className="footer__copyright">Copyright 2022 My Page</p>
  </footer>
</div>

    </>
  );
}
