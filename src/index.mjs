/**
 * @param {string} path
 * @returns {Promise<void>}
 */
export function loadScript(path) {
    return new Promise((resolve, reject) => {
        const elem = document.querySelectorAll(`script[src="${path}"]`);

        if (elem.length > 0) {
            resolve();
        } else {
            console.log(`Loading script ${path}`);
            const script = document.createElement('script');
            script.src = path;
            script.setAttribute("type", "module");
            script.setAttribute("src", path);
            script.onload = () => {
                resolve()
            };
            script.onerror = (err) => {
                reject(err)
            };
            document.body.appendChild(script);
        }
    });
}
