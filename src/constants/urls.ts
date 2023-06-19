const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const cars = '/cars';

const urls = {
    cars: {
        cars,
        carById: (id: number): string => `${cars}/${id}`
    }
}

export {
    baseURL, urls
}
