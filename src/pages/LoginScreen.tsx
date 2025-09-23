import { IdCard, KeyRound, LucideLogIn, User2, User2Icon } from "lucide-react";
import React, { useState } from "react";

export const LoginScreen = () => {
  const [isUser, setIsUser] = useState(true);

  return (
    <main className="bg-[#F3F5F7] min-h-screen max-h-screen flex justify-center items-center">
      <div className="w-[600px] bg-white flex flex-col justify-center items-center p-7 gap-5 rounded-xl shadow">
        <h1 className="text-[#0D47A1] font-bold text-xl">E-Manifest Login</h1>
        <p className="text-slate-800">
          Selamat datang kembali. Silahkan masuk menggunakan metode di bawah.
        </p>

        <div className="bg-[#EDF0F2] p-2 flex gap-4 rounded-4xl justify-between w-full">
          <button
            onClick={() => setIsUser(true)}
            className={`transition-all cursor-pointer w-1/2 rounded-4xl text-black font-semibold  py-2 flex justify-center gap-2 items-center ${
              isUser ? "text-blue-700 bg-white shadow" : ""
            }`}
          >
            <User2Icon /> Username
          </button>
          <button
            onClick={() => setIsUser(false)}
            className={`transition-all cursor-pointer w-1/2  text-black font-semibold py-2 flex justify-center gap-2 items-center ${
              !isUser ? "text-blue-700 bg-white rounded-4xl shadow" : ""
            }`}
          >
            <IdCard /> NIB
          </button>
        </div>

        {isUser ? (
          <form className="w-full">
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="" className="text-slate-700">
                Username
              </label>
              <div className="relative w-full">
                <User2
                  className="absolute left-3 top-1/2 -translate-y-1/2 "
                  color="gray"
                />
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 pl-10 py-2 rounded-4xl text-gray-700 font-medium"
                  placeholder="Masukan Username"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-700 ">
                Password
              </label>
              <div className="relative w-full">
                <KeyRound
                  className="absolute left-3 top-1/2 -translate-y-1/2 "
                  color="gray"
                />
                <input
                  type="password"
                  className="w-full bg-white border border-gray-300 pl-10 py-2 rounded-4xl text-gray-700 font-medium"
                  placeholder="Masukan Username"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 bg-[#0D47A1] w-full flex justify-center items-center py-3 rounded-4xl gap-3 text-white"
            >
              <LucideLogIn /> Masuk
            </button>

            <p className="text-slate-700 font-medium text-center mt-10 ">
              Belum punya akun?{" "}
              <span className="text-[#0D47A1] cursor-pointer">
                Daftar di sini
              </span>
            </p>
          </form>
        ) : (
          <form className="w-full">
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="" className="text-slate-700">
                NIB (Nomor Induk Berusaha)
              </label>
              <div className="relative w-full">
                <IdCard
                  className="absolute left-3 top-1/2 -translate-y-1/2 "
                  color="gray"
                />
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 pl-10 py-2 rounded-4xl text-gray-700 font-medium"
                  placeholder="Masukan NIB"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-700 ">
                Password
              </label>
              <div className="relative w-full">
                <KeyRound
                  className="absolute left-3 top-1/2 -translate-y-1/2 "
                  color="gray"
                />
                <input
                  type="password"
                  className="w-full bg-white border border-gray-300 pl-10 py-2 rounded-4xl text-gray-700 font-medium"
                  placeholder="Masukan Username"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 bg-[#0D47A1] w-full flex justify-center items-center py-3 rounded-4xl gap-3 text-white"
            >
              <LucideLogIn /> Masuk via OSS NIB
            </button>

            <p className="text-slate-700 font-medium text-center mt-10 ">
              Belum punya akun?{" "}
              <span className="text-[#0D47A1] cursor-pointer">
                Daftar di sini
              </span>
            </p>
          </form>
        )}
        {/* isUser */}
      </div>
    </main>
  );
};
