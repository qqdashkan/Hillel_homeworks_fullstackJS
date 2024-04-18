'use strict';

const images = [{
    src: 'https://dorsiafinance.co.uk/wp-content/uploads/10-Facts-About-Mercedes-Benz.webp',
    alt: "car",
    date: '20-05-2011'
  },{
    src: 'https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.jpg?s=612x612&w=0&k=20&c=yEEyxvdyb-jUxnHmr8nXSf9qQPS0WfkhBITLVIaj7OY=',
    alt: "cat",
    date: '25-02-2011'
  }, {
    src: 'https://th-thumbnailer.cdn-si-edu.com/2JOIjX7EMPggkEfnvggGYxocK9o=/fit-in/1600x0/filters:focal(400x267:401x268)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/b0/94/b094a830-dd4e-4aca-8884-5ab2b8a3625b/gettyimages-152621111_resize.jpg',
    alt: "british cat",
    date: '01-03-2021'
  },{
    src: 'https://d128mjo55rz53e.cloudfront.net/media/images/blog-breed-corgi_1_1.max-500x500.format-jpeg.jpg',
    alt: "corgi dog",
    date: '09-12-2017'
  }, {
    src: 'https://avatars.dzeninfra.ru/get-zen_doc/3719229/pub_5f72f6b98eec670acab179e9_5f72f94aff51c40043be4103/smart_quality_scale_1200',
    alt: "zeus",
    date: '18-10-2014'
  },{
    src: 'https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg',
    alt: "City of London",
    date: '01-04-2015'
  }, {
    src: 'https://cdnn21.img.ria.ru/images/07e6/01/0b/1767303684_0:0:2255:1268_1920x0_80_0_0_ffc3b7925eb180feb5829458d756c771.jpg',
    alt: "The Weeknd",
    date: '01-01-2020'
  },{
    src: 'https://kolesa-uploads.ru/-/2a751a9d-7f0d-495f-81b1-6ce7f46dd974/my23-lexus-uxh-fsport-016-highres.jpg',
    alt: "Lexus",
    date: '31-03-2019'
  }, {
    src: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/star-wars-grogu.jpg',
    alt: "Groru",
    date: '05-08-2022'
  },{
    src: 'https://media.wired.com/photos/63728604691ed08cc4b98976/master/pass/Nike-Swoosh-News-Gear.jpg',
    alt: "Nike",
    date: '02-02-2024'
  }, {
    src: 'https://avatars.mds.yandex.net/get-marketcms/1533751/img-edfa3def-f66e-46c4-84e8-e76a20f7ff27.jpeg/optimize',
    alt: "island",
    date: '20-11-2022'
  },{
    src: 'https://i.ytimg.com/vi/o-J33AkQja4/maxresdefault.jpg',
    alt: "breakfest",
    date: '24-07-2021'
  }];


const h1 = document.querySelector('.h1');


const gallery = document.createElement('div');
h1.after(gallery);
gallery.classList.add('wrapper');

images.forEach(img => {
    const pic = document.createElement('img');
    pic.style.margin = '15px';
    pic.classList.add('picture');
    pic.dataset.date = img.date;
    pic.setAttribute('src', img.src);
    pic.setAttribute('alt', img.alt);
    pic.setAttribute('width', '400px');
    gallery.appendChild(pic);
});

gallery.addEventListener('click', function (event) {
  if(event.target.closest('img')) {
    const item = event.target;
    const src = item.getAttribute('src');
    const info = item.dataset.date;
    openModalWindow(src, info);

    const modalWindow = document.querySelector('.modal-window');
    const cover = document.querySelector('.cover');

    modalWindow.addEventListener('click', function (event) {
      if(event.target.className = 'close-item') {
        document.body.removeChild(modalWindow);
        document.body.removeChild(cover);
      };
    });
  };
});

function openModalWindow(src, info) {
  const modal = document.createElement('div');
  modal.classList.add('modal-window');
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', 'img');
  img.style.minWidth = '350px';
  h1.after(modal);
  modal.appendChild(img);
  const cover = document.createElement('div');
  document.body.appendChild(cover);
  cover.classList.add('cover');

  const closeElement = document.createElement('span');
  closeElement.className = 'close-item';
  closeElement.innerHTML = '<i class="fa fa-remove"></i>';
  img.before(closeElement);

  const description = document.createElement('p');
  description.className = 'info';
  description.textContent = 'Дата публікації: ' + info;
  img.after(description);

}

