let cacheData = "appV1";
this.addEventListener("install",(event)=>{
    event.waitUntill(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                ''
            ])
        })
    )
})
