///<reference path="ref/jquery.d.ts" />

interface Handler {

    loadContent(args: string[]);

}

class PathMapper {

    private mapping;

    public constructor(mapping: Array<Array<any>>) {
        this.mapping = mapping;
    }

    public getHandler(path: string) {
        for(var i: number = 0, m: any = this.mapping[0]; i < this.mapping.length; m = this.mapping[++i]) {
            if(m[0] == path) {
                return new m[1]();
            }
        }
        return null;
    }

}

class Site {

    private static currentSiteInstance: Site;
    private pathMapper: PathMapper;

    public constructor(pathMapper: PathMapper) {
        this.pathMapper = pathMapper;
    }

    public updateContent() {
        var hash: string = window.location.hash;
        var tokens: string[] = hash.split("/");
        var path: string = tokens[0];
        var args: string[] = tokens.slice(1);
        var handler: Handler = this.pathMapper.getHandler(path);
        $(".content").html("<div class=\"loading\">Loading...</div>");
        if(handler == null) {
            $(".content").html("404");
        } else {
            handler.loadContent(args);
        }
        $(".header .menu_el").each(function(_, self) {
            if(path != $(self).attr("href")) {
                $(self).removeClass("active");
            }
            if(path == $(self).attr("href") || path == "" && $(self).attr("href") == "#") {
                $(self).addClass("active");
            }
        });
        this.onUpdateContent();
    }

    public onUpdateContent() {
        var rgb: string = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        // $(".header .title").css("background", "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",0.75)");
        // $(".header .title").css("text-shadow", "0px 0px 16px " + rgb);
        $(".header .title").css("color", rgb);
    }

}