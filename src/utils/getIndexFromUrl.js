function getIndexFromUrl(url){
    return url.substr(34).slice(0, -1);
}

export default getIndexFromUrl;