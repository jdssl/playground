package helpers

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCalculate(t *testing.T) {
	assert.Equal(t, Calculate(2), 4)
}
