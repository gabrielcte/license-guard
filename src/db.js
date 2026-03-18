/**
 * License Guard — Package Database
 *
 * Cada entrada segue o formato:
 * {
 *   k:       string[]  — termos de busca (nome, alias, abreviações)
 *   name:    string    — nome exibido
 *   ver:     string    — versão atual
 *   license: string    — 'free' | 'open' | 'prop' | 'fw'
 *   cat:     string    — categoria
 *   desc:    string    — descrição curta
 * }
 *
 * Tipos de licença:
 *   free — Free Software (GPL, MIT, Apache, BSD...)
 *   open — Open Source aprovado pela OSI
 *   prop — Proprietário (comercial pago)
 *   fw   — Freeware (gratuito, código fechado)
 *
 * Para adicionar um novo pacote, basta inserir um objeto nesse array.
 */

const DB = [

  // ── CAD / 3D ──────────────────────────────────────────────
  { k: ['freecad', 'free cad'], name: 'FreeCAD', ver: '0.21.2', license: 'free', cat: 'CAD/3D', desc: 'Modelador 3D paramétrico de código aberto para engenharia e design de produto.' },
  { k: ['blender'], name: 'Blender', ver: '4.1.0', license: 'free', cat: 'CAD/3D', desc: 'Suite de criação 3D open source: modelagem, animação, renderização e VFX.' },
  { k: ['openscad', 'open scad'], name: 'OpenSCAD', ver: '2021.01', license: 'free', cat: 'CAD/3D', desc: 'Modelador 3D baseado em scripts, ideal para peças mecânicas precisas.' },
  { k: ['librecad', 'libre cad'], name: 'LibreCAD', ver: '2.2.0', license: 'free', cat: 'CAD/3D', desc: 'Aplicativo CAD 2D de código aberto baseado no Qt.' },
  { k: ['solvespace', 'solve space'], name: 'SolveSpace', ver: '3.1', license: 'free', cat: 'CAD/3D', desc: 'Modelador 3D paramétrico e ferramenta de análise de estruturas.' },
  { k: ['solidworks', 'solid works'], name: 'SolidWorks', ver: '2024', license: 'prop', cat: 'CAD/3D', desc: 'Software CAD 3D profissional da Dassault Systèmes para engenharia.' },
  { k: ['autocad', 'auto cad'], name: 'AutoCAD', ver: '2025', license: 'prop', cat: 'CAD/3D', desc: 'Software de desenho técnico 2D/3D da Autodesk.' },
  { k: ['fusion', 'fusion360', 'fusion 360'], name: 'Fusion 360', ver: '2.0', license: 'prop', cat: 'CAD/3D', desc: 'Plataforma CAD/CAM/CAE da Autodesk — gratuita para uso pessoal limitado.' },

  // ── Imagem ────────────────────────────────────────────────
  { k: ['gimp'], name: 'GIMP', ver: '2.10.36', license: 'free', cat: 'Imagem', desc: 'Editor de imagens rasterizadas de código aberto (GNU Image Manipulation Program).' },
  { k: ['krita'], name: 'Krita', ver: '5.2.2', license: 'free', cat: 'Imagem', desc: 'Aplicativo de pintura digital open source focado em artistas e ilustradores.' },
  { k: ['inkscape'], name: 'Inkscape', ver: '1.3.2', license: 'free', cat: 'Imagem', desc: 'Editor de gráficos vetoriais SVG de código aberto.' },
  { k: ['darktable', 'dark table'], name: 'Darktable', ver: '4.6.1', license: 'free', cat: 'Imagem', desc: 'Gerenciador de fotos e revelador RAW open source.' },
  { k: ['rawtherapee', 'raw therapee'], name: 'RawTherapee', ver: '5.10', license: 'free', cat: 'Imagem', desc: 'Processador de imagens RAW de código aberto.' },
  { k: ['photoshop', 'adobe photoshop'], name: 'Adobe Photoshop', ver: '25.9', license: 'prop', cat: 'Imagem', desc: 'Editor de imagens profissional da Adobe — referência da indústria.' },
  { k: ['illustrator', 'adobe illustrator'], name: 'Adobe Illustrator', ver: '28.4', license: 'prop', cat: 'Imagem', desc: 'Editor de gráficos vetoriais profissional da Adobe.' },
  { k: ['affinity photo'], name: 'Affinity Photo', ver: '2.4', license: 'prop', cat: 'Imagem', desc: 'Editor de fotos profissional da Serif — alternativa ao Photoshop.' },
  { k: ['affinity designer'], name: 'Affinity Designer', ver: '2.4', license: 'prop', cat: 'Imagem', desc: 'Software de design gráfico vetorial da Serif.' },
  { k: ['pixlr'], name: 'Pixlr', ver: '3.9', license: 'fw', cat: 'Imagem', desc: 'Editor de imagens online gratuito com versão desktop.' },

  // ── Áudio ─────────────────────────────────────────────────
  { k: ['audacity'], name: 'Audacity', ver: '3.5.1', license: 'free', cat: 'Áudio', desc: 'Editor e gravador de áudio multi-trilha de código aberto.' },
  { k: ['ardour'], name: 'Ardour', ver: '8.4', license: 'free', cat: 'Áudio', desc: 'DAW profissional open source para gravação e mixagem de áudio.' },
  { k: ['lmms'], name: 'LMMS', ver: '1.2.2', license: 'free', cat: 'Áudio', desc: 'DAW open source para produção musical — alternativa ao FL Studio.' },
  { k: ['reaper'], name: 'REAPER', ver: '7.12', license: 'prop', cat: 'Áudio', desc: 'DAW profissional com licença acessível — muito popular entre produtores.' },
  { k: ['ableton', 'ableton live'], name: 'Ableton Live', ver: '12.0', license: 'prop', cat: 'Áudio', desc: 'DAW para produção musical e performance ao vivo.' },
  { k: ['fl studio', 'fruity loops'], name: 'FL Studio', ver: '21.2', license: 'prop', cat: 'Áudio', desc: 'DAW popular para produção de música eletrônica.' },
  { k: ['spotify'], name: 'Spotify', ver: '1.2.32', license: 'fw', cat: 'Áudio', desc: 'Serviço de streaming de música — cliente freeware.' },

  // ── Áudio/Vídeo ───────────────────────────────────────────
  { k: ['vlc'], name: 'VLC Media Player', ver: '3.0.20', license: 'free', cat: 'Áudio/Vídeo', desc: 'Player de mídia multiplataforma e de código aberto.' },
  { k: ['mpv'], name: 'mpv', ver: '0.37.0', license: 'free', cat: 'Áudio/Vídeo', desc: 'Player de mídia open source minimalista e rápido.' },

  // ── Vídeo ─────────────────────────────────────────────────
  { k: ['obs', 'obs studio'], name: 'OBS Studio', ver: '30.1.2', license: 'free', cat: 'Vídeo', desc: 'Software livre para gravação e streaming de vídeo.' },
  { k: ['kdenlive'], name: 'Kdenlive', ver: '24.02.2', license: 'free', cat: 'Vídeo', desc: 'Editor de vídeo open source baseado no MLT Framework.' },
  { k: ['handbrake', 'hand brake'], name: 'HandBrake', ver: '1.8.0', license: 'free', cat: 'Vídeo', desc: 'Transcodificador de vídeo open source multiplataforma.' },
  { k: ['openshot', 'open shot'], name: 'OpenShot', ver: '3.1.1', license: 'free', cat: 'Vídeo', desc: 'Editor de vídeo open source simples e intuitivo.' },
  { k: ['shotcut'], name: 'Shotcut', ver: '24.04', license: 'free', cat: 'Vídeo', desc: 'Editor de vídeo open source multiplataforma.' },
  { k: ['davinci', 'davinci resolve'], name: 'DaVinci Resolve', ver: '19.0', license: 'fw', cat: 'Vídeo', desc: 'Editor de vídeo profissional com versão gratuita robusta da Blackmagic.' },
  { k: ['premiere', 'adobe premiere'], name: 'Adobe Premiere Pro', ver: '24.3', license: 'prop', cat: 'Vídeo', desc: 'Editor de vídeo profissional da Adobe.' },

  // ── Dev ───────────────────────────────────────────────────
  { k: ['git'], name: 'Git', ver: '2.44.0', license: 'free', cat: 'Dev', desc: 'Sistema de controle de versão distribuído.' },
  { k: ['nodejs', 'node.js', 'node'], name: 'Node.js', ver: '20.12.2', license: 'free', cat: 'Dev', desc: 'Ambiente de execução JavaScript baseado no motor V8.' },
  { k: ['python'], name: 'Python', ver: '3.12.3', license: 'free', cat: 'Dev', desc: 'Linguagem de programação de propósito geral.' },
  { k: ['neovim', 'nvim'], name: 'Neovim', ver: '0.9.5', license: 'free', cat: 'Dev', desc: 'Editor de texto baseado no Vim, extensível via Lua.' },
  { k: ['vim'], name: 'Vim', ver: '9.1', license: 'free', cat: 'Dev', desc: 'Editor de texto modal altamente configurável.' },
  { k: ['emacs'], name: 'GNU Emacs', ver: '29.3', license: 'free', cat: 'Dev', desc: 'Editor de texto extensível e personalizável da GNU.' },
  { k: ['vscodium'], name: 'VSCodium', ver: '1.88.0', license: 'free', cat: 'Dev', desc: 'Build open source do VS Code sem telemetria da Microsoft (MIT).' },
  { k: ['insomnia'], name: 'Insomnia', ver: '9.2', license: 'open', cat: 'Dev', desc: 'Cliente REST/GraphQL open source.' },
  { k: ['dbeaver'], name: 'DBeaver', ver: '24.0', license: 'free', cat: 'Dev', desc: 'Ferramenta universal de banco de dados open source.' },
  { k: ['vscode', 'visual studio code'], name: 'Visual Studio Code', ver: '1.88.0', license: 'prop', cat: 'Dev', desc: 'Editor de código da Microsoft — código fechado, gratuito.' },
  { k: ['jetbrains', 'intellij'], name: 'IntelliJ IDEA', ver: '2024.1', license: 'prop', cat: 'Dev', desc: 'IDE Java/Kotlin da JetBrains — versão Community é open source.' },
  { k: ['pycharm'], name: 'PyCharm', ver: '2024.1', license: 'prop', cat: 'Dev', desc: 'IDE Python da JetBrains — versão Community é open source.' },
  { k: ['docker'], name: 'Docker Desktop', ver: '4.29.0', license: 'prop', cat: 'Dev', desc: 'Plataforma de contêineres — Docker Engine é open source, Desktop é proprietário.' },
  { k: ['postman'], name: 'Postman', ver: '11.0', license: 'fw', cat: 'Dev', desc: 'Plataforma de API — cliente desktop freeware.' },

  // ── Navegadores ───────────────────────────────────────────
  { k: ['firefox', 'mozilla firefox'], name: 'Mozilla Firefox', ver: '125.0', license: 'free', cat: 'Navegador', desc: 'Navegador web de código aberto da Mozilla Foundation.' },
  { k: ['chromium'], name: 'Chromium', ver: '124.0', license: 'free', cat: 'Navegador', desc: 'Navegador open source no qual o Chrome é baseado.' },
  { k: ['brave'], name: 'Brave', ver: '1.65', license: 'open', cat: 'Navegador', desc: 'Navegador focado em privacidade baseado no Chromium (MPL 2.0).' },
  { k: ['chrome', 'google chrome'], name: 'Google Chrome', ver: '124.0', license: 'prop', cat: 'Navegador', desc: 'Navegador web proprietário do Google.' },
  { k: ['opera'], name: 'Opera', ver: '109.0', license: 'prop', cat: 'Navegador', desc: 'Navegador web proprietário com VPN integrado.' },
  { k: ['vivaldi'], name: 'Vivaldi', ver: '6.7', license: 'prop', cat: 'Navegador', desc: 'Navegador altamente customizável com código parcialmente proprietário.' },

  // ── Escritório ────────────────────────────────────────────
  { k: ['libreoffice', 'libre office'], name: 'LibreOffice', ver: '24.2.2', license: 'free', cat: 'Escritório', desc: 'Suite de escritório de código aberto completa.' },
  { k: ['onlyoffice', 'only office'], name: 'ONLYOFFICE', ver: '8.0', license: 'open', cat: 'Escritório', desc: 'Suite de escritório open source compatível com Microsoft Office.' },
  { k: ['logseq'], name: 'Logseq', ver: '0.10.9', license: 'open', cat: 'Escritório', desc: 'App de notas e base de conhecimento open source (AGPL-3.0).' },
  { k: ['office', 'microsoft office'], name: 'Microsoft Office', ver: '2024', license: 'prop', cat: 'Escritório', desc: 'Suite de produtividade proprietária da Microsoft.' },
  { k: ['notion'], name: 'Notion', ver: '2.2.9', license: 'prop', cat: 'Escritório', desc: 'Plataforma de notas e colaboração proprietária.' },
  { k: ['obsidian'], name: 'Obsidian', ver: '1.5.12', license: 'prop', cat: 'Escritório', desc: 'App de notas baseado em Markdown — gratuito para uso pessoal.' },
  { k: ['wps', 'wps office'], name: 'WPS Office', ver: '12.2', license: 'fw', cat: 'Escritório', desc: 'Suite de escritório gratuita compatível com formatos MS Office.' },

  // ── Comunicação ───────────────────────────────────────────
  { k: ['signal'], name: 'Signal', ver: '7.6', license: 'free', cat: 'Comunicação', desc: 'Mensageiro focado em privacidade, totalmente open source (AGPL).' },
  { k: ['telegram'], name: 'Telegram', ver: '5.1', license: 'free', cat: 'Comunicação', desc: 'Mensageiro — cliente open source (GPLv2), servidor proprietário.' },
  { k: ['element', 'matrix'], name: 'Element', ver: '1.11.64', license: 'free', cat: 'Comunicação', desc: 'Cliente Matrix open source para comunicação descentralizada.' },
  { k: ['discord'], name: 'Discord', ver: '0.0.299', license: 'fw', cat: 'Comunicação', desc: 'Plataforma de comunicação — cliente gratuito, código fechado.' },
  { k: ['zoom'], name: 'Zoom', ver: '5.17.10', license: 'fw', cat: 'Comunicação', desc: 'Plataforma de videoconferência — freeware com planos pagos.' },
  { k: ['slack'], name: 'Slack', ver: '4.38.1', license: 'prop', cat: 'Comunicação', desc: 'Plataforma de comunicação corporativa proprietária.' },
  { k: ['teams', 'microsoft teams'], name: 'Microsoft Teams', ver: '24.4', license: 'prop', cat: 'Comunicação', desc: 'Plataforma de colaboração da Microsoft.' },

  // ── Segurança ─────────────────────────────────────────────
  { k: ['keepass', 'keepassxc'], name: 'KeePassXC', ver: '2.7.7', license: 'free', cat: 'Segurança', desc: 'Gerenciador de senhas open source offline.' },
  { k: ['bitwarden'], name: 'Bitwarden', ver: '2024.4', license: 'free', cat: 'Segurança', desc: 'Gerenciador de senhas open source com sincronização em nuvem.' },
  { k: ['veracrypt', 'vera crypt'], name: 'VeraCrypt', ver: '1.26.7', license: 'free', cat: 'Segurança', desc: 'Software de criptografia de disco open source.' },
  { k: ['wireshark', 'wire shark'], name: 'Wireshark', ver: '4.2.4', license: 'free', cat: 'Segurança', desc: 'Analisador de protocolos de rede open source.' },
  { k: ['nmap'], name: 'Nmap', ver: '7.95', license: 'free', cat: 'Segurança', desc: 'Scanner de rede e auditoria de segurança open source.' },

  // ── Utilitários ───────────────────────────────────────────
  { k: ['7zip', '7-zip'], name: '7-Zip', ver: '24.05', license: 'free', cat: 'Utilitários', desc: 'Arquivador de código aberto com alta taxa de compressão.' },
  { k: ['notepad++', 'notepad plus'], name: 'Notepad++', ver: '8.6.4', license: 'free', cat: 'Utilitários', desc: 'Editor de texto open source para Windows.' },
  { k: ['ueli'], name: 'Ueli', ver: '9.1', license: 'free', cat: 'Utilitários', desc: 'Launcher open source multiplataforma.' },
  { k: ['albert'], name: 'Albert', ver: '0.22', license: 'free', cat: 'Utilitários', desc: 'Launcher de aplicativos open source para Linux.' },
  { k: ['everything'], name: 'Everything', ver: '1.4.1', license: 'fw', cat: 'Utilitários', desc: 'Ferramenta de busca instantânea de arquivos para Windows — freeware.' },
  { k: ['winrar', 'win rar'], name: 'WinRAR', ver: '7.00', license: 'prop', cat: 'Utilitários', desc: 'Software de compressão de arquivos shareware.' },

  // ── Virtualização ─────────────────────────────────────────
  { k: ['virtualbox', 'virtual box'], name: 'VirtualBox', ver: '7.0.16', license: 'free', cat: 'Virtualização', desc: 'Software de virtualização open source da Oracle.' },
  { k: ['qemu'], name: 'QEMU', ver: '8.2.2', license: 'free', cat: 'Virtualização', desc: 'Emulador e virtualizador open source.' },
  { k: ['vmware'], name: 'VMware Workstation', ver: '17.5', license: 'prop', cat: 'Virtualização', desc: 'Plataforma de virtualização profissional da VMware/Broadcom.' },
];
