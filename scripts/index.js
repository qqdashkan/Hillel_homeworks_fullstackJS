// import { searchCollection } from "./mock.js"
import { debounce } from './helpers/debounce.js';
import {
  createPreviewUrl,
  createDetailedInfoUrl,
  createPreviewUrlbyYear,
  createPreviewUrlbyType,
} from './helpers/urls.js';
import {
  createTile,
  createPreviewItem,
  renderMediaInfoPage,
  renderMainComponent,
  renderNotFound,
} from './components.js';
import { createCollectionList } from './helpers/createCollectionList.js';
import {
  getSearchElement,
  getPostersContainer,
  getPreviewList,
} from './helpers/getElements.js';

function hidePreview() {
  const previewList = getPreviewList();
  previewList.classList.add('hidden');
  previewList.innerHTML = '';
}

function hidePreviewAndCreatePosters(previewResponse) {
  hidePreview();

  const collection = createCollectionList(previewResponse.data, createTile);
  const list = getPostersContainer();
  list.innerHTML = collection;
}

function renderFilmsList(response) {
  const collection = createCollectionList(response, createPreviewItem, true, 5);
  const previewList = getPreviewList();
  previewList.classList.remove('hidden');
  previewList.innerHTML = collection;
}

function handleInputSearch(previewResponse) {
  return async function (event) {
    const value = event.target.value;
    const yearValue = document.getElementById('year').value;
    const moviesBox = document.getElementById('movies').checked;
    const seriesBox = document.getElementById('series').checked;
    let expr = '';

    if (moviesBox) {
      expr = 'movie';
    } else if (seriesBox) {
      expr = 'series';
    } else if (yearValue) {
      expr = 'year';
    }

    if (value.length > 2) {
      switch (expr) {
        case 'movie':
          const movies = await fetch(createPreviewUrlbyType(value, expr));
          const moviesResponse = await movies.json();
          previewResponse.data = moviesResponse;
          renderFilmsList(moviesResponse);
          break;
        case 'series':
          const series = await fetch(createPreviewUrlbyType(value, expr));
          const seriesResponse = await series.json();
          previewResponse.data = seriesResponse;
          renderFilmsList(seriesResponse);
          break;
        case 'year':
          const filmsByYear = await fetch(
            createPreviewUrlbyYear(value, yearValue)
          );
          const filmsResponse = await filmsByYear.json();
          previewResponse.data = filmsResponse;
          renderFilmsList(filmsResponse);
          break;
        default:
          const data = await fetch(createPreviewUrl(value));
          const dataResponse = await data.json();
          previewResponse.data = dataResponse;
          renderFilmsList(dataResponse);
      }
    } else hidePreview();
  };
}

function handleSearch(previewResponse) {
  return function (event) {
    event.stopImmediatePropagation();
    const value = event.target.value;
    if (!value) {
      hidePreview();
    }
    const check = document.getElementById('movies');
    if (check.checked) {
      const collection = createCollectionList(previewResponse.data, createTile);
    }

    hidePreviewAndCreatePosters(previewResponse);
  };
}

function handleSearchButton(previewResponse) {
  return function (event) {
    const search = getSearchElement();
    const value = search.value;

    if (!value) {
      return false;
    }

    hidePreviewAndCreatePosters(previewResponse);
  };
}

function app() {
  let previewResponse = {};
  const search = getSearchElement();
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', handleSearchButton(previewResponse));
  search.addEventListener('search', handleSearch(previewResponse));
  search.addEventListener(
    'input',
    debounce(handleInputSearch(previewResponse), 500)
  );
}

function previewMediaInfo() {
  const previewList = document.getElementById('preview-list');
  previewList.addEventListener('click', getMediaInfo);

  function getMediaInfo(event) {
    const item = event.target.matches('.preview-item');
    if (item) {
      const id = event.target.dataset.id;
      history.pushState(null, null, `/media?id=${id}`);
      renderMediaPage();
    }
  }
}

function previewPosterInfo() {
  const previewPoster = document.getElementById('posters');
  previewPoster.addEventListener('click', getMediaInfo);

  function getMediaInfo(event) {
    const item = event.target.parentElement.matches('.movie-card');
    if (item) {
      const id = event.target.parentElement.dataset.id;
      history.pushState(null, null, `/media?id=${id}`);
      renderMediaPage();
    }
  }
}

function handleReturnToHome() {
  history.pushState(null, null, `/`);
  renderMainPage();
}

async function renderMediaPage() {
  try {
    const id = location.search.slice(4);
    const data = await fetch(createDetailedInfoUrl(id));
    const response = await data.json();
    const {
      Title: title,
      Released: released,
      Country: country,
      Actors: actors,
      Plot: plot,
      Poster: poster,
    } = response;
    renderMediaInfoPage({ title, released, country, actors, plot, poster });

    document
      .getElementById('back-to-home')
      .addEventListener('click', handleReturnToHome);
  } catch (error) {
    renderNotFound();
  }
}

function renderMainPage() {
  renderMainComponent();
  app();
  previewMediaInfo();
  previewPosterInfo();
}

function router() {
  if (location.pathname.startsWith('/media')) {
    renderMediaPage();
  } else {
    renderMainPage();
  }
}

router();
