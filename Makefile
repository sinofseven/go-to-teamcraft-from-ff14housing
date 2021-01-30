build:
	rm -rf dist/;
	mkdir dist;
	zip -r dist/package.zip \
		index.js \
		manifest.json \
		icon_256.png \
		icon_128.png \
		README.md \
		LICENSE \
		CREDITS
