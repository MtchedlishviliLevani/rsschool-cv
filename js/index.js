const copyBtn = document.getElementById('copyBtn');
const codeSnippet = document.getElementById('code-snippet');


copyBtn.addEventListener('click', async () => {
    const code = codeSnippet.textContent;

    await navigator.clipboard.writeText(code);

    copyBtn.querySelector('span').textContent = 'Copied!';

    setTimeout(() => {
        copyBtn.querySelector('span').textContent = 'Copy';
    }, 2000);
});


const burgerMenu = document.querySelector(".burger-menu");
const creativeDockWrapper = document.querySelector(".creative-dock-wrapper");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("open");
    creativeDockWrapper.classList.toggle("open");
});