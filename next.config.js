/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

let subPath = '';
if (NODE_ENV === 'production' && homepage) {
  try {
    console.log('> Detected homepage url in package.json');
    const { pathname } = new URL(homepage);
    if (pathname !== '/') {
      console.log(`> Apply '${pathname}' to assetPrefix(basePath)`);
      subPath = pathname; // ✅ /레포명
    }
  } catch {
    console.log('> Can not parse homepage URL, not apply assetPrefix');
  }
}

module.exports = withImages({
  assetPrefix: subPath,
  basePath: subPath,           // ✅ GitHub Pages에서 /레포명 기반 라우팅
  images: { unoptimized: true },
  trailingSlash: true,
});
