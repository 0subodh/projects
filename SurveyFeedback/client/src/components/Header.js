export default function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <button type="button" className="btn btn-secondary btn-lg">
          Emaily
        </button>
        <form className="d-flex" role="search">
          <button type="button" className="btn btn-primary btn-lg">
            <a
              href="http://localhost:5000/auth/google"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              Login With Google
            </a>
          </button>
        </form>
      </div>
    </nav>
  );
}
