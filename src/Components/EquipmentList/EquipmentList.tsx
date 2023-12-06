import React from 'react';
import { Equipment } from '../../types';
import styles from './EquipmentList.module.css';

interface EquipmentListProps {
  equipments: Equipment[];
  onDelete: (id: number) => void;
}

const EquipmentList: React.FC<EquipmentListProps> = ({ equipments, onDelete }) => {
  return (
    <div className={styles.equipmentList}>
      {equipments.map(equipment => (
        <div key={equipment.id} className={styles.equipmentItem}>
          <img src={equipment.photoUrl} alt={equipment.name} className={styles.equipmentImage} />
          <div className={styles.equipmentName}>{equipment.name}</div>
          <div className={styles.equipmentDetail}>Amount: {equipment.amount}</div>
          <div className={styles.equipmentDetail}>Condition: {equipment.condition}</div>
          <button onClick={() => onDelete(equipment.id)} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
