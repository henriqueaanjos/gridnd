var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    w.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import N, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/NetworkX.mjs";
const l = R((r, e) => /* @__PURE__ */ N.createElement(d, f(a({ ref: e }, r), { weights: k })));
l.displayName = "NetworkX";
export {
  l as NetworkX
};
