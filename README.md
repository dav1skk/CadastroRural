# Cadastro Rural

Portal web de apoio ao **Cadastro Rural** do Incra, com navegação por serviços, normas, material de apoio, trilhas de capacitação e painéis informativos. A interface segue referências visuais do ecossistema **gov.br** (barra superior, tipografia e componentes institucionais).

## Funcionalidades

- **Início** — mapa interativo das unidades de atendimento presencial e guia de acesso rápido a sistemas (DCR, SNCR, CCIR, entre outros).
- **Serviços de cadastro** — cards e links para serviços e fluxos de cadastro.
- **Normas de cadastro** — seções colapsáveis com normativos e referências.
- **Material de apoio** — documentação e links úteis.
- **Capacitação** — páginas dedicadas a Unidade Municipal, Programa Terra Cidadã, capacitação interna e Treina gov.br.
- **Painel** — visões sobre estrutura, DCR, auditoria, CNIR e descentralização (figuras, vídeos e downloads configuráveis).
- **Busca no cabeçalho** — índice de conteúdo agregado a partir dos arquivos de configuração.

## Stack

| Camada    | Tecnologias                                      |
| --------- | ------------------------------------------------ |
| Frontend  | React 19, TypeScript, Vite, Tailwind CSS 4, React Router |
| Backend   | FastAPI, Uvicorn                                 |
| UI        | Radix UI (Slot), Lucide React, utilitários `clsx` / `tailwind-merge` |

O conteúdo editorial (links, títulos, seções dos painéis) é mantido em **arquivos TypeScript** em `frontend/src/config/`, sem CMS — alterações de texto e URLs são feitas diretamente no código.

## Estrutura do repositório

```
Automacao/
├── backend/           # API FastAPI (health check; base para integrações)
│   ├── app/
│   │   └── main.py
│   ├── requirements.txt
│   └── run.py
├── frontend/          # Aplicação React (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/   # UI reutilizável (gov, painel, capacitação…)
│   │   ├── config/       # Conteúdo e navegação
│   │   ├── pages/        # Uma página por rota
│   │   └── lib/
│   └── package.json
└── README.md
```

## Pré-requisitos

- **Node.js** 20+ (recomendado para o frontend)
- **Python** 3.11+ (para o backend)
- npm (ou compatível) na pasta `frontend/`

## Como executar

### Frontend (desenvolvimento)

Na raiz do repositório (recomendado):

```bash
npm install --prefix frontend
npm run dev
```

Ou diretamente em `frontend/`:

```bash
cd frontend
npm install
npm run dev
```

A aplicação sobe em [http://localhost:5173](http://localhost:5173) (porta padrão do Vite).

### Backend (opcional)

O proxy do Vite encaminha requisições de `/api/*` para `http://127.0.0.1:8000` (útil quando houver endpoints além do health check).

```bash
cd backend
python -m venv .venv

# Windows (PowerShell)
.\.venv\Scripts\Activate.ps1

pip install -r requirements.txt
python run.py
```

Verificação: [http://127.0.0.1:8000/health](http://127.0.0.1:8000/health) deve retornar `{"status":"ok"}`.

Variáveis de ambiente opcionais: copie `backend/.env.example` para `backend/.env` e ajuste `API_HOST` / `API_PORT` se necessário.

## Scripts do frontend

| Comando           | Descrição                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento        |
| `npm run build`   | Typecheck + build de produção em `dist/` |
| `npm run preview` | Pré-visualização do build          |
| `npm run lint`    | ESLint                             |

## Rotas principais

| Rota | Conteúdo |
| ---- | -------- |
| `/` | Página inicial |
| `/servicos-de-cadastro` | Serviços de cadastro |
| `/normas-de-cadastro` | Normas |
| `/material-de-apoio` | Material de apoio |
| `/capacitacao/*` | Trilhas de capacitação |
| `/painel` e `/painel/*` | Painéis informativos |

A navegação do menu está centralizada em `frontend/src/config/navigation.ts`. Novas rotas exigem registro em `frontend/src/App.tsx` e, quando aplicável, entrada na busca (`frontend/src/config/site-search.ts`).

## Atualizando conteúdo

Edite os módulos em `frontend/src/config/` conforme a seção:

- `quick-access.ts`, `hero-content.ts` — início e acesso rápido
- `cadastro-services.ts`, `normas-cadastro.ts`, `material-de-apoio.ts` — páginas institucionais
- `capacitacao*.ts` — páginas de capacitação
- `painel*.ts` — painéis (mídia, figuras, CTAs de download)

Assets estáticos (imagens públicas) ficam em `frontend/public/`.

## Build para produção

```bash
cd frontend
npm run build
```

Os arquivos gerados ficam em `frontend/dist/` e podem ser servidos por qualquer hospedagem estática (Nginx, S3, etc.). Configure o servidor para fallback em `index.html` se usar hospedagem de SPA.

## Licença e uso institucional

Este repositório destina-se ao portal **Cadastro Rural** vinculado ao Incra. Consulte a equipe responsável pelo projeto quanto a políticas de publicação, domínio e conformidade com o Design System do gov.br antes de deploy em ambiente oficial.
