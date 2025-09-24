import { Building, CircleUserRoundIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  const [isUser, setIsUser] = useState(true);
  return (
    <>
      <main className="bg-[#F3F5F7] min-h-screen max-h-screen flex justify-center items-center">
        <div className="w-[800px] bg-white flex flex-col justify-center items-center p-7 gap-5 rounded-xl shadow">
          <h1 className="text-[#0D47A1] font-bold text-xl">Daftar Akun Baru</h1>
          <p className="text-slate-800 self-start">
            Pilih tipe akun, lalu lengkapi data Anda.
          </p>

          <div className="bg-[#EDF0F2] p-2 flex gap-4 rounded-4xl justify-between w-full">
            <button
              onClick={() => setIsUser(true)}
              className={`transition-all cursor-pointer w-1/2 rounded-4xl text-black font-semibold  py-2 flex justify-center gap-2 items-center ${
                isUser ? "text-blue-700 bg-white shadow" : ""
              }`}
            >
              <CircleUserRoundIcon /> Perorangan
            </button>
            <button
              onClick={() => setIsUser(false)}
              className={`transition-all cursor-pointer w-1/2  text-black font-semibold py-2 flex justify-center gap-2 items-center ${
                !isUser ? "text-blue-700 bg-white rounded-4xl shadow" : ""
              }`}
            >
              <Building /> Perusahaan
            </button>
          </div>

          {isUser ? (
            <form className="w-full">
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="" className="font-medium text-slate-700">
                  NIK (Username) <br />{" "}
                  <span className="text-sm text-slate-600">
                    Masukkan NIK, lalu klik Cek untuk mengisi data secara
                    otomatis. NIK menjadi username Anda.
                  </span>
                </label>
                <div className="relative w-full">
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-blue-700 cursor-pointer">
                    Cek
                  </button>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                    placeholder="Contoh: 3275 01 10 12 34 5678"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Minimal 8 karakter"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    placeholder="Contoh: nama@email.com"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Alamat Sesuai KTP
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Jl. Melati No. 5, RT 04/RW 02"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Alamat Domisili (jika berbeda)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Jl. Anggrek No. 10, RT 01/RW 03"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Nomor HP
                  </label>
                  <input
                    type="number"
                    placeholder="Contoh: 0812 3456 7890"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Jenis Layanan
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  >
                    <option value="" disabled>
                      Pilih Jenis Layanan
                    </option>
                  </select>
                </div>
              </div>

              <p className="mt-4 mb-2 ml-1 text-slate-700">
                Dengan mendaftar, Anda menyetujui S&K dan Kebijakan Privasi.
              </p>

              <button
                type="submit"
                className="mt-3 bg-[#0D47A1] w-full text-white py-3 rounded-4xl gap-3 font-semibold"
              >
                Daftar Akun
              </button>

              <p className="text-slate-700 font-medium text-center mt-7 ">
                Belum punya akun?{" "}
                <Link to="/" className="text-[#0D47A1] cursor-pointer">
                  Login di sini
                </Link>
              </p>
            </form>
          ) : (
            <form className="w-full">
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="" className="font-medium text-slate-700">
                  NIB Perusahaan (Username) <br />{" "}
                  <span className="text-sm text-slate-600">
                    Masukkan NIK, lalu klik Cek untuk mengisi data secara
                    otomatis. NIK menjadi username Anda.
                  </span>
                </label>
                <div className="relative w-full">
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-blue-700 cursor-pointer">
                    Cek
                  </button>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                    placeholder="Contoh: 1234567890123"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Minimal 8 karakter"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Alamat Email Perusahaan
                  </label>
                  <input
                    type="email"
                    placeholder="Contoh: nama@email.com"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: SK-123/AB/IX/2025"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="font-medium ml-1 truncate text-sm"
                  >
                    Nomor SK Izin Penyelenggaraan Angkutan Barang (OSS)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: SK-123/AB/IX/2025"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Nomor kontak direktur/penanggung jawab
                  </label>
                  <input
                    type="number"
                    placeholder="Contoh: 0812 3456 7890"
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Jenis Layanan
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  >
                    <option value="" disabled>
                      Pilih Jenis Layanan
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium ml-1">
                    Alamat Perusahaan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Jl. Mawar No. 8, RT 02/RW 03, Bekasi "
                    className="w-full bg-white border border-gray-300 pl-2 py-2 rounded-4xl text-gray-700 font-medium"
                  />
                </div>
                <div className="w-1/2"></div>
              </div>

              <p className="mt-4 mb-2 ml-1 text-slate-700">
                Dengan mendaftar, Anda menyetujui S&K dan Kebijakan Privasi.
              </p>

              <button
                type="submit"
                className="mt-3 bg-[#0D47A1] w-full text-white py-3 rounded-4xl gap-3 font-semibold"
              >
                Daftar Akun
              </button>

              <p className="text-slate-700 font-medium text-center mt-7 ">
                Belum punya akun?{" "}
                <Link to="/" className="text-[#0D47A1] cursor-pointer">
                  Login di sini
                </Link>
              </p>
            </form>
          )}
          {/* isUser */}
        </div>
      </main>
    </>
  );
};
