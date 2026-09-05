/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import { boot } from "./wuzhou-game.js";

export default function App() {
  const isBooted = useRef(false);

  useEffect(() => {
    if (!isBooted.current) {
      boot();
      isBooted.current = true;
    }
  }, []);

  return <div id="game-container"></div>;
}
