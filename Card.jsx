import profilePic from "./assets/profile.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Hadi</h2>
      <p className="card-text">
        I am an ML specialist and I am trying to master in React
      </p>
    </div>
  );
}
export default Card;
