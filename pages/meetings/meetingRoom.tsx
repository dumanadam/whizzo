import { Card, Label, Textarea, TextInput } from "flowbite-react";
import React, { ReactNode, useEffect, useState } from "react";
import ReviewTextCard from "../../Components/Card/ReviewTextCard/ReviewTextCard";
import { Happy } from "../../Functions/statics/meetingTypes";


const meetingRoom = (): ReactNode => {

    const [reviewEntries, setReviewEntries] = useState(null);
    const [cards, setCards] = useState(null);

    useEffect(() => {

        
      }, []);

      useEffect(() => {
        console.log('reviewEntries', reviewEntries)
      }, [reviewEntries])
      
  function showCards() {
    
    let cardsToDisplay = [];

    for (let index = 0; index < Happy.quantity; index++) {
      console.log('Happy.cards', )
      let aCard = (<div className="w-1/4">
      <Card className="bg-red-600 h-96 mb-32">
        <div className="bg-white h-full rounded text-black">
          {reviewEntries ? reviewEntries : null}
        </div>
      </Card>
      <Card className="h-56 p-4">
        <div className="h-full rounded text-black">
          <div className="mb-2 block">
            <Label htmlFor="cardEntry" value={Happy.cardDetails[Happy.titles[index]].prompt} />
          </div>
          <Textarea
            id="comment"
            placeholder="I am happy about....."
            required={true}
            rows={6}
            className="min-h-fit max-h-full"
            onClick={(e) => {console.log(e)}}
            onChange={(e) => {setReviewEntries(e.target.value)}}
          />
        </div>
      </Card>
    </div>);
      cardsToDisplay.push(aCard);
    }
    return cardsToDisplay;
  }

  return (
    <div className="p-3 ml-64 flex items-center justify-evenly h-screen">
      {showCards()}
    </div>
  );
};

export default meetingRoom;
