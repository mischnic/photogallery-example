For https://github.com/parcel-bundler/parcel/issues/2039

Run `yarn build`, it will log two functions to the console.
Run `yarn build-ts` and the first function will be undefined.

Renaming `src/index.ts` to `index.js`:
```diff
diff --git a/treeshake-javascript.js b/treeshake-typescript.js
index cd20e0b..e9c5b49 100644
--- a/treeshake-javascript.js
+++ b/treeshake-typescript.js
@@ -1,6 +1,6 @@
 (function() {
        // ASSET: ../node_modules/react-pose/dist/react-pose.es.js
-       // ASSET: ../node_modules/tslib/tslib.es6.js
+       var $mfSv$exports = {};

        /*! *****************************************************************************
 Copyright (c) Microsoft Corporation. All rights reserved.
@@ -6953,6 +6953,39 @@ and limitations under the License.
                return PoseGroup;
        })($n8$exports.Component);

-       console.log($mfSv$export$default.div);
-       console.log($mfSv$export$PoseGroup);
+       $mfSv$exports.default = $mfSv$export$default;
+       $mfSv$exports.PoseGroup = $mfSv$export$PoseGroup;
+       $mfSv$exports.Transition = $mfSv$export$Transition;
+       // ASSET: index.ts
+       var $QCb$exports = {};
+
+       var $QCb$var$__importStar =
+               ($QCb$exports && $QCb$exports.__importStar) ||
+               function(mod) {
+                       if (mod && mod.__esModule) return mod;
+                       var result = {};
+                       if (mod != null)
+                               for (var k in mod) {
+                                       if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
+                               }
+                       result["default"] = mod;
+                       return result;
+               };
+
+       Object.defineProperty($QCb$exports, "__esModule", {
+               value: true
+       });
+       var $QCb$var$react_pose_1 = $QCb$var$__importStar($mfSv$exports);
+       console.log($QCb$var$react_pose_1.default.div);
+       console.log($QCb$var$react_pose_1.PoseGroup);
+
+       if (typeof exports === "object" && typeof module !== "undefined") {
+               // CommonJS
+               module.exports = $QCb$exports;
+       } else if (typeof define === "function" && define.amd) {
+               // RequireJS
+               define(function() {
+                       return $QCb$exports;
+               });
+       }
 })();
 ```