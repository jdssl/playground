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
        fn say_hello_directy(&self) -> &str {
            "Hello my friend"
        }
    }

    let person = Person::new(String::from("Balu"), 27);
    let directy_message = person.say_hello_directy();

    println!("{} is {} years old", person.name, person.age);
    println!("{}", directy_message);

    // Trait
    trait Action {
        fn say_hello(&self) -> String;
    }

    impl Action for Person {
        fn say_hello(&self) -> String {
            String::from("Hello my friend!")
        }
    }

    let message = person.say_hello();
    println!("The Elliot say: {}", message);
}
