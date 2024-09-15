'use strict';

const images = [
  {
    src: 'https://dorsiafinance.co.uk/wp-content/uploads/10-Facts-About-Mercedes-Benz.webp',
    alt: 'car',
    date: '20-05-2011',
    id: 1,
  },
  {
    src: 'https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.jpg?s=612x612&w=0&k=20&c=yEEyxvdyb-jUxnHmr8nXSf9qQPS0WfkhBITLVIaj7OY=',
    alt: 'cat',
    date: '25-02-2011',
    id: 2,
  },
  {
    src: 'https://th-thumbnailer.cdn-si-edu.com/2JOIjX7EMPggkEfnvggGYxocK9o=/fit-in/1600x0/filters:focal(400x267:401x268)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/b0/94/b094a830-dd4e-4aca-8884-5ab2b8a3625b/gettyimages-152621111_resize.jpg',
    alt: 'british cat',
    date: '01-03-2021',
    id: 3,
  },
  {
    src: 'https://d128mjo55rz53e.cloudfront.net/media/images/blog-breed-corgi_1_1.max-500x500.format-jpeg.jpg',
    alt: 'corgi dog',
    date: '09-12-2017',
    id: 4,
  },
  {
    src: 'https://esports.ru/wp-content/uploads/2022/11/1-75.jpg',
    alt: 'zeus',
    date: '18-10-2014',
    id: 5,
  },
  {
    src: 'https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg',
    alt: 'City of London',
    date: '01-04-2015',
    id: 6,
  },
  {
    src: 'https://z-polus.info/wp-content/uploads/2022/04/the-weeknd_d186b_opgh.jpg',
    alt: 'The Weeknd',
    date: '01-01-2020',
    id: 7,
  },
  {
    src: 'https://kor.ill.in.ua/m/1260x900/2581584.jpg',
    alt: 'Lexus',
    date: '31-03-2019',
    id: 8,
  },
  {
    src: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/star-wars-grogu.jpg',
    alt: 'Groru',
    date: '05-08-2022',
    id: 9,
  },
  {
    src: 'https://media.wired.com/photos/63728604691ed08cc4b98976/master/pass/Nike-Swoosh-News-Gear.jpg',
    alt: 'Nike',
    date: '02-02-2024',
    id: 10,
  },
  {
    src: 'https://media.cnn.com/api/v1/images/stellar/prod/180720105352-01-americas-best-island-kauai.jpg?q=w_3365,h_1892,x_0,y_0,c_fill',
    alt: 'island',
    date: '20-11-2022',
    id: 11,
  },
  {
    src: 'https://i.ytimg.com/vi/o-J33AkQja4/maxresdefault.jpg',
    alt: 'breakfest',
    date: '24-07-2021',
    id: 12,
  },
];

const h2 = document.querySelector('.h2');
const gallery = document.createElement('div');
h2.after(gallery);
gallery.classList.add('wrapper');

document.addEventListener('DOMContentLoaded', () => {
  renderGallery(images);
});

gallery.addEventListener('click', () => mixGallery(images));

function mixGallery() {
  const newGallery = getRandomGallery();
  gallery.innerHTML = '';
  renderGallery(newGallery);
}

function getRandomGallery() {
  let newImagesList = images;

  for (let i = 0; i < newImagesList.length; i++) {
    const j = Math.floor(Math.random() * newImagesList.length);
    [newImagesList[i], newImagesList[j]] = [newImagesList[j], newImagesList[i]];
  }
  return newImagesList;
}

function renderGallery(images) {
  images.forEach((img) => {
    const pic = document.createElement('img');
    pic.style.margin = '15px';
    pic.classList.add('picture');
    pic.dataset.date = img.date;
    pic.setAttribute('src', img.src);
    pic.setAttribute('alt', img.alt);
    pic.setAttribute('width', '400px');
    gallery.appendChild(pic);
  });
}
