DDS_2016_SOURCES := $(wildcard src/2016/src/**)
DDS_2016_DIST := $(wildcard src/2016/dist/**)
DDS_2016_FINAL := $(wildcard publish/2016/summit/**)

DARTCONF_2018_SOURCES := $(wildcard src/2018/__dev/**)
DARTCONF_2018_DIST := $(wildcard src/2018/dist/**)
DARTCONF_2018_FINAL := $(wildcard publish/2018/dartconf/**)

.SECONDARY: .summit2016.dist.intermediate .summit2016.intermediate \
	.dartconf2018.intermediate

build: .summit2016.intermediate .dartconf2018.intermediate publish/404.html
	@echo "=== Site built ==="

deploy: .summit2016.intermediate .dartconf2018.intermediate publish/404.html
	firebase deploy

serve: .summit2016.intermediate .dartconf2018.intermediate publish/404.html
	superstatic

publish/404.html: publish
	cp src/404.html publish

.dartconf2018.intermediate: $(DARTCONF_2018_DIST)
	mkdir -p publish/2018/dartconf/
	cp -r src/2018/dist/* publish/2018/dartconf/
	touch .dartconf2018.intermediate

.summit2016.intermediate: .summit2016.dist.intermediate
	mkdir -p publish/2016/summit/
	cp -r src/2016/dist/* publish/2016/summit/
	touch .summit2016.intermediate

.summit2016.dist.intermediate: $(DDS_2016_SOURCES) src/2016/gulpfile.js src/2016/node_modules
	cd src/2016 && gulp
	touch .summit2016.dist.intermediate

src/2016/node_modules: src/2016/.bowerrc src/2016/bower.json src/2016/package.json
	cd src/2016 && npm install
	cd src/2016 && bower install

publish:
	mkdir -p publish

clean:
	rm -fr publish/
	rm -fr src/2016/dist/
	rm -fr src/2016/node_modules/
