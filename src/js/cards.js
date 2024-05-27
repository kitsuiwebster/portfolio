// moountains
import everest from '../assets/images/cards/mountain/everest.jpg';
import k2 from '../assets/images/cards/mountain/k2.jpg';
import denali from '../assets/images/cards/mountain/denali.jpg';
import kilimanjaro from '../assets/images/cards/mountain/kilimanjaro.jpg';
import elbrus from '../assets/images/cards/mountain/elbrus.jpg';
import vinson from '../assets/images/cards/mountain/vinson.jpg';
import aconcagua from '../assets/images/cards/mountain/aconcagua.jpg';
// lakes
import baikal from '../assets/images/cards/lake/baikal.jpg';
// cities
import paris from '../assets/images/cards/city/paris.jpg';
// countries
import australia from '../assets/images/cards/country/australia.png';
import fiji from '../assets/images/cards/country/fiji.jpg';
import papua_new_guinea from '../assets/images/cards/country/papua_new_guinea.jpg';
import new_zealand from '../assets/images/cards/country/new_zealand.jpg';
import vanuatu from '../assets/images/cards/country/vanuatu.jpg';
import samoa from '../assets/images/cards/country/samoa.jpg';
import tonga from '../assets/images/cards/country/tonga.jpg';
import kiribati from '../assets/images/cards/country/kiribati.jpg';
import marshall_islands from '../assets/images/cards/country/marshall_islands.jpg';
import micronesia from '../assets/images/cards/country/micronesia.jpeg';
import palau from '../assets/images/cards/country/palau.jpg';
import nauru from '../assets/images/cards/country/nauru.jpg';
import solomon_islands from '../assets/images/cards/country/solomon_islands.jpg';
import tuvalu from '../assets/images/cards/country/tuvalu.jpg';



// seas
import mediterranean from '../assets/images/cards/sea/mediterranean.jpg';
import caribbean from '../assets/images/cards/sea/caribbean.jpeg';
import baltic from '../assets/images/cards/sea/baltic.jpg';
import arabian from '../assets/images/cards/sea/arabian.jpg';
import bering from '../assets/images/cards/sea/bering.jpeg';
import south_china from '../assets/images/cards/sea/south-china.jpg';
import black from '../assets/images/cards/sea/black.jpg';




// oceans
import pacific from '../assets/images/cards/ocean/pacific.jpg';
import atlantic from '../assets/images/cards/ocean/atlantic.jpg';
import southern from '../assets/images/cards/ocean/southern.jpg';
import indian from '../assets/images/cards/ocean/indian.jpg';
import arctic from '../assets/images/cards/ocean/arctic.jpg';



// rivers
import nil from '../assets/images/cards/river/nil.jpg';
// deserts
import sahara from '../assets/images/cards/desert/sahara.jpg';
import arabianDesert from '../assets/images/cards/desert/arabian-desert.jpg';
import gobi from '../assets/images/cards/desert/gobi.jpeg';
import kalahari from '../assets/images/cards/desert/kalahari.jpg';
import greatBasin from '../assets/images/cards/desert/great-basin.jpg';
import sonoran from '../assets/images/cards/desert/sonoran.jpg';
import atacama from '../assets/images/cards/desert/atacama.jpg';

// islands
import bali from '../assets/images/cards/island/bali.jpg';
import greenland from '../assets/images/cards/island/greenland.jpg';
import java from '../assets/images/cards/island/java.jpg';
import hawaii from '../assets/images/cards/island/hawaii.jpg';
import sicily from '../assets/images/cards/island/sicily.jpg';
import newZealandNorth from '../assets/images/cards/island/new-zealand-north.jpg';

const cards = [
  // mountains
  {
      type: "Sommet",
      emoji: "🏔️",
      image: everest,
      nom: "Mont Everest",
      localisation: "Népal",
      hauteur: "8,848 m"
  },
  {
      type: "Sommet",
      emoji: "🏔️",
      image: k2,
      nom: "K2",
      localisation: "Pakistan et Chine",
      hauteur: "8,611 m"
  },
  {
      type: "Sommet",
      emoji: "🏔️",
      image: denali,
      nom: "Denali",
      localisation: "États-Unis",
      hauteur: "6,190 m"
  },
  {
    type: "Sommet",
    emoji: "🏔️",
    image: kilimanjaro,
    nom: "Kilimandjaro",
    localisation: "Tanzanie",
    hauteur: "5,895 m"
  },
  {
    type: "Sommet",
    emoji: "🏔️",
    image: elbrus,
    nom: "Mont Elbrouz",
    localisation: "Russie",
    hauteur: "5,642 m"
  },
  {
    type: "Sommet",
    emoji: "🏔️",
    image: vinson,
    nom: "Mont Vinson",
    localisation: "Antarctique",
    hauteur: "4,892 m"
  },
  {
    type: "Sommet",
    emoji: "🏔️",
    image: aconcagua,
    nom: "Aconcagua",
    localisation: "Argentine",
    hauteur: "6,961 m"
  },
  // lakes
  {
    type: "Lac",
    emoji: "🐟",
    image: baikal,
    nom: "Lac Baïkal",
    localisation: "Russie",
    surface: "31,500 km²"
  },
  // cities
  {
    type: "Ville",
    emoji: "🏘️",
    image: paris,
    nom: "Paris",
    localisation: "France",
    population: "2,161,000 M"
  },
  // countries
  {
    type: "Pays",
    emoji: "🤠",
    image: australia,
    nom: "Australie",
    localisation: "Océanie",
    population: "25 M",
    superficie: "7,692,024 km²"
  },
  {
    type: "Pays",
    emoji: "🤠",
    image: fiji,
    nom: "Fidji",
    localisation: "Océanie",
    population: "896 K",
    superficie: "18,274 km²"
  },
  {
      type: "Pays",
      emoji: "🤠",
      image: papua_new_guinea,
      nom: "Papouasie-Nouvelle-Guinée",
      localisation: "Océanie",
      population: "9.12 M",
      superficie: "462,840 km²"
  },
  {
      type: "Pays",
      emoji: "🤠",
      image: new_zealand,
      nom: "Nouvelle-Zélande",
      localisation: "Océanie",
      population: "4.9 M",
      superficie: "268,021 km²"
  },
  {
      type: "Pays",
      emoji: "🤠",
      image: vanuatu,
      nom: "Vanuatu",
      localisation: "Océanie",
      population: "307 K",
      superficie: "12,189 km²"
  },
  {
      type: "Pays",
      emoji: "🤠",
      image: samoa,
      nom: "Samoa",
      localisation: "Océanie",
      population: "202 K",
      superficie: "2,842 km²"
  },
  {
      type: "Pays",
      emoji: "🤠",
      image: tonga,
      nom: "Tonga",
      localisation: "Océanie",
      population: "106 K",
      superficie: "747 km²"
  },
  {
      type: "Pays",
      emoji: "🤠",
      image: kiribati,
      nom: "Kiribati",
      localisation: "Océanie",
      population: "123 K",
      superficie: "811 km²"
  },
  {
      type: "Pays",
      emoji: "🤠",
      image: marshall_islands,
      nom: "Îles Marshall",
      localisation: "Océanie",
      population: "59 K",
      superficie: "181 km²"
  },
  {
      type: "Pays",
      emoji: "🤠",
      image: micronesia,
      nom: "Micronésie",
      localisation: "Océanie",
      population: "116 K",
      superficie: "702 km²"
  },
  {
      type: "Pays",
      emoji: "🤠",
      image: palau,
      nom: "Palaos",
      localisation: "Océanie",
      population: "18 K",
      superficie: "459 km²"
  },
  {
      type: "Pays",
      emoji: "🤠",
      image: nauru,
      nom: "Nauru",
      localisation: "Océanie",
      population: "12.8 K",
      superficie: "21 km²"
  },
  {
      type: "Pays",
      emoji: "🤠",
      image: solomon_islands,
      nom: "Îles Salomon",
      localisation: "Océanie",
      population: "703 K",
      superficie: "28,400 km²"
  },
  {
    type: "Pays",
    emoji: "🤠",
    image: tuvalu,
    nom: "Tuvalu",
    localisation: "Océanie",
    population: "11.3 K",
    superficie: "26 km²"
  },




  // seas
  {
    type: "Mer",
    emoji: "🌊",
    image: mediterranean,
    nom: "Mer Méditerranée",
    localisation: "Europe, Afrique et Asie",
    profondeur: "5,267 m"
  },
  {
    type: "Mer",
    emoji: "🌊",
    image: caribbean,
    nom: "Mer des Caraïbes",
    localisation: "Amérique",
    profondeur: "7,686 m"
  },
  {
    type: "Mer",
    emoji: "🌊",
    image: baltic,
    nom: "Mer Baltique",
    localisation: "Europe",
    profondeur: "459 m"
  },
  {
    type: "Mer",
    emoji: "🌊",
    image: arabian,
    nom: "Mer d'Arabie",
    localisation: "Asie",
    profondeur: "4,652 m"
  },
  {
    type: "Mer",
    emoji: "🌊",
    image: bering,
    nom: "Mer de Béring",
    localisation: "Amérique et Asie",
    profondeur: "4,097 m"
  },
  {
    type: "Mer",
    emoji: "🌊",
    image: south_china,
    nom: "Mer de Chine Méridionale",
    localisation: "Asie",
    profondeur: "5,016 m"
  },
  {
    type: "Mer",
    emoji: "🌊",
    image: black,
    nom: "Mer Noire",
    localisation: "Europe et Asie",
    profondeur: "2,212 m"
  },
  




  // oceans
  {
    type: "Océan",
    emoji: "🌀",
    image: pacific,
    nom: "Océan Pacifique",
    localisation: "Amérique, Asie et Océanie",
    profondeur: "10,911 m"
  },
  {
    type: "Océan",
    emoji: "🌀",
    image: atlantic,
    nom: "Océan Atlantique",
    localisation: "Amérique, Europe et Afrique",
    profondeur: "8,486 m"
  },
  {
    type: "Océan",
    emoji: "🌀",
    image: southern,
    nom: "Océan Austral",
    localisation: "Antarctique",
    profondeur: "7,236 m"
  },
  {
    type: "Océan",
    emoji: "🌀",
    image: indian,
    nom: "Océan Indien",
    localisation: "Asie, Afrique et Australie",
    profondeur: "7,258 m"
  },
  {
    type: "Océan",
    emoji: "🌀",
    image: arctic,
    nom: "Océan Arctique",
    localisation: "Arctique",
    profondeur: "5,450 m"
  },






  // rivers
  {
    type: "Fleuve",
    emoji: "💦",
    image: nil,
    nom: "Nil",
    localisation: "Égypte, Soudan et Soudan du sud",
    longueur: "6,650 km"
  },
  // deserts
  {
    type: "Désert",
    emoji: "🌵",
    image: sahara,
    nom: "Sahara",
    localisation: "Afrique",
    superficie: "9,200,000 km²"
  },
  {
    type: "Désert",
    emoji: "🌵",
    image: arabianDesert,
    nom: "Désert Arabique",
    localisation: "Asie",
    superficie: "2,330,000 km²"
  },
  {
    type: "Désert",
    emoji: "🌵",
    image: gobi,
    nom: "Gobi",
    localisation: "Asie",
    superficie: "1,295,000 km²"
  },
  {
    type: "Désert",
    emoji: "🌵",
    image: kalahari,
    nom: "Kalahari",
    localisation: "Afrique",
    superficie: "900,000 km²"
  },
  {
    type: "Désert",
    emoji: "🌵",
    image: greatBasin,
    nom: "Grand Bassin",
    localisation: "Amérique",
    superficie: "492,000 km²"
  },
  {
    type: "Désert",
    emoji: "🌵",
    image: sonoran,
    nom: "Sonora",
    localisation: "Amérique",
    superficie: "260,000 km²"
  },
  {
    type: "Désert",
    emoji: "🌵",
    image: atacama,
    nom: "Atacama",
    localisation: "Amérique",
    superficie: "105,000 km²"
  },







  // islands
  {
    type: "Île",
    emoji: "🌴",
    image: bali,
    nom: "Bali",
    localisation: "Indonésie",
    superficie: "5,780 km²"
  },
  {
    type: "Île",
    emoji: "🌴",
    image: greenland,
    nom: "Groenland",
    localisation: "Danemark",
    superficie: "2,166,086 km²"
  },
  {
    type: "Île",
    emoji: "🌴",
    image: java,
    nom: "Java",
    localisation: "Indonésie",
    superficie: "138,794 km²"
  },
  {
    type: "Île",
    emoji: "🌴",
    image: hawaii,
    nom: "Hawaï",
    localisation: "États-Unis",
    superficie: "16,635 km²"
  },
  {
    type: "Île",
    emoji: "🌴",
    image: sicily,
    nom: "Sicile",
    localisation: "Italie",
    superficie: "25,711 km²"
  },
  {
    type: "Île",
    emoji: "🌴",
    image: newZealandNorth,
    nom: "Île du Nord",
    localisation: "Nouvelle-Zélande",
    superficie: "113,729 km²"
  }  
];


export default cards;

