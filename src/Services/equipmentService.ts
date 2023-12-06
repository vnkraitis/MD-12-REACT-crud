import axios, { AxiosResponse } from 'axios';
import { Equipment, NewEquipment } from '../types';

const API_URL = 'http://localhost:3004/equipments';

export const getEquipments = async (): Promise<Equipment[]> => {
  try {
    const response = await axios.get<Equipment[]>(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to load equipments');
  }
};

export const addEquipment = async (equipment: NewEquipment): Promise<Equipment> => {
  try {
    const response = await axios.post<Equipment>(API_URL, equipment);
    return response.data;
  } catch (error) {
    console.error('Failed to add equipment:', error);
    throw error;  
  }
};

export const deleteEquipment = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error(`Failed to delete equipment with id ${id}`);
  }
};

export const updateEquipment = async (equipment: Equipment): Promise<Equipment> => {
  try {
    const response: AxiosResponse<Equipment> = await axios.put(`${API_URL}/${equipment.id}`, equipment);
    return response.data;
  } catch (error) {
    console.error(`Failed to update equipment with id ${equipment.id}:`, error);
    throw error;
  }
};