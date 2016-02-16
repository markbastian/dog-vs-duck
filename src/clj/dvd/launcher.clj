(ns dvd.launcher
  (:gen-class)
  (:require [dvd.game-launcher :as fl]))

(defn -main [& _] (fl/launch-sketch { :width 800 :height 600 }))
