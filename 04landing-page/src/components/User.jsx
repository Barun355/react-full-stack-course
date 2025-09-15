
function User({ userRole="Full Stack Developer", description, price, place }) {

    return (
        <div>
          <h3>{userRole}</h3>
          <p>{description}</p>
          <div>
            <span>{price}</span>
            <span>{place}</span>
          </div>
        </div>
    )
}

export default User;