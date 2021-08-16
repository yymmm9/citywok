function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("table");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h4")[0];
    b = li[i].getElementsByTagName("span")[0];
    txtValue = a.textContent || a.innerText;
    txtValueB = b.textContent || b.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else if (txtValueB.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


let data = [
  {
    "numero": "01",
    "nome": "INVOLTINO VERDURE",
    "descrizione": "(3pz)",
    "prezzo": "€3.00",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "02",
    "nome": "INVOLTINO PRIMAVERA",
    "descrizione": "(involtino gamberi e verdure 3pz)",
    "prezzo": "€4.00",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "03",
    "nome": "SAMURAI STICK",
    "descrizione": "(involtino di pesce misto 2pz)",
    "prezzo": "€4.00",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "04",
    "nome": "RAVIOLI DI VERDURE",
    "descrizione": "(4pz)",
    "prezzo": "€4.50",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "05",
    "nome": "RAVIOLI DI CARNE",
    "descrizione": "(4pz)",
    "prezzo": "€4.50",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "06",
    "nome": "RAVIOLI DI CARNE GRIGLIA",
    "descrizione": "(4pz)",
    "prezzo": "€4.50",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "07",
    "nome": "RAVIOLI DI POLLO",
    "descrizione": "(4pz)",
    "prezzo": "€4.50",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "08",
    "nome": "RAVIOLI DI GAMBERI",
    "descrizione": "(4pz)",
    "prezzo": "€5.00",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "09",
    "nome": "BAO",
    "descrizione": "(pane orientale 2pz)",
    "prezzo": "€4.00",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "10",
    "nome": "PATATINE FRITTE ",
    "descrizione": "",
    "prezzo": "€3.50",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "11",
    "nome": "NUVOLETTE DI DRAGO",
    "descrizione": "",
    "prezzo": "€2.50",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "12",
    "nome": "GOMA WAKAME",
    "descrizione": "(alghe agropiccanti)",
    "prezzo": "€4.00",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "13",
    "nome": "EDAMAME",
    "descrizione": "(baccelli di soia)",
    "prezzo": "€3.00",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "14",
    "nome": "CHELE GRANCHIO",
    "descrizione": "",
    "prezzo": "€4.50",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "15",
    "nome": "CROCHETTE DI PATATE",
    "descrizione": "",
    "prezzo": "€4.50",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "16",
    "nome": "SAKE IMOYAKI",
    "descrizione": "(salmone con purè di patate 2pz)",
    "prezzo": "€5.00",
    "categoria": "ANTIPASTI"
  },
  {
    "numero": "17",
    "nome": "ZUPPA MISO",
    "descrizione": "",
    "prezzo": "€3.00",
    "categoria": "ZUPPA"
  },
  {
    "numero": "18",
    "nome": "ZUPPA DI MAIS",
    "descrizione": "(mais, pollo e uova)",
    "prezzo": "€4.00",
    "categoria": "ZUPPA"
  },
  {
    "numero": "19",
    "nome": "ZUPPA DI ASPARAGI E GRANCHIO",
    "descrizione": "(granchio, asparagi e uova)",
    "prezzo": "€3.50",
    "categoria": "ZUPPA"
  },
  {
    "numero": "20",
    "nome": "ZUPPA AGROPICCANTE",
    "descrizione": "(verdure, tofu, uova, bambù e pollo)",
    "prezzo": "€5.00",
    "categoria": "ZUPPA"
  },
  {
    "numero": "21",
    "nome": "INSALATA CON GAMBERI",
    "descrizione": "",
    "prezzo": "€4.50",
    "categoria": "INSALATE"
  },
  {
    "numero": "22",
    "nome": "INSALATA CON PESCE",
    "descrizione": "(insalata con pesce crudo)",
    "prezzo": "€8.00",
    "categoria": "INSALATE"
  },
  {
    "numero": "23",
    "nome": "INSALATA DI MARE",
    "descrizione": "",
    "prezzo": "€8.00",
    "categoria": "INSALATE"
  },
  {
    "numero": "24",
    "nome": "MISTO DI MARE FRITTO",
    "descrizione": "",
    "prezzo": "€8.00",
    "categoria": "FRITTURE"
  },
  {
    "numero": "25",
    "nome": "POLLO FRITTO",
    "descrizione": "",
    "prezzo": "€6.00",
    "categoria": "FRITTURE"
  },
  {
    "numero": "26",
    "nome": "COTOLETTA DI MAIALE FRITTO",
    "descrizione": "",
    "prezzo": "€6.00",
    "categoria": "FRITTURE"
  },
  {
    "numero": "27",
    "nome": "TEMPURA DI VERDURE",
    "descrizione": "",
    "prezzo": "€8.00",
    "categoria": "FRITTURE"
  },
  {
    "numero": "28",
    "nome": "TEMPURA DI GAMBERI",
    "descrizione": "(4pz)",
    "prezzo": "€10.00",
    "categoria": "FRITTURE"
  },
  {
    "numero": "29",
    "nome": "EBI STICK",
    "descrizione": "(involtino croccante di gamberi 2pz)",
    "prezzo": "€6.00",
    "categoria": "FRITTURE"
  },
  {
    "numero": "30",
    "nome": "TEMPURA FIOR DI ZUCCA",
    "descrizione": "(4pz)",
    "prezzo": "€10.00",
    "categoria": "FRITTURE"
  },
  {
    "numero": "31",
    "nome": "SPAGHETTI UDON CON GAMBERI",
    "descrizione": "",
    "prezzo": "€8.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "32",
    "nome": "SPAGHETTI SOBA CON GAMBERI",
    "descrizione": "",
    "prezzo": "€8.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "33",
    "nome": "SPAGHETTI DI RISO CON FRUTTI DI MARE",
    "descrizione": "",
    "prezzo": "€6.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "34",
    "nome": "SPAGHETTI DI RISO CON VERDURE ",
    "descrizione": "",
    "prezzo": "€4.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "35",
    "nome": "LINGUINE CON FRUTTI DI MARE",
    "descrizione": "",
    "prezzo": "€6.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "36",
    "nome": "SPAGHETTI DI SOIA CON GAMBERI ",
    "descrizione": "",
    "prezzo": "€6.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "37",
    "nome": "SPAGHETTI DI SOIA CON VERDURE ",
    "descrizione": "",
    "prezzo": "€4.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "38",
    "nome": "RISO BIANCO",
    "descrizione": "",
    "prezzo": "€2.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "39",
    "nome": "RISO CANTONESE",
    "descrizione": "",
    "prezzo": "€4.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "40",
    "nome": "RISO SALTATO CON FRUTTI DI MARE ",
    "descrizione": "",
    "prezzo": "€5.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "41",
    "nome": "RISO SALTATO CON SALMONE ",
    "descrizione": "",
    "prezzo": "€5.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "42",
    "nome": "RISO SALTATO CON MANZO",
    "descrizione": "",
    "prezzo": "€6.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "43",
    "nome": "RISO AL CURRY ",
    "descrizione": "",
    "prezzo": "€5.50",
    "categoria": "PRIMI"
  },
  {
    "numero": "44",
    "nome": "RISO CON ANANAS ",
    "descrizione": "",
    "prezzo": "€7.00",
    "categoria": "PRIMI"
  },
  {
    "numero": "45",
    "nome": "GAMBERONI ",
    "descrizione": "(4pz)",
    "prezzo": "€9.00",
    "categoria": "GRIGLIE"
  },
  {
    "numero": "46",
    "nome": "SALMONE",
    "descrizione": "",
    "prezzo": "€8.00",
    "categoria": "GRIGLIE"
  },
  {
    "numero": "47",
    "nome": "SPIEDINI DI GAMBERI ",
    "descrizione": "(3pz)",
    "prezzo": "€7.00",
    "categoria": "GRIGLIE"
  },
  {
    "numero": "48",
    "nome": "SPIEDINI DI CALAMARI ",
    "descrizione": "(3pz)",
    "prezzo": "€7.00",
    "categoria": "GRIGLIE"
  },
  {
    "numero": "49",
    "nome": "SPIEDINI DI POLLO ",
    "descrizione": "(3pz)",
    "prezzo": "€6.00",
    "categoria": "GRIGLIE"
  },
  {
    "numero": "50",
    "nome": "BRANZINO ",
    "descrizione": "",
    "prezzo": "€8.00",
    "categoria": "GRIGLIE"
  },
  {
    "numero": "51",
    "nome": "SAKE TATAKI",
    "descrizione": "(Salmone scottato con salsa lime)",
    "prezzo": "€8.00",
    "categoria": "GRIGLIE"
  },
  {
    "numero": "52",
    "nome": "MAGURO TATAKI",
    "descrizione": "(Tonno scottato con salsa lime)",
    "prezzo": "€8.00",
    "categoria": "GRIGLIE"
  },
  {
    "numero": "53",
    "nome": "BISTECCA DI MANZO",
    "descrizione": "",
    "prezzo": "€7.00",
    "categoria": "GRIGLIE"
  },
  {
    "numero": "54",
    "nome": "SALSICCIA ",
    "descrizione": "(1pz)",
    "prezzo": "€3.50",
    "categoria": "GRIGLIE"
  },
  {
    "numero": "55",
    "nome": "POLLO ALLE MANDORLE ",
    "descrizione": "",
    "prezzo": "€6.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "56",
    "nome": "POLLO PICCANTE ",
    "descrizione": "",
    "prezzo": "€4.50",
    "categoria": "SECONDI"
  },
  {
    "numero": "57",
    "nome": "POLLO AL CURRY ",
    "descrizione": "",
    "prezzo": "€5.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "58",
    "nome": "POLLO IN AGRODOLCE ",
    "descrizione": "",
    "prezzo": "€5.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "59",
    "nome": "MANZO CON FUNGHI E BAMBÙ ",
    "descrizione": "",
    "prezzo": "€7.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "60",
    "nome": "MANZO PICCANTE ",
    "descrizione": "",
    "prezzo": "€7.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "61",
    "nome": "MANZO IN SALSA D'OSTRICA",
    "descrizione": "",
    "prezzo": "€7.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "62",
    "nome": "MAIALE IN AGRODOLCE ",
    "descrizione": "",
    "prezzo": "€6.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "63",
    "nome": "MAIALE PICCANTE ",
    "descrizione": "",
    "prezzo": "€6.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "64",
    "nome": "GAMBERI AI CINQUE COLORI ",
    "descrizione": "(Gamberi saltato con 5 tipi di verdure)",
    "prezzo": "€7.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "65",
    "nome": "GAMBERI PICCANTE ",
    "descrizione": "",
    "prezzo": "€7.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "66",
    "nome": "GAMBERI FRITTI ",
    "descrizione": "",
    "prezzo": "€7.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "67",
    "nome": "GAMBERI SALE PEPE",
    "descrizione": "",
    "prezzo": "€6.50",
    "categoria": "SECONDI"
  },
  {
    "numero": "68",
    "nome": "OSTRICA FRESCA",
    "descrizione": "(1pz)",
    "prezzo": "€2.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "69",
    "nome": "CAPESSANTE ALLA GRIGLIA",
    "descrizione": "",
    "prezzo": "€5.00",
    "categoria": "SECONDI"
  },
  {
    "numero": "70",
    "nome": "GERMOGLI DI SOIA SALTATO ",
    "descrizione": "",
    "prezzo": "€3.50",
    "categoria": "VERDURE"
  },
  {
    "numero": "71",
    "nome": "FUNGHI E BAMBÙ SALTATO ",
    "descrizione": "",
    "prezzo": "€3.50",
    "categoria": "VERDURE"
  },
  {
    "numero": "72",
    "nome": "VERDURE DI STAGIONE SALTATO ",
    "descrizione": "",
    "prezzo": "€3.50",
    "categoria": "VERDURE"
  },
  {
    "numero": "73",
    "nome": "SAKE",
    "descrizione": "(Salmone)",
    "prezzo": "€3.00",
    "categoria": "NIGIRI (2pz)"
  },
  {
    "numero": "74",
    "nome": "MAGURO",
    "descrizione": "(Tonno)",
    "prezzo": "€3.50",
    "categoria": "NIGIRI (2pz)"
  },
  {
    "numero": "75",
    "nome": "EBI",
    "descrizione": "(Gamberi)",
    "prezzo": "€3.00",
    "categoria": "NIGIRI (2pz)"
  },
  {
    "numero": "76",
    "nome": "TAKO",
    "descrizione": "(Polipo)",
    "prezzo": "€3.50",
    "categoria": "NIGIRI (2pz)"
  },
  {
    "numero": "77",
    "nome": "UNAGHI",
    "descrizione": "(anguilla)",
    "prezzo": "€3.50",
    "categoria": "NIGIRI (2pz)"
  },
  {
    "numero": "78",
    "nome": "SHIROMI",
    "descrizione": "(Branzino) ",
    "prezzo": "€3.50",
    "categoria": "NIGIRI (2pz)"
  },
  {
    "numero": "79",
    "nome": "SAKE FIRE",
    "descrizione": "(Salmone scottato )",
    "prezzo": "€3.00",
    "categoria": "NIGIRI (2pz)"
  },
  {
    "numero": "80",
    "nome": "MAGURO FIRE",
    "descrizione": "(Tonno scottato)",
    "prezzo": "€3.50",
    "categoria": "NIGIRI (2pz)"
  },
  {
    "numero": "81",
    "nome": "TARTARE SALMONE",
    "descrizione": "",
    "prezzo": "€5.00",
    "categoria": "TARTARE"
  },
  {
    "numero": "82",
    "nome": "TARTARE TONNO",
    "descrizione": "",
    "prezzo": "€5.50",
    "categoria": "TARTARE"
  },
  {
    "numero": "83",
    "nome": "TARTARE MIX",
    "descrizione": "(Salmone, tonno branzino)",
    "prezzo": "€6.50",
    "categoria": "TARTARE"
  },
  {
    "numero": "84",
    "nome": "CALIFORNIA",
    "descrizione": "(Granchio, avocado e maionese)",
    "prezzo": "€4.00",
    "categoria": "TEMAKI (cono)"
  },
  {
    "numero": "85",
    "nome": "SAKE",
    "descrizione": "(Salmone e avocado)",
    "prezzo": "€4.00",
    "categoria": "TEMAKI (cono)"
  },
  {
    "numero": "86",
    "nome": "SPICY TUNA",
    "descrizione": "(Tonno piccante)",
    "prezzo": "€5.00",
    "categoria": "TEMAKI (cono)"
  },
  {
    "numero": "87",
    "nome": "SPICY SAKE",
    "descrizione": "(Salmone piccante)",
    "prezzo": "€4.00",
    "categoria": "TEMAKI (cono)"
  },
  {
    "numero": "88",
    "nome": "MAGURO",
    "descrizione": "(Tonno e avocado )",
    "prezzo": "€5.00",
    "categoria": "TEMAKI (cono)"
  },
  {
    "numero": "89",
    "nome": "MIURA",
    "descrizione": "(Salmone grigliato condito e teriyaki )",
    "prezzo": "€4.00",
    "categoria": "TEMAKI (cono)"
  },
  {
    "numero": "90",
    "nome": "EBITEN",
    "descrizione": "(Gambero fritto e maionese)",
    "prezzo": "€4.00",
    "categoria": "TEMAKI (cono)"
  },
  {
    "numero": "91",
    "nome": "EBI",
    "descrizione": "(Gambero cotto e maionese)",
    "prezzo": "€5.00",
    "categoria": "TEMAKI (cono)"
  },
  {
    "numero": "92",
    "nome": "TORI",
    "descrizione": "(Pollo fritto e maionese)",
    "prezzo": "€4.00",
    "categoria": "TEMAKI (cono)"
  },
  {
    "numero": "93",
    "nome": "SAKE",
    "descrizione": "",
    "prezzo": "€4.00",
    "categoria": "ONIGIRI (triangolo di riso con ripieno 1pz)"
  },
  {
    "numero": "94",
    "nome": "MAGURO COTTO",
    "descrizione": "",
    "prezzo": "€3.00",
    "categoria": "ONIGIRI (triangolo di riso con ripieno 1pz)"
  },
  {
    "numero": "95",
    "nome": "PHILADELPHIA ",
    "descrizione": "",
    "prezzo": "€4.50",
    "categoria": "ONIGIRI (triangolo di riso con ripieno 1pz)"
  },
  {
    "numero": "96",
    "nome": "SAKE",
    "descrizione": "",
    "prezzo": "€4.00",
    "categoria": "HOSOMAKI (piccolo rotolo）"
  },
  {
    "numero": "97",
    "nome": "TONNO",
    "descrizione": "",
    "prezzo": "€5.00",
    "categoria": "HOSOMAKI (piccolo rotolo）"
  },
  {
    "numero": "98",
    "nome": "EBI",
    "descrizione": "",
    "prezzo": "€5.00",
    "categoria": "HOSOMAKI (piccolo rotolo）"
  },
  {
    "numero": "99",
    "nome": "CETRIOLO",
    "descrizione": "",
    "prezzo": "€3.50",
    "categoria": "HOSOMAKI (piccolo rotolo）"
  },
  {
    "numero": "100",
    "nome": "AVOCADO",
    "descrizione": "",
    "prezzo": "€3.50",
    "categoria": "HOSOMAKI (piccolo rotolo）"
  },
  {
    "numero": "101",
    "nome": "FRITTO CLASSIC",
    "descrizione": "(Salmone e teriyaki)",
    "prezzo": "€6.00",
    "categoria": "HOSOMAKI (piccolo rotolo）"
  },
  {
    "numero": "102",
    "nome": "FRITTO ANANAS",
    "descrizione": "(Salmone, Philadelphia e ananas)",
    "prezzo": "€6.00",
    "categoria": "HOSOMAKI (piccolo rotolo）"
  },
  {
    "numero": "103",
    "nome": "FRITTO PHILADELPHIA ",
    "descrizione": "(Salmone, Philadelphia e teriyaki )",
    "prezzo": "€6.00",
    "categoria": "HOSOMAKI (piccolo rotolo）"
  },
  {
    "numero": "104",
    "nome": "CLASSICO",
    "descrizione": "(Salmone, granchio, maionese e avocado )",
    "prezzo": "€6.00",
    "categoria": "FUTOMAKI ( grande rotolo 5pz)"
  },
  {
    "numero": "105",
    "nome": "CALIFORNIA",
    "descrizione": "(Granchio, avocado e maionese )",
    "prezzo": "€5.50",
    "categoria": "FUTOMAKI ( grande rotolo 5pz)"
  },
  {
    "numero": "106",
    "nome": "EBITEN",
    "descrizione": "(Gambero fritto, maionese e teriyaki )",
    "prezzo": "€5.50",
    "categoria": "FUTOMAKI ( grande rotolo 5pz)"
  },
  {
    "numero": "107",
    "nome": "FRITTO",
    "descrizione": "(Salmone, Philadelphia, tobiko e teriyaki )",
    "prezzo": "€6.00",
    "categoria": "FUTOMAKI ( grande rotolo 5pz)"
  },
  {
    "numero": "108",
    "nome": "SALMONE",
    "descrizione": "(Avvolto con alghe nori, salmone)",
    "prezzo": "€4.00",
    "categoria": "GUNKAN (bocconcino di riso avvolto 2pz)"
  },
  {
    "numero": "109",
    "nome": "TONNO",
    "descrizione": "(Avvolto con alghe nori, tonno)",
    "prezzo": "€4.00",
    "categoria": "GUNKAN (bocconcino di riso avvolto 2pz)"
  },
  {
    "numero": "110",
    "nome": "GIO SALMONE ",
    "descrizione": "(Avvolto con salmone, tartar salmone)",
    "prezzo": "€6.00",
    "categoria": "GUNKAN (bocconcino di riso avvolto 2pz)"
  },
  {
    "numero": "111",
    "nome": "GIO TONNO",
    "descrizione": "(Avvolto con tonno, tartar tonno)",
    "prezzo": "€6.00",
    "categoria": "GUNKAN (bocconcino di riso avvolto 2pz)"
  },
  {
    "numero": "112",
    "nome": "TOBIKO",
    "descrizione": "(Avvolto con alghe nori, uova di pesce)",
    "prezzo": "€6.00",
    "categoria": "GUNKAN (bocconcino di riso avvolto 2pz)"
  },
  {
    "numero": "113",
    "nome": "SAKE",
    "descrizione": "(Riso con fette di salmone)",
    "prezzo": "€9.00",
    "categoria": "CHIRASHI (riso con pesce crudo)"
  },
  {
    "numero": "114",
    "nome": "TONNO",
    "descrizione": "(Riso con fette di tonno)",
    "prezzo": "€11.00",
    "categoria": "CHIRASHI (riso con pesce crudo)"
  },
  {
    "numero": "115",
    "nome": "MORIAWASE",
    "descrizione": "(Riso con pesce misto)",
    "prezzo": "€11.00",
    "categoria": "CHIRASHI (riso con pesce crudo)"
  },
  {
    "numero": "116",
    "nome": "SAKE",
    "descrizione": "",
    "prezzo": "€8.00",
    "categoria": "SASHIMI "
  },
  {
    "numero": "117",
    "nome": "TONNO",
    "descrizione": "",
    "prezzo": "€9.00",
    "categoria": "SASHIMI "
  },
  {
    "numero": "118",
    "nome": "MORIAWASE",
    "descrizione": "(Pesce misto)",
    "prezzo": "€9.00",
    "categoria": "SASHIMI "
  },
  {
    "numero": "119",
    "nome": "PER 1 PERSONA",
    "descrizione": "(Sushi e sashimi misti 20pz)",
    "prezzo": "€20.00",
    "categoria": "BARCA "
  },
  {
    "numero": "120",
    "nome": "PER 2 PERSONE",
    "descrizione": "(Sushi e sashimi misti 40pz)",
    "prezzo": "€38.00",
    "categoria": "BARCA "
  },
  {
    "numero": "121",
    "nome": "NIGIRI MIX",
    "descrizione": "(8pz)",
    "prezzo": "€12.00",
    "categoria": "BARCA "
  },
  {
    "numero": "122",
    "nome": "SAKE",
    "descrizione": "(Salmone,  avocado e tobiko)",
    "prezzo": "€8.00",
    "categoria": "URAMAKI (rotolo di riso 8pz)"
  },
  {
    "numero": "123",
    "nome": "CALIFORNIA",
    "descrizione": "(Granchio, sesamo, maionese e avocado )",
    "prezzo": "€8.00",
    "categoria": "URAMAKI (rotolo di riso 8pz)"
  },
  {
    "numero": "124",
    "nome": "MAGURO",
    "descrizione": "(Tonno crudo, tobiko, avocado)",
    "prezzo": "€9.00",
    "categoria": "URAMAKI (rotolo di riso 8pz)"
  },
  {
    "numero": "125",
    "nome": "MAGURO COTTO",
    "descrizione": "(Tonno cotto, sesamo, maionese e avocado )",
    "prezzo": "€8.00",
    "categoria": "URAMAKI (rotolo di riso 8pz)"
  },
  {
    "numero": "126",
    "nome": "PHILADELPHIA SPECIAL",
    "descrizione": "(Philadelphia, sesamo, salmone e avocado )",
    "prezzo": "€10.00",
    "categoria": "URAMAKI (rotolo di riso 8pz)"
  },
  {
    "numero": "127",
    "nome": "VEGETARIAN ",
    "descrizione": "(Verdure miste, sesamo e Philadelphia )",
    "prezzo": "€7.00",
    "categoria": "URAMAKI (rotolo di riso 8pz)"
  },
  {
    "numero": "128",
    "nome": "SPICY SAKE",
    "descrizione": "(Tartare di salmone piccante e sesamo",
    "prezzo": "€8.00",
    "categoria": "URAMAKI (rotolo di riso 8pz)"
  },
  {
    "numero": "129",
    "nome": "SPICY TUNA",
    "descrizione": "(Tartare di tonno piccante e sessmo",
    "prezzo": "€9.00",
    "categoria": "URAMAKI (rotolo di riso 8pz)"
  },
  {
    "numero": "130",
    "nome": "MIURA",
    "descrizione": "(Salmone cotto, sesamo, Philadelphia e teriyaki )",
    "prezzo": "€9.00",
    "categoria": "URAMAKI (rotolo di riso 8pz)"
  },
  {
    "numero": "131",
    "nome": "EBITEN",
    "descrizione": "(Gamberi fritto, maionese, sesamo, tobiko, kataifi e teriyaki )",
    "prezzo": "€8.00",
    "categoria": "URAMAKI (rotolo di riso 8pz)"
  },
  {
    "numero": "132",
    "nome": "TORI",
    "descrizione": "(Pollo fritto, maionese e teriyaki )",
    "prezzo": "€8.00",
    "categoria": "URAMAKI (rotolo di riso 8pz)"
  },
  {
    "numero": "133",
    "nome": "CALI OUT",
    "descrizione": "(Granchio, avocado e maionese  esterno:  salmone scottato e salsa spicymayo",
    "prezzo": "€11.00",
    "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
  },
  {
    "numero": "134",
    "nome": "ARCOBALENO ",
    "descrizione": "(Granchio, avocado e maionese  esterno: pesce misto",
    "prezzo": "€12.00",
    "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
  },
  {
    "numero": "135",
    "nome": "DRAGON ROLL",
    "descrizione": "(Gamberi fritti e maionese esterno: avocado e teriyaki )",
    "prezzo": "€12.00",
    "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
  },
  {
    "numero": "136",
    "nome": "DRAGON RED",
    "descrizione": "(Gamberi fritti e maionese  esterno: salmone e salsa special)",
    "prezzo": "€12.00",
    "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
  },
  {
    "numero": "137",
    "nome": "CRO ROLL",
    "descrizione": "(Tartare salmone, maionese e scaglie di tempura)",
    "prezzo": "€11.00",
    "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
  },
  {
    "numero": "138",
    "nome": "ROMANTIC ROLL",
    "descrizione": "(Tonno cotto e maionese  esterno: tonno crudo)",
    "prezzo": "€13.00",
    "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
  },
  {
    "numero": "139",
    "nome": "FRESH SALMON",
    "descrizione": "(Rotolo senza alghe, salmone)",
    "prezzo": "€10.00",
    "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
  },
  {
    "numero": "140",
    "nome": "FRESH PHILADELPHIA ",
    "descrizione": "(Rotolo senza alghe, Philadelphia e salmone )",
    "prezzo": "€10.00",
    "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
  },
  {
    "numero": "141",
    "nome": "CRUNCH CALIFORNIA ",
    "descrizione": "(Granchio, avocado e maionese  esterno: cipolle fritte, salsa spicymayo e teriyaki",
    "prezzo": "€12.00",
    "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
  },
  {
    "numero": "142",
    "nome": "CRUNCH SAKE",
    "descrizione": "(Salmone, avocado  esterno: cipolle fritte, salsa spicymayo e teriyaki )",
    "prezzo": "€12.00",
    "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
  },
  {
    "numero": "143",
    "nome": "HOT ROLL",
    "descrizione": "(Gamberi fritto e maionese  esterno: salmone e salsa piccante )",
    "prezzo": "€12.00",
    "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
  },
  {
    "numero": "144",
    "nome": "MEXICANO ROLL",
    "descrizione": "(Philadelphia e salmone  esterno: nachos piccante e salsa piccante ",
    "prezzo": "€12.00",
    "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
  },
  {
    "numero": "145",
    "nome": "HORROR ROLL",
    "descrizione": "(Salmone, gamberi, tobiko fritto e teriyaki )",
    "prezzo": "€12.00",
    "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
  },
  {
    "numero": "146",
    "nome": "ANGEL ROLL",
    "descrizione": "(Gamberi fritti, Philadelphia e insalata  esterno: salmone scottato, salsa speciale scaglie di tempura)",
    "prezzo": "€12.00",
    "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
  },
  {
    "numero": "147",
    "nome": "AMANDOA ROLL",
    "descrizione": "(Salmone e avocado  esterno: Philadelphia e mandorle ",
    "prezzo": "€12.00",
    "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
  },
  {
    "numero": "148",
    "nome": "PISTACCHIO ROLL",
    "descrizione": "(Gamberi fritti e maionese  esterno: pesce misto scottato e pistacchio )",
    "prezzo": "€14.00",
    "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
  },
  {
    "numero": "149",
    "nome": "MANGO ROLL",
    "descrizione": "(Salmone cotto e Philadelphia  esterno: mango e teriyaki )",
    "prezzo": "€12.00",
    "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
  },
  {
    "numero": "150",
    "nome": "CLASSIC",
    "descrizione": "(Salmone, avocado, salsa special e tobiko",
    "prezzo": "€14.00",
    "categoria": "SAUDATE (rettangolo di riso 8pz)"
  },
  {
    "numero": "151",
    "nome": "SPICY SAKE",
    "descrizione": "(Salmone piccante e sesamo)",
    "prezzo": "€12.00",
    "categoria": "SAUDATE (rettangolo di riso 8pz)"
  },
  {
    "numero": "152",
    "nome": "SAKE",
    "descrizione": "",
    "prezzo": "€12.00",
    "categoria": "CARPACCIO"
  },
  {
    "numero": "153",
    "nome": "TONNO",
    "descrizione": "",
    "prezzo": "€12.00",
    "categoria": "CARPACCIO"
  },
  {
    "numero": "154",
    "nome": "MORIAWASE",
    "descrizione": "",
    "prezzo": "€12.00",
    "categoria": "CARPACCIO"
  },
  {
    "numero": "",
    "nome": "BIRRA ASAHI",
    "descrizione": "",
    "prezzo": "€5.00",
    "categoria": "BIBITE"
  },
  {
    "numero": "",
    "nome": "BIRRA SAPPORO",
    "descrizione": "",
    "prezzo": "€6.50",
    "categoria": "BIBITE"
  },
  {
    "numero": "",
    "nome": "BIRRA CINESE",
    "descrizione": "",
    "prezzo": "€4.00",
    "categoria": "BIBITE"
  },
  {
    "numero": "",
    "nome": "BIRRA MORETTI",
    "descrizione": "",
    "prezzo": "€4.50",
    "categoria": "BIBITE"
  },
  {
    "numero": "",
    "nome": "BIBITE IN LATTINE",
    "descrizione": "(coca, coca zero, fanta, sprite, Estathé )",
    "prezzo": "€2.50",
    "categoria": "BIBITE"
  },
  {
    "numero": "",
    "nome": "ACQUA ",
    "descrizione": "(50cl)",
    "prezzo": "€1.00",
    "categoria": "BIBITE"
  }
];

function writePrice(data) {
  // All column names
  let columnNames = Object.keys(data[0]);
  // // Clicked device
  // let device = document.getElementsByClassName("fetched");
  // // Get clicked device's id to filter data from the sheet
  // var deviceId = parseInt(device[0].dataset.id);

  //console.log(deviceId);

  // array: [service name], [service price], [used for data fetching], [used svg icon]
  // let marca = ["Marca", data[deviceId][columnNames[0]], "marca"];
  // let tipo = ["Tipo Dispositivo", data[deviceId][columnNames[1]], "tipo"];
  let index = 0;
  let seq = ["Numero", data[index][columnNames[0]], "numero"];
  let nome = ["Nome", data[index][columnNames[1]], "nome"];
  let descrizione = ["Descrizione", data[index][columnNames[2]], "descrizione"];
  let prezzo = ["Prezzo", data[index][columnNames[3]], "prezzo"];
  let categoria = ["Categoria", data[index][columnNames[4]], "categoria"];


  // include all declared arrays into one
  let allServices = [
    seq,
    nome,
    descrizione,
    prezzo,
    categoria
  ];

  // console.log(allServices);

  // clean html before fetching
  document.getElementById("services").innerHTML = "";

  // document.getElementById("fetched-device").innerHTML = nome[1];
  // document.getElementById("fetched-device").classList.remove("placeholder");


  // let forScroll = document.createElement("div");
  //   // assign service id to the container
  // 	forScroll.classList.add("for-scroll")
  // 	// append each service to the parent
  // 	document.getElementById("services").appendChild(forScroll);


  let section = document.getElementById('table');


  let sum = 256;
  for (e = 0; e < sum; e++) {
    // console.log(array[i]);
    console.log(e);

    if (e + 1 == 01) {
      console.log(e);
      section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>ANTIPASTI</h3></div>`);
    }
    if (e + 1 == 17) {
      console.log(e);
      section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>ZUPPA</h3></div>`);
    }
    if (e + 1 == 21) {
      console.log(e);
      section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>INSALATE</h3></div>`);
    }
    if (e + 1 == 31) {
      console.log(e);
      section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>PRIMI</h3></div>`);
    }
    if (e + 1 == 45) {
      console.log(e);
      section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>GRIGLIE</h3></div>`);
    }
    if (e + 1 == 55) {
      console.log(e);
      section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>SECONDI</h3></div>`);
    }
    if (e + 1 == 70) {
      console.log(e);
      section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>VERDURE</h3></div>`);
    }
    if (e + 1 == 73) {
      console.log(e);
      section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>NIGIRI (2pz)</h3></div>`);
    }
    if (e + 1 == 81) {
      console.log(e);
      section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>TARTARE</h3></div>`);
    }
    if (e + 1 == 84) {
      console.log(e);
      section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>TEMAKI (cono)</h3></div>`);
    }
    if (e + 1 == 93) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>ONIGIRI (triangolo di riso con ripieno 1pz)</h3></div>`) }
    if (e + 1 == 96) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>HOSOMAKI/h3></div>`) }
    if (e + 1 == 104) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>FUTOMAKI (grande rotolo 5pz)</h3></div>`) }
    if (e + 1 == 108) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>GUNKAN (bocconcino di riso avvolto 2pz)</h3></div>`) }
    if (e + 1 == 113) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>CHIRASHI (riso con pesce crudo)</h3></div>`) }
    if (e + 1 == 116) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>SASHIMI</h3></div>`) }
    if (e + 1 == 119) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>BARCA</h3></div>`) }
    if (e + 1 == 122) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>URAMAKI (rotolo di riso 8pz)</h3></div>`) }
    if (e + 1 == 133) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>URAMAKI SPECIALE (rotolo di riso 8pz)				</h3></div>`) }
    if (e + 1 == 150) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>SAUDATE (rettangolo di riso 8pz)</h3></div>`) }
    if (e + 1 == 152) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>CARPACCIO</h3></div>`) }
    if (e + 1 == 155) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>BIBITE</h3></div>`) }

    console.log('c');
    section.insertAdjacentHTML('beforeend', `<li><div class='flex'><span>` + data[e][columnNames[0]] + `</span><h4 class='title'>` + data[e][columnNames[1]] + `</h4></div><div class='flex'><p class='descrizione'>` + data[e][columnNames[2]] + `</p><p>` + data[e][columnNames[3]] + `</p></div></li>`);

  };

}

