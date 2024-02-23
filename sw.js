/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CS/cover.jpg","2e9c35956c00b874c67eebce5e7f4a7a"],["/CS/cpp/题练簇/数据结构与算法-题练簇/index.html","b4e41bfb37c286085bb9b737c4e9d8db"],["/about/index.html","88911275e5f682df30a32f99c041ed9e"],["/archives/2024/02/index.html","493dd396fc52429e7bf8483b69ef29b5"],["/archives/2024/index.html","86da5fd18892b375422a7debd8d9b707"],["/archives/index.html","5831a7fdeaeb51b267336f6cb46c260e"],["/assets/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/assets/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/assets/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/assets/avatar.jpg","8a9a609800287abcb6136f8294649689"],["/assets/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/assets/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/assets/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/assets/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/categories/CS/cpp/index.html","1e2c1dcf7e8aa30e59176c7e1a9672da"],["/categories/CS/cpp/题练簇/index.html","7109b45dfd74f2ae45e22197d9de055b"],["/categories/CS/index.html","11112bd85e8ea0d890748104b03d9c1a"],["/categories/index.html","bbd419e3b550f5028eb475a3f59a7ba5"],["/categories/languageStudy/index.html","056e8b010b866e3c3f96489dd6e9383e"],["/categories/languageStudy/日本語/index.html","2c9881063bae6524deb262e8c7b59b31"],["/categories/languageStudy/日本語/词簇/index.html","457b71fa17e3670aca9257cab3b564f3"],["/categories/languageStudy/日本語/语法句簇/index.html","61933d3550d99124cf69c220b2b14889"],["/categories/shokax/index.html","46a12943f413504437b7d642077de0c3"],["/categories/shokax/shokaXlog/index.html","bfab85831213435236d209d24b0ba36f"],["/categories/toolCode/index.html","28dea1050459e23aeb9fcaa3f92b0a40"],["/css/app.css","b9da0db8be5a6597654512f28dcc66bd"],["/css/mermaid.css","eec9a4b1de0a3fb3c32c1b4a95b5a537"],["/css/optimize.css","1b85d129bf759ab097a6b69d7191e6b1"],["/index.html","dc1ce44e10df8dade47ebb19fe1b7128"],["/js/chunk-6GFHIB4Z.js","671ca3c3ede22a154c86a2bc7cfdd088"],["/js/chunk-7CUGVC7W.js","6502be776ac269b7c64ace46f121ad20"],["/js/chunk-RVTKUILT.js","b43967245c8905b31ca4e6c64ae3314e"],["/js/chunk-WRT7QVNM.js","695c9f913c804b4e6c30cc3ba4e1d820"],["/js/chunk-ZZTEKZ2V.js","295bc91e2de463ff8add6e236f1bb215"],["/js/comments-FWGKSU73.js","e9fdc7ebb2647d5fe8eaaac2d6ad1fe8"],["/js/index.esm-EVLJH2ZH.js","2c64892247383b108942f91fc0c9ff28"],["/js/post-EDMBKGIS.js","70d1f68939288ba93f74955d6b784d6c"],["/js/quicklink-RKYBVRN7.js","2b68cc37831f6e15ef78f8be0ca3d99d"],["/js/search-B2NWBR73.js","d524304524552e55fb18a0ccd84d5810"],["/js/siteInit.js","e310feb7dced68c6f3081c23da5ab661"],["/languageStudy/cover.jpg","9e9ee7f3be3fa6d3864fb2f1b889e1da"],["/languageStudy/日本語/词簇/第一课/index.html","b22c81d3a3e2a1d8648729cf9f5f1d2c"],["/languageStudy/日本語/词簇/第三课/index.html","3427491b0e709ca87f76fc16dbe61f51"],["/languageStudy/日本語/词簇/第二课/index.html","38dee53aa7d477441560ea66035011fe"],["/languageStudy/日本語/语法句簇/语法杂句/index.html","66d03c2c1cd8e74d64fe6acfd42de716"],["/pic/about/1.png","f88f2f9a2401fffcb3ad29b0a69ca89b"],["/pic/settings/2.png","68589a6408f36f84bd9cfac7f99d6fb2"],["/pic/shokax/log_1/1.png","715002a190ed2540e74aaa97646e6b3d"],["/settings/index.html","c335da43057e32305ee6bd5911238425"],["/shokax/cover.jpg","9b9720f41b9f97218914658913ea4d08"],["/shokax/shokaxLog/shokax-log-2/index.html","ed3c1598a00d7b4b37f369af53a28786"],["/shokax/shokaxLog/shokax-log-3/index.html","3e354d5b2646f56e815e4362a5087e62"],["/shokax/shokaxLog/shokax-log_1/index.html","e88c265636c2f2e9868a94cb3180be3a"],["/sw-register.js","f0de317fd9502d3de9d01a5240111d1b"],["/tags/cpp/index.html","efdab788dd4e87e050c9315094567a73"],["/tags/index.html","bcde6ef72ab215c42c76ea6ac9b3d1ac"],["/tags/log/index.html","8e945b633db308a9085a8b1fec5b7973"],["/tags/工具文件/index.html","934e2d3b49f9e09b27706cee1bd0879a"],["/tags/数据结构与算法/index.html","8bc32d377a725f69f1be2bb9d56cb077"],["/tags/日本語/index.html","97af23ab567ca2f60b08e61ed7302cff"],["/tags/自定义头文件/index.html","5ea723685635cec9b2743e6479d49f99"],["/tags/语法句簇/index.html","c32f43356eeac9a58a9f10705a316ebc"],["/tags/题练簇/index.html","cb00b34eace11ad04a13adf7f3c985e7"],["/toolCode/cpp自定义头文件/index.html","98d76d4cf7b13428e2eb9cff2862379a"]];
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
