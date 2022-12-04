fn main() {
    let mogli_data = "\
                      name,kind
                      Mogli,human
                      Balu,bear
                      Kaa,snake
                      ";

    let records = mogli_data.lines();

    for (i, record) in records.enumerate() {
        if i == 0 || record.trim().is_empty() {
            continue;
        }

        let fields: Vec<_> = record.split(',').map(|field| field.trim()).collect();

        if cfg!(debug_assertions) {
            eprintln!("debug: {:?} -> {:?}", record, fields);
        }

        let name = fields[0];
        let kind = fields[1];

        println!("{}, {}", name, kind);
    }
}
