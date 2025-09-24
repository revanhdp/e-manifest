import React from "react";
import { CircleUserRound, CopyCheck, Plus, Search, Truck } from "lucide-react";
import ManifestPage from "./ManifestPage";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="">
        {/* Header */}
        <div className="flex flex-wrap md:flex-nowrap gap-9 p-6">
          <div className="flex gap-6 w-full sm:w-1/2 lg:w-1/3 p-6 rounded-2xl shadow-md bg-white">
            <span className="bg-blue-800 rounded-full text-white self-center ">
              <CopyCheck className="m-3" color="white" />
            </span>
            <div className="flex flex-col ">
              <p className="text-3xl font-bold">3</p>
              <p className="text-slate-500 font-medium">Total Manifest</p>
            </div>
          </div>

          <div className="flex gap-6 w-full sm:w-1/2 lg:w-1/3 p-6 rounded-2xl shadow-md bg-white">
            <span className="bg-red-800 rounded-full text-white self-center ">
              <Truck className="m-3" color="white" />
            </span>
            <div className="flex flex-col ">
              <p className="text-3xl font-bold">2</p>
              <p className="text-slate-500 font-medium">Kendaraan Terdaftar</p>
            </div>
          </div>

          <div className="flex gap-6 w-full sm:w-1/2 lg:w-1/3 p-6 rounded-2xl shadow-md bg-white">
            <span className="bg-orange-500 rounded-full text-white self-center ">
              <CircleUserRound className="m-3" color="white" />
            </span>
            <div className="flex flex-col ">
              <p className="text-3xl font-bold">1</p>
              <p className="text-slate-500 font-medium">Pengemudi Terdaftar</p>
            </div>
          </div>
        </div>

        {/* Manifest Table */}
        <ManifestPage />

        {/* Manajemen Pengemudi dan Manajemen Kendaraan */}
        <div className="flex gap-9 p-6 flex-col md:flex-row">
          {/* Manajemen Pengemudi */}
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Manajemen Pengemudi
            </h1>
            <p>Kelola data pengemudi perusahaan.</p>

            <div className="flex justify-between mt-2 flex-col md:flex-row gap-2">
              <div className="relative w-full md:w-2/3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2" color="gray" />
                <input
                  type="text"
                  className="truncate bg-gray-100 w-full py-2 border border-gray-300 h-full rounded-4xl pl-10"
                  placeholder="Cari nama, nomor HP, atau.."
                />
              </div>
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors font-medium whitespace-nowrap">
                <Plus className="w-4 h-4" />
                Tambah Pengemudi
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mt-2">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nama Pengemudi
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nomor HP
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nomor SIM
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm ">
                        Andi Saputra
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        083131731823
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        83131731823
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Manajemen Kendaraan */}
            <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Manajemen Kendaraan
              </h1>
              <p>Kelola kendaraan, cari data, dan sinkronkan detail dari register.</p>

              <div className="flex justify-between mt-2 flex-col md:flex-row gap-2">
                <div className="relative w-full md:w-2/3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2" color="gray" />
                  <input
                    type="text"
                    className="truncate bg-gray-100 w-full py-2 border border-gray-300 h-full rounded-4xl pl-10"
                    placeholder="Cari berdasarkan pelat nomor"
                  />
                </div>
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors font-medium whitespace-nowrap">
                  <Plus className="w-4 h-4" />
                  Tambah Kendaraan
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mt-2">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No. Polisi
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jenis
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Sumbu
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          JBI
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">
                          No. Polisi
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Jenis
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Sumbu
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          JBI
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Dashboard;
