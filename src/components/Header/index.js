import './index.css'

const Header = () => {
  let count = 60
  const intervalId = setInterval(() => {
    count = count - 1
    console.log(count)
    if (count === 0) {
      clearInterval(intervalId)
    }
  }, 1000)

  return (
    <div className="header-app-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="math-logo"
        />
      </div>
      <div className="logo-container">
        <p className="score-heading"> Score: 0</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer-logo"
        />
        <p className="sec-heading">{count} Sec</p>
      </div>
    </div>
  )
}
export default Header
