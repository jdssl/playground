mod theme;

use dotenv::dotenv;
use newsapi::{get_articles, Articles};
use std::env;
use std::error::Error;

fn render_articles(articles: &Articles) {
    let theme = theme::default();
    theme.print_text("# Top headlines\n\n");

    for article in &articles.articles {
        theme.print_text(&format!("`{}`", article.title));
        theme.print_text(&format!("> *{}*", article.url));
        theme.print_text("---");
    }
}

fn main() -> Result<(), Box<dyn Error>> {
    dotenv().ok();

    let incomplete_url = env::var("NEWSAPI_URL").expect("NEWSAPI_URL must be set");
    let api_key = env::var("NEWSAPI_KEY").expect("NEWSAPI_KEY must be set");
    let complete_url = format_args!(
        "{incomplete_url}{api_key}",
        incomplete_url = incomplete_url.to_string(),
        api_key = api_key.to_string()
    )
    .to_string();
    let url = complete_url.as_str();
    let articles = get_articles(url)?;

    render_articles(&articles);

    Ok(())
}
