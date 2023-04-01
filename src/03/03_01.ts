import {CityType, GovernmentBuildingType2, HousesType} from "../02/02";

export const student: StudentType = {
    id: 1,
    name: 'Dimych',
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechnologiesType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export function addTechnologies(student: StudentType, skill: string) {
    return student.technologies = [...student.technologies, {id: new Date().getTime(), title: skill}]
}

export function studentIsActive(student: StudentType) {
    return student.isActive = true
}

export function doesStudentLiveIn(student: StudentType, cityName: string) {
    return student.address.city.title === cityName
}

export function addMoneyToBudget(governmentBuildings: GovernmentBuildingType2, countBudget: number) {
    return governmentBuildings.budget += countBudget
}

// export function demolishHousesOnTheStreet(city:CityType, streetTitle: string){
//     return  city.houses.filter((house)=>house.address.street.title!==streetTitle())
// }

export function repairHouse(house: HousesType) {
    return house.repaired = true
}

export function toFireStaff(governmentBuilding:GovernmentBuildingType2, inc:number) {
    return governmentBuilding.staffCount -= inc
}

export function toHireStaff(governmentBuilding:GovernmentBuildingType2, inc:number) {
    return governmentBuilding.staffCount += inc
}

export function createMessage(city: CityType) {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`

}
