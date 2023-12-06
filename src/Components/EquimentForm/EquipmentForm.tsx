import React, { useState } from "react";
import { NewEquipment } from "../../types";
import styles from "./EquipmentForm.module.css";

interface EquipmentFormProps {
  onAddEquipment: (equipment: NewEquipment) => void;
}

const EquipmentForm: React.FC<EquipmentFormProps> = ({ onAddEquipment }) => {
  const [equipmentData, setEquipmentData] = useState<NewEquipment>({
    name: "",
    amount: 0,
    condition: "",
    photoUrl: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEquipmentData((prevData) => ({
      ...prevData,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddEquipment(equipmentData);
    // Reset the form fields after successful addition
    setEquipmentData({
      name: "",
      amount: 0,
      condition: "",
      photoUrl: "",
    });
  };
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Equipment Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={equipmentData.name}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Enter equipment name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="amount" className={styles.label}>
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={equipmentData.amount}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Enter amount"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="condition" className={styles.label}>
            Condition
          </label>
          <input
            type="text"
            id="condition"
            name="condition"
            value={equipmentData.condition}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Enter condition"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="photoUrl" className={styles.label}>
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            name="photoUrl"
            value={equipmentData.photoUrl}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Enter photo URL"
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Equipment
        </button>
      </form>
    </div>
  );
};

export default EquipmentForm;
