use crossbeam::channel;
use std::{thread, time::Duration};

fn pause_ms(ms: u64) {
    thread::sleep(Duration::from_millis(ms));
}

fn main() {
    let (ts, tr) = channel::unbounded();
    let tr2 = tr.clone();

    let thread_a = thread::spawn(|| {
        for msg in tr {
            println!("The thread A receive: {}", msg);
        }
    });

    let thread_b = thread::spawn(|| {
        for msg in tr2 {
            println!("The thread B receive: {}", msg);
        }
    });

    for i in 0..10 {
        ts.send(i).unwrap();
        pause_ms(10);
    }
    drop(ts); // close the channel

    // join the child threads
    thread_a.join().unwrap();
    thread_b.join().unwrap();

    println!("Main thread: finish");
}
