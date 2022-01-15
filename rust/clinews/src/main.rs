mod theme;

use dotenv::dotenv;
use newsapi::{Article, Country, Endpoint, NewsAPI};
use std::env;
use std::error::Error;

fn render_articles(articles: &Vec<Article>) {
    let theme = theme::default();
    theme.print_text("# Top headlines\n\n");

    for article in articles {
        theme.print_text(&format!("`{}`", article.title()));
        theme.print_text(&format!("> *{}*", article.url()));
        theme.print_text("---");
    }
}

fn main() -> Result<(), Box<dyn Error>> {
    dotenv().ok();

    let api_key = env::var("NEWSAPI_KEY").expect("NEWSAPI_KEY must be set");

    let mut newsapi = NewsAPI::new(&api_key);
    newsapi
        .endpoint(Endpoint::TopHeadlines)
        .country(Country::Us);

    let newsapi_response = newsapi.fetch()?;

    render_articles(&newsapi_response.articles());

    Ok(())
}
