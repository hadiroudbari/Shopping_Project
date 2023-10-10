import * as DOM from '../../modules/DOM.js';
import {
  getProductID,
  checkProductDetails,
  getSearchQuery,
} from '../../modules/helpers.js';
import getData from '../../modules/model/getData.js';
import renderProductDetails from '../../modules/view/renderProductDetails.js';
import renderProductSize from '../../modules/view/renderProductSize.js';
import renderProductColor from '../../modules/view/renderProductColor.js';
import renderProductImage from '../../modules/view/renderProductImage.js';
import { selectProductSizeOption } from '../../modules/view/renderProductSize.js';
import { numberFormatter } from '../../modules/model/formatter.js';
import addToCart from '../../modules/model/addToCart.js';
import editData from '../../modules/model/editData.js';
import showToast from '../../modules/model/showToast.js';
import addToSearch from '../../modules/model/addToSearch.js';

const productID = getProductID();
if (getSearchQuery()) addToSearch(getProductID());
let product;

const showProductDetails = async () => {
  const productArray = await getData('products', 'id', productID);
  product = productArray[0];
  renderProductDetails(DOM.detailsContainer, product);
};

swiper.on('slideChange', function () {
  renderProductColor(product, swiper.activeIndex + 1);
  renderProductSize(
    product,
    product.images[swiper.activeIndex].color,
    +(swiper.activeIndex + 1)
  );
});

DOM.favoriteBtn.addEventListener('click', async e => {
  if (e.target.name === 'heart-outline') {
    await editData('products', productID, {
      favorite: true,
    });
    e.target.name = 'heart';
    e.target.classList.add('text-red-500');
  } else {
    await editData('products', productID, {
      favorite: false,
    });
    e.target.name = 'heart-outline';
    e.target.classList.remove('text-red-500');
  }
});

DOM.detailsMainBox.addEventListener('click', e => {
  e.preventDefault();

  // Description
  if (e.target.id === 'show__more--description') {
    const parentEl = e.target.closest('.description__text');
    const moreDescription = parentEl.querySelector('.more__description');

    if (moreDescription.classList.contains('hidden')) {
      moreDescription.classList.remove('hidden');
      moreDescription.classList.add('inline');
      e.target.textContent = ' view less...';
    } else {
      moreDescription.classList.remove('inline');
      moreDescription.classList.add('hidden');
      e.target.textContent = ' view more...';
    }
  }

  // Color & Size
  if (e.target.classList.contains('product__color')) {
    renderProductSize(product, e.target.dataset.color, +e.target.dataset.id);
    renderProductColor(product, +e.target.dataset.id);
    renderProductImage(product, +e.target.dataset.id);
    DOM.productOrderCount.textContent = 1;
    DOM.productDetailsPrice.textContent = numberFormatter(product.price);
    DOM.stockAlert.dataset.count = '';
    checkProductDetails();
  }

  if (e.target.classList.contains('product__size')) {
    selectProductSizeOption(
      product,
      e.target,
      +e.target.dataset.id,
      +e.target.dataset.size
    );
    DOM.productOrderCount.textContent = 1;
    DOM.productDetailsPrice.textContent = numberFormatter(product.price);
    checkProductDetails();
  }

  if (
    e.target.id === 'product__order--plus' ||
    e.target.id === 'product__order--minus'
  ) {
    if (!DOM.stockAlert.dataset.count) {
      DOM.stockAlert.classList.remove(
        'hidden',
        'text-black',
        'text-orange-500'
      );
      DOM.stockAlert.classList.add('text-red-500');
      DOM.stockAlert.textContent = 'First, You should choose a size';
    } else if (DOM.stockAlert.dataset.count > 0) {
      console.log(e.target);
      if (e.target.id === 'product__order--plus') {
        if (
          +DOM.productOrderCount.textContent === +DOM.stockAlert.dataset.count
        )
          return;
        DOM.productOrderCount.textContent =
          +DOM.productOrderCount.textContent + 1;
      } else if (e.target.id === 'product__order--minus') {
        if (+DOM.productOrderCount.textContent === 1) return;
        DOM.productOrderCount.textContent =
          +DOM.productOrderCount.textContent - 1;
      }
    }
    DOM.productDetailsPrice.textContent = numberFormatter(
      product.price,
      DOM.productOrderCount.textContent
    );
  }
});

DOM.addToCartBtn.addEventListener('mouseover', e => {
  if (e.target.disabled === true) {
    if (product.stockStatus) {
      DOM.stockAlert.classList.remove(
        'hidden',
        'text-black',
        'text-orange-500'
      );
      DOM.stockAlert.classList.add('text-red-500');
      DOM.stockAlert.textContent = 'First, You should choose a size';
    }
  }
});

DOM.addToCartBtn.addEventListener('click', async e => {
  e.preventDefault();
  const user = await getData('loggedUser');

  const newProduct = {
    title: product.title,
    imgSrc: product.images[swiper.activeIndex].imgSrc,
    brand: product.brand,
    stock: +DOM.stockAlert.dataset.count,
    size: checkProductDetails().size,
    color: checkProductDetails().color,
    colorName: checkProductDetails().colorName,
    count: +DOM.productOrderCount.textContent,
    price: product.price,
    productId: product.id,
    userId: user[0].id,
  };

  await addToCart(newProduct);
  showToast(
    'Product Successfully added to your Cart',
    1,
    'http://127.0.0.1:5500/src/cart.html',
    'linear-gradient(to right, #00b09b, #96c93d)'
  );
});

const init = async () => {
  await showProductDetails();
  checkProductDetails();
};
window.addEventListener('DOMContentLoaded', init);
