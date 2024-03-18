function ProfilePicture() {
  const styles = {
    width: "100px",
  };
  const imageUrl = "./src/assets/profile.jpg";

  const handleClick = (e) => (e.target.style.display = "none");
  return (
    <img onClick={(e) => handleClick(e)} src={imageUrl} style={styles}></img>
  );
}
export default ProfilePicture;
