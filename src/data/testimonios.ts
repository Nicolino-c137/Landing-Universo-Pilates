export interface Testimonio {
  id: string;
  nombre: string;
  estrellas: number;
  texto: string;
}

export const testimonios: Testimonio[] = [
  {
    id: 'maria-eugenia',
    nombre: 'María Eugenia Otarola',
    estrellas: 5,
    texto:
      'Universo Pilates Clásico, en mi experiencia es un desafío y a la vez es relajante. Me ha ayudado a mejorar la postura, la fuerza y la flexibilidad, es parte de mi vida! Amo hacer Pilates. Hace años voy!!!! He tomado mucha conciencia corporal.',
  },
  {
    id: 'cristina-paolucci',
    nombre: 'Cristina Paolucci',
    estrellas: 5,
    texto:
      'Recomiendo el Estudio para entrenar Pilates. Las instructoras son muy responsables y con una vasta formación disciplinar. La excelencia en la aplicación del método se observa desde las primeras clases. Es un lugar muy bien ubicado, con un ambiente climatizado, espacioso y muy agradable.',
  },
  {
    id: 'maria-paula-velez',
    nombre: 'María Paula Vélez',
    estrellas: 5,
    texto:
      'Mi experiencia en el estudio de Pilates dirigido por Fernanda Morales ha sido verdaderamente excepcional. Fernanda no solo guía con gran habilidad técnica, sino que también transmite una energía positiva y un trato cercano que hace que cada sesión sea única y enriquecedora.',
  },
  {
    id: 'carla-lema',
    nombre: 'Carla Lema',
    estrellas: 5,
    texto:
      'Excelentes profesionales todos los instructores. Clase a clase acompañan el progreso personal de cada uno de sus alumnos. Recomiendo altamente este estudio de Pilates Clásico.',
  },
  {
    id: 'silvina-alarcon',
    nombre: 'Silvina Alarcón',
    estrellas: 5,
    texto:
      'En Universo Pilates conocí lo que verdaderamente hace esta disciplina en mi cuerpo. Los profes son excelentes. Valoro mucho su dedicación en cada uno de nosotros para corregir posturas y trabajar integralmente nuestro cuerpo.',
  },
  {
    id: 'carla-renata',
    nombre: 'Carla Renata Atencio Cifuentes',
    estrellas: 5,
    texto:
      'Es un lugar que recomiendo a cualquiera que me pregunte, por lesiones o simplemente por hacer una actividad que va a cambiar tu forma de vivir. Hay un muy buen nivel profesional y de compromiso. Es mi lugar favorito.',
  },
];
