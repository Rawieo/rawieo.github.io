import tornado.ioloop
import tornado.web

if __name__ == '__main__':
    class IndexHandler(tornado.web.RequestHandler):
        def get(self):
            self.render('index.html')
    tornado.web.Application([(r'/', IndexHandler),
                             (r'/(.*)', tornado.web.StaticFileHandler, {'path': '.'})], debug=True).listen(8000)
    tornado.ioloop.IOLoop.instance().start()
