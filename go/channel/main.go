package main

import (
	"channel/helpers"
	"log"
)

const numPool = 10

func CalcVal(ch chan int) {
	rn := helpers.RandomNumber(numPool)
	ch <- rn
}

func main() {
	ch := make(chan int)
	defer close(ch)

	go CalcVal(ch)

	num := <-ch
	log.Println(num)
}
