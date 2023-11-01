'use strict';

const catList = document.querySelector('.js-list');

const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc =
  'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';
const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDesc =
  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';
const kittenThreeImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Maine_Coon_Guardian_Angel_of_Canadian_Summer_8_months_c.jpg/1024px-Maine_Coon_Guardian_Angel_of_Canadian_Summer_8_months_c.jpg';
const kittenThreeName = 'Cielo';
const kittenThreeDesc =
  'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src=${kittenOneImage}
    alt="gatito"
  />
  <h3 class="card_title">${kittenOneName}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">
  ${kittenOneDesc}
   </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src=${kittenTwoImage}
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenTwoName}</h3>
<h4 class="card_race">${kittenTwoRace}</h4>
<p class="card_description">
${kittenTwoDesc}
</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src=${kittenThreeImage}
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenThreeName}</h3>
<h4 class="card_race">${kittenThreeRace}</h4>
<p class="card_description">
${kittenThreeDesc}
</p>
</li>`;

catList.innerHTML = kittenOne + kittenTwo + kittenThree;

/*const sectionB = document.querySelector('.section-b');

sectionB.classList.add('hidden');
sectionB.classList.remove('hidden');*/
