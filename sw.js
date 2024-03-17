/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CS/CS61B/CS61B-Week1-report/index.html","b8908e8358fe79e912dbc4345ccde2f1"],["/CS/cover.jpg","2e9c35956c00b874c67eebce5e7f4a7a"],["/CS/cpp/题练簇/数据结构与算法-题练簇/index.html","5dcba85dd3748fbfb16dde77edc1b899"],["/about/index.html","ad5f9eac23cb75f521dc2a69f8843e73"],["/archives/2024/02/index.html","0e231c21a20ee116764dea43d10eed40"],["/archives/2024/03/index.html","fd73be1949351dfe960eb6a98c996b68"],["/archives/2024/index.html","bfeabb1c69fe639d346c0bec5f9598b1"],["/archives/index.html","4d2d069fb0c15e795949eecd50c448c0"],["/assets/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/assets/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/assets/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/assets/avatar.jpg","8a9a609800287abcb6136f8294649689"],["/assets/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/assets/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/assets/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/assets/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/categories/CS/CS61B/index.html","b66c8d06b111db9082350a4cf9c01b92"],["/categories/CS/cpp/index.html","b7564f58382ca8d6141b03352f7640f1"],["/categories/CS/cpp/题练簇/index.html","834f0dadd56da2870144b2594cbc5026"],["/categories/CS/index.html","9d73248109607ce3360c1a3e7da18606"],["/categories/index.html","4b8eec05f42e9eff7388c7743871fa0a"],["/categories/languageStudy/index.html","4521db51f0bc9c05f82bc2edc23a0842"],["/categories/languageStudy/日本語/index.html","930e38e37429e63942dd63b6a33f574c"],["/categories/languageStudy/日本語/词簇/index.html","30a9f273f1e008339ccf54945dd15ece"],["/categories/languageStudy/日本語/语法句簇/index.html","13e639e3f636ce51838e662f8187ccb7"],["/categories/shokax/index.html","530eb3ea996358e2e84ad2e811ccacee"],["/categories/shokax/shokaXlog/index.html","004a97a10188cc5815a8a4e8d1f864a5"],["/categories/toolCode/index.html","d33271ab47b8f6d377bf845128bfdef7"],["/css/app.css","b9da0db8be5a6597654512f28dcc66bd"],["/css/mermaid.css","eec9a4b1de0a3fb3c32c1b4a95b5a537"],["/css/optimize.css","1b85d129bf759ab097a6b69d7191e6b1"],["/index.html","f4351878c545d362fb3025e6c8643867"],["/js/chunk-3ZL33KF6.js","4178356c439bcb355a5f2e1c60c53ece"],["/js/chunk-Q5MUQ2J3.js","049018bdd0c5f202a19c622d87e22380"],["/js/chunk-SIZNFQMX.js","f09b1fa3bbc84e8186669301705c05f7"],["/js/chunk-XTY3L22H.js","00eb8349a1c7f700a1da0ec835fbd121"],["/js/chunk-Y2UWMI4H.js","f5d99f706786fbff16ff8e9e941b277c"],["/js/comments-RIIDKWIL.js","c3f7bd8a4aa0b98e762f2b39c7eed4cc"],["/js/index.esm-OHQ4WVUM.js","9032470274b45e92ca4088f1386848a5"],["/js/post-5TRB42WG.js","2809a052e87b0f3a443ab99e224c2693"],["/js/quicklink-DBZGHWMI.js","18bd9171e4b1807b155843dff187942d"],["/js/search-XMKPZVFA.js","c2ee5f816ac1664d0cffdb9cddc8c057"],["/js/siteInit.js","60a9dcedd48bed2e24758a4cb8c5fd52"],["/languageStudy/cover.jpg","9e9ee7f3be3fa6d3864fb2f1b889e1da"],["/languageStudy/日本語/词簇/第一课/index.html","f1793edbabd368b8c819f31a700eb5ea"],["/languageStudy/日本語/词簇/第三课/index.html","4a13f18bdd2bba24f1f7298ff4fbfe4d"],["/languageStudy/日本語/词簇/第二课/index.html","cb43ea046539b2d2606179f27eeb9c6e"],["/languageStudy/日本語/语法句簇/语法杂句/index.html","eb36b574b81c21b33053923740cf293e"],["/pic/about/1.png","f88f2f9a2401fffcb3ad29b0a69ca89b"],["/pic/settings/2.png","68589a6408f36f84bd9cfac7f99d6fb2"],["/pic/shokax/log_1/1.png","715002a190ed2540e74aaa97646e6b3d"],["/settings/index.html","68adc4713c39485793cedeb277145e1b"],["/shokax/cover.jpg","9b9720f41b9f97218914658913ea4d08"],["/shokax/shokaxLog/shokax-log-2/index.html","94c460e180ca607c44f49f9f3f99c0cd"],["/shokax/shokaxLog/shokax-log-3/index.html","fa4299de6c39cfbb0459dcf8b7f44110"],["/shokax/shokaxLog/shokax-log_1/index.html","2be2ba426b5852f524cca8051d16d88f"],["/sw-register.js","45fda741d5f926305cd371be97d74df7"],["/tags/CS61B/index.html","e26be3201ec0fae8203c6aea9416fabf"],["/tags/cpp/index.html","3acba8aa75888ffad8eaae32f3adef57"],["/tags/index.html","fb1cb56444c25bdf57ef992ab1eaecb0"],["/tags/java/index.html","1532803c6b4c9ddc82b87863079f46d4"],["/tags/learningReport/index.html","26c0c71e17d6bca7ef55d988403885e2"],["/tags/log/index.html","ccced91c4b24f6efc09defffa876fa62"],["/tags/工具文件/index.html","2c7e31553e63bb06157a12104ad5b070"],["/tags/数据结构与算法/index.html","5f0353c44c0e6f3a9bfaf46b9294fa20"],["/tags/日本語/index.html","90202b2ea37efd1d45b60c69c5049a7f"],["/tags/自定义头文件/index.html","0d2c7a8b0e77c1d7eba84b5d7997c8db"],["/tags/语法句簇/index.html","ba5dcbf74e48c62b16a6b821b528f362"],["/tags/题练簇/index.html","c8437fa02a41f3c6fa39cf3b93821f96"],["/toolCode/cpp自定义头文件/index.html","2113c43e68a5811a45d1395ee9eff06b"]];
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
