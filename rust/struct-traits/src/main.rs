fn main() {
    // Struct
    struct Person {
        name: String,
        age: i8,
    }

    impl Person {
        fn new(name: String, age: i8) -> Self {
            Self { name, age }
        }
    }

    let person = Person::new(String::from("Balu"), 27);

    println!("{} is {} years old", person.name, person.age);
}
