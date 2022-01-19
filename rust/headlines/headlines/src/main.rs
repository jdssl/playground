use eframe::{
    egui::{CentralPanel, ScrollArea, Vec2},
    epi::App,
    run_native, NativeOptions,
};

struct Headlines {
    articles: Vec<NewsCardData>,
}

impl Headlines {
    fn new() -> Headlines {
        let iter = (0..20).map(|a| NewsCardData {
            title: format!("title{}", a),
            description: format!("desc{}", a),
            url: format!("https://example.com/{}", a),
        });
        Headlines {
            articles: Vec::from_iter(iter),
        }
    }
}

struct NewsCardData {
    title: String,
    description: String,
    url: String,
}

impl App for Headlines {
    fn update(&mut self, ctx: &eframe::egui::CtxRef, _frame: &mut eframe::epi::Frame<'_>) {
        CentralPanel::default().show(ctx, |ui| {
            ScrollArea::auto_sized().show(ui, |ui| {
                for a in &self.articles {
                    ui.label(&a.title);
                    ui.label(&a.url);
                    ui.label(&a.description);
                }
            })
        });
    }

    fn name(&self) -> &str {
        "Headlines"
    }
}

fn main() {
    let app = Headlines::new();
    let mut win_option = NativeOptions::default();
    win_option.initial_window_size = Some(Vec2::new(540., 960.));
    run_native(Box::new(app), win_option);
}
