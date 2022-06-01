// #![allow(unused)]
// use std::process::ExitCode;
// fn check_foo() -> bool {
//     false
// }

// fn main() -> ExitCode {
//     if !check_foo() {
//         return ExitCode::from(42);
//     }

//     ExitCode::SUCCESS
// }

use std::process::{ExitCode, Termination};

pub enum GitBisectResult {
    Good = 0,
    Bad = 1,
    Skip = 125,
    Abort = 255,
}

impl Termination for GitBisectResult {
    fn report(self) -> ExitCode {
        ExitCode::from(self as u8)
    }
}

fn main() -> GitBisectResult {
    std::panic::catch_unwind(|| todo!("test the commit")).unwrap_or(GitBisectResult::Abort)
}
