# GITHUB USERS

Projeto criado com base no plano de desenvolvimento GO-K.

## Como executar?

- Instale as depedências do projeto com _yarn_ ou _npm_:

```bash
npm i
```
ou
```
yarn
```

- Execute o comando para instalar o app de acordo com a plataforma desejada (android|ios):

```
npm run [SUA_PLATAFORMA]
```
ou
```
yarn [SUA_PLATAFORMA]
```

**Atenção:** se após a execução do comando de instalação do app, seja apresentado o erro _"No bundle URL present"_ execute o comando abaixo ainda com o app aberto em seu emulador ou dispositivo:
```
npm run start
```
ou
```
yarn start
```

## Checklist de tecnologias necessárias para conclusão do plano de desenvolvimento
- [x] styled-components
- [x] Sentry
- [x] Firebase: Crashlytics

## Plus
- [x] Splash screen, icone do app e nome de exibição;
- [ ] Testes com Jest e react native testing library;