import { type } from "os";
import { ReactNode } from "react";

export interface FBaseUserDetails {
  name: string;
  email: string;
  image: string;
  profile_picture: string;
  inMeeting: {
    meetingId: string;
    attendees: [string];
    creator: string;
    timer: number | null;
    roomname: string;
  };
}

export interface FBaseMeeting {
  attendees: [string];
  creatorEmail: string;
  creatorName: string;
  creatorProfilePicture: string;
  meetingId: string;
  roomname: string;
  timer: number | null;
}

export type ReviewRoomDetails = {
  meetingType: {
    cards: number;
    titles : string[]
  }
  updateState: {
    getCardText: () => ReactNode,
    setCardText: (text: React.ChangeEvent<HTMLTextAreaElement> | any) => void
  }
}
