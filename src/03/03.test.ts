import {addTechnologies, doesStudentLiveIn, studentIsActive, StudentType} from "./03_01";

let student: StudentType

beforeEach(()=>{
    student = {
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
})

test('new tech skill should be added to student', ()=>{
    expect(student.technologies.length).toBe(3)

    addTechnologies(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].id).toBeDefined()
    expect(student.technologies[3].title).toBe('JS')
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)

    studentIsActive(student)

    expect(student.isActive).toBe(true)
})

test('does student live in the city?', () => {

    let resul1 = doesStudentLiveIn(student, 'Moscow')
    let resul2 = doesStudentLiveIn(student, 'Minsk')

    expect(resul1).toBe(false)
    expect(resul2).toBe(true)
})