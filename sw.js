/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CS/CS61B/CS61B-SP21-Week1-report/index.html","13780ea81437cd16868551f2499f2bb4"],["/CS/CS61B/CS61B-SP21-Week2-report/index.html","07d71d35ce51a2935751e9ec14e363c8"],["/CS/CS61B/CS61B-SP21-Week3-report/index.html","b296e2cd4fc0a7fdaf06312eb3706fb1"],["/CS/CS61B/CS61B-SP21-Week4-report/index.html","081d23b1c07168710128af1912bf176d"],["/CS/cover.jpg","2e9c35956c00b874c67eebce5e7f4a7a"],["/CS/cpp/题练簇/数据结构与算法-题练簇/index.html","f203ec9360d603eb1b20e4490f49ac01"],["/about/index.html","e6091fdd4c1585e172dc5ac72a2b706e"],["/archives/2024/02/index.html","457e7b4cc6f7df2eff9ef5e8f5b6d50c"],["/archives/2024/03/index.html","9ec7f95e1293e5000b863b12ab7cb4a1"],["/archives/2024/04/index.html","891db8aa24e67e27402c9eb8eed1fdc7"],["/archives/2024/index.html","27982028ff2378b33b8eb03f2e7acdd5"],["/archives/2024/page/2/index.html","972edd5b1b9a346cc20fa8ceeced8fd8"],["/archives/index.html","65c5f6d0f68e3bad5a17577c413a3586"],["/assets/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/assets/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/assets/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/assets/avatar.jpg","8a9a609800287abcb6136f8294649689"],["/assets/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/assets/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/assets/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/assets/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/categories/CS/CS61B/index.html","c6ee9cccef0bfc0d051b3fb921ab7488"],["/categories/CS/cpp/index.html","f8445db5f4788325553a2a9408e06e31"],["/categories/CS/cpp/题练簇/index.html","53b21d4643f790d5e33bec8b0460fbbc"],["/categories/CS/index.html","21f68329aaba0c68843956eb1bcc517b"],["/categories/index.html","fdfd330a7916a641943f7c507cc1e472"],["/categories/languageStudy/index.html","9af456888551b8523d8d22b8f3eadfa2"],["/categories/languageStudy/日本語/index.html","a23f5807aa9506ca2df5056f284f03dd"],["/categories/languageStudy/日本語/词簇/index.html","eab6376dfa32344a13578fe851d6c6f6"],["/categories/languageStudy/日本語/语法句簇/index.html","6f5fe25a4bbd4869dabd03465f44af0d"],["/categories/shokax/index.html","b057813241859d81a5a261dcc0cf5143"],["/categories/shokax/shokaXlog/index.html","d0184a4d00d82cdb4f2a5bb9efd309b6"],["/categories/toolCode/index.html","63c985234be24b98b992d51f5190e136"],["/css/app.css","b9da0db8be5a6597654512f28dcc66bd"],["/css/mermaid.css","eec9a4b1de0a3fb3c32c1b4a95b5a537"],["/css/optimize.css","1b85d129bf759ab097a6b69d7191e6b1"],["/index.html","97ab83f4a8fbdd5e6b1545d9b1770f72"],["/js/chunk-DOULWTAQ.js","0a15fb28eda4a67980ea8e282eb55a41"],["/js/chunk-GX7YDKHH.js","e551fc9efd2039d547b03ad313bbfe42"],["/js/chunk-KYUUYBZH.js","4c1f8f0b9dc452d9913875c1be6074a2"],["/js/chunk-QGM62ATE.js","012839100a58d35001fac35a77a7cf85"],["/js/chunk-QZYERO2P.js","44e0c9c948406b1ad314086db086f74e"],["/js/comments-I7MRCHQB.js","f783d774a842da81aff1c1ddaf2b7450"],["/js/index.esm-VHAZSVU5.js","b915d99b854d7dc51ffe06480a0335f8"],["/js/post-A5PPTEXL.js","0ef2b825e760494791abd86c925cedc7"],["/js/quicklink-TSXH5ZQW.js","39397c4ef6c511beef6ccacc1d60ab30"],["/js/search-R7I6QHOD.js","2a4d00a1bf94b0292a55b6b13935aa22"],["/js/siteInit.js","b2779a3feff00e6f636610e62adf5d57"],["/languageStudy/cover.jpg","9e9ee7f3be3fa6d3864fb2f1b889e1da"],["/languageStudy/日本語/词簇/第一课/index.html","d61c808f5ae5d4f9a9954ee58ea031c2"],["/languageStudy/日本語/词簇/第三课/index.html","e1eb2207ae09148758f3ba4be63cd284"],["/languageStudy/日本語/词簇/第二课/index.html","d73bad06933f2d039d3e4ef385e1f797"],["/languageStudy/日本語/语法句簇/语法杂句/index.html","fe190eb322c2a62658ef4858b297ab27"],["/page/2/index.html","667386a7bb2f28c00f4852899bd05f23"],["/pic/CS/CS61B/week2/1.png","66fb8e60beb96207d26bbb9f840e3e4a"],["/pic/CS/CS61B/week2/2.png","ddb7c55b870b09b14518f5388e94f080"],["/pic/CS/CS61B/week2/3.png","549fb34f53c92101b35f7ed10ae622cd"],["/pic/CS/CS61B/week2/t1.png","828febd2792c6271a344ac1341cfbb58"],["/pic/CS/CS61B/week2/t2.png","485db1d064d46f7ac7a1d84490bbe8d5"],["/pic/CS/CS61B/week2/t3.png","d2fd3e5eb90e2f561693cd203ba085c2"],["/pic/CS/CS61B/week2/t4.png","c8ca272ab6227cf3a3c2d9bf307aa54f"],["/pic/CS/CS61B/week2/t5.png","bba4b48fbe90c7386d9e80de3750952a"],["/pic/CS/CS61B/week2/t6.png","ec1195bba52468e05c08a82ec94cc491"],["/pic/CS/CS61B/week3/1.png","e6777405ee0639724e4884007f13fc9a"],["/pic/CS/CS61B/week3/2.png","416ea17d9c83e0f11c6256eb098bd94d"],["/pic/CS/CS61B/week3/3.png","81f3a9b69975df98701513f197b03ef5"],["/pic/CS/CS61B/week3/4.png","c6f9cc56893c80b5094e3a20990c064d"],["/pic/CS/CS61B/week3/5.png","c947b7c39817c7fb75353f8cad85a6d0"],["/pic/CS/CS61B/week3/6.png","5adb2ea1d160227e62b3f76e7e673582"],["/pic/CS/CS61B/week3/7.png","1af0beeda88fe56cb10885b030c0dbc6"],["/pic/CS/CS61B/week3/8.png","8205e2994ef077f12533497c77abe358"],["/pic/CS/CS61B/week3/p1.png","e8bfce389b6cc64b0e9b89e35cb911bb"],["/pic/CS/CS61B/week3/p2.png","80a0a6846993650679b06967252bfe2a"],["/pic/CS/CS61B/week3/t1.png","fb4dcc29fb3c3ea4f7bce6a232cc701d"],["/pic/CS/CS61B/week3/t2.png","3d7d84f9554bd26de082222c5a4917ee"],["/pic/CS/CS61B/week3/t3.png","ac0e9d2e0341bd063fdd8e04b9d548e8"],["/pic/CS/CS61B/week3/t4.png","0790218a27d6fefebdc8b60115baa8ed"],["/pic/CS/CS61B/week3/t5.png","77cf9136b72afab4231be31368a4c815"],["/pic/CS/CS61B/week4/1.png","b37ae72fbd45ec92b227976e7dceaeb0"],["/pic/CS/CS61B/week4/2.png","f85e1a0ae45bd68812725a73bb03b9d6"],["/pic/CS/CS61B/week4/3.png","2a239f8095fb5da91e6c08c36e54cc4f"],["/pic/CS/CS61B/week4/4.png","bfc9418e4778bc097374117598e56b75"],["/pic/about/1.png","f88f2f9a2401fffcb3ad29b0a69ca89b"],["/pic/settings/2.png","68589a6408f36f84bd9cfac7f99d6fb2"],["/pic/shokax/log_1/1.png","715002a190ed2540e74aaa97646e6b3d"],["/pic/shokax/log_4/1.png","eeda207312f4bdabaa657981a17bfedd"],["/pic/shokax/log_4/2.png","6be55eb5d413d0fac510a679d24f0f3d"],["/pic/shokax/log_4/3.png","541eca95b3779c6ae0ab1114dbd62c30"],["/pic/shokax/log_4/4.png","b765aa1b2d3aa199faa13dedf96d1673"],["/settings/index.html","b937b06be1b54b5b077f2d3e1d484214"],["/shokax/cover.jpg","9b9720f41b9f97218914658913ea4d08"],["/shokax/shokaxLog/shokax-log-2/index.html","48c0ff6e7c6f3f44644f86958e6ba739"],["/shokax/shokaxLog/shokax-log-3/index.html","73bab9b9f305330b295aab294ec7dda5"],["/shokax/shokaxLog/shokax-log-4/index.html","0c1145124e8a7c802145e701a9397311"],["/shokax/shokaxLog/shokax-log_1/index.html","52a3f6e6c3c8438288e64a8f234745ef"],["/sw-register.js","54ff75afc67d75bb442976d13b98fa6c"],["/tags/CS61B/index.html","0a6034b7958be1fb8b1013d187d8458c"],["/tags/cpp/index.html","02192b65875e4cbeaa7b06169d5459eb"],["/tags/index.html","6354a4c2dc3a46f073bb76cbb6226d46"],["/tags/java/index.html","64815d39fcc70d3bc01472e78fae2e8b"],["/tags/learningReport/index.html","7329e7c71bb292e8e8cf507e27dd3594"],["/tags/log/index.html","d5db67a15c5ac89609c7221177a345bb"],["/tags/工具文件/index.html","61a7aeb9dd40aa10759ef61623920dfa"],["/tags/数据结构与算法/index.html","32904cf6594284cf0ca634ea66145da8"],["/tags/日本語/index.html","b8aacb7732d0ca8f0ffa596c1af259a7"],["/tags/自定义头文件/index.html","a05cf22fd663dc5b171f08bc977ad2e6"],["/tags/语法句簇/index.html","557a634ae6e9c0ff189ce4a095bf1361"],["/tags/题练簇/index.html","d97403946334af0f0ec1c209eda4c7b9"],["/toolCode/cpp自定义头文件/index.html","133c389cfc19d42b882bdddb3eb041f4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
