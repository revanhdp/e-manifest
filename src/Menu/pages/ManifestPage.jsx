import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DropdownFilter from '../components/DropdownFilter';
import ManifestTable from '../components/ManifestTable';
import BuatManifestPage from './BuatManifestPage';

const ManifestPage = () => {
  const [showBuatManifest, setShowBuatManifest] = useState(false);
  const [filters, setFilters] = useState({
    kategoriMuatan: '',
    jenisMuatan: '',
    status: ''
  });

  // Sample data
  const manifestData = [
    {
      id: '1',
      manifest: 'SMB-001/SMK/2025',
      kategoriMuatan: 'Umum',
      jenisMuatan: 'Kayu',
      lokasiPengiriman: 'Jakarta - Bandung',
      status: 'Overload',
      tanggalBuat: '12-09-2025'
    },
    {
      id: '2',
      manifest: 'SMB-002/RMK/2025',
      kategoriMuatan: 'Khusus',
      jenisMuatan: 'Hewan hidup',
      lokasiPengiriman: 'Madera - Cirebon',
      status: 'Sesuai',
      tanggalBuat: '12-09-2025'
    },
    {
      id: '3',
      manifest: 'SMB-003/SMK/2025',
      kategoriMuatan: 'Umum',
      jenisMuatan: 'Baja coil',
      lokasiPengiriman: 'Bekasi - Medan',
      status: 'Sesuai',
      tanggalBuat: '12-09-2025'
    }
  ];

  const kategoriMuatanOptions = [
    { value: '', label: 'Pilih kategori muatan' },
    { value: 'umum', label: 'Umum' },
    { value: 'khusus', label: 'Khusus' },
    { value: 'berbahaya', label: 'Berbahaya' }
  ];

  const jenisMuatanOptions = [
    { value: '', label: 'Pilih jenis muatan' },
    { value: 'kayu', label: 'Kayu' },
    { value: 'hewan-hidup', label: 'Hewan hidup' },
    { value: 'baja-coil', label: 'Baja coil' },
    { value: 'kontainer', label: 'Kontainer' }
  ];

  const statusOptions = [
    { value: '', label: 'Pilih status' },
    { value: 'overload', label: 'Overload' },
    { value: 'sesuai', label: 'Sesuai' }
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filteredData = manifestData.filter(item => {
    return (
      (!filters.kategoriMuatan || item.kategoriMuatan.toLowerCase().includes(filters.kategoriMuatan)) &&
      (!filters.jenisMuatan || item.jenisMuatan.toLowerCase().includes(filters.jenisMuatan)) &&
      (!filters.status || item.status.toLowerCase().includes(filters.status))
    );
  });

  const handleTambahManifest = () => {
    setShowBuatManifest(true);
  };

  const handleBackToManifest = () => {
    setShowBuatManifest(false);
  };

  if (showBuatManifest) {
    return <BuatManifestPage onBack={handleBackToManifest} />;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        {/* Header with Title and Add Button */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Manifest</h1>
        </div>

        {/* Filters and Add Button */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end gap-4 mb-6">
          <div className="w-full sm:min-w-[200px] sm:w-auto">
            <DropdownFilter
              label=""
              placeholder="Pilih kategori muatan"
              options={kategoriMuatanOptions}
              value={filters.kategoriMuatan}
              onChange={(value) => handleFilterChange('kategoriMuatan', value)}
            />
          </div>
          <div className="w-full sm:min-w-[200px] sm:w-auto">
            <DropdownFilter
              label=""
              placeholder="Pilih jenis muatan"
              options={jenisMuatanOptions}
              value={filters.jenisMuatan}
              onChange={(value) => handleFilterChange('jenisMuatan', value)}
            />
          </div>
          <div className="w-full sm:min-w-[200px] sm:w-auto">
            <DropdownFilter
              label=""
              placeholder="Pilih status"
              options={statusOptions}
              value={filters.status}
              onChange={(value) => handleFilterChange('status', value)}
            />
          </div>
          <div className="w-full sm:w-auto sm:ml-auto">
            <button 
              onClick={handleTambahManifest}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors font-medium whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              Tambah Manifest
            </button>
          </div>
        </div>

        {/* Table */}
        <ManifestTable data={filteredData} />
      </div>
    </div>
  );
};

export default ManifestPage;