use std::error::Error;

#[derive(Debug)]
struct People {
    name: String,
    age: u8,
}

type MyResult<T> = Result<T, Box<dyn Error>>;

fn run(people: People) -> MyResult<()> {
    println!("{} {}", people.name, people.age);
    Ok(())
}

fn get_people(people: People) -> MyResult<People> {
    Ok(People {
        name: people.name.to_uppercase(),
        age: people.age,
    })
}

fn main() {
    let people = People {
        name: String::from("balu"),
        age: 27,
    };
    if let Err(e) = get_people(people).and_then(run) {
        eprintln!("{}", e);
        std::process::exit(1);
    }
}
