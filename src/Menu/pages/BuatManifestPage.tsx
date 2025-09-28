import React, { useState } from 'react';
import { ChevronUp, Building2, Newspaper, CircleUserRound, MapPin } from 'lucide-react';

interface BuatManifestPageProps {
  onBack: () => void;
}

const BuatManifestPage: React.FC<BuatManifestPageProps> = ({ onBack }) => {
  const [isDetailExpanded, setIsDetailExpanded] = useState(true);
  const [formData, setFormData] = useState({
    nibPerusahaan: '1234567890123',
    namaPerusahaan: 'PT Sejahtera Abadi',
    nomorTelefonPerusahaan: '0812 3456 7890',
    nibPerusahaanDetail: '1234567890123',
    nomor_oss: 'SK.123/AB/IV/2025',
    namaPenanggungJawab: 'Adik Soleh',
    nomorHpPenanggungJawab: '0812 3456 7890',
    alamatPerusahaan: 'Jl. Mawar No. 8, RT 02/RW 03, Bekasi 17145'
  });

  const steps = [
    { number: 1, title: 'Data pemilik barang', active: true },
    { number: 2, title: 'Data penerima barang', active: false },
    { number: 3, title: 'Packing list', active: false },
    { number: 4, title: 'Data pengirim barang (transporter)', active: false },
    { number: 5, title: 'Rute perjalanan', active: false }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCekClick = () => {
    console.log('Cek NIB clicked:', formData.nibPerusahaan);
    // Logic for checking NIB will be implemented here
  };

  const handleNext = () => {
    console.log('Lanjut clicked');
    // Logic for proceeding to next step
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 max-w-8xl mx-auto">
        <div className="flex items-center gap-4 mb">
          <h1 className="text-2xl font-bold text-gray-900">Buat Manifest</h1>
        </div>
        <p className="text-gray-600 mb-2">Lengkapi data berikut untuk membuat e-Manifest.</p>
        {/* Progress Steps */}
        <div className="mb-2">
          <div className="overflow-x-auto overflow-y-visible" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex items-center gap-2 min-w-max py-2">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-shrink-0">
                  <div className={`w-56 min-h-12 py-2 px-4 rounded-full flex items-center gap-2 text-sm font-medium ${
                    step.number === 1 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step.number === 1 ? (
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-sm font-bold text-blue-600 flex-shrink-0">
                        {step.number}
                      </span>
                    ) : (
                      <span className="text-xs font-bold w-6 flex items-center justify-center flex-shrink-0">
                        {step.number}
                      </span>
                    )}
                    <span className="text-sm leading-tight overflow-hidden">
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-4 flex-shrink-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-200 mb-5"></div>

        {/* NIB Input Section */}
        <div className="mb-8 max-w-xl">
          <div className=" bg-white">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Masukkan NIB perusahaan</h3>
            <p className="text-gray-600 mb-4">
              Masukkan NIB, kemudian pilih Cek untuk mengisi detail perusahaan secara otomatis.
            </p>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Contoh: 1234567890123"
                value={formData.nibPerusahaan}
                onChange={(e) => handleInputChange('nibPerusahaan', e.target.value)}
                className="w-full px-4 py-2 pr-20 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleCekClick}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 text-blue-600 bg-white hover:bg-blue-50 rounded font-bold transition-colors text-sm"
              >
                Cek
              </button>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-2xl">
            <div 
              className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-t-lg"
              onClick={() => setIsDetailExpanded(!isDetailExpanded)}
            >
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                Detail Data Pemilik Barang
              </h3>
              <ChevronUp 
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  isDetailExpanded ? 'rotate-0' : 'rotate-180'
                }`}
              />
            </div>

            {isDetailExpanded && (
              <div className="p-4 space-y-6">
                {/* Separator Line */}
                <div className="w-full h-px bg-gray-200 -mt-4 mb-6"></div>
                
                {/* Identitas Perusahaan Section */}
                <div className="space-y-4">
            <h4 className="font-medium text-gray-900 flex items-center gap-2">
              <Building2 />
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
              <Newspaper />
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
              <CircleUserRound />
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
              <MapPin />
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
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-6">
          <button
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Kembali
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors font-medium"
          >
            Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuatManifestPage;