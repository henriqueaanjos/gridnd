var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import g, { forwardRef as E } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Engine.mjs";
const l = E((r, e) => /* @__PURE__ */ g.createElement(R, i(a({ ref: e }, r), { weights: d })));
l.displayName = "Engine";
export {
  l as Engine
};
