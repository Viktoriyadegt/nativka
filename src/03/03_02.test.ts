import {CityType} from "../02/02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03_01";

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
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE_STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);

})

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[0].budget).toBe(200000);

})

/*
test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)

})*/

test('House should be repared', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test('fireStaff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('hireStaff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test('greetings should be correct for city', () => {
    const message = createMessage(city);

    expect(message).toBe('Hello New York citizens. I want you be happy. All 1000000 men')
})
