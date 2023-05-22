import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Телефоны"},
        ];
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
        ];
        this._devices = [
            {
                id: 1,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://spb-apple.ru/image/cache/catalog/apple12/apple%2012%20pro%20max/apple12promax_grey_1-350x450.jpg",
            },
            {
                id: 2,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://spb-apple.ru/image/cache/catalog/apple12/apple%2012%20pro%20max/apple12promax_grey_1-350x450.jpg",
            },
            {
                id: 3,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://spb-apple.ru/image/cache/catalog/apple12/apple%2012%20pro%20max/apple12promax_grey_1-350x450.jpg",
            },
            {
                id: 4,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://spb-apple.ru/image/cache/catalog/apple12/apple%2012%20pro%20max/apple12promax_grey_1-350x450.jpg",
            },
            {
                id: 5,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://spb-apple.ru/image/cache/catalog/apple12/apple%2012%20pro%20max/apple12promax_grey_1-350x450.jpg",
            },
        ];
          makeAutoObservable(this);
    }
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}
