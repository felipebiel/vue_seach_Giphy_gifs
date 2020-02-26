#Até o presente momento não tinha utilizado o docker

#a imagem a ser utilizada
FROM node:12-alpine

#o caminho da pasta de trabalho
WORKDIR /app

#copia o arquivo package.json da raiz para o container
COPY package.json /app/package.json

#instala biblibotecas node
RUN npm install
#força a instalação do node-sass pra evitar erros de node rebuild
RUN npm install node-sass sass-loader
#instala o moment
RUN npm install --save moment
#instala o vue cli
RUN npm install -g @vue/cli
