# css-minimizer-webpack-plugin SourceMap Bug

This is a minimal reproduction repo for a bug that only happens on GitLab CI.

While running `npm run build` on GitLab CI, it produces the following error message:

```
(node:40) UnhandledPromiseRejectionWarning: Error: "version" is a required argument.
    at Object.getArg (/builds/ofhouse/stackoverflow-65355772/node_modules/source-map/lib/util.js:24:11)
    at new BasicSourceMapConsumer (/builds/ofhouse/stackoverflow-65355772/node_modules/source-map/lib/source-map-consumer.js:294:22)
    at new SourceMapConsumer (/builds/ofhouse/stackoverflow-65355772/node_modules/source-map/lib/source-map-consumer.js:22:7)
    at SourceMapSource.node (/builds/ofhouse/stackoverflow-65355772/node_modules/webpack-sources/lib/SourceMapSource.js:193:4)
    at exports.getSourceAndMap (/builds/ofhouse/stackoverflow-65355772/node_modules/webpack-sources/lib/helpers.js:20:27)
    at SourceMapSource.sourceAndMap (/builds/ofhouse/stackoverflow-65355772/node_modules/webpack-sources/lib/SourceMapSource.js:184:10)
    at getTaskForFile (/builds/ofhouse/stackoverflow-65355772/node_modules/webpack/lib/SourceMapDevToolPlugin.js:78:30)
    at /builds/ofhouse/stackoverflow-65355772/node_modules/webpack/lib/SourceMapDevToolPlugin.js:266:22
    at /builds/ofhouse/stackoverflow-65355772/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/builds/ofhouse/stackoverflow-65355772/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
```

You can see the behavior in the CI build output from this repository.  
However, it runs successfully on a local machine (Tested with MacOS and Ubuntu).
