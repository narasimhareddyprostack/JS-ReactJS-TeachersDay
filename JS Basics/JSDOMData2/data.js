let employees = [{ "id": 1, "name": "Josefa", "email": "jcobbald0@canalblog.com" },
{ "id": 2, "name": "Reidar", "email": "rblackeby1@nytimes.com" },
{ "id": 3, "name": "Pollyanna", "email": "pmunkley2@alexa.com" },
{ "id": 4, "name": "Wendeline", "email": "wzecchini3@issuu.com" },
{ "id": 5, "name": "Ingra", "email": "ifrangleton4@pinterest.com" },
{ "id": 6, "name": "Kale", "email": "ksprankling5@amazon.co.jp" },
{ "id": 7, "name": "Barn", "email": "bvowdon6@prnewswire.com" },
{ "id": 8, "name": "Jacqui", "email": "jprynne7@walmart.com" },
{ "id": 9, "name": "Benedetto", "email": "bcleverly8@gmpg.org" },
{ "id": 10, "name": "Venus", "email": "vprangnell9@joomla.org" },
{ "id": 11, "name": "Kassie", "email": "kredheada@jiathis.com" },
{ "id": 12, "name": "Willis", "email": "wgoneaub@github.com" },
{ "id": 13, "name": "Meggie", "email": "mbrattenc@epa.gov" },
{ "id": 14, "name": "Frances", "email": "fpatkind@omniture.com" },
{ "id": 15, "name": "Bren", "email": "bbaisse@google.fr" },
{ "id": 16, "name": "Lula", "email": "lvarnalsf@theatlantic.com" },
{ "id": 17, "name": "Hollie", "email": "hmcgeechang@barnesandnoble.com" },
{ "id": 18, "name": "Camala", "email": "copperyh@mlb.com" },
{ "id": 19, "name": "Rodolfo", "email": "rbenedicki@etsy.com" },
{ "id": 20, "name": "Isidore", "email": "imccallisterj@tripod.com" },
{ "id": 21, "name": "Doug", "email": "ddockrillk@omniture.com" },
{ "id": 22, "name": "Joyan", "email": "jschiefersteinl@google.de" },
{ "id": 23, "name": "Lilyan", "email": "ldadem@bloglovin.com" },
{ "id": 24, "name": "Dasya", "email": "dmclennann@sciencedaily.com" },
{ "id": 25, "name": "Jean", "email": "jacumo@hostgator.com" },
{ "id": 26, "name": "Irving", "email": "ifollingp@printfriendly.com" },
{ "id": 27, "name": "Ellen", "email": "eshirtcliffeq@dyndns.org" },
{ "id": 28, "name": "Benjie", "email": "bbonhomer@omniture.com" },
{ "id": 29, "name": "Ebenezer", "email": "evedstras@army.mil" },
{ "id": 30, "name": "Adan", "email": "abartodt@upenn.edu" },
{ "id": 31, "name": "Nadine", "email": "nvolageu@tiny.cc" },
{ "id": 32, "name": "Bartolemo", "email": "bpimblottv@youtu.be" },
{ "id": 33, "name": "Harris", "email": "hmciloryw@livejournal.com" },
{ "id": 34, "name": "Ferdie", "email": "fmillimoex@shutterfly.com" },
{ "id": 35, "name": "Cchaddie", "email": "crobertazziy@wordpress.org" },
{ "id": 36, "name": "Cele", "email": "cwinscomz@spotify.com" },
{ "id": 37, "name": "Estell", "email": "enapolione10@google.co.uk" },
{ "id": 38, "name": "Nell", "email": "nfeathers11@nydailynews.com" },
{ "id": 39, "name": "Bax", "email": "bobern12@china.com.cn" },
{ "id": 40, "name": "Jackie", "email": "jmcateer13@bluehost.com" },
{ "id": 41, "name": "Alonso", "email": "abowes14@theguardian.com" },
{ "id": 42, "name": "Prudy", "email": "ppaynter15@constantcontact.com" },
{ "id": 43, "name": "Mendel", "email": "mvenes16@twitter.com" },
{ "id": 44, "name": "Illa", "email": "ibohan17@google.ru" },
{ "id": 45, "name": "Woodie", "email": "wmullany18@springer.com" },
{ "id": 46, "name": "Frans", "email": "fwalton19@huffingtonpost.com" },
{ "id": 47, "name": "Courtnay", "email": "ccosby1a@arstechnica.com" },
{ "id": 48, "name": "Ruttger", "email": "recclestone1b@phoca.cz" },
{ "id": 49, "name": "Jacklyn", "email": "jwintour1c@adobe.com" },
{ "id": 50, "name": "Madelaine", "email": "mfenn1d@naver.com" }]
function displayData() {
  let rows = ""
  let i = 0;
  while (i <= employees.length - 1) {
    rows = rows + `<tr>
      <td>${employees[i].id}</td>
      <td>${employees[i].name.toUpperCase()}</td>
      <td>${employees[i].email}</td> 
      <td><a href={http://${employees[i].email.split('@')[1]}} target="_blank">${employees[i].email.split('@')[1]}</a></td >
        <tr>`
    i++
  }
  document.getElementById('abc').innerHTML = rows
}