import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { doc, getDoc } from "firebase/firestore"; // Assuming you're using Firestore
import PersonaGridView from "../PersonaGridNew/PersonaGridView";

import { db, dbName } from "../Login/config";
import LoadingPage from "../component/loadingAnimation/Loading";
import RegistrationFormNexus from "./NexusRegistration";

const RegistrationChecker = () => {
  const { user, isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [authEmail, setAuthEmail] = useState("");

  useEffect(() => {
    const checkRegistration = async () => {
      if (isAuthenticated) {
        const userEmail = user?.email;

        let userSub = "" + user?.sub;
        let userSubSplit = userSub.split("|");
        let userID = userSubSplit[1];
        console.log("User ID from regisChecker" + userID);

        if (!userID || !userEmail) {
          console.error("User ID or email not found.");
          return;
        }

        try {
          console.log(userID);
          const docRef = doc(db, dbName, userID); // Assuming 'db' and 'dbName' are defined
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log("User is registered:", docSnap.data());
            setIsRegistered(true);
          } else {
            console.log("User is not registered.");
            console.log(user.email);
            setAuthEmail(authEmail);
          }
        } catch (error) {
          console.error("Error checking registration:", error);
        }

        setLoading(false);
      }
    };

    checkRegistration();
  }, [isAuthenticated, user]);

  if (loading) {
    return <LoadingPage initialTimerInterval={5} />;
  }

  if (isAuthenticated && !isRegistered) {
    return <RegistrationFormNexus />;
  }

  return <PersonaGridView />;
};

export default RegistrationChecker;
