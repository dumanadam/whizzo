import { Card, Label, Textarea } from 'flowbite-react'
import React from 'react'
import { ReviewRoomDetails } from '../../../types'

function ReviewTextCard(reviewEntries, reviewRoomDetails : ReviewRoomDetails) {
const {getCardText, setCardText } = reviewRoomDetails.updateState;

console.log('getCardText', getCardText);
console.log('reviewEntries', reviewEntries);

  return (
    <>
    <div className="w-1/4">
          <Card className="bg-red-600 h-96 mb-32">
            <div className="bg-white h-full rounded text-black">
              {getCardText}
            </div>
          </Card>
          <Card className="h-56 p-4">
            <div className="h-full rounded text-black">
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Happy about" />
              </div>
              <Textarea
                id="comment"
                placeholder="I am happy about....."
                required={true}
                rows={6}
                className="min-h-fit max-h-full"
                onClick={(e) => {console.log(e)}}
                onChange={(e) => {setCardText(e.target.value)}}
              />
            </div>
          </Card>
        </div>
        </>  
  )
}

export default ReviewTextCard