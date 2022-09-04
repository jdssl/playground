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

    println!("vec: {:?}", v);
    println!("r: {:?}", r);
    println!("add: {}", add(1, 2));
}
