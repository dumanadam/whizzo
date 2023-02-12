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

const meeting = (props) => {
  const [meetingsState, setMeetingsState] = useState();
  const [keysState, setKeysState] = useState([]);
  const [meetings] = [props];
  const meetingsRef = ref(realDb, "meetings/");
  useEffect(() => {
    console.log(
      "query",
      query(ref(realDb, "meetings/"), orderByChild("roomName"))
    );
    var orderedref = query(ref(realDb, "meetings/"), orderByChild("roomName"));

    onValue(orderedref, (snapshot) => {
      const data: FBaseMeeting = snapshot.val();

      if (Object.keys(data)) {
        var keys = Object.keys(data);
        console.log("keys", keys);
        console.log("onvalue", data);
        var ret: React.ReactFragment[] = MeetingRow(data, keys);
        console.log("ret count", ret.length);
        if (ret !== meetingsState) setMeetingsState(ret);
      }
    });
  }, []);

  function MeetingLine(meetings: FBaseMeeting, keys: string[]) {
    var ret = [];
    if (keys.length > 1) {
      console.log("srv meetings", meetings);
      console.log("srv keys", keys);
      keys.forEach((key) => {
        ret.push(
          <li className="py-3 sm:py-4" key={key}>
            <div className="flex items-center space-x-2">
              <div className="w-1/4 min-w-fit text-base font-semibold text-gray-900 dark:text-white">
                {meetings[key].roomName}
              </div>
              <div className="w-1/12 min-w-fit bg-red-400 text-base font-semibold text-gray-900 dark:text-white">
                {meetings[key].timer}
              </div>
              <div className="flex min-w-fit w-1/6 items-center truncate bg-blue-400">
                <img
                  className="w-6 h-6 rounded-full m-2  hidden lg:block"
                  referrerPolicy="no-referrer"
                  src={meetings[key].creatorProfilePicture}
                  alt="Profile picture"
                />
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {meetings[key].creatorName}
                </p>
                {/*                 <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {meetings[key].creatorEmail}
                </p> */}
              </div>
              <div className="text-left w-6 text-base font-semibold bg-red-600 text-gray-900 dark:text-white">
                {meetings[key].timer}
              </div>
              <div className="text-left text-base font-semibold text-gray-900 dark:text-white">
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>
          </li>
        );
      });
      return ret;
    }
  }

  function MeetingRow(meetings: FBaseMeeting, keys: string[]) {
    var ret = [];
    if (keys.length > 1) {
      console.log("srv meetings", meetings);
      console.log("srv keys", keys);
      keys.forEach((key) => {
        ret.push(
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
    <div className="grid h-96 place-items-center border-4 border-solid border-yellow-400 rounded bg-red-400">
      {{ meetingsState } ? (
        <div className="relative overflow-x-auto shadow-md rounded-lg max-w-lg border-spacing-x-12 border-4 border-solid border-yellow-100 rounded">
          <table className="flex-1 text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded">
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
                    data-darkreader-inline-stroke=""
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
      ) : ("Squirells fetching.... ")}
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

export default meeting;
