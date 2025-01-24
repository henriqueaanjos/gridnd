var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, s(e));
import c, { forwardRef as x } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/ClipboardText.mjs";
const n = x((r, e) => /* @__PURE__ */ c.createElement(R, i(m({ ref: e }, r), { weights: b })));
n.displayName = "ClipboardText";
export {
  n as ClipboardText
};
