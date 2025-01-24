var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (a, e, o) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, m = (a, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(a, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && t(a, o, e[o]);
  return a;
}, s = (a, e) => i(a, p(e));
import P, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/PlayPause.mjs";
const u = n((a, e) => /* @__PURE__ */ P.createElement(y, s(m({ ref: e }, a), { weights: d })));
u.displayName = "PlayPause";
export {
  u as PlayPause
};
