fn main() {
    let str = '😀'.to_string();
    // The clousure use implict move
    let f = move || {
        println!("{}", str);
    };
    // println!("{}", str); // Error beacuse ownership, with `move` keyword
    f();

    let v = vec![1, 2, 3, 4];

    let r: i32 = v.iter().map(|x| x * 3).filter(|x| *x > 10).sum();

    let add = |x, y| x + y;

    let apple = "🍎";
    let apple_clone = apple.clone();
    let print_apple = move || {
        println!("{}", apple_clone);
    };

    println!("vec: {:?}", v);
    println!("r: {:?}", r);
    println!("add: {}", add(1, 2));
    print_apple();
    println!("{}", apple);
    println!("{}", apple_clone);
}
