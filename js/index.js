const copyBtn = document.getElementById('copyBtn');
const codeSnippet = document.getElementById('code-snippet');


copyBtn.addEventListener('click', async () => {
    const code = codeSnippet.textContent;

    await navigator.clipboard.writeText(code);

    copyBtn.querySelector('span').textContent = 'Copied!';

    setTimeout(() => {
        copyBtn.querySelector('span').textContent = 'Copy';
    }, 2000);
})