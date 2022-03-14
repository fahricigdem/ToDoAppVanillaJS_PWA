if (navigator.serviceWorker != null) {
    navigator.serviceWorker.register('/ToDoAppVanillaJS_PWA/sw.js', { scope: '/ToDoAppVanillaJS_PWA/' })
        .then(function (registration) {
            console.log('Registered events at scope: ', registration.scope);
        });
}