writePrice(data);









// var publicSpreadsheetUrl =
//   "https://docs.google.com/spreadsheets/d/1fIIYi44YiAsIbWOojNgVP8glBTPsJNPexOSfG_ER9Ho/pubhtml";

// function init() {
//   Tabletop.init({
//     key: publicSpreadsheetUrl,
//     callback: writePrice,
//     simpleSheet: true
//   });
// }

// function showInfo(data, tabletop) {
//   console.table(data);
//   let columnNames = Object.keys(data[0]);

//   // let columnNames = Object.keys(data[0]);
//   // columnNames.forEach( function(columnName){
//   // console.log(data[0][columnName]);
//   // });

//   function trimPlace(jsonLocation, htmlID) {
//     var myString = JSON.stringify(jsonLocation);
//     if (myString.charAt(0) == '"') {
//       b = myString.slice(1, myString.length - 1);
//       return (document.getElementById(htmlID).innerHTML = b);
//     } else return (document.getElementById(htmlID).innerHTML = myString);
//   }

//   function justTrim(jsonLoc, htmlID) {
//     var imgString = JSON.stringify(jsonLoc);
//     if (imgString.charAt(0) == '"') {
//       c = imgString.slice(1, imgString.length - 1);
//       return (document.getElementById(htmlID).src = c);
//     } else return (document.getElementById(htmlID).src = imgString);
//   }

