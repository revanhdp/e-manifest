import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import DataPemilikBarang from './BuatManifestSection/DataPemilikBarang';
import DataPenerimaBarang from './BuatManifestSection/DataPenerimaBarang';
import PackingList from './BuatManifestSection/PackingList';

const BuatManifestPage = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isDetailExpanded, setIsDetailExpanded] = useState(true);
  const [formData, setFormData] = useState({
    // Step 1 data
    nibPerusahaan: '',
    namaPerusahaan: '',
    nomorTelefonPerusahaan: '',
    nibPerusahaanDetail: '',
    nomor_oss: '',
    namaPenanggungJawab: '',
    nomorHpPenanggungJawab: '',
    alamatPerusahaan: '',
    // Step 2 data
    nibPerusahaanPenerima: '',
    namaPerusahaanPenerima: '',
    nomorTelefonPerusahaanPenerima: '',
    nibPerusahaanDetailPenerima: '',
    nomor_ossPenerima: '',
    namaPenanggungJawabPenerima: '',
    nomorHpPenanggungJawabPenerima: '',
    alamatPerusahaanPenerima: '',
    // Step 3 data
    packingItems: []
  });

  const steps = [
    { number: 1, title: 'Data pemilik barang', active: currentStep === 1 },
    { number: 2, title: 'Data penerima barang', active: currentStep === 2 },
    { number: 3, title: 'Packing list', active: currentStep === 3 },
    { number: 4, title: 'Data pengirim barang (transporter)', active: currentStep === 4 },
    { number: 5, title: 'Rute perjalanan', active: currentStep === 5 }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCekClick = () => {
    if (currentStep === 1) {
      console.log('Cek NIB Pemilik clicked:', formData.nibPerusahaan);
      // Logic for checking NIB pemilik will be implemented here
    } else if (currentStep === 2) {
      console.log('Cek NIB Penerima clicked:', formData.nibPerusahaanPenerima);
      // Logic for checking NIB penerima will be implemented here
    }
  };

  // Validasi untuk setiap step
  const validateStep = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return !!(
          formData.namaPerusahaan &&
          formData.nomorTelefonPerusahaan &&
          formData.nibPerusahaanDetail &&
          formData.nomor_oss &&
          formData.namaPenanggungJawab &&
          formData.nomorHpPenanggungJawab &&
          formData.alamatPerusahaan
        );
      case 2:
        return !!(
          formData.nibPerusahaanPenerima &&
          formData.namaPerusahaanPenerima &&
          formData.nomorTelefonPerusahaanPenerima &&
          formData.nibPerusahaanDetailPenerima &&
          formData.nomor_ossPenerima &&
          formData.namaPenanggungJawabPenerima &&
          formData.nomorHpPenanggungJawabPenerima &&
          formData.alamatPerusahaanPenerima
        );
      case 3:
        return Array.isArray(formData.packingItems) && formData.packingItems.length > 0;
      case 4:
        // Validasi untuk step 4 akan ditambahkan nanti
        return true;
      case 5:
        // Validasi untuk step 5 akan ditambahkan nanti
        return true;
      default:
        return false;
    }
  };

  // Cek apakah step dapat diakses
  const isStepAccessible = (stepNumber) => {
    if (stepNumber <= currentStep) {
      return true;
    }
    
    // Untuk maju ke step berikutnya, harus validasi step sebelumnya
    for (let i = 1; i < stepNumber; i++) {
      if (!validateStep(i)) {
        return false;
      }
    }
    return true;
  };

  // Handle click pada stepper
  const handleStepClick = (stepNumber) => {
    if (isStepAccessible(stepNumber)) {
      setCurrentStep(stepNumber);
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const renderFormContent = () => {
    if (currentStep === 1) {
      return (
        <DataPemilikBarang 
          formData={formData}
          handleInputChange={handleInputChange}
        />
      );
    } else if (currentStep === 2) {
      return (
        <DataPenerimaBarang 
          formData={formData}
          handleInputChange={handleInputChange}
        />
      );
    } else if (currentStep === 3) {
      return (
        <PackingList 
          formData={formData}
          handleInputChange={handleInputChange}
        />
      );
    }
    return null;
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
              {steps.map((step, index) => {
                const isAccessible = isStepAccessible(step.number);
                
                return (
                  <div key={step.number} className="flex items-center flex-shrink-0">
                    <div 
                      className={`w-56 min-h-12 py-2 px-4 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
                        step.number === currentStep 
                          ? 'bg-blue-600 text-white' 
                          : isAccessible
                          ? 'bg-gray-200 text-gray-600 cursor-pointer hover:bg-gray-300'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                      onClick={() => isAccessible && handleStepClick(step.number)}
                    >
                      {step.number === currentStep ? (
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
                );
              })}
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-200 mb-5"></div>

        {/* NIB Input Section - Only show in step 1 and 2 */}
        {(currentStep === 1 || currentStep === 2) && (
          <div className="mb-8 max-w-xl">
            <div className=" bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {currentStep === 1 ? 'Masukkan NIB perusahaan pemilik' : 'Masukkan NIB perusahaan penerima'}
              </h3>
              <p className="text-gray-600 mb-4">
                Masukkan NIB, kemudian pilih Cek untuk mengisi detail perusahaan secara otomatis.
              </p>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Contoh: 1234567890123"
                  value={currentStep === 1 ? formData.nibPerusahaan : formData.nibPerusahaanPenerima}
                  onChange={(e) => handleInputChange(
                    currentStep === 1 ? 'nibPerusahaan' : 'nibPerusahaanPenerima', 
                    e.target.value
                  )}
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
        )}

        {/* Form Section */}
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-2xl">
            <div 
              className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-t-lg"
              onClick={() => setIsDetailExpanded(!isDetailExpanded)}
            >
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                {currentStep === 1 && 'Detail Data Pemilik Barang'}
                {currentStep === 2 && 'Detail Data Penerima Barang'}
                {currentStep === 3 && 'Detail Packing List'}
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
                
                {renderFormContent()}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-6">
          {/* Validation Message */}
          {!validateStep(currentStep) && currentStep <= 3 && (
            <div className="px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                {currentStep === 3 
                  ? 'Mohon tambahkan minimal 1 item barang sebelum melanjutkan ke step berikutnya.'
                  : 'Mohon lengkapi semua field yang diperlukan sebelum melanjutkan ke step berikutnya.'
                }
              </p>
            </div>
          )}
          
          <div className="flex justify-end gap-3">
            <button
              onClick={handleBack}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium"
            >
              Kembali
            </button>
            <button
              onClick={handleNext}
              disabled={!validateStep(currentStep)}
              className={`px-6 py-2 rounded-full transition-colors font-medium ${
                validateStep(currentStep)
                  ? 'bg-black hover:bg-gray-800 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuatManifestPage;