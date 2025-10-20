import './index.css'

const NotFound = props => {
  const {id} = props
  return (
    <div key={id}>
      <h1 className="page">Page Not Found</h1>
    </div>
  )
}

export default NotFound
