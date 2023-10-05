import { BASE_API } from '../../modules/config.js';
import getData from '../../modules/helpers/getData.js';

const loadProducts = async () => {
  try {
    const fetchQuery = await fetch(`${BASE_API}/products`);

    if (!fetchQuery.ok)
      throw new Error(
        `Message: "${fetchQuery.statusText}" & Status:"${fetchQuery.status}"`
      );
  } catch (error) {
    console.error(error);
  }
};

const loadUser = async () => {
  const currentUser = await getData('loggedUser');
  setTimeout(() => {
    if (currentUser.length > 0) {
      location.assign('http://127.0.0.1:5500/src/home.html');
    } else {
      location.assign('http://127.0.0.1:5500/src/onboarding-welcome.html');
    }
  }, 1000);
};

window.addEventListener('DOMContentLoaded', async () => {
  await loadProducts();
  await loadUser();
});
