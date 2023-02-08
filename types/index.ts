export interface FBaseUserDetails {
    name: string
    email: string
    image: string
    profile_picture: string,
    inMeeting: {
      meetingId: string,
      attendees: [string],
      creator: string,
      timer: number | null,
      roomname: string,
    },
  }