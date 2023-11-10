# Advert Info plugin

## Adds an information layer to advertising banners
* Information about advertising
* Information about advertiser

## Install

`npm install advert-info`

## How to use
Search all banners

```html
<div id="app">
    <div class="wrapper">
        <div class="banner">1</div>
        <div class="banner">2</div>
    </div>
</div>
```

```css
.wrapper {
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px
}
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
  border: 1px solid;
  font-size: 60px;
  font-weight: 600;
  color: white;
}
.banner:nth-child(1) {
  background: blue;
}
.banner:nth-child(2) {
  background: grey;
}
.banner:nth-child(3) {
  background: purple;
}
```

```javascript
import AdInfo from 'advert-info';

const banners = document.querySelectorAll('.banner');
banners.forEach((banner) => {
    new AdInfo(
        banner,
        [
            {
                name: 'Advert object',
                type: 'link',
                value: 'https://example.com',
            },
            {
                name: 'Advert name',
                type: 'string',
                value: 'Start your business',
            },
        ],
        [
            {
                name: 'Company',
                type: 'string',
                value: 'Cool company',
            },
            {
                name: 'INN',
                type: 'string',
                value: 'xxxx-xxxx-xxxx-xxxx',
            },
            {
                name: 'id',
                type: 'string',
                value: 'someid',
            },
        ]
    );
});
```

## Example
https://codepen.io/xervin/pen/OJrmqKB