function showhide() {
    const existingArticle = document.querySelector('article');
    if (existingArticle) {
        existingArticle.remove();
    } else {
        const article = document.createElement('article');
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    }
}

document.getElementById('button').addEventListener('click', showhide);