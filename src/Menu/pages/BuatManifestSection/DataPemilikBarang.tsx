import React from 'react';
import { Building2, Newspaper, CircleUserRound, MapPin } from 'lucide-react';

interface DataPemilikBarangProps {
  formData: Record<string, string>; // Using Record instead of any
  handleInputChange: (field: string, value: string) => void;
}

const DataPemilikBarang: React.FC<DataPemilikBarangProps> = ({
  formData,
  handleInputChange
}) => {
  return (
    <>
      {/* Identitas Perusahaan Section */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          Identitas Perusahaan
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Nama perusahaan</label>
            <input
              type="text"
              placeholder="Contoh: PT Sejahtera Abadi"
              value={formData.namaPerusahaan}
              onChange={(e) => handleInputChange('namaPerusahaan', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Nomor telepon perusahaan</label>
            <input
              type="text"
              placeholder="Contoh: 0812 3456 7890"
              value={formData.nomorTelefonPerusahaan}
              onChange={(e) => handleInputChange('nomorTelefonPerusahaan', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Legal & Perizinan Section */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 flex items-center gap-2">
          <Newspaper className="w-5 h-5" />
          Legal & Perizinan
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">NIB perusahaan</label>
            <input
              type="text"
              placeholder="Contoh: 1234567890123"
              value={formData.nibPerusahaanDetail}
              onChange={(e) => handleInputChange('nibPerusahaanDetail', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Nomor SK Izin Penyelenggaraan Angkutan Barang (OSS)</label>
            <input
              type="text"
              placeholder="Contoh: SK.123/AB/IV/2025"
              value={formData.nomor_oss}
              onChange={(e) => handleInputChange('nomor_oss', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Kontak Penanggung Jawab Section */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 flex items-center gap-2">
          <CircleUserRound className="w-5 h-5" />
          Kontak Penanggung Jawab
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Nama penanggung jawab</label>
            <input
              type="text"
              placeholder="Contoh: Adik Soleh"
              value={formData.namaPenanggungJawab}
              onChange={(e) => handleInputChange('namaPenanggungJawab', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Nomor HP penanggung jawab</label>
            <input
              type="text"
              placeholder="Contoh: 0812 3456 7890"
              value={formData.nomorHpPenanggungJawab}
              onChange={(e) => handleInputChange('nomorHpPenanggungJawab', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Alamat Section */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Alamat
        </h4>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Alamat perusahaan</label>
          <input
            type="text"
            placeholder="Contoh: Jl. Mawar No. 8, RT 02/RW 03, Bekasi 17145"
            value={formData.alamatPerusahaan}
            onChange={(e) => handleInputChange('alamatPerusahaan', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default DataPemilikBarang;