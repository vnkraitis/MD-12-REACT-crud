// visi tipi k'adus lietojam json serveri

export interface Equipment {
    id: number;
    name: string;
    amount: number;
    condition: string;
    photoUrl: string;
  }

  export interface NewEquipment {
    name: string;
    amount: number;
    condition: string;
    photoUrl: string;
  }


 