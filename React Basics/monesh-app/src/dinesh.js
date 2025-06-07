function Dinesh(props) {
  return (
    <div className="Dinesh">
        Dinesh's React App
        <p>Welcome to Dinesh's App.</p>
        {props.authValue ? (
            <p>You are authenticated.</p>
        ) : (
            <p>You are not authenticated.</p>
        )}
    </div>
    ); 
  
}

export default Dinesh;