//   // trimPlace(data[0].marca, "marca")
//   // trimPlace(data[0].tipo, "tipo")
//   // trimPlace(data[0].nome, "nome")
//   // trimPlace(data[0].img, "img")
//   // trimPlace(data[0].screen, "screen");
//   // trimPlace(data[0].connettore, "connettore")
//   // trimPlace(data[0].cameraa, "cameraa")
//   // trimPlace(data[0].camerap, "camerap")
//   // trimPlace(data[0].vibrazione, "vibrazione")
//   // trimPlace(data[0].sim, "sim")
// }
// // window.addEventListener("DOMContentLoaded", init);

// // main logic

// // fetch("https://spreadsheets.google.com/feeds/list/1fIIYi44YiAsIbWOojNgVP8glBTPsJNPexOSfG_ER9Ho/1/public/values?alt=json")
// //   .then(res => res.json())
// //   .then(json => {
// //     const data = [] /* this array will eventually be populated with the contents of the spreadsheet's rows */

// //     const rows = json.feed.entry

// //     for (const row of rows) {
// //       const formattedRow = {}

// //       for (const key in row) {
// //         if (key.startsWith("gsx$")) {

// //           /* The actual row names from your spreadsheet
// //            * are formatted like "gsx$title".
// //            * Therefore, we need to find keys in this object
// //            * that start with "gsx$", and then strip that
// //            * out to get the actual row name
// //            */

