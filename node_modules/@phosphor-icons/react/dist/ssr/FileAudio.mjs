var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => p(o, s(e));
import c, { forwardRef as R } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/FileAudio.mjs";
const w = R((o, e) => /* @__PURE__ */ c.createElement(n, a(m({ ref: e }, o), { weights: u })));
w.displayName = "FileAudio";
export {
  w as FileAudio
};
