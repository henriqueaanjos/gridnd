var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    l.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      n.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => p(r, s(e));
import c, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/FileIni.mjs";
const w = I((r, e) => /* @__PURE__ */ c.createElement(R, a(m({ ref: e }, r), { weights: d })));
w.displayName = "FileIni";
export {
  w as FileIni
};
