# Spike

- [Backend](https://github.com/Amund-Fremming/Spike-backend)

### Kort om appen

- Super enkel og liten spørsmål applikasjon.
- Her man man opprette og bli med i spill og legge til spørsmål
- Har brukt ASP.NET som backend som hostes hos Azure
- React native som frontend

### Fokus

- Få appen på Appstore
- Håndtere race conditions
- Oppdatere basert på brukeres tilbakemeldinger

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

## Next update

- Ny gamemode!
- Preload public games, createdGames, og likedGames
- Mulighet for å redigere spørsmål
- Fjern tastatured når man trykker enter
- Skjul tilbake på søk til etter man har søkt

## How to update

1. eas build --platform ios
2. eas submit -p ios --latest
3. Login to App Store Connect
4. Add new Version under Distrobution
5. Add Update information in the text box about the update
6. Add for Rereview and Submit

## Hva som trengs

- WebSocket som lytter til gamestate, og endrer side for hvilke state som blir satt, men HOST har ingen lytter slik at hans view styres direkte av hans handlinger
- trykker host på en knapp endrer viewet hans, men ellers, ikke noe.
- Komponent for alle states spillet kan være i:
  1. waiting - venter på at en ny spin skal starte
  2. Spinning - fasher farger, venter på å velge en spiller
  3. PlayerChosen - spiller har blitt valgt, og vi venter på at host trykker på next question som setter state til waiting

# Hva jeg gjorde sist

- La til singalR på de to metodene
- La til Player db, denne må oppdateres og opprettes, gamle db må nok slettes?
- La til en fil der man kan endre URL, så man slipper å endre i alle filer
- Mangeler å bli testet