// //           formattedRow[key.replace("gsx$", "")] = row[key].$t

// //         }
// //       }

// //       data.push(formattedRow)
// //     }

// //     // console.log(data) /* do anything you want with the reformatted data here */
// //   })

// let data = [
//   {
//     "numero": "01",
//     "nome": "INVOLTINO VERDURE",
//     "descrizione": "(3pz)",
//     "prezzo": "€3.00",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "02",
//     "nome": "INVOLTINO PRIMAVERA",
//     "descrizione": "(involtino gamberi e verdure 3pz)",
//     "prezzo": "€4.00",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "03",
//     "nome": "SAMURAI STICK",
//     "descrizione": "(involtino di pesce misto 2pz)",
//     "prezzo": "€4.00",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "04",
//     "nome": "RAVIOLI DI VERDURE",
//     "descrizione": "(4pz)",
//     "prezzo": "€4.50",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "05",
//     "nome": "RAVIOLI DI CARNE",
//     "descrizione": "(4pz)",
//     "prezzo": "€4.50",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "06",
//     "nome": "RAVIOLI DI CARNE GRIGLIA",
//     "descrizione": "(4pz)",
//     "prezzo": "€4.50",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "07",
//     "nome": "RAVIOLI DI POLLO",
//     "descrizione": "(4pz)",
//     "prezzo": "€4.50",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "08",
//     "nome": "RAVIOLI DI GAMBERI",
//     "descrizione": "(4pz)",
//     "prezzo": "€5.00",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "09",
//     "nome": "BAO",
//     "descrizione": "(pane orientale 2pz)",
//     "prezzo": "€4.00",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "10",
//     "nome": "PATATINE FRITTE ",
//     "descrizione": "",
//     "prezzo": "€3.50",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "11",
//     "nome": "NUVOLETTE DI DRAGO",
//     "descrizione": "",
//     "prezzo": "€2.50",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "12",
//     "nome": "GOMA WAKAME",
//     "descrizione": "(alghe agropiccanti)",
//     "prezzo": "€4.00",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "13",
//     "nome": "EDAMAME",
//     "descrizione": "(baccelli di soia)",
//     "prezzo": "€3.00",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "14",
//     "nome": "CHELE GRANCHIO",
//     "descrizione": "",
//     "prezzo": "€4.50",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "15",
//     "nome": "CROCHETTE DI PATATE",
//     "descrizione": "",
//     "prezzo": "€4.50",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "16",
//     "nome": "SAKE IMOYAKI",
//     "descrizione": "(salmone con purè di patate 2pz)",
//     "prezzo": "€5.00",
//     "categoria": "ANTIPASTI"
//   },
//   {
//     "numero": "17",
//     "nome": "ZUPPA MISO",
//     "descrizione": "",
//     "prezzo": "€3.00",
//     "categoria": "ZUPPA"
//   },
//   {
//     "numero": "18",
//     "nome": "ZUPPA DI MAIS",
//     "descrizione": "(mais, pollo e uova)",
//     "prezzo": "€4.00",
//     "categoria": "ZUPPA"
//   },
//   {
//     "numero": "19",
//     "nome": "ZUPPA DI ASPARAGI E GRANCHIO",
//     "descrizione": "(granchio, asparagi e uova)",
//     "prezzo": "€3.50",
//     "categoria": "ZUPPA"
//   },
//   {
//     "numero": "20",
//     "nome": "ZUPPA AGROPICCANTE",
//     "descrizione": "(verdure, tofu, uova, bambù e pollo)",
//     "prezzo": "€5.00",
//     "categoria": "ZUPPA"
//   },
//   {
//     "numero": "21",
//     "nome": "INSALATA CON GAMBERI",
//     "descrizione": "",
//     "prezzo": "€4.50",
//     "categoria": "INSALATE"
//   },
//   {
//     "numero": "22",
//     "nome": "INSALATA CON PESCE",
//     "descrizione": "(insalata con pesce crudo)",
//     "prezzo": "€8.00",
//     "categoria": "INSALATE"
//   },
//   {
//     "numero": "23",
//     "nome": "INSALATA DI MARE",
//     "descrizione": "",
//     "prezzo": "€8.00",
//     "categoria": "INSALATE"
//   },
//   {
//     "numero": "24",
//     "nome": "MISTO DI MARE FRITTO",
//     "descrizione": "",
//     "prezzo": "€8.00",
//     "categoria": "FRITTURE"
//   },
//   {
//     "numero": "25",
//     "nome": "POLLO FRITTO",
//     "descrizione": "",
//     "prezzo": "€6.00",
//     "categoria": "FRITTURE"
//   },
//   {
//     "numero": "26",
//     "nome": "COTOLETTA DI MAIALE FRITTO",
//     "descrizione": "",
//     "prezzo": "€6.00",
//     "categoria": "FRITTURE"
//   },
//   {
//     "numero": "27",
//     "nome": "TEMPURA DI VERDURE",
//     "descrizione": "",
//     "prezzo": "€8.00",
//     "categoria": "FRITTURE"
//   },
//   {
//     "numero": "28",
//     "nome": "TEMPURA DI GAMBERI",
//     "descrizione": "(4pz)",
//     "prezzo": "€10.00",
//     "categoria": "FRITTURE"
//   },
//   {
//     "numero": "29",
//     "nome": "EBI STICK",
//     "descrizione": "(involtino croccante di gamberi 2pz)",
//     "prezzo": "€6.00",
//     "categoria": "FRITTURE"
//   },
//   {
//     "numero": "30",
//     "nome": "TEMPURA FIOR DI ZUCCA",
//     "descrizione": "(4pz)",
//     "prezzo": "€10.00",
//     "categoria": "FRITTURE"
//   },
//   {
//     "numero": "31",
//     "nome": "SPAGHETTI UDON CON GAMBERI",
//     "descrizione": "",
//     "prezzo": "€8.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "32",
//     "nome": "SPAGHETTI SOBA CON GAMBERI",
//     "descrizione": "",
//     "prezzo": "€8.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "33",
//     "nome": "SPAGHETTI DI RISO CON FRUTTI DI MARE",
//     "descrizione": "",
//     "prezzo": "€6.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "34",
//     "nome": "SPAGHETTI DI RISO CON VERDURE ",
//     "descrizione": "",
//     "prezzo": "€4.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "35",
//     "nome": "LINGUINE CON FRUTTI DI MARE",
//     "descrizione": "",
//     "prezzo": "€6.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "36",
//     "nome": "SPAGHETTI DI SOIA CON GAMBERI ",
//     "descrizione": "",
//     "prezzo": "€6.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "37",
//     "nome": "SPAGHETTI DI SOIA CON VERDURE ",
//     "descrizione": "",
//     "prezzo": "€4.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "38",
//     "nome": "RISO BIANCO",
//     "descrizione": "",
//     "prezzo": "€2.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "39",
//     "nome": "RISO CANTONESE",
//     "descrizione": "",
//     "prezzo": "€4.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "40",
//     "nome": "RISO SALTATO CON FRUTTI DI MARE ",
//     "descrizione": "",
//     "prezzo": "€5.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "41",
//     "nome": "RISO SALTATO CON SALMONE ",
//     "descrizione": "",
//     "prezzo": "€5.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "42",
//     "nome": "RISO SALTATO CON MANZO",
//     "descrizione": "",
//     "prezzo": "€6.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "43",
//     "nome": "RISO AL CURRY ",
//     "descrizione": "",
//     "prezzo": "€5.50",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "44",
//     "nome": "RISO CON ANANAS ",
//     "descrizione": "",
//     "prezzo": "€7.00",
//     "categoria": "PRIMI"
//   },
//   {
//     "numero": "45",
//     "nome": "GAMBERONI ",
//     "descrizione": "(4pz)",
//     "prezzo": "€9.00",
//     "categoria": "GRIGLIE"
//   },
//   {
//     "numero": "46",
//     "nome": "SALMONE",
//     "descrizione": "",
//     "prezzo": "€8.00",
//     "categoria": "GRIGLIE"
//   },
//   {
//     "numero": "47",
//     "nome": "SPIEDINI DI GAMBERI ",
//     "descrizione": "(3pz)",
//     "prezzo": "€7.00",
//     "categoria": "GRIGLIE"
//   },
//   {
//     "numero": "48",
//     "nome": "SPIEDINI DI CALAMARI ",
//     "descrizione": "(3pz)",
//     "prezzo": "€7.00",
//     "categoria": "GRIGLIE"
//   },
//   {
//     "numero": "49",
//     "nome": "SPIEDINI DI POLLO ",
//     "descrizione": "(3pz)",
//     "prezzo": "€6.00",
//     "categoria": "GRIGLIE"
//   },
//   {
//     "numero": "50",
//     "nome": "BRANZINO ",
//     "descrizione": "",
//     "prezzo": "€8.00",
//     "categoria": "GRIGLIE"
//   },
//   {
//     "numero": "51",
//     "nome": "SAKE TATAKI",
//     "descrizione": "(Salmone scottato con salsa lime)",
//     "prezzo": "€8.00",
//     "categoria": "GRIGLIE"
//   },
//   {
//     "numero": "52",
//     "nome": "MAGURO TATAKI",
//     "descrizione": "(Tonno scottato con salsa lime)",
//     "prezzo": "€8.00",
//     "categoria": "GRIGLIE"
//   },
//   {
//     "numero": "53",
//     "nome": "BISTECCA DI MANZO",
//     "descrizione": "",
//     "prezzo": "€7.00",
//     "categoria": "GRIGLIE"
//   },
//   {
//     "numero": "54",
//     "nome": "SALSICCIA ",
//     "descrizione": "(1pz)",
//     "prezzo": "€3.50",
//     "categoria": "GRIGLIE"
//   },
//   {
//     "numero": "55",
//     "nome": "POLLO ALLE MANDORLE ",
//     "descrizione": "",
//     "prezzo": "€6.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "56",
//     "nome": "POLLO PICCANTE ",
//     "descrizione": "",
//     "prezzo": "€4.50",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "57",
//     "nome": "POLLO AL CURRY ",
//     "descrizione": "",
//     "prezzo": "€5.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "58",
//     "nome": "POLLO IN AGRODOLCE ",
//     "descrizione": "",
//     "prezzo": "€5.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "59",
//     "nome": "MANZO CON FUNGHI E BAMBÙ ",
//     "descrizione": "",
//     "prezzo": "€7.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "60",
//     "nome": "MANZO PICCANTE ",
//     "descrizione": "",
//     "prezzo": "€7.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "61",
//     "nome": "MANZO IN SALSA D'OSTRICA",
//     "descrizione": "",
//     "prezzo": "€7.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "62",
//     "nome": "MAIALE IN AGRODOLCE ",
//     "descrizione": "",
//     "prezzo": "€6.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "63",
//     "nome": "MAIALE PICCANTE ",
//     "descrizione": "",
//     "prezzo": "€6.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "64",
//     "nome": "GAMBERI AI CINQUE COLORI ",
//     "descrizione": "(Gamberi saltato con 5 tipi di verdure)",
//     "prezzo": "€7.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "65",
//     "nome": "GAMBERI PICCANTE ",
//     "descrizione": "",
//     "prezzo": "€7.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "66",
//     "nome": "GAMBERI FRITTI ",
//     "descrizione": "",
//     "prezzo": "€7.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "67",
//     "nome": "GAMBERI SALE PEPE",
//     "descrizione": "",
//     "prezzo": "€6.50",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "68",
//     "nome": "OSTRICA FRESCA",
//     "descrizione": "(1pz)",
//     "prezzo": "€2.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "69",
//     "nome": "CAPESSANTE ALLA GRIGLIA",
//     "descrizione": "",
//     "prezzo": "€5.00",
//     "categoria": "SECONDI"
//   },
//   {
//     "numero": "70",
//     "nome": "GERMOGLI DI SOIA SALTATO ",
//     "descrizione": "",
//     "prezzo": "€3.50",
//     "categoria": "VERDURE"
//   },
//   {
//     "numero": "71",
//     "nome": "FUNGHI E BAMBÙ SALTATO ",
//     "descrizione": "",
//     "prezzo": "€3.50",
//     "categoria": "VERDURE"
//   },
//   {
//     "numero": "72",
//     "nome": "VERDURE DI STAGIONE SALTATO ",
//     "descrizione": "",
//     "prezzo": "€3.50",
//     "categoria": "VERDURE"
//   },
//   {
//     "numero": "73",
//     "nome": "SAKE",
//     "descrizione": "(Salmone)",
//     "prezzo": "€3.00",
//     "categoria": "NIGIRI (2pz)"
//   },
//   {
//     "numero": "74",
//     "nome": "MAGURO",
//     "descrizione": "(Tonno)",
//     "prezzo": "€3.50",
//     "categoria": "NIGIRI (2pz)"
//   },
//   {
//     "numero": "75",
//     "nome": "EBI",
//     "descrizione": "(Gamberi)",
//     "prezzo": "€3.00",
//     "categoria": "NIGIRI (2pz)"
//   },
//   {
//     "numero": "76",
//     "nome": "TAKO",
//     "descrizione": "(Polipo)",
//     "prezzo": "€3.50",
//     "categoria": "NIGIRI (2pz)"
//   },
//   {
//     "numero": "77",
//     "nome": "UNAGHI",
//     "descrizione": "(anguilla)",
//     "prezzo": "€3.50",
//     "categoria": "NIGIRI (2pz)"
//   },
//   {
//     "numero": "78",
//     "nome": "SHIROMI",
//     "descrizione": "(Branzino) ",
//     "prezzo": "€3.50",
//     "categoria": "NIGIRI (2pz)"
//   },
//   {
//     "numero": "79",
//     "nome": "SAKE FIRE",
//     "descrizione": "(Salmone scottato )",
//     "prezzo": "€3.00",
//     "categoria": "NIGIRI (2pz)"
//   },
//   {
//     "numero": "80",
//     "nome": "MAGURO FIRE",
//     "descrizione": "(Tonno scottato)",
//     "prezzo": "€3.50",
//     "categoria": "NIGIRI (2pz)"
//   },
//   {
//     "numero": "81",
//     "nome": "TARTARE SALMONE",
//     "descrizione": "",
//     "prezzo": "€5.00",
//     "categoria": "TARTARE"
//   },
//   {
//     "numero": "82",
//     "nome": "TARTARE TONNO",
//     "descrizione": "",
//     "prezzo": "€5.50",
//     "categoria": "TARTARE"
//   },
//   {
//     "numero": "83",
//     "nome": "TARTARE MIX",
//     "descrizione": "(Salmone, tonno branzino)",
//     "prezzo": "€6.50",
//     "categoria": "TARTARE"
//   },
//   {
//     "numero": "84",
//     "nome": "CALIFORNIA",
//     "descrizione": "(Granchio, avocado e maionese)",
//     "prezzo": "€4.00",
//     "categoria": "TEMAKI (cono)"
//   },
//   {
//     "numero": "85",
//     "nome": "SAKE",
//     "descrizione": "(Salmone e avocado)",
//     "prezzo": "€4.00",
//     "categoria": "TEMAKI (cono)"
//   },
//   {
//     "numero": "86",
//     "nome": "SPICY TUNA",
//     "descrizione": "(Tonno piccante)",
//     "prezzo": "€5.00",
//     "categoria": "TEMAKI (cono)"
//   },
//   {
//     "numero": "87",
//     "nome": "SPICY SAKE",
//     "descrizione": "(Salmone piccante)",
//     "prezzo": "€4.00",
//     "categoria": "TEMAKI (cono)"
//   },
//   {
//     "numero": "88",
//     "nome": "MAGURO",
//     "descrizione": "(Tonno e avocado )",
//     "prezzo": "€5.00",
//     "categoria": "TEMAKI (cono)"
//   },
//   {
//     "numero": "89",
//     "nome": "MIURA",
//     "descrizione": "(Salmone grigliato condito e teriyaki )",
//     "prezzo": "€4.00",
//     "categoria": "TEMAKI (cono)"
//   },
//   {
//     "numero": "90",
//     "nome": "EBITEN",
//     "descrizione": "(Gambero fritto e maionese)",
//     "prezzo": "€4.00",
//     "categoria": "TEMAKI (cono)"
//   },
//   {
//     "numero": "91",
//     "nome": "EBI",
//     "descrizione": "(Gambero cotto e maionese)",
//     "prezzo": "€5.00",
//     "categoria": "TEMAKI (cono)"
//   },
//   {
//     "numero": "92",
//     "nome": "TORI",
//     "descrizione": "(Pollo fritto e maionese)",
//     "prezzo": "€4.00",
//     "categoria": "TEMAKI (cono)"
//   },
//   {
//     "numero": "93",
//     "nome": "SAKE",
//     "descrizione": "",
//     "prezzo": "€4.00",
//     "categoria": "ONIGIRI (triangolo di riso con ripieno 1pz)"
//   },
//   {
//     "numero": "94",
//     "nome": "MAGURO COTTO",
//     "descrizione": "",
//     "prezzo": "€3.00",
//     "categoria": "ONIGIRI (triangolo di riso con ripieno 1pz)"
//   },
//   {
//     "numero": "95",
//     "nome": "PHILADELPHIA ",
//     "descrizione": "",
//     "prezzo": "€4.50",
//     "categoria": "ONIGIRI (triangolo di riso con ripieno 1pz)"
//   },
//   {
//     "numero": "96",
//     "nome": "SAKE",
//     "descrizione": "",
//     "prezzo": "€4.00",
//     "categoria": "HOSOMAKI (piccolo rotolo）"
//   },
//   {
//     "numero": "97",
//     "nome": "TONNO",
//     "descrizione": "",
//     "prezzo": "€5.00",
//     "categoria": "HOSOMAKI (piccolo rotolo）"
//   },
//   {
//     "numero": "98",
//     "nome": "EBI",
//     "descrizione": "",
//     "prezzo": "€5.00",
//     "categoria": "HOSOMAKI (piccolo rotolo）"
//   },
//   {
//     "numero": "99",
//     "nome": "CETRIOLO",
//     "descrizione": "",
//     "prezzo": "€3.50",
//     "categoria": "HOSOMAKI (piccolo rotolo）"
//   },
//   {
//     "numero": "100",
//     "nome": "AVOCADO",
//     "descrizione": "",
//     "prezzo": "€3.50",
//     "categoria": "HOSOMAKI (piccolo rotolo）"
//   },
//   {
//     "numero": "101",
//     "nome": "FRITTO CLASSIC",
//     "descrizione": "(Salmone e teriyaki)",
//     "prezzo": "€6.00",
//     "categoria": "HOSOMAKI (piccolo rotolo）"
//   },
//   {
//     "numero": "102",
//     "nome": "FRITTO ANANAS",
//     "descrizione": "(Salmone, Philadelphia e ananas)",
//     "prezzo": "€6.00",
//     "categoria": "HOSOMAKI (piccolo rotolo）"
//   },
//   {
//     "numero": "103",
//     "nome": "FRITTO PHILADELPHIA ",
//     "descrizione": "(Salmone, Philadelphia e teriyaki )",
//     "prezzo": "€6.00",
//     "categoria": "HOSOMAKI (piccolo rotolo）"
//   },
//   {
//     "numero": "104",
//     "nome": "CLASSICO",
//     "descrizione": "(Salmone, granchio, maionese e avocado )",
//     "prezzo": "€6.00",
//     "categoria": "FUTOMAKI ( grande rotolo 5pz)"
//   },
//   {
//     "numero": "105",
//     "nome": "CALIFORNIA",
//     "descrizione": "(Granchio, avocado e maionese )",
//     "prezzo": "€5.50",
//     "categoria": "FUTOMAKI ( grande rotolo 5pz)"
//   },
//   {
//     "numero": "106",
//     "nome": "EBITEN",
//     "descrizione": "(Gambero fritto, maionese e teriyaki )",
//     "prezzo": "€5.50",
//     "categoria": "FUTOMAKI ( grande rotolo 5pz)"
//   },
//   {
//     "numero": "107",
//     "nome": "FRITTO",
//     "descrizione": "(Salmone, Philadelphia, tobiko e teriyaki )",
//     "prezzo": "€6.00",
//     "categoria": "FUTOMAKI ( grande rotolo 5pz)"
//   },
//   {
//     "numero": "108",
//     "nome": "SALMONE",
//     "descrizione": "(Avvolto con alghe nori, salmone)",
//     "prezzo": "€4.00",
//     "categoria": "GUNKAN (bocconcino di riso avvolto 2pz)"
//   },
//   {
//     "numero": "109",
//     "nome": "TONNO",
//     "descrizione": "(Avvolto con alghe nori, tonno)",
//     "prezzo": "€4.00",
//     "categoria": "GUNKAN (bocconcino di riso avvolto 2pz)"
//   },
//   {
//     "numero": "110",
//     "nome": "GIO SALMONE ",
//     "descrizione": "(Avvolto con salmone, tartar salmone)",
//     "prezzo": "€6.00",
//     "categoria": "GUNKAN (bocconcino di riso avvolto 2pz)"
//   },
//   {
//     "numero": "111",
//     "nome": "GIO TONNO",
//     "descrizione": "(Avvolto con tonno, tartar tonno)",
//     "prezzo": "€6.00",
//     "categoria": "GUNKAN (bocconcino di riso avvolto 2pz)"
//   },
//   {
//     "numero": "112",
//     "nome": "TOBIKO",
//     "descrizione": "(Avvolto con alghe nori, uova di pesce)",
//     "prezzo": "€6.00",
//     "categoria": "GUNKAN (bocconcino di riso avvolto 2pz)"
//   },
//   {
//     "numero": "113",
//     "nome": "SAKE",
//     "descrizione": "(Riso con fette di salmone)",
//     "prezzo": "€9.00",
//     "categoria": "CHIRASHI (riso con pesce crudo)"
//   },
//   {
//     "numero": "114",
//     "nome": "TONNO",
//     "descrizione": "(Riso con fette di tonno)",
//     "prezzo": "€11.00",
//     "categoria": "CHIRASHI (riso con pesce crudo)"
//   },
//   {
//     "numero": "115",
//     "nome": "MORIAWASE",
//     "descrizione": "(Riso con pesce misto)",
//     "prezzo": "€11.00",
//     "categoria": "CHIRASHI (riso con pesce crudo)"
//   },
//   {
//     "numero": "116",
//     "nome": "SAKE",
//     "descrizione": "",
//     "prezzo": "€8.00",
//     "categoria": "SASHIMI "
//   },
//   {
//     "numero": "117",
//     "nome": "TONNO",
//     "descrizione": "",
//     "prezzo": "€9.00",
//     "categoria": "SASHIMI "
//   },
//   {
//     "numero": "118",
//     "nome": "MORIAWASE",
//     "descrizione": "(Pesce misto)",
//     "prezzo": "€9.00",
//     "categoria": "SASHIMI "
//   },
//   {
//     "numero": "119",
//     "nome": "PER 1 PERSONA",
//     "descrizione": "(Sushi e sashimi misti 20pz)",
//     "prezzo": "€20.00",
//     "categoria": "BARCA "
//   },
//   {
//     "numero": "120",
//     "nome": "PER 2 PERSONE",
//     "descrizione": "(Sushi e sashimi misti 40pz)",
//     "prezzo": "€38.00",
//     "categoria": "BARCA "
//   },
//   {
//     "numero": "121",
//     "nome": "NIGIRI MIX",
//     "descrizione": "(8pz)",
//     "prezzo": "€12.00",
//     "categoria": "BARCA "
//   },
//   {
//     "numero": "122",
//     "nome": "SAKE",
//     "descrizione": "(Salmone,  avocado e tobiko)",
//     "prezzo": "€8.00",
//     "categoria": "URAMAKI (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "123",
//     "nome": "CALIFORNIA",
//     "descrizione": "(Granchio, sesamo, maionese e avocado )",
//     "prezzo": "€8.00",
//     "categoria": "URAMAKI (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "124",
//     "nome": "MAGURO",
//     "descrizione": "(Tonno crudo, tobiko, avocado)",
//     "prezzo": "€9.00",
//     "categoria": "URAMAKI (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "125",
//     "nome": "MAGURO COTTO",
//     "descrizione": "(Tonno cotto, sesamo, maionese e avocado )",
//     "prezzo": "€8.00",
//     "categoria": "URAMAKI (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "126",
//     "nome": "PHILADELPHIA SPECIAL",
//     "descrizione": "(Philadelphia, sesamo, salmone e avocado )",
//     "prezzo": "€10.00",
//     "categoria": "URAMAKI (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "127",
//     "nome": "VEGETARIAN ",
//     "descrizione": "(Verdure miste, sesamo e Philadelphia )",
//     "prezzo": "€7.00",
//     "categoria": "URAMAKI (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "128",
//     "nome": "SPICY SAKE",
//     "descrizione": "(Tartare di salmone piccante e sesamo",
//     "prezzo": "€8.00",
//     "categoria": "URAMAKI (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "129",
//     "nome": "SPICY TUNA",
//     "descrizione": "(Tartare di tonno piccante e sessmo",
//     "prezzo": "€9.00",
//     "categoria": "URAMAKI (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "130",
//     "nome": "MIURA",
//     "descrizione": "(Salmone cotto, sesamo, Philadelphia e teriyaki )",
//     "prezzo": "€9.00",
//     "categoria": "URAMAKI (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "131",
//     "nome": "EBITEN",
//     "descrizione": "(Gamberi fritto, maionese, sesamo, tobiko, kataifi e teriyaki )",
//     "prezzo": "€8.00",
//     "categoria": "URAMAKI (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "132",
//     "nome": "TORI",
//     "descrizione": "(Pollo fritto, maionese e teriyaki )",
//     "prezzo": "€8.00",
//     "categoria": "URAMAKI (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "133",
//     "nome": "CALI OUT",
//     "descrizione": "(Granchio, avocado e maionese  esterno:  salmone scottato e salsa spicymayo",
//     "prezzo": "€11.00",
//     "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "134",
//     "nome": "ARCOBALENO ",
//     "descrizione": "(Granchio, avocado e maionese  esterno: pesce misto",
//     "prezzo": "€12.00",
//     "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "135",
//     "nome": "DRAGON ROLL",
//     "descrizione": "(Gamberi fritti e maionese esterno: avocado e teriyaki )",
//     "prezzo": "€12.00",
//     "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "136",
//     "nome": "DRAGON RED",
//     "descrizione": "(Gamberi fritti e maionese  esterno: salmone e salsa special)",
//     "prezzo": "€12.00",
//     "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "137",
//     "nome": "CRO ROLL",
//     "descrizione": "(Tartare salmone, maionese e scaglie di tempura)",
//     "prezzo": "€11.00",
//     "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "138",
//     "nome": "ROMANTIC ROLL",
//     "descrizione": "(Tonno cotto e maionese  esterno: tonno crudo)",
//     "prezzo": "€13.00",
//     "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "139",
//     "nome": "FRESH SALMON",
//     "descrizione": "(Rotolo senza alghe, salmone)",
//     "prezzo": "€10.00",
//     "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "140",
//     "nome": "FRESH PHILADELPHIA ",
//     "descrizione": "(Rotolo senza alghe, Philadelphia e salmone )",
//     "prezzo": "€10.00",
//     "categoria": "URAMAKI SPECIALE (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "141",
//     "nome": "CRUNCH CALIFORNIA ",
//     "descrizione": "(Granchio, avocado e maionese  esterno: cipolle fritte, salsa spicymayo e teriyaki",
//     "prezzo": "€12.00",
//     "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "142",
//     "nome": "CRUNCH SAKE",
//     "descrizione": "(Salmone, avocado  esterno: cipolle fritte, salsa spicymayo e teriyaki )",
//     "prezzo": "€12.00",
//     "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "143",
//     "nome": "HOT ROLL",
//     "descrizione": "(Gamberi fritto e maionese  esterno: salmone e salsa piccante )",
//     "prezzo": "€12.00",
//     "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "144",
//     "nome": "MEXICANO ROLL",
//     "descrizione": "(Philadelphia e salmone  esterno: nachos piccante e salsa piccante ",
//     "prezzo": "€12.00",
//     "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "145",
//     "nome": "HORROR ROLL",
//     "descrizione": "(Salmone, gamberi, tobiko fritto e teriyaki )",
//     "prezzo": "€12.00",
//     "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "146",
//     "nome": "ANGEL ROLL",
//     "descrizione": "(Gamberi fritti, Philadelphia e insalata  esterno: salmone scottato, salsa speciale scaglie di tempura)",
//     "prezzo": "€12.00",
//     "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "147",
//     "nome": "AMANDOA ROLL",
//     "descrizione": "(Salmone e avocado  esterno: Philadelphia e mandorle ",
//     "prezzo": "€12.00",
//     "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "148",
//     "nome": "PISTACCHIO ROLL",
//     "descrizione": "(Gamberi fritti e maionese  esterno: pesce misto scottato e pistacchio )",
//     "prezzo": "€14.00",
//     "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "149",
//     "nome": "MANGO ROLL",
//     "descrizione": "(Salmone cotto e Philadelphia  esterno: mango e teriyaki )",
//     "prezzo": "€12.00",
//     "categoria": "URAMAKI CREATIVO (rotolo di riso 8pz)"
//   },
//   {
//     "numero": "150",
//     "nome": "CLASSIC",
//     "descrizione": "(Salmone, avocado, salsa special e tobiko",
//     "prezzo": "€14.00",
//     "categoria": "SAUDATE (rettangolo di riso 8pz)"
//   },
//   {
//     "numero": "151",
//     "nome": "SPICY SAKE",
//     "descrizione": "(Salmone piccante e sesamo)",
//     "prezzo": "€12.00",
//     "categoria": "SAUDATE (rettangolo di riso 8pz)"
//   },
//   {
//     "numero": "152",
//     "nome": "SAKE",
//     "descrizione": "",
//     "prezzo": "€12.00",
//     "categoria": "CARPACCIO"
//   },
//   {
//     "numero": "153",
//     "nome": "TONNO",
//     "descrizione": "",
//     "prezzo": "€12.00",
//     "categoria": "CARPACCIO"
//   },
//   {
//     "numero": "154",
//     "nome": "MORIAWASE",
//     "descrizione": "",
//     "prezzo": "€12.00",
//     "categoria": "CARPACCIO"
//   },
//   {
//     "numero": "",
//     "nome": "BIRRA ASAHI",
//     "descrizione": "",
//     "prezzo": "€5.00",
//     "categoria": "BIBITE"
//   },
//   {
//     "numero": "",
//     "nome": "BIRRA SAPPORO",
//     "descrizione": "",
//     "prezzo": "€6.50",
//     "categoria": "BIBITE"
//   },
//   {
//     "numero": "",
//     "nome": "BIRRA CINESE",
//     "descrizione": "",
//     "prezzo": "€4.00",
//     "categoria": "BIBITE"
//   },
//   {
//     "numero": "",
//     "nome": "BIRRA MORETTI",
//     "descrizione": "",
//     "prezzo": "€4.50",
//     "categoria": "BIBITE"
//   },
//   {
//     "numero": "",
//     "nome": "BIBITE IN LATTINE",
//     "descrizione": "(coca, coca zero, fanta, sprite, Estathé )",
//     "prezzo": "€2.50",
//     "categoria": "BIBITE"
//   },
//   {
//     "numero": "",
//     "nome": "ACQUA ",
//     "descrizione": "(50cl)",
//     "prezzo": "€1.00",
//     "categoria": "BIBITE"
//   }
// ];

