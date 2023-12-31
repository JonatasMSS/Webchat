# Webchat
Um website de chat local utilizando NodeJS e React + NextJS

# 🧠 Objetivos do projeto
Entender o funcionamento de Websockets e sua integração com Node e plataformas front-end (Next.JS e React)

# ⚙️ Ferramentas e Frameworks utilizados 
- React JS
- NextJS
- NodeJS
- Socket.IO para Websocket
- Express
# 🖥️ Imagem do projeto
<img width="959" alt="image" src="https://github.com/JonatasMSS/Webchat/assets/74430293/edb74d2f-7374-47cf-9504-6d72c7bdc0f7">
<img width="960" alt="image" src="https://github.com/JonatasMSS/Webchat/assets/74430293/7bc491ed-8ad5-4669-a012-e4823379a4e4">
<img width="960" alt="image" src="https://github.com/JonatasMSS/Webchat/assets/74430293/e74ced33-49a6-46d9-ac4d-c59c9b90ae40">

# 📕 Como utilizar

## 📠 Configurando o Server
Inicialmente, caso sinta o desejo de restringir o acesso, basta modificar o atributo `[*]` em `CORS` para o `IP` desejado.

![code](https://github.com/JonatasMSS/Webchat/assets/74430293/b822ab40-ac57-4bdf-980a-9b5f65190999)

### Configurando a porta
Na ultima linha do código `server.js`, você encontrará o seguinte código. Assim, poderás definir a porta que o servidor estará.

![code](https://github.com/JonatasMSS/Webchat/assets/74430293/6e88a3b0-11be-4230-8ca5-65d37adc02f7)

*O server está instanciado na Localhost ou `IP de sua máquina`*

## 🖥️ Configurando o Client
Primeiro de tudo, abra a pasta `Client` e crie um arquivo `.env.local` para configuração de variáveis de ambiente.
Ao criar, crie duas variáveis:

`NEXT_PUBLIC_HOST_IP`

`NEXT_PUBLIC_PORT`

A primeira é onde você alocará o IP do servidor criado. A segunda é responsável por definir a porta onde o servidor está instânciado.
Após isso, o client estára pronto para ser executado. Assim basta executar:

```bash
npm run dev
```




 
