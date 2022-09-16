export default async function router() {
    let hash = window.location.hash.slice(1);
    if (!hash) return await import(`./home.js`)
        .then(module => module.default);;
    return await import(`./${hash}.js`)
        .then(module => module.default);
}