build: publish/2016/summit/** publish/404.html
	@echo "=== Site built ==="

deploy: publish/**
	firebase deploy

serve: publish/**
	firebase serve

publish/404.html: publish/
	cp src/404.html publish

publish/2016/summit/**: src/2016/dist/** publish/
	mkdir -p publish/2016/summit/
	cp -r src/2016/dist/* publish/2016/summit/

src/2016/dist/**: src/2016/node_modules/** src/2016/gulpfile.js
	cd src/2016 && gulp

src/2016/node_modules/**: src/2016/.bowerrc src/2016/bower.json src/2016/package.json
	cd src/2016 && npm install
	cd src/2016 && bower install

publish/:
	mkdir -p publish

clean:
	rm -fr publish/
	rm -fr src/2016/dist/
	rm -fr src/2016/node_modules/