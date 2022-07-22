fn main() {
    // Ownership
    // 3 Rules:

    // 1. Each values has an owner
    // 2. Only one owner
    let s1 = String::from("rust");
    // Now s2 is owner
    let s2 = s1;
    // println!("{}", s1); // Error
    println!("{}", s2);

    // 3. Value gets dropped if its  owner goes out of scope
    // let s3 = String::from("rust");
    // do_stuff(s3);
    // println!("{}", s3); // Error

    let mut s3 = String::from("rust");
    s3 = do_stuff(s3);
    println!("{}", s3); // works

    fn do_stuff(s: String) -> String {
        s
    }

    ///////////////////////////////////////////////////////
}
