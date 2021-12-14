package sort

import (
	"testing"
)

func TestBubbleSortIncreasingOrder(t *testing.T) {
	// Init
	elements := GetElements(10)

	// Execution
	BubbleSort(elements)

	// Validation
	if elements[0] != 0 {
		t.Error("first element should be 0")
	}

	if elements[len(elements)-1] != 9 {
		t.Error("last element should be 9")
	}
}

func TestSortIncreasingOrder(t *testing.T) {
	// Init
	elements := GetElements(10)

	// Execution
	Sort(elements)

	// Validation
	if elements[0] != 0 {
		t.Error("first element should be 0")
	}

	if elements[len(elements)-1] != 9 {
		t.Error("last element should be 9")
	}
}

func BenchmarkBubbleSort(b *testing.B) {
	elements := GetElements(10000)

	for i :=0; i < b.N; i++ {
		BubbleSort(elements)
	}
}

func BenchmarkSort(b *testing.B) {
	elements := GetElements(10000)

	for i :=0; i < b.N; i++ {
		Sort(elements)
	}
}