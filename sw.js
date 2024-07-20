/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CS/CS61B/CS61B-SP21-Week1-report/index.html","0f432c435eb4956e5866afaf9b63afa9"],["/CS/CS61B/CS61B-SP21-Week2-report/index.html","44be2001e39d8524b5c4e6bf4ef0df0c"],["/CS/CS61B/CS61B-SP21-Week3-report/index.html","83f874923ede7029d0429ab170fc44ba"],["/CS/CS61B/CS61B-SP21-Week4-report/index.html","e6761de98615b6b78086532c74a29277"],["/CS/CS61B/CS61B-SP21-Week5-report/index.html","6dc724376699cf6ad6ef678e7cac55df"],["/CS/CS61B/CS61B-SP21-Week6-report/index.html","7cb45794f2393f91cc8d20ce18a51ece"],["/CS/CS61B/CS61B-SP21-Week7-report/index.html","2f9cbed348a0ec8a4c20820f20ae0bc1"],["/CS/CS61B/CS61B-SP21-Week8-report/index.html","8219f38eb62a6d26492c1f81a5ed098f"],["/CS/React/TSNote/index.html","dfe237c7854cec7c3e17688eb7623aa3"],["/CS/React/temp/index.html","ad71820b78a9adb5cc1552254337bf17"],["/CS/cover.jpg","2e9c35956c00b874c67eebce5e7f4a7a"],["/CS/cpp/QT/Note/index.html","e179d7d0a6a0e37c947c3cf8379b2eff"],["/CS/cpp/题练簇/数据结构与算法-题练簇/index.html","380c7be332833fdad544d45843faa4b2"],["/about/index.html","05f0e8daa1ec53c0572caec0f34e7574"],["/archives/2024/02/index.html","3f629405f8cc147a81a9360a5ad4439f"],["/archives/2024/03/index.html","901ef6f74aa23f9ca0a8b99e5ea22e83"],["/archives/2024/04/index.html","cfdae14b07bc501f2b0558e28b72a237"],["/archives/2024/05/index.html","3efbc4d9d3c4de062268ac899e1c7746"],["/archives/2024/07/index.html","7720072ad06404edb2f2428478187fc6"],["/archives/2024/index.html","1e4874bd7c58694eb401725b2cadc8f3"],["/archives/2024/page/2/index.html","63afe7c084c3730bd52c4b065cd3486d"],["/archives/2024/page/3/index.html","10db9df3e6262bce055cdf7ff56b6dc9"],["/archives/index.html","7e02c6b6f61ab64f332baee486daa80f"],["/assets/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/assets/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/assets/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/assets/avatar.jpg","8a9a609800287abcb6136f8294649689"],["/assets/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/assets/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/assets/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/assets/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/categories/CS/CS61B/index.html","6214a054cd0c7d22d6c8640110675054"],["/categories/CS/React/TS/index.html","7e02089fc30ad1e4b6c0e42632b84f43"],["/categories/CS/React/index.html","a77715c614ba63f3eec947f8fe8b3331"],["/categories/CS/TS/index.html","03292f5e57210e37b421a5dd89659135"],["/categories/CS/cpp/QT/index.html","2df4cd1459f870d6c59d1b7235242165"],["/categories/CS/cpp/index.html","a5c1f68bbb41348a8d933aca7e5c38f0"],["/categories/CS/cpp/题练簇/index.html","2c0ab1b1eb7a73dd9cefabd66c9e8d2a"],["/categories/CS/index.html","2d9fcffd31addc3fe16c6b798ebc646a"],["/categories/CS/page/2/index.html","c005895eb75e1d01daa2c88ac0c786c5"],["/categories/index.html","9ed3781e0e78096dcf1577c0a99be7af"],["/categories/languageStudy/index.html","45aeb1c522464cdd21cc4f37b635ce05"],["/categories/languageStudy/日本語/index.html","172c55c938163bd7b8e2f0a0ec5e5e5d"],["/categories/languageStudy/日本語/词簇/index.html","b6e2a52c2aba62da16f88b6721753ef1"],["/categories/languageStudy/日本語/语法句簇/index.html","2b6902f0e2bec1787d15d9932f48d044"],["/categories/shokax/index.html","e898329992a6eb5d770ffa1c2a67c7e7"],["/categories/shokax/shokaXlog/index.html","dad33de9e85f841e4b8f61da17404b60"],["/categories/toolCode/index.html","2a51c9b85d30728da5b97254f5ee3abf"],["/css/app.css","b9da0db8be5a6597654512f28dcc66bd"],["/css/mermaid.css","eec9a4b1de0a3fb3c32c1b4a95b5a537"],["/css/optimize.css","1b85d129bf759ab097a6b69d7191e6b1"],["/index.html","8dd9e25ef4c00627363bd6b9c58f2784"],["/js/chunk-DOULWTAQ.js","0a15fb28eda4a67980ea8e282eb55a41"],["/js/chunk-GX7YDKHH.js","e551fc9efd2039d547b03ad313bbfe42"],["/js/chunk-KYUUYBZH.js","4c1f8f0b9dc452d9913875c1be6074a2"],["/js/chunk-QGM62ATE.js","012839100a58d35001fac35a77a7cf85"],["/js/chunk-QZYERO2P.js","44e0c9c948406b1ad314086db086f74e"],["/js/comments-I7MRCHQB.js","f783d774a842da81aff1c1ddaf2b7450"],["/js/index.esm-VHAZSVU5.js","b915d99b854d7dc51ffe06480a0335f8"],["/js/post-A5PPTEXL.js","0ef2b825e760494791abd86c925cedc7"],["/js/quicklink-TSXH5ZQW.js","39397c4ef6c511beef6ccacc1d60ab30"],["/js/search-R7I6QHOD.js","2a4d00a1bf94b0292a55b6b13935aa22"],["/js/siteInit.js","b2779a3feff00e6f636610e62adf5d57"],["/languageStudy/cover.jpg","9e9ee7f3be3fa6d3864fb2f1b889e1da"],["/languageStudy/日本語/词簇/第一课/index.html","fdf050bb70210da62e50729fc90b1471"],["/languageStudy/日本語/词簇/第三课/index.html","2e4553b977ec800ab6d4bb7c71834b14"],["/languageStudy/日本語/词簇/第二课/index.html","1aa76239a69688b86e1568abbf8c9bc3"],["/languageStudy/日本語/词簇/辞書/index.html","fed9ae4daf2ca434bc4bc917c1c6fe20"],["/languageStudy/日本語/语法句簇/语法杂句/index.html","3c856937d354c776a78aaa3b684e8b17"],["/page/2/index.html","589e4b11ccdd896cab68dae6917abce1"],["/pic/CS/CS61B/week2/1.png","66fb8e60beb96207d26bbb9f840e3e4a"],["/pic/CS/CS61B/week2/2.png","ddb7c55b870b09b14518f5388e94f080"],["/pic/CS/CS61B/week2/3.png","549fb34f53c92101b35f7ed10ae622cd"],["/pic/CS/CS61B/week2/t1.png","828febd2792c6271a344ac1341cfbb58"],["/pic/CS/CS61B/week2/t2.png","485db1d064d46f7ac7a1d84490bbe8d5"],["/pic/CS/CS61B/week2/t3.png","d2fd3e5eb90e2f561693cd203ba085c2"],["/pic/CS/CS61B/week2/t4.png","c8ca272ab6227cf3a3c2d9bf307aa54f"],["/pic/CS/CS61B/week2/t5.png","bba4b48fbe90c7386d9e80de3750952a"],["/pic/CS/CS61B/week2/t6.png","ec1195bba52468e05c08a82ec94cc491"],["/pic/CS/CS61B/week3/1.png","e6777405ee0639724e4884007f13fc9a"],["/pic/CS/CS61B/week3/2.png","416ea17d9c83e0f11c6256eb098bd94d"],["/pic/CS/CS61B/week3/3.png","81f3a9b69975df98701513f197b03ef5"],["/pic/CS/CS61B/week3/4.png","c6f9cc56893c80b5094e3a20990c064d"],["/pic/CS/CS61B/week3/5.png","c947b7c39817c7fb75353f8cad85a6d0"],["/pic/CS/CS61B/week3/6.png","5adb2ea1d160227e62b3f76e7e673582"],["/pic/CS/CS61B/week3/7.png","1af0beeda88fe56cb10885b030c0dbc6"],["/pic/CS/CS61B/week3/8.png","8205e2994ef077f12533497c77abe358"],["/pic/CS/CS61B/week3/p1.png","e8bfce389b6cc64b0e9b89e35cb911bb"],["/pic/CS/CS61B/week3/p2.png","80a0a6846993650679b06967252bfe2a"],["/pic/CS/CS61B/week3/t1.png","fb4dcc29fb3c3ea4f7bce6a232cc701d"],["/pic/CS/CS61B/week3/t2.png","3d7d84f9554bd26de082222c5a4917ee"],["/pic/CS/CS61B/week3/t3.png","ac0e9d2e0341bd063fdd8e04b9d548e8"],["/pic/CS/CS61B/week3/t4.png","0790218a27d6fefebdc8b60115baa8ed"],["/pic/CS/CS61B/week3/t5.png","77cf9136b72afab4231be31368a4c815"],["/pic/CS/CS61B/week4/1.png","b37ae72fbd45ec92b227976e7dceaeb0"],["/pic/CS/CS61B/week4/2.png","f85e1a0ae45bd68812725a73bb03b9d6"],["/pic/CS/CS61B/week4/3.png","2a239f8095fb5da91e6c08c36e54cc4f"],["/pic/CS/CS61B/week4/4.png","bfc9418e4778bc097374117598e56b75"],["/pic/CS/CS61B/week5/1.png","612c3c87c6ca70d8f3f3a66e56872276"],["/pic/CS/CS61B/week7/1.png","7d16427ca96e36222da931faf5316c02"],["/pic/CS/CS61B/week7/10.png","5fa2e2b45714341a8680593084deb282"],["/pic/CS/CS61B/week7/11.png","5987f74a253b910ec8fd66fbef628f7b"],["/pic/CS/CS61B/week7/2.png","7a3d000383043bf7167f07156ba24b85"],["/pic/CS/CS61B/week7/3.png","da25df316bd2abb88cec0bd7c693f882"],["/pic/CS/CS61B/week7/4.png","08bd812c307c53a45408204b788d4099"],["/pic/CS/CS61B/week7/5.png","84fb0278d64e8a2bedb03bf50ee98d40"],["/pic/CS/CS61B/week7/6.png","9ca6487860fa25d9e8ee20d8874426b2"],["/pic/CS/CS61B/week7/7.png","14348d944047f8e004c217c4dd6fb214"],["/pic/CS/CS61B/week7/8.png","9d5cce353bfa319597ab6e780d90dd0b"],["/pic/CS/CS61B/week7/9.png","ac31ca76f3e15b5dd5628fc1ca3d9ca0"],["/pic/CS/CS61B/week8/1.png","a439cecf17087de8cf0e09b31e3969c9"],["/pic/CS/CS61B/week8/2.png","f6395706119c68a46732637273ef6fa1"],["/pic/CS/CS61B/week8/3.png","805c997b875f066479b1f4d7bc986d67"],["/pic/CS/QT/Note/1.png","78319d4ff6b37a8e68cb8c603cc2ae14"],["/pic/CS/QT/Note/2.png","6e880cd34a702c3e9aacc29db0af8757"],["/pic/CS/QT/Note/3.png","bc5b70e507a1e12e8f4f73b039401684"],["/pic/about/1.png","f88f2f9a2401fffcb3ad29b0a69ca89b"],["/pic/settings/2.png","68589a6408f36f84bd9cfac7f99d6fb2"],["/pic/shokax/log_1/1.png","715002a190ed2540e74aaa97646e6b3d"],["/pic/shokax/log_4/1.png","eeda207312f4bdabaa657981a17bfedd"],["/pic/shokax/log_4/2.png","6be55eb5d413d0fac510a679d24f0f3d"],["/pic/shokax/log_4/3.png","541eca95b3779c6ae0ab1114dbd62c30"],["/pic/shokax/log_4/4.png","b765aa1b2d3aa199faa13dedf96d1673"],["/settings/index.html","a3f2a8b030bf4fcddd4d10845369df26"],["/shokax/cover.jpg","9b9720f41b9f97218914658913ea4d08"],["/shokax/shokaxLog/shokax-log-2/index.html","bf710ae04724d01c01c1d14f23c8d428"],["/shokax/shokaxLog/shokax-log-3/index.html","7a0bbb04163fe718830338f0958b964f"],["/shokax/shokaxLog/shokax-log-4/index.html","cd280ec2765b6b97f97c4e59d0cc0988"],["/shokax/shokaxLog/shokax-log_1/index.html","c2c6622921106296c517081559b7b090"],["/sw-register.js","15130d5ba973670e3896f007bc3bc3f8"],["/tags/CS61B/index.html","13caea913432313a55ed751f814ca991"],["/tags/QT/index.html","5fa94e9375cf62f027f1ba013865d25b"],["/tags/React/index.html","4468adf322ee0d93cc211190b4a6ee5b"],["/tags/TS/index.html","ed29840ebad221eaf9c8f4e26f506f56"],["/tags/Web/index.html","7c99817040a94e6b68596d9362c38932"],["/tags/cpp/index.html","7120163cd941e0d0e6550cf9e737577b"],["/tags/index.html","9a9b7eed2401c1e6403a6db1adcd4f1c"],["/tags/java/index.html","40a9211a5cde2f839f6029af9215559a"],["/tags/log/index.html","100b71a888d959df9d2817a0da14e0d8"],["/tags/工具文件/index.html","d1d602c82bf217215ff4dae9011a23a7"],["/tags/数据结构与算法/index.html","e365e984927a54f441075a8f8e45cd05"],["/tags/日本語/index.html","21f59c32a2f37a1d60f5610a985424e7"],["/tags/自定义头文件/index.html","e3b4bb89fdd74dfa4cadc844ebe39264"],["/tags/语法句簇/index.html","53c36faae94a15843fe99cba74e8deb9"],["/tags/题练簇/index.html","7bc7a20994cb056abd23aff8285650f0"],["/toolCode/cpp自定义头文件/index.html","c03250872a20398f655ebb9597bacb32"]];
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
