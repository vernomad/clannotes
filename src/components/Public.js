import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Clan. secretNotes</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downstream Atlantas City, Clan. secretNotes
          provides a trained staff memo's cutting edge ready to meet your tech
          note taking needs.
        </p>
        <address className="public__addr">
          Clan Notes
          <br />
          555 Atlantas Drive
          <br />
          Atlantas City, CA 12345
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Bankz Oliver</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
