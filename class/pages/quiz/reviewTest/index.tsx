import { useState } from "react";
import RateModal from "../../../src/components/units/test/ratingModal";

const RatePage = () => {
  const [rate, setRate] = useState(0);
  return (
    <>
      <RateModal setRate={setRate} rate={rate} />
    </>
  );
};
export default RatePage;
