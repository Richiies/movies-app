import './Header.css'

const Header = () => (
  <nav>
    <div>
      <span className="header">
        <h1>Movies</h1>

        <ul>
          <li>
            <p>Popular</p>
          </li>
          <li>
            <img
              src="https://static.thenounproject.com/png/630729-200.png"
              alt="profile"
              className="iconsize"
            />
          </li>
        </ul>
      </span>
    </div>
  </nav>
)

export default Header
