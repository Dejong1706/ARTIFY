"use client";

import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/Input";
import React, { useState } from "react";
import { defaultMemberDataType } from "../../type";
import { defaultMemberData } from "../../const";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoMdPlanet } from "react-icons/io";
import API from "@/utils/endpoint";

const MemberShipForm = () => {
  const [formItem, setFormItem] =
    useState<defaultMemberDataType>(defaultMemberData);
  const [error, setError] = useState("");

  const router = useRouter();

  const onChange = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFormItem((prev: defaultMemberDataType) => ({
      ...prev,
      [type]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(API.SIGNUP, {
        email: formItem.email,
        password: formItem.password,
        username: formItem.name,
      });

      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        setError(error.response?.msg);
      } else if (error.response?.status === 500) {
        setError(error.response?.msg);
      } else {
        setError("에러 발생");
      }
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center z-20">
      <div className="w-full max-w-[500px] bg-white p-4 sm:p-6 rounded-xl shadow-lg flex flex-col items-center mx-2">
        <div className="flex items-center justify-center w-full text-xl sm:text-2xl md:text-3xl py-4 sm:py-6 text-center font-bold">
          <IoMdPlanet className="mr-2" />
          <p>WELCOME TO ARTIFY</p>
        </div>
        <div className="w-full space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <Input
              title={"Name"}
              value={formItem.name}
              type="name"
              styles="w-full mb-2 sm:mb-0 p-2 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder={"Your Name"}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-end gap-2">
            <Input
              title={"Email"}
              value={formItem.email}
              type="email"
              styles="w-full p-2 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder={"Your Email"}
              onChange={onChange}
            />
            <Button
              title="Verify"
              styles="bg-black text-white w-full sm:w-[5rem] h-[2.5rem] rounded-lg mt-2 sm:mt-0 hover:cursor-pointer"
            />
          </div>
          <p className="text-green-600 text-xs sm:text-sm">
            ※ Enable Use Account Email :)
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-2 ">
              <Input
                value={formItem.password}
                title={"Password"}
                type="password"
                styles="w-full p-2 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder={"Your Password"}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-end gap-2">
              <Input
                value={formItem.passwordCheck}
                title={"Password Reconfirm"}
                type="passwordCheck"
                styles="w-full p-2 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder={"Re-enter password"}
                onChange={onChange}
              />
              <Button
                title="Verify"
                styles="bg-black text-white w-full sm:w-[5rem] h-[2.5rem] rounded-lg mt-2 sm:mt-0 hover:cursor-pointer"
                onClick={() => {
                  console.log("Click");
                }}
              />
            </div>
            <p className="text-green-600 text-xs sm:text-sm">
              ※ Enable Use Account Password :)
            </p>
          </div>
        </div>
        {error && (
          <div className="mt-4 w-full flex justify-center">
            <p className="text-red-400 text-sm sm:text-base">{error}</p>
          </div>
        )}
        <Button
          title={"Sign up"}
          styles="w-full bg-black py-2 rounded-lg text-white mt-6 cursor-pointer hover:bg-gray-900 transition"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default MemberShipForm;
