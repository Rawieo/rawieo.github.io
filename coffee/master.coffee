$ ->
    $('a[href*=#]:not([href=#])').click ->
        if location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname
            target = $(this.hash)
            target = target.length ? target : $("[name=#{this.hash.slice(1)}]")
            if target.length
                $('html,body').animate { scrollTop: target.offset().top }, 1000
                false
    $(window).bind 'scroll', ->
        if $(window).scrollTop() > 500
            $('body header nav').addClass 'fixed'
        else
            $('body header nav').removeClass 'fixed'