// function writePrice(data) {
//   // All column names
//   let columnNames = Object.keys(data[0]);
//   // // Clicked device
//   // let device = document.getElementsByClassName("fetched");
//   // // Get clicked device's id to filter data from the sheet
//   // var deviceId = parseInt(device[0].dataset.id);

//   //console.log(deviceId);

//   // array: [service name], [service price], [used for data fetching], [used svg icon]
//   // let marca = ["Marca", data[deviceId][columnNames[0]], "marca"];
//   // let tipo = ["Tipo Dispositivo", data[deviceId][columnNames[1]], "tipo"];
//   let index = 0;
//   let seq = ["Numero", data[index][columnNames[0]], "numero"];
//   let nome = ["Nome", data[index][columnNames[1]], "nome"];
//   let descrizione = ["Descrizione", data[index][columnNames[2]], "descrizione"];
//   let prezzo = ["Prezzo", data[index][columnNames[3]], "prezzo"];
//   let categoria = ["Categoria", data[index][columnNames[4]], "categoria"];


//   // include all declared arrays into one
//   let allServices = [
//     seq,
//     nome,
//     descrizione,
//     prezzo,
//     categoria
//   ];

//   // console.log(allServices);

//   // clean html before fetching
//   document.getElementById("services").innerHTML = "";

