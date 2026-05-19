export interface Clase {
  id: string;
  nombre: string;
  descripcion: string;
  detalle: string;
}

export const clases: Clase[] = [
  {
    id: 'reformer',
    nombre: 'Reformer',
    descripcion: 'El aparato estrella del método.',
    detalle:
      'Trabaja todo el cuerpo mediante resortes de resistencia graduable. Ideal para fortalecer, estirar y corregir la alineación postural en cualquier nivel.',
  },
  {
    id: 'mat',
    nombre: 'Mat',
    descripcion: 'La base del método original.',
    detalle:
      'Los 34 ejercicios clásicos creados por Joseph Pilates. El trabajo en el piso que construye conciencia corporal y control desde la raíz del método.',
  },
  {
    id: 'wunda-chair',
    nombre: 'Wunda Chair',
    descripcion: 'Estabilidad y fuerza profunda.',
    detalle:
      'Aparato compacto que desafía el equilibrio y activa los músculos estabilizadores profundos. Excelente complemento para el trabajo de core.',
  },
  {
    id: 'electric-chair',
    nombre: 'Electric Chair',
    descripcion: 'Desafío postural avanzado.',
    detalle:
      'Variante del Wunda con respaldo, permite un trabajo más profundo sobre la columna vertebral, la cadera y los miembros inferiores.',
  },
  {
    id: 'cadillac',
    nombre: 'Cadillac',
    descripcion: 'El aparato más completo.',
    detalle:
      'Ideal para trabajo terapéutico y rehabilitación. Sus múltiples accesorios permiten una variedad infinita de ejercicios adaptados a cada cuerpo.',
  },
];
