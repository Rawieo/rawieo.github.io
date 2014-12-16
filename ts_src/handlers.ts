///<reference path="site.ts" />
///<reference path="ref/jquery.d.ts" />

class IndexHandler implements Handler {

    public loadContent(args: string[]) {
        $(".content").load("/html_docs/index.html", function(_, textStatus) {
            if(textStatus == "error") {
                $(".content").html("<h1>Oops!</h1><h3>An error has occured</h3>");
            }
        });
    }

}

class ProjectsHandler implements Handler {

    public loadContent(args: string[]) {
        if(args[0] != undefined) {
            $(".content").load("/html_docs/projects/" + args[0] + ".html", function(_, textStatus) {
                if(textStatus == "error") {
                    $(".content").html("<h1>Oops!</h1><h3>An error has occured</h3>");
                }
            });
        } else {
            $(".content").load("/html_docs/projects.html", function(_, textStatus) {
                if(textStatus == "error") {
                    $(".content").html("<h1>Oops!</h1><h3>An error has occured</h3>");
                }
            });
        }
    }

}

class SkillzHandler implements Handler {

    public loadContent(args: string[]) {
        $(".content").load("/html_docs/skillz.html", function(_, textStatus) {
            if(textStatus == "error") {
                $(".content").html("<h1>Oops!</h1><h3>An error has occured</h3>");
            }
        });
    }

}

class ContactHandler implements Handler {

    public loadContent(args: string[]) {
        $(".content").html("<div class=\"arrow\"></div><iframe src=\"https://docs.google.com/forms/d/1E1cv3TIbykH5x4bfgYLcEKwlWMB1driMqk_6Pjj5kx8/viewform?embedded=true\" width=\"1200\" height=\"750\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\"><div class=\"loading\">Loading...</div></iframe>");
    }

}

class AboutHandler implements Handler {

    public loadContent(args: string[]) {
        $(".content").load("/html_docs/about.html", function(_, textStatus) {
            if(textStatus == "error") {
                $(".content").html("<h1>Oops!</h1><h3>An error has occured</h3>");
            }
        });
    }

}