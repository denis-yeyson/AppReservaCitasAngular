export interface Paciente {
  idPaciente:number;
  nombres:string;
  apellidos:string;
  dni:string;
  telefono:string;
  sexo:string;
  correo:string;
  direccion:string;
  fechaRegistro:string;
  fechaNacimiento:string;
  estadoCivil:string;
  fechaModificacion:string;
  estado:string;
  observacion:string;
  idUsuario:number;
  idUbigeo:number;
}

export interface PacienteForm{
  apellidos: string,
  clave: string,
  correo: string,
  direccion: string,
  dni: string,
  estado_civil: string,
  fecha_nacimiento: Date,
  id_distrito: number,
  nombre_usuario: string,
  nombres: string,
  sexo: string,
  telefono: string
}

export interface ResponseJson{
  valor: number,
  mensaje: string
}
