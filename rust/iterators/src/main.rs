fn main() {
    let v = vec![1, 2, 3, 4, 5];
    let v_clone = v.clone();
    let v_clone_clone = v.clone(); // 🤪

    for num in v {
        println!("num: {}", num);
    }

    v_clone
        .into_iter()
        .for_each(|num| println!("num + 1: {}", num + 1));

    let total: i32 = v_clone_clone
        .into_iter()
        .map(|x| x * 4)
        .filter(|y| *y % 2 == 0)
        .sum();

    // With turbofish ::<>
    // v_clone_clone
    //     .into_iter()
    //     .map(|x| x * 4)
    //     .filter(|y| *y % 2 == 0)
    //     .sum::<i32>();

    println!("total: {}", total);
}
