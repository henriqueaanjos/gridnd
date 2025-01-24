var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && i(r, o, e[o]);
  if (a)
    for (var o of a(e))
      n.call(e, o) && i(r, o, e[o]);
  return r;
}, m = (r, e) => p(r, s(e));
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/SpeakerHifi.mjs";
const H = k((r, e) => /* @__PURE__ */ d.createElement(l, m(t({ ref: e }, r), { weights: w })));
H.displayName = "SpeakerHifi";
export {
  H as SpeakerHifi
};
