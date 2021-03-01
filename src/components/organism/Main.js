import React from 'react';
import MainContent from '../modules/MainContent/MainContent';
import globe from '../../images/globe.png';
import hands from '../../images/hands.png';
import film from '../../images/film.png';
import gaaa from '../../images/gaaa.mp4';

const mainContent = [
  {
    title: 'Dla kogo?',
    img: globe,
    name: 'forWhom',
    text:
      'Dedykowane nauczycielom posiadającym przygotowanie pedagogiczne, którzy chcą uzyskać merytoryczne i metodyczne przygotowanie do nauczania kolejnego przedmiotu - Geografii.',
    additionalText:
      'Studia adresowane są do osób legitymujących się wyższym wykształceniem na poziomie studiów licencjackim o specjalnościach nadających kwalifikacje nauczycielskie i przygotowanie pedagogiczne, lub słuchaczy legitymujących sie wyższym wykształceniem na poziomie studiów magisterskich nadających kwalifikacje nauczycielskie i przygotowanie pedagogiczne, zgodnie z Rozporządzeniem Ministra Edukacji Narodowej z dnia 1 sierpnia 2017 r. w sprawie szczegółowych kwalifikacji wymaganych od nauczycieli(Dz.U. 2017 poz.1575)',
    additionalText2: 'Wymagane od kandydata:',
    list: ['Ukończone studia wyższe', 'Przygotowanie pedagogiczne'],
  },
  {
    title: 'Po co?',
    img: hands,
    name: 'Why',
    text:
      'UW wie co zrobić, by programy proponowanych kierunków studiów były jak najbardziej atrakcyjne z biznesowego punktu widzenia. Dow sółpracy zapraszamy przedsiębiorców, trenerów, doświadczonych praktyków. Dbamy o to, żeby nasi studenci korzystali z doświadczenia i wiedzy osób, które odniosły w życiu zawodowy sukces. Dążymy do tego by wybierający naszą uczelnię już w trakcie studiów mieli kontakt z jak największą liczbą pracodawców i praktyków biznesu ponieważ wiemy, że pomoże im to w zdobyciu wielu potrzebnych kwalifikacji oraz umiejętności, ktore zaprocentują w każdym miejscu pracy a także zainspiruje do poszerzania swoich kompetencji.',
    additionalText: '',
  },
  {
    title: 'Z kim?',
    img: film,
    name: 'withWho',
    text:
      'Ciekawość jest najpotężniejszą cechą ludzką, która popycha ludzi do ciągłego rozwoju. CDV to miejsce, w którym studenci z zainteresowaniem i z przyejmnością zdobywaja wiedzę. Zarówno studenci, absolwenci, jak i pracownicy to osoby nie tylko ciekawe świata, ale także pełne pasji w odkrywaniu nowych rzeczy i w pozytywny sposób wpływające na swoje otoczenie.',
    additionalText:
      'Nasze kierunki studiów są interesujące i innowacyjne, tworzone we współpracy z pracodawcami oraz na podstawie trendów w światowej gospodarce i kierunku zmian na dynamicznym rynku pracy. Nasi absolwenci znajdują pracę zgodną ze swoimi zainteresowaniami i wykształceniem.',
    video: { gaaa },
  },
];

const Main = () => {
  return (
    <main>
      {mainContent.map((element) => (
        <MainContent key={element.title} element={element} />
      ))}
    </main>
  );
};

export default Main;
