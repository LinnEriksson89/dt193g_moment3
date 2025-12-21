<template>
    <h2>Om Vue</h2>
    <p>Den här sidan använder Vue.js som frontendramverk. Jag installerade detta som ett npm-paket och det var inga
        större konstigheter att komma igång med projektet. Jag har dock lite svårt för själva ramverkskonceptet i att
        man ofta hamnar i situationen att man vet hur något ska göras normalt sett men att man är nybörjare igen när det
        gäller hur man gör det i ramverket. Jag upplever det här som väldigt frustrerande.</p>

    <P>Jag upplever det också som frustrerande att dela upp allt i massa små filer och att behöva "leta runt" så pass
        mycket. Det går väl an i ett så här litet projekt, men i det projekt jag jobbade i under mitt sommarjobb var det
        en stor källa till frustration för mig. I det här projektet kändes det också irriterande att stylingen hör ihop
        med komponenten eftersom det innebar att jag satt och kopierade över massa CSS-kod till flera olika ställen
        istället för att bara sätta samma klass på flera element eller använda flera selektorer för samma CSS-regel och
        få samma styling på alla element. Jag är dock medveten om att detta delvis beror på att jag inte har utnyttjat
        ramverkets fulla potential, förhoppningsvis får jag möjlighet att ta tillvara på den på ett bättre sätt i den
        kommande projektuppgiften.</P>
</template>

<script setup></script>

<style scoped>
h2 {
    font-size: 1.6em;
    font-weight: bold;
    font-family: Kalam, Arial, Helvetica, sans-serif;
    margin: 2%;
    border-bottom: #800 2px solid;
}

p {
    font-family: Georgia, serif;
    line-height: 1.6;
    margin: 2%;
    max-width: 600px;
}
</style>
