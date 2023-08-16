package main

import (
	"context"
	"fmt"
	"time"
)

func numbers(v chan<- int) {
	for i := 0; i < 10; i++ {
		v <- i
		fmt.Printf("numbers %d written in the channel\n", i)
	}
	close(v)
}

func main() {
	ctx, cf := context.WithCancel(context.Background())
	go func() {
		time.Sleep(time.Second * 5)
		cf()
		fmt.Println("timeout")
	}()

	c := make(chan int, 3)
	go numbers(c)

loopNum:
	for {
		select {
		case <-ctx.Done():
			break loopNum
		case v, ok := <-c:
			if ok {
				fmt.Printf("number %d read in the channel\n", v)
				time.Sleep(time.Second * 2)
			}
		}
	}

}
