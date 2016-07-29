default:
	echo "Please run make clean, make build or make deploy"

deploy: build
	firebase deploy

build: summit2016 error404

error404: mkdir_publish
	cp src/404.html publish

summit2016: summit2016_gulp mkdir_publish
	mkdir -p publish/2016/summit/
	cp -r src/2016/dist/* publish/2016/summit/

summit2016_gulp: summit2016_bower
	cd src/2016 && gulp

summit2016_bower: summit2016_npm
	cd src/2016 && bower install

summit2016_npm:
	cd src/2016 && npm install

mkdir_publish:
	mkdir -p publish

clean:
	rm -fr publish/
	rm -fr src/2016/dist/
	rm -fr src/2016/node_modules/