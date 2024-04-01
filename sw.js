/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CS/CS61B/CS61B-SP21-Week1-report/index.html","c0169ebc281093e59ec8c52f3312200d"],["/CS/CS61B/CS61B-SP21-Week2-report/index.html","45ef3bece1bfc20931c3b3360d1be265"],["/CS/CS61B/CS61B-SP21-Week3-report/index.html","218f5b747ba2259462cf5a4a490b8dd0"],["/CS/cover.jpg","2e9c35956c00b874c67eebce5e7f4a7a"],["/CS/cpp/题练簇/数据结构与算法-题练簇/index.html","c2f24a1f2c3a56e273bace59fe11dc85"],["/about/index.html","25a10eecef627a90a4ccc70064c312da"],["/archives/2024/02/index.html","b9697711ca03fb6cbd4623f79889fad7"],["/archives/2024/03/index.html","65853410f4a38d2aa201f02ba7396c99"],["/archives/2024/index.html","62ccef40ce3721ba6184f4d93e55cc2c"],["/archives/2024/page/2/index.html","acf5fd13254348a625ec833f52a1e642"],["/archives/index.html","498c446a6fab6a818a0e040d8ce1c61b"],["/assets/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/assets/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/assets/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/assets/avatar.jpg","8a9a609800287abcb6136f8294649689"],["/assets/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/assets/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/assets/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/assets/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/categories/CS/CS61B/index.html","14ebcd9ddd790ab9644c63ec524ca867"],["/categories/CS/cpp/index.html","869cda9b761b4628c66beaaed815e7b7"],["/categories/CS/cpp/题练簇/index.html","30b1de3d0f856f51376bce25b4d6ab4c"],["/categories/CS/index.html","976565eaf1b2b057379ae45336461038"],["/categories/index.html","c8eab3ec75768b1f412c63770bb2167f"],["/categories/languageStudy/index.html","ad08e073a23d5f481333a17de6407012"],["/categories/languageStudy/日本語/index.html","d3dac6a2f3e0451be8d12e6dacadc9bc"],["/categories/languageStudy/日本語/词簇/index.html","54d3805aa521e42e95cfb49b41d054e9"],["/categories/languageStudy/日本語/语法句簇/index.html","fab3790c7cda303693a33094fd6f592e"],["/categories/shokax/index.html","e0e786818b49285260a1b13ff805a9ba"],["/categories/shokax/shokaXlog/index.html","3f4b353b84797452be40e5f2352f1479"],["/categories/toolCode/index.html","d8c3d5f4260b1f5381d2984095c8e3a9"],["/css/app.css","b9da0db8be5a6597654512f28dcc66bd"],["/css/mermaid.css","eec9a4b1de0a3fb3c32c1b4a95b5a537"],["/css/optimize.css","1b85d129bf759ab097a6b69d7191e6b1"],["/index.html","f98de70e2ca73cb7497dbc716a3f7569"],["/js/chunk-DOULWTAQ.js","0a15fb28eda4a67980ea8e282eb55a41"],["/js/chunk-GX7YDKHH.js","e551fc9efd2039d547b03ad313bbfe42"],["/js/chunk-KYUUYBZH.js","4c1f8f0b9dc452d9913875c1be6074a2"],["/js/chunk-QGM62ATE.js","012839100a58d35001fac35a77a7cf85"],["/js/chunk-QZYERO2P.js","44e0c9c948406b1ad314086db086f74e"],["/js/comments-I7MRCHQB.js","f783d774a842da81aff1c1ddaf2b7450"],["/js/index.esm-VHAZSVU5.js","b915d99b854d7dc51ffe06480a0335f8"],["/js/post-A5PPTEXL.js","0ef2b825e760494791abd86c925cedc7"],["/js/quicklink-TSXH5ZQW.js","39397c4ef6c511beef6ccacc1d60ab30"],["/js/search-R7I6QHOD.js","2a4d00a1bf94b0292a55b6b13935aa22"],["/js/siteInit.js","b2779a3feff00e6f636610e62adf5d57"],["/languageStudy/cover.jpg","9e9ee7f3be3fa6d3864fb2f1b889e1da"],["/languageStudy/日本語/词簇/第一课/index.html","04cd0dd871db1a33e84399e82d3b271d"],["/languageStudy/日本語/词簇/第三课/index.html","13705e429b76bcce57f0b229686aaaef"],["/languageStudy/日本語/词簇/第二课/index.html","a9ada0b24efa04d96683e56874025b63"],["/languageStudy/日本語/语法句簇/语法杂句/index.html","58d2468d860aa7d4fd3d0eab96f8ef48"],["/pic/CS/CS61B/week2/1.png","66fb8e60beb96207d26bbb9f840e3e4a"],["/pic/CS/CS61B/week2/2.png","ddb7c55b870b09b14518f5388e94f080"],["/pic/CS/CS61B/week2/3.png","549fb34f53c92101b35f7ed10ae622cd"],["/pic/CS/CS61B/week2/t1.png","828febd2792c6271a344ac1341cfbb58"],["/pic/CS/CS61B/week2/t2.png","485db1d064d46f7ac7a1d84490bbe8d5"],["/pic/CS/CS61B/week2/t3.png","d2fd3e5eb90e2f561693cd203ba085c2"],["/pic/CS/CS61B/week2/t4.png","c8ca272ab6227cf3a3c2d9bf307aa54f"],["/pic/CS/CS61B/week2/t5.png","bba4b48fbe90c7386d9e80de3750952a"],["/pic/CS/CS61B/week2/t6.png","ec1195bba52468e05c08a82ec94cc491"],["/pic/CS/CS61B/week3/1.png","e6777405ee0639724e4884007f13fc9a"],["/pic/CS/CS61B/week3/2.png","416ea17d9c83e0f11c6256eb098bd94d"],["/pic/CS/CS61B/week3/3.png","81f3a9b69975df98701513f197b03ef5"],["/pic/CS/CS61B/week3/4.png","c6f9cc56893c80b5094e3a20990c064d"],["/pic/CS/CS61B/week3/5.png","c947b7c39817c7fb75353f8cad85a6d0"],["/pic/CS/CS61B/week3/6.png","5adb2ea1d160227e62b3f76e7e673582"],["/pic/CS/CS61B/week3/7.png","1af0beeda88fe56cb10885b030c0dbc6"],["/pic/CS/CS61B/week3/p1.png","e8bfce389b6cc64b0e9b89e35cb911bb"],["/pic/CS/CS61B/week3/p2.png","80a0a6846993650679b06967252bfe2a"],["/pic/CS/CS61B/week3/t1.png","fb4dcc29fb3c3ea4f7bce6a232cc701d"],["/pic/CS/CS61B/week3/t2.png","3d7d84f9554bd26de082222c5a4917ee"],["/pic/CS/CS61B/week3/t3.png","ac0e9d2e0341bd063fdd8e04b9d548e8"],["/pic/CS/CS61B/week3/t4.png","0790218a27d6fefebdc8b60115baa8ed"],["/pic/CS/CS61B/week3/t5.png","77cf9136b72afab4231be31368a4c815"],["/pic/about/1.png","f88f2f9a2401fffcb3ad29b0a69ca89b"],["/pic/settings/2.png","68589a6408f36f84bd9cfac7f99d6fb2"],["/pic/shokax/log_1/1.png","715002a190ed2540e74aaa97646e6b3d"],["/pic/shokax/log_4/1.png","eeda207312f4bdabaa657981a17bfedd"],["/pic/shokax/log_4/2.png","6be55eb5d413d0fac510a679d24f0f3d"],["/pic/shokax/log_4/3.png","541eca95b3779c6ae0ab1114dbd62c30"],["/pic/shokax/log_4/4.png","b765aa1b2d3aa199faa13dedf96d1673"],["/settings/index.html","c946c524283cf567a59baa5b6ad0c4db"],["/shokax/cover.jpg","9b9720f41b9f97218914658913ea4d08"],["/shokax/shokaxLog/shokax-log-2/index.html","57decdf6a4e333ca6023f8b21a3b09d3"],["/shokax/shokaxLog/shokax-log-3/index.html","1685992b80bd7aac2df036e7ba9d250b"],["/shokax/shokaxLog/shokax-log-4/index.html","4dff824240e564a7b7dd503dd8c160a8"],["/shokax/shokaxLog/shokax-log_1/index.html","3d28e13c7dfe5d6ae0a1a89910df29c5"],["/sw-register.js","c80f1933a7b1a1ff83cda6ddb3ec1ba3"],["/tags/CS61B/index.html","b97fbde316881ef6c0fbd8e3e3a30f0e"],["/tags/cpp/index.html","2c78a63c069d71c282570ce2528d2a04"],["/tags/index.html","9da435df708964095c3cf0f1c98c6377"],["/tags/java/index.html","badeca8b9186ea38265f109db910ee98"],["/tags/learningReport/index.html","eb6c52f763aff48215c2e1a14f8469fe"],["/tags/log/index.html","9fa4252d1120fe7543177c813e98d4dc"],["/tags/工具文件/index.html","3f1c53f97360a5ddc2fce94003af7fc2"],["/tags/数据结构与算法/index.html","a022693b3aa3608378caeaa9e09d5655"],["/tags/日本語/index.html","15f2ec2034f2c412571886eb97524b24"],["/tags/自定义头文件/index.html","101e0f88664e0a337c767bf794cf953b"],["/tags/语法句簇/index.html","e483b369b4c5a394cef98ebf48ad63c2"],["/tags/题练簇/index.html","45a31b2f57b30bab4d487d977e100fe8"],["/toolCode/cpp自定义头文件/index.html","d0af104e168c329e4e65c72edaf7c77d"]];
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
