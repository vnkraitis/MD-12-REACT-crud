import React, { useEffect, useState, useCallback } from 'react';
import EquipmentForm from './Components/EquimentForm/EquipmentForm';
import EquipmentList from './Components/EquipmentList/EquipmentList';
import { addEquipment, deleteEquipment, getEquipments } from './Services/equipmentService';
import { Equipment, NewEquipment } from './types';

const App: React.FC = () => {
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchEquipments = useCallback(async () => {
    try {
      const data = await getEquipments();
      setEquipments(data);
    } catch (err) {
      setError('Failed to fetch equipments');
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchEquipments();
  }, [fetchEquipments]);

  const handleDelete = async (id: number) => {
    try {
      await deleteEquipment(id);
      fetchEquipments();
    } catch (err) {
      setError('Failed to delete equipment');
      console.error(err);
    }
  };

  const handleAddEquipment = async (newEquipment: NewEquipment) => {
    try {
      await addEquipment(newEquipment);
      fetchEquipments();
    } catch (err) {
      setError('Could not add equipment');
      console.error(err);
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <EquipmentForm onAddEquipment={handleAddEquipment} />
      <EquipmentList equipments={equipments} onDelete={handleDelete} />
    </div>
  );
};

export default App;
