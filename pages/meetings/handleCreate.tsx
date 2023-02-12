import React, { useEffect } from "react";
import { ref, set, get, onValue, push, child, update } from "firebase/database";
import { app, realDb } from "../../firebaseConfig";
import { FBaseUserDetails } from "../../types";
import { useRouter } from "next/router";

function handleCreate(
  roomName: string,
  timer: number,
  userDetails: FBaseUserDetails,
  setUserDetails
) {
  console.log("handlecreate userdetails", userDetails);

  const newMeetingKey = push(child(ref(realDb), "meetings")).key;
  const userRef = ref(realDb, "users/" + userDetails.email.replace(/\./g, ","));
  const meetingRef = ref(realDb, "meetings/" + newMeetingKey);

  var meetingDetails = {
    creatorProfilePicture: userDetails.image,
    creatorEmail: userDetails.email,
    creatorName: userDetails.name,
    meetingId: newMeetingKey,
    attendees: [userDetails.email],
    timer: timer,
    roomName: roomName,    
  };

  setUserDetails({
    ...userDetails,
    ...meetingDetails,
  });

  set(meetingRef, {
    ...meetingDetails,
  });

  set(userRef, {
    ...userDetails,
  });

  const meetingId = meetingRef.key;
  console.log("meetingId", meetingId);
  return true;
}

export default handleCreate;
