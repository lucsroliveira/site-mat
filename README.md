# Portfólio de Matheus H. — GitHub Pages e Vercel

Versão estática em HTML, CSS e JavaScript puro, adaptada da publicação pública de https://www.theusdesign.com.br/ em 08/10/2026.

O site não depende de frameworks, bibliotecas externas, instalação de pacotes ou processo de build. Imagens, vídeos, fontes e scripts ficam dentro do próprio projeto. Os links relativos funcionam no domínio principal e em `usuario.github.io/nome-do-repositorio/`.

## Publicar

1. Extraia o ZIP.
2. Coloque **o conteúdo da pasta extraída** na raiz do repositório: `index.html`, `css/`, `js/`, `assets/`, `contato/`, `sobre-mim/`, `portfólio/`, `404.html` e `.nojekyll`. Não coloque outra pasta envolvendo o site.
3. Envie os arquivos para a branch `main` com Git ou GitHub Desktop. O pacote contém vídeos grandes; prefira essas opções ao upload manual pela página do GitHub.
4. No repositório, abra **Settings → Pages**.
5. Em **Source**, selecione **Deploy from a branch**.
6. Selecione **main**, pasta **/(root)**, e clique em **Save**.
7. Aguarde a publicação e use o endereço mostrado nessa tela.

Documentação oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Não há arquivo CNAME: a configuração de domínio personalizado fica para quando você decidir conectar o domínio. Inclua o arquivo oculto `.nojekyll` ao enviar o projeto.

## Publicar na Vercel

1. Importe o repositório no painel da Vercel ou conecte um repositório Git existente.
2. Em **Framework Preset**, selecione **Other**.
3. Deixe **Build Command** e **Output Directory** vazios; o `index.html` está na raiz.
4. Clique em **Deploy**. Não é necessário criar configuração de build ou instalar dependências.

## Editar

- `index.html`: página inicial.
- `portfólio/index.html`: lista de projetos.
- `portfólio/<projeto>/index.html`: conteúdo de cada projeto.
- `sobre-mim/index.html` e `contato/index.html`: páginas correspondentes.
- `css/`: estilos de cada página e ajustes compartilhados em `site.css`.
- `js/site.js`: menu, filtros, efeito de digitação e contato.
- `assets/media/`: imagens e vídeos locais.
- `assets/fonts/`: fontes tipográficas locais.

Os estilos e atributos do layout são locais; não há runtime ou serviço de terceiros necessário para renderizar as páginas. Para editar categorias, altere `data-category` nos cartões da página inicial.

## Contato

O formulário valida nome, e-mail e mensagem e abre o aplicativo de e-mail do visitante com a mensagem preenchida. **Ele não envia automaticamente**: o visitante confirma o envio no aplicativo. O endereço de e-mail também permanece disponível como link direto.

Para receber mensagens diretamente pelo formulário sem aplicativo de e-mail, será necessário configurar um serviço de formulários e adaptar o envio. Nenhuma conta ou serviço externo foi criado nesta versão.

## Verificação

Referências locais de páginas, imagens, vídeos, CSS, fontes e JavaScript foram conferidas. A página inicial, o filtro de projetos, o menu e a página de contato foram verificados no navegador. Não há publicação feita no GitHub ou na Vercel: o projeto está preparado para você conectar ao seu repositório.

A página 404 é independente para funcionar também em endereços inexistentes com vários níveis. Animações e interações são implementadas em JavaScript simples.
