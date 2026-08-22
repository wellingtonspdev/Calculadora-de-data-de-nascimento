<div align="center">

# Calculadora de Data de Nascimento

Aplicativo React Native de tela única para calcular idade civil completa.

</div>

![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react&logoColor=white)
![Expo SDK](https://img.shields.io/badge/Expo%20SDK-54-000020?logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?logo=javascript&logoColor=black)
![Android](https://img.shields.io/badge/Android-compatível-3DDC84?logo=android&logoColor=white)
![Atividade acadêmica](https://img.shields.io/badge/Finalidade-atividade%20acadêmica-8B5CF6)

Aplicativo mobile de tela única para informar uma data de nascimento, calcular a idade civil completa e classificá-la por faixa etária. Desenvolvido como atividade acadêmica com React Native e Expo.

![Captura real da Calculadora de Data de Nascimento no Android](https://raw.githubusercontent.com/wellingtonspdev/Calculadora-de-data-de-nascimento/backup-with-screenshot/docs/screenshots/app.png)

## Objetivo

Aplicar conceitos de entrada de dados, validação, estado de interface e regras de negócio em uma experiência mobile objetiva e acessível.

## Funcionalidades

- Entrada guiada no formato `DD/MM/AAAA`.
- Validação de campo obrigatório, formato, dia, mês, ano, datas inexistentes e datas futuras.
- Cálculo da idade em anos, meses e dias civis.
- Classificação automática em Jovem, Adulto ou Idoso.
- Feedback visual para erro, toque no botão e resultado calculado.
- Layout responsivo pensado para telas a partir de 320 × 640 px.

## Regra de classificação

| Faixa | Regra |
| --- | --- |
| Jovem | Até 19 anos |
| Adulto | De 20 a 59 anos |
| Idoso | 60 anos ou mais |

O cálculo usa diferenças entre datas civis — sem aproximações por milissegundos ou divisão por 365. Aniversários, anos bissextos e finais de mês são considerados. Para nascimentos em 29/02, em anos não bissextos o aniversário civil é tratado em 28/02.

## Tecnologias utilizadas

| Tecnologia | Uso no projeto | Por quê |
| --- | --- | --- |
| React Native 0.81 | Interface mobile | Permite compor a tela com componentes nativos. |
| Expo SDK 54 | Ambiente de execução | Simplifica o ciclo de desenvolvimento do aplicativo. |
| React Native Web | Interface no navegador | Reutiliza a mesma base de componentes no Expo Web. |
| React DOM e Metro Runtime | Runtime Web | Permitem compilar e executar o target Web com Expo SDK 54. |
| JavaScript (ESM) | Lógica e componentes | Mantém o projeto direto e adequado à atividade. |
| Node.js test runner | Testes de regra de negócio | Valida os cálculos sem depender da interface. |

## Design system adaptado

A interface traduz para `StyleSheet` um padrão visual de fundo escuro, superfícies translúcidas, bordas sutis, tipografia hierarquizada e acentos roxo/índigo. O resultado é uma adaptação nativa em React Native: o aplicativo não utiliza Tailwind CSS, Three.js, Framer Motion, fontes externas, bibliotecas de blur ou gradiente.

## Arquitetura

```text
App.js
└── BirthDateScreen
    ├── DateField          entrada e mensagem de validação
    ├── ageCalculator      regras puras de data e classificação
    └── AgeResult          apresentação do resultado
```

## Estrutura do projeto

```text
.
├── App.js
├── app.json
├── package.json
├── README.md
├── src
│   ├── components
│   │   ├── AgeResult.js
│   │   └── DateField.js
│   ├── logic
│   │   └── ageCalculator.js
│   ├── screens
│   │   └── BirthDateScreen.js
│   └── styles
│       └── appStyles.js
└── tests
    └── ageCalculator.test.mjs
```

### Arquivos de suporte

```text
docs/screenshots/app.png   captura real do Android Emulator
package-lock.json          versões reproduzíveis das dependências
.gitignore                 regras para excluir dependências e caches locais
```

## Como executar

### Requisitos

- Node.js 20.19 ou superior, com npm.
- Ambiente compatível com Expo SDK 54.
- Android com Expo Go/Android Emulator ou navegador para executar o Expo Web.

### Instalação

```bash
git clone https://github.com/wellingtonspdev/Calculadora-de-data-de-nascimento.git
cd Calculadora-de-data-de-nascimento
npm install
npm start
```

Para abrir diretamente no Android Emulator, use:

```bash
npx expo start --android
```

Em um dispositivo físico, abra o Expo Go compatível com SDK 54 e conecte-se ao servidor iniciado pelo Expo.

### Executar no Web

Em um navegador, execute:

```bash
npx expo start --web
```

O mesmo código é executado no Expo Web, sem uma implementação separada para navegador.

## Testes

Execute a validação das regras de negócio com:

```bash
npm test
```

Os testes verificam formatação, validade da data, idade civil, aniversários, anos bissextos, finais de mês e os limites de classificação.

## Compatibilidade validada

- **Android** — Expo Go no Android Emulator, com Expo SDK 54.
- **Web** — Expo Web no navegador, com Expo SDK 54.
- Dependências declaradas para Expo SDK 54, React Native 0.81, React Native Web e JavaScript ESM.
- Regras de negócio validadas pelo comando `npm test`.
- Interface validada em Android e Web, incluindo viewport compacto de 320 × 640 px.

## Contexto acadêmico e aprendizados

Esta atividade exercita separação entre interface e lógica de domínio, validação defensiva de entradas, cálculo com datas civis e comunicação visual clara de resultados.

## Autor

GitHub: [wellingtonspdev](https://github.com/wellingtonspdev)
