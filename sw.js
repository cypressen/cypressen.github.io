/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CS/CS61B/[CS61B]Week1_report/index.html","ce5d6d605f34e9d06e15b9082bc2effd"],["/CS/cover.jpg","2e9c35956c00b874c67eebce5e7f4a7a"],["/CS/cpp/题练簇/数据结构与算法-题练簇/index.html","2a4e1892262d70dcd07b0769a4bd82fa"],["/about/index.html","ad5f9eac23cb75f521dc2a69f8843e73"],["/archives/2024/02/index.html","0d396d4737d707dbd256522e7213f0ff"],["/archives/2024/03/index.html","53def72ef86f14518d9d05cfd4a97f00"],["/archives/2024/index.html","4e2be422d47f61b9cdf2451fd44d66a0"],["/archives/index.html","4f4a4c3843383495aa560f5c4759c736"],["/assets/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/assets/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/assets/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/assets/avatar.jpg","8a9a609800287abcb6136f8294649689"],["/assets/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/assets/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/assets/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/assets/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/categories/CS/CS61B/index.html","f6b5d857fded756db99fafe7599dd642"],["/categories/CS/cpp/index.html","d4dfe8ed115d07edfa321ccc593cc2c7"],["/categories/CS/cpp/题练簇/index.html","e9e12bcccbbb02b1493b3ee9c56275e0"],["/categories/CS/index.html","af1c485329061dae1ba426ff968ebdab"],["/categories/index.html","9c5d1dd79dfbb6a4ad8979034fc9acb5"],["/categories/languageStudy/index.html","561753cf9b8f6b1f1f9e116e51693a36"],["/categories/languageStudy/日本語/index.html","5f7d15ac0015e57081333f45f261ffa4"],["/categories/languageStudy/日本語/词簇/index.html","ff987b1c9f0e3eeeae298c208ab0e938"],["/categories/languageStudy/日本語/语法句簇/index.html","d3d50e688746a8b26569146371e25431"],["/categories/shokax/index.html","d6ab2cc3f57f9d531aed916da56a19df"],["/categories/shokax/shokaXlog/index.html","0927f0e3e16c47965eff850ce1abd4bf"],["/categories/toolCode/index.html","73dae54f491c76000d42d6f6c6388554"],["/css/app.css","b9da0db8be5a6597654512f28dcc66bd"],["/css/mermaid.css","eec9a4b1de0a3fb3c32c1b4a95b5a537"],["/css/optimize.css","1b85d129bf759ab097a6b69d7191e6b1"],["/index.html","b1dc0d615c1b952dc0f0f6d8a6fd7e7d"],["/js/chunk-3ZL33KF6.js","4178356c439bcb355a5f2e1c60c53ece"],["/js/chunk-Q5MUQ2J3.js","049018bdd0c5f202a19c622d87e22380"],["/js/chunk-SIZNFQMX.js","f09b1fa3bbc84e8186669301705c05f7"],["/js/chunk-XTY3L22H.js","00eb8349a1c7f700a1da0ec835fbd121"],["/js/chunk-Y2UWMI4H.js","f5d99f706786fbff16ff8e9e941b277c"],["/js/comments-RIIDKWIL.js","c3f7bd8a4aa0b98e762f2b39c7eed4cc"],["/js/index.esm-OHQ4WVUM.js","9032470274b45e92ca4088f1386848a5"],["/js/post-5TRB42WG.js","2809a052e87b0f3a443ab99e224c2693"],["/js/quicklink-DBZGHWMI.js","18bd9171e4b1807b155843dff187942d"],["/js/search-XMKPZVFA.js","c2ee5f816ac1664d0cffdb9cddc8c057"],["/js/siteInit.js","60a9dcedd48bed2e24758a4cb8c5fd52"],["/languageStudy/cover.jpg","9e9ee7f3be3fa6d3864fb2f1b889e1da"],["/languageStudy/日本語/词簇/第一课/index.html","a0a9c2f1488afdae72cf9e1a0689486d"],["/languageStudy/日本語/词簇/第三课/index.html","600898a2f507f0ecb836b73d082d864d"],["/languageStudy/日本語/词簇/第二课/index.html","ac66d42f91e8f764066a0c7328a2c715"],["/languageStudy/日本語/语法句簇/语法杂句/index.html","a705f3793d175a9695ebfe3e7fd01c79"],["/pic/about/1.png","f88f2f9a2401fffcb3ad29b0a69ca89b"],["/pic/settings/2.png","68589a6408f36f84bd9cfac7f99d6fb2"],["/pic/shokax/log_1/1.png","715002a190ed2540e74aaa97646e6b3d"],["/settings/index.html","68adc4713c39485793cedeb277145e1b"],["/shokax/cover.jpg","9b9720f41b9f97218914658913ea4d08"],["/shokax/shokaxLog/shokax-log-2/index.html","4190722f9fab11576dca69726456599d"],["/shokax/shokaxLog/shokax-log-3/index.html","eadbdd4849a361114d5ba3262fbbcc25"],["/shokax/shokaxLog/shokax-log_1/index.html","54bc1bef59cde75e7b636356fb8a1318"],["/sw-register.js","bec88621df6c88c8ac8f60898971e589"],["/tags/CS61B/index.html","098270b9fec0285b6cd47fa95ba437eb"],["/tags/cpp/index.html","f1f7fe0942404946b0f51f8acb6b6f83"],["/tags/index.html","7386153453fac3ccb92f1d0891f36e66"],["/tags/java/index.html","3058a7d3093375bc79933b72104db1b0"],["/tags/learningReport/index.html","040c72283b941c7d8387608f26be9bbb"],["/tags/log/index.html","653c327017215c69d180b26ec8567eec"],["/tags/工具文件/index.html","4416ce794046a162c6b84f7f7dd2c27a"],["/tags/数据结构与算法/index.html","57f171bc7f09ed14fa8390fc2ad00df4"],["/tags/日本語/index.html","5cedf023a8b9c786cc3419fadaa17ca6"],["/tags/自定义头文件/index.html","a1e285257d553d1fd3f51ec057d71f42"],["/tags/语法句簇/index.html","8b8b28e91126414e5dcc3a9f2278e1f1"],["/tags/题练簇/index.html","a2625c7242c38bd3f2416c50bd1201ea"],["/toolCode/cpp自定义头文件/index.html","3ce25555256fdd4e42f15d40bf046f34"]];
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
