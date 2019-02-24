For https://github.com/parcel-bundler/parcel/issues/2039

Remove `module` from tsconfig to fix:
```diff
diff --git a/tsconfig.json b/tsconfig.json
index 68257ce..3a75a22 100644
--- a/tsconfig.json
+++ b/tsconfig.json
@@ -1,7 +1,6 @@
 {
   "compilerOptions": {
     "target": "es5",
-    "module": "commonjs",
```
