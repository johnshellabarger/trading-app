
export const LogoutButton = ({ setUser }) => {

    function handleLogout() {
      console.log("clicked")
        fetch("/logout", {
          method: "DELETE",
        }).then((resp) => {
          if (resp.ok) {
            setUser(null);
          }
        });
      }

    return (
        <>
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </>
    )
}
