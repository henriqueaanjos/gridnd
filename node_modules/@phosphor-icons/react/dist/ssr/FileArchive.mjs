var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    s.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      l.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => f(r, p(e));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/FileArchive.mjs";
const v = R((r, e) => /* @__PURE__ */ h.createElement(d, a(m({ ref: e }, r), { weights: n })));
v.displayName = "FileArchive";
export {
  v as FileArchive
};
