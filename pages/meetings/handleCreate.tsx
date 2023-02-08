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

  var updatedDetails = {
    email: userDetails.email,
    profile_picture: userDetails.image,
    inMeeting: {
      meetingId: newMeetingKey,
      attendees: [userDetails.email],
      creator: userDetails.email,
      timer: timer,
      roomname: roomName,
    },
  };

  setUserDetails({
    ...userDetails,
    ...updatedDetails,
  });

  set(meetingRef, {
    ...updatedDetails,
  });

  set(userRef, {
    ...userDetails,
  });

  const meetingId = meetingRef.key;
  console.log("meetingId", meetingId);
  return true;
}

export default handleCreate;
