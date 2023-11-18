# [ESGI] - Projet CI/CD

>- Léo STVENOT
>- Nathan PONCET.



## Application : Random number
**Description de l'API Génératrice d'entier Aléatoire**

Cette API JavaScript est accessible depuis le port [3000](http://localhost:3000).
Elle génère un entier aléatoire compris entre 1 et 100 et le renvoie au format JSON.

**Utilisation :**

- **Endpoint :** `http://localhost:3000`
- **Méthode :** `GET`

**Réponse :**
```json
{
  "min": 1,
  "max": 100,
  "random_number": 42
}
```

### Lint
Lint du fchier [index.js](src/index.js)
```shell
npm run lient-index
```
Lint du fchier [test.js](test/test.js)
```shell
npm run lint-test
```
### Test
Test que le endpoint http://localhost:3000 renvoi bien un JSON ayant cette structure
```json
{
    "min": number,
    "max": number,
    "random_number": number
}
```
```shell
npm run test
```

## Commandes
### Installation
```shell
npm install
```
### Start
Démarre l'application sur le port [3000](http://localhost:3000)
```shell
npm run start
```

## Docker
> Image : [youpidok/random-number](https://hub.docker.com/r/youpidok/random-number/tags)
### Build
```shell
docker build --rm -t random-number .
```
### Run
```shell
docker run --name random-number -p 3000:3000 -d random-number 
```
### Tag
```shell
docker tag random-number youpidok/random-number:tag
```
### Push
```shell
docker push youpidok/random-number:tag
```
Lint du fichier [Dockerfile](Dockerfile)
```shell
hadolint Dockerfile
```
