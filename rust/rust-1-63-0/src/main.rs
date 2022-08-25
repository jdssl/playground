use std::thread;

fn main() {
    let mut a = vec![1, 2, 3];
    let mut x = 0;

    thread::scope(|s| {
        s.spawn(|| {
            dbg!(&a);
        });
        s.spawn(|| {
            x += a[0] + a[2];
        })
    });

    a.push(4);
    assert_eq!(x, a.len());
}
