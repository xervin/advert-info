# Advert Info plugin

## Adds an information layer to advertising banners
* Information about advertising
* Information about advertiser

## Install

`npm install advert-info`

## How to use
Search all banners

```
const banners = document.querySelectorAll('.ad-banner');

banners.forEach((banner) => {
    new AdInfo(
        banner, 
         [
            {
                label: 'Advert object',
                type: 'link',
                value: banner.dataset.link,
            },
            {
                label: 'Advert name',
                type: 'string',
                value: banner.dataset.adName,
            },
        ], 
        [
            {
                name: 'Company',
                type: 'string',
                value: banner.dataset.company,
            },
            {
                name: 'INN',
                type: 'string',
                value: banner.dataset.inn,
            },
            {
                name: 'id',
                type: 'string',
                value: banner.dataset.id,
            },
        ] 
    );
}    
```

## Example
https://codepen.io/xervin/pen/OJrmqKB