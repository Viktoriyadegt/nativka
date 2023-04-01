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
type CityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: CityType
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