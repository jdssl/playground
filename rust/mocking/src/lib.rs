#[cfg(test)]
use mockall::{automock, predicate::*};

#[cfg_attr(test, automock)]
pub trait Database {
    fn execute_query(&self, query: String);
}

pub fn get_user(db: Box<dyn Database>, id: i32) {
    let query = format!("SELECT * from Users where id={}", id);

    db.execute_query(query);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn get_user_executes_correct_query() {
        let mut mock_database = Box::new(MockDatabase::new());
        mock_database
            .expect_execute_query()
            .with(eq("SELECT * from Users where id=22".to_owned()))
            .once()
            .returning(|_x| ());

        get_user(mock_database, 22);
    }
}
