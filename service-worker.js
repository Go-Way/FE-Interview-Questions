/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ab1f3bc377ac284316c3bc1bb4586b57"
  },
  {
    "url": "assets/css/0.styles.47ca9a81.css",
    "revision": "5466903317c24926eb4ce5a2c6d2aedd"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/pay1.8e35793f.png",
    "revision": "8e35793f139db425b3bee4b65312bc85"
  },
  {
    "url": "assets/img/pay2.62bd064a.png",
    "revision": "62bd064a2916d05287fd84558c95eff6"
  },
  {
    "url": "assets/img/qr.ee193d28.jpg",
    "revision": "ee193d2841cd47e179326d50d67312f9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b1000a0c.js",
    "revision": "0a9a89e11a946c6ffc04a6e0fea1c9f2"
  },
  {
    "url": "assets/js/11.f73f8c81.js",
    "revision": "dd5f5cc65c9a9e7074d9f148c39dae39"
  },
  {
    "url": "assets/js/12.114ac033.js",
    "revision": "634a40dc71e31c60f067eb4698259fd3"
  },
  {
    "url": "assets/js/13.873f97fc.js",
    "revision": "74c9d1e3cd1c8569419cc9c2ba277c20"
  },
  {
    "url": "assets/js/14.63641071.js",
    "revision": "2e3fae2df5b64cd8fa2295417936f53e"
  },
  {
    "url": "assets/js/15.e3d73a4f.js",
    "revision": "284f3b8575ea7aa249b77280e0ae1f42"
  },
  {
    "url": "assets/js/16.e42ca59a.js",
    "revision": "29fdc148211c2f8c72f4e83d4042d2b6"
  },
  {
    "url": "assets/js/17.8300c22c.js",
    "revision": "83414f0731f19041c22b3ebed7e7a3fe"
  },
  {
    "url": "assets/js/18.fb6ca202.js",
    "revision": "e4ff1c6bd0aee21f2dfe39d65692a2ce"
  },
  {
    "url": "assets/js/19.01f87698.js",
    "revision": "f41daee78e2051e3d728dc1bfd162800"
  },
  {
    "url": "assets/js/2.06dc8c87.js",
    "revision": "3a098c1c36f790d5b4feb2aad3819133"
  },
  {
    "url": "assets/js/20.9c50de8c.js",
    "revision": "ef6b4def01a4f72ec0a68f8aa40b3b3d"
  },
  {
    "url": "assets/js/3.442dac1d.js",
    "revision": "01a64d1e4bcc5159e467d205595e8088"
  },
  {
    "url": "assets/js/4.05fc99b4.js",
    "revision": "0d9bc2614c67c88541251cbe7a6e0267"
  },
  {
    "url": "assets/js/5.da6548e5.js",
    "revision": "4400244a7388594fb287dbb33ea7126f"
  },
  {
    "url": "assets/js/6.0f9e3c74.js",
    "revision": "90c84c590f8eb202de85d147cb38e0ad"
  },
  {
    "url": "assets/js/7.ffabbb10.js",
    "revision": "40f8caac2f87a1981d130540dcd22822"
  },
  {
    "url": "assets/js/8.e15f9f3a.js",
    "revision": "2ccae81c1a214071623bd9d304df8215"
  },
  {
    "url": "assets/js/9.d0f70575.js",
    "revision": "422654bf3f15437daf14db3254c98ebb"
  },
  {
    "url": "assets/js/app.d12b715e.js",
    "revision": "a13d38dfdd5af48636939b1842d3638e"
  },
  {
    "url": "docs/advance.html",
    "revision": "c3624946cf8c639e231ff96f67d5a57f"
  },
  {
    "url": "docs/base.html",
    "revision": "0523f1e7e6edbcdcbfc98cc6edc41243"
  },
  {
    "url": "docs/comprehensive.html",
    "revision": "575470f27979b41d50660bb711b4946e"
  },
  {
    "url": "docs/computed-base.html",
    "revision": "82124149f6948a363715e9b902e09f10"
  },
  {
    "url": "docs/detail-expain.html",
    "revision": "62c70f5b7d54a8946603b5ff80699646"
  },
  {
    "url": "docs/excellent.html",
    "revision": "7f54ecd774bbac392cc6569cfdb77297"
  },
  {
    "url": "docs/handwritten.html",
    "revision": "a1f94545dbf7870359ba83ff43f4dbd5"
  },
  {
    "url": "docs/improve.html",
    "revision": "de2377a19bfa3335ed8d304f5647367b"
  },
  {
    "url": "docs/interview-experience.html",
    "revision": "5c1d2107333904451ba9c570e567b538"
  },
  {
    "url": "docs/qa.html",
    "revision": "186aac0ee11edc6d63ca3ce5062c55d3"
  },
  {
    "url": "docs/review.html",
    "revision": "e23fdd2742b403a4e97e6ceb4a24ad65"
  },
  {
    "url": "docs/simply.html",
    "revision": "f410da0d9bf1b60046fde3e179f03263"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "f652204dc5404f20fcb53c349be925d6"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "qrcode.jpg",
    "revision": "ee193d2841cd47e179326d50d67312f9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
