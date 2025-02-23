import { Link } from "react-router"

const PageNotFound = () => {
  return (
    <div>
        <h1>Sorry, this page is not found </h1>
        <Link to='/'><button>Back to Sign in page</button></Link>
    </div>
  )
}

export default PageNotFound