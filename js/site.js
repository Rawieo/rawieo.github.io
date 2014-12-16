///<reference path="ref/jquery.d.ts" />

var PathMapper = (function () {
    function PathMapper(mapping) {
        this.mapping = mapping;
    }
    PathMapper.prototype.getHandler = function (path) {
        for (var i = 0, m = this.mapping[0]; i < this.mapping.length; m = this.mapping[++i]) {
            if (m[0] == path) {
                return new m[1]();
            }
        }
        return null;
    };
    return PathMapper;
})();

var Site = (function () {
    function Site(pathMapper) {
        this.pathMapper = pathMapper;
    }
    Site.prototype.updateContent = function () {
        var hash = window.location.hash;
        var tokens = hash.split("/");
        var path = tokens[0];
        var args = tokens.slice(1);
        var handler = this.pathMapper.getHandler(path);
        $(".content").html("<div class=\"loading\">Loading...</div>");
        if (handler == null) {
            $(".content").html("404");
        } else {
            handler.loadContent(args);
        }
        $(".header .menu_el").each(function (_, self) {
            if (path != $(self).attr("href")) {
                $(self).removeClass("active");
            }
            if (path == $(self).attr("href") || path == "" && $(self).attr("href") == "#") {
                $(self).addClass("active");
            }
        });
        this.onUpdateContent();
    };

    Site.prototype.onUpdateContent = function () {
        var rgb = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

        // $(".header .title").css("background", "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",0.75)");
        // $(".header .title").css("text-shadow", "0px 0px 16px " + rgb);
        $(".header .title").css("color", rgb);
    };
    return Site;
})();
///<reference path="site.ts" />
///<reference path="ref/jquery.d.ts" />
var IndexHandler = (function () {
    function IndexHandler() {
    }
    IndexHandler.prototype.loadContent = function (args) {
        $(".content").load("/html_docs/index.html", function (_, textStatus) {
            if (textStatus == "error") {
                $(".content").html("<h1>Oops!</h1><h3>An error has occured</h3>");
            }
        });
    };
    return IndexHandler;
})();

var ProjectsHandler = (function () {
    function ProjectsHandler() {
    }
    ProjectsHandler.prototype.loadContent = function (args) {
        if (args[0] != undefined) {
            $(".content").load("/html_docs/projects/" + args[0] + ".html", function (_, textStatus) {
                if (textStatus == "error") {
                    $(".content").html("<h1>Oops!</h1><h3>An error has occured</h3>");
                }
            });
        } else {
            $(".content").load("/html_docs/projects.html", function (_, textStatus) {
                if (textStatus == "error") {
                    $(".content").html("<h1>Oops!</h1><h3>An error has occured</h3>");
                }
            });
        }
    };
    return ProjectsHandler;
})();

var SkillzHandler = (function () {
    function SkillzHandler() {
    }
    SkillzHandler.prototype.loadContent = function (args) {
        $(".content").load("/html_docs/skillz.html", function (_, textStatus) {
            if (textStatus == "error") {
                $(".content").html("<h1>Oops!</h1><h3>An error has occured</h3>");
            }
        });
    };
    return SkillzHandler;
})();

var ContactHandler = (function () {
    function ContactHandler() {
    }
    ContactHandler.prototype.loadContent = function (args) {
        $(".content").html("<div class=\"arrow\"></div><iframe src=\"https://docs.google.com/forms/d/1E1cv3TIbykH5x4bfgYLcEKwlWMB1driMqk_6Pjj5kx8/viewform?embedded=true\" width=\"1200\" height=\"750\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\"><div class=\"loading\">Loading...</div></iframe>");
    };
    return ContactHandler;
})();

var AboutHandler = (function () {
    function AboutHandler() {
    }
    AboutHandler.prototype.loadContent = function (args) {
        $(".content").load("/html_docs/about.html", function (_, textStatus) {
            if (textStatus == "error") {
                $(".content").html("<h1>Oops!</h1><h3>An error has occured</h3>");
            }
        });
    };
    return AboutHandler;
})();
