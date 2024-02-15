# Spike

- [Figma](https://www.figma.com/file/oBgpl8HkiowbkUFe6HchFL/Untitled?node-id=0%3A1&mode=dev)
- [Backend](https://github.com/Amund-Fremming/Spike-backend)

### Kort om appen

- Super enkel og liten spørsmål applikasjon.
- Her man man opprette og bli med i spill og legge til spørsmål
- Har brukt ASP.NET som backend som hostes hos Azure
- React native som frontend

### Fokus

- Få appen på Appstore
- Håndtere race conditions

### Hva har jeg lært

- Hvordan jeg setter opp utviklingsmiljlø med Azure og github actions
- Utvikle frontend med react native
- Bruk av SignalR for live oppdateringer
- Bruk av transactions for å håndtere race conditions
- Lage gjenbrukbare komponenter for å minimere kode
- Hvordan håndtere at api kall mister internett, og hjelpe bruker videre

### Hva skal jeg gjøre annerledes neste gang

- Bruke mer tid i planleggingen og få fastslått noen flere generiske komponenter
- Lære å burke Figma mer effektivt og riktig

## **ADD**

- How to under startside
- Preload public games, createdGames, og likedGames

  - Putt games i app context
  - i componentene, ikke fetch data om games har verdier, men på søk alltid søk.
  - Kanskje hente ny data

- Mulighet for å redigere spørsmål

- Fjern tastatured når man trykker enter
- Skjul tilbake på søk til etter man har søkt

1. Start by creeating a game with a unique ID
2. Tell your friends to join with your unique ID
3. Start adding questions to the game
4. When the host is ready, press start to create the game
5. Now the host can start the game and begin reading up questions
6. Play as you wish
