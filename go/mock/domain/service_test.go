package domain

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

type repositoryMock struct {
	mock.Mock
}

func (r *repositoryMock) Save(note *Note) error {
	args := r.Called(note)
	return args.Error(0)
}

var (
	newNote = Note{
		Title:       "Title X",
		Description: "Any description",
	}
	service = ServiceImpl{}
)

func Test_Create_Note(t *testing.T) {
	assert := assert.New(t)
	repositoryMock := new(repositoryMock)
	repositoryMock.On("Save", mock.Anything).Return(nil)
	service.Repository = repositoryMock

	id, err := service.Create(newNote)

	assert.NotNil(id)
	assert.Nil(err)
}
