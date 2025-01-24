var s = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && m(r, a, e[a]);
  if (o)
    for (var a of o(e))
      S.call(e, a) && m(r, a, e[a]);
  return r;
}, f = (r, e) => i(r, p(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/WaveformSlash.mjs";
const n = h((r, e) => /* @__PURE__ */ c.createElement(R, f(t({ ref: e }, r), { weights: d })));
n.displayName = "WaveformSlash";
export {
  n as WaveformSlash
};
