"client-side";
import { GetServerSideProps } from "next";
import { log } from "console";
import {
  child,
  get,
  onValue,
  orderByChild,
  query,
  ref,
} from "firebase/database";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { realDb } from "../../firebaseConfig";
import { FBaseMeeting } from "../../types";
import { Button } from "flowbite-react";
import Link from "next/link";

const AllMmeetings = (props) => {
  const [meetingsState, setMeetingsState] = useState<JSX.Element[] | null>();
  const [keysState, setKeysState] = useState([]);
  const [meetings] = [props];
  const meetingsRef = ref(realDb, "meetings/");
  useEffect(() => {
    console.log(
      "query",
      query(ref(realDb, "meetings/"), orderByChild("roomName")).ref
    );
    console.log(
      "props",meetings
      
    );
    var orderedref = query(ref(realDb, "meetings/"), orderByChild("roomName"));

    onValue(orderedref, (snapshot) => {
      const data: FBaseMeeting = snapshot.val();

      if (Object.keys(data)) {
        var keys = Object.keys(data);
        console.log("keys", keys);
        console.log("onvalue", data);
        var newMeetingRows = MeetingRow(data, keys);
        if (newMeetingRows !== meetingsState) setMeetingsState(newMeetingRows);
      }
    });
  }, []);

  function MeetingRow(meetings: FBaseMeeting, keys: string[]) {
    let ret : JSX.Element[] = [];
    if (keys.length > 1) {
      console.log("srv meetings", meetings);
      console.log("srv keys", keys);
      keys.forEach((key) => {
        ret.push(
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={key}>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {meetings[key].roomName}
            </th>
            <td className="px-6 py-4">{meetings[key].timer}</td>
            <td className="px-6 py-4 flex items-center">
              <img
                className="w-6 h-6 rounded-full"
                src={meetings[key].creatorProfilePicture}
                referrerPolicy="no-referrer"
                alt="Jese image"
              />
              <div className="pl-3">
                <div className="text-xs font-semibold">
                  {" "}
                  {meetings[key].creatorName}
                </div>
                <div className="text-xs font-thin text-gray-500">
                  {" "}
                  {meetings[key].creatorEmail}
                </div>
              </div>
            </td>
            <td className="px-6 py-4">{meetings[key].timer}</td>
            <td className="m-0">
              <Link
                href="#"
                className="py-0  text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-md px-5 text-center mr-4 mb-4 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
              >
                Join
              </Link>
            </td>
          </tr>
        );
      });
      return ret;
    }
  }

  return (
    <>
      <div className="grid h-96 place-items-center rounded bg-red-400">
        {{ meetingsState } ? (
          <div className="relative overflow-x-auto shadow-md rounded-lg max-w-lg border-spacing-x-12">
            <div className="uppercase bg-gray-50 dark:bg-blue4 rounded-t-lg px-3 py-2">
              <h1>
                Join a review
              </h1>
            </div>
            <table className="flex-1 text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue4 dark:text-gray-300 rounded">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Room
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Timer
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Creator
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <svg
                    className="w-5 h-5"
                      data-darkreader-inline-stroke=""
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>{meetingsState}</tbody>
            </table>
          </div>
        ) : (
          "Squirells fetching.... "
        )}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const meetingsRef = ref(realDb, "meetings/");

  return get(child(meetingsRef, `/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("get", snapshot.val());

        return {
          props: { meetings: snapshot.val() }, // will be passed to the page component as props
        };
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default AllMmeetings;
