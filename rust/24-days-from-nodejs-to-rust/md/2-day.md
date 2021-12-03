# Node to Rust - Day 2: from npm to cargo

## npm to cargo mapping

In Node.js we have **pacakge.json**. In Rust we have **Cargo.toml**.

## Bootstrapping new projects

In Node.js it's **npm init**. In Rust you have **cargo init** and **cargo new**.

- **cargo init** will initialize the current directory.
- **cargo new** initializes projects in a new directory.

## Installing dependencies

In Node.js it's **npm install [dep]**.

In Rust you can use **cargo add [dep]** if you install cargo-edit first.

Note: **not** cargo-add, just in case you come across it.

`$ cargo install cargo-edit`

This gives you four new commands:

- **add**
- **rm**
- **upgrade**
- **set-version**

## Installing tools globally

In Node.js it's **npm install --global**. In Rust you have **cargo install**.

Downloading, building, and placing executables in cargo's bin directory is
handled with **cargo install**.
If you installed rust via **rustup** then these are placed in
a local user directory (usually **~/.cargo/bin**).

## Running tests

In Node.js it's **npm test**. In Rust you have **cargo test**.

Cargo automates the running of unit tests, integration tests,
and document through the **cargo test** command.

## Publishing modules

In Node.js it's **npm publish**. In Rust you have **cargo publish**.

## Running tasks

In Node.js it's **npm run xxx**. In Rust, it depends...
You have commands for common tasks but the rest is up to you there.

In Node.js you might use **npm run start** to run your server or executable.
In Rust you would use **cargo run**.
You can even use **cargo run --example xxx** to automatically run example code.

In Node.js you might use **npm run benchmarks** to profile your code.
In Rust you have **cargo bench**.

In Node.js you might use **npm run build** to run webpack, tsc, or whatever.
In Rust you have **cargo build**.

In Node.js you might use **npm run clean** to remove temporary or generated files.
In Rust you have **cargo clean** which will wipe away your build folder (**target**, by default).

In Node.js you might use **npm run docs** to generate documentation.
In Rust you have **cargo doc**.

For code generation or pre-build steps, cargo supports build scripts which run
before the main build.

A lot of your use cases are covered by default, but for anything else you have
to fend for yourself.

**npm**',s built-in task runner is one of the reasons why you rarely see
**Makefiles** in JavaScript projects.
In Rust ecosystem, you're not as lucky.
Makefiles are still common but **just** is an attractive option that is gaining adoption.
It irons out a lot of the wonkiness of **Makefiles** while keeping a similar syntax.

- `$ cargo install just`

Other alternatives include **cargo-make** and **cargo-cmd**.
I liked cargo make at first but its builtin tasks became just as annoying as make’s.
I’ve become skilled writing **Makefiles** but I wish I spent that
time learning just so take a lesson from me and start there.

## Workspaces & Monorepos

Both package managers use a workspace concept to help you work with multiple
small modules in a large projects.
In Rust, you create a **Cargo.toml** file in the root directory
with a **[workspace]** entry that describes what's included an excluded
in the workspace.

## Additional tools

- **cargo-edit**
- **cargo-workspaces** - simplifies creating and managing workspaces and their members.
- **cargo-expand** - Macros