//   // document.getElementById("fetched-device").innerHTML = nome[1];
//   // document.getElementById("fetched-device").classList.remove("placeholder");


//   // let forScroll = document.createElement("div");
//   //   // assign service id to the container
//   // 	forScroll.classList.add("for-scroll")
//   // 	// append each service to the parent
//   // 	document.getElementById("services").appendChild(forScroll);


//   let section = document.getElementById('table');


//   let sum = 256;
//   for (e = 0; e < sum; e++) {
//     // console.log(array[i]);
//     console.log(e);

//     if (e + 1 == 01) {
//       console.log(e);
//       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>ANTIPASTI</h3></div>`);
//     }
//     if (e + 1 == 17) {
//       console.log(e);
//       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>ZUPPA</h3></div>`);
//     }
//     if (e + 1 == 21) {
//       console.log(e);
//       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>INSALATE</h3></div>`);
//     }
//     if (e + 1 == 31) {
//       console.log(e);
//       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>PRIMI</h3></div>`);
//     }
//     if (e + 1 == 45) {
//       console.log(e);
//       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>GRIGLIE</h3></div>`);
//     }
//     if (e + 1 == 55) {
//       console.log(e);
//       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>SECONDI</h3></div>`);
//     }
//     if (e + 1 == 70) {
//       console.log(e);
//       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>VERDURE</h3></div>`);
//     }
//     if (e + 1 == 73) {
//       console.log(e);
//       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>NIGIRI (2pz)</h3></div>`);
//     }
//     if (e + 1 == 81) {
//       console.log(e);
//       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>TARTARE</h3></div>`);
//     }
//     if (e + 1 == 84) {
//       console.log(e);
//       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>TEMAKI (cono)</h3></div>`);
//     }
//     if (e + 1 == 93) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>ONIGIRI (triangolo di riso con ripieno 1pz)</h3></div>`) }
//     if (e + 1 == 96) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>HOSOMAKI/h3></div>`) }
//     if (e + 1 == 104) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>FUTOMAKI (grande rotolo 5pz)</h3></div>`) }
//     if (e + 1 == 108) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>GUNKAN (bocconcino di riso avvolto 2pz)</h3></div>`) }
//     if (e + 1 == 113) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>CHIRASHI (riso con pesce crudo)</h3></div>`) }
//     if (e + 1 == 116) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>SASHIMI</h3></div>`) }
//     if (e + 1 == 119) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>BARCA</h3></div>`) }
//     if (e + 1 == 122) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>URAMAKI (rotolo di riso 8pz)</h3></div>`) }
//     if (e + 1 == 133) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>URAMAKI SPECIALE (rotolo di riso 8pz)				</h3></div>`) }
//     if (e + 1 == 150) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>SAUDATE (rettangolo di riso 8pz)</h3></div>`) }
//     if (e + 1 == 152) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>CARPACCIO</h3></div>`) }
//     if (e + 1 == 155) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>BIBITE</h3></div>`) }

//     console.log('c');
//     section.insertAdjacentHTML('beforeend', `<li><div class='flex'><span>` + data[e][columnNames[0]] + `</span><h4 class='title'>` + data[e][columnNames[1]] + `</h4></div><div class='flex'><p class='descrizione'>` + data[e][columnNames[2]] + `</p><p>` + data[e][columnNames[3]] + `</p></div></li>`);

//   };

//   // for (i = 0; i < sum; i++){

//   //   console.log(i);

//   //         let container = document.createElement("li");
//   //         // assign service id to the container
//   //         // container.id = index;
//   //         container.classList.add("device-container");
//   //         // container.setAttribute('data-id', index);
//   //         // container.setAttribute('data-ccursor', '');

//   //         document.getElementById("table").appendChild(container);
//   //         // assign icon, name, price to each service
//   //         // document.getElementById(index).innerHTML =
//   //         container.innerHTML =
//   //         `<li class='device'><div class='flex'><span>` + data[i][columnNames[0]] + `</span><h4 class='title'>` + data[i][columnNames[1]] + `</h4></div><div class='flex'><p class='descrizione'>` + data[i][columnNames[2]] + `</p><p>` + data[i][columnNames[3]] + `</p></div></li>`;
//   // }

// }

// // function writePrice(data) {
// //   // All column names
// //   let columnNames = Object.keys(data[0]);
// //   // // Clicked device
// //   // let device = document.getElementsByClassName("fetched");
// //   // // Get clicked device's id to filter data from the sheet
// //   // var deviceId = parseInt(device[0].dataset.id);

