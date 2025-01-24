var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => n(o, p(e));
import l, { forwardRef as I } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/FileIni.mjs";
const F = I((o, e) => /* @__PURE__ */ l.createElement(d, a(m({ ref: e }, o), { weights: w })));
F.displayName = "FileIni";
export {
  F as FileIni
};
