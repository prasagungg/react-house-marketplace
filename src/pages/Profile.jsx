import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    setUser(auth.currentUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <h1>{user ? user.displayName : "User Not Login"}</h1>;
}

export default Profile;
