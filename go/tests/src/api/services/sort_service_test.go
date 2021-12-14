package services

import (
	"testing"
	"tests/src/api/utils/sort"
)

func TestSort(t *testing.T) {
	elements := sort.GetElements(10)
	Sort(elements)

	if elements[0] != 0 {
		t.Error("first element should be 0")
	}

	if elements[len(elements)-1] != 9 {
		t.Error("last element should be 9")
	}
}

func TestSortMoreThan10000(t *testing.T) {
	elements := sort.GetElements(20001)

	Sort(elements)

	if elements[0] != 0 {
		t.Error("first element should be 0")
	}

	if elements[len(elements)-1] != 20000 {
		t.Error("last element should be 20000")
	}
}

func BenchmarkSort10K(b *testing.B) {
	elements := sort.GetElements(2001)

	for i :=0; i < b.N; i++ {
		Sort(elements)
	}
}

func BenchmarkSort100K(b *testing.B) {
	elements := sort.GetElements(20000)

	for i :=0; i < b.N; i++ {
		Sort(elements)
	}
}
