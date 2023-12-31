/* eslint-disable no-case-declarations */

import { Box } from "./Box";

/* eslint-disable react/prop-types */
export const TryLine = ({ colours, submitCombo, hiddenCombination }) => {
  let submittedCombination = ["no", "no", "no", "no"];

  const handleColourChange = (currentColour, index) => {
    submittedCombination[index] = currentColour;
  };

  const handleSubmit = () => {
    submitCombo(submittedCombination);
  };

  return (
    <div className="try-line">
      {[...Array(4)].map((ele, index) => (
        <Box
          key={index}
          position={index}
          colours={colours}
          handleColourChange={handleColourChange}
          hiddenCombination={hiddenCombination}
        />
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
