(ns dvd.quil-renderer
  (:require [quil.core :as q #?@(:cljs [:include-macros true])]))

(defn draw [{:keys [world duck-pos dog-pos dog-speed]}]
  (let [{ :keys [minx maxx miny maxy] } world
        dx (- maxx minx) dy (- maxy miny)
        max-world-dim (max dx dy)
        w (q/width) h (q/height)
        min-screen-dim (min w h)]
    (do
      (q/background 0 0 0)
      (q/text (str "Speed:" (/ dog-speed 100.0)) 10 20)
      (q/translate (* 0.5 w) (* 0.5 h))
      (q/scale 1 -1)
      (q/scale (/ min-screen-dim max-world-dim))
      (q/stroke-weight (/ max-world-dim min-screen-dim 0.5))
      (q/no-fill)
      (q/stroke 255 255 0)
      (q/ellipse 0 0 2 2)
      (q/with-translation
        [(first duck-pos) (second duck-pos)]
        (q/stroke 0 255 255)
        (q/ellipse 0 0 0.05 0.05))
      (q/with-translation
        [(first dog-pos) (second dog-pos)]
        (q/stroke 255 0 0)
        (q/ellipse 0 0 0.05 0.05))
      )))