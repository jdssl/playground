interface Person {
    firstName: string
    lastName: string
    age: number
}

const showPerson = ({ firstName, lastName, age }: Person) => {
    return {
        firstName,
        lastName,
        age
    }
}

console.log('showPerson', showPerson({ firstName: 'Jonatan', lastName: 'Lima', age: 26 }))