// //   //console.log(deviceId);

// //   // array: [service name], [service price], [used for data fetching], [used svg icon]
// //   // let marca = ["Marca", data[deviceId][columnNames[0]], "marca"];
// //   // let tipo = ["Tipo Dispositivo", data[deviceId][columnNames[1]], "tipo"];
// //   let index = 0;
// //   let seq = ["Numero", data[index][columnNames[0]], "numero"];
// //   let nome = ["Nome", data[index][columnNames[1]], "nome"];
// //   let descrizione = ["Descrizione", data[index][columnNames[2]], "descrizione"];
// //   let prezzo = ["Prezzo", data[index][columnNames[3]], "prezzo"];
// //   let categoria = ["Categoria", data[index][columnNames[4]], "categoria"];


// //   // include all declared arrays into one
// //   let allServices = [
// //     seq,
// //     nome,
// //     descrizione,
// //     prezzo,
// //     categoria
// //   ];

// //   // console.log(allServices);

// //   // clean html before fetching
// //   document.getElementById("services").innerHTML = "";

// //   // document.getElementById("fetched-device").innerHTML = nome[1];
// //   // document.getElementById("fetched-device").classList.remove("placeholder");


// //   // let forScroll = document.createElement("div");
// //   //   // assign service id to the container
// //   // 	forScroll.classList.add("for-scroll")
// //   // 	// append each service to the parent
// //   // 	document.getElementById("services").appendChild(forScroll);


// //   let section = document.getElementById('table');


// //   let sum = 256;
// //   for (e = 0; e < sum; e++) {
// //     // console.log(array[i]);
// //     console.log(e);

// //     if (e + 1 == 01) {
// //       console.log(e);
// //       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>ANTIPASTI</h3></div>`);
// //     }
// //     if (e + 1 == 17) {
// //       console.log(e);
// //       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>ZUPPA</h3></div>`);
// //     }
// //     if (e + 1 == 21) {
// //       console.log(e);
// //       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>INSALATE</h3></div>`);
// //     }
// //     if (e + 1 == 31) {
// //       console.log(e);
// //       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>PRIMI</h3></div>`);
// //     }
// //     if (e + 1 == 45) {
// //       console.log(e);
// //       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>GRIGLIE</h3></div>`);
// //     }
// //     if (e + 1 == 55) {
// //       console.log(e);
// //       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>SECONDI</h3></div>`);
// //     }
// //     if (e + 1 == 70) {
// //       console.log(e);
// //       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>VERDURE</h3></div>`);
// //     }
// //     if (e + 1 == 73) {
// //       console.log(e);
// //       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>NIGIRI (2pz)</h3></div>`);
// //     }
// //     if (e + 1 == 81) {
// //       console.log(e);
// //       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>TARTARE</h3></div>`);
// //     }
// //     if (e + 1 == 84) {
// //       console.log(e);
// //       section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>TEMAKI (cono)</h3></div>`);
// //     }
// //     if (e + 1 == 93) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>ONIGIRI (triangolo di riso con ripieno 1pz)</h3></div>`) }
// //     if (e + 1 == 96) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>HOSOMAKI/h3></div>`) }
// //     if (e + 1 == 104) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>FUTOMAKI (grande rotolo 5pz)</h3></div>`) }
// //     if (e + 1 == 108) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>GUNKAN (bocconcino di riso avvolto 2pz)</h3></div>`) }
// //     if (e + 1 == 113) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>CHIRASHI (riso con pesce crudo)</h3></div>`) }
// //     if (e + 1 == 116) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>SASHIMI</h3></div>`) }
// //     if (e + 1 == 119) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>BARCA</h3></div>`) }
// //     if (e + 1 == 122) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>URAMAKI (rotolo di riso 8pz)</h3></div>`) }
// //     if (e + 1 == 133) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>URAMAKI SPECIALE (rotolo di riso 8pz)				</h3></div>`) }
// //     if (e + 1 == 150) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>SAUDATE (rettangolo di riso 8pz)</h3></div>`) }
// //     if (e + 1 == 152) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>CARPACCIO</h3></div>`) }
// //     if (e + 1 == 155) { section.insertAdjacentHTML('beforeend', `<div class="categoria"><h3>BIBITE</h3></div>`) }

// //     console.log('c');
// //     section.insertAdjacentHTML('beforeend', `<li><div class='flex'><span>` + data[e][columnNames[0]] + `</span><h4 class='title'>` + data[e][columnNames[1]] + `</h4></div><div class='flex'><p class='descrizione'>` + data[e][columnNames[2]] + `</p><p>` + data[e][columnNames[3]] + `</p></div></li>`);

// //   };

// //   // for (i = 0; i < sum; i++){

// //   //   console.log(i);

// //   //         let container = document.createElement("li");
// //   //         // assign service id to the container
// //   //         // container.id = index;
// //   //         container.classList.add("device-container");
// //   //         // container.setAttribute('data-id', index);
// //   //         // container.setAttribute('data-ccursor', '');

// //   //         document.getElementById("table").appendChild(container);
// //   //         // assign icon, name, price to each service
// //   //         // document.getElementById(index).innerHTML =
// //   //         container.innerHTML =
// //   //         `<li class='device'><div class='flex'><span>` + data[i][columnNames[0]] + `</span><h4 class='title'>` + data[i][columnNames[1]] + `</h4></div><div class='flex'><p class='descrizione'>` + data[i][columnNames[2]] + `</p><p>` + data[i][columnNames[3]] + `</p></div></li>`;
// //   // }

// // }

// document.querySelectorAll(".device-container").forEach((device) => {
//   device.addEventListener("click", (event) => {
//     var deviceId = parseInt(device.dataset.id);

//     // 		var deviceName = this.innerHTML;

//     // 		document.getElementById("fetched-device").innerHTML = deviceName; 

//     // console.log(deviceId);

//     // assigning placeholder
//     document.getElementById("fetched-device").innerHTML = "";
//     document.getElementById("fetched-device").classList.add("placeholder");
//     document.getElementById("services").innerHTML = "<div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div><div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div><div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div>"
//     document.getElementById("pricing").classList.add("show");
//     document.getElementById("block").classList.add("show");

//     document.querySelectorAll(".device-container").forEach((device) => {
//       device.classList.remove("fetched");
//     });

//     document.getElementById(deviceId).classList.add("fetched");


//     init();
//   });
// });

// // document.querySelector("#block, .dragger").addEventListener("click", (event) => {
// // 	document.getElementById('pricing').classList.remove("show");
// // 	document.getElementById('block').classList.remove("show");
// // });




// // let url = array[i][1];
// // let name = array[i][2];






// // init();