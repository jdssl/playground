struct People {
    name: String,
    age: i16,
    size: f32,
    hobby: String,
}

#[derive(Debug)]
struct PeopleMin {
    name: String,
    age: i16,
}

impl From<People> for PeopleMin {
    fn from(p: People) -> Self {
        Self {
            name: p.name,
            age: p.age,
        }
    }
}

fn main() {
    let hobby: String = String::from("music");
    let peoples_by_hobby: Vec<PeopleMin> = get_persons_by_hobby(hobby);
    println!("{:?}", peoples_by_hobby);
}

fn get_peoples() -> Vec<People> {
    let balu: People = People {
        name: String::from("Balu"),
        age: 27,
        size: 1.82,
        hobby: String::from("music"),
    };
    let mogli: People = People {
        name: String::from("Mogli"),
        age: 12,
        size: 1.40,
        hobby: String::from("music"),
    };
    let tabaqui: People = People {
        name: String::from("Tabaqui"),
        age: 19,
        size: 1.60,
        hobby: String::from("laugh"),
    };

    vec![balu, mogli, tabaqui]
}

fn get_persons_by_hobby(hobby: String) -> Vec<PeopleMin> {
    let persons: Vec<People> = get_peoples();
    persons
        .into_iter()
        .filter(|p| p.hobby == hobby)
        .map(PeopleMin::from)
        .collect()
}
