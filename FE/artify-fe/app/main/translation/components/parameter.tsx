import Title from "@/app/components/title";
import React from "react";

const borderStyle = "border-2 border-[#DBDBDB]";
const Parameter = () => {
  return (
    <div className="w-full h-[30%] px-3">
      <Title>Parameter</Title>
      <div className="w-full h-[70%]">
        <textarea
          className={`w-full h-full px-2 py-1 bg-gray-100 resize-none ${borderStyle}`}
          placeholder="{
              ‘language_from’ : ‘korean’,
              ‘language_to’ : ‘english’, 
              ‘temperature’ : 0.0,
              ‘top_k’ : 1.0,
              ‘repetition penalty’ : 0.5,
              ‘presence penalty’ : 0.5
              
            }"
          disabled
        />
      </div>
    </div>
  );
};

export default Parameter;
