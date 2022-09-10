'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d2cee30012ec8f743a92e6a2f7d0b2d7",
".git/config": "22c521d986474b5bc2a5af924c8b96db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5ea25a6933188f01893056c93ebb1725",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dd1e6fea376dc0392094b56e718204fc",
".git/logs/refs/heads/main": "dd1e6fea376dc0392094b56e718204fc",
".git/logs/refs/remotes/origin/main": "51198c356b1f1ec5cafb213d7f1d1524",
".git/objects/01/9d7cf8a0f1fb02f5fb5420d8618ed2db25b723": "e7f98fb14ef0e5636e156150fc5547fd",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/04/ea9864bc97de241c0dde36892f1f0b2781bc3d": "466fdc480d84b820b7cd1b7ac8c4c17b",
".git/objects/0d/3ab2990ac3ce6246af7016cda167a85d34d171": "8ab504fa51a476320b56f71b515bf41d",
".git/objects/0f/bb75266ba35f315d59cb3e366ab87a8386d419": "cb64e491a475d4d9aeea650a156af164",
".git/objects/10/ee4ba41c4914d6fd519c9b666b405065e062cc": "bc75dcd11aa3a614515f1535682863ba",
".git/objects/11/d585d7142cde53edb0f3e59f626a334f4ad5ed": "09473b863c5a979f3ab6b4af6f6d1a71",
".git/objects/13/253746545748391cf252980237addf233c54da": "7cf89182b641a63da031ace06073a4aa",
".git/objects/13/b098c28a0ee4a61427e457112862c9ba84a61c": "b631ba444c434436894170cbc792e396",
".git/objects/18/1902f0a3ec0af6aaff470fa774a07d274ef83a": "7782a8065b9ac5d6edac9e5199ee487d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/5e3f4a2ede3062c854efe3df0b33c54360c9b7": "3d8e56b787becf7f89f91c3a94a841ce",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/c76eb55192e40fbe9c7012862c9da1e150ffd6": "ee8a6a68d25e29ec3467878e9158e30b",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/2a/36a67ea9b8f6d360dbe74d475fd92289ead4d9": "ea8fee64de963c60a57be8f327c06085",
".git/objects/2a/8b2f2cdaf9db8a8fce080761c2d7ebf273556a": "8ae956837db8eccbed1d37dbcd2bf231",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/40ea81de82b4a3885ee461924ac1e08d348f58": "e316c99d83c77ef9a6f6b9ebe98e81ad",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/52/590fcbb3132cadb5cf9169607d383bb395d99f": "d62e1ccc021ec416f7bbd9f32a58508b",
".git/objects/56/9ff2ba45ea4d2414d8b56819107e3c2af3d9b2": "55aa73c5c4ec48f97dc214e36172a491",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/64/92aa07036073e137846daf6a64fd759a557d3e": "d7c5651a1ae4424acb8ab802405bc853",
".git/objects/68/fcce7c3d169ef6887f829a30cada3893254f4d": "f1d029c143abea917ade648541abc036",
".git/objects/72/93d97430383cef4be3725ddc0ecdab1ec8ca32": "75a90426ac4c33e13af8b7a23fd7c095",
".git/objects/75/bbf573a618edb9dea69396a3563d2a4d21fcfc": "ef9823d89151989e2df533c5f28c1424",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/5c92586a3693eaabefae5421f0484d092b7ab2": "603f68364750e5190a98fd66327ebe80",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/f8198390109e364792bb570c3449616f81fc38": "acf83125b744ff5d5a7658a2ccbe8eb5",
".git/objects/86/83bc586db319e8d2903e7ecb4086e51fa8e2ed": "dfcd3d68bde978ebf3be89ca49ca951f",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/8a/0e06cc78c2181d55317201f4393830f45609aa": "200f2a36a1a0d1f6fc5fb99277b29dc3",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/96/148e9eb425bd8297842bbb1ac9c066a0b51fda": "e9eabf7ee8383c4cfee5e2369cadc72c",
".git/objects/96/c6210f5cb3e1ace473e78534e2da10673b5d2a": "ea2a150860fd125f42f92791677da4c8",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9e/f7d1c494652fecf39d6a6cf8bf26df777eb391": "a0a2416cfc50b32afb6166d491909471",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/2c25c0980889741ad3d8ab091da24ad7c906fa": "e0329074fbe7247629373a414d90af7b",
".git/objects/b1/91c72cd1ae2498f1ac6c3a06c548f1b30ef67b": "739ba90b91a33937e3549b3680f00afb",
".git/objects/b2/65e0c8c0ae5ccaa117a676918f842f5d66aa85": "c983aaaff49c2911e136a79e96de844d",
".git/objects/b4/a63bc99c27363a1b0f5ac019e10ebd483d5b92": "f2f10e1583f5429c4e9b4d713f0ca942",
".git/objects/c4/6dd330c76e1d1330425a88304427d5e92e83f0": "009a8664c63f7af13f8a50787ae593ee",
".git/objects/c6/0f7e9439188b5db2e31613403c37fa199d85a8": "dd742b4089954fdd9589dc315afb7e96",
".git/objects/c6/876e0a9d79bb88d995a5918c6d4a60d1e2c0a9": "a9eea1365c174c2e78cea0f152fea75e",
".git/objects/c6/a729b8c3896a1b28e20b75b4952bbd1f767941": "4d9dd4c234f01a86f30fbed0b51ac311",
".git/objects/c7/7177d5262c4d1072ff49472ec88b87bfd8a104": "be1e0a8c92932cf49f357f1fa5f483cc",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d8/46dde5fdd08cbd6c5266cd65a2c9d1971ba130": "9f513cc639a48176acdbc8184114a846",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/4c5cab50607f60dd41cdbde2cac56433225c9b": "3ef9466c52b16a0b6989c7775eb08b2a",
".git/objects/ee/d129533e0aa6829c045765797142d6567180a7": "fe7b0c37c9b6c34004b97c3e035c795d",
".git/objects/f5/894d1eca5a71b508c370a07a15cb9364621e03": "e611655ab29b9380efe0bd8209a03aa5",
".git/objects/f6/5a7c056a32d30deb65e86e416dbb0242bf1cc5": "bf58a8f15e50478b8b9272bf965d8723",
".git/objects/f8/51ed6a509d506f1d7be38a882b7ac53ff00e20": "a8e27209a00b766a6e31956221fbb5fc",
".git/objects/f8/53824ae6f7d54b7dbe5a1feca03d8bc97b4fce": "b05a449861c06306a936705c9eecd79c",
".git/objects/f8/9569863613dd4ba5547633a4b6073c3d475c3e": "b8649f719c79a605889e2288b6241fff",
".git/refs/heads/main": "976ae13c0829802fb24afc518240f8bc",
".git/refs/remotes/origin/main": "976ae13c0829802fb24afc518240f8bc",
"assets/AssetManifest.json": "3183fef8bd7f1fcc1e617a9d94316877",
"assets/assets/freelance1.png": "75c7bcf24d5d48ebd48c402da4eb8a17",
"assets/assets/intern1.png": "a12829f07fe54478bd34d5ff3505c6dd",
"assets/assets/intern2.png": "0bfcf78be4be91fb97af0d60b66dabc7",
"assets/assets/pic1.png": "634995aae8fdba9b23dfd0abfb83e590",
"assets/assets/pic2.jpeg": "2b3e290821e1af50d61e54e653ad95d2",
"assets/assets/proj1.png": "baeb0f6368d2c57b996fc498bdc40f61",
"assets/assets/proj2.png": "545b7b9647a97e8b3b03e95adf8b0ecf",
"assets/assets/proj3.png": "3267349ef9a6f278c92b57461577c558",
"assets/assets/proj4.png": "8cc5fba2f33ce367d3cb49cb497b106e",
"assets/assets/proj5.png": "406e418d7c0fb74a40a6a54b1dd1ea9b",
"assets/assets/proj6.png": "b421dbaac1440f47905b7b6c2f342a9e",
"assets/assets/proj7.png": "47d3adf10461cd7c9e169e43a0c29155",
"assets/assets/proj8.png": "a2b3621af7aa7ceac4bcd356238d08b1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c03151c4caf98300312847a0aa72b3c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "c00ec38266b0f3e511ce9a734df9ffb3",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5ab43d8a72154cb52b44f87d6a8225f1",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "5855ceaed8414da65f92f30872114e45",
"icons/Icon-512.png": "83fb7dd9223da26c4c931a140a31073b",
"icons/Icon-maskable-192.png": "5855ceaed8414da65f92f30872114e45",
"icons/Icon-maskable-512.png": "83fb7dd9223da26c4c931a140a31073b",
"index.html": "25f2088366d390b6e21aed0827e165a5",
"/": "25f2088366d390b6e21aed0827e165a5",
"main.dart.js": "cc600dd6c2cfd8b531bb46e71ea68aa0",
"manifest.json": "4c1321a0002601686cd26e812c117f90",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "17e7c19e310f5cc494b4463c0bb9b20c",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
