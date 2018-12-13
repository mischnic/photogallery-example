(function() {
	// ASSET: ../node_modules/react-pose/dist/react-pose.es.js
	var $mfSv$exports = {};

	/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

	/* global Reflect, Promise */
	var $vCxL$var$extendStatics = function(d, b) {
		$vCxL$var$extendStatics =
			Object.setPrototypeOf ||
			({
				__proto__: []
			} instanceof Array &&
				function(d, b) {
					d.__proto__ = b;
				}) ||
			function(d, b) {
				for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
			};

		return $vCxL$var$extendStatics(d, b);
	};

	function $vCxL$export$__extends(d, b) {
		$vCxL$var$extendStatics(d, b);

		function __() {
			this.constructor = d;
		}

		d.prototype =
			b === null
				? Object.create(b)
				: ((__.prototype = b.prototype), new __());
	}

	var $vCxL$export$__assign = function() {
		$vCxL$export$__assign =
			Object.assign ||
			function __assign(t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];

					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p))
							t[p] = s[p];
				}

				return t;
			};

		return $vCxL$export$__assign.apply(this, arguments);
	};

	function $vCxL$export$__rest(s, e) {
		var t = {};

		for (var p in s)
			if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
				t[p] = s[p];

		if (s != null && typeof Object.getOwnPropertySymbols === "function")
			for (
				var i = 0, p = Object.getOwnPropertySymbols(s);
				i < p.length;
				i++
			)
				if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
		return t;
	}

	function $vCxL$export$__await(v) {
		return this instanceof $vCxL$export$__await
			? ((this.v = v), this)
			: new $vCxL$export$__await(v);
	}

	// ASSET: ../node_modules/object-assign/index.js
	var $J4Nk$exports,
		$J4Nk$var$getOwnPropertySymbols,
		$J4Nk$var$hasOwnProperty,
		$J4Nk$var$propIsEnumerable,
		$J4Nk$executed = false;

	function $J4Nk$var$toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError(
				"Object.assign cannot be called with null or undefined"
			);
		}

		return Object(val);
	}

	function $J4Nk$var$shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			} // Detect buggy property enumeration order in older V8 versions.
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118

			var test1 = new String("abc"); // eslint-disable-line no-new-wrappers

			test1[5] = "de";

			if (Object.getOwnPropertyNames(test1)[0] === "5") {
				return false;
			} // https://bugs.chromium.org/p/v8/issues/detail?id=3056

			var test2 = {};

			for (var i = 0; i < 10; i++) {
				test2["_" + String.fromCharCode(i)] = i;
			}

			var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
				return test2[n];
			});

			if (order2.join("") !== "0123456789") {
				return false;
			} // https://bugs.chromium.org/p/v8/issues/detail?id=3056

			var test3 = {};
			"abcdefghijklmnopqrst".split("").forEach(function(letter) {
				test3[letter] = letter;
			});

			if (
				Object.keys(Object.assign({}, test3)).join("") !==
				"abcdefghijklmnopqrst"
			) {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	function $J4Nk$init() {
		if ($J4Nk$executed) return;
		$J4Nk$executed = true;
		$J4Nk$exports = {};
		$J4Nk$var$getOwnPropertySymbols = Object.getOwnPropertySymbols;
		$J4Nk$var$hasOwnProperty = Object.prototype.hasOwnProperty;
		$J4Nk$var$propIsEnumerable = Object.prototype.propertyIsEnumerable;
		$J4Nk$exports = $J4Nk$var$shouldUseNative()
			? Object.assign
			: function(target, source) {
					var from;
					var to = $J4Nk$var$toObject(target);
					var symbols;

					for (var s = 1; s < arguments.length; s++) {
						from = Object(arguments[s]);

						for (var key in from) {
							if ($J4Nk$var$hasOwnProperty.call(from, key)) {
								to[key] = from[key];
							}
						}

						if ($J4Nk$var$getOwnPropertySymbols) {
							symbols = $J4Nk$var$getOwnPropertySymbols(from);

							for (var i = 0; i < symbols.length; i++) {
								if (
									$J4Nk$var$propIsEnumerable.call(
										from,
										symbols[i]
									)
								) {
									to[symbols[i]] = from[symbols[i]];
								}
							}
						}
					}

					return to;
			  };
	}

	// ASSET: ../node_modules/react/cjs/react.production.min.js
	var $awqi$exports,
		$awqi$var$k,
		$awqi$var$n,
		$awqi$var$p,
		$awqi$var$q,
		$awqi$var$r,
		$awqi$var$t,
		$awqi$var$u,
		$awqi$var$v,
		$awqi$var$w,
		$awqi$var$x,
		$awqi$var$y,
		$awqi$var$z,
		$awqi$var$A,
		$awqi$var$B,
		$awqi$var$C,
		$awqi$var$E,
		$awqi$var$F,
		$awqi$var$J,
		$awqi$var$K,
		$awqi$var$L,
		$awqi$var$M,
		$awqi$var$P,
		$awqi$var$Q,
		$awqi$var$X,
		$awqi$var$Y,
		$awqi$var$Z,
		$awqi$executed = false;

	function $awqi$var$aa(a, b, e, c, d, g, h, f) {
		if (!a) {
			a = void 0;
			if (void 0 === b)
				a = Error(
					"Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
				);
			else {
				var l = [e, c, d, g, h, f],
					m = 0;
				a = Error(
					b.replace(/%s/g, function() {
						return l[m++];
					})
				);
				a.name = "Invariant Violation";
			}
			a.framesToPop = 1;
			throw a;
		}
	}

	function $awqi$var$D(a) {
		for (
			var b = arguments.length - 1,
				e =
					"https://reactjs.org/docs/error-decoder.html?invariant=" +
					a,
				c = 0;
			c < b;
			c++
		)
			e += "&args[]=" + encodeURIComponent(arguments[c + 1]);

		$awqi$var$aa(
			!1,
			"Minified React error #" +
				a +
				"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
			e
		);
	}

	function $awqi$var$G(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = $awqi$var$F;
		this.updater = e || $awqi$var$E;
	}

	function $awqi$var$H() {}

	function $awqi$var$I(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = $awqi$var$F;
		this.updater = e || $awqi$var$E;
	}

	function $awqi$var$N(a, b, e) {
		var c = void 0,
			d = {},
			g = null,
			h = null;
		if (null != b)
			for (c in (void 0 !== b.ref && (h = b.ref),
			void 0 !== b.key && (g = "" + b.key),
			b))
				$awqi$var$L.call(b, c) &&
					!$awqi$var$M.hasOwnProperty(c) &&
					(d[c] = b[c]);
		var f = arguments.length - 2;
		if (1 === f) d.children = e;
		else if (1 < f) {
			for (var l = Array(f), m = 0; m < f; m++) l[m] = arguments[m + 2];

			d.children = l;
		}
		if (a && a.defaultProps)
			for (c in ((f = a.defaultProps), f))
				void 0 === d[c] && (d[c] = f[c]);
		return {
			$$typeof: $awqi$var$p,
			type: a,
			key: g,
			ref: h,
			props: d,
			_owner: $awqi$var$K.current
		};
	}

	function $awqi$var$ba(a, b) {
		return {
			$$typeof: $awqi$var$p,
			type: a.type,
			key: b,
			ref: a.ref,
			props: a.props,
			_owner: a._owner
		};
	}

	function $awqi$var$O(a) {
		return (
			"object" === typeof a && null !== a && a.$$typeof === $awqi$var$p
		);
	}

	function $awqi$var$escape(a) {
		var b = {
			"=": "=0",
			":": "=2"
		};
		return (
			"$" +
			("" + a).replace(/[=:]/g, function(a) {
				return b[a];
			})
		);
	}

	function $awqi$var$R(a, b, e, c) {
		if ($awqi$var$Q.length) {
			var d = $awqi$var$Q.pop();
			d.result = a;
			d.keyPrefix = b;
			d.func = e;
			d.context = c;
			d.count = 0;
			return d;
		}

		return {
			result: a,
			keyPrefix: b,
			func: e,
			context: c,
			count: 0
		};
	}

	function $awqi$var$S(a) {
		a.result = null;
		a.keyPrefix = null;
		a.func = null;
		a.context = null;
		a.count = 0;
		10 > $awqi$var$Q.length && $awqi$var$Q.push(a);
	}

	function $awqi$var$T(a, b, e, c) {
		var d = typeof a;
		if ("undefined" === d || "boolean" === d) a = null;
		var g = !1;
		if (null === a) g = !0;
		else
			switch (d) {
				case "string":
				case "number":
					g = !0;
					break;

				case "object":
					switch (a.$$typeof) {
						case $awqi$var$p:
						case $awqi$var$q:
							g = !0;
					}
			}
		if (g) return e(c, a, "" === b ? "." + $awqi$var$U(a, 0) : b), 1;
		g = 0;
		b = "" === b ? "." : b + ":";
		if (Array.isArray(a))
			for (var h = 0; h < a.length; h++) {
				d = a[h];
				var f = b + $awqi$var$U(d, h);
				g += $awqi$var$T(d, f, e, c);
			}
		else if (
			(null === a || "object" !== typeof a
				? (f = null)
				: ((f = ($awqi$var$C && a[$awqi$var$C]) || a["@@iterator"]),
				  (f = "function" === typeof f ? f : null)),
			"function" === typeof f)
		)
			for (a = f.call(a), h = 0; !(d = a.next()).done; )
				(d = d.value),
					(f = b + $awqi$var$U(d, h++)),
					(g += $awqi$var$T(d, f, e, c));
		else
			"object" === d &&
				((e = "" + a),
				$awqi$var$D(
					"31",
					"[object Object]" === e
						? "object with keys {" + Object.keys(a).join(", ") + "}"
						: e,
					""
				));
		return g;
	}

	function $awqi$var$V(a, b, e) {
		return null == a ? 0 : $awqi$var$T(a, "", b, e);
	}

	function $awqi$var$U(a, b) {
		return "object" === typeof a && null !== a && null != a.key
			? $awqi$var$escape(a.key)
			: b.toString(36);
	}

	function $awqi$var$ca(a, b) {
		a.func.call(a.context, b, a.count++);
	}

	function $awqi$var$da(a, b, e) {
		var c = a.result,
			d = a.keyPrefix;
		a = a.func.call(a.context, b, a.count++);
		Array.isArray(a)
			? $awqi$var$W(a, c, e, function(a) {
					return a;
			  })
			: null != a &&
			  ($awqi$var$O(a) &&
					(a = $awqi$var$ba(
						a,
						d +
							(!a.key || (b && b.key === a.key)
								? ""
								: ("" + a.key).replace($awqi$var$P, "$&/") +
								  "/") +
							e
					)),
			  c.push(a));
	}

	function $awqi$var$W(a, b, e, c, d) {
		var g = "";
		null != e && (g = ("" + e).replace($awqi$var$P, "$&/") + "/");
		b = $awqi$var$R(b, g, c, d);
		$awqi$var$V(a, $awqi$var$da, b);
		$awqi$var$S(b);
	}

	function $awqi$init() {
		if ($awqi$executed) return;
		$awqi$executed = true;
		$awqi$exports = {};
		$awqi$var$k = ($J4Nk$init(), $J4Nk$exports);
		$awqi$var$n = "function" === typeof Symbol && Symbol.for;
		$awqi$var$p = $awqi$var$n ? Symbol.for("react.element") : 60103;
		$awqi$var$q = $awqi$var$n ? Symbol.for("react.portal") : 60106;
		$awqi$var$r = $awqi$var$n ? Symbol.for("react.fragment") : 60107;
		$awqi$var$t = $awqi$var$n ? Symbol.for("react.strict_mode") : 60108;
		$awqi$var$u = $awqi$var$n ? Symbol.for("react.profiler") : 60114;
		$awqi$var$v = $awqi$var$n ? Symbol.for("react.provider") : 60109;
		$awqi$var$w = $awqi$var$n ? Symbol.for("react.context") : 60110;
		$awqi$var$x = $awqi$var$n ? Symbol.for("react.concurrent_mode") : 60111;
		$awqi$var$y = $awqi$var$n ? Symbol.for("react.forward_ref") : 60112;
		$awqi$var$z = $awqi$var$n ? Symbol.for("react.suspense") : 60113;
		$awqi$var$A = $awqi$var$n ? Symbol.for("react.memo") : 60115;
		$awqi$var$B = $awqi$var$n ? Symbol.for("react.lazy") : 60116;
		$awqi$var$C = "function" === typeof Symbol && Symbol.iterator;
		$awqi$var$E = {
			isMounted: function() {
				return !1;
			},
			enqueueForceUpdate: function() {},
			enqueueReplaceState: function() {},
			enqueueSetState: function() {}
		};
		$awqi$var$F = {};
		$awqi$var$G.prototype.isReactComponent = {};

		$awqi$var$G.prototype.setState = function(a, b) {
			"object" !== typeof a && "function" !== typeof a && null != a
				? $awqi$var$D("85")
				: void 0;
			this.updater.enqueueSetState(this, a, b, "setState");
		};

		$awqi$var$G.prototype.forceUpdate = function(a) {
			this.updater.enqueueForceUpdate(this, a, "forceUpdate");
		};

		$awqi$var$H.prototype = $awqi$var$G.prototype;
		$awqi$var$J = $awqi$var$I.prototype = new $awqi$var$H();
		$awqi$var$J.constructor = $awqi$var$I;
		$awqi$var$k($awqi$var$J, $awqi$var$G.prototype);
		$awqi$var$J.isPureReactComponent = !0;
		$awqi$var$K = {
			current: null,
			currentDispatcher: null
		};
		$awqi$var$L = Object.prototype.hasOwnProperty;
		$awqi$var$M = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		};
		$awqi$var$P = /\/+/g;
		$awqi$var$Q = [];
		$awqi$var$X = {
			Children: {
				map: function(a, b, e) {
					if (null == a) return a;
					var c = [];
					$awqi$var$W(a, c, null, b, e);
					return c;
				},
				forEach: function(a, b, e) {
					if (null == a) return a;
					b = $awqi$var$R(null, null, b, e);
					$awqi$var$V(a, $awqi$var$ca, b);
					$awqi$var$S(b);
				},
				count: function(a) {
					return $awqi$var$V(
						a,
						function() {
							return null;
						},
						null
					);
				},
				toArray: function(a) {
					var b = [];
					$awqi$var$W(a, b, null, function(a) {
						return a;
					});
					return b;
				},
				only: function(a) {
					$awqi$var$O(a) ? void 0 : $awqi$var$D("143");
					return a;
				}
			},
			createRef: function() {
				return {
					current: null
				};
			},
			Component: $awqi$var$G,
			PureComponent: $awqi$var$I,
			createContext: function(a, b) {
				void 0 === b && (b = null);
				a = {
					$$typeof: $awqi$var$w,
					_calculateChangedBits: b,
					_currentValue: a,
					_currentValue2: a,
					_threadCount: 0,
					Provider: null,
					Consumer: null
				};
				a.Provider = {
					$$typeof: $awqi$var$v,
					_context: a
				};
				return (a.Consumer = a);
			},
			forwardRef: function(a) {
				return {
					$$typeof: $awqi$var$y,
					render: a
				};
			},
			lazy: function(a) {
				return {
					$$typeof: $awqi$var$B,
					_ctor: a,
					_status: -1,
					_result: null
				};
			},
			memo: function(a, b) {
				return {
					$$typeof: $awqi$var$A,
					type: a,
					compare: void 0 === b ? null : b
				};
			},
			Fragment: $awqi$var$r,
			StrictMode: $awqi$var$t,
			Suspense: $awqi$var$z,
			createElement: $awqi$var$N,
			cloneElement: function(a, b, e) {
				null === a || void 0 === a ? $awqi$var$D("267", a) : void 0;
				var c = void 0,
					d = $awqi$var$k({}, a.props),
					g = a.key,
					h = a.ref,
					f = a._owner;

				if (null != b) {
					void 0 !== b.ref &&
						((h = b.ref), (f = $awqi$var$K.current));
					void 0 !== b.key && (g = "" + b.key);
					var l = void 0;
					a.type && a.type.defaultProps && (l = a.type.defaultProps);

					for (c in b)
						$awqi$var$L.call(b, c) &&
							!$awqi$var$M.hasOwnProperty(c) &&
							(d[c] =
								void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
				}

				c = arguments.length - 2;
				if (1 === c) d.children = e;
				else if (1 < c) {
					l = Array(c);

					for (var m = 0; m < c; m++) l[m] = arguments[m + 2];

					d.children = l;
				}
				return {
					$$typeof: $awqi$var$p,
					type: a.type,
					key: g,
					ref: h,
					props: d,
					_owner: f
				};
			},
			createFactory: function(a) {
				var b = $awqi$var$N.bind(null, a);
				b.type = a;
				return b;
			},
			isValidElement: $awqi$var$O,
			version: "16.6.3",
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
				ReactCurrentOwner: $awqi$var$K,
				assign: $awqi$var$k
			}
		};
		$awqi$var$X.unstable_ConcurrentMode = $awqi$var$x;
		$awqi$var$X.unstable_Profiler = $awqi$var$u;
		$awqi$var$Y = {
			default: $awqi$var$X
		};
		$awqi$var$Z = ($awqi$var$Y && $awqi$var$X) || $awqi$var$Y;
		$awqi$exports = $awqi$var$Z.default || $awqi$var$Z;
	}

	// ASSET: ../node_modules/react/index.js
	var $n8$exports = {};

	if ("production" === "production") {
		$n8$exports = ($awqi$init(), $awqi$exports);
	} else {
		$n8$exports = require("./cjs/react.development.js");
	}

	var $pBGv$var$process = {}; // cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var $KFGT$var$HEY_LISTEN = "Hey, listen! ";

	var $KFGT$export$warning = function() {};

	var $KFGT$export$invariant = function() {};

	if ("production" !== "production") {
		$KFGT$export$warning = function(check, message) {
			if (!check && typeof console !== "undefined") {
				console.warn($KFGT$var$HEY_LISTEN + message);
			}
		};

		$KFGT$export$invariant = function(check, message) {
			if (!check) {
				throw new Error($KFGT$var$HEY_LISTEN.toUpperCase() + message);
			}
		};
	}

	var $pBGv$var$cachedSetTimeout;
	var $pBGv$var$cachedClearTimeout;

	function $pBGv$var$defaultSetTimout() {
		throw new Error("setTimeout has not been defined");
	}

	function $pBGv$var$defaultClearTimeout() {
		throw new Error("clearTimeout has not been defined");
	}

	(function() {
		try {
			if (typeof setTimeout === "function") {
				$pBGv$var$cachedSetTimeout = setTimeout;
			} else {
				$pBGv$var$cachedSetTimeout = $pBGv$var$defaultSetTimout;
			}
		} catch (e) {
			$pBGv$var$cachedSetTimeout = $pBGv$var$defaultSetTimout;
		}

		try {
			if (typeof clearTimeout === "function") {
				$pBGv$var$cachedClearTimeout = clearTimeout;
			} else {
				$pBGv$var$cachedClearTimeout = $pBGv$var$defaultClearTimeout;
			}
		} catch (e) {
			$pBGv$var$cachedClearTimeout = $pBGv$var$defaultClearTimeout;
		}
	})();

	function $pBGv$var$runTimeout(fun) {
		if ($pBGv$var$cachedSetTimeout === setTimeout) {
			//normal enviroments in sane situations
			return setTimeout(fun, 0);
		} // if setTimeout wasn't available but was latter defined

		if (
			($pBGv$var$cachedSetTimeout === $pBGv$var$defaultSetTimout ||
				!$pBGv$var$cachedSetTimeout) &&
			setTimeout
		) {
			$pBGv$var$cachedSetTimeout = setTimeout;
			return setTimeout(fun, 0);
		}

		try {
			// when when somebody has screwed with setTimeout but no I.E. maddness
			return $pBGv$var$cachedSetTimeout(fun, 0);
		} catch (e) {
			try {
				// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
				return $pBGv$var$cachedSetTimeout.call(null, fun, 0);
			} catch (e) {
				// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
				return $pBGv$var$cachedSetTimeout.call(this, fun, 0);
			}
		}
	}

	function $pBGv$var$runClearTimeout(marker) {
		if ($pBGv$var$cachedClearTimeout === clearTimeout) {
			//normal enviroments in sane situations
			return clearTimeout(marker);
		} // if clearTimeout wasn't available but was latter defined

		if (
			($pBGv$var$cachedClearTimeout === $pBGv$var$defaultClearTimeout ||
				!$pBGv$var$cachedClearTimeout) &&
			clearTimeout
		) {
			$pBGv$var$cachedClearTimeout = clearTimeout;
			return clearTimeout(marker);
		}

		try {
			// when when somebody has screwed with setTimeout but no I.E. maddness
			return $pBGv$var$cachedClearTimeout(marker);
		} catch (e) {
			try {
				// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
				return $pBGv$var$cachedClearTimeout.call(null, marker);
			} catch (e) {
				// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
				// Some versions of I.E. have different rules for clearTimeout vs setTimeout
				return $pBGv$var$cachedClearTimeout.call(this, marker);
			}
		}
	}

	var $pBGv$var$queue = [];
	var $pBGv$var$draining = false;
	var $pBGv$var$currentQueue;
	var $pBGv$var$queueIndex = -1;

	function $pBGv$var$cleanUpNextTick() {
		if (!$pBGv$var$draining || !$pBGv$var$currentQueue) {
			return;
		}

		$pBGv$var$draining = false;

		if ($pBGv$var$currentQueue.length) {
			$pBGv$var$queue = $pBGv$var$currentQueue.concat($pBGv$var$queue);
		} else {
			$pBGv$var$queueIndex = -1;
		}

		if ($pBGv$var$queue.length) {
			$pBGv$var$drainQueue();
		}
	}

	function $pBGv$var$drainQueue() {
		if ($pBGv$var$draining) {
			return;
		}

		var timeout = $pBGv$var$runTimeout($pBGv$var$cleanUpNextTick);
		$pBGv$var$draining = true;
		var len = $pBGv$var$queue.length;

		while (len) {
			$pBGv$var$currentQueue = $pBGv$var$queue;
			$pBGv$var$queue = [];

			while (++$pBGv$var$queueIndex < len) {
				if ($pBGv$var$currentQueue) {
					$pBGv$var$currentQueue[$pBGv$var$queueIndex].run();
				}
			}

			$pBGv$var$queueIndex = -1;
			len = $pBGv$var$queue.length;
		}

		$pBGv$var$currentQueue = null;
		$pBGv$var$draining = false;
		$pBGv$var$runClearTimeout(timeout);
	}

	$pBGv$var$process.nextTick = function(fun) {
		var args = new Array(arguments.length - 1);

		if (arguments.length > 1) {
			for (var i = 1; i < arguments.length; i++) {
				args[i - 1] = arguments[i];
			}
		}

		$pBGv$var$queue.push(new $pBGv$var$Item(fun, args));

		if ($pBGv$var$queue.length === 1 && !$pBGv$var$draining) {
			$pBGv$var$runTimeout($pBGv$var$drainQueue);
		}
	}; // v8 likes predictible objects

	function $pBGv$var$Item(fun, array) {
		this.fun = fun;
		this.array = array;
	}

	$pBGv$var$Item.prototype.run = function() {
		this.fun.apply(null, this.array);
	};

	$pBGv$var$process.title = "browser";
	$pBGv$var$process.browser = true;
	$pBGv$var$process.env = {};
	$pBGv$var$process.argv = [];
	$pBGv$var$process.version = ""; // empty string to avoid regexp issues

	$pBGv$var$process.versions = {};

	function $pBGv$var$noop() {}

	$pBGv$var$process.on = $pBGv$var$noop;
	$pBGv$var$process.addListener = $pBGv$var$noop;
	$pBGv$var$process.once = $pBGv$var$noop;
	$pBGv$var$process.off = $pBGv$var$noop;
	$pBGv$var$process.removeListener = $pBGv$var$noop;
	$pBGv$var$process.removeAllListeners = $pBGv$var$noop;
	$pBGv$var$process.emit = $pBGv$var$noop;
	$pBGv$var$process.prependListener = $pBGv$var$noop;
	$pBGv$var$process.prependOnceListener = $pBGv$var$noop;

	$pBGv$var$process.listeners = function(name) {
		return [];
	};

	$pBGv$var$process.binding = function(name) {
		throw new Error("process.binding is not supported");
	};

	$pBGv$var$process.cwd = function() {
		return "/";
	};

	$pBGv$var$process.chdir = function(dir) {
		throw new Error("process.chdir is not supported");
	};

	$pBGv$var$process.umask = function() {
		return 0;
	};

	var $bSZI$var$prevTime = 0;
	var $bSZI$var$onNextFrame =
		typeof window !== "undefined" &&
		window.requestAnimationFrame !== undefined
			? function(callback) {
					return window.requestAnimationFrame(callback);
			  }
			: function(callback) {
					var timestamp = Date.now();
					var timeToCall = Math.max(
						0,
						16.7 - (timestamp - $bSZI$var$prevTime)
					);
					$bSZI$var$prevTime = timestamp + timeToCall;
					setTimeout(function() {
						return callback($bSZI$var$prevTime);
					}, timeToCall);
			  };

	var $bSZI$var$createStep = function(setRunNextFrame) {
		var processToRun = [];
		var processToRunNextFrame = [];
		var numThisFrame = 0;
		var isProcessing = false;
		var i = 0;
		var cancelled = new WeakSet();
		var toKeepAlive = new WeakSet();
		var renderStep = {
			cancel: function(process) {
				var indexOfCallback = processToRunNextFrame.indexOf(process);
				cancelled.add(process);

				if (indexOfCallback !== -1) {
					processToRunNextFrame.splice(indexOfCallback, 1);
				}
			},
			process: function(frame) {
				var _a;

				isProcessing = true;
				(_a = [processToRunNextFrame, processToRun]),
					(processToRun = _a[0]),
					(processToRunNextFrame = _a[1]);
				processToRunNextFrame.length = 0;
				numThisFrame = processToRun.length;

				if (numThisFrame) {
					var process_1;

					for (i = 0; i < numThisFrame; i++) {
						process_1 = processToRun[i];
						process_1(frame);

						if (
							toKeepAlive.has(process_1) === true &&
							!cancelled.has(process_1)
						) {
							renderStep.schedule(process_1);
							setRunNextFrame(true);
						}
					}
				}

				isProcessing = false;
			},
			schedule: function(process, keepAlive, immediate) {
				$KFGT$export$invariant(
					typeof process === "function",
					"Argument must be a function"
				);
				var addToCurrentBuffer = immediate && isProcessing;
				var buffer = addToCurrentBuffer
					? processToRun
					: processToRunNextFrame;
				if (keepAlive) toKeepAlive.add(process);

				if (buffer.indexOf(process) === -1) {
					buffer.push(process);
					if (addToCurrentBuffer) numThisFrame = processToRun.length;
				}
			}
		};
		return renderStep;
	};

	var $bSZI$var$StepId;

	(function(StepId) {
		StepId["Read"] = "read";
		StepId["Update"] = "update";
		StepId["Render"] = "render";
		StepId["PostRender"] = "postRender";
		StepId["FixedUpdate"] = "fixedUpdate";
	})($bSZI$var$StepId || ($bSZI$var$StepId = {}));

	var $bSZI$var$maxElapsed = 40;
	var $bSZI$var$defaultElapsed = (1 / 60) * 1000;
	var $bSZI$var$useDefaultElapsed = true;
	var $bSZI$var$willRunNextFrame = false;
	var $bSZI$var$isProcessing = false;
	var $bSZI$var$frame = {
		delta: 0,
		timestamp: 0
	};
	var $bSZI$var$stepsOrder = [
		$bSZI$var$StepId.Read,
		$bSZI$var$StepId.Update,
		$bSZI$var$StepId.Render,
		$bSZI$var$StepId.PostRender
	];

	var $bSZI$var$setWillRunNextFrame = function(willRun) {
		return ($bSZI$var$willRunNextFrame = willRun);
	};

	var $bSZI$var$_a = $bSZI$var$stepsOrder.reduce(
			function(acc, key) {
				var step = $bSZI$var$createStep($bSZI$var$setWillRunNextFrame);

				acc.sync[key] = function(process, keepAlive, immediate) {
					if (keepAlive === void 0) {
						keepAlive = false;
					}

					if (immediate === void 0) {
						immediate = false;
					}

					if (!$bSZI$var$willRunNextFrame) $bSZI$var$startLoop();
					step.schedule(process, keepAlive, immediate);
					return process;
				};

				acc.cancelSync[key] = function(process) {
					return step.cancel(process);
				};

				acc.steps[key] = step;
				return acc;
			},
			{
				steps: {},
				sync: {},
				cancelSync: {}
			}
		),
		$bSZI$var$steps = $bSZI$var$_a.steps,
		$bSZI$export$default = $bSZI$var$_a.sync,
		$bSZI$export$cancelSync = $bSZI$var$_a.cancelSync;

	var $bSZI$var$processStep = function(stepId) {
		return $bSZI$var$steps[stepId].process($bSZI$var$frame);
	};

	var $bSZI$var$processFrame = function(timestamp) {
		$bSZI$var$willRunNextFrame = false;
		$bSZI$var$frame.delta = $bSZI$var$useDefaultElapsed
			? $bSZI$var$defaultElapsed
			: Math.max(
					Math.min(
						timestamp - $bSZI$var$frame.timestamp,
						$bSZI$var$maxElapsed
					),
					1
			  );
		if (!$bSZI$var$useDefaultElapsed)
			$bSZI$var$defaultElapsed = $bSZI$var$frame.delta;
		$bSZI$var$frame.timestamp = timestamp;
		$bSZI$var$isProcessing = true;
		$bSZI$var$stepsOrder.forEach($bSZI$var$processStep);
		$bSZI$var$isProcessing = false;

		if ($bSZI$var$willRunNextFrame) {
			$bSZI$var$useDefaultElapsed = false;
			$bSZI$var$onNextFrame($bSZI$var$processFrame);
		}
	};

	var $bSZI$var$startLoop = function() {
		$bSZI$var$willRunNextFrame = true;
		$bSZI$var$useDefaultElapsed = true;
		if (!$bSZI$var$isProcessing)
			$bSZI$var$onNextFrame($bSZI$var$processFrame);
	};

	var $bSZI$export$getFrameData = function() {
		return $bSZI$var$frame;
	};

	var $Hokg$var$__assign = function() {
		$Hokg$var$__assign =
			Object.assign ||
			function __assign(t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];

					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p))
							t[p] = s[p];
				}

				return t;
			};

		return $Hokg$var$__assign.apply(this, arguments);
	};

	var $Hokg$var$clamp = function(min, max) {
		return function(v) {
			return Math.max(Math.min(v, max), min);
		};
	};

	var $Hokg$var$isFirstChars = function(term) {
		return function(v) {
			return typeof v === "string" && v.indexOf(term) === 0;
		};
	};

	var $Hokg$var$getValueFromFunctionString = function(value) {
		return value.substring(value.indexOf("(") + 1, value.lastIndexOf(")"));
	};

	var $Hokg$var$splitCommaDelimited = function(value) {
		return typeof value === "string" ? value.split(/,\s*/) : [value];
	};

	var $Hokg$var$sanitize = function(v) {
		return v % 1 ? Number(v.toFixed(5)) : v;
	};

	var $Hokg$export$number = {
		test: function(v) {
			return typeof v === "number";
		},
		parse: parseFloat,
		transform: function(v) {
			return v;
		}
	};
	var $Hokg$export$alpha = $Hokg$var$__assign({}, $Hokg$export$number, {
		transform: $Hokg$var$clamp(0, 1)
	});
	var $Hokg$export$scale = $Hokg$var$__assign({}, $Hokg$export$number, {
		default: 1
	});

	var $Hokg$var$createUnitType = function(unit) {
		return {
			test: function(v) {
				return (
					typeof v === "string" &&
					v.endsWith(unit) &&
					v.split(" ").length === 1
				);
			},
			parse: parseFloat,
			transform: function(v) {
				return "" + v + unit;
			}
		};
	};

	var $Hokg$export$degrees = $Hokg$var$createUnitType("deg");
	var $Hokg$export$percent = $Hokg$var$createUnitType("%");
	var $Hokg$export$px = $Hokg$var$createUnitType("px");
	var $Hokg$export$vh = $Hokg$var$createUnitType("vh");
	var $Hokg$export$vw = $Hokg$var$createUnitType("vw");
	var $Hokg$var$clampRgbUnit = $Hokg$var$clamp(0, 255);
	var $Hokg$var$onlyColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i;

	var $Hokg$var$isRgba = function(v) {
		return v.red !== undefined;
	};

	var $Hokg$var$isHsla = function(v) {
		return v.hue !== undefined;
	};

	var $Hokg$var$splitColorValues = function(terms) {
		var numTerms = terms.length;
		return function(v) {
			if (typeof v !== "string") return v;
			var values = {};
			var valuesArray = $Hokg$var$splitCommaDelimited(
				$Hokg$var$getValueFromFunctionString(v)
			);

			for (var i = 0; i < numTerms; i++) {
				values[terms[i]] =
					valuesArray[i] !== undefined
						? parseFloat(valuesArray[i])
						: 1;
			}

			return values;
		};
	};

	var $Hokg$var$rgbaTemplate = function(_a) {
		var red = _a.red,
			green = _a.green,
			blue = _a.blue,
			_b = _a.alpha,
			alpha$$1 = _b === void 0 ? 1 : _b;
		return (
			"rgba(" + red + ", " + green + ", " + blue + ", " + alpha$$1 + ")"
		);
	};

	var $Hokg$var$hslaTemplate = function(_a) {
		var hue = _a.hue,
			saturation = _a.saturation,
			lightness = _a.lightness,
			_b = _a.alpha,
			alpha$$1 = _b === void 0 ? 1 : _b;
		return (
			"hsla(" +
			hue +
			", " +
			saturation +
			", " +
			lightness +
			", " +
			alpha$$1 +
			")"
		);
	};

	var $Hokg$export$rgbUnit = $Hokg$var$__assign({}, $Hokg$export$number, {
		transform: function(v) {
			return Math.round($Hokg$var$clampRgbUnit(v));
		}
	});
	var $Hokg$var$testRgbaString = $Hokg$var$isFirstChars("rgb");
	var $Hokg$export$rgba = {
		test: function(v) {
			return typeof v === "string"
				? $Hokg$var$testRgbaString(v)
				: $Hokg$var$isRgba(v);
		},
		parse: $Hokg$var$splitColorValues(["red", "green", "blue", "alpha"]),
		transform: function(_a) {
			var red = _a.red,
				green = _a.green,
				blue = _a.blue,
				alpha$$1 = _a.alpha;
			return $Hokg$var$rgbaTemplate({
				red: $Hokg$export$rgbUnit.transform(red),
				green: $Hokg$export$rgbUnit.transform(green),
				blue: $Hokg$export$rgbUnit.transform(blue),
				alpha: $Hokg$var$sanitize(alpha$$1)
			});
		}
	};
	var $Hokg$var$testHslaString = $Hokg$var$isFirstChars("hsl");
	var $Hokg$export$hsla = {
		test: function(v) {
			return typeof v === "string"
				? $Hokg$var$testHslaString(v)
				: $Hokg$var$isHsla(v);
		},
		parse: $Hokg$var$splitColorValues([
			"hue",
			"saturation",
			"lightness",
			"alpha"
		]),
		transform: function(_a) {
			var hue = _a.hue,
				saturation = _a.saturation,
				lightness = _a.lightness,
				alpha$$1 = _a.alpha;
			return $Hokg$var$hslaTemplate({
				hue: Math.round(hue),
				saturation: $Hokg$export$percent.transform(
					$Hokg$var$sanitize(saturation)
				),
				lightness: $Hokg$export$percent.transform(
					$Hokg$var$sanitize(lightness)
				),
				alpha: $Hokg$var$sanitize(alpha$$1)
			});
		}
	};
	var $Hokg$export$hex = $Hokg$var$__assign({}, $Hokg$export$rgba, {
		test: $Hokg$var$isFirstChars("#"),
		parse: function(v) {
			var r = "";
			var g = "";
			var b = "";

			if (v.length > 4) {
				r = v.substr(1, 2);
				g = v.substr(3, 2);
				b = v.substr(5, 2);
			} else {
				r = v.substr(1, 1);
				g = v.substr(2, 1);
				b = v.substr(3, 1);
				r += r;
				g += g;
				b += b;
			}

			return {
				red: parseInt(r, 16),
				green: parseInt(g, 16),
				blue: parseInt(b, 16),
				alpha: 1
			};
		}
	});
	var $Hokg$export$color = {
		test: function(v) {
			return (
				(typeof v === "string" && $Hokg$var$onlyColorRegex.test(v)) ||
				$Hokg$export$rgba.test(v) ||
				$Hokg$export$hsla.test(v) ||
				$Hokg$export$hex.test(v)
			);
		},
		parse: function(v) {
			if ($Hokg$export$rgba.test(v)) {
				return $Hokg$export$rgba.parse(v);
			} else if ($Hokg$export$hsla.test(v)) {
				return $Hokg$export$hsla.parse(v);
			} else if ($Hokg$export$hex.test(v)) {
				return $Hokg$export$hex.parse(v);
			}

			return v;
		},
		transform: function(v) {
			if ($Hokg$var$isRgba(v)) {
				return $Hokg$export$rgba.transform(v);
			} else if ($Hokg$var$isHsla(v)) {
				return $Hokg$export$hsla.transform(v);
			}

			return v;
		}
	};
	var $Hokg$var$floatRegex = /(-)?(\d[\d\.]*)/g;
	var $Hokg$var$colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
	var $Hokg$var$COLOR_TOKEN = "${c}";
	var $Hokg$var$NUMBER_TOKEN = "${n}";
	var $Hokg$export$complex = {
		test: function(v) {
			if (typeof v !== "string" || !isNaN(v)) return false;
			var numValues = 0;
			var foundNumbers = v.match($Hokg$var$floatRegex);
			var foundColors = v.match($Hokg$var$colorRegex);
			if (foundNumbers) numValues += foundNumbers.length;
			if (foundColors) numValues += foundColors.length;
			return numValues > 0;
		},
		parse: function(v) {
			var input = v;
			var parsed = [];
			var foundColors = input.match($Hokg$var$colorRegex);

			if (foundColors) {
				input = input.replace(
					$Hokg$var$colorRegex,
					$Hokg$var$COLOR_TOKEN
				);
				parsed.push.apply(
					parsed,
					foundColors.map($Hokg$export$color.parse)
				);
			}

			var foundNumbers = input.match($Hokg$var$floatRegex);

			if (foundNumbers) {
				parsed.push.apply(
					parsed,
					foundNumbers.map($Hokg$export$number.parse)
				);
			}

			return parsed;
		},
		createTransformer: function(prop) {
			var template = prop;
			var token = 0;
			var foundColors = prop.match($Hokg$var$colorRegex);
			var numColors = foundColors ? foundColors.length : 0;

			if (foundColors) {
				for (var i = 0; i < numColors; i++) {
					template = template.replace(
						foundColors[i],
						$Hokg$var$COLOR_TOKEN
					);
					token++;
				}
			}

			var foundNumbers = template.match($Hokg$var$floatRegex);
			var numNumbers = foundNumbers ? foundNumbers.length : 0;

			if (foundNumbers) {
				for (var i = 0; i < numNumbers; i++) {
					template = template.replace(
						foundNumbers[i],
						$Hokg$var$NUMBER_TOKEN
					);
					token++;
				}
			}

			return function(v) {
				var output = template;

				for (var i = 0; i < token; i++) {
					output = output.replace(
						i < numColors
							? $Hokg$var$COLOR_TOKEN
							: $Hokg$var$NUMBER_TOKEN,
						i < numColors
							? $Hokg$export$color.transform(v[i])
							: $Hokg$var$sanitize(v[i])
					);
				}

				return output;
			};
		}
	};
	var $xQjT$var$DEFAULT_OVERSHOOT_STRENGTH = 1.525;

	var $xQjT$export$reversed = function(easing) {
		return function(p) {
			return 1 - easing(1 - p);
		};
	};

	var $xQjT$export$mirrored = function(easing) {
		return function(p) {
			return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
		};
	};

	var $xQjT$export$createExpoIn = function(power) {
		return function(p) {
			return Math.pow(p, power);
		};
	};

	var $xQjT$export$createBackIn = function(power) {
		return function(p) {
			return p * p * ((power + 1) * p - power);
		};
	};

	var $xQjT$export$createAnticipateEasing = function(power) {
		var backEasing = $xQjT$export$createBackIn(power);
		return function(p) {
			return (p *= 2) < 1
				? 0.5 * backEasing(p)
				: 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
		};
	};

	var $xQjT$export$linear = function(p) {
		return p;
	};

	var $xQjT$export$easeIn =
		/*#__PURE__*/
		$xQjT$export$createExpoIn(2);
	var $xQjT$export$easeOut =
		/*#__PURE__*/
		$xQjT$export$reversed($xQjT$export$easeIn);
	var $xQjT$export$easeInOut =
		/*#__PURE__*/
		$xQjT$export$mirrored($xQjT$export$easeIn);

	var $xQjT$export$circIn = function(p) {
		return 1 - Math.sin(Math.acos(p));
	};

	var $xQjT$export$circOut =
		/*#__PURE__*/
		$xQjT$export$reversed($xQjT$export$circIn);
	var $xQjT$export$circInOut =
		/*#__PURE__*/
		$xQjT$export$mirrored($xQjT$export$circOut);
	var $xQjT$export$backIn =
		/*#__PURE__*/
		$xQjT$export$createBackIn($xQjT$var$DEFAULT_OVERSHOOT_STRENGTH);
	var $xQjT$export$backOut =
		/*#__PURE__*/
		$xQjT$export$reversed($xQjT$export$backIn);
	var $xQjT$export$backInOut =
		/*#__PURE__*/
		$xQjT$export$mirrored($xQjT$export$backIn);
	var $xQjT$export$anticipate =
		/*#__PURE__*/
		$xQjT$export$createAnticipateEasing(
			$xQjT$var$DEFAULT_OVERSHOOT_STRENGTH
		);
	var $xQjT$var$NEWTON_ITERATIONS = 8;
	var $xQjT$var$NEWTON_MIN_SLOPE = 0.001;
	var $xQjT$var$SUBDIVISION_PRECISION = 0.0000001;
	var $xQjT$var$SUBDIVISION_MAX_ITERATIONS = 10;
	var $xQjT$var$K_SPLINE_TABLE_SIZE = 11;
	var $xQjT$var$K_SAMPLE_STEP_SIZE =
		1.0 / ($xQjT$var$K_SPLINE_TABLE_SIZE - 1.0);
	var $xQjT$var$FLOAT_32_SUPPORTED = typeof Float32Array !== "undefined";

	var $xQjT$var$a = function(a1, a2) {
		return 1.0 - 3.0 * a2 + 3.0 * a1;
	};

	var $xQjT$var$b = function(a1, a2) {
		return 3.0 * a2 - 6.0 * a1;
	};

	var $xQjT$var$c = function(a1) {
		return 3.0 * a1;
	};

	var $xQjT$var$getSlope = function(t, a1, a2) {
		return (
			3.0 * $xQjT$var$a(a1, a2) * t * t +
			2.0 * $xQjT$var$b(a1, a2) * t +
			$xQjT$var$c(a1)
		);
	};

	var $xQjT$var$calcBezier = function(t, a1, a2) {
		return (
			(($xQjT$var$a(a1, a2) * t + $xQjT$var$b(a1, a2)) * t +
				$xQjT$var$c(a1)) *
			t
		);
	};

	function $xQjT$export$cubicBezier(mX1, mY1, mX2, mY2) {
		var sampleValues = $xQjT$var$FLOAT_32_SUPPORTED
			? new Float32Array($xQjT$var$K_SPLINE_TABLE_SIZE)
			: new Array($xQjT$var$K_SPLINE_TABLE_SIZE);

		var binarySubdivide = function(aX, aA, aB) {
			var i = 0;
			var currentX;
			var currentT;

			do {
				currentT = aA + (aB - aA) / 2.0;
				currentX = $xQjT$var$calcBezier(currentT, mX1, mX2) - aX;

				if (currentX > 0.0) {
					aB = currentT;
				} else {
					aA = currentT;
				}
			} while (
				Math.abs(currentX) > $xQjT$var$SUBDIVISION_PRECISION &&
				++i < $xQjT$var$SUBDIVISION_MAX_ITERATIONS
			);

			return currentT;
		};

		var newtonRaphsonIterate = function(aX, aGuessT) {
			var i = 0;
			var currentSlope = 0;
			var currentX;

			for (; i < $xQjT$var$NEWTON_ITERATIONS; ++i) {
				currentSlope = $xQjT$var$getSlope(aGuessT, mX1, mX2);

				if (currentSlope === 0.0) {
					return aGuessT;
				}

				currentX = $xQjT$var$calcBezier(aGuessT, mX1, mX2) - aX;
				aGuessT -= currentX / currentSlope;
			}

			return aGuessT;
		};

		var calcSampleValues = function() {
			for (var i = 0; i < $xQjT$var$K_SPLINE_TABLE_SIZE; ++i) {
				sampleValues[i] = $xQjT$var$calcBezier(
					i * $xQjT$var$K_SAMPLE_STEP_SIZE,
					mX1,
					mX2
				);
			}
		};

		var getTForX = function(aX) {
			var intervalStart = 0.0;
			var currentSample = 1;
			var lastSample = $xQjT$var$K_SPLINE_TABLE_SIZE - 1;
			var dist = 0.0;
			var guessForT = 0.0;
			var initialSlope = 0.0;

			for (
				;
				currentSample !== lastSample &&
				sampleValues[currentSample] <= aX;
				++currentSample
			) {
				intervalStart += $xQjT$var$K_SAMPLE_STEP_SIZE;
			}

			--currentSample;
			dist =
				(aX - sampleValues[currentSample]) /
				(sampleValues[currentSample + 1] - sampleValues[currentSample]);
			guessForT = intervalStart + dist * $xQjT$var$K_SAMPLE_STEP_SIZE;
			initialSlope = $xQjT$var$getSlope(guessForT, mX1, mX2);

			if (initialSlope >= $xQjT$var$NEWTON_MIN_SLOPE) {
				return newtonRaphsonIterate(aX, guessForT);
			} else if (initialSlope === 0.0) {
				return guessForT;
			} else {
				return binarySubdivide(
					aX,
					intervalStart,
					intervalStart + $xQjT$var$K_SAMPLE_STEP_SIZE
				);
			}
		};

		calcSampleValues();

		var resolver = function(aX) {
			var returnValue;

			if (mX1 === mY1 && mX2 === mY2) {
				returnValue = aX;
			} else if (aX === 0) {
				returnValue = 0;
			} else if (aX === 1) {
				returnValue = 1;
			} else {
				returnValue = $xQjT$var$calcBezier(getTForX(aX), mY1, mY2);
			}

			return returnValue;
		};

		return resolver;
	}

	var $Q4bC$export$createStylerFactory = function(_a) {
		var onRead = _a.onRead,
			onRender = _a.onRender,
			_b = _a.aliasMap,
			aliasMap = _b === void 0 ? {} : _b,
			_c = _a.useCache,
			useCache = _c === void 0 ? true : _c;
		return function(props) {
			var state = {};
			var changedValues = [];
			var hasChanged = false;

			var setValue = function(unmappedKey, value) {
				var key = aliasMap[unmappedKey] || unmappedKey;
				var currentValue = state[key];
				state[key] = value;

				if (state[key] !== currentValue) {
					if (changedValues.indexOf(key) === -1) {
						changedValues.push(key);
					}

					if (!hasChanged) {
						hasChanged = true;
						$bSZI$export$default.render(render);
					}
				}
			};

			function render(forceRender) {
				if (forceRender === void 0) {
					forceRender = false;
				}

				if (forceRender === true || hasChanged) {
					onRender(state, props, changedValues);
					hasChanged = false;
					changedValues.length = 0;
				}

				return this;
			}

			return {
				get: function(unmappedKey) {
					var key = aliasMap[unmappedKey] || unmappedKey;
					return key
						? useCache && state[key] !== undefined
							? state[key]
							: onRead(key, props)
						: state;
				},
				set: function(values, value) {
					if (typeof values === "string") {
						if (value !== undefined) {
							setValue(values, value);
						} else {
							return function(v) {
								return setValue(values, v);
							};
						}
					} else {
						for (var key in values) {
							if (values.hasOwnProperty(key)) {
								setValue(key, values[key]);
							}
						}
					}

					return this;
				},
				render: render
			};
		};
	};

	var $Q4bC$var$CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
	var $Q4bC$var$REPLACE_TEMPLATE = "$1-$2";

	var $Q4bC$var$camelToDash = function(str) {
		return str
			.replace($Q4bC$var$CAMEL_CASE_PATTERN, $Q4bC$var$REPLACE_TEMPLATE)
			.toLowerCase();
	};

	var $Q4bC$var$setDomAttrs = function(element, attrs) {
		for (var key in attrs) {
			if (attrs.hasOwnProperty(key)) {
				element.setAttribute(key, attrs[key]);
			}
		}
	};

	var $Q4bC$var$camelCache =
		/*#__PURE__*/
		new Map();
	var $Q4bC$var$dashCache =
		/*#__PURE__*/
		new Map();
	var $Q4bC$var$prefixes = ["Webkit", "Moz", "O", "ms", ""];
	var $Q4bC$var$numPrefixes = $Q4bC$var$prefixes.length;
	var $Q4bC$var$testElement;

	var $Q4bC$var$testPrefix = function(key) {
		if (typeof document === "undefined") return;
		$Q4bC$var$testElement =
			$Q4bC$var$testElement || document.createElement("div");

		for (var i = 0; i < $Q4bC$var$numPrefixes; i++) {
			var prefix = $Q4bC$var$prefixes[i];
			var noPrefix = prefix === "";
			var prefixedPropertyName = noPrefix
				? key
				: prefix + key.charAt(0).toUpperCase() + key.slice(1);

			if (prefixedPropertyName in $Q4bC$var$testElement.style) {
				$Q4bC$var$camelCache.set(key, prefixedPropertyName);
				$Q4bC$var$dashCache.set(
					key,
					"" +
						(noPrefix ? "" : "-") +
						$Q4bC$var$camelToDash(prefixedPropertyName)
				);
			}
		}
	};

	var $Q4bC$var$prefixer = function(key, asDashCase) {
		if (asDashCase === void 0) {
			asDashCase = false;
		}

		var cache = asDashCase ? $Q4bC$var$dashCache : $Q4bC$var$camelCache;
		if (!cache.has(key)) $Q4bC$var$testPrefix(key);
		return cache.get(key) || key;
	};

	var $Q4bC$var$axes = ["", "X", "Y", "Z"];
	var $Q4bC$var$order = [
		"translate",
		"scale",
		"rotate",
		"skew",
		"transformPerspective"
	];
	var $Q4bC$var$TRANSFORM_ORIGIN_X = "transformOriginX";
	var $Q4bC$var$TRANSFORM_ORIGIN_Y = "transformOriginY";
	var $Q4bC$var$transformProps =
		/*#__PURE__*/
		$Q4bC$var$order.reduce(
			function(acc, key) {
				return $Q4bC$var$axes.reduce(function(axesAcc, axesKey) {
					axesAcc.push(key + axesKey);
					return axesAcc;
				}, acc);
			},
			["x", "y", "z"]
		);
	var $Q4bC$var$transformPropDictionary =
		/*#__PURE__*/
		$Q4bC$var$transformProps.reduce(function(dict, key) {
			dict[key] = true;
			return dict;
		}, {});

	var $Q4bC$var$isTransformProp = function(key) {
		return $Q4bC$var$transformPropDictionary[key] === true;
	};

	var $Q4bC$var$sortTransformProps = function(a, b) {
		return (
			$Q4bC$var$transformProps.indexOf(a) -
			$Q4bC$var$transformProps.indexOf(b)
		);
	};

	var $Q4bC$var$isTransformOriginProp = function(key) {
		return (
			key === $Q4bC$var$TRANSFORM_ORIGIN_X ||
			key === $Q4bC$var$TRANSFORM_ORIGIN_Y
		);
	};

	var $Q4bC$var$valueTypes = {
		color: $Hokg$export$color,
		backgroundColor: $Hokg$export$color,
		outlineColor: $Hokg$export$color,
		fill: $Hokg$export$color,
		stroke: $Hokg$export$color,
		borderColor: $Hokg$export$color,
		borderTopColor: $Hokg$export$color,
		borderRightColor: $Hokg$export$color,
		borderBottomColor: $Hokg$export$color,
		borderLeftColor: $Hokg$export$color,
		borderRadius: $Hokg$export$px,
		width: $Hokg$export$px,
		maxWidth: $Hokg$export$px,
		height: $Hokg$export$px,
		maxHeight: $Hokg$export$px,
		top: $Hokg$export$px,
		left: $Hokg$export$px,
		bottom: $Hokg$export$px,
		right: $Hokg$export$px,
		rotate: $Hokg$export$degrees,
		rotateX: $Hokg$export$degrees,
		rotateY: $Hokg$export$degrees,
		rotateZ: $Hokg$export$degrees,
		scale: $Hokg$export$scale,
		scaleX: $Hokg$export$scale,
		scaleY: $Hokg$export$scale,
		scaleZ: $Hokg$export$scale,
		skew: $Hokg$export$degrees,
		skewX: $Hokg$export$degrees,
		skewY: $Hokg$export$degrees,
		distance: $Hokg$export$px,
		translateX: $Hokg$export$px,
		translateY: $Hokg$export$px,
		translateZ: $Hokg$export$px,
		perspective: $Hokg$export$px,
		opacity: $Hokg$export$alpha,
		transformOriginX: $Hokg$export$percent,
		transformOriginY: $Hokg$export$percent,
		transformOriginZ: $Hokg$export$px
	};

	var $Q4bC$var$getValueType = function(key) {
		return $Q4bC$var$valueTypes[key];
	};

	var $Q4bC$var$aliasMap = {
		x: "translateX",
		y: "translateY",
		z: "translateZ",
		originX: "transformOriginX",
		originY: "transformOriginY",
		originZ: "transformOriginZ"
	};
	var $Q4bC$var$NUMBER = "number";
	var $Q4bC$var$OBJECT = "object";
	var $Q4bC$var$COLON = ":";
	var $Q4bC$var$SEMI_COLON = ";";
	var $Q4bC$var$TRANSFORM_ORIGIN = "transform-origin";
	var $Q4bC$var$TRANSFORM = "transform";
	var $Q4bC$var$TRANSLATE_Z = "translateZ";
	var $Q4bC$var$TRANSFORM_NONE = ";transform: none";

	var $Q4bC$var$styleRule = function(key, value) {
		return "" + $Q4bC$var$SEMI_COLON + key + $Q4bC$var$COLON + value;
	};

	function $Q4bC$export$buildStyles(
		state,
		changedValues,
		enableHardwareAcceleration,
		blacklist
	) {
		if (changedValues === void 0) {
			changedValues = true;
		}

		if (enableHardwareAcceleration === void 0) {
			enableHardwareAcceleration = true;
		}

		var valuesToChange =
			changedValues === true ? Object.keys(state) : changedValues;
		var propertyString = "";
		var transformString = "";
		var hasTransformOrigin = false;
		var transformIsDefault = true;
		var hasTransform = false;
		var transformHasZ = false;
		var numChangedValues = valuesToChange.length;

		for (var i = 0; i < numChangedValues; i++) {
			var key = valuesToChange[i];

			if ($Q4bC$var$isTransformProp(key)) {
				hasTransform = true;

				for (var stateKey in state) {
					if (
						$Q4bC$var$isTransformProp(stateKey) &&
						valuesToChange.indexOf(stateKey) === -1
					) {
						valuesToChange.push(stateKey);
					}
				}

				break;
			}
		}

		valuesToChange.sort($Q4bC$var$sortTransformProps);
		var totalNumChangedValues = valuesToChange.length;

		for (var i = 0; i < totalNumChangedValues; i++) {
			var key = valuesToChange[i];
			if (blacklist.has(key)) continue;
			var isTransformKey = $Q4bC$var$isTransformProp(key);
			var value = state[key];
			var valueType = $Q4bC$var$getValueType(key);

			if (isTransformKey) {
				if (
					(valueType.default && value !== valueType.default) ||
					(!valueType.default && value !== 0)
				) {
					transformIsDefault = false;
				}
			}

			if (
				valueType &&
				(typeof value === $Q4bC$var$NUMBER ||
					typeof value === $Q4bC$var$OBJECT) &&
				valueType.transform
			) {
				value = valueType.transform(value);
			}

			if (isTransformKey) {
				transformString += key + "(" + value + ") ";
				transformHasZ =
					key === $Q4bC$var$TRANSLATE_Z ? true : transformHasZ;
			} else if ($Q4bC$var$isTransformOriginProp(key)) {
				state[key] = value;
				hasTransformOrigin = true;
			} else {
				propertyString += $Q4bC$var$styleRule(
					$Q4bC$var$prefixer(key, true),
					value
				);
			}
		}

		if (hasTransformOrigin) {
			propertyString += $Q4bC$var$styleRule(
				$Q4bC$var$TRANSFORM_ORIGIN,
				(state.transformOriginX || 0) +
					" " +
					(state.transformOriginY || 0) +
					" " +
					(state.transformOriginZ || 0)
			);
		}

		if (hasTransform) {
			if (!transformHasZ && enableHardwareAcceleration) {
				transformString += $Q4bC$var$TRANSLATE_Z + "(0)";
			}

			propertyString += $Q4bC$var$styleRule(
				$Q4bC$var$TRANSFORM,
				transformIsDefault ? $Q4bC$var$TRANSFORM_NONE : transformString
			);
		}

		return propertyString;
	}

	var $Q4bC$var$SCROLL_LEFT = "scrollLeft";
	var $Q4bC$var$SCROLL_TOP = "scrollTop";
	var $Q4bC$var$scrollValues =
		/*#__PURE__*/
		new Set([$Q4bC$var$SCROLL_LEFT, $Q4bC$var$SCROLL_TOP]);
	var $Q4bC$var$cssStyler =
		/*#__PURE__*/
		$Q4bC$export$createStylerFactory({
			onRead: function(key, _a) {
				var element = _a.element,
					preparseOutput = _a.preparseOutput;
				var valueType = $Q4bC$var$getValueType(key);

				if ($Q4bC$var$isTransformProp(key)) {
					return valueType ? valueType.default || 0 : 0;
				} else if ($Q4bC$var$scrollValues.has(key)) {
					return element[key];
				} else {
					var domValue =
						window
							.getComputedStyle(element, null)
							.getPropertyValue($Q4bC$var$prefixer(key, true)) ||
						0;
					return preparseOutput && valueType && valueType.parse
						? valueType.parse(domValue)
						: domValue;
				}
			},
			onRender: function(state, _a, changedValues) {
				var element = _a.element,
					enableHardwareAcceleration = _a.enableHardwareAcceleration;
				element.style.cssText += $Q4bC$export$buildStyles(
					state,
					changedValues,
					enableHardwareAcceleration,
					$Q4bC$var$scrollValues
				);
				if (changedValues.indexOf($Q4bC$var$SCROLL_LEFT) !== -1)
					element.scrollLeft = state.scrollLeft;
				if (changedValues.indexOf($Q4bC$var$SCROLL_TOP) !== -1)
					element.scrollTop = state.scrollTop;
			},
			aliasMap: $Q4bC$var$aliasMap,
			uncachedValues: $Q4bC$var$scrollValues
		});

	var $Q4bC$var$css = function(element, props) {
		return $Q4bC$var$cssStyler(
			$vCxL$export$__assign(
				{
					element: element,
					enableHardwareAcceleration: true,
					preparseOutput: true
				},
				props
			)
		);
	};

	var $Q4bC$var$ZERO_NOT_ZERO = 0.0000001;

	var $Q4bC$var$percentToPixels = function(percent$$1, length) {
		return (percent$$1 / 100) * length + "px";
	};

	var $Q4bC$var$build = function(state, dimensions, isPath, pathLength) {
		var hasTransform = false;
		var hasDashArray = false;
		var props = {};
		var dashArrayStyles = isPath
			? {
					pathLength: "0",
					pathSpacing: "" + pathLength
			  }
			: undefined;
		var scale$$1 =
			state.scale !== undefined
				? state.scale || $Q4bC$var$ZERO_NOT_ZERO
				: state.scaleX || 1;
		var scaleY =
			state.scaleY !== undefined
				? state.scaleY || $Q4bC$var$ZERO_NOT_ZERO
				: scale$$1 || 1;
		var transformOriginX =
			dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
		var transformOriginY =
			dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
		var scaleTransformX = -transformOriginX * (scale$$1 * 1);
		var scaleTransformY = -transformOriginY * (scaleY * 1);
		var scaleReplaceX = transformOriginX / scale$$1;
		var scaleReplaceY = transformOriginY / scaleY;
		var transform = {
			translate:
				"translate(" +
				state.translateX +
				", " +
				state.translateY +
				") ",
			scale:
				"translate(" +
				scaleTransformX +
				", " +
				scaleTransformY +
				") scale(" +
				scale$$1 +
				", " +
				scaleY +
				") translate(" +
				scaleReplaceX +
				", " +
				scaleReplaceY +
				") ",
			rotate:
				"rotate(" +
				state.rotate +
				", " +
				transformOriginX +
				", " +
				transformOriginY +
				") ",
			skewX: "skewX(" + state.skewX + ") ",
			skewY: "skewY(" + state.skewY + ") "
		};

		for (var key in state) {
			if (state.hasOwnProperty(key)) {
				var value = state[key];

				if ($Q4bC$var$isTransformProp(key)) {
					hasTransform = true;
				} else if (
					isPath &&
					(key === "pathLength" || key === "pathSpacing") &&
					typeof value === "number"
				) {
					hasDashArray = true;
					dashArrayStyles[key] = $Q4bC$var$percentToPixels(
						value,
						pathLength
					);
				} else if (isPath && key === "pathOffset") {
					props["stroke-dashoffset"] = $Q4bC$var$percentToPixels(
						-value,
						pathLength
					);
				} else {
					props[$Q4bC$var$camelToDash(key)] = value;
				}
			}
		}

		if (hasDashArray) {
			props["stroke-dasharray"] =
				dashArrayStyles.pathLength + " " + dashArrayStyles.pathSpacing;
		}

		if (hasTransform) {
			props.transform = "";

			for (var key in transform) {
				if (transform.hasOwnProperty(key)) {
					var defaultValue = key === "scale" ? "1" : "0";
					props.transform += transform[key].replace(
						/undefined/g,
						defaultValue
					);
				}
			}
		}

		return props;
	};

	var $Q4bC$var$valueTypes$1 = {
		fill: $Hokg$export$color,
		stroke: $Hokg$export$color,
		scale: $Hokg$export$scale,
		scaleX: $Hokg$export$scale,
		scaleY: $Hokg$export$scale,
		opacity: $Hokg$export$alpha,
		fillOpacity: $Hokg$export$alpha,
		strokeOpacity: $Hokg$export$alpha
	};

	var $Q4bC$var$getValueType$1 = function(key) {
		return $Q4bC$var$valueTypes$1[key];
	};

	var $Q4bC$var$svgStyler =
		/*#__PURE__*/
		$Q4bC$export$createStylerFactory({
			onRead: function(key, _a) {
				var element = _a.element;

				if (!$Q4bC$var$isTransformProp(key)) {
					return element.getAttribute(key);
				} else {
					var valueType = $Q4bC$var$getValueType$1(key);
					return valueType ? valueType.default : 0;
				}
			},
			onRender: function(state, _a, changedValues) {
				var dimensions = _a.dimensions,
					element = _a.element,
					isPath = _a.isPath,
					pathLength = _a.pathLength;
				$Q4bC$var$setDomAttrs(
					element,
					$Q4bC$var$build(state, dimensions, isPath, pathLength)
				);
			},
			aliasMap: {
				x: "translateX",
				y: "translateY",
				background: "fill"
			}
		});

	var $Q4bC$var$svg = function(element) {
		var _a = element.getBBox(),
			x = _a.x,
			y = _a.y,
			width = _a.width,
			height = _a.height;

		var props = {
			element: element,
			dimensions: {
				x: x,
				y: y,
				width: width,
				height: height
			},
			isPath: false
		};

		if (element.tagName === "path") {
			props.isPath = true;
			props.pathLength = element.getTotalLength();
		}

		return $Q4bC$var$svgStyler(props);
	};

	var $Q4bC$var$viewport =
		/*#__PURE__*/
		$Q4bC$export$createStylerFactory({
			useCache: false,
			onRead: function(key) {
				return key === "scrollTop"
					? window.pageYOffset
					: window.pageXOffset;
			},
			onRender: function(_a) {
				var _b = _a.scrollTop,
					scrollTop = _b === void 0 ? 0 : _b,
					_c = _a.scrollLeft,
					scrollLeft = _c === void 0 ? 0 : _c;
				return window.scrollTo(scrollLeft, scrollTop);
			}
		});
	var $Q4bC$var$cache =
		/*#__PURE__*/
		new WeakMap();

	var $Q4bC$var$createDOMStyler = function(node, props) {
		var styler;

		if (node instanceof HTMLElement) {
			styler = $Q4bC$var$css(node, props);
		} else if (node instanceof SVGElement) {
			styler = $Q4bC$var$svg(node);
		} else if (typeof window !== "undefined" && node === window) {
			styler = $Q4bC$var$viewport(node);
		}

		$KFGT$export$invariant(
			styler !== undefined,
			"No valid node provided. Node must be HTMLElement, SVGElement or window."
		);
		$Q4bC$var$cache.set(node, styler);
		return styler;
	};

	var $Q4bC$var$getStyler = function(node, props) {
		return $Q4bC$var$cache.has(node)
			? $Q4bC$var$cache.get(node)
			: $Q4bC$var$createDOMStyler(node, props);
	};

	function $Q4bC$export$default(nodeOrSelector, props) {
		var node =
			typeof nodeOrSelector === "string"
				? document.querySelector(nodeOrSelector)
				: nodeOrSelector;
		return $Q4bC$var$getStyler(node, props);
	}

	var $z2lI$var$isNum = function(v) {
		return typeof v === "number";
	};

	var $z2lI$var$isPoint = function(point) {
		return point.x !== undefined && point.y !== undefined;
	};

	var $z2lI$var$isPoint3D = function(point) {
		return point.z !== undefined;
	};

	var $z2lI$var$toDecimal = function(num, precision) {
		if (precision === void 0) {
			precision = 2;
		}

		precision = Math.pow(10, precision);
		return Math.round(num * precision) / precision;
	};

	var $z2lI$var$ZERO_POINT = {
		x: 0,
		y: 0,
		z: 0
	};

	var $z2lI$var$distance1D = function(a, b) {
		return Math.abs(a - b);
	};

	var $z2lI$var$angle = function(a, b) {
		if (b === void 0) {
			b = $z2lI$var$ZERO_POINT;
		}

		return $z2lI$var$radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
	};

	var $z2lI$var$degreesToRadians = function(degrees$$1) {
		return (degrees$$1 * Math.PI) / 180;
	};

	var $z2lI$var$dilate = function(a, b, dilation) {
		return a + (b - a) * dilation;
	};

	var $z2lI$var$distance = function(a, b) {
		if (b === void 0) {
			b = $z2lI$var$ZERO_POINT;
		}

		if ($z2lI$var$isNum(a) && $z2lI$var$isNum(b)) {
			return $z2lI$var$distance1D(a, b);
		} else if ($z2lI$var$isPoint(a) && $z2lI$var$isPoint(b)) {
			var xDelta = $z2lI$var$distance1D(a.x, b.x);
			var yDelta = $z2lI$var$distance1D(a.y, b.y);
			var zDelta =
				$z2lI$var$isPoint3D(a) && $z2lI$var$isPoint3D(b)
					? $z2lI$var$distance1D(a.z, b.z)
					: 0;
			return Math.sqrt(
				Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2)
			);
		}

		return 0;
	};

	var $z2lI$var$getProgressFromValue = function(from, to, value) {
		var toFromDifference = to - from;
		return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
	};

	var $z2lI$var$getValueFromProgress = function(from, to, progress) {
		return -progress * from + progress * to + from;
	};

	var $z2lI$var$pointFromAngleAndDistance = function(
		origin,
		angle,
		distance
	) {
		angle = $z2lI$var$degreesToRadians(angle);
		return {
			x: distance * Math.cos(angle) + origin.x,
			y: distance * Math.sin(angle) + origin.y
		};
	};

	var $z2lI$var$radiansToDegrees = function(radians) {
		return (radians * 180) / Math.PI;
	};

	var $z2lI$var$smooth = function(newValue, oldValue, duration, smoothing) {
		if (smoothing === void 0) {
			smoothing = 0;
		}

		return $z2lI$var$toDecimal(
			oldValue +
				(duration * (newValue - oldValue)) /
					Math.max(smoothing, duration)
		);
	};

	var $z2lI$var$speedPerFrame = function(xps, frameDuration) {
		return $z2lI$var$isNum(xps) ? xps / (1000 / frameDuration) : 0;
	};

	var $z2lI$var$speedPerSecond = function(velocity, frameDuration) {
		return frameDuration ? velocity * (1000 / frameDuration) : 0;
	};

	var $z2lI$var$stepProgress = function(steps, progress) {
		var segment = 1 / (steps - 1);
		var subsegment = 1 / (2 * (steps - 1));
		var percentProgressOfTarget = Math.min(progress, 1);
		var subsegmentProgressOfTarget = percentProgressOfTarget / subsegment;
		var segmentProgressOfTarget = Math.floor(
			(subsegmentProgressOfTarget + 1) / 2
		);
		return segmentProgressOfTarget * segment;
	};

	var $z2lI$export$calc =
		/*#__PURE__*/
		Object.freeze({
			isPoint: $z2lI$var$isPoint,
			isPoint3D: $z2lI$var$isPoint3D,
			angle: $z2lI$var$angle,
			degreesToRadians: $z2lI$var$degreesToRadians,
			dilate: $z2lI$var$dilate,
			distance: $z2lI$var$distance,
			getProgressFromValue: $z2lI$var$getProgressFromValue,
			getValueFromProgress: $z2lI$var$getValueFromProgress,
			pointFromAngleAndDistance: $z2lI$var$pointFromAngleAndDistance,
			radiansToDegrees: $z2lI$var$radiansToDegrees,
			smooth: $z2lI$var$smooth,
			speedPerFrame: $z2lI$var$speedPerFrame,
			speedPerSecond: $z2lI$var$speedPerSecond,
			stepProgress: $z2lI$var$stepProgress
		});

	var $z2lI$var$identity = function(v) {
		return v;
	};

	var $z2lI$var$appendUnit = function(unit) {
		return function(v) {
			return "" + v + unit;
		};
	};

	var $z2lI$var$applyOffset = function(from, to) {
		var hasReceivedFrom = true;

		if (to === undefined) {
			to = from;
			hasReceivedFrom = false;
		}

		var getOffset = function(v) {
			return v - from;
		};

		var applyOffsetTo = function(v) {
			return v + to;
		};

		return function(v) {
			if (hasReceivedFrom) {
				return applyOffsetTo(getOffset(v));
			} else {
				from = v;
				hasReceivedFrom = true;
				return to;
			}
		};
	};

	var $z2lI$var$blend = function(from, to, v) {
		var fromExpo = from * from;
		var toExpo = to * to;
		return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
	};

	var $z2lI$var$blendColor = function(from, to) {
		var fromColor =
			typeof from === "string" ? $Hokg$export$color.parse(from) : from;
		var toColor =
			typeof to === "string" ? $Hokg$export$color.parse(to) : to;
		var blended = $vCxL$export$__assign({}, fromColor);
		var blendFunc =
			from.hue !== undefined ||
			(typeof from === "string" && $Hokg$export$hsla.test(from))
				? $z2lI$var$getValueFromProgress
				: $z2lI$var$blend;
		return function(v) {
			blended = $vCxL$export$__assign({}, blended);

			for (var key in blended) {
				if (key !== "alpha" && blended.hasOwnProperty(key)) {
					blended[key] = blendFunc(fromColor[key], toColor[key], v);
				}
			}

			blended.alpha = $z2lI$var$getValueFromProgress(
				fromColor.alpha,
				toColor.alpha,
				v
			);
			return blended;
		};
	};

	var $z2lI$var$blendArray = function(from, to) {
		var output = from.slice();
		var numValues = output.length;
		var blendValue = from.map(function(fromThis, i) {
			var toThis = to[i];
			return typeof fromThis === "number"
				? function(v) {
						return $z2lI$var$getValueFromProgress(
							fromThis,
							toThis,
							v
						);
				  }
				: $z2lI$var$blendColor(fromThis, toThis);
		});
		return function(v) {
			for (var i = 0; i < numValues; i++) {
				output[i] = blendValue[i](v);
			}

			return output;
		};
	};

	var $z2lI$var$clamp = function(min, max) {
		return function(v) {
			return Math.min(Math.max(v, min), max);
		};
	};

	var $z2lI$var$combineFunctions = function(a, b) {
		return function(v) {
			return b(a(v));
		};
	};

	var $z2lI$var$pipe = function() {
		var transformers = [];

		for (var _i = 0; _i < arguments.length; _i++) {
			transformers[_i] = arguments[_i];
		}

		return transformers.reduce($z2lI$var$combineFunctions);
	};

	var $z2lI$var$conditional = function(check, apply) {
		return function(v) {
			return check(v) ? apply(v) : v;
		};
	};

	var $z2lI$var$slowInterpolate = function(
		input,
		output,
		rangeLength,
		rangeEasing
	) {
		var finalIndex = rangeLength - 1;

		if (input[0] > input[finalIndex]) {
			input.reverse();
			output.reverse();
		}

		return function(v) {
			if (v <= input[0]) {
				return output[0];
			}

			if (v >= input[finalIndex]) {
				return output[finalIndex];
			}

			var i = 1;

			for (; i < rangeLength; i++) {
				if (input[i] > v || i === finalIndex) {
					break;
				}
			}

			var progressInRange = $z2lI$var$getProgressFromValue(
				input[i - 1],
				input[i],
				v
			);
			var easedProgress = rangeEasing
				? rangeEasing[i - 1](progressInRange)
				: progressInRange;
			return $z2lI$var$getValueFromProgress(
				output[i - 1],
				output[i],
				easedProgress
			);
		};
	};

	var $z2lI$var$fastInterpolate = function(minA, maxA, minB, maxB) {
		return function(v) {
			return ((v - minA) * (maxB - minB)) / (maxA - minA) + minB;
		};
	};

	var $z2lI$var$interpolate = function(input, output, rangeEasing) {
		var rangeLength = input.length;
		return rangeLength !== 2
			? $z2lI$var$slowInterpolate(input, output, rangeLength, rangeEasing)
			: $z2lI$var$fastInterpolate(
					input[0],
					input[1],
					output[0],
					output[1]
			  );
	};

	var $z2lI$var$generateStaticSpring = function(alterDisplacement) {
		if (alterDisplacement === void 0) {
			alterDisplacement = $z2lI$var$identity;
		}

		return function(constant, origin) {
			return function(v) {
				var displacement = origin - v;
				var springModifiedDisplacement =
					-constant * (0 - alterDisplacement(Math.abs(displacement)));
				return displacement <= 0
					? origin + springModifiedDisplacement
					: origin - springModifiedDisplacement;
			};
		};
	};

	var $z2lI$var$linearSpring =
		/*#__PURE__*/
		$z2lI$var$generateStaticSpring();
	var $z2lI$var$nonlinearSpring =
		/*#__PURE__*/
		$z2lI$var$generateStaticSpring(Math.sqrt);

	var $z2lI$var$wrap = function(min, max) {
		return function(v) {
			var rangeSize = max - min;
			return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
		};
	};

	var $z2lI$var$smooth$1 = function(strength) {
		if (strength === void 0) {
			strength = 50;
		}

		var previousValue = 0;
		var lastUpdated = 0;
		return function(v) {
			var currentFramestamp = $bSZI$export$getFrameData().timestamp;
			var timeDelta =
				currentFramestamp !== lastUpdated
					? currentFramestamp - lastUpdated
					: 0;
			var newValue = timeDelta
				? $z2lI$var$smooth(v, previousValue, timeDelta, strength)
				: previousValue;
			lastUpdated = currentFramestamp;
			previousValue = newValue;
			return newValue;
		};
	};

	var $z2lI$var$snap = function(points) {
		if (typeof points === "number") {
			return function(v) {
				return Math.round(v / points) * points;
			};
		} else {
			var i_1 = 0;
			var numPoints_1 = points.length;
			return function(v) {
				var lastDistance = Math.abs(points[0] - v);

				for (i_1 = 1; i_1 < numPoints_1; i_1++) {
					var point = points[i_1];
					var distance$$1 = Math.abs(point - v);
					if (distance$$1 === 0) return point;
					if (distance$$1 > lastDistance) return points[i_1 - 1];
					if (i_1 === numPoints_1 - 1) return point;
					lastDistance = distance$$1;
				}
			};
		}
	};

	var $z2lI$var$steps = function(st, min, max) {
		if (min === void 0) {
			min = 0;
		}

		if (max === void 0) {
			max = 1;
		}

		return function(v) {
			var progress = $z2lI$var$getProgressFromValue(min, max, v);
			return $z2lI$var$getValueFromProgress(
				min,
				max,
				$z2lI$var$stepProgress(st, progress)
			);
		};
	};

	var $z2lI$var$transformMap = function(childTransformers) {
		return function(v) {
			var output = $vCxL$export$__assign({}, v);

			for (var key in childTransformers) {
				if (childTransformers.hasOwnProperty(key)) {
					var childTransformer = childTransformers[key];
					output[key] = childTransformer(v[key]);
				}
			}

			return output;
		};
	};

	var $z2lI$export$transform =
		/*#__PURE__*/
		Object.freeze({
			appendUnit: $z2lI$var$appendUnit,
			applyOffset: $z2lI$var$applyOffset,
			blendColor: $z2lI$var$blendColor,
			blendArray: $z2lI$var$blendArray,
			clamp: $z2lI$var$clamp,
			pipe: $z2lI$var$pipe,
			conditional: $z2lI$var$conditional,
			interpolate: $z2lI$var$interpolate,
			generateStaticSpring: $z2lI$var$generateStaticSpring,
			linearSpring: $z2lI$var$linearSpring,
			nonlinearSpring: $z2lI$var$nonlinearSpring,
			wrap: $z2lI$var$wrap,
			smooth: $z2lI$var$smooth$1,
			snap: $z2lI$var$snap,
			steps: $z2lI$var$steps,
			transformMap: $z2lI$var$transformMap
		});

	var $z2lI$var$Chainable =
		/*#__PURE__*/
		(function() {
			function Chainable(props) {
				if (props === void 0) {
					props = {};
				}

				this.props = props;
			}

			Chainable.prototype.applyMiddleware = function(middleware) {
				return this.create(
					$vCxL$export$__assign({}, this.props, {
						middleware: this.props.middleware
							? [middleware].concat(this.props.middleware)
							: [middleware]
					})
				);
			};

			Chainable.prototype.pipe = function() {
				var funcs = [];

				for (var _i = 0; _i < arguments.length; _i++) {
					funcs[_i] = arguments[_i];
				}

				var pipedUpdate =
					funcs.length === 1
						? funcs[0]
						: $z2lI$var$pipe.apply(void 0, funcs);
				return this.applyMiddleware(function(update) {
					return function(v) {
						return update(pipedUpdate(v));
					};
				});
			};

			Chainable.prototype.while = function(predicate) {
				return this.applyMiddleware(function(update, complete) {
					return function(v) {
						return predicate(v) ? update(v) : complete();
					};
				});
			};

			Chainable.prototype.filter = function(predicate) {
				return this.applyMiddleware(function(update) {
					return function(v) {
						return predicate(v) && update(v);
					};
				});
			};

			return Chainable;
		})();

	var $z2lI$var$Observer =
		/*#__PURE__*/
		(function() {
			function Observer(_a, observer) {
				var middleware = _a.middleware,
					onComplete = _a.onComplete;

				var _this = this;

				this.isActive = true;

				this.update = function(v) {
					if (_this.observer.update) _this.updateObserver(v);
				};

				this.complete = function() {
					if (_this.observer.complete && _this.isActive)
						_this.observer.complete();
					if (_this.onComplete) _this.onComplete();
					_this.isActive = false;
				};

				this.error = function(err) {
					if (_this.observer.error && _this.isActive)
						_this.observer.error(err);
					_this.isActive = false;
				};

				this.observer = observer;

				this.updateObserver = function(v) {
					return observer.update(v);
				};

				this.onComplete = onComplete;

				if (observer.update && middleware && middleware.length) {
					middleware.forEach(function(m) {
						return (_this.updateObserver = m(
							_this.updateObserver,
							_this.complete
						));
					});
				}
			}

			return Observer;
		})();

	var $z2lI$var$createObserver = function(observerCandidate, _a, onComplete) {
		var middleware = _a.middleware;

		if (typeof observerCandidate === "function") {
			return new $z2lI$var$Observer(
				{
					middleware: middleware,
					onComplete: onComplete
				},
				{
					update: observerCandidate
				}
			);
		} else {
			return new $z2lI$var$Observer(
				{
					middleware: middleware,
					onComplete: onComplete
				},
				observerCandidate
			);
		}
	};

	var $z2lI$export$Action =
		/*#__PURE__*/
		(function(_super) {
			$vCxL$export$__extends(Action, _super);

			function Action() {
				return (
					(_super !== null && _super.apply(this, arguments)) || this
				);
			}

			Action.prototype.create = function(props) {
				return new Action(props);
			};

			Action.prototype.start = function(observerCandidate) {
				if (observerCandidate === void 0) {
					observerCandidate = {};
				}

				var isComplete = false;
				var subscription = {
					stop: function() {
						return undefined;
					}
				};
				var _a = this.props,
					init = _a.init,
					observerProps = $vCxL$export$__rest(_a, ["init"]);
				var observer = $z2lI$var$createObserver(
					observerCandidate,
					observerProps,
					function() {
						isComplete = true;
						subscription.stop();
					}
				);
				var api = init(observer);
				subscription = api
					? $vCxL$export$__assign({}, subscription, api)
					: subscription;

				if (observerCandidate.registerParent) {
					observerCandidate.registerParent(subscription);
				}

				if (isComplete) subscription.stop();
				return subscription;
			};

			return Action;
		})($z2lI$var$Chainable);

	var $z2lI$export$action = function(init) {
		return new $z2lI$export$Action({
			init: init
		});
	};

	var $z2lI$var$BaseMulticast =
		/*#__PURE__*/
		(function(_super) {
			$vCxL$export$__extends(BaseMulticast, _super);

			function BaseMulticast() {
				var _this =
					(_super !== null && _super.apply(this, arguments)) || this;

				_this.subscribers = [];
				return _this;
			}

			BaseMulticast.prototype.complete = function() {
				this.subscribers.forEach(function(subscriber) {
					return subscriber.complete();
				});
			};

			BaseMulticast.prototype.error = function(err) {
				this.subscribers.forEach(function(subscriber) {
					return subscriber.error(err);
				});
			};

			BaseMulticast.prototype.update = function(v) {
				for (var i = 0; i < this.subscribers.length; i++) {
					this.subscribers[i].update(v);
				}
			};

			BaseMulticast.prototype.subscribe = function(observerCandidate) {
				var _this = this;

				var observer = $z2lI$var$createObserver(
					observerCandidate,
					this.props
				);
				this.subscribers.push(observer);
				var subscription = {
					unsubscribe: function() {
						var index = _this.subscribers.indexOf(observer);

						if (index !== -1) _this.subscribers.splice(index, 1);
					}
				};
				return subscription;
			};

			BaseMulticast.prototype.stop = function() {
				if (this.parent) this.parent.stop();
			};

			BaseMulticast.prototype.registerParent = function(subscription) {
				this.stop();
				this.parent = subscription;
			};

			return BaseMulticast;
		})($z2lI$var$Chainable);

	var $z2lI$var$Multicast =
		/*#__PURE__*/
		(function(_super) {
			$vCxL$export$__extends(Multicast, _super);

			function Multicast() {
				return (
					(_super !== null && _super.apply(this, arguments)) || this
				);
			}

			Multicast.prototype.create = function(props) {
				return new Multicast(props);
			};

			return Multicast;
		})($z2lI$var$BaseMulticast);

	var $z2lI$var$isValueList = function(v) {
		return Array.isArray(v);
	};

	var $z2lI$var$isSingleValue = function(v) {
		var typeOfV = typeof v;
		return typeOfV === "string" || typeOfV === "number";
	};

	var $z2lI$export$ValueReaction =
		/*#__PURE__*/
		(function(_super) {
			$vCxL$export$__extends(ValueReaction, _super);

			function ValueReaction(props) {
				var _this = _super.call(this, props) || this;

				_this.scheduleVelocityCheck = function() {
					return $bSZI$export$default.postRender(_this.velocityCheck);
				};

				_this.velocityCheck = function(_a) {
					var timestamp = _a.timestamp;

					if (timestamp !== _this.lastUpdated) {
						_this.prev = _this.current;
					}
				};

				_this.prev = _this.current = props.value || 0;

				if ($z2lI$var$isSingleValue(_this.current)) {
					_this.updateCurrent = function(v) {
						return (_this.current = v);
					};

					_this.getVelocityOfCurrent = function() {
						return _this.getSingleVelocity(
							_this.current,
							_this.prev
						);
					};
				} else if ($z2lI$var$isValueList(_this.current)) {
					_this.updateCurrent = function(v) {
						return (_this.current = v.slice());
					};

					_this.getVelocityOfCurrent = function() {
						return _this.getListVelocity();
					};
				} else {
					_this.updateCurrent = function(v) {
						_this.current = {};

						for (var key in v) {
							if (v.hasOwnProperty(key)) {
								_this.current[key] = v[key];
							}
						}
					};

					_this.getVelocityOfCurrent = function() {
						return _this.getMapVelocity();
					};
				}

				if (props.initialSubscription)
					_this.subscribe(props.initialSubscription);
				return _this;
			}

			ValueReaction.prototype.create = function(props) {
				return new ValueReaction(props);
			};

			ValueReaction.prototype.get = function() {
				return this.current;
			};

			ValueReaction.prototype.getVelocity = function() {
				return this.getVelocityOfCurrent();
			};

			ValueReaction.prototype.update = function(v) {
				_super.prototype.update.call(this, v);

				this.prev = this.current;
				this.updateCurrent(v);

				var _a = $bSZI$export$getFrameData(),
					delta = _a.delta,
					timestamp = _a.timestamp;

				this.timeDelta = delta;
				this.lastUpdated = timestamp;
				$bSZI$export$default.postRender(this.scheduleVelocityCheck);
			};

			ValueReaction.prototype.subscribe = function(observerCandidate) {
				var sub = _super.prototype.subscribe.call(
					this,
					observerCandidate
				);

				this.update(this.current);
				return sub;
			};

			ValueReaction.prototype.getSingleVelocity = function(
				current,
				prev
			) {
				return typeof current === "number" && typeof prev === "number"
					? $z2lI$var$speedPerSecond(current - prev, this.timeDelta)
					: $z2lI$var$speedPerSecond(
							parseFloat(current) - parseFloat(prev),
							this.timeDelta
					  ) || 0;
			};

			ValueReaction.prototype.getListVelocity = function() {
				var _this = this;

				return this.current.map(function(c, i) {
					return _this.getSingleVelocity(c, _this.prev[i]);
				});
			};

			ValueReaction.prototype.getMapVelocity = function() {
				var velocity = {};

				for (var key in this.current) {
					if (this.current.hasOwnProperty(key)) {
						velocity[key] = this.getSingleVelocity(
							this.current[key],
							this.prev[key]
						);
					}
				}

				return velocity;
			};

			return ValueReaction;
		})($z2lI$var$BaseMulticast);

	var $z2lI$export$value = function(value, initialSubscription) {
		return new $z2lI$export$ValueReaction({
			value: value,
			initialSubscription: initialSubscription
		});
	};

	var $z2lI$var$multi = function(_a) {
		var getCount = _a.getCount,
			getFirst = _a.getFirst,
			getOutput = _a.getOutput,
			mapApi = _a.mapApi,
			setProp = _a.setProp,
			startActions = _a.startActions;
		return function(actions) {
			return $z2lI$export$action(function(_a) {
				var update = _a.update,
					complete = _a.complete,
					error = _a.error;
				var numActions = getCount(actions);
				var output = getOutput();

				var updateOutput = function() {
					return update(output);
				};

				var numCompletedActions = 0;
				var subs = startActions(actions, function(a, name) {
					var hasCompleted = false;
					return a.start({
						complete: function() {
							if (!hasCompleted) {
								hasCompleted = true;
								numCompletedActions++;
								if (numCompletedActions === numActions)
									$bSZI$export$default.update(complete);
							}
						},
						error: error,
						update: function(v) {
							setProp(output, name, v);
							$bSZI$export$default.update(
								updateOutput,
								false,
								true
							);
						}
					});
				});
				return Object.keys(getFirst(subs)).reduce(function(
					api,
					methodName
				) {
					api[methodName] = mapApi(subs, methodName);
					return api;
				},
				{});
			});
		};
	};

	var $z2lI$export$composite =
		/*#__PURE__*/
		$z2lI$var$multi({
			getOutput: function() {
				return {};
			},
			getCount: function(subs) {
				return Object.keys(subs).length;
			},
			getFirst: function(subs) {
				return subs[Object.keys(subs)[0]];
			},
			mapApi: function(subs, methodName) {
				return function() {
					var args = [];

					for (var _i = 0; _i < arguments.length; _i++) {
						args[_i] = arguments[_i];
					}

					return Object.keys(subs).reduce(function(output, propKey) {
						var _a;

						if (subs[propKey][methodName]) {
							args[0] && args[0][propKey] !== undefined
								? (output[propKey] = subs[propKey][methodName](
										args[0][propKey]
								  ))
								: (output[propKey] = (_a = subs[propKey])[
										methodName
								  ].apply(_a, args));
						}

						return output;
					}, {});
				};
			},
			setProp: function(output, name, v) {
				return (output[name] = v);
			},
			startActions: function(actions, starter) {
				return Object.keys(actions).reduce(function(subs, key) {
					subs[key] = starter(actions[key], key);
					return subs;
				}, {});
			}
		});
	var $z2lI$var$parallel =
		/*#__PURE__*/
		$z2lI$var$multi({
			getOutput: function() {
				return [];
			},
			getCount: function(subs) {
				return subs.length;
			},
			getFirst: function(subs) {
				return subs[0];
			},
			mapApi: function(subs, methodName) {
				return function() {
					var args = [];

					for (var _i = 0; _i < arguments.length; _i++) {
						args[_i] = arguments[_i];
					}

					return subs.map(function(sub, i) {
						if (sub[methodName]) {
							return Array.isArray(args[0])
								? sub[methodName](args[0][i])
								: sub[methodName].apply(sub, args);
						}
					});
				};
			},
			setProp: function(output, name, v) {
				return (output[name] = v);
			},
			startActions: function(actions, starter) {
				return actions.map(function(action, i) {
					return starter(action, i);
				});
			}
		});

	var $z2lI$export$parallel = function() {
		var actions = [];

		for (var _i = 0; _i < arguments.length; _i++) {
			actions[_i] = arguments[_i];
		}

		return $z2lI$var$parallel(actions);
	};

	var $z2lI$var$createVectorTests = function(typeTests) {
		var testNames = Object.keys(typeTests);

		var isVectorProp = function(prop, key) {
			return prop !== undefined && !typeTests[key](prop);
		};

		var getVectorKeys = function(props) {
			return testNames.reduce(function(vectorKeys, key) {
				if (isVectorProp(props[key], key)) vectorKeys.push(key);
				return vectorKeys;
			}, []);
		};

		var testVectorProps = function(props) {
			return (
				props &&
				testNames.some(function(key) {
					return isVectorProp(props[key], key);
				})
			);
		};

		return {
			getVectorKeys: getVectorKeys,
			testVectorProps: testVectorProps
		};
	};

	var $z2lI$var$unitTypes = [
		$Hokg$export$px,
		$Hokg$export$percent,
		$Hokg$export$degrees,
		$Hokg$export$vh,
		$Hokg$export$vw
	];

	var $z2lI$var$findUnitType = function(prop) {
		return $z2lI$var$unitTypes.find(function(type) {
			return type.test(prop);
		});
	};

	var $z2lI$var$isUnitProp = function(prop) {
		return Boolean($z2lI$var$findUnitType(prop));
	};

	var $z2lI$var$createAction = function(action, props) {
		return action(props);
	};

	var $z2lI$var$reduceArrayValue = function(i) {
		return function(props, key) {
			props[key] = props[key][i];
			return props;
		};
	};

	var $z2lI$var$createArrayAction = function(action, props, vectorKeys) {
		var firstVectorKey = vectorKeys[0];
		var actionList = props[firstVectorKey].map(function(v, i) {
			var childActionProps = vectorKeys.reduce(
				$z2lI$var$reduceArrayValue(i),
				$vCxL$export$__assign({}, props)
			);
			return $z2lI$var$getActionCreator(v)(action, childActionProps);
		});
		return $z2lI$export$parallel.apply(void 0, actionList);
	};

	var $z2lI$var$reduceObjectValue = function(key) {
		return function(props, propKey) {
			props[propKey] = props[propKey][key];
			return props;
		};
	};

	var $z2lI$var$createObjectAction = function(action, props, vectorKeys) {
		var firstVectorKey = vectorKeys[0];
		var actionMap = Object.keys(props[firstVectorKey]).reduce(function(
			map,
			key
		) {
			var childActionProps = vectorKeys.reduce(
				$z2lI$var$reduceObjectValue(key),
				$vCxL$export$__assign({}, props)
			);
			map[key] = $z2lI$var$getActionCreator(props[firstVectorKey][key])(
				action,
				childActionProps
			);
			return map;
		},
		{});
		return $z2lI$export$composite(actionMap);
	};

	var $z2lI$var$createUnitAction = function(action, _a) {
		var from = _a.from,
			to = _a.to,
			props = $vCxL$export$__rest(_a, ["from", "to"]);
		var unitType =
			$z2lI$var$findUnitType(from) || $z2lI$var$findUnitType(to);
		var transform = unitType.transform,
			parse = unitType.parse;
		return action(
			$vCxL$export$__assign({}, props, {
				from: typeof from === "string" ? parse(from) : from,
				to: typeof to === "string" ? parse(to) : to
			})
		).pipe(transform);
	};

	var $z2lI$var$createColorAction = function(action, _a) {
		var from = _a.from,
			to = _a.to,
			props = $vCxL$export$__rest(_a, ["from", "to"]);
		return action(
			$vCxL$export$__assign({}, props, {
				from: 0,
				to: 1
			})
		).pipe(
			$z2lI$var$blendColor(from, to),
			$Hokg$export$color.transform
		);
	};

	var $z2lI$var$createComplexAction = function(action, _a) {
		var from = _a.from,
			to = _a.to,
			props = $vCxL$export$__rest(_a, ["from", "to"]);
		var valueTemplate = $Hokg$export$complex.createTransformer(from);
		$KFGT$export$invariant(
			valueTemplate(from) ===
				$Hokg$export$complex.createTransformer(to)(from),
			"Values '" +
				from +
				"' and '" +
				to +
				"' are of different format, or a value might have changed value type."
		);
		return action(
			$vCxL$export$__assign({}, props, {
				from: 0,
				to: 1
			})
		).pipe(
			$z2lI$var$blendArray(
				$Hokg$export$complex.parse(from),
				$Hokg$export$complex.parse(to)
			),
			valueTemplate
		);
	};

	var $z2lI$var$createVectorAction = function(action, typeTests) {
		var _a = $z2lI$var$createVectorTests(typeTests),
			testVectorProps = _a.testVectorProps,
			getVectorKeys = _a.getVectorKeys;

		var vectorAction = function(props) {
			var isVector = testVectorProps(props);
			if (!isVector) return action(props);
			var vectorKeys = getVectorKeys(props);
			var testKey = vectorKeys[0];
			var testProp = props[testKey];
			return $z2lI$var$getActionCreator(testProp)(
				action,
				props,
				vectorKeys
			);
		};

		return vectorAction;
	};

	var $z2lI$var$getActionCreator = function(prop) {
		var actionCreator = $z2lI$var$createAction;

		if (typeof prop === "number") {
			actionCreator = $z2lI$var$createAction;
		} else if (Array.isArray(prop)) {
			actionCreator = $z2lI$var$createArrayAction;
		} else if ($z2lI$var$isUnitProp(prop)) {
			actionCreator = $z2lI$var$createUnitAction;
		} else if ($Hokg$export$color.test(prop)) {
			actionCreator = $z2lI$var$createColorAction;
		} else if ($Hokg$export$complex.test(prop)) {
			actionCreator = $z2lI$var$createComplexAction;
		} else if (typeof prop === "object") {
			actionCreator = $z2lI$var$createObjectAction;
		}

		return actionCreator;
	};

	var $z2lI$var$decay = function(props) {
		if (props === void 0) {
			props = {};
		}

		return $z2lI$export$action(function(_a) {
			var complete = _a.complete,
				update = _a.update;
			var _b = props.velocity,
				velocity = _b === void 0 ? 0 : _b,
				_c = props.from,
				from = _c === void 0 ? 0 : _c,
				_d = props.power,
				power = _d === void 0 ? 0.8 : _d,
				_e = props.timeConstant,
				timeConstant = _e === void 0 ? 350 : _e,
				_f = props.restDelta,
				restDelta = _f === void 0 ? 0.5 : _f,
				modifyTarget = props.modifyTarget;
			var elapsed = 0;
			var amplitude = power * velocity;
			var idealTarget = Math.round(from + amplitude);
			var target =
				typeof modifyTarget === "undefined"
					? idealTarget
					: modifyTarget(idealTarget);
			var process = $bSZI$export$default.update(function(_a) {
				var frameDelta = _a.delta;
				elapsed += frameDelta;
				var delta = -amplitude * Math.exp(-elapsed / timeConstant);
				var isMoving = delta > restDelta || delta < -restDelta;
				var current = isMoving ? target + delta : target;
				update(current);

				if (!isMoving) {
					$bSZI$export$cancelSync.update(process);
					complete();
				}
			}, true);
			return {
				stop: function() {
					return $bSZI$export$cancelSync.update(process);
				}
			};
		});
	};

	var $z2lI$export$decay =
		/*#__PURE__*/
		$z2lI$var$createVectorAction($z2lI$var$decay, {
			from: $Hokg$export$number.test,
			modifyTarget: function(func) {
				return typeof func === "function";
			},
			velocity: $Hokg$export$number.test
		});

	var $z2lI$var$scrubber = function(_a) {
		var _b = _a.from,
			from = _b === void 0 ? 0 : _b,
			_c = _a.to,
			to = _c === void 0 ? 1 : _c,
			_d = _a.ease,
			ease = _d === void 0 ? $xQjT$export$linear : _d;
		return $z2lI$export$action(function(_a) {
			var update = _a.update;
			return {
				seek: function(progress) {
					return update(progress);
				}
			};
		}).pipe(
			ease,
			function(v) {
				return $z2lI$var$getValueFromProgress(from, to, v);
			}
		);
	};

	var $z2lI$var$vectorScrubber =
		/*#__PURE__*/
		$z2lI$var$createVectorAction($z2lI$var$scrubber, {
			ease: function(func) {
				return typeof func === "function";
			},
			from: $Hokg$export$number.test,
			to: $Hokg$export$number.test
		});
	var $z2lI$var$clampProgress =
		/*#__PURE__*/
		$z2lI$var$clamp(0, 1);

	var $z2lI$export$tween = function(props) {
		if (props === void 0) {
			props = {};
		}

		return $z2lI$export$action(function(_a) {
			var update = _a.update,
				complete = _a.complete;
			var _b = props.duration,
				duration = _b === void 0 ? 300 : _b,
				_c = props.ease,
				ease = _c === void 0 ? $xQjT$export$easeOut : _c,
				_d = props.flip,
				flip = _d === void 0 ? 0 : _d,
				_e = props.loop,
				loop = _e === void 0 ? 0 : _e,
				_f = props.yoyo,
				yoyo = _f === void 0 ? 0 : _f;
			var _g = props.from,
				from = _g === void 0 ? 0 : _g,
				_h = props.to,
				to = _h === void 0 ? 1 : _h,
				_j = props.elapsed,
				elapsed = _j === void 0 ? 0 : _j,
				_k = props.playDirection,
				playDirection = _k === void 0 ? 1 : _k,
				_l = props.flipCount,
				flipCount = _l === void 0 ? 0 : _l,
				_m = props.yoyoCount,
				yoyoCount = _m === void 0 ? 0 : _m,
				_o = props.loopCount,
				loopCount = _o === void 0 ? 0 : _o;
			var playhead = $z2lI$var$vectorScrubber({
				from: from,
				to: to,
				ease: ease
			}).start(update);
			var progress = 0;
			var process;
			var isActive = false;

			var reverseTween = function() {
				return (playDirection *= -1);
			};

			var isTweenComplete = function() {
				var _a;

				var isComplete =
					playDirection === 1
						? isActive && elapsed >= duration
						: isActive && elapsed <= 0;
				if (!isComplete) return false;
				if (isComplete && !loop && !flip && !yoyo) return true;
				var isStepTaken = false;

				if (loop && loopCount < loop) {
					elapsed = 0;
					loopCount++;
					isStepTaken = true;
				} else if (flip && flipCount < flip) {
					elapsed = duration - elapsed;
					(_a = [to, from]), (from = _a[0]), (to = _a[1]);
					playhead = $z2lI$var$vectorScrubber({
						from: from,
						to: to,
						ease: ease
					}).start(update);
					flipCount++;
					isStepTaken = true;
				} else if (yoyo && yoyoCount < yoyo) {
					reverseTween();
					yoyoCount++;
					isStepTaken = true;
				}

				return !isStepTaken;
			};

			var updateTween = function() {
				progress = $z2lI$var$clampProgress(
					$z2lI$var$getProgressFromValue(0, duration, elapsed)
				);
				playhead.seek(progress);
			};

			var startTimer = function() {
				isActive = true;
				process = $bSZI$export$default.update(function(_a) {
					var delta = _a.delta;
					elapsed += delta * playDirection;
					updateTween();

					if (isTweenComplete() && complete) {
						$bSZI$export$cancelSync.update(process);
						$bSZI$export$default.update(complete, false, true);
					}
				}, true);
			};

			var stopTimer = function() {
				isActive = false;
				if (process) $bSZI$export$cancelSync.update(process);
			};

			startTimer();
			return {
				isActive: function() {
					return isActive;
				},
				getElapsed: function() {
					return $z2lI$var$clamp(0, duration)(elapsed);
				},
				getProgress: function() {
					return progress;
				},
				stop: function() {
					stopTimer();
				},
				pause: function() {
					stopTimer();
					return this;
				},
				resume: function() {
					if (!isActive) startTimer();
					return this;
				},
				seek: function(newProgress) {
					elapsed = $z2lI$var$getValueFromProgress(
						0,
						duration,
						newProgress
					);
					$bSZI$export$default.update(updateTween, false, true);
					return this;
				},
				reverse: function() {
					reverseTween();
					return this;
				}
			};
		});
	};

	var $z2lI$var$clampProgress$1 =
		/*#__PURE__*/
		$z2lI$var$clamp(0, 1);

	var $z2lI$var$defaultEasings = function(values, easing$$1) {
		return values
			.map(function() {
				return easing$$1 || $xQjT$export$easeOut;
			})
			.splice(0, values.length - 1);
	};

	var $z2lI$var$defaultTimings = function(values) {
		var numValues = values.length;
		return values.map(function(value, i) {
			return i !== 0 ? i / (numValues - 1) : 0;
		});
	};

	var $z2lI$var$interpolateScrubbers = function(input, scrubbers, update) {
		var rangeLength = input.length;
		var finalInputIndex = rangeLength - 1;
		var finalScrubberIndex = finalInputIndex - 1;
		var subs = scrubbers.map(function(scrub) {
			return scrub.start(update);
		});
		return function(v) {
			if (v <= input[0]) {
				subs[0].seek(0);
			}

			if (v >= input[finalInputIndex]) {
				subs[finalScrubberIndex].seek(1);
			}

			var i = 1;

			for (; i < rangeLength; i++) {
				if (input[i] > v || i === finalInputIndex) break;
			}

			var progressInRange = $z2lI$var$getProgressFromValue(
				input[i - 1],
				input[i],
				v
			);
			subs[i - 1].seek($z2lI$var$clampProgress$1(progressInRange));
		};
	};

	var $z2lI$export$keyframes = function(_a) {
		var easings = _a.easings,
			_b = _a.ease,
			ease = _b === void 0 ? $xQjT$export$linear : _b,
			times = _a.times,
			values = _a.values,
			tweenProps = $vCxL$export$__rest(_a, [
				"easings",
				"ease",
				"times",
				"values"
			]);
		easings = Array.isArray(easings)
			? easings
			: $z2lI$var$defaultEasings(values, easings);
		times = times || $z2lI$var$defaultTimings(values);
		var scrubbers = easings.map(function(easing$$1, i) {
			return $z2lI$var$vectorScrubber({
				from: values[i],
				to: values[i + 1],
				ease: easing$$1
			});
		});
		return $z2lI$export$tween(
			$vCxL$export$__assign({}, tweenProps, {
				ease: ease
			})
		).applyMiddleware(function(update) {
			return $z2lI$var$interpolateScrubbers(times, scrubbers, update);
		});
	};

	var $z2lI$var$physics = function(props) {
		if (props === void 0) {
			props = {};
		}

		return $z2lI$export$action(function(_a) {
			var complete = _a.complete,
				update = _a.update;
			var _b = props.acceleration,
				acceleration = _b === void 0 ? 0 : _b,
				_c = props.friction,
				friction = _c === void 0 ? 0 : _c,
				_d = props.velocity,
				velocity = _d === void 0 ? 0 : _d,
				springStrength = props.springStrength,
				to = props.to;
			var _e = props.restSpeed,
				restSpeed = _e === void 0 ? 0.001 : _e,
				_f = props.from,
				from = _f === void 0 ? 0 : _f;
			var current = from;
			var process = $bSZI$export$default.update(function(_a) {
				var delta = _a.delta;
				var elapsed = Math.max(delta, 16);
				if (acceleration)
					velocity += $z2lI$var$speedPerFrame(acceleration, elapsed);
				if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);

				if (springStrength !== undefined && to !== undefined) {
					var distanceToTarget = to - current;
					velocity +=
						distanceToTarget *
						$z2lI$var$speedPerFrame(springStrength, elapsed);
				}

				current += $z2lI$var$speedPerFrame(velocity, elapsed);
				update(current);
				var isComplete =
					restSpeed !== false &&
					(!velocity || Math.abs(velocity) <= restSpeed);

				if (isComplete) {
					$bSZI$export$cancelSync.update(process);
					complete();
				}
			}, true);
			return {
				set: function(v) {
					current = v;
					return this;
				},
				setAcceleration: function(v) {
					acceleration = v;
					return this;
				},
				setFriction: function(v) {
					friction = v;
					return this;
				},
				setSpringStrength: function(v) {
					springStrength = v;
					return this;
				},
				setSpringTarget: function(v) {
					to = v;
					return this;
				},
				setVelocity: function(v) {
					velocity = v;
					return this;
				},
				stop: function() {
					return $bSZI$export$cancelSync.update(process);
				}
			};
		});
	};

	var $z2lI$export$physics =
		/*#__PURE__*/
		$z2lI$var$createVectorAction($z2lI$var$physics, {
			acceleration: $Hokg$export$number.test,
			friction: $Hokg$export$number.test,
			velocity: $Hokg$export$number.test,
			from: $Hokg$export$number.test,
			to: $Hokg$export$number.test,
			springStrength: $Hokg$export$number.test
		});

	var $z2lI$var$spring = function(props) {
		if (props === void 0) {
			props = {};
		}

		return $z2lI$export$action(function(_a) {
			var update = _a.update,
				complete = _a.complete;
			var _b = props.velocity,
				velocity = _b === void 0 ? 0.0 : _b;
			var _c = props.from,
				from = _c === void 0 ? 0.0 : _c,
				_d = props.to,
				to = _d === void 0 ? 0.0 : _d,
				_e = props.stiffness,
				stiffness = _e === void 0 ? 100 : _e,
				_f = props.damping,
				damping = _f === void 0 ? 10 : _f,
				_g = props.mass,
				mass = _g === void 0 ? 1.0 : _g,
				_h = props.restSpeed,
				restSpeed = _h === void 0 ? 0.01 : _h,
				_j = props.restDelta,
				restDelta = _j === void 0 ? 0.01 : _j;
			var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
			var t = 0;
			var delta = to - from;
			var position = from;
			var prevPosition = position;
			var process = $bSZI$export$default.update(function(_a) {
				var timeDelta = _a.delta;
				t += timeDelta;
				var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
				var angularFreq = Math.sqrt(stiffness / mass) / 1000;
				prevPosition = position;

				if (dampingRatio < 1) {
					var envelope = Math.exp(-dampingRatio * angularFreq * t);
					var expoDecay =
						angularFreq *
						Math.sqrt(1.0 - dampingRatio * dampingRatio);
					position =
						to -
						envelope *
							(((initialVelocity +
								dampingRatio * angularFreq * delta) /
								expoDecay) *
								Math.sin(expoDecay * t) +
								delta * Math.cos(expoDecay * t));
				} else {
					var envelope = Math.exp(-angularFreq * t);
					position =
						to -
						envelope *
							(delta +
								(initialVelocity + angularFreq * delta) * t);
				}

				velocity = $z2lI$var$speedPerSecond(
					position - prevPosition,
					timeDelta
				);
				var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
				var isBelowDisplacementThreshold =
					Math.abs(to - position) <= restDelta;

				if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
					position = to;
					update(position);
					$bSZI$export$cancelSync.update(process);
					complete();
				} else {
					update(position);
				}
			}, true);
			return {
				stop: function() {
					return $bSZI$export$cancelSync.update(process);
				}
			};
		});
	};

	var $z2lI$export$spring =
		/*#__PURE__*/
		$z2lI$var$createVectorAction($z2lI$var$spring, {
			from: $Hokg$export$number.test,
			to: $Hokg$export$number.test,
			stiffness: $Hokg$export$number.test,
			damping: $Hokg$export$number.test,
			mass: $Hokg$export$number.test,
			velocity: $Hokg$export$number.test
		});

	var $z2lI$export$listen = function(element, events, options) {
		return $z2lI$export$action(function(_a) {
			var update = _a.update;
			var eventNames = events.split(" ").map(function(eventName) {
				element.addEventListener(eventName, update, options);
				return eventName;
			});
			return {
				stop: function() {
					return eventNames.forEach(function(eventName) {
						return element.removeEventListener(
							eventName,
							update,
							options
						);
					});
				}
			};
		});
	};

	var $z2lI$var$defaultPointerPos = function() {
		return {
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			x: 0,
			y: 0
		};
	};

	var $z2lI$var$eventToPoint = function(e, point) {
		if (point === void 0) {
			point = $z2lI$var$defaultPointerPos();
		}

		point.clientX = point.x = e.clientX;
		point.clientY = point.y = e.clientY;
		point.pageX = e.pageX;
		point.pageY = e.pageY;
		return point;
	};

	var $z2lI$var$points = [
		/*#__PURE__*/
		$z2lI$var$defaultPointerPos()
	];
	var $z2lI$var$isTouchDevice = false;

	if (typeof document !== "undefined") {
		var $z2lI$var$updatePointsLocation = function(_a) {
			var touches = _a.touches;
			$z2lI$var$isTouchDevice = true;
			var numTouches = touches.length;
			$z2lI$var$points.length = 0;

			for (var i = 0; i < numTouches; i++) {
				var thisTouch = touches[i];
				$z2lI$var$points.push($z2lI$var$eventToPoint(thisTouch));
			}
		};

		$z2lI$export$listen(document, "touchstart touchmove", {
			passive: true,
			capture: true
		}).start($z2lI$var$updatePointsLocation);
	}

	var $z2lI$export$multitouch = function(_a) {
		var _b = _a === void 0 ? {} : _a,
			_c = _b.preventDefault,
			preventDefault = _c === void 0 ? true : _c,
			_d = _b.scale,
			scale = _d === void 0 ? 1.0 : _d,
			_e = _b.rotate,
			rotate = _e === void 0 ? 0.0 : _e;

		return $z2lI$export$action(function(_a) {
			var update = _a.update;
			var output = {
				touches: $z2lI$var$points,
				scale: scale,
				rotate: rotate
			};
			var initialDistance = 0.0;
			var initialRotation = 0.0;
			var isGesture = $z2lI$var$points.length > 1;

			if (isGesture) {
				var firstTouch = $z2lI$var$points[0],
					secondTouch = $z2lI$var$points[1];
				initialDistance = $z2lI$var$distance(firstTouch, secondTouch);
				initialRotation = $z2lI$var$angle(firstTouch, secondTouch);
			}

			var updatePoint = function() {
				if (isGesture) {
					var firstTouch = $z2lI$var$points[0],
						secondTouch = $z2lI$var$points[1];
					var newDistance = $z2lI$var$distance(
						firstTouch,
						secondTouch
					);
					var newRotation = $z2lI$var$angle(firstTouch, secondTouch);
					output.scale = scale * (newDistance / initialDistance);
					output.rotate = rotate + (newRotation - initialRotation);
				}

				update(output);
			};

			var onMove = function(e) {
				if (preventDefault || e.touches.length > 1) e.preventDefault();
				$bSZI$export$default.update(updatePoint);
			};

			var updateOnMove = $z2lI$export$listen(document, "touchmove", {
				passive: !preventDefault
			}).start(onMove);
			if ($z2lI$var$isTouchDevice)
				$bSZI$export$default.update(updatePoint);
			return {
				stop: function() {
					$bSZI$export$cancelSync.update(updatePoint);
					updateOnMove.stop();
				}
			};
		});
	};

	var $z2lI$var$getIsTouchDevice = function() {
		return $z2lI$var$isTouchDevice;
	};

	var $z2lI$var$point =
		/*#__PURE__*/
		$z2lI$var$defaultPointerPos();
	var $z2lI$var$isMouseDevice = false;

	if (typeof document !== "undefined") {
		var $z2lI$var$updatePointLocation = function(e) {
			$z2lI$var$isMouseDevice = true;
			$z2lI$var$eventToPoint(e, $z2lI$var$point);
		};

		$z2lI$export$listen(document, "mousedown mousemove", true).start(
			$z2lI$var$updatePointLocation
		);
	}

	var $z2lI$export$mouse = function(_a) {
		var _b = (_a === void 0 ? {} : _a).preventDefault,
			preventDefault = _b === void 0 ? true : _b;
		return $z2lI$export$action(function(_a) {
			var update = _a.update;

			var updatePoint = function() {
				return update($z2lI$var$point);
			};

			var onMove = function(e) {
				if (preventDefault) e.preventDefault();
				$bSZI$export$default.update(updatePoint);
			};

			var updateOnMove = $z2lI$export$listen(document, "mousemove").start(
				onMove
			);
			if ($z2lI$var$isMouseDevice)
				$bSZI$export$default.update(updatePoint);
			return {
				stop: function() {
					$bSZI$export$cancelSync.update(updatePoint);
					updateOnMove.stop();
				}
			};
		});
	};

	var $z2lI$var$getFirstTouch = function(_a) {
		var firstTouch = _a[0];
		return firstTouch;
	};

	var $z2lI$var$pointer = function(props) {
		if (props === void 0) {
			props = {};
		}

		return $z2lI$var$getIsTouchDevice()
			? $z2lI$export$multitouch(props).pipe(
					function(_a) {
						var touches = _a.touches;
						return touches;
					},
					$z2lI$var$getFirstTouch
			  )
			: $z2lI$export$mouse(props);
	};

	var $z2lI$export$pointer = function(_a) {
		if (_a === void 0) {
			_a = {};
		}

		var x = _a.x,
			y = _a.y,
			props = $vCxL$export$__rest(_a, ["x", "y"]);

		if (x !== undefined || y !== undefined) {
			var applyXOffset_1 = $z2lI$var$applyOffset(x || 0);
			var applyYOffset_1 = $z2lI$var$applyOffset(y || 0);
			var delta_1 = {
				x: 0,
				y: 0
			};
			return $z2lI$var$pointer(props).pipe(function(point) {
				delta_1.x = applyXOffset_1(point.x);
				delta_1.y = applyYOffset_1(point.y);
				return delta_1;
			});
		} else {
			return $z2lI$var$pointer(props);
		}
	};

	var $z2lI$export$chain = function() {
		var actions = [];

		for (var _i = 0; _i < arguments.length; _i++) {
			actions[_i] = arguments[_i];
		}

		return $z2lI$export$action(function(_a) {
			var update = _a.update,
				complete = _a.complete;
			var i = 0;
			var current;

			var playCurrent = function() {
				current = actions[i].start({
					complete: function() {
						i++;
						i >= actions.length ? complete() : playCurrent();
					},
					update: update
				});
			};

			playCurrent();
			return {
				stop: function() {
					return current && current.stop();
				}
			};
		});
	};

	var $z2lI$export$delay = function(timeToDelay) {
		return $z2lI$export$action(function(_a) {
			var complete = _a.complete;
			var timeout = setTimeout(complete, timeToDelay);
			return {
				stop: function() {
					return clearTimeout(timeout);
				}
			};
		});
	};

	var $QhN$var$getPoseValues = function(_a) {
		var transition = _a.transition,
			delay = _a.delay,
			delayChildren = _a.delayChildren,
			staggerChildren = _a.staggerChildren,
			staggerDirection = _a.staggerDirection,
			afterChildren = _a.afterChildren,
			beforeChildren = _a.beforeChildren,
			preTransition = _a.preTransition,
			applyAtStart = _a.applyAtStart,
			applyAtEnd = _a.applyAtEnd,
			props = $vCxL$export$__rest(_a, [
				"transition",
				"delay",
				"delayChildren",
				"staggerChildren",
				"staggerDirection",
				"afterChildren",
				"beforeChildren",
				"preTransition",
				"applyAtStart",
				"applyAtEnd"
			]);
		return props;
	};

	var $QhN$var$selectPoses = function(_a) {
		var label = _a.label,
			props = _a.props,
			values = _a.values,
			parentValues = _a.parentValues,
			ancestorValues = _a.ancestorValues,
			onChange = _a.onChange,
			passive = _a.passive,
			initialPose = _a.initialPose,
			poses = $vCxL$export$__rest(_a, [
				"label",
				"props",
				"values",
				"parentValues",
				"ancestorValues",
				"onChange",
				"passive",
				"initialPose"
			]);
		return poses;
	};

	var $QhN$var$selectAllValues = function(values, selectValue) {
		var allValues = {};
		values.forEach(function(value, key) {
			return (allValues[key] = selectValue(value));
		});
		return allValues;
	};

	var $QhN$var$resolveProp = function(target, props) {
		return typeof target === "function" ? target(props) : target;
	};

	var $QhN$var$poseDefault = function(
		pose,
		prop,
		defaultValue,
		resolveProps
	) {
		return pose && pose[prop] !== undefined
			? $QhN$var$resolveProp(pose[prop], resolveProps)
			: defaultValue;
	};

	var $QhN$var$startChildAnimations = function(children, next, pose, props) {
		var animations = [];
		var delay = $QhN$var$poseDefault(pose, "delayChildren", 0, props);
		var stagger = $QhN$var$poseDefault(pose, "staggerChildren", 0, props);
		var staggerDirection = $QhN$var$poseDefault(
			pose,
			"staggerDirection",
			1,
			props
		);
		var maxStaggerDuration = (children.size - 1) * stagger;
		var generateStaggerDuration =
			staggerDirection === 1
				? function(i) {
						return i * stagger;
				  }
				: function(i) {
						return maxStaggerDuration - i * stagger;
				  };
		Array.from(children).forEach(function(child, i) {
			animations.push(
				child.set(
					next,
					$vCxL$export$__assign({}, props, {
						delay: delay + generateStaggerDuration(i)
					})
				)
			);
		});
		return animations;
	};

	var $QhN$var$resolveTransition = function(
		transition,
		key,
		value,
		props,
		convertTransitionDefinition,
		getInstantTransition
	) {
		var resolvedTransition;

		if (typeof transition === "function") {
			resolvedTransition = transition(props);
		} else if (transition[key] || transition.default) {
			var keyTransition = transition[key] || transition.default;

			if (typeof keyTransition === "function") {
				resolvedTransition = keyTransition(props);
			} else {
				resolvedTransition = keyTransition;
			}
		} else {
			resolvedTransition = transition;
		}

		return resolvedTransition === false
			? getInstantTransition(value, props)
			: convertTransitionDefinition(value, resolvedTransition, props);
	};

	var $QhN$var$findInsertionIndex = function(
		poseList,
		priorityList,
		priorityIndex
	) {
		var insertionIndex = 0;

		for (var i = priorityIndex - 1; i >= 0; i--) {
			var nextHighestPriorityIndex = poseList.indexOf(priorityList[i]);

			if (nextHighestPriorityIndex !== -1) {
				insertionIndex = nextHighestPriorityIndex + 1;
				break;
			}
		}

		return insertionIndex;
	};

	var $QhN$var$applyValues = function(
		toApply,
		values,
		props,
		setValue,
		setValueNative
	) {
		$KFGT$export$invariant(
			typeof toApply === "object",
			"applyAtStart and applyAtEnd must be of type object"
		);
		return Object.keys(toApply).forEach(function(key) {
			var valueToSet = $QhN$var$resolveProp(toApply[key], props);
			values.has(key)
				? setValue(values.get(key), valueToSet)
				: setValueNative(key, valueToSet, props);
		});
	};

	var $QhN$var$createPoseSetter = function(setterProps) {
		var state = setterProps.state,
			poses = setterProps.poses,
			startAction = setterProps.startAction,
			stopAction = setterProps.stopAction,
			getInstantTransition = setterProps.getInstantTransition,
			addActionDelay = setterProps.addActionDelay,
			getTransitionProps = setterProps.getTransitionProps,
			resolveTarget = setterProps.resolveTarget,
			transformPose = setterProps.transformPose,
			posePriority = setterProps.posePriority,
			convertTransitionDefinition =
				setterProps.convertTransitionDefinition,
			setValue = setterProps.setValue,
			setValueNative = setterProps.setValueNative;
		return function(next, nextProps, propagate) {
			if (nextProps === void 0) {
				nextProps = {};
			}

			if (propagate === void 0) {
				propagate = true;
			}

			var children = state.children,
				values = state.values,
				props = state.props,
				activeActions = state.activeActions,
				activePoses = state.activePoses;
			var _a = nextProps.delay,
				delay = _a === void 0 ? 0 : _a;
			var hasChildren = children.size;
			var baseTransitionProps = $vCxL$export$__assign(
				{},
				props,
				nextProps
			);
			var nextPose = poses[next];

			var getChildAnimations = function() {
				return hasChildren && propagate
					? $QhN$var$startChildAnimations(
							children,
							next,
							nextPose,
							baseTransitionProps
					  )
					: [];
			};

			var getParentAnimations = function() {
				if (!nextPose) return [];
				if (transformPose)
					nextPose = transformPose(nextPose, next, state);
				var preTransition = nextPose.preTransition,
					getTransition = nextPose.transition,
					applyAtStart = nextPose.applyAtStart,
					applyAtEnd = nextPose.applyAtEnd;
				if (preTransition) preTransition(baseTransitionProps);

				if (applyAtStart) {
					$QhN$var$applyValues(
						applyAtStart,
						values,
						baseTransitionProps,
						setValue,
						setValueNative
					);
				}

				var animations = Object.keys(
					$QhN$var$getPoseValues(nextPose)
				).map(function(key) {
					var valuePoses = activePoses.has(key)
						? activePoses.get(key)
						: (activePoses.set(key, []), activePoses.get(key));
					var existingIndex = valuePoses.indexOf(next);
					if (existingIndex !== -1)
						valuePoses.splice(existingIndex, 1);
					var priority = posePriority
						? posePriority.indexOf(next)
						: 0;
					var insertionIndex =
						priority <= 0
							? 0
							: $QhN$var$findInsertionIndex(
									valuePoses,
									posePriority,
									priority
							  );
					valuePoses.splice(insertionIndex, 0, next);
					return insertionIndex === 0
						? new Promise(function(complete) {
								var value = values.get(key);
								var transitionProps = $vCxL$export$__assign(
									{},
									baseTransitionProps,
									{
										key: key,
										value: value
									}
								);
								var target = resolveTarget(
									value,
									$QhN$var$resolveProp(
										nextPose[key],
										transitionProps
									)
								);
								if (activeActions.has(key))
									stopAction(activeActions.get(key));
								var resolveTransitionProps = $vCxL$export$__assign(
									{
										to: target
									},
									transitionProps,
									getTransitionProps(
										value,
										target,
										transitionProps
									)
								);
								var transition = $QhN$var$resolveTransition(
									getTransition,
									key,
									value,
									resolveTransitionProps,
									convertTransitionDefinition,
									getInstantTransition
								);
								var poseDelay = $QhN$var$resolveProp(
									nextPose.delay,
									transitionProps
								);

								if (delay || poseDelay) {
									transition = addActionDelay(
										delay || poseDelay,
										transition
									);
								}

								activeActions.set(
									key,
									startAction(value, transition, complete)
								);
						  })
						: Promise.resolve();
				});
				return applyAtEnd
					? [
							Promise.all(animations).then(function() {
								$QhN$var$applyValues(
									applyAtEnd,
									values,
									baseTransitionProps,
									setValue,
									setValueNative
								);
							})
					  ]
					: animations;
			};

			if (nextPose && hasChildren) {
				if (
					$QhN$var$resolveProp(
						nextPose.beforeChildren,
						baseTransitionProps
					)
				) {
					return Promise.all(getParentAnimations()).then(function() {
						return Promise.all(getChildAnimations());
					});
				} else if (
					$QhN$var$resolveProp(
						nextPose.afterChildren,
						baseTransitionProps
					)
				) {
					return Promise.all(getChildAnimations()).then(function() {
						return Promise.all(getParentAnimations());
					});
				}
			}

			return Promise.all(
				getParentAnimations().concat(getChildAnimations())
			);
		};
	};

	var $QhN$var$DEFAULT_INITIAL_POSE = "init";

	var $QhN$var$isScale = function(key) {
		return key.includes("scale");
	};

	var $QhN$var$defaultReadValueFromSource = function(key) {
		return $QhN$var$isScale(key) ? 1 : 0;
	};

	var $QhN$var$getInitialValue = function(
		poses,
		key,
		initialPose,
		props,
		readValueFromSource,
		activePoses
	) {
		if (readValueFromSource === void 0) {
			readValueFromSource = $QhN$var$defaultReadValueFromSource;
		}

		var posesToSearch = Array.isArray(initialPose)
			? initialPose
			: [initialPose];
		posesToSearch.push($QhN$var$DEFAULT_INITIAL_POSE);
		var pose = posesToSearch.filter(Boolean).find(function(name) {
			return poses[name] && poses[name][key] !== undefined;
		});
		activePoses.set(key, [pose || $QhN$var$DEFAULT_INITIAL_POSE]);
		return pose
			? $QhN$var$resolveProp(poses[pose][key], props)
			: readValueFromSource(key, props);
	};

	var $QhN$var$createValues = function(values, _a) {
		var userSetValues = _a.userSetValues,
			createValue = _a.createValue,
			convertValue = _a.convertValue,
			readValueFromSource = _a.readValueFromSource,
			initialPose = _a.initialPose,
			poses = _a.poses,
			activePoses = _a.activePoses,
			props = _a.props;
		return function(key) {
			if (values.has(key)) return;
			var value;

			if (userSetValues && userSetValues[key] !== undefined) {
				value = convertValue(userSetValues[key], key, props);
			} else {
				var initValue = $QhN$var$getInitialValue(
					poses,
					key,
					initialPose,
					props,
					readValueFromSource,
					activePoses
				);
				value = createValue(initValue, key, props);
			}

			values.set(key, value);
		};
	};

	var $QhN$var$scrapeValuesFromPose = function(values, props) {
		return function(key) {
			var pose = props.poses[key];
			Object.keys($QhN$var$getPoseValues(pose)).forEach(
				$QhN$var$createValues(values, props)
			);
		};
	};

	var $QhN$var$getAncestorValue = function(key, fromParent, ancestors) {
		if (fromParent === true) {
			return ancestors[0] && ancestors[0].values.get(key);
		} else {
			var foundAncestor = ancestors.find(function(_a) {
				var label = _a.label;
				return label === fromParent;
			});
			return foundAncestor && foundAncestor.values.get(key);
		}
	};

	var $QhN$var$bindPassiveValues = function(values, _a) {
		var passive = _a.passive,
			ancestorValues = _a.ancestorValues,
			createValue = _a.createValue,
			readValue = _a.readValue,
			props = _a.props;
		return function(key) {
			var _a = passive[key],
				valueKey = _a[0],
				passiveProps = _a[1],
				fromParent = _a[2];
			var valueToBind =
				fromParent && ancestorValues.length
					? $QhN$var$getAncestorValue(
							valueKey,
							fromParent,
							ancestorValues
					  )
					: values.has(valueKey)
					? values.get(valueKey)
					: false;
			if (!valueToBind) return;
			var newValue = createValue(readValue(valueToBind), key, props, {
				passiveParentKey: valueKey,
				passiveParent: valueToBind,
				passiveProps: passiveProps
			});
			values.set(key, newValue);
		};
	};

	var $QhN$var$createValueMap = function(props) {
		var poses = props.poses,
			passive = props.passive;
		var values = new Map();
		Object.keys(poses).forEach(
			$QhN$var$scrapeValuesFromPose(values, props)
		);
		if (passive)
			Object.keys(passive).forEach(
				$QhN$var$bindPassiveValues(values, props)
			);
		return values;
	};

	var $QhN$var$applyDefaultTransition = function(
		pose,
		key,
		defaultTransitions
	) {
		return $vCxL$export$__assign({}, pose, {
			transition: defaultTransitions.has(key)
				? defaultTransitions.get(key)
				: defaultTransitions.get("default")
		});
	};

	var $QhN$var$generateTransitions = function(poses, defaultTransitions) {
		Object.keys(poses).forEach(function(key) {
			var pose = poses[key];
			$KFGT$export$invariant(
				typeof pose === "object",
				"Pose '" +
					key +
					"' is of invalid type. All poses should be objects."
			);
			poses[key] =
				pose.transition !== undefined
					? pose
					: $QhN$var$applyDefaultTransition(
							pose,
							key,
							defaultTransitions
					  );
		});
		return poses;
	};

	var $QhN$var$sortByReversePriority = function(priorityOrder) {
		return function(a, b) {
			var aP = priorityOrder.indexOf(a);
			var bP = priorityOrder.indexOf(b);
			if (aP === -1 && bP !== -1) return -1;
			if (aP !== -1 && bP === -1) return 1;
			return aP - bP;
		};
	};

	var $QhN$export$default = function(_a) {
		var getDefaultProps = _a.getDefaultProps,
			defaultTransitions = _a.defaultTransitions,
			bindOnChange = _a.bindOnChange,
			startAction = _a.startAction,
			stopAction = _a.stopAction,
			readValue = _a.readValue,
			readValueFromSource = _a.readValueFromSource,
			resolveTarget = _a.resolveTarget,
			setValue = _a.setValue,
			setValueNative = _a.setValueNative,
			createValue = _a.createValue,
			convertValue = _a.convertValue,
			getInstantTransition = _a.getInstantTransition,
			getTransitionProps = _a.getTransitionProps,
			addActionDelay = _a.addActionDelay,
			selectValueToRead = _a.selectValueToRead,
			convertTransitionDefinition = _a.convertTransitionDefinition,
			transformPose = _a.transformPose,
			posePriority = _a.posePriority,
			extendAPI = _a.extendAPI;
		return function(config) {
			var parentValues = config.parentValues,
				_a = config.ancestorValues,
				ancestorValues = _a === void 0 ? [] : _a;
			if (parentValues)
				ancestorValues.unshift({
					values: parentValues
				});
			var activeActions = new Map();
			var activePoses = new Map();
			var children = new Set();
			var poses = $QhN$var$generateTransitions(
				$QhN$var$selectPoses(config),
				defaultTransitions
			);
			var props = config.props || {};
			if (getDefaultProps)
				props = $vCxL$export$__assign(
					{},
					props,
					getDefaultProps(config)
				);
			var passive = config.passive,
				userSetValues = config.values,
				_b = config.initialPose,
				initialPose =
					_b === void 0 ? $QhN$var$DEFAULT_INITIAL_POSE : _b;
			var values = $QhN$var$createValueMap({
				poses: poses,
				passive: passive,
				ancestorValues: ancestorValues,
				readValue: readValue,
				createValue: createValue,
				convertValue: convertValue,
				readValueFromSource: readValueFromSource,
				userSetValues: userSetValues,
				initialPose: initialPose,
				activePoses: activePoses,
				props: props
			});
			var state = {
				activeActions: activeActions,
				activePoses: activePoses,
				children: children,
				props: props,
				values: values
			};
			var onChange = config.onChange;
			if (onChange)
				Object.keys(onChange).forEach(bindOnChange(values, onChange));
			var set = $QhN$var$createPoseSetter({
				state: state,
				poses: poses,
				getInstantTransition: getInstantTransition,
				getTransitionProps: getTransitionProps,
				convertTransitionDefinition: convertTransitionDefinition,
				setValue: setValue,
				setValueNative: setValueNative,
				startAction: startAction,
				stopAction: stopAction,
				resolveTarget: resolveTarget,
				addActionDelay: addActionDelay,
				transformPose: transformPose,
				posePriority: posePriority
			});

			var has = function(poseName) {
				return !!poses[poseName];
			};

			var api = {
				set: set,
				unset: function(poseName, poseProps) {
					var posesToSet = [];
					activePoses.forEach(function(valuePoses) {
						var poseIndex = valuePoses.indexOf(poseName);
						if (poseIndex === -1) return;
						var currentPose = valuePoses[0];
						valuePoses.splice(poseIndex, 1);
						var nextPose = valuePoses[0];
						if (nextPose === currentPose) return;

						if (posesToSet.indexOf(nextPose) === -1) {
							posesToSet.push(nextPose);
						}
					});
					var animationsToResolve = posesToSet
						.sort($QhN$var$sortByReversePriority(posePriority))
						.map(function(poseToSet) {
							return set(poseToSet, poseProps, false);
						});
					children.forEach(function(child) {
						return animationsToResolve.push(child.unset(poseName));
					});
					return Promise.all(animationsToResolve);
				},
				get: function(valueName) {
					return valueName
						? selectValueToRead(values.get(valueName))
						: $QhN$var$selectAllValues(values, selectValueToRead);
				},
				has: has,
				setProps: function(newProps) {
					return (state.props = $vCxL$export$__assign(
						{},
						state.props,
						newProps
					));
				},
				_addChild: function(childConfig, factory) {
					var child = factory(
						$vCxL$export$__assign(
							{
								initialPose: initialPose
							},
							childConfig,
							{
								ancestorValues: [
									{
										label: config.label,
										values: values
									}
								].concat(ancestorValues)
							}
						)
					);
					children.add(child);
					return child;
				},
				removeChild: function(child) {
					return children.delete(child);
				},
				clearChildren: function() {
					children.forEach(function(child) {
						return child.destroy();
					});
					children.clear();
				},
				destroy: function() {
					activeActions.forEach(stopAction);
					children.forEach(function(child) {
						return child.destroy();
					});
				}
			};
			return extendAPI(api, state, config);
		};
	};

	/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
	var $nnUu$var$__assign = function() {
		$nnUu$var$__assign =
			Object.assign ||
			function __assign(t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];

					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p))
							t[p] = s[p];
				}

				return t;
			};

		return $nnUu$var$__assign.apply(this, arguments);
	};

	function $nnUu$var$__rest(s, e) {
		var t = {};

		for (var p in s)
			if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
				t[p] = s[p];

		if (s != null && typeof Object.getOwnPropertySymbols === "function")
			for (
				var i = 0, p = Object.getOwnPropertySymbols(s);
				i < p.length;
				i++
			)
				if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
		return t;
	}

	var $nnUu$var$BoundingBoxDimension;

	(function(BoundingBoxDimension) {
		BoundingBoxDimension["width"] = "width";
		BoundingBoxDimension["height"] = "height";
		BoundingBoxDimension["left"] = "left";
		BoundingBoxDimension["right"] = "right";
		BoundingBoxDimension["top"] = "top";
		BoundingBoxDimension["bottom"] = "bottom";
	})($nnUu$var$BoundingBoxDimension || ($nnUu$var$BoundingBoxDimension = {}));

	var $nnUu$var$measureWithoutTransform = function(element) {
		var transform$$1 = element.style.transform;
		element.style.transform = "";
		var bbox = element.getBoundingClientRect();
		element.style.transform = transform$$1;
		return bbox;
	};

	var $nnUu$var$resolveProp = function(target, props) {
		return typeof target === "function" ? target(props) : target;
	};

	var $nnUu$var$interpolate = $z2lI$export$transform.interpolate;

	var $nnUu$var$singleAxisPointer = function(axis) {
		return function(from) {
			var _a;

			return $z2lI$export$pointer(
				((_a = {}),
				(_a[axis] = typeof from === "string" ? parseFloat(from) : from),
				_a)
			).pipe(function(v) {
				return v[axis];
			});
		};
	};

	var $nnUu$var$pointerX =
		/*#__PURE__*/
		$nnUu$var$singleAxisPointer("x");
	var $nnUu$var$pointerY =
		/*#__PURE__*/
		$nnUu$var$singleAxisPointer("y");

	var $nnUu$var$createPointer = function(
		axisPointerCreator,
		min,
		max,
		measurement
	) {
		return function(transitionProps) {
			var from = transitionProps.from,
				type = transitionProps.type,
				dimensions = transitionProps.dimensions,
				dragBounds = transitionProps.dragBounds;
			var axisPointer = axisPointerCreator(
				dimensions.measurementAsPixels(measurement, from, type)
			);
			var transformQueue = [];

			if (dragBounds) {
				var resolvedDragBounds_1 = $nnUu$var$resolveProp(
					dragBounds,
					transitionProps
				);

				if (resolvedDragBounds_1[min] !== undefined) {
					transformQueue.push(function(v) {
						return Math.max(
							v,
							dimensions.measurementAsPixels(
								measurement,
								resolvedDragBounds_1[min],
								type
							)
						);
					});
				}

				if (resolvedDragBounds_1[max] !== undefined) {
					transformQueue.push(function(v) {
						return Math.min(
							v,
							dimensions.measurementAsPixels(
								measurement,
								resolvedDragBounds_1[max],
								type
							)
						);
					});
				}
			}

			if (type === $Hokg$export$percent) {
				transformQueue.push(
					$nnUu$var$interpolate(
						[0, dimensions.get(measurement)],
						[0, 100]
					),
					function(v) {
						return v + "%";
					}
				);
			}

			return transformQueue.length
				? axisPointer.pipe.apply(axisPointer, transformQueue)
				: axisPointer;
		};
	};

	var $nnUu$var$just = function(from) {
		return $z2lI$export$action(function(_a) {
			var update = _a.update,
				complete = _a.complete;
			update(from);
			complete();
		});
	};

	var $nnUu$var$underDampedSpring = function(_a) {
		var from = _a.from,
			velocity = _a.velocity,
			to = _a.to;
		return $z2lI$export$spring({
			from: from,
			to: to,
			velocity: velocity,
			stiffness: 500,
			damping: 25,
			restDelta: 0.5,
			restSpeed: 10
		});
	};

	var $nnUu$var$overDampedSpring = function(_a) {
		var from = _a.from,
			velocity = _a.velocity,
			to = _a.to;
		return $z2lI$export$spring({
			from: from,
			to: to,
			velocity: velocity,
			stiffness: 700,
			damping: to === 0 ? 100 : 35
		});
	};

	var $nnUu$var$linearTween = function(_a) {
		var from = _a.from,
			to = _a.to;
		return $z2lI$export$tween({
			from: from,
			to: to,
			ease: $xQjT$export$linear
		});
	};

	var $nnUu$var$intelligentTransition = {
		x: $nnUu$var$underDampedSpring,
		y: $nnUu$var$underDampedSpring,
		z: $nnUu$var$underDampedSpring,
		rotate: $nnUu$var$underDampedSpring,
		rotateX: $nnUu$var$underDampedSpring,
		rotateY: $nnUu$var$underDampedSpring,
		rotateZ: $nnUu$var$underDampedSpring,
		scaleX: $nnUu$var$overDampedSpring,
		scaleY: $nnUu$var$overDampedSpring,
		scale: $nnUu$var$overDampedSpring,
		opacity: $nnUu$var$linearTween,
		default: $z2lI$export$tween
	};
	var $nnUu$var$dragAction =
		/*#__PURE__*/
		$nnUu$var$__assign({}, $nnUu$var$intelligentTransition, {
			x:
				/*#__PURE__*/
				$nnUu$var$createPointer(
					$nnUu$var$pointerX,
					"left",
					"right",
					$nnUu$var$BoundingBoxDimension.width
				),
			y:
				/*#__PURE__*/
				$nnUu$var$createPointer(
					$nnUu$var$pointerY,
					"top",
					"bottom",
					$nnUu$var$BoundingBoxDimension.height
				)
		});

	var $nnUu$var$justAxis = function(_a) {
		var from = _a.from;
		return $nnUu$var$just(from);
	};

	var $nnUu$var$intelligentDragEnd =
		/*#__PURE__*/
		$nnUu$var$__assign({}, $nnUu$var$intelligentTransition, {
			x: $nnUu$var$justAxis,
			y: $nnUu$var$justAxis
		});
	var $nnUu$var$defaultTransitions =
		/*#__PURE__*/
		new Map([
			["default", $nnUu$var$intelligentTransition],
			["drag", $nnUu$var$dragAction],
			["dragEnd", $nnUu$var$intelligentDragEnd]
		]);
	var $nnUu$var$auto = {
		test: function(v) {
			return v === "auto";
		},
		parse: function(v) {
			return v;
		}
	};
	var $nnUu$var$valueTypeTests = [
		$Hokg$export$number,
		$Hokg$export$degrees,
		$Hokg$export$percent,
		$Hokg$export$px,
		$Hokg$export$vw,
		$Hokg$export$vh,
		$nnUu$var$auto
	];

	var $nnUu$var$testValueType = function(v) {
		return function(type) {
			return type.test(v);
		};
	};

	var $nnUu$var$getValueType = function(v) {
		return $nnUu$var$valueTypeTests.find($nnUu$var$testValueType(v));
	};

	var $nnUu$var$createPassiveValue = function(init, parent, transform$$1) {
		var raw = $z2lI$export$value(transform$$1(init));
		parent.raw.subscribe(function(v) {
			return raw.update(transform$$1(v));
		});
		return {
			raw: raw
		};
	};

	var $nnUu$var$createValue = function(init) {
		var type = $nnUu$var$getValueType(init);
		var raw = $z2lI$export$value(init);
		return {
			raw: raw,
			type: type
		};
	};

	var $nnUu$var$addActionDelay = function(delay$$1, transition) {
		if (delay$$1 === void 0) {
			delay$$1 = 0;
		}

		return $z2lI$export$chain($z2lI$export$delay(delay$$1), transition);
	};

	var $nnUu$var$animationLookup = {
		tween: $z2lI$export$tween,
		spring: $z2lI$export$spring,
		decay: $z2lI$export$decay,
		keyframes: $z2lI$export$keyframes,
		physics: $z2lI$export$physics
	};
	var $nnUu$var$linear$1 = $xQjT$export$linear,
		$nnUu$var$easeIn = $xQjT$export$easeIn,
		$nnUu$var$easeOut = $xQjT$export$easeOut,
		$nnUu$var$easeInOut = $xQjT$export$easeInOut,
		$nnUu$var$circIn = $xQjT$export$circIn,
		$nnUu$var$circOut = $xQjT$export$circOut,
		$nnUu$var$circInOut = $xQjT$export$circInOut,
		$nnUu$var$backIn = $xQjT$export$backIn,
		$nnUu$var$backOut = $xQjT$export$backOut,
		$nnUu$var$backInOut = $xQjT$export$backInOut,
		$nnUu$var$anticipate = $xQjT$export$anticipate;
	var $nnUu$var$easingLookup = {
		linear: $nnUu$var$linear$1,
		easeIn: $nnUu$var$easeIn,
		easeOut: $nnUu$var$easeOut,
		easeInOut: $nnUu$var$easeInOut,
		circIn: $nnUu$var$circIn,
		circOut: $nnUu$var$circOut,
		circInOut: $nnUu$var$circInOut,
		backIn: $nnUu$var$backIn,
		backOut: $nnUu$var$backOut,
		backInOut: $nnUu$var$backInOut,
		anticipate: $nnUu$var$anticipate
	};

	var $nnUu$var$getAction = function(v, _a, _b) {
		var from = _b.from,
			to = _b.to,
			velocity = _b.velocity;
		var _c = _a.type,
			type = _c === void 0 ? "tween" : _c,
			ease = _a.ease,
			def = $nnUu$var$__rest(_a, ["type", "ease"]);
		$KFGT$export$invariant(
			$nnUu$var$animationLookup[type] !== undefined,
			"Invalid transition type '" +
				type +
				"'. Valid transition types are: tween, spring, decay, physics and keyframes."
		);

		if (type === "tween") {
			var typeOfEase = typeof ease;

			if (typeOfEase !== "function") {
				if (typeOfEase === "string") {
					$KFGT$export$invariant(
						$nnUu$var$easingLookup[ease] !== undefined,
						"Invalid easing type '" +
							ease +
							"'. popmotion.io/pose/api/config"
					);
					ease = $nnUu$var$easingLookup[ease];
				} else if (Array.isArray(ease)) {
					$KFGT$export$invariant(
						ease.length === 4,
						"Cubic bezier arrays must contain four numerical values."
					);
					var x1 = ease[0],
						y1 = ease[1],
						x2 = ease[2],
						y2 = ease[3];
					ease = $xQjT$export$cubicBezier(x1, y1, x2, y2);
				}
			}
		}

		var baseProps =
			type !== "keyframes"
				? {
						from: from,
						to: to,
						velocity: velocity,
						ease: ease
				  }
				: {
						ease: ease
				  };
		return $nnUu$var$animationLookup[type](
			$nnUu$var$__assign({}, baseProps, def)
		);
	};

	var $nnUu$var$isAction = function(action$$1) {
		return typeof action$$1.start !== "undefined";
	};

	var $nnUu$var$pose = function(_a) {
		var transformPose = _a.transformPose,
			addListenerToValue = _a.addListenerToValue,
			extendAPI = _a.extendAPI,
			readValueFromSource = _a.readValueFromSource,
			posePriority = _a.posePriority,
			setValueNative = _a.setValueNative;
		return $QhN$export$default({
			bindOnChange: function(values, onChange) {
				return function(key) {
					if (!values.has(key)) return;
					var raw = values.get(key).raw;
					raw.subscribe(onChange[key]);
				};
			},
			readValue: function(_a) {
				var raw = _a.raw;
				return raw.get();
			},
			setValue: function(_a, to) {
				var raw = _a.raw;
				return raw.update(to);
			},
			createValue: function(init, key, _a, _b) {
				var elementStyler = _a.elementStyler;

				var _c = _b === void 0 ? {} : _b,
					passiveParent = _c.passiveParent,
					passiveProps = _c.passiveProps;

				var val = passiveParent
					? $nnUu$var$createPassiveValue(
							init,
							passiveParent,
							passiveProps
					  )
					: $nnUu$var$createValue(init);

				if (addListenerToValue) {
					val.raw.subscribe(addListenerToValue(key, elementStyler));
				}

				return val;
			},
			convertValue: function(raw, key, _a) {
				var elementStyler = _a.elementStyler;

				if (addListenerToValue) {
					raw.subscribe(addListenerToValue(key, elementStyler));
				}

				return {
					raw: raw,
					type: $nnUu$var$getValueType(raw.get())
				};
			},
			getTransitionProps: function(_a, to) {
				var raw = _a.raw,
					type = _a.type;
				return {
					from: raw.get(),
					velocity: raw.getVelocity(),
					to: to,
					type: type
				};
			},
			resolveTarget: function(_, to) {
				return to;
			},
			selectValueToRead: function(_a) {
				var raw = _a.raw;
				return raw;
			},
			startAction: function(_a, action$$1, complete) {
				var raw = _a.raw;
				var reaction = {
					update: function(v) {
						return raw.update(v);
					},
					complete: complete
				};
				return action$$1.start(reaction);
			},
			stopAction: function(action$$1) {
				return action$$1.stop();
			},
			getInstantTransition: function(_, _a) {
				var to = _a.to;
				return $nnUu$var$just(to);
			},
			convertTransitionDefinition: function(val, def, props) {
				if ($nnUu$var$isAction(def)) return def;
				var delay$$1 = def.delay,
					min = def.min,
					max = def.max,
					round = def.round,
					remainingDef = $nnUu$var$__rest(def, [
						"delay",
						"min",
						"max",
						"round"
					]);
				var action$$1 = $nnUu$var$getAction(val, remainingDef, props);
				var outputPipe = [];
				if (delay$$1)
					action$$1 = $nnUu$var$addActionDelay(delay$$1, action$$1);
				if (min !== undefined)
					outputPipe.push(function(v) {
						return Math.max(v, min);
					});
				if (max !== undefined)
					outputPipe.push(function(v) {
						return Math.min(v, max);
					});
				if (round) outputPipe.push(Math.round);
				return outputPipe.length
					? action$$1.pipe.apply(action$$1, outputPipe)
					: action$$1;
			},
			setValueNative: setValueNative,
			addActionDelay: $nnUu$var$addActionDelay,
			defaultTransitions: $nnUu$var$defaultTransitions,
			transformPose: transformPose,
			readValueFromSource: readValueFromSource,
			posePriority: posePriority,
			extendAPI: extendAPI
		});
	};

	var $nnUu$var$createDimensions = function(element) {
		var hasMeasured = false;
		var current = {
			width: 0,
			height: 0,
			top: 0,
			left: 0,
			bottom: 0,
			right: 0
		};
		return {
			get: function(measurement) {
				return measurement ? current[measurement] : current;
			},
			measure: function() {
				current = element.getBoundingClientRect();
				hasMeasured = true;
				return current;
			},
			measurementAsPixels: function(measurement, value$$1, type) {
				return type === $Hokg$export$percent
					? ((typeof value$$1 === "string"
							? parseFloat(value$$1)
							: value$$1) /
							100) *
							current[measurement]
					: value$$1;
			},
			has: function() {
				return hasMeasured;
			}
		};
	};

	var $nnUu$var$makeUIEventApplicator = function(_a) {
		var startEvents = _a.startEvents,
			endEvents = _a.endEvents,
			startPose = _a.startPose,
			endPose = _a.endPose,
			startCallback = _a.startCallback,
			endCallback = _a.endCallback,
			useDocumentToEnd = _a.useDocumentToEnd,
			preventDefault = _a.preventDefault;
		return function(element, activeActions, poser, config) {
			var startListener = startPose + "Start";
			var endListener = startPose + "End";
			var eventStartListener = $z2lI$export$listen(
				element,
				startEvents
			).start(function(startEvent) {
				if (preventDefault) startEvent.preventDefault();
				poser.set(startPose);
				if (startCallback && config[startCallback])
					config[startCallback](startEvent);
				var eventEndListener = $z2lI$export$listen(
					useDocumentToEnd ? document.documentElement : element,
					endEvents + (useDocumentToEnd ? " mouseenter" : "")
				).start(function(endEvent) {
					if (
						useDocumentToEnd &&
						endEvent.type === "mouseenter" &&
						endEvent.buttons === 1
					) {
						return;
					}

					if (preventDefault) endEvent.preventDefault();
					activeActions.get(endListener).stop();
					poser.unset(startPose);
					poser.set(endPose);
					if (endCallback && config[endCallback])
						config[endCallback](endEvent);
				});
				activeActions.set(endListener, eventEndListener);
			});
			activeActions.set(startListener, eventStartListener);
		};
	};

	var $nnUu$var$events = {
		draggable:
			/*#__PURE__*/
			$nnUu$var$makeUIEventApplicator({
				startEvents: "mousedown touchstart",
				endEvents: "mouseup touchend",
				startPose: "drag",
				endPose: "dragEnd",
				startCallback: "onDragStart",
				endCallback: "onDragEnd",
				useDocumentToEnd: true,
				preventDefault: true
			}),
		hoverable:
			/*#__PURE__*/
			$nnUu$var$makeUIEventApplicator({
				startEvents: "mouseenter",
				endEvents: "mouseleave",
				startPose: "hover",
				endPose: "hoverEnd"
			}),
		focusable:
			/*#__PURE__*/
			$nnUu$var$makeUIEventApplicator({
				startEvents: "focus",
				endEvents: "blur",
				startPose: "focus",
				endPose: "blur"
			}),
		pressable:
			/*#__PURE__*/
			$nnUu$var$makeUIEventApplicator({
				startEvents: "mousedown touchstart",
				endEvents: "mouseup touchend",
				startPose: "press",
				endPose: "pressEnd",
				startCallback: "onPressStart",
				endCallback: "onPressEnd",
				useDocumentToEnd: true
			})
	};
	var $nnUu$var$eventKeys =
		/*#__PURE__*/
		Object.keys($nnUu$var$events);

	var $nnUu$var$appendEventListeners = function(
		element,
		activeActions,
		poser,
		_a
	) {
		var props = _a.props;
		return $nnUu$var$eventKeys.forEach(function(key) {
			if (props[key])
				$nnUu$var$events[key](element, activeActions, poser, props);
		});
	};

	var $nnUu$var$ORIGIN_START = 0;
	var $nnUu$var$ORIGIN_CENTER = "50%";
	var $nnUu$var$ORIGIN_END = "100%";

	var $nnUu$var$findCenter = function(_a) {
		var top = _a.top,
			right = _a.right,
			bottom = _a.bottom,
			left = _a.left;
		return {
			x: (left + right) / 2,
			y: (top + bottom) / 2
		};
	};

	var $nnUu$var$positionalProps = [
		"width",
		"height",
		"top",
		"left",
		"bottom",
		"right"
	];
	var $nnUu$var$positionalPropsDict =
		/*#__PURE__*/
		new Set($nnUu$var$positionalProps);

	var $nnUu$var$checkPositionalProp = function(key) {
		return $nnUu$var$positionalPropsDict.has(key);
	};

	var $nnUu$var$hasPositionalProps = function(pose) {
		return Object.keys(pose).some($nnUu$var$checkPositionalProp);
	};

	var $nnUu$var$isFlipPose = function(flip, key, state) {
		return (
			state.props.element instanceof HTMLElement &&
			(flip === true || key === "flip")
		);
	};

	var $nnUu$var$setValue = function(_a, key, to) {
		var values = _a.values,
			props = _a.props;

		if (values.has(key)) {
			var raw = values.get(key).raw;
			raw.update(to);
			raw.update(to);
		} else {
			values.set(key, {
				raw: $z2lI$export$value(to, function(v) {
					return props.elementStyler.set(key, v);
				})
			});
		}
	};

	var $nnUu$var$explicitlyFlipPose = function(state, nextPose) {
		var _a = state.props,
			dimensions = _a.dimensions,
			elementStyler = _a.elementStyler;
		dimensions.measure();
		var width = nextPose.width,
			height = nextPose.height,
			top = nextPose.top,
			left = nextPose.left,
			bottom = nextPose.bottom,
			right = nextPose.right,
			position = nextPose.position,
			remainingPose = $nnUu$var$__rest(nextPose, [
				"width",
				"height",
				"top",
				"left",
				"bottom",
				"right",
				"position"
			]);
		var propsToSet = $nnUu$var$positionalProps
			.concat("position")
			.reduce(function(acc, key) {
				if (nextPose[key] !== undefined) {
					acc[key] = $nnUu$var$resolveProp(
						nextPose[key],
						state.props
					);
				}

				return acc;
			}, {});
		elementStyler.set(propsToSet).render();
		return $nnUu$var$implicitlyFlipPose(state, remainingPose);
	};

	var $nnUu$var$implicitlyFlipPose = function(state, nextPose) {
		var _a = state.props,
			dimensions = _a.dimensions,
			element = _a.element,
			elementStyler = _a.elementStyler;
		if (!dimensions.has()) return {};
		var prev = dimensions.get();
		var next = $nnUu$var$measureWithoutTransform(element);
		var originX =
			prev.left === next.left
				? $nnUu$var$ORIGIN_START
				: prev.right === next.right
				? $nnUu$var$ORIGIN_END
				: $nnUu$var$ORIGIN_CENTER;
		var originY =
			prev.top === next.top
				? $nnUu$var$ORIGIN_START
				: prev.bottom === next.bottom
				? $nnUu$var$ORIGIN_END
				: $nnUu$var$ORIGIN_CENTER;
		elementStyler.set({
			originX: originX,
			originY: originY
		});
		var flipPoseProps = {};

		if (prev.width !== next.width) {
			$nnUu$var$setValue(state, "scaleX", prev.width / next.width);
			flipPoseProps.scaleX = 1;
		}

		if (prev.height !== next.height) {
			$nnUu$var$setValue(state, "scaleY", prev.height / next.height);
			flipPoseProps.scaleY = 1;
		}

		var prevCenter = $nnUu$var$findCenter(prev);
		var nextCenter = $nnUu$var$findCenter(next);

		if (originX === $nnUu$var$ORIGIN_CENTER) {
			$nnUu$var$setValue(state, "x", prevCenter.x - nextCenter.x);
			flipPoseProps.x = 0;
		}

		if (originY === $nnUu$var$ORIGIN_CENTER) {
			$nnUu$var$setValue(state, "y", prevCenter.y - nextCenter.y);
			flipPoseProps.y = 0;
		}

		elementStyler.render();
		return $nnUu$var$__assign({}, nextPose, flipPoseProps);
	};

	var $nnUu$var$flipPose = function(props, nextPose) {
		return $nnUu$var$hasPositionalProps(nextPose)
			? $nnUu$var$explicitlyFlipPose(props, nextPose)
			: $nnUu$var$implicitlyFlipPose(props, nextPose);
	};

	var $nnUu$var$getPosFromMatrix = function(matrix, pos) {
		return parseFloat(matrix.split(", ")[pos]);
	};

	var $nnUu$var$getTranslateFromMatrix = function(pos2, pos3) {
		return function(element, bbox, _a) {
			var transform$$1 = _a.transform;
			if (transform$$1 === "none") return 0;
			var matrix3d = transform$$1.match(/^matrix3d\((.+)\)$/);
			if (matrix3d) return $nnUu$var$getPosFromMatrix(matrix3d[1], pos3);
			return $nnUu$var$getPosFromMatrix(
				transform$$1.match(/^matrix\((.+)\)$/)[1],
				pos2
			);
		};
	};

	var $nnUu$var$positionalValues = {
		width: function(element, _a) {
			var width = _a.width;
			return width;
		},
		height: function(element, _a) {
			var height = _a.height;
			return height;
		},
		top: function(element, bbox, _a) {
			var top = _a.top;
			return parseFloat(top);
		},
		left: function(element, bbox, _a) {
			var left = _a.left;
			return parseFloat(left);
		},
		bottom: function(element, _a, _b) {
			var height = _a.height;
			var top = _b.top;
			return parseFloat(top) + height;
		},
		right: function(element, _a, _b) {
			var width = _a.width;
			var left = _b.left;
			return parseFloat(left) + width;
		},
		x:
			/*#__PURE__*/
			$nnUu$var$getTranslateFromMatrix(4, 13),
		y:
			/*#__PURE__*/
			$nnUu$var$getTranslateFromMatrix(5, 14)
	};

	var $nnUu$var$isPositionalKey = function(v) {
		return $nnUu$var$positionalValues[v] !== undefined;
	};

	var $nnUu$var$isPositional = function(pose) {
		return Object.keys(pose).some($nnUu$var$isPositionalKey);
	};

	var $nnUu$var$convertPositionalUnits = function(state, pose) {
		var values = state.values,
			props = state.props;
		var element = props.element,
			elementStyler = props.elementStyler;
		var positionalPoseKeys = Object.keys(pose).filter(
			$nnUu$var$isPositionalKey
		);
		var changedPositionalKeys = [];
		var elementComputedStyle = getComputedStyle(element);
		positionalPoseKeys.forEach(function(key) {
			var value$$1 = values.get(key);
			var fromValueType = $nnUu$var$getValueType(value$$1.raw.get());
			var to = $nnUu$var$resolveProp(pose[key], props);
			var toValueType = $nnUu$var$getValueType(to);

			if (fromValueType !== toValueType) {
				changedPositionalKeys.push(key);
				pose.applyAtEnd = pose.applyAtEnd || {};
				pose.applyAtEnd[key] = pose[key];
				$nnUu$var$setValue(state, key, to);
			}
		});
		if (!changedPositionalKeys.length) return pose;
		var originBbox = element.getBoundingClientRect();
		var top = elementComputedStyle.top,
			left = elementComputedStyle.left,
			bottom = elementComputedStyle.bottom,
			right = elementComputedStyle.right,
			transform$$1 = elementComputedStyle.transform;
		var originComputedStyle = {
			top: top,
			left: left,
			bottom: bottom,
			right: right,
			transform: transform$$1
		};
		elementStyler.render();
		var targetBbox = element.getBoundingClientRect();
		var newPose = $nnUu$var$__assign({}, pose);
		changedPositionalKeys.forEach(function(key) {
			$nnUu$var$setValue(
				state,
				key,
				$nnUu$var$positionalValues[key](
					element,
					originBbox,
					originComputedStyle
				)
			);
			newPose[key] = $nnUu$var$positionalValues[key](
				element,
				targetBbox,
				elementComputedStyle
			);
		});
		elementStyler.render();
		return newPose;
	};

	var $nnUu$var$dragPoses = function(draggable) {
		var drag = {
			preTransition: function(_a) {
				var dimensions = _a.dimensions;
				return dimensions.measure();
			}
		};
		var dragEnd = {};
		if (draggable === true || draggable === "x") drag.x = dragEnd.x = 0;
		if (draggable === true || draggable === "y") drag.y = dragEnd.y = 0;
		return {
			drag: drag,
			dragEnd: dragEnd
		};
	};

	var $nnUu$var$createPoseConfig = function(element, _a) {
		var onDragStart = _a.onDragStart,
			onDragEnd = _a.onDragEnd,
			onPressStart = _a.onPressStart,
			onPressEnd = _a.onPressEnd,
			draggable = _a.draggable,
			hoverable = _a.hoverable,
			focusable = _a.focusable,
			pressable = _a.pressable,
			dragBounds = _a.dragBounds,
			config = $nnUu$var$__rest(_a, [
				"onDragStart",
				"onDragEnd",
				"onPressStart",
				"onPressEnd",
				"draggable",
				"hoverable",
				"focusable",
				"pressable",
				"dragBounds"
			]);
		var poseConfig = $nnUu$var$__assign(
			{
				flip: {}
			},
			config,
			{
				props: $nnUu$var$__assign({}, config.props, {
					onDragStart: onDragStart,
					onDragEnd: onDragEnd,
					onPressStart: onPressStart,
					onPressEnd: onPressEnd,
					dragBounds: dragBounds,
					draggable: draggable,
					hoverable: hoverable,
					focusable: focusable,
					pressable: pressable,
					element: element,
					elementStyler: $Q4bC$export$default(element, {
						preparseOutput: false
					}),
					dimensions: $nnUu$var$createDimensions(element)
				})
			}
		);

		if (draggable) {
			var _b = $nnUu$var$dragPoses(draggable),
				drag = _b.drag,
				dragEnd = _b.dragEnd;

			poseConfig.drag = $nnUu$var$__assign({}, poseConfig.drag, drag);
			poseConfig.dragEnd = $nnUu$var$__assign(
				{},
				poseConfig.dragEnd,
				dragEnd
			);
		}

		return poseConfig;
	};

	var $nnUu$var$domPose =
		/*#__PURE__*/
		$nnUu$var$pose({
			posePriority: ["drag", "press", "focus", "hover"],
			transformPose: function(_a, name, state) {
				var flip = _a.flip,
					pose$$1 = $nnUu$var$__rest(_a, ["flip"]);

				if ($nnUu$var$isFlipPose(flip, name, state)) {
					return $nnUu$var$flipPose(state, pose$$1);
				} else if ($nnUu$var$isPositional(pose$$1)) {
					return $nnUu$var$convertPositionalUnits(state, pose$$1);
				}

				return pose$$1;
			},
			addListenerToValue: function(key, elementStyler) {
				return function(v) {
					return elementStyler.set(key, v);
				};
			},
			readValueFromSource: function(key, _a) {
				var elementStyler = _a.elementStyler,
					dragBounds = _a.dragBounds;
				var value$$1 = elementStyler.get(key);

				if (dragBounds && (key === "x" || key === "y")) {
					var bound =
						key === "x"
							? dragBounds.left || dragBounds.right
							: dragBounds.top || dragBounds.bottom;

					if (bound) {
						var boundType = $nnUu$var$getValueType(bound);
						value$$1 = boundType.transform(value$$1);
					}
				}

				return isNaN(value$$1) ? value$$1 : parseFloat(value$$1);
			},
			setValueNative: function(key, to, _a) {
				var elementStyler = _a.elementStyler;
				return elementStyler.set(key, to);
			},
			extendAPI: function(api, _a, config) {
				var props = _a.props,
					activeActions = _a.activeActions;
				var measure = props.dimensions.measure;
				var poserApi = $nnUu$var$__assign({}, api, {
					addChild: function(element, childConfig) {
						return api._addChild(
							$nnUu$var$createPoseConfig(element, childConfig),
							$nnUu$var$domPose
						);
					},
					measure: measure,
					flip: function(op) {
						if (op) {
							measure();
							op();
						}

						return api.set("flip");
					}
				});
				props.elementStyler.render();
				$nnUu$var$appendEventListeners(
					props.element,
					activeActions,
					poserApi,
					config
				);
				return poserApi;
			}
		});

	var $nnUu$export$default = function(element, config) {
		return $nnUu$var$domPose($nnUu$var$createPoseConfig(element, config));
	};

	function $MvwA$export$default(fn) {
		var cache = {};
		return function(arg) {
			if (cache[arg] === undefined) cache[arg] = fn(arg);
			return cache[arg];
		};
	}

	var $gPI$var$reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i;
	var $gPI$export$default = $MvwA$export$default(
		$gPI$var$reactPropsRegex.test.bind($gPI$var$reactPropsRegex)
	);

	var $mfSv$var$hasChanged = function(prev, next) {
		if (prev === next) return false;
		var prevIsArray = Array.isArray(prev);
		var nextIsArray = Array.isArray(next);

		if (prevIsArray !== nextIsArray || (!prevIsArray && !nextIsArray)) {
			return true;
		} else if (prevIsArray && nextIsArray) {
			var numPrev = prev.length;
			var numNext = next.length;
			if (numPrev !== numNext) return true;

			for (var i = numPrev; i < numPrev; i++) {
				if (prev[i] !== next[i]) return true;
			}
		}

		return false;
	};

	var $mfSv$var$pickAssign = function(shouldPick, sources) {
		return sources.reduce(function(picked, source) {
			for (var key in source) {
				if (shouldPick(key)) {
					picked[key] = source[key];
				}
			}

			return picked;
		}, {});
	};

	var $mfSv$var$PoseParentContext = $n8$exports.createContext({});

	var $mfSv$var$calcPopFromFlowStyle = function(el) {
		var offsetTop = el.offsetTop,
			offsetLeft = el.offsetLeft,
			offsetWidth = el.offsetWidth,
			offsetHeight = el.offsetHeight;
		return {
			position: "absolute",
			top: offsetTop,
			left: offsetLeft,
			width: offsetWidth,
			height: offsetHeight
		};
	};

	var $mfSv$var$hasPose = function(pose, key) {
		return Array.isArray(pose) ? pose.indexOf(key) !== -1 : pose === key;
	};

	var $mfSv$var$objectToMap = function(obj) {
		return Object.keys(obj).reduce(function(map, key) {
			map.set(key, {
				raw: obj[key]
			});
			return map;
		}, new Map());
	};

	var $mfSv$var$testAlwaysTrue = function() {
		return true;
	};

	var $mfSv$var$PoseElement = (function(_super) {
		$vCxL$export$__extends(PoseElement, _super);

		function PoseElement(props) {
			var _this = _super.call(this, props) || this;

			_this.children = new Set();
			_this.childrenHandlers = {
				registerChild: function(props) {
					_this.children.add(props);

					if (_this.poser) _this.flushChildren();
				},
				onUnmount: function(child) {
					return _this.poser.removeChild(child);
				},
				getParentPoseConfig: function() {
					return _this.props.poseConfig;
				},
				getInitialPoseFromParent: function() {
					return _this.getInitialPose();
				}
			};

			_this.getRefs = function() {
				var refs = {};
				var elementType = _this.props.elementType;

				if (typeof elementType === "string") {
					refs.ref = _this.setRef;
				} else {
					refs.innerRef = _this.setRef;
					refs.hostRef = _this.setRef;
				}

				return refs;
			};

			_this.setRef = function(ref) {
				if (ref instanceof Element || (_this.ref && ref === null)) {
					var innerRef = _this.props.innerRef;

					if (innerRef) {
						if (typeof innerRef === "function") {
							innerRef(ref);
						} else {
							innerRef.current = ref;
						}
					}

					_this.ref = ref;
				}
			};

			_this.shouldForwardProp =
				typeof _this.props.elementType === "string"
					? $gPI$export$default
					: $mfSv$var$testAlwaysTrue;
			return _this;
		}

		PoseElement.prototype.getInitialPose = function() {
			var _a = this.props,
				getInitialPoseFromParent = _a.getInitialPoseFromParent,
				pose = _a.pose,
				_pose = _a._pose,
				initialPose = _a.initialPose;

			if (initialPose) {
				return initialPose;
			} else {
				var parentPose =
					getInitialPoseFromParent && getInitialPoseFromParent();
				var initialPoses = (Array.isArray(parentPose)
					? parentPose
					: [parentPose]
				)
					.concat(pose, _pose)
					.filter(Boolean);
				return initialPoses.length > 0 ? initialPoses : undefined;
			}
		};

		PoseElement.prototype.getFirstPose = function() {
			var _a = this.props,
				initialPose = _a.initialPose,
				pose = _a.pose,
				_pose = _a._pose;
			if (!initialPose) return;
			var firstPose = (Array.isArray(pose) ? pose : [pose])
				.concat(_pose)
				.filter(Boolean);
			return firstPose.length === 1 ? firstPose[0] : firstPose;
		};

		PoseElement.prototype.getSetProps = function() {
			var _a = this.props,
				elementType = _a.elementType,
				poseConfig = _a.poseConfig,
				onValueChange = _a.onValueChange,
				innerRef = _a.innerRef,
				_pose = _a._pose,
				pose = _a.pose,
				initialPose = _a.initialPose,
				poseKey = _a.poseKey,
				onPoseComplete = _a.onPoseComplete,
				getParentPoseConfig = _a.getParentPoseConfig,
				registerChild = _a.registerChild,
				onUnmount = _a.onUnmount,
				getInitialPoseFromParent = _a.getInitialPoseFromParent,
				popFromFlow = _a.popFromFlow,
				values = _a.values,
				parentValues = _a.parentValues,
				onDragStart = _a.onDragStart,
				onDragEnd = _a.onDragEnd,
				onPressStart = _a.onPressStart,
				onPressEnd = _a.onPressEnd,
				props = $vCxL$export$__rest(_a, [
					"elementType",
					"poseConfig",
					"onValueChange",
					"innerRef",
					"_pose",
					"pose",
					"initialPose",
					"poseKey",
					"onPoseComplete",
					"getParentPoseConfig",
					"registerChild",
					"onUnmount",
					"getInitialPoseFromParent",
					"popFromFlow",
					"values",
					"parentValues",
					"onDragStart",
					"onDragEnd",
					"onPressStart",
					"onPressEnd"
				]);

			if (popFromFlow && this.ref && this.ref instanceof HTMLElement) {
				if (!this.popStyle) {
					props.style = $vCxL$export$__assign(
						{},
						props.style,
						$mfSv$var$calcPopFromFlowStyle(this.ref)
					);
					this.popStyle = props.style;
				} else {
					props.style = this.popStyle;
				}
			} else {
				this.popStyle = null;
			}

			return props;
		};

		PoseElement.prototype.componentDidMount = function() {
			var _this = this;

			$KFGT$export$invariant(
				typeof this.ref !== "undefined",
				"No DOM ref found. If you're converting an existing component via posed(Component), you must ensure you're passing the hostRef prop to your underlying DOM element."
			);
			var _a = this.props,
				poseConfig = _a.poseConfig,
				onValueChange = _a.onValueChange,
				registerChild = _a.registerChild,
				values = _a.values,
				parentValues = _a.parentValues,
				onDragStart = _a.onDragStart,
				onDragEnd = _a.onDragEnd,
				onPressStart = _a.onPressStart,
				onPressEnd = _a.onPressEnd;
			var config = $vCxL$export$__assign({}, poseConfig, {
				initialPose: this.getInitialPose(),
				values: values || poseConfig.values,
				parentValues: parentValues
					? $mfSv$var$objectToMap(parentValues)
					: undefined,
				props: this.getSetProps(),
				onDragStart: onDragStart,
				onDragEnd: onDragEnd,
				onPressStart: onPressStart,
				onPressEnd: onPressEnd,
				onChange: onValueChange
			});

			if (!registerChild) {
				this.initPoser($nnUu$export$default(this.ref, config));
			} else {
				registerChild({
					element: this.ref,
					poseConfig: config,
					onRegistered: function(poser) {
						return _this.initPoser(poser);
					}
				});
			}
		};

		PoseElement.prototype.UNSAFE_componentWillUpdate = function(_a) {
			var pose = _a.pose,
				_pose = _a._pose;
			if (
				$mfSv$var$hasPose(pose, "flip") ||
				$mfSv$var$hasPose(_pose, "flip")
			)
				this.poser.measure();
		};

		PoseElement.prototype.componentDidUpdate = function(prevProps) {
			var _a = this.props,
				pose = _a.pose,
				_pose = _a._pose,
				poseKey = _a.poseKey;
			this.poser.setProps(this.getSetProps());

			if (
				poseKey !== prevProps.poseKey ||
				$mfSv$var$hasChanged(prevProps.pose, pose) ||
				pose === "flip"
			) {
				this.setPose(pose);
			}

			if (_pose !== prevProps._pose || _pose === "flip")
				this.setPose(_pose);
		};

		PoseElement.prototype.componentWillUnmount = function() {
			if (!this.poser) return;
			var onUnmount = this.props.onUnmount;
			if (onUnmount) onUnmount(this.poser);
			this.poser.destroy();
		};

		PoseElement.prototype.initPoser = function(poser) {
			this.poser = poser;
			this.flushChildren();
			var firstPose = this.getFirstPose();
			if (firstPose) this.setPose(firstPose);
		};

		PoseElement.prototype.setPose = function(pose) {
			var _this = this;

			var onPoseComplete = this.props.onPoseComplete;
			var poseList = Array.isArray(pose) ? pose : [pose];
			Promise.all(
				poseList.map(function(key) {
					return key && _this.poser.set(key);
				})
			).then(function() {
				return onPoseComplete && onPoseComplete(pose);
			});
		};

		PoseElement.prototype.flushChildren = function() {
			var _this = this;

			this.children.forEach(function(_a) {
				var element = _a.element,
					poseConfig = _a.poseConfig,
					onRegistered = _a.onRegistered;
				return onRegistered(_this.poser.addChild(element, poseConfig));
			});
			this.children.clear();
		};

		PoseElement.prototype.render = function() {
			var elementType = this.props.elementType;
			return $n8$exports.createElement(
				$mfSv$var$PoseParentContext.Provider,
				{
					value: this.childrenHandlers
				},
				$n8$exports.createElement(
					elementType,
					$mfSv$var$pickAssign(this.shouldForwardProp, [
						this.getSetProps(),
						this.getRefs()
					])
				)
			);
		};

		return PoseElement;
	})($n8$exports.PureComponent);

	var $mfSv$var$supportedElements = [
		"a",
		"article",
		"aside",
		"audio",
		"b",
		"blockquote",
		"body",
		"br",
		"button",
		"canvas",
		"caption",
		"cite",
		"code",
		"col",
		"colgroup",
		"data",
		"datalist",
		"dialog",
		"div",
		"em",
		"embed",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"head",
		"header",
		"hgroup",
		"hr",
		"i",
		"iframe",
		"img",
		"input",
		"label",
		"legend",
		"li",
		"nav",
		"object",
		"ol",
		"option",
		"p",
		"param",
		"picture",
		"pre",
		"progress",
		"q",
		"section",
		"select",
		"span",
		"strong",
		"table",
		"tbody",
		"td",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"title",
		"tr",
		"ul",
		"video",
		"circle",
		"clipPath",
		"defs",
		"ellipse",
		"g",
		"image",
		"line",
		"linearGradient",
		"mask",
		"path",
		"pattern",
		"polygon",
		"polyline",
		"radialGradient",
		"rect",
		"stop",
		"svg",
		"text",
		"tspan"
	];
	var $mfSv$var$componentCache = new Map();

	var $mfSv$var$createComponentFactory = function(key) {
		var componentFactory = function(poseConfig) {
			if (poseConfig === void 0) {
				poseConfig = {};
			}

			var config;
			return function(_a) {
				var _b = _a.withParent,
					withParent = _b === void 0 ? true : _b,
					props = $vCxL$export$__rest(_a, ["withParent"]);
				config =
					config ||
					(typeof poseConfig === "function"
						? poseConfig(props)
						: poseConfig);
				return !withParent || props.parentValues
					? $n8$exports.createElement(
							$mfSv$var$PoseElement,
							$vCxL$export$__assign(
								{
									poseConfig: config,
									elementType: key
								},
								props
							)
					  )
					: $n8$exports.createElement(
							$mfSv$var$PoseParentContext.Consumer,
							null,
							function(parentCtx) {
								return $n8$exports.createElement(
									$mfSv$var$PoseElement,
									$vCxL$export$__assign(
										{
											poseConfig: config,
											elementType: key
										},
										props,
										parentCtx
									)
								);
							}
					  );
			};
		};

		$mfSv$var$componentCache.set(key, componentFactory);
		return componentFactory;
	};

	var $mfSv$var$getComponentFactory = function(key) {
		return $mfSv$var$componentCache.has(key)
			? $mfSv$var$componentCache.get(key)
			: $mfSv$var$createComponentFactory(key);
	};

	var $mfSv$export$default = function(component) {
		return $mfSv$var$getComponentFactory(component);
	};

	$mfSv$var$supportedElements.reduce(function(acc, key) {
		acc[key] = $mfSv$var$getComponentFactory(key);
		return acc;
	}, $mfSv$export$default);

	var $mfSv$var$getKey = function(child) {
		$KFGT$export$invariant(
			child && child.key !== null,
			"Every child of Transition must be given a unique key"
		);
		var childKey =
			typeof child.key === "number" ? child.key.toString() : child.key;
		return childKey.replace(".$", "");
	};

	var $mfSv$var$prependProps = function(element, props) {
		return $n8$exports.createElement(
			element.type,
			$vCxL$export$__assign(
				{
					key: element.key,
					ref: element.ref
				},
				props,
				element.props
			)
		);
	};

	var $mfSv$var$handleTransition = function(_a, _b) {
		var displayedChildren = _b.displayedChildren,
			finishedLeaving = _b.finishedLeaving,
			hasInitialized = _b.hasInitialized,
			prevChildren = _b.indexedChildren,
			scheduleChildRemoval = _b.scheduleChildRemoval;
		var targetChildren = _a.children,
			preEnterPose = _a.preEnterPose,
			enterPose = _a.enterPose,
			exitPose = _a.exitPose,
			animateOnMount = _a.animateOnMount,
			enterAfterExit = _a.enterAfterExit,
			flipMove = _a.flipMove,
			onRest = _a.onRest,
			propsForChildren = $vCxL$export$__rest(_a, [
				"children",
				"preEnterPose",
				"enterPose",
				"exitPose",
				"animateOnMount",
				"enterAfterExit",
				"flipMove",
				"onRest"
			]);
		targetChildren = $mfSv$var$makeChildList(targetChildren);
		var nextState = {
			displayedChildren: [],
			indexedChildren: {}
		};

		if ("production" !== "production") {
			$KFGT$export$warning(
				!propsForChildren.onPoseComplete,
				"<Transition/> (or <PoseGroup/>) doesn't accept onPoseComplete prop."
			);
		}

		var prevKeys = displayedChildren.map($mfSv$var$getKey);
		var nextKeys = targetChildren.map($mfSv$var$getKey);
		var hasPropsForChildren = Object.keys(propsForChildren).length !== 0;
		var entering = new Set(
			nextKeys.filter(function(key) {
				return (
					finishedLeaving.hasOwnProperty(key) ||
					prevKeys.indexOf(key) === -1
				);
			})
		);
		entering.forEach(function(key) {
			return delete finishedLeaving[key];
		});
		var leaving = [];
		var newlyLeaving = {};
		prevKeys.forEach(function(key) {
			if (entering.has(key)) {
				return;
			}

			var isLeaving = finishedLeaving.hasOwnProperty(key);

			if (!isLeaving && nextKeys.indexOf(key) !== -1) {
				return;
			}

			leaving.push(key);

			if (!isLeaving) {
				finishedLeaving[key] = false;
				newlyLeaving[key] = true;
			}
		});
		var moving = new Set(
			prevKeys.filter(function(key, i) {
				if (entering.has(key)) {
					return false;
				}

				var nextIndex = nextKeys.indexOf(key);
				return nextIndex !== -1 && i !== nextIndex;
			})
		);
		targetChildren.forEach(function(child) {
			var newChildProps = {};

			if (entering.has(child.key)) {
				if (hasInitialized || animateOnMount) {
					newChildProps.initialPose = preEnterPose;
				}

				newChildProps._pose = enterPose;
			} else if (moving.has(child.key) && flipMove) {
				newChildProps._pose = [enterPose, "flip"];
			} else {
				newChildProps._pose = enterPose;
			}

			var newChild = $n8$exports.cloneElement(child, newChildProps);
			nextState.indexedChildren[child.key] = newChild;
			nextState.displayedChildren.push(
				hasPropsForChildren
					? $mfSv$var$prependProps(newChild, propsForChildren)
					: newChild
			);
		});
		leaving.forEach(function(key) {
			var child = prevChildren[key];
			var newChild = newlyLeaving[key]
				? $n8$exports.cloneElement(child, {
						_pose: exitPose,
						onPoseComplete: function(pose) {
							scheduleChildRemoval(key);
							var onPoseComplete = child.props.onPoseComplete;
							onPoseComplete && onPoseComplete(pose);
						},
						popFromFlow: flipMove
				  })
				: child;
			var insertionIndex = prevKeys.indexOf(key);
			nextState.indexedChildren[child.key] = newChild;
			nextState.displayedChildren.splice(
				insertionIndex,
				0,
				hasPropsForChildren
					? $mfSv$var$prependProps(newChild, propsForChildren)
					: newChild
			);
		});
		return nextState;
	};

	var $mfSv$var$handleChildrenTransitions = function(props, state) {
		return $vCxL$export$__assign(
			{
				hasInitialized: true
			},
			$mfSv$var$handleTransition(props, state)
		);
	};

	var $mfSv$var$makeChildList = function(children) {
		var list = [];
		$n8$exports.Children.forEach(children, function(child) {
			return child && list.push(child);
		});
		return list;
	};

	var $mfSv$export$Transition = (function(_super) {
		$vCxL$export$__extends(Transition, _super);

		function Transition() {
			var _this =
				(_super !== null && _super.apply(this, arguments)) || this;

			_this.state = {
				displayedChildren: [],
				finishedLeaving: {},
				hasInitialized: false,
				indexedChildren: {},
				scheduleChildRemoval: function(key) {
					return _this.removeChild(key);
				}
			};
			return _this;
		}

		Transition.prototype.removeChild = function(key) {
			var _a = this.state,
				displayedChildren = _a.displayedChildren,
				finishedLeaving = _a.finishedLeaving;
			var _b = this.props,
				enterAfterExit = _b.enterAfterExit,
				onRest = _b.onRest;
			if (!finishedLeaving.hasOwnProperty(key)) return;
			finishedLeaving[key] = true;

			if (
				!Object.keys(finishedLeaving).every(function(leavingKey) {
					return finishedLeaving[leavingKey];
				})
			) {
				return;
			}

			var targetChildren = displayedChildren.filter(function(child) {
				return !finishedLeaving.hasOwnProperty(child.key);
			});
			var newState = enterAfterExit
				? $vCxL$export$__assign(
						{
							finishedLeaving: {}
						},
						$mfSv$var$handleChildrenTransitions(
							$vCxL$export$__assign({}, this.props, {
								enterAfterExit: false
							}),
							$vCxL$export$__assign({}, this.state, {
								displayedChildren: targetChildren
							})
						)
				  )
				: {
						finishedLeaving: {},
						displayedChildren: targetChildren
				  };
			this.setState(newState, onRest);
		};

		Transition.prototype.shouldComponentUpdate = function(
			nextProps,
			nextState
		) {
			return this.state !== nextState;
		};

		Transition.prototype.render = function() {
			return this.state.displayedChildren;
		};

		Transition.defaultProps = {
			flipMove: false,
			enterAfterExit: false,
			preEnterPose: "exit",
			enterPose: "enter",
			exitPose: "exit"
		};
		Transition.getDerivedStateFromProps = $mfSv$var$handleChildrenTransitions;
		return Transition;
	})($n8$exports.Component);

	var $mfSv$export$PoseGroup = (function(_super) {
		$vCxL$export$__extends(PoseGroup, _super);

		function PoseGroup() {
			return (_super !== null && _super.apply(this, arguments)) || this;
		}

		PoseGroup.prototype.render = function() {
			return $n8$exports.createElement(
				$mfSv$export$Transition,
				$vCxL$export$__assign({}, this.props)
			);
		};

		PoseGroup.defaultProps = {
			flipMove: true
		};
		return PoseGroup;
	})($n8$exports.Component);

	$mfSv$exports.default = $mfSv$export$default;
	$mfSv$exports.PoseGroup = $mfSv$export$PoseGroup;
	$mfSv$exports.Transition = $mfSv$export$Transition;
	// ASSET: index.ts
	var $QCb$exports = {};

	var $QCb$var$__importStar =
		($QCb$exports && $QCb$exports.__importStar) ||
		function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null)
				for (var k in mod) {
					if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
				}
			result["default"] = mod;
			return result;
		};

	Object.defineProperty($QCb$exports, "__esModule", {
		value: true
	});
	var $QCb$var$react_pose_1 = $QCb$var$__importStar($mfSv$exports);
	console.log($QCb$var$react_pose_1.default.div);
	console.log($QCb$var$react_pose_1.PoseGroup);

	if (typeof exports === "object" && typeof module !== "undefined") {
		// CommonJS
		module.exports = $QCb$exports;
	} else if (typeof define === "function" && define.amd) {
		// RequireJS
		define(function() {
			return $QCb$exports;
		});
	}
})();
