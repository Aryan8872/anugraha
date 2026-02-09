// utils/usePreloadedScript.js
import { useState, useEffect } from "react";

/**
 * Hook to load a preloaded script dynamically.
 * @param {string} scriptName - Part of the filename to match in preload manifest
 * @returns {object} - The imported module or null while loading
 */
export function usePreloadedScript(scriptName) {
  const [module, setModule] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadScript() {
      try {
        const manifest = await fetch("/preload-manifest.json").then((res) =>
          res.json()
        );
        const scriptPath = manifest.preloads.find((path) =>
          path.includes(scriptName)
        );

        if (!scriptPath)
          throw new Error(`Script ${scriptName} not found in manifest`);

        const importedModule = await import(scriptPath);
        if (isMounted) setModule(importedModule);
      } catch (err) {
        console.error(err);
      }
    }

    loadScript();

    return () => {
      isMounted = false;
    };
  }, [scriptName]);

  return module;
}
