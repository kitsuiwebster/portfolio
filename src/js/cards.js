import everest from '../assets/images/cards/mountain/everest.jpg';
import baikal from '../assets/images/cards/lake/baikal.jpg';
import paris from '../assets/images/cards/city/paris.jpg';
import australia from '../assets/images/cards/country/australia.png';
import mediterranean from '../assets/images/cards/sea/mediterranean.jpg';
import pacific from '../assets/images/cards/ocean/pacific.jpg';
import nil from '../assets/images/cards/river/nil.jpg';

const cards = [
  // mountains
  {
    type: "mountain",
    image: everest,
    nom: "Mont Everest",
    localisation: "Népal",
    hauteur: "8,848 m",
  },
  // lakes
  {
    type: "lake",
    image: baikal,
    nom: "Lac Baïkal",
    localisation: "Russie",
    surface: "31,500 km²",
  },
  // cities
  {
    type: "city",
    image: paris,
    nom: "Paris",
    localisation: "France",
    population: "2,161,000 M",
  },
  // countries
  {
    type: "country",
    image: australia,
    nom: "Australie",
    localisation: "Océanie",
    population: "25 M",
    superficie: "7,692,024 km²",
  },
  // seas
  {
    type: "sea",
    image: mediterranean,
    nom: "Mer Méditerranée",
    localisation: "Europe, Afrique et Asie",
    profondeur: "5,267 m",
  },
  // oceans
  {
    type: "ocean",
    image: pacific,
    nom: "Océan Pacifique",
    localisation: "Amérique, Asie et Océanie",
    profondeur: "10,911 m",
  },
  // rivers
  {
    type: "river",
    image: nil,
    nom: "Nil",
    localisation: "Égypte, Soudan et Soudan du sud",
    longueur: "6,650 km",
  }
];

export const cardTypes = ["mountain", "lake", "city", "country", "sea", "ocean", "river"];

export default cards;

