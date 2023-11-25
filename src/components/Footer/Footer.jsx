const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">

      <nav>
        <header className="footer-title">Quick Links</header>
        <a className="link link-hover">Meals</a>
        <a className="link link-hover">Upcoming Meals</a>

      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
      {/* <nav>
        <header className="footer-title">DashBoard</header>
        <a className="link link-hover">My Review</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav> */}
      
    </footer>
  );
};

export default Footer;
