/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CS/CS61B/CS61B-SP21-Week1-report/index.html","fa40cb74234e84830c8135bca3379329"],["/CS/CS61B/CS61B-SP21-Week2-report/index.html","e59b46782b131efd9e16a5cbf0713f8d"],["/CS/CS61B/CS61B-SP21-Week3-report/index.html","4f30f46f021a34c1bfd4ef36c7362ded"],["/CS/CS61B/CS61B-SP21-Week4-report/index.html","c641580075f2d00670a31a05f52b2004"],["/CS/CS61B/CS61B-SP21-Week5-report/index.html","d563f11c218158381ce3bd4d6af1a9ff"],["/CS/CS61B/CS61B-SP21-Week6-report/index.html","618e9a48d8123dae9a08702e9315e807"],["/CS/CS61B/CS61B-SP21-Week7-report/index.html","62eedeaea8adb723b1ab7d4a2aadff00"],["/CS/CS61B/CS61B-SP21-Week8-report/index.html","75cc3c173102d211f7abc81e39addbc0"],["/CS/React/TSNote/index.html","087a5e5007636114d97fe31fdfbb31bb"],["/CS/React/temp/index.html","87611db302d16cb2f4da1c309a1c3a03"],["/CS/cover.jpg","2e9c35956c00b874c67eebce5e7f4a7a"],["/CS/cpp/QT/Note/index.html","7857fb005994e2b11c1d30eae0703572"],["/CS/cpp/题练簇/数据结构与算法-题练簇/index.html","3d0641a318cfb11fd1d9707513ac87b1"],["/about/index.html","ea07e39a1e16f770bd41595ff53a2d0f"],["/archives/2024/02/index.html","93bb2bc9f1e3fe58ffdca13deaa8c54d"],["/archives/2024/03/index.html","db368af1ea6d1f1c93072ce760dd6025"],["/archives/2024/04/index.html","274d1ecedd238ab1337fae720d2e88a3"],["/archives/2024/05/index.html","f554157e687c850ed7d170f6417d6add"],["/archives/2024/07/index.html","01fb0257ba3c5bfabba51eb59781e5e5"],["/archives/2024/index.html","37ccce5c45f1ba3962e524ca876e8ac6"],["/archives/2024/page/2/index.html","f8c40840e32dfa3190ef867abd8ec118"],["/archives/2024/page/3/index.html","78f8f5c63dc3ea771afa55081c068369"],["/archives/index.html","4bbc15e1c5adcbe2e333c63e95e2501f"],["/assets/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/assets/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/assets/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/assets/avatar.jpg","8a9a609800287abcb6136f8294649689"],["/assets/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/assets/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/assets/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/assets/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/categories/CS/CS61B/index.html","4101976b29e841ec60d7af73c84fac98"],["/categories/CS/React/TS/index.html","8ca83e2cc6879d7725e36aca0dac7b4e"],["/categories/CS/React/index.html","8cc01daab1d65a78da157bb8679f7a1a"],["/categories/CS/TS/index.html","bf1247e50428e40f60447281c2f83754"],["/categories/CS/cpp/QT/index.html","588a7e55b1e7dc9a2a3703659fa2ccf9"],["/categories/CS/cpp/index.html","62b0cd0ba05f79eef3e94ac5d87cec14"],["/categories/CS/cpp/题练簇/index.html","e2e2067486f38434cbe3a60e632c64a1"],["/categories/CS/index.html","0b66e6b0835ada8aa83167b0f0747545"],["/categories/CS/page/2/index.html","232dcc2b573dd62bcf996c711d90c5e4"],["/categories/index.html","1fc6e69e63581568edcf69978f904e81"],["/categories/languageStudy/index.html","38c3d6ab59098916026eace08e00cd27"],["/categories/languageStudy/日本語/index.html","6eebd02faadbe18815ae436d005d7671"],["/categories/languageStudy/日本語/词簇/index.html","8a9ecebd04b71bad56490900fb15ca18"],["/categories/languageStudy/日本語/语法句簇/index.html","d9fe07511f7e10954fc92c53b9512635"],["/categories/shokax/index.html","51809ec49d3bd45f9d6d9b49fabcde59"],["/categories/shokax/shokaXlog/index.html","3f860936243726406535b72b3f467eb1"],["/categories/toolCode/index.html","51a52085e1b6ac5f96922c48fd385a6c"],["/css/app.css","b9da0db8be5a6597654512f28dcc66bd"],["/css/mermaid.css","eec9a4b1de0a3fb3c32c1b4a95b5a537"],["/css/optimize.css","1b85d129bf759ab097a6b69d7191e6b1"],["/index.html","42878e4986f770171668d437c0bbbd7f"],["/js/chunk-DOULWTAQ.js","0a15fb28eda4a67980ea8e282eb55a41"],["/js/chunk-GX7YDKHH.js","e551fc9efd2039d547b03ad313bbfe42"],["/js/chunk-KYUUYBZH.js","4c1f8f0b9dc452d9913875c1be6074a2"],["/js/chunk-QGM62ATE.js","012839100a58d35001fac35a77a7cf85"],["/js/chunk-QZYERO2P.js","44e0c9c948406b1ad314086db086f74e"],["/js/comments-I7MRCHQB.js","f783d774a842da81aff1c1ddaf2b7450"],["/js/index.esm-VHAZSVU5.js","b915d99b854d7dc51ffe06480a0335f8"],["/js/post-A5PPTEXL.js","0ef2b825e760494791abd86c925cedc7"],["/js/quicklink-TSXH5ZQW.js","39397c4ef6c511beef6ccacc1d60ab30"],["/js/search-R7I6QHOD.js","2a4d00a1bf94b0292a55b6b13935aa22"],["/js/siteInit.js","b2779a3feff00e6f636610e62adf5d57"],["/languageStudy/cover.jpg","9e9ee7f3be3fa6d3864fb2f1b889e1da"],["/languageStudy/日本語/词簇/第一课/index.html","80f55cd8c833f5678dcaeb291db482e4"],["/languageStudy/日本語/词簇/第三课/index.html","4dfbb26e72161f4574c0deee050dc413"],["/languageStudy/日本語/词簇/第二课/index.html","a2b42c17f6e37a1e213d03903618fe5e"],["/languageStudy/日本語/词簇/辞書/index.html","f2b418e44df6d4d326c08746089eda12"],["/languageStudy/日本語/语法句簇/语法杂句/index.html","d9db090e16c0ba4545daa73b80eb8bc3"],["/page/2/index.html","323e34294310580b2704f935660d30d5"],["/pic/CS/CS61B/week2/1.png","66fb8e60beb96207d26bbb9f840e3e4a"],["/pic/CS/CS61B/week2/2.png","ddb7c55b870b09b14518f5388e94f080"],["/pic/CS/CS61B/week2/3.png","549fb34f53c92101b35f7ed10ae622cd"],["/pic/CS/CS61B/week2/t1.png","828febd2792c6271a344ac1341cfbb58"],["/pic/CS/CS61B/week2/t2.png","485db1d064d46f7ac7a1d84490bbe8d5"],["/pic/CS/CS61B/week2/t3.png","d2fd3e5eb90e2f561693cd203ba085c2"],["/pic/CS/CS61B/week2/t4.png","c8ca272ab6227cf3a3c2d9bf307aa54f"],["/pic/CS/CS61B/week2/t5.png","bba4b48fbe90c7386d9e80de3750952a"],["/pic/CS/CS61B/week2/t6.png","ec1195bba52468e05c08a82ec94cc491"],["/pic/CS/CS61B/week3/1.png","e6777405ee0639724e4884007f13fc9a"],["/pic/CS/CS61B/week3/2.png","416ea17d9c83e0f11c6256eb098bd94d"],["/pic/CS/CS61B/week3/3.png","81f3a9b69975df98701513f197b03ef5"],["/pic/CS/CS61B/week3/4.png","c6f9cc56893c80b5094e3a20990c064d"],["/pic/CS/CS61B/week3/5.png","c947b7c39817c7fb75353f8cad85a6d0"],["/pic/CS/CS61B/week3/6.png","5adb2ea1d160227e62b3f76e7e673582"],["/pic/CS/CS61B/week3/7.png","1af0beeda88fe56cb10885b030c0dbc6"],["/pic/CS/CS61B/week3/8.png","8205e2994ef077f12533497c77abe358"],["/pic/CS/CS61B/week3/p1.png","e8bfce389b6cc64b0e9b89e35cb911bb"],["/pic/CS/CS61B/week3/p2.png","80a0a6846993650679b06967252bfe2a"],["/pic/CS/CS61B/week3/t1.png","fb4dcc29fb3c3ea4f7bce6a232cc701d"],["/pic/CS/CS61B/week3/t2.png","3d7d84f9554bd26de082222c5a4917ee"],["/pic/CS/CS61B/week3/t3.png","ac0e9d2e0341bd063fdd8e04b9d548e8"],["/pic/CS/CS61B/week3/t4.png","0790218a27d6fefebdc8b60115baa8ed"],["/pic/CS/CS61B/week3/t5.png","77cf9136b72afab4231be31368a4c815"],["/pic/CS/CS61B/week4/1.png","b37ae72fbd45ec92b227976e7dceaeb0"],["/pic/CS/CS61B/week4/2.png","f85e1a0ae45bd68812725a73bb03b9d6"],["/pic/CS/CS61B/week4/3.png","2a239f8095fb5da91e6c08c36e54cc4f"],["/pic/CS/CS61B/week4/4.png","bfc9418e4778bc097374117598e56b75"],["/pic/CS/CS61B/week5/1.png","612c3c87c6ca70d8f3f3a66e56872276"],["/pic/CS/CS61B/week7/1.png","7d16427ca96e36222da931faf5316c02"],["/pic/CS/CS61B/week7/10.png","5fa2e2b45714341a8680593084deb282"],["/pic/CS/CS61B/week7/11.png","5987f74a253b910ec8fd66fbef628f7b"],["/pic/CS/CS61B/week7/2.png","7a3d000383043bf7167f07156ba24b85"],["/pic/CS/CS61B/week7/3.png","da25df316bd2abb88cec0bd7c693f882"],["/pic/CS/CS61B/week7/4.png","08bd812c307c53a45408204b788d4099"],["/pic/CS/CS61B/week7/5.png","84fb0278d64e8a2bedb03bf50ee98d40"],["/pic/CS/CS61B/week7/6.png","9ca6487860fa25d9e8ee20d8874426b2"],["/pic/CS/CS61B/week7/7.png","14348d944047f8e004c217c4dd6fb214"],["/pic/CS/CS61B/week7/8.png","9d5cce353bfa319597ab6e780d90dd0b"],["/pic/CS/CS61B/week7/9.png","ac31ca76f3e15b5dd5628fc1ca3d9ca0"],["/pic/CS/CS61B/week8/1.png","a439cecf17087de8cf0e09b31e3969c9"],["/pic/CS/CS61B/week8/2.png","f6395706119c68a46732637273ef6fa1"],["/pic/CS/CS61B/week8/3.png","805c997b875f066479b1f4d7bc986d67"],["/pic/CS/QT/Note/1.png","78319d4ff6b37a8e68cb8c603cc2ae14"],["/pic/CS/QT/Note/2.png","6e880cd34a702c3e9aacc29db0af8757"],["/pic/CS/QT/Note/3.png","bc5b70e507a1e12e8f4f73b039401684"],["/pic/about/1.png","f88f2f9a2401fffcb3ad29b0a69ca89b"],["/pic/settings/2.png","68589a6408f36f84bd9cfac7f99d6fb2"],["/pic/shokax/log_1/1.png","715002a190ed2540e74aaa97646e6b3d"],["/pic/shokax/log_4/1.png","eeda207312f4bdabaa657981a17bfedd"],["/pic/shokax/log_4/2.png","6be55eb5d413d0fac510a679d24f0f3d"],["/pic/shokax/log_4/3.png","541eca95b3779c6ae0ab1114dbd62c30"],["/pic/shokax/log_4/4.png","b765aa1b2d3aa199faa13dedf96d1673"],["/settings/index.html","60820618492724f8ed93be7ce167e355"],["/shokax/cover.jpg","9b9720f41b9f97218914658913ea4d08"],["/shokax/shokaxLog/shokax-log-2/index.html","4c894744d5514e4051c5358297eb3470"],["/shokax/shokaxLog/shokax-log-3/index.html","d1fd5515da8276f8845e70e205d35346"],["/shokax/shokaxLog/shokax-log-4/index.html","a86ad5dcab80f61875e20be1b73de59f"],["/shokax/shokaxLog/shokax-log_1/index.html","59c65c5622394429880e2be58eb88c4b"],["/sw-register.js","6d48f76107b30722120e7178a00cadcf"],["/tags/CS61B/index.html","4b374d75d9eedb8b1f5ec7f90e207649"],["/tags/QT/index.html","2ec76d1043a4c04eda162ea20c398aeb"],["/tags/React/index.html","8a88151c8c08eec1ff48aa3fd0d4be19"],["/tags/TS/index.html","906012018dcbd5365fd8de668ae67523"],["/tags/Web/index.html","3121bc57c3201f022aabc289f997c577"],["/tags/cpp/index.html","f4fb38c637bfbe38dc808afd9dd563f1"],["/tags/index.html","8e9e12642d63bfb1b19a3485ac9fad4d"],["/tags/java/index.html","ef3b32c6325e82d71d1a237bfe5e331a"],["/tags/log/index.html","31f368cb2105587ddedc4c5cdf966cfb"],["/tags/工具文件/index.html","b8ff2a3df622af9ee63a4e387e761bde"],["/tags/数据结构与算法/index.html","05dee701d7f5e08f5835943eab129f8d"],["/tags/日本語/index.html","fe2019c9a23ff2f53c117e14676378d5"],["/tags/自定义头文件/index.html","670e15dab9f83ef4d72e0068c49d2cf1"],["/tags/语法句簇/index.html","7de41016bd40e334e11e386430cdcf55"],["/tags/题练簇/index.html","b0bc645b4c5a6b0bfd2d7b8780164462"],["/toolCode/cpp自定义头文件/index.html","b5ac03d971660e95567b4cbfe128d3ef"]];
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
