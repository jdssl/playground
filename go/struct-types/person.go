package main

import "fmt"

type Person struct {
	firstName string
	lastName string
	age int

	hobby struct {
		name string
	}
}

func main () {
	var person Person
	person.firstName = "Jonatan"
	person.lastName = "Lima"
	person.age = 26

	person.hobby.name = "Read a books"

	fmt.Println(person)
}
