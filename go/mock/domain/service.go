package domain

import "math/rand"

func RandomString(n int) string {
	var letters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")

	s := make([]rune, n)
	for i := range s {
		s[i] = letters[rand.Intn(len(letters))]
	}
	return string(s)
}

type Note struct {
	ID          string
	Title       string
	Description string
}

func NewNote(title, description string) (*Note, error) {
	return &Note{
		ID:          RandomString(10),
		Title:       title,
		Description: description,
	}, nil
}

type Repository interface {
	Save(note *Note) error
}

type Service interface {
	Create(newNote Note) (string, error)
}

type ServiceImpl struct {
	Repository Repository
}

func (s *ServiceImpl) Create(newNote Note) (string, error) {
	note, err := NewNote(newNote.Title, newNote.Description)
	if err != nil {
		return "", err
	}

	err = s.Repository.Save(note)
	if err != nil {
		return "", err
	}

	return note.ID, nil
}
