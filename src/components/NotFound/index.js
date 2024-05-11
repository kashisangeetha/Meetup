import {NotFoundContainer, NotFoundHeading, NotFoundPara, Img} from './style'

const NotFound = () => (
  <NotFoundContainer>
    <Img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundPara>We are Sorry</NotFoundPara>
  </NotFoundContainer>
)
export default NotFound
