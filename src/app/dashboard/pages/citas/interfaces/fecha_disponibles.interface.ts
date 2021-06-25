export interface FechasDisponibles {
  cantidad: number;
  fecha: string;
}

export interface HorasDisponibles {
  idHorario:number;
  horaInicio: string;
  horaFin: string;
}

export interface ProgramacionHoras {
  orden:number;
  horaInicio: string;
  horaFin: string;
  isSelected:boolean;
}

export interface listaCitas{
  especialidad: string,
  estado:string,
    fecha: string,
    hora: string,
    id_cita: number,
    medico: string,
    paciente: string
}
