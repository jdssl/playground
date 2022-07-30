use std::io::stdin;

fn main() {
    println!("Who is Mogli's best friend?");
    const ANSWER: &str = "balu";
    let mut input = String::new();

    stdin().read_line(&mut input).expect("Enter your answer");

    if input.to_lowercase().trim() == ANSWER {
        println!("correct!");
    } else {
        println!("oops wrong!");
    }
}
