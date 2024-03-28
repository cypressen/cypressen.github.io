/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CS/CS61B/CS61B-SP21-Week1-report/index.html","8ee7cc813d429d559eeb8849048472f2"],["/CS/CS61B/CS61B-SP21-Week2-report/index.html","c0a9a26d0596019cd12096640aeff82e"],["/CS/CS61B/CS61B-SP21-Week3-report/index.html","2857ec8a8e252c425ed1a98a0ad659e4"],["/CS/cover.jpg","2e9c35956c00b874c67eebce5e7f4a7a"],["/CS/cpp/题练簇/数据结构与算法-题练簇/index.html","e641ee9ca8eb30966c58b95a11a066b0"],["/about/index.html","2498d2d493eaab6a77cb9c0c4e4c9fda"],["/archives/2024/02/index.html","220c2d77f15a320cc205b174e02e8cde"],["/archives/2024/03/index.html","d4c004127ea3b3f256c182d8cdf6d7df"],["/archives/2024/index.html","6202f07b0aa2bd233ad3538506d696a4"],["/archives/2024/page/2/index.html","78198750c656fef3426898b3d7df1683"],["/archives/index.html","ebfcd4e49154d81b0e0132716b18e9ab"],["/assets/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/assets/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/assets/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/assets/avatar.jpg","8a9a609800287abcb6136f8294649689"],["/assets/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/assets/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/assets/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/assets/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/categories/CS/CS61B/index.html","f2fe6dee05420a6b22843314e58f19fe"],["/categories/CS/cpp/index.html","8d2e72a10ccc2870fba9a6b37dd3cdda"],["/categories/CS/cpp/题练簇/index.html","4609a19dfd302a3c78ef18b21246ef02"],["/categories/CS/index.html","009a3085b3796496169a4f5cf9abc2d1"],["/categories/index.html","1fc1e1d3e928b56d13d4efc321e57c9e"],["/categories/languageStudy/index.html","5570b2aa444d6d1b335b203813c09def"],["/categories/languageStudy/日本語/index.html","484d0f08dd775d803db303930bc36d47"],["/categories/languageStudy/日本語/词簇/index.html","056744fff6c04b0d4e4bb3610c5426c4"],["/categories/languageStudy/日本語/语法句簇/index.html","dae45080a0e907c4ec6344f1d7cea752"],["/categories/shokax/index.html","e9e41e641198dd74ca47c24b7671c1ad"],["/categories/shokax/shokaXlog/index.html","fdba2387ff6975b9acbecc317d6f14bd"],["/categories/toolCode/index.html","2339a9d568c82ec77e69eae06e2c2b33"],["/css/app.css","b9da0db8be5a6597654512f28dcc66bd"],["/css/mermaid.css","eec9a4b1de0a3fb3c32c1b4a95b5a537"],["/css/optimize.css","1b85d129bf759ab097a6b69d7191e6b1"],["/index.html","3f1e02868cfb29f6102a3ea15abf84b5"],["/js/chunk-DOULWTAQ.js","0a15fb28eda4a67980ea8e282eb55a41"],["/js/chunk-GX7YDKHH.js","e551fc9efd2039d547b03ad313bbfe42"],["/js/chunk-KYUUYBZH.js","4c1f8f0b9dc452d9913875c1be6074a2"],["/js/chunk-QGM62ATE.js","012839100a58d35001fac35a77a7cf85"],["/js/chunk-QZYERO2P.js","44e0c9c948406b1ad314086db086f74e"],["/js/comments-I7MRCHQB.js","f783d774a842da81aff1c1ddaf2b7450"],["/js/index.esm-VHAZSVU5.js","b915d99b854d7dc51ffe06480a0335f8"],["/js/post-A5PPTEXL.js","0ef2b825e760494791abd86c925cedc7"],["/js/quicklink-TSXH5ZQW.js","39397c4ef6c511beef6ccacc1d60ab30"],["/js/search-R7I6QHOD.js","2a4d00a1bf94b0292a55b6b13935aa22"],["/js/siteInit.js","b2779a3feff00e6f636610e62adf5d57"],["/languageStudy/cover.jpg","9e9ee7f3be3fa6d3864fb2f1b889e1da"],["/languageStudy/日本語/词簇/第一课/index.html","fca9e8ce577b60b50cce652bdf0e1e24"],["/languageStudy/日本語/词簇/第三课/index.html","55efddb47aec038225da527143f3711a"],["/languageStudy/日本語/词簇/第二课/index.html","b58b8a340b554d2f31b2c78babc8d5e8"],["/languageStudy/日本語/语法句簇/语法杂句/index.html","728473a2c0e23a3c44b0dac53418d936"],["/pic/CS/CS61B/week2/1.png","66fb8e60beb96207d26bbb9f840e3e4a"],["/pic/CS/CS61B/week2/2.png","ddb7c55b870b09b14518f5388e94f080"],["/pic/CS/CS61B/week2/3.png","549fb34f53c92101b35f7ed10ae622cd"],["/pic/CS/CS61B/week2/t1.png","828febd2792c6271a344ac1341cfbb58"],["/pic/CS/CS61B/week2/t2.png","485db1d064d46f7ac7a1d84490bbe8d5"],["/pic/CS/CS61B/week2/t3.png","d2fd3e5eb90e2f561693cd203ba085c2"],["/pic/CS/CS61B/week2/t4.png","c8ca272ab6227cf3a3c2d9bf307aa54f"],["/pic/CS/CS61B/week2/t5.png","bba4b48fbe90c7386d9e80de3750952a"],["/pic/CS/CS61B/week2/t6.png","ec1195bba52468e05c08a82ec94cc491"],["/pic/CS/CS61B/week3/1.png","10fa723233a8d907da0c33b847f8cd3c"],["/pic/CS/CS61B/week3/2.png","2b564c839cdebf430968e5f4575e8b60"],["/pic/CS/CS61B/week3/3.png","81f3a9b69975df98701513f197b03ef5"],["/pic/about/1.png","f88f2f9a2401fffcb3ad29b0a69ca89b"],["/pic/settings/2.png","68589a6408f36f84bd9cfac7f99d6fb2"],["/pic/shokax/log_1/1.png","715002a190ed2540e74aaa97646e6b3d"],["/settings/index.html","6c72c24edc805c3a2666615d15d052a5"],["/shokax/cover.jpg","9b9720f41b9f97218914658913ea4d08"],["/shokax/shokaxLog/shokax-log-2/index.html","da434cb3e454fb6afbcf952a69991318"],["/shokax/shokaxLog/shokax-log-3/index.html","f97be9a8dd0214bb2ff013d3e3284479"],["/shokax/shokaxLog/shokax-log_1/index.html","0350315ea56891d5dd5b580107fc8a6b"],["/sw-register.js","8d28921e4ad32e5189504b0d64d4eb06"],["/tags/CS61B/index.html","00d7da8a1d5d6a5fd5f37a0a9aa5cd61"],["/tags/cpp/index.html","49bc4ae095a66e025a0ec110f48030b7"],["/tags/index.html","ee5013f0c662a7d355fecb21bafe51d2"],["/tags/java/index.html","c11b8cb274c68be969977d512758272e"],["/tags/learningReport/index.html","ac246f1b9ef79955f6a322b3d63b9bc1"],["/tags/log/index.html","8be92739936da1b10441b1920234e04a"],["/tags/工具文件/index.html","ffdabd0198853c403a2925060da3c463"],["/tags/数据结构与算法/index.html","36b3b7767f1cc00eaf1fe26aec9733e6"],["/tags/日本語/index.html","5886b1064956e024665c58c4a3b184c4"],["/tags/自定义头文件/index.html","4c689adb0c7fb99e8fff17d73ad07d38"],["/tags/语法句簇/index.html","ad6577b7c35834b6f8381288060095e6"],["/tags/题练簇/index.html","1ab677cf3ba8387761cf310d35242849"],["/toolCode/cpp自定义头文件/index.html","19fad5bb48b51cf89301baf7458db491"]];
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
