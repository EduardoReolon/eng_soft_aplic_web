/**
 * códigos comuns a todas as páginas
 * aqui serão criados menus, links e demais conteúdos que serão visíveis em todas as páginas
 */

// path atual para saber o caminho das proximas páginas
const currentPath = window.location.pathname.replace(/.+eng_soft_aplic_web\//, '').split('/');
if (currentPath.at(-1).match(/\./)) currentPath.pop()
console.log(window.location.pathname, currentPath)
const pathToRoot = currentPath.length
    ? currentPath.map(() => '..').join('/')
    : '';
// para poder testar localmente, o nome do arquivo precisa ser informado
const pathWithFileName = !!window.location.pathname.match(/^\/[A-Z]:/);
const fileName = pathWithFileName ? '/index.html' : '';

function baseURL(rootPath = [], addFileName = true) {
    // retorna o path relativo, com base no atual
    // rootPath é sempre o caminho partindo da raiz

    // se o path for o current, não recarregará a página
    if (JSON.stringify(rootPath) === JSON.stringify(currentPath)) return '';

    const target = `${rootPath.length && currentPath.length ? '/' : ''}${rootPath.join('/')}`;
    return `${pathToRoot}${target}${addFileName ? fileName : ''}`;
}

function startGeneral() {
    const nav = document.getElementById('navWebsite');

    // lista de todos os links que aparecerão nas páginas
    const links = [
        {text: 'Página inicial', href: []},
        {text: 'Sobre mim', href: ['aboutme']},
        {text: 'Formação acadêmica', href: ['college']},
        {text: 'Portifólio pessoal', href: ['portfolio']},
        {text: 'Contato', href: ['contact']},
    ]

    // implementação dos links no body
    for (const link of links) {
        const container = document.createElement('div');
        const ancor = document.createElement('a');
        ancor.innerHTML = link.text;
        ancor.href = baseURL(link.href);
        container.appendChild(ancor);
        nav.appendChild(container)
    }
}
