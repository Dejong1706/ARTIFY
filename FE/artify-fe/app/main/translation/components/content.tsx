import Title from "@/app/components/title";
import Button from "@/app/components/ui/button";
import React from "react";

const commonButtonStyle =
  "w-[8rem] bg-emerald-400 text-white px-3 py-2 rounded-lg text-[0.8rem] border border-emerald-500 hover:cursor-pointer hover:bg-emerald-500";

const borderStyle = "border-2 border-[#DBDBDB]";

const Content = () => {
  return (
    <div className="w-full h-[70%] p-2 flex flex-col">
      <div className="flex flex-col gap-2 flex-grow overflow-hidden">
        <Title>Content</Title>
        <div className="flex flex-col md:flex-row justify-around gap-4 flex-grow overflow-hidden">
          <textarea
            className={`w-full md:w-1/2 h-full p-2 bg-gray-100 resize-none ${borderStyle}`}
            placeholder="Please translation followings:{passage} 
            yours:"
          />
          <textarea
            className={`w-full md:w-[40%] h-full px-2 py-1 bg-gray-100 resize-none ${borderStyle}`}
            placeholder="{ ‘passage’ : ‘translation result’ }"
            disabled
          />
        </div>
      </div>
      <div className="w-full h-[20%] flex items-center justify-between px-4">
        <div className="w-[70%] h-[4rem] flex flex-row justify-around items-center">
          <Button title="RUN" styles={commonButtonStyle} />
          <Button title="SAVE" styles={commonButtonStyle} />
          <Button title="DICTIONARY" styles={commonButtonStyle} />
        </div>
        <div className="text-[0.8rem] text-gray-700">
          <p>0/3000 TOKEN</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
