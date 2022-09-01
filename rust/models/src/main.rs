struct Person {
    name: String,
    age: i16,
    size: f32,
    hobby: String,
}

#[derive(Debug)]
struct PersonMin {
    name: String,
    age: i16,
}

impl From<Person> for PersonMin {
    fn from(p: Person) -> Self {
        Self {
            name: p.name,
            age: p.age,
        }
    }
}

fn main() {
    let hobby: String = String::from("music");
    let peoples_by_hobby: Vec<PersonMin> = get_persons_by_hobby(hobby);
    println!("{:?}", peoples_by_hobby);
}

fn get_peoples() -> Vec<Person> {
    let balu: Person = Person {
        name: String::from("Balu"),
        age: 27,
        size: 1.82,
        hobby: String::from("music"),
    };
    let mogli: Person = Person {
        name: String::from("Mogli"),
        age: 12,
        size: 1.40,
        hobby: String::from("music"),
    };
    let tabaqui: Person = Person {
        name: String::from("Tabaqui"),
        age: 19,
        size: 1.60,
        hobby: String::from("laugh"),
    };

    vec![balu, mogli, tabaqui]
}

fn get_persons_by_hobby(hobby: String) -> Vec<PersonMin> {
    let persons: Vec<Person> = get_peoples();
    persons
        .into_iter()
        .filter(|p| p.hobby == hobby)
        .map(PersonMin::from)
        .collect()
}
