// LOGIN
export const loginForm = document.querySelector('#form');
export const loginFormBtn = document.querySelector('#login');
export const loginInputs = document.querySelectorAll('.input__box input');
export const loginInputUsername = document.querySelector('#username');
export const loginInputPassword = document.querySelector('#password');
export const loginCheckBoxRemember = document.querySelector('#remember');
export const loginFindPassword = document.querySelector('#find__password');

// REGISTER
export const registerForm = document.querySelector('#form');
export const registerFormBtn = document.querySelector('#register');
export const registerInputs = document.querySelectorAll('.input__box input');
export const registerInputUsername = document.querySelector('#username');
export const registerInputFirstname = document.querySelector('#firstname');
export const registerInputLastname = document.querySelector('#lastname');
export const registerInputEmail = document.querySelector('#email');
export const registerInputPassword = document.querySelector('#password');
export const registerInputPasswordRepeat =
  document.querySelector('#password__second');
export const registerCheckBoxRemember = document.querySelector('#conditions');
export const registerWarningPass = document.querySelector(
  '.warning__register--password'
);
export const registerUsernameAlert = document.querySelector(
  '#input__alert--username'
);
export const registerEmailAlert = document.querySelector(
  '#input__alert--email'
);
export const registerInvalidEmail = document.querySelector('#invalid__email');
export const registerInputBoxUsername = document.querySelector(
  '#input__box--username'
);
export const registerInputBoxEmail =
  document.querySelector('#input__box--email');

// HOME
export const userImage = document.querySelector('#user__image');
export const userFullname = document.querySelector('#user__fullname');
export const inputSearch = document.querySelector('#input__search');
export const brandsBox = document.querySelector('#brands__box');
export const filterBox = document.querySelector('#filter__box');
export const homeProducts = document.querySelector('#home__products');
export const exitUser = document.querySelector('#exit__user');
export const spinner = document.querySelector('#spinner');

// HOME -- BRAND
export const brandTitle = document.querySelector('#brand__title');
export const homeBrandProducts = document.querySelector(
  '#home__brand--products'
);

// HOME -- POPULAR
export const homePopularProducts = document.querySelector(
  '#home__popular--products'
);

// WISH
export const wishProducts = document.querySelector('#wish__products');

// PAGE -- DETAILS
export const detailsContainer = document.querySelector('#details__container');
export const detailsMainBox = document.querySelector('#product__details--main');
export const productOrderMinus = document.querySelector(
  '#product__order--minus'
);
export const productOrderPlus = document.querySelector('#product__order--plus');
export const productOrderCount = document.querySelector(
  '#product__order--count'
);
export const productDetailsPrice = document.querySelector(
  '#product__details--footer .price'
);
export const addToCartBtn = document.querySelector('#add__to--cart');
export const favoriteBtn = document.querySelector('#favorite__btn');
export const stockAlert = document.querySelector('#stock__alert');

// CART
export const cartBox = document.querySelector('#cart__box');
export const overlay = document.querySelector('#overlay');
export const modal = document.querySelector('#modal');
export const deleteBox = document.querySelector('#delete__box');
export const deleteRemoveBtn = document.querySelector('#delete__remove');
export const deleteCancelBtn = document.querySelector('#delete__cancel');
export const checkoutBtn = document.querySelector('#checkout__btn');
export const cartTotalPrice = document.querySelector('#total__price');

// CHECKOUT
export const checkoutBody = document.querySelector('#checkout__body');
export const addressBox = document.querySelector('#address__box');
export const orderBox = document.querySelector('#order__box');
export const shippingBox = document.querySelector('#shipping__box');
export const discountForm = document.querySelector('#discount__form');
export const discountBtn = document.querySelector('#discount__btn');
export const discountInput = document.querySelector('#discount__input');
export const discountItem = document.querySelector('#discount__item');
export const discountAlert = document.querySelector('#discount__alert');
export const discountClose = document.querySelector('#discount__close');
export const priceAmount = document.querySelector('#price__amount');
export const priceShipping = document.querySelector('#price__shipping');
export const pricePromo = document.querySelector('#price__promo');
export const pricePromoBox = document.querySelector('#price__promo--box');
export const priceTotal = document.querySelector('#price__total');
export const checkoutPaymentBtn = document.querySelector(
  '#checkout__payment--btn'
);

// CHECKOUT -- ADDRESS
export const addressContainer = document.querySelector('#address__container');
export const applyAddress = document.querySelector('#apply__address');

// CHECKOUT -- SHIPPING
export const shippingContainer = document.querySelector('#shipping__container');
export const applyShipping = document.querySelector('#apply__shipping');

// CHECKOUT -- PAYMENT
export const paymentContainer = document.querySelector('#payment__container');
export const applyPayment = document.querySelector('#apply__payment');

// CONFIRM
export const confirmForm = document.querySelector('#form');
export const confirmFormBtn = document.querySelector('#confirm');
export const confirmInputPassword = document.querySelector('#password');
export const confirmOverlay = document.querySelector('#overlay');
export const finishModalSuccess = document.querySelector(
  '#finish__modal--success'
);
export const finishModalUnsuccess = document.querySelector(
  '#finish__modal--unsuccess'
);
export const wrongPassword = document.querySelector('#wrong__password');

// ORDERS
export const ordersContainer = document.querySelector('#orders__container');
export const ordersActive = document.querySelector('#orders__active');
export const ordersCompleted = document.querySelector('#orders__completed');

// SEARCH
export const searchInput = document.querySelector('#search__input');
export const searchBox = document.querySelector('#search__box');
export const keyboardBox = document.querySelector('#keyboard__box');
export const searchBoxRecentIcon = document.querySelector(
  '#search__box--recent'
);
export const searchRecent = document.querySelector('#search__recent');
export const searchRecentList = document.querySelector('#search__recent--list');
export const searchHeaderResult = document.querySelector(
  '#search__header--result'
);
export const searchHeaderWords = document.querySelector(
  '#search__header--words'
);
export const searchHeaderFound = document.querySelector(
  '#search__header--found'
);
export const searchFoundCount = document.querySelector('#search__found--count');

export const searchHeaderClear = document.querySelector(
  '#search__header--clear'
);
export const searchNotFoundBox = document.querySelector('#not__found');
export const searchFoundBox = document.querySelector('#search__found');

// RECEIPT

export const receiptShowBtn = document.querySelector('#receipt__show--btn');
export const receiptModal = document.querySelector('#receipt__modal');
export const receiptPrice = document.querySelector('#receipt__price');
export const receiptTable = document.querySelector('#receipt__table');
export const receiptTracking = document.querySelector('#receipt__tracking');
export const receiptTime = document.querySelector('#receipt__time');
export const receiptPayment = document.querySelector('#receipt__payment');
export const receiptUsername = document.querySelector('#receipt__username');
export const receiptAddress = document.querySelector('#receipt__address');
export const receiptShipping = document.querySelector('#receipt__shipping');
export const receiptAmount = document.querySelector('#receipt__amount');
export const receiptDiscount = document.querySelector('#receipt__discount');

// NEW ADDRESS

export const addressForm = document.querySelector('#address__form');
export const addressData = document.querySelector('#address__data');
export const addressName = document.querySelector('#address__name');
export const addressNameAlert = document.querySelector('#address__name--alert');
