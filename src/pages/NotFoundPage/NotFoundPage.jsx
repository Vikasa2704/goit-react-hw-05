import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div>
 <b>Page not found</b>
  <Link to='/'>Back to home page!</Link>
    </div>
  )
}

export default NotFoundPage