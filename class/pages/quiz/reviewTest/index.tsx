import { useState } from "react";
import RateModal from "../../../src/components/units/test/ratingModal";

const RatePage = () => {
  const [rate, setRate] = useState(0);
  console.log(rate);
  return (
    <>
      <RateModal setRate={setRate} rate={rate} />
    </>
  );
};
export default RatePage;
