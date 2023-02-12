import "./App.css";
import Homepage from "./components/Homepage";
import CarTypes from "./components/CarTypes";
import Origin from "./components/Origin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const carTypes1 = [
    {
      id: 1,
      name: "Limuzina",
      about:
        "Limuzina je osobni automobil s četverim vratima i prtljažnikom odvojenim od putničke kabine.Limuzina je bilo koji automobil takvog oblika karoserije, no tom se riječju razgovorno često opisuju produžene stretch limuzine kakve su česte u SAD-u, a razlog tome je što se tamo za obične limuzine koristi isključivo pojam sedan.",
    },
    {
      id: 2,
      name: "Karavan",
      about:
        "Karavan je sobni auto sa pet vrata izveden iz limuzine s kojom dijeli veličinu i platformu, ali za razliku od nje ima krov koji se nastavlja sve do stražnjeg kraja, a prtljažnik se nalazi unutar putničke kabine iza stražnjih sjedala. To mu omogućuje utovar većih ili veće količine predmeta u odnosu na istovjetnu limuzinu.",
    },
    {
      id: 3,
      name: "Kabriolet",
      about:
        'Kabriolet je bilo koji osobni automobil s metalnim ili platnenim krovom, kojeg je po potrebi moguće električnim ili ručnim putem sklopiti iza putničke kabine ili u prtljažnik. Međutim, za neke vrste kabrioleta često se koriste i zasebni nazivi, pa se tako sportski kabriolet s dva sjedala naziva roadster, spider ili spyder.',
    },
    {
      id: 4,
      name: "Kupe",
      about:
        "Kupe je osobni automobil trovolumenskog oblika karoserije s dvoja bočna vrata i prtljažnikom odvojenim od putničke kabine. Naziv kupe potječe od francuske riječi coupé.",
    },
  ];
  const carTypes2 = [
    {
      id: 5,
      name: "Dizel",
      about:
        "Limuzina je osobni automobil s četverim vratima i prtljažnikom odvojenim od putničke kabine.Limuzina je bilo koji automobil takvog oblika karoserije, no tom se riječju razgovorno često opisuju produžene stretch limuzine kakve su česte u SAD-u, a razlog tome je što se tamo za obične limuzine koristi isključivo pojam sedan.",
    },
    {
      id: 6,
      name: "Benzin",
      about:
        "Karavan je sobni auto sa pet vrata izveden iz limuzine s kojom dijeli veličinu i platformu, ali za razliku od nje ima krov koji se nastavlja sve do stražnjeg kraja, a prtljažnik se nalazi unutar putničke kabine iza stražnjih sjedala. To mu omogućuje utovar većih ili veće količine predmeta u odnosu na istovjetnu limuzinu.",
    },
    {
      id: 7,
      name: "Hibrid",
      about:
        'Kabriolet je bilo koji osobni automobil s metalnim ili platnenim krovom, kojeg je po potrebi moguće električnim ili ručnim putem sklopiti iza putničke kabine ili u prtljažnik. Međutim, za neke vrste kabrioleta često se koriste i zasebni nazivi, pa se tako sportski kabriolet s dva sjedala naziva roadster, spider ili spyder.',
    },
    {
      id: 8,
      name: "Elektricni",
      about:
        "Kupe je osobni automobil trovolumenskog oblika karoserije s dvoja bočna vrata i prtljažnikom odvojenim od putničke kabine. Naziv kupe potječe od francuske riječi coupé.",
    },
  ];
  const [page, setPage] = useState(1);
  function changePage(page) {
    setPage(page);
  }
  const carItalija = [
    {
      origin: "Italija",
      id: 1,
      name: "Fiat",
      about:
        "Fijat (FIAT) je italijanski koncern sa sedištem u Torinu. FIAT je skraćenica od ital. Fabbrica Italiana Automobili Torino, što u prevodu znači: „Italijanska fabrika automobila Torino“. Osnovan je 11. jula 1899. godine pod imenom ital. Società Anonima Fabbrica Italiana Automobili Torino. Danas je Fijat najveći proizvođač automobila u Italiji sa širokim spektrom modela, kao što su panda, punto, bravo, idea, kroma ili doblo.",
    },
    {
      origin: "Italija",
      id: 2,
      name: "Alfa romeo",
      about:
        "Alfa Romeo je čuveni italijanski proizvođač automobila koji se proslavio kroz istoriju auto sporta. Kompanija je osnovana 24. juna 1910. godine u Milanu. U auto sportu je prisutna još od 1911-te godine. Od 1932-1986-te godine je bila u vlasništvu države, a 1986. postaje članica FIAT grupacije. Februara 2007. godine došlo je do reorganizacije unutar Fijatove grupacije., i tako nastaje Alfa Romeo automobili A.D.",
    },
  ];
  const carNemacka = [
    {
      origin: "Nemacka",
      id: 3,
      name: "Volkswagen",
      about:
        'Folksvagen (Volkswagen) je nemački proizvođač automobila sa sedištem u Volfsburgu. Vodeća je marka Folksvagen grupe i najveći je proizvođač automobila na svetu. Preduzeće je osnovano 1937. i proizvodi najprodavanije automobile istoimene Folksvagen grupacije, holding preduzeća koje je osnovano 1975. s ciljem daljnjeg razvoja ove kompanije. Folksvagen ima tri automobila na spisku 10 najprodavanijih automobila svih vremena, a to su: Golf, Buba i Pasat.',
    },
    {
      origin: "Nemacka",
      id: 4,
      name: "BMW",
      about:
        "BMW je multinacionalna kompanija koja trenutno proizvodi luksuzne i sportske automobile i motocikle, a takođe je proizvodila i avionske motore do 1945. godine. Kompanija je osnovana 1916. godine i sedište joj je u Minhenu (Bavarska). BMW proizvodi motorna vozila u Nemačkoj, Brazilu, Kini, Indiji, Južnoj Africi, Ujedinjenom Kraljevstvu i Sjedinjenim Državama. Godine 2017, BMW je bio četrnaesti najveći proizvođač motornih vozila na svetu — sa 2.505.741 proizvedenim automobilom.",
    },
    {
      origin: "Nemacka",
      id: 5,
      name: "Audi",
      about:
        "Audi je njemački proizvođač luksuznih, sportskih i supersport automobila i član Folksvagen grupacije sa sjedištem u Ingolštatu, u Bavarskoj. Folksvagen je obnovio brend, lansiranjem modela Audi F103, 1965. godine. Do 1966. godine, postaje vlasnik 99,55% akcija kompanije, kupujući u fazama akcije od pređašnjeg vlasnika Dajmler-Benca. Ime kompanije potiče od prezimena osnivača Augusta Horha. Osnivač je nazvao kompaniju, prevodeći svoje prezime na latinski.",
    },
    {
      origin: "Nemacka",
      id: 6,
      name: "Mercedes",
      about:
        "Mercedes-Benc (Mercedes-Benz) je nemački proizvođač uglavnom luksuznih automobila. Prvobitni naziv preduzeća bio je Dajmler-Benc, danas je uobičajeno da se koristi samo Mercedes. Osim automobila Mercedes-Benc proizvodi i autobuse, kamione, te dostavna vozila.",
    },
  ];
  const carFrancuska = [
    {
      origin: "Francuska",
      id: 7,
      name: "Renault",
      about:
        "Reno (Renault) je francuski proizvođač automobila. Kompanija je osnovana krajem 19. veka, 25. februara 1899. godine. Fabrika, takođe, proizvodi i kombi vozila, autobuse, traktore i kamione. Od početka 1918. godine do kraja 1945. godine kompanija je proizvodila tenkove. Poznata je po svojim modelima putničkih automobila tipa megan, klio i drugih. U svom sastavu Reno poseduje rumunsku auto industriju Dačija i južnokorejski Reno Samsung motors. U 2001. godini Renoova poljoprivredna vozila su postala 100% vlasništvo nemačkog proizvođača poljoprivrednih sredstava Klas.",
    },
    {
      origin: "Francuska",
      id: 8,
      name: "Peugeot",
      about:
        "Pežo (Peugeot) je francusko preduzeće automobila, osnovano 1896. godine. Kompaniju je osnovao Armand Pežo, a sedište je u Parizu. Deo je PSA grupacije.",
    },
  ];
  const [origin, setOrigin] = useState("");
  function changeOrigin(origin) {
    setOrigin(origin);
  }
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/types"
          element={
            <CarTypes
              carTypes1={carTypes1}
              carTypes2={carTypes2}
              changePage={changePage}
              page={page}
            />
          }
        />
        <Route
          path="/region"
          element={
            <Origin
              carNemacka={carNemacka}
              carFrancuska={carFrancuska}
              carItalija={carItalija}
              changeOrigin={changeOrigin}
              origin={origin}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
