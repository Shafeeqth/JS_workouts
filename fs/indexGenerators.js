async function* printFrom100() {
    for (let i = 100; i > 0; i -= 2) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

(async function () {
    for await (let val of printFrom100()) {
        console.log(val);
    }
})();
