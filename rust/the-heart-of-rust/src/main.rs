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

    // References & Borrowing
    let s4 = String::from("rust by references and borrowing");
    do_stuff_ref(&s4);
    println!("{}", s4); // s4 yet is the owner

    fn do_stuff_ref(s: &String) -> &String {
        s
    }

    let mut s5 = String::from("rust");
    println!("{}", s5);
    do_stuff_ref_mut(&mut s5);
    println!("{}", s5);

    fn do_stuff_ref_mut(s: &mut String) {
        s.insert_str(0, "Hi, ");
        // (*s).insert_str(0, "Hi, ");
        // *s = String::from("Change");
    }
}
