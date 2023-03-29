import {CityType} from "./02";

let city: CityType;
beforeEach(() => {
    city = {
        title: 'New York',
        houses:
            [
                {
                    buildedAt: 2012,
                    repaired: false,
                    address: {
                        street: {
                            title: 'White Street'
                        },
                        number: 100
                    }
                },
                {
                    buildedAt: 2008,
                    repaired: false,
                    address: {
                        street: {
                            title: 'Happy Street'
                        },
                        number: 100
                    }
                },
                {
                    buildedAt: 2020,
                    repaired: false,
                    address: {
                        street: {
                            title: 'Happy Street'
                        },
                        number: 101
                    }
                }
            ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                butget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE_STATION',
                butget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1
    }
})

// 01. создайте тип CityType
// 02. заплните объект city, чтобы тесты ниже прошли

test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White Street');

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe('Happy Street');

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe('Happy Street');

})

// 01. Заполните тип governmentBuildingType2
// 02. заплните объект city, чтобы тесты ниже прошли

test('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL');
    expect(city.governmentBuildings[0].butget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str');

    expect(city.governmentBuildings[1].type).toBe('FIRE_STATION');
    expect(city.governmentBuildings[1].butget).toBe(500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe('South Str');

})