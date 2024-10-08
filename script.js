const getCookie = (name) => {
  const cookieArr = document.cookie.split(";");

  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i].trim();

    if (cookie.startsWith(name + "=")) {
      return cookie.substring((name.length + 1), cookie.length);
    }
  }

  return null;
}

if(getCookie('localization') == 'US') {
	const promotionBlockListDiv = document.querySelector(
  '#shopify-section-template--15892679852226__370074f8-a6fa-41cb-ae57-c614b44b5d05 > .section > .section__color-wrapper > .container > .promotion-block-list'
	);
	
	const anchor = document.createElement('a');
	anchor.classList.add('promotion-block', 'promotion-block--large', 'image-zoom');
	anchor.id = 'new anchor';
	const img = document.createElement('img');
	img.id = "new-img";
	img.classList.add('promotion-block__image');
	img.setAttribute('loading', 'lazy');
	img.setAttribute('sizes', '(max-width: 740px) calc(100vw - 24px * 3), calc(min(100vw, 1560px) / 3 - 20px * 1)');
	img.setAttribute('height', '1019');
	img.setAttribute('width', '1019');
	img.setAttribute('src', 'https://i.ibb.co.com/gwBRWyX/Frame-1.png');
	
	anchor.appendChild(img);
	promotionBlockListDiv.appendChild(anchor);
}