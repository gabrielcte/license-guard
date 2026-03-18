# License Guard

Aplicativo web que verifica o tipo de licença de softwares antes de instalar, permitindo controlar quais categorias de licença são aceitas na sua máquina.

## Funcionalidades

- **Busca por nome ou categoria** — encontra pacotes por nome completo, abreviação ou categoria (ex: "cad", "audio", "dev")
- **Política configurável** — habilite/desabilite cada tipo de licença com um toggle
- **80+ pacotes indexados** — CAD/3D, imagem, áudio, vídeo, dev, navegadores, escritório, comunicação, segurança, utilitários e virtualização
- **Histórico de instalações** — registra tudo que foi instalado na sessão
- **Dark mode automático** — respeita a preferência do sistema operacional
- **Responsivo** — funciona em desktop e mobile
- **Zero dependências** — HTML, CSS e JS puro

## Tipos de licença suportados

| Tipo | Exemplos | Descrição |
|------|----------|-----------|
| `free` | GPL, MIT, Apache, BSD | Liberdade de usar, estudar, modificar e redistribuir |
| `open` | MPL, AGPL, licenças OSI | Código disponível com restrições variadas |
| `prop` | Adobe, Microsoft | Código fechado, geralmente pago |
| `fw`   | Discord, Zoom, DaVinci | Gratuito para uso, mas código fechado |

## Como usar

Não requer build nem dependências. Basta abrir o `index.html` no navegador:

```bash
git clone https://github.com/seu-usuario/license-guard.git
cd license-guard
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Ou com um servidor local:

```bash
python3 -m http.server 8080
# acesse http://localhost:8080
```

## Estrutura

```
license-guard/
├── index.html       # Página principal
├── assets/
│   └── style.css    # Estilos (dark mode, responsivo)
└── src/
    ├── db.js        # Base de dados de pacotes
    └── app.js       # Lógica da aplicação
```

## Adicionar novos pacotes

Edite `src/db.js` e insira um objeto no array `DB`:

```js
{
  k: ['nome-busca', 'alias'],  // termos de busca
  name: 'Nome Exibido',
  ver: '1.0.0',
  license: 'free',             // 'free' | 'open' | 'prop' | 'fw'
  cat: 'Categoria',
  desc: 'Descrição curta.'
}
```

## Roadmap

- [ ] Integração com APIs de licença (SPDX, ClearlyDefined)
- [ ] Busca em tempo real (debounce)
- [ ] Exportar política como JSON
- [ ] Perfis de política (ex: "apenas open source", "corporativo")
- [ ] Versão Electron com integração real com apt / brew / winget

## Licença

MIT
