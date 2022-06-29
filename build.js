const fs = require('fs');
const umdify = require('libumd');

function umd(src, dest) {
    fs.writeFileSync(dest, umdify(fs.readFileSync(src), {
        deps: { 'default': ['angular'] }
    }));
}

umd('./dist/ui-bootstrap-tpls.js', './dist/ui-bootstrap-tpls-umd.js');
umd('./dist/ui-bootstrap-tpls.min.js', './dist/ui-bootstrap-tpls-umd.min.js');
