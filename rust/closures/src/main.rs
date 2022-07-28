fn main() {
    let str = '😀'.to_string();
    // The clousure use implict move
    let f = || {
        println!("{}", str);
    };
    // println!("{}", str);
    f();

    let v = vec![1, 2, 3, 4];

    let r = v
        .iter()
        .map(|x| x * 3)
        .filter(|x| *x > 10)
        .fold(0, |acc, x| acc + x);

    println!("vec: {:?}", v);
    println!("r: {:?}", r);
}
