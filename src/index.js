import styles from './styles.scss';

class AdvertInfo {
    constructor(el, advertisingFields, advertiserFields) {
        this.el = el;
        this.advertisingFields = advertisingFields;
        this.advertiserFields = advertiserFields;

        this.createLayers();
        this.initListeners();
    }

    initListeners() {
        this.el.addEventListener('click', (e) => {
            if (e.target.classList.contains('ad-layer__menu')) {
                e.currentTarget.querySelector('.ad-layer__info').classList.toggle('ad-layer__info--active');
            }
            if (e.target.classList.contains('ad-layer__close')) {
                e.currentTarget.querySelector('.ad-layer__info').classList.remove('ad-layer__info--active');
            }
        })
    }

    createLayers() {
        if (this.el.style.position !== 'absolute' || this.el.style.position !== 'fixed') {
            this.el.style.position = 'relative';
        }
        this.el.style.overflow = 'hidden';

        const text = document.createElement('div');
        text.innerText = 'Реклама';
        text.classList.add('ad-layer');
        text.classList.add('ad-layer__text');

        const info = document.createElement('div');
        info.classList.add('ad-layer');
        info.classList.add('ad-layer__info');

        const menu = document.createElement('div');
        menu.innerText = '...';
        menu.classList.add('ad-layer');
        menu.classList.add('ad-layer__menu');

        const adInfoBlock = this.createBlock('Информация о рекламе', this.advertisingFields);
        const advertiserInfoBlock = this.createBlock('Информация о рекламодателе', this.advertiserFields);

        const w = document.createElement('div');
        w.classList.add('ad-layer__inner');
        w.append(adInfoBlock)
        w.append(advertiserInfoBlock)

        info.append(w);

        const x = document.createElement('div');
        x.classList.add('ad-layer__close');
        info.append(x);

        this.el.append(text);
        this.el.append(menu);
        this.el.append(info);

        if (this.el.offsetHeight + 40 <= info.offsetHeight) {
            this.el.classList.add('ad-layer--full-size');
        }
        window.addEventListener('resize', () => {
            if (this.el.offsetHeight + 40 <= info.offsetHeight) {
                this.el.classList.add('ad-layer--full-size');
            }
        })
    }

    createRow (data) {
        let row;
        switch (data.type) {
            case 'link':
                row = document.createElement('a');
                row.classList.add('ad-layer__link');
                row.innerText = data.name;
                row.setAttribute('target', '_blank')
                row.href = data.value;
                break;
            case 'string':
                row = document.createElement('div');
                row.classList.add('ad-layer__label');
                row.innerText = data.name;

                let content = document.createElement('div');
                content.classList.add('ad-layer__row');
                content.innerText = data.value;
                row.append(content)
                break;
            default:
                throw new Error('Type is missing!');
        }

        return row;
    }

    createBlock (layerTitle, fields) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('ad-layer__wrapper');

        const title = document.createElement('div');
        title.classList.add('ad-layer__title');
        title.innerText = layerTitle;

        wrapper.append(title);

        if (fields !== null && typeof fields !== 'undefined') {
            for (const [key, value] of Object.entries(fields)) {
                let row = this.createRow(value);
                wrapper.append(row);
            }
        }

        return wrapper;
    }
}
export default AdvertInfo;