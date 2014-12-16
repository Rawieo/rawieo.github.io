$(function() {
    var pathMapper = new PathMapper([
        ["",            IndexHandler],
        ["#projects",   ProjectsHandler],
        ["#skillz",     SkillzHandler],
        ["#contact",    ContactHandler],
        ["#about",      AboutHandler],
    ]);
    var site = new Site(pathMapper);
    $(window).bind('hashchange', function() {
        site.updateContent();
    });
    site.updateContent();
});

