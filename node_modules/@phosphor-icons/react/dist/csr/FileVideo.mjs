var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      d.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => p(o, s(e));
import l, { forwardRef as n } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/FileVideo.mjs";
const I = n((o, e) => /* @__PURE__ */ l.createElement(w, a(m({ ref: e }, o), { weights: F })));
I.displayName = "FileVideo";
export {
  I as FileVideo
};
