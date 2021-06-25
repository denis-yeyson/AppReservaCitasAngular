export interface Medico{
    apellidos: string;
    colegiatura: string;
    correo: string;
    direccion: string;
    dni: string;
    estado: string;
    fechaNacimiento: Date;
    idDistrito: number;
    idMedico: number;
    idUsuario: number;
    image: string;
    nombres: string;
    resumenCv: string;
    telefono: string;
    urlImage: string;
}

export interface MedicoJson{
  apellidos: string,
  dni: number,
  especialidad: string,
  id_medico: number,
  nombres: string
}
