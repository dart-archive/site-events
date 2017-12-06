# events.dartlang.org

This is where events microsites live.

## Development

If you work on sites-www or sites-webdev, you probably have everything you
need except perhaps for bower:

```
npm install -g bower
```

Then, to make and preview the site:

```
cd site-events
make build
firebase serve
```

## Deployment

Run `make deploy` in root directory.
