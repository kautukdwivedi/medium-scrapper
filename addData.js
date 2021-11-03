function addData(data) {
    const html = data.map(d => {
        let article = ""
        for(let i = 0; i < d.Article.length; i++) {
            article += d.Article[i] + '<br/>';
            if(article.length > 200) {
                break;
            }
        }
        return `
        <div class = "blog">
            <h2>${d.Number}</h2>
            <image class = "blog-image" src = "${d.Image}">
            <p><span>Title</span> : ${d.Title}</p>
            <p><span>Creator</span> : ${d.Creator}</p>
            <p><span>Article</span> : ${article.substr(0,200)}</p>
        </div>
        `;
    }).join('');
    //console.log(html);
    document.getElementById('blogs').insertAdjacentHTML("afterbegin",html);
}