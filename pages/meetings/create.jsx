import { Card } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CreateNewMeeting() {
  const [roomName, setRoomName] = useState(null);

  useEffect(() => {
    console.log("roomnaem", roomName);
  }, [roomName]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="m-4 w-[278px]">
        <div className="flex flex-col items-center pb-6 p-4">
          <div className="mb-6">
            <input onChange={(e)=>{setRoomName(e.target.value)}} type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
            >
             Room Name
            </label>
      
          </div>
          

          <div className="flex space-x-3 text-center">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => null}
              
            >
              Join
            </a>
          </div>

        </div>
      </Card>

    </div>
  );
}
