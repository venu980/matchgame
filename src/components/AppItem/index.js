import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {thumbnailUrl, imageUrl} = appDetails

  return (
    <li className="app-item">
      <img className="app-image" src={thumbnailUrl} alt="thumbnail" />
    </li>
  )
}

//  <img className="app-image" src={imageUrl} alt="match" />

export default AppItem
