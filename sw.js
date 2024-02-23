/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CS/cover.jpg","2e9c35956c00b874c67eebce5e7f4a7a"],["/CS/cpp/题练簇/数据结构与算法-题练簇/index.html","3192db7178f86cb3f3c15fa457e9104e"],["/about/index.html","6fee46b5b3e1cdf21743fae352c07c8c"],["/archives/2024/02/index.html","d2f2139e1d8dc2c20ed6d66452b59048"],["/archives/2024/index.html","477941c01cd6d320bcdb355aea47ca13"],["/archives/index.html","df25806c55ef1ad6f8edf357401a9a8f"],["/assets/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/assets/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/assets/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/assets/avatar.jpg","8a9a609800287abcb6136f8294649689"],["/assets/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/assets/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/assets/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/assets/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/categories/CS/cpp/index.html","533da98e0f5ba9adb768f4394203f1d2"],["/categories/CS/cpp/题练簇/index.html","8c9eba0e1dd657ebfead56533fa12600"],["/categories/CS/index.html","bc9224de330d47c8bd98691660f016e9"],["/categories/index.html","963d2f71b9e18a9066dbe4ad1bc766ec"],["/categories/languageStudy/index.html","ff5dc5e92de812361f501097a0e68887"],["/categories/languageStudy/日本語/index.html","62b16b4389511d55230b2c060bc921c8"],["/categories/languageStudy/日本語/词簇/index.html","ba3666d5f1fca636f162444878fdfbb5"],["/categories/languageStudy/日本語/语法句簇/index.html","43579f3f172ae6d89457438e1ea55b92"],["/categories/shokax/index.html","a27146f8803d7e935958f918cd72afec"],["/categories/shokax/shokaXlog/index.html","5ec471e29ba26c6cc864a762e7fb6971"],["/categories/toolCode/index.html","44c96c0043cdfacbe4e24205063ed709"],["/css/app.css","b9da0db8be5a6597654512f28dcc66bd"],["/css/mermaid.css","eec9a4b1de0a3fb3c32c1b4a95b5a537"],["/css/optimize.css","1b85d129bf759ab097a6b69d7191e6b1"],["/index.html","2dfc76ad70e1ac3c4620dfe4e2a231f7"],["/js/chunk-CCFLATOU.js","5c873aaa05e09b8cc9a129de4fdee859"],["/js/chunk-EIEXX4XP.js","e1caefe0981f7d783297bdf45f91df13"],["/js/chunk-GGKNIFHR.js","66c8d044af7a761e10533f2527bc6be7"],["/js/chunk-IIISYIR4.js","916e3acd0e410a8d3e6afba104c2b4b3"],["/js/chunk-P7K6OTTZ.js","5f74c434d8b969ff807a250edd38b97c"],["/js/comments-5YJALS65.js","d8715c08de260a0f0c70f8f90533be01"],["/js/index.esm-J3UVOWUZ.js","47a508d7464dcf88b07ecdd0343973ed"],["/js/post-ROIBHOAN.js","718f60492b7941fa3a672fb3b3fdf51d"],["/js/quicklink-JBSFRK46.js","9eb40be3c0f0acaa6f53d86fdd1dae90"],["/js/search-EB7OYFLO.js","3621275bcba8dc26e90b54f90103a926"],["/js/siteInit.js","6867dba31e5bce0ec30f57ff1d839466"],["/languageStudy/cover.jpg","9e9ee7f3be3fa6d3864fb2f1b889e1da"],["/languageStudy/日本語/词簇/第一课/index.html","de2eb573a07064345051b1d425ce2b0f"],["/languageStudy/日本語/词簇/第三课/index.html","42325366aad78c1e57a6672e45998e54"],["/languageStudy/日本語/词簇/第二课/index.html","a375001edace5e6ab0791c9084c05348"],["/languageStudy/日本語/语法句簇/语法杂句/index.html","4d12755c10ef3f8a742626557ba19bae"],["/pic/about/1.png","f88f2f9a2401fffcb3ad29b0a69ca89b"],["/pic/settings/2.png","68589a6408f36f84bd9cfac7f99d6fb2"],["/pic/shokax/log_1/1.png","715002a190ed2540e74aaa97646e6b3d"],["/settings/index.html","264695260afec4d2936646c9a46d5cdd"],["/shokax/cover.jpg","9b9720f41b9f97218914658913ea4d08"],["/shokax/shokaxLog/shokax-log-2/index.html","95a82eb9930e1683067b3c0636e8e071"],["/shokax/shokaxLog/shokax-log-3/index.html","59782086c4d5ce55fe0ceade1bbdf06f"],["/shokax/shokaxLog/shokax-log_1/index.html","5bed3d869bc0cd6a04ce86fc14228773"],["/sw-register.js","bae41a774fbe658de9395c29fd42de7f"],["/tags/cpp/index.html","58fbca44a3c9125e03e6176d79e8738c"],["/tags/index.html","14030f4a2d862f82cd84125b63b12df7"],["/tags/log/index.html","f4666e2b3c16bb2b5fb123820b80ea45"],["/tags/工具文件/index.html","560522276e2ff272f5b618ea5232d9ff"],["/tags/数据结构与算法/index.html","561d5b4d6b6d2059cfc1788dccacad05"],["/tags/日本語/index.html","bc0a4f58c5cae892bb3d483e6403907e"],["/tags/自定义头文件/index.html","aece6ad800444d2dedfce5ea6fbdd239"],["/tags/语法句簇/index.html","93ad546709559142c68c8e0797858cc8"],["/tags/题练簇/index.html","c6b133eb5471fba899026d33190d6e64"],["/toolCode/cpp自定义头文件/index.html","ffaf7e38dbf58fdac5a7c9f51a7b65f9"]];
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
