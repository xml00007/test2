const sendRequest = (urls, max, callback) => {
    let finished = 0;
    const total = urls.length;
    const handler = () => {
        if (urls.length) {
            const url = urls.shift();
            fetch(url).then(() => {
                finished++;
                handler();
            }).catch(e => {
                // urls.push(url);
                // handler()
                throw Error(e)
            })
        }
        if (finished >= total) {
            callback()
        }
    }
    for (let i = 0; i < max; i++) {
        handler()
    }
}
