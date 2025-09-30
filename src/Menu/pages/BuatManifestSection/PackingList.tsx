import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface PackingItem {
  id: string;
  jenisBarang: string;
  namaBarang: string;
  jumlah: string;
  satuan: string;
}

interface PackingListProps {
  formData: Record<string, string | PackingItem[]>;
  handleInputChange: (field: string, value: string | PackingItem[]) => void;
}

const PackingList: React.FC<PackingListProps> = ({ formData, handleInputChange }) => {
  const [items, setItems] = useState<PackingItem[]>((formData.packingItems as PackingItem[]) || []);
  const [newItem, setNewItem] = useState({
    jenisBarang: '',
    namaBarang: '',
    jumlah: '',
    satuan: ''
  });
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  // Sinkronisasi items dengan formData.packingItems saat pertama kali load
  useEffect(() => {
    const packingItems = (formData.packingItems as PackingItem[]) || [];
    setItems(packingItems);
  }, [formData.packingItems]);

  const jenisBarangOptions = [
    'Elektronik',
    'Tekstil',
    'Makanan',
    'Minuman',
    'Bahan Kimia',
    'Logam',
    'Kayu',
    'Plastik',
    'Kertas',
    'Lainnya'
  ];

  const satuanOptions = [
    'Pcs',
    'Kg',
    'Gram',
    'Liter',
    'Meter',
    'Kardus',
    'Kotak',
    'Paket',
    'Unit',
    'Buah'
  ];

  const handleAddItem = () => {
    if (newItem.jenisBarang && newItem.namaBarang && newItem.jumlah && newItem.satuan) {
      const item: PackingItem = {
        id: Date.now().toString(),
        ...newItem
      };
      const updatedItems = [...items, item];
      setItems(updatedItems);
      handleInputChange('packingItems', updatedItems);
      
      // Reset form
      setNewItem({
        jenisBarang: '',
        namaBarang: '',
        jumlah: '',
        satuan: ''
      });
    }
  };

  const handleEditItem = (id: string) => {
    const item = items.find(item => item.id === id);
    if (item) {
      setNewItem({
        jenisBarang: item.jenisBarang,
        namaBarang: item.namaBarang,
        jumlah: item.jumlah,
        satuan: item.satuan
      });
      setEditingItemId(id);
    }
  };

  const handleUpdateItem = () => {
    if (editingItemId && newItem.jenisBarang && newItem.namaBarang && newItem.jumlah && newItem.satuan) {
      const updatedItems = items.map(item =>
        item.id === editingItemId
          ? { ...item, ...newItem }
          : item
      );
      setItems(updatedItems);
      handleInputChange('packingItems', updatedItems);
      
      // Reset form
      setNewItem({
        jenisBarang: '',
        namaBarang: '',
        jumlah: '',
        satuan: ''
      });
      setEditingItemId(null);
    }
  };

  const handleDeleteItem = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    handleInputChange('packingItems', updatedItems);
  };

  const handleCancelEdit = () => {
    setNewItem({
      jenisBarang: '',
      namaBarang: '',
      jumlah: '',
      satuan: ''
    });
    setEditingItemId(null);
  };

  return (
    <div className="space-y-6">
      {/* Form Input */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Jenis muatan
          </label>
          <select
            value={newItem.jenisBarang}
            onChange={(e) => setNewItem({ ...newItem, jenisBarang: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Pilih jenis muatan</option>
            {jenisBarangOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama barang
          </label>
          <input
            type="text"
            placeholder="Contoh: Beras, Kayu olahan, LPG"
            value={newItem.namaBarang}
            onChange={(e) => setNewItem({ ...newItem, namaBarang: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Jumlah
          </label>
          <input
            type="text"
            placeholder="Contoh: 20"
            value={newItem.jumlah}
            onChange={(e) => setNewItem({ ...newItem, jumlah: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Satuan
          </label>
          <select
            value={newItem.satuan}
            onChange={(e) => setNewItem({ ...newItem, satuan: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Pilih satuan</option>
            {satuanOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Add/Update Button */}
      <div className="flex justify-end gap-3">
        {editingItemId && (
          <button
            onClick={handleCancelEdit}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium"
          >
            Batal
          </button>
        )}
        <button
          onClick={editingItemId ? handleUpdateItem : handleAddItem}
          disabled={!newItem.jenisBarang || !newItem.namaBarang || !newItem.jumlah || !newItem.satuan}
          className={`px-4 py-2 rounded-full font-medium flex items-center gap-2 transition-colors ${
            newItem.jenisBarang && newItem.namaBarang && newItem.jumlah && newItem.satuan
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Plus className="w-4 h-4" />
          {editingItemId ? 'Update data' : 'Tambah data'}
        </button>
      </div>

      {/* Items Table */}
      {items.length > 0 && (
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="bg-gray-50 px-4 py-3">
            <h4 className="font-medium text-gray-900">Daftar Barang</h4>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Jenis Muatan</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Nama Barang</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Jumlah</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Satuan</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{item.jenisBarang}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.namaBarang}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.jumlah}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.satuan}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleEditItem(item.id)}
                          className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Hapus"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {items.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p className="text-sm">Belum ada data barang. Tambahkan barang untuk melanjutkan.</p>
        </div>
      )}
    </div>
  );
};

export default PackingList;