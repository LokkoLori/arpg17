var starts = new Site("start");
starts.description  = "<p>2017, nyár, augusztus. Árok party. Nemrég fedezted fel ezt az egész retromizériát az interneten és bejelölted a naptáradban. Már alig vártad, hogy jöjjön az augusztus. A főnököd nem akart szabadságot adni, de egy kis patkányméreg  a kávéjába megoldotta a dolgot. Az egoista majom most valamelyik rohadt kórház lepukkant kórtermében imádkozik. Ha öntudatánál van és persze ha tud beszélni. Nem adtál neki halálos adagot csak annyit, hogy kicsit habozzon a szája. A hülyéje úgy nézett ki, mint egy mosópor reklám. De gyorsan eltereled a gondolataidat a főnöködről.</p><p>Nyár van, buli. Eddig is jól telt, elégedetten pillantasz barna sörhasadra ami kilóg a szakadt atlétádból. Érzed magadon a száradt sörszagot. de a Balaton friss levegője lemossa az egészet. Életed első Árok partijára készülsz és érzed, hogy ez nagy dobás lesz. Évek óta értelmet kerestél életednek, talán most megtalálod. Tövig nyomod a gázt és kihajítod a kiürült sörösdobozt az abalkon. Pechedre pont telibetalálsz egy az út mellett parkoló motors rendőrt. A sörösdoboz csattanva üti le a fejéről az ócska szemüveget. A megszédült fickó rögtön motorra pattan és utánad ered. Villogva húz el a kocsid mellett, majd leparkol előtted 100 méterrel, leszáll a motorról és int, hogy húzódj le. Nem sok jót sejtesz.</p><p><b>Mit teszel?</b></p>";
starts.addOption("megpróbálod elütni ezt a szarjankó", function(){
	jump(site3);
});
starts.addOption("lehúzódsz mielőtt nagyobb baj lenne", function(){
	jump(site6);
});

checkpoint = starts;


var site3 = new Site("site3");
site3.description = "<p>Ördögi mosollyal nehezkedsz rá a gázkarra lukas tornacipődben. Jövök szivi - ordítod , mint Jack Nicholson a Ragyogásban és a rendőr is valami ragyogó villanást lát, mielőtt hízott légyként szétplaccsan a szélvédődön. Hú ez csúnya volt- állapítod meg, majd nagyot nevetsz és érzed, hogy hátadból kiállt egy régi görcs. Á édes élet! Felpattintod az ablaktörlőt, hogy lesúrolja a maradék zokni, szemüveg és agyvelődarabokat. Szerencsére senki sem látott. A szélvédőre akadva egy rendőrsípot veszel észre.</p> <p><b>Mit teszel ?</b></p>";
site3.addOption("full gáznál kihajolsz", function(){
	jump(site4);
});
site3.addOption("leszarod", function(){
	jump(site5);
});

sip = new Tool("rendőrsíp");
var site4 = new Site("site4");
site4.description = "<p>Kiülsz a kocsi ablakába míg egyik lábaddal a kormányt irányítod. Csináltál már ennél cifrább dolgokat is. Előrehajolsz és a vérmaszatból kihazlászod a sípot.</p>";
site4.addOption("yeah!", function(){
	sip.owned = true;
	jump(site7);
});

var site5 = new Site("site5");
site5.description = "<p>Úgy nyomod a gázt, hogy a szél leviszi a sípot.</p>";
site5.addOption("ez van", function(){
	jump(site7);
});

var site6 = new Site("site6");
site6.description = "<p>Bosszúsan lassítasz. Ez megint jól kezdődik. Egy fontoskodó hülye fogja kihúzni a zsebedből a sörpénzedet. Még szerencse, hogy elhoztad a főnököd pénztárcáját is ! Rámosolyogsz a felfújt fejű, lila rendőrre. Segíthetek? - kérdezed fölényesen. Ő egy 20 perces kiselőadással válaszol felelősségről, erkölcsökről, helyes viselkedésről és a kisemberek életésől, ami persze úgy végződik, hogy a rendőr eltesz egy kis kenőpénzt.</p>";
site6.addOption("ez van", function(){
	jump(site7);
});


var site7 = new Site("site7");
site7.description = "<p>Már nem vagy messze. Sok degenerált falut elhagytál Pest óta és erre már nagyon butoid feje van az embereknek. Érzed, hogy közelítesz. Biztos ez is valami redneck tanya vagy olyasmi, mint a texasi láncfűrészes. Tuti, hogy az emberek itt bőrmaszkban dugják a saját kutyájukat. Á, túl sok horrorfilmet néztél ! Kivered a fejedből a hülyeséget. Az igazság az, hogy végre elhagytad a fővárosi dzsungelt és repesztesz át az országon. Minden zöld és nálad is van egy kicsi. Úgy döntesz megkeresed ! </p>";
site7.addOption("bal zsebedben keresed", function(){
	jump(site8);
});
site7.addOption("jobb zsebedben keresed", function(){2
	jump(site9);
});

var fogpiszkalo = new Tool("fogpiszkáló");
var site8 = new Site("site8");
site8.description = "<p>Keresgéled a zsebedben hova is tetted. Egy söröskupak, egy fogpiszkáló, valami diszkós zseton,egy iszonyat fikás zsebkendő, kutyakaki zacskó, a bölcsességfogad meg valami kenyérmorzsa után végre ráakadsz. Ufónak hívják és valami lila cucc. Egy holland sztriptíztáncostól vetted, úgy hívták Van melle de Hol. Elpattintod a zsöllyét és máris mintha egy sárga tengeralattjárón utaznál a Beatlesszel. Vagy az Iron Maiden magángépén Dallas felett. Tök mindegy, most még Ellie fél csöcse is tetszene. Szar ez a világ és minden amit tőled érdemel az a hányásod. Nihilisztikus filozofálgatásod közben egy verda zavar meg, amely hajmeresztő sebességgel tép el melletted. A kormány után kapsz, le ne sodorjon az útról. A rendszámtáblát látod egy pillanatra : JCVD. Ki lehet ez a barom ?</p>";
site8.openAction = function(){
	fogpiszkalo.owned = true;
	site8.openAction = function(){};
};
site8.addOption("Bekapcsolod a turbót és utána hajtasz", function(){
	jump(site10);
});
site8.addOption("Nyugisan vezetsz tovább", function(){
	jump(site11);
});

site9 = new Site("site9");
site9.description = "<p>Addig keresgéled a rőzsét a zsebedben, hogy felcsavarodsz egy fára ! Látod te fasz, ne drogozz vagy legalábbis ne vezetés közben! Meghaltál paraszt, kezd újra, ha ráérsz !<p>";
site9.deadend = true;

site10 = new Site("site10");
site10.description = "<p>Nincs turbód te barom, ez nem egy autós játék. Vegyél Need For Speedet paraszt !</p>";
site10.deadend = true;

site11 = new Site("site11");
site11.description = "<p>Ajkarendek . Végre megérkeztél ! Vidáman száguldasz el a szétlőtt várostábla mellett, aminek tövében valami harisnyás kurva fekszik. A táblán felirat :Lakosság 5 fő. Árok party idején 174 fő. A GPSed szerint megérkeztél. előtted egy iskola udvara, mellette egy bolt.  A bejárat mellett egy limonádéárust veszel észre a következő felirattal : Még 2431 limonádét kell eladnom, hogy bejussak a bulira. Az árus valami csöves fejű tag István a király pólóban. Na mi van Koppánykám, tarhálgatunk ? - szólítod meg barátságosan. A csapzott csöves rádmosolyog, ekkor látod, hogy hiányzik pár foga.</p><p><b>Mit teszel ?</b></p> ";
site11.addOption("beugrasz a boltba vásárolni", function(){
	jump(site14);
});
var site11_b = site11.addOption("veszel egy limonádét", function(){
	jump(site12);
});
var site11_c = site11.addOption("rögtön bemész a buliba", function(){
	jump(site15);
});

site12 = new Site("site12");
site12.description = "<p>A csöves boldogan tesz eléd koszos kezével egy alig használt műanyag kávéspoharat. Csordultig tölti sűrű, cafatos húgyszínű lével, ami a maradék kávéval összekeveredve enyhe barnás árnyalatot kap. Mmm..A kávé a ház ajándéka - mondja. Elégedetten várja, hogy felhajtsd.</p>";
site12.openAction = function(){
	site12.openAction = function(){};
	site11.removeOption(site11_b);
};
site12.addOption("Nincs kedved kihányni a sörödet és ott hagyod", function(){
	jump(site11);
});
site12.addOption("Megiszod", function(){
	jump(site13);
});

site13 = new Site("site13");
site13.description = "<p>Szinte lassítva látod, ahogy a poharat a szádhoz emeled. Gyomrodban riadtan ugrik egyet egy ideg, amint a limonádéban úszó egyik morzsaszigetről egy meghatározatlan 9 lábú xenomorph bab fejest ugrik a limonádé mélyebb vizeibe. Egész kis strand van itt a poharadban !</p><p>Mmm, az első korty olyan, mintha sugárfertőzött fagyállót innál, a szemeid körbefordulnak a helyükön és helyet cserélnek. Agyadban elpattan egy ér és orrodból egy szomorú vércsepp hullik a limonádé tetejére. Bánatosan nézed, de anyád arra tanított, hogy ne végezz félmunkát, így lenyeled a maradékot. Az első hullámok mintha önálló életet élnének, majd valami töményebbet érzel ami a fogaid közé akad. A fogaidhoz nyúlsz, hogy lekapargasd a szennyeződést és egy óriási, csimbókos hajszálat fedezel fel, mely valószínűleg a koldus bőrkiütéses fejéről származik. Ahogy húzod kifele a fogaid közül a rárakódott csimbókrengeteg a szádban marad, kisebb falat sörkorcsolyaként. Virsli ízt is érzel és valami keményet. Ahogy ráharapsz kitörik egy fogad.</p><p>Phú mi esz?-kérded pöszén. Meglepetésedre a szádban egy budikulcsot találsz ! Kitört fogadat is megtartod.</p>";
site13.openAction = function(){
	site13.openAction = function(){};
}
site13.addOption("Áuu", function(){
	jump(site11);
});

site14 = new Site("site14");
site14.description = "<p>Udvariasan előreengedsz egy csótányt, majd belépsz a kissé söröshamburger szagú helyiségbe. Rögtön kiszúrod a pult mögött serénykedő bombázót, majd rájössz, hogy otthon hagytad a pilótaengedélyedet, így a mosóporos dobozokat kezded nézegetni letörten. Tomi, Omo, Ariel. Á, a kis hableány ! Vajon hogy nézne ki, ha a feje lenne hal és az alsó teste nő? Vajon ugyanolyan népszerű lenne ? Mindenesetre te szívesen úsznál vele egyet.</p><p>Idiotisztikus merengésedből hirtelen egy kiáltás ráz fel, majd valaki durván félrelök. Látod, hogy a bombázó cickói egy szaladó férfira mutatnak. Tolvaj, kapják el ! Kit érdekel- gondolod és gyorsan egy marék mosóport csúsztatsz a gatyád zsebébe, amíg nem figyelnek rád. Így legalább az izzadtság majd magától kimossa és le se kell venni. Majd mégis feltámad a lelkiismereted hiánya és arra gondolsz, hogy valami tárgyat használhatnál itt, hisz valószínűleg ennek a hülye játéknak amit játszol ez a lényege.</p><p>Bizonyos tárgyakat csak a megfelelő helyen és időben tudsz használni és csak így tudsz továbbjutni ! Ezért próbálkozz mindig a tárgyakkal is, hátha történik valami ! Ezzel túl is estél az első tanító részen ! Gratulálok kedves játékos !</p>";
site14.addToolRelay("rendőrsíp", function(){
	jump(site17);
});
site14.addOption("Nem teszel semmit, egyszerűen kisétálsz az üzletből", function(){
	jump(site16);
});

site15 = new Site("site15");
site15.description = "<p>Lécci lécci havercsávó, vegyél már egy limonádét, hadd jussak be én is - kérlel a limonádéárus csöves és erőszakosan elédvág egy kancsó húgyszínű itallal.</p>";
site15.addOption("bazdmeg!", function(){
	site11.removeOption(site11_c);
	jump(site11);
});

site16 = new Site("site16");
site16.description = "<p>Kerékcsikorgást hallasz amint kilépsz a Tahó stopból és már nincs időd félreugrani, meg amúgy sem akarsz, mert kissé suicid alkat vagy és ez a játék is elég szar. A tolvaj átgázolt rajtad szűzpiros ferrarijával. ( Na persze, mert akinek ferrarija van az itt fog lopni a Tahó stopban, ezt a hülye játékot. ) Majd meghalsz !</p><p> Fantasztikus kalandod itt véget ért és mi készítők ezt egyáltalán nem sajnáljuk !</p>";
site16.deadend = true;

site17 = new Site("site17");
site17.description = "<p>Belefújsz a rebdőrsípba, olyan erővel, hogy kirepül a szádbó. Mire a limonádéárus a tolvaj elé veti magát. Összegabalyodnak és elgurulnak egy lejtőn egy káromkodó porfelhőben.</p>";
site17.openAction = function(){
	sip.owned = false;
};
site17.addOption("összetöröd a limonádéárus standját.", function(){
	jump(site18);
});
site17.addOption("bemész a táborba", function(){
	jump(site15);
});


var budikulcs = new Tool("budikulcs"); 
site18 = new Site("site18");
site18.description = "<p>Most megkapod te geci !- kiáltod és ripityára töröd a hülye limonádés állványt. Az üvegek széttörnek, a lötyi a csatornába ömlik, a kiskocsi kerekeit kivagdosod. Elégedetten és felszabadultan röhögsz egyet a pusztításod láttán. Ha minden ilyen egyszerű lenne ! A széttört poharak között egy budikulcsot veszel észre. </p><p>Mi a kurva isten történt ?- kiáltja a visszatérő István a király pólós csöves.<br/>No, no- Koppánykám, ne szidjuk az Istent- válaszolod neki.<br/>Szomorúan fogja a romokat, majd odébb áll. Szabad az út a táborba !</p>";
site18.openAction = function(){
	budikulcs.owned = true;
};
site18.addOption("irány a tábor", function(){
	jump(site22);
	checkpoint = site22;
});

function openfield(){
	sites["PARKOLÓ"].reachable = true;
	sites["SZÍNPAD"].reachable = true;
	sites["ZENESÁTOR"].reachable = true;
	sites["FOCIPÁLYA"].reachable = true;
	sites["TUSOLÓK"].reachable = true;
	sites["TORNATEREM"].reachable = true;
}

function closefield(){
	sites["PARKOLÓ"].reachable = false;
	sites["SZÍNPAD"].reachable = false;
	sites["ZENESÁTOR"].reachable = false;
	sites["FOCIPÁLYA"].reachable = false;
	sites["TUSOLÓK"].reachable = false;
	sites["TORNATEREM"].reachable = false;
}

function addFieldaction(fieldsite){
	fieldsite.openAction = openfield;
	fieldsite.closeAction = closefield;
}

site22 = new Site("PARKOLÓ");
site22.description = "<p>A parkolóban vagy. Ide hallatszik a tábor jövés-menése, zsongása. Táborozók pakolják ki-be cuccaikat az autókból. Érdeklődve pillantasz az egyik rendszámtáblára : JCVD ! Hmm ez már ismerős az útról, ez a barom száguldott el melletted. Az egyik autó alól viszont pár lábat látsz kikandikálni. Valószínűleg valaki ráhajtott a parkolóban beszélgetőkre. Innen könnyen megközelítheted a tábor többi helyszínét, valamint egy ajtó is nyílik a neked jobbra eső épületen, mely úgy tűnik nyitva lehet. Az épület tetején egy barátságis kiscica ugrándozik.</p>";
addFieldaction(site22);
var site22o_a = site22.addOption("Beszédbe elegyedsz az itt lézengőkkel", function(){
	jump(site23);
});
var site22o_b = site22.addOption("Megvizsgálod a JCVD rendszámú autót", function(){
	jump(site24);
});
var site22o_c = site22.addOption("Megvizsgálod a kilógó lábakat", function(){
	jump(site25);
});
var site22o_d = site22.addOption("Megpróbálod feltörni az autókat", function(){
	jump(site26);
});
var site22o_e = site22.addOption("Benyitsz az épület ajtaján", function(){
	jump(site27);
});
site22.addToolRelay("tejföl", function(){
	jump(site34);
});

site23 = new Site("site23");
site23.description = "<p>Páran elmagyarázzák mit merre találsz és ingyensörrel is megkínálnak. A sörön a következő feliratot látod : Ma Beb Ászok ( készült  Csin Csin Szőrfőzde, Puking, a 2017es Árokk party hivatalos támogatója, 18 éven aluli számára nem forgalmazható, 18 éven aluli személy elkészítésében nem vett részt, 18 éven aluli személyt nem tartalmaz ) MMMM Sör ! Nyilván a mennyországban is ezzel vannak tele a medencék.</p>";
site23.addOption("Nem állsz ellen kedvenc italodnak, a sörnek", function(){
	jump(site28);
});
site23.addOption("Tovább nézelődsz a parkolóban", function(){
	jump(site22);
});

site24 = new Site("site24");
site24.description = "<p>Az autóra furcsa kínai feliratokat pingáltak.  Belül a visszapillantóról 2 kis boxkesztyű lóg, a műszerfal fölé pedig egy kis táncoló Bruce Lee szobrot ragasztottak. Vajon kié lehet?</p>";
site24.addOption("Visszatérsz a parkolóba suttyoskódni.", function(){
	site22.removeOption(site22o_b);
	jump(site22);
});

var nagyito = new Tool("nagyító");
site25 = new Site("site25");
site25.description = "<p>Az autó alól kilógó lábakat alvadt vértócsa veszi körbe. Óvatosan megállsz a szélén, nehogy a talpadon lévő lukon felszivárogjon a zoknidba.<br/>Elnézést khmm - köszörülöd meg a torkod. - Jól vannak ? Mivel nem érkezik válasz belerúgsz az egyik lábba, melyről lerepül a cipő és szakadt zoknijából, mint egy kis krumpli, kilátszik a nagylábujja. Furcsa zúzódást veszel rajta észre, de szabad szemmel nem tudod kivenni a részleteket. Talán szükséged lenne valamire amit itt használhatnál? Igen kedves játékos, ismét segítséget kaptál a játék készítőitől, itt tárgyat kell használnod. Közben elgondolkozol azon, hogyan történhetett ez meg ? Ki ütötte el ezeket az embereket? Talán az volt a bűnük, hogy windowzosok voltak? Talán ez a játék célja? Igen, kedves játékos, a játék célja, hogy a táborban előforduló furcsa eseményeket kinyomozd, mert 2 sör között nem hagynak nyugodni :) Mentsd meg a többi táborlakót az őket fenyegető veszedelemtől ! Gratula, ezzel túlestél egy újabb tanító részen ! :)</p><p><b>Nyomozásra fel !</b></p>";
site25.addToolRelay("nagyító", function(){
	jump(site35)
});
site25.addOption("Megszagolod a cipőt, amit lerúgtál", function(){
	jump(site33);
});
site25.addOption("Visszatérsz a parkolóba nézelődni", function(){
	jump(site22);
});

var megfottkutya = new Tool("megfőtt kutya");
site26 = new Site("site26");
site26.description = "<p>Az egyik hátsó ülésen egy hőségtől megfőtt kutyát találsz, akit a kocsiban felejtettek. Értékes dolog azonban nincsen. Ezek az árok partisok elég csóró alakok lehetnek.</p>";
site26.openAction = function(){
	megfottkutya.owned = true;
};
site26.addOption("Átkozódva visszatérsz a parkolóba.", function(){
	site22.removeOption(site22o_d)
	jump(site22);
});

site27 = new Site("site27");
site27.description = "<p>A helyiségben egy hűtőt és a földön mindenfele matracokat látsz. Valószínűleg éjszaka itt alszanak azok az igénytelen táborozók, akik még sátrat se hoznak. </p>";
site27.addOption("Megizsgálod a hűtőt.", function(){
	jump(site32);
});
site27.addOption("Elhagyod a helyiséget.", function(){
	jump(site22);
});

site28 = new Site("site28");
site28.description = "<p>Mmmm Ez igen ! Végre megérkeztél az Árock partira és sörözhetsz is egyet. Mi kell még ? </p>";
site28.openAction = function(){
	site22.removeOption(site22o_a);
};
site28.addOption("Még egy sör!", function(){
	jump(site29);
});
site28.addOption("Tovább nézelődsz a parkolóban", function(){
	jump(site22);
});

site29 = new Site("site29");
site29.description = "<p>Ó a buli már igazán kezd beindulni ! Előkerül egy kis tömény is. Valaki csutkára tekeri egy kocsiból a hangerőt. Jófajta happy hardcore szól. Egy régi hupikék törpikék album keverve Captain Jackkel. Valaki elővesz egy zacskó piros port. Azt állítja, hogy paprikás speed Makóról.</p>";
site29.addOption("Kipróbálod a paprikás speedet", function(){
	jump(site30);
});
site29.addOption("Iszol még egy sört!", function(){
	jump(site31);
});

site30 = new Site("site30");
site30.description = "<p>A paprikás speedtől olyan erősen kezdesz tüsszögni, hogy a nyálkahártyádon több ér is kiszakad és vörös vérfelhőket fröcskölsz magad köré. A többiek sipítozva menekülnek. Ami még rosszabb, hogy a cucc teljesen kijózanít ! Feleslegesen söröztél idáig ! Kárba ment a jó nafta ! Ne drogozz, inkább igyá ! Csalódottságodban visszatérsz a parkolóba nézelődni.</p>";
site30.addOption("baszki", function(){
	jump(site22);
});

site31 = new Site("site31");
site31.description = "<p>Haver, neked már nem az Árok party jut, csak az árok ! Részegen napszúrást kapsz a gőzölgő motorháztetők között és bedőlsz a szennycsatornába. Legközelebb ne rúgj be olyan gyorsan ! Hagyj időt a szervezetednek, hogy feldolgozza az italt! ( Készült az Országos Detoxológiai Intézet és Gyomormosó Gumicső Gyár támogatásával ) Fantasztikus kalandod itt véget ért, amin mi készítők nagyon jót nevetünk ! Szia !</p>";
site31.deadend = true;

var tejfol = new Tool("tejföl");
site32 = new Site("site32");
site32.description = "<p>A hűtőben csak egy kis tejfölt és pár doboz Ajkai Ászokat találsz. Hozzá segíted magad egyhez és elégedetten csapod be a hűtő ajtaját. Áááá a közös hűtők szépsége, az ember mindig talál bennük sört :) Köszi ! ( A készítők )</p>";
site32.openAction = function(){
	tejfol.owned = true;
}
site32.addOption("vissza a parkolóba", function(){
	site22.removeOption(site22o_e);
	jump(site22);
});

site33 = new Site("site33");
site33.description = "<p>Elégedetten szippantod fel a besavanyodott lábbűzt. FIGYELEM!!! Sajnos ezzel aktiváltad a játékba beépített perverzriadót. A játék 10 másodpercen belül megsemmisíti önmagát. Kérlek ne hagyd el a helyiséget. Koordinátáidra egy kis teljesítményű atomrobbanófejet indítottunk útra. Kalandod itt véget ért ! BUMMM</p>";
site33.deadend = true;

var kiscica = new Tool("kiscica");
site34 = new Site("site34");
site34.description = "<p>Leteszed a tejfölt a ház elé az udvarra és elbújsz egy bokorban. Egy táborozó sétál arra, aki rá akar menni az ingyenkajára de elhessegeted. Ekkor a tetőn ugrándozó kiscica, látva, hogy nincs veszély lehuppan a tejföl mellé és belenyomja kis pofiját. Gyorsan nyakon csíped és bedobod a zsebedbe !</p>";
site34.openAction = function(){
	tejfol.owned = false;
	kiscica.owned = true;
};
site34.addOption("vissza a parkolóba", function(){
	site22.description = "<p>A parkolóban vagy. Ide hallatszik a tábor jövés-menése, zsongása. Táborozók pakolják ki-be cuccaikat az autókból. Érdeklődve pillantasz az egyik rendszámtáblára : JCVD ! Hmm ez már ismerős az útról, ez a barom száguldott el melletted. Az egyik autó alól viszont pár lábat látsz kikandikálni. Valószínűleg valaki ráhajtott a parkolóban beszélgetőkre. Innen könnyen megközelítheted a tábor többi helyszínét, valamint egy ajtó is nyílik a neked jobbra eső épületen, mely úgy tűnik nyitva lehet. A kiscica már nincs itt.</p>";
	jump(site22);
});

site35 = new Site("site35");
site35.description = "<p>Odatérdelsz a zokniból kilógó lábujjhoz és a nagyítóval vizsgálgatni kezded. Hmmm Mintha valaki rejtett volna valamit a köröm alá. De szükséged van valamire amivel kipiszkálod.</p>";
site35.addToolRelay("fogpiszkáló", function(){
	jump(site36);
});
site35.addOption("Passz", function(){
	jump(site22);
});

var koddin = new Tool("kód DIN"); 
site36 = new Site("site36");
site36.description = "<p>A fogpiszkálóval felfeszíted a retkes lábujjat. Valaki egy cetlit rejtett ide ! Kitekered és a következő feliratot látod : DIN   Hmmm, ez valami kód lehet - gondolod magadban. Elteszed a cetlit.</p>";
site36.openAction = function(){
	koddin.owned = true;
	fogpiszkalo.owned = false;
	nagyito.owned = false;
}
site36.addOption("visszatérsz a parkolóba suttyóskodni.", function(){
	site22.removeOption(site22o_c);
	jump(site22);
});

site40 = new Site("SZÍNPAD");
site40.description = "<p>Kisétálsz a központi épület mögé, ahol a hátsó falhoz egy színpad kapcsolódik. A színpadon szétszórva egy-két hangláda és hangszer pihen. Valószínűleg itt buli lesz este ! Már a gondolatra is megszomjazol ! Az egyik erősítőn valaki üldögél, arca a kezeibe temetve és mintha sírna. A színpad oldalában pedig egy furcsa kis ajtót látsz. Néhány ajkai polgár is lézeng a színpad környékén, akik valószínűleg az esti koncertekre kíváncsiak.Az épület tetején, a színpad felett egy rozsdás szélkakas nyikorog. Furcsa hűvös szél árad a fák felől. Érzed, hogy valami készül, valamilyen rossz akarat lebeg a hely felett. Érzed, hogy valami történni fog mikor leszáll az est, de az még odébb van.</p><p><b>Mit teszel?</b></p>";
addFieldaction(site40);
var site40o_a = site40.addOption("Beszélni próbálsz a síró alakkal", function(){
	jump(site41);
});
var site40o_b = site40.addOption("Beszélni próbálsz a helyiekkel", function(){
	jump(site42);
});
var site40o_c = site40.addOption("Játszani próbálsz az egyik hangszeren", function(){
	jump(site43);
});
var site40o_d = site40.addOption("Megvizsgálod a kis ajtót", function(){
	jump(site44);
});
var site40o_e = site40.addOption("Vársz estig", function(){
	jump(site45);
});

var makaronio = new Tool("makaróni");
site41 = new Site("site41");
site41.description = "<p>Miért sírsz haver?-kérded és megkopogtatod a haver fejét. Felnéz és ekkor veszed észre, hogy a keze tiszta görcs és puffadás. <br/>-Veled meg mi történt ? Zokogva kezd mesélni <br/>- Egész este egy szar szöveges kalandjátékot írtam és teljesen kikészültek az ujjaim. Most hogy fogok este zenélni? Megnyugtatod, hogy megpróbálsz rajta segíteni.</p>";
site41.addOption("visszatérsz a színpad elé", function(){
	jump(site40);
});
site41.addToolRelay("makaróni", function(){
	jump(site50);
});

var erikac64cdje = new Tool("Erika C64 CD-je");
site42 = new Site("site42");
site42.description = "<p>Adj Isten parasztok ! Ne ijedjetek meg - köszöntöd barátságosan a helyi bumburnyákokat.<br/>- Fogadj Isten nagyuram- szól az egyik embör a bajsza alól.<br/>- Uraságod is zenész? - kérdezik köréd gyűlve a helyiek, hosszú majomszerű karjaikat lóbálva, elkorcsosult járásukkal.<br/>-Nem, nem- mondod mosolyogva a mosdatlan purgyéknak.<br/>- Na az nagy kár - vakkantja a bajszos. Úgy tűnik ő az egyetlen a csapatban, aki tud beszélni.- Estve 8tú lösz Erika C64 szúlamaira Ninja Tibi táncverziója, 9tű pedig Ninten Tóbi és a Szuper Diszkó Mámorusz. Űket várjuk !- mondják izgatottan röfögve.</p><p>Meglepődsz, hogy ezeknek a világtól elzárt tahóknak egész jó az ízlésük.</p>";
site42.addOption("megunod és ott hagyod őket", function(){
	jump(site40);
});
site42.addToolRelay("Erika C64 CD-je", function(){
	jump(site49);
});

site43 = new Site("site43");
site43.description = "<p>Felkapsz egy gitárt és pengetni kezded. Az ujjaid megbolondítják a húrokat, ahogy rázendítesz egy régi kedvenc amiga dallamra. Teljesen beleéled magad és észre sem veszed, ahogy az ujjaid füstölni kezdenek. A gitárod egy kis készülékhez van csatlakoztatva, aminek kijelzőjén furcsa adatok cikáznak. 85 %-os feltöltődés- jelenti be egy géphang. Tovább játszol és pont az utsó refrénhez érsz, amikor 100 %-os töltöttséget jelez a gép. Ekkor egy elektromos kisülés csap ki belőle, végigfut a kábelen és a gitáron át beléd vágódik. Zigidigidi- préseled ki fogaid közül és egy kis füst kíséretében eltűnsz.</p><p>Hirtelen óriásinak látod a színpadot és rádöbbensz, hogy bekerültél a gépbe és a monitoron bámulsz kifelé.Egy elektromos emberke lettél ! Valaki szándékosan hagyta itt ezt a csapdát neked !</p><p> Hihetetlen kalandjaid hihetetlen véget értek !!!</p>";
site43.deadend = true;

site44 = new Site("site44");
site44.description = "<p>Mi lehet ez a kis ajtó- töprengesz és odatérgyepelsz a színpad oldalához. Kilincset, csengőt nem látsz rajta, ezért bekopogsz.<br/>- Ki az ? - kérdezi egy érdekesen mély magas hang.<br/>Kinyílik az ajtó és egy kis szakállas manó dugja ki rajta a fejét piros kockás pólóban.<br/>-Hát te ki vagy ?- érdeklődsz.<br/>-Én vagyok a számítógépalkatrészevő piroskockáspólós manó- mondja és kitárja az ajtót. - Fáradj beljebb ! - invitál és kivillantja tűhegyes fogacskáit.</p>";
site44.addOption("Bekúszol a színpad alá a számítógépalkatrészevő piroskockáspólós manóhoz", function(){
	jump(site46);
});
site44.addOption("Visszamész a színpad elé nézelődni", function(){
	jump(site40);
});

site45 = new Site("site45");
site45.description = "<p>Vársz. vársz, de nem történik semmi. Ebben a játékban valószínűleg nem így telik az idő :)</p>";
site45.addOption("Csezd meg!", function(){
	site40.removeOption(site40o_e);
	jump(site40);
});

site46 = new Site("site46");
site46.description = "<p>Egy sötét kis helyiségbe jutsz, melyet a színpad deszkái közt beszűrődő fény világít meg. A helyiség padlótól a kis plafonig tele van számítógépkacatokkal. Chiphuzalokból készült a hintaágy. Számítógépházakból a szekrények és komódok és egy kis nintendo kijelző funkcionál TVként. <br/>-Légy üdvözölve !- kiált a manó boldogan és körbemutat, majd lehuppan néhány vezetékre. <br/>- Így éldegélek én itt a számítógépes szemétben és meg is eszem ! Nyam nyam, kedvencem a klaviatúra. Csak úgy ropogtatom a billentyűket-fejezi be mondandóját. <br/>Milyen kedves kis teremtmény - suhan át az agyadon.</p>";
site46.addOption("Szeretnél még beszélgetni vele", function(){
	jump(site47);
});
site46.addOption("Távozol", function(){
	jump(site47);
});
site46.addToolRelay("klaviatúra", function(){
	jump(site48);
});


site47 = new Site("site47");
site47.description = "<p> A kedves kis manó odalép hozzád , majd leharapja a fél arcodat és csámcsogni kezd. Persze ha nincs klaviatúra-böfögi- akkor jó lesz a csontropi is. Döbbenten bámulod, ahogy felzabál, mivel a szemgolyóidat hagyja utoljára az esti koktéljához. Végül azt is kiszürcsöli, közben a Nintendón nézi a híreket. Kalandod itt véget ért ! A számítógépalkatrészevő piroskockáspólós manó vacsorája lettél! BÖFFF</p>";
site47.deadend = true;

var lazer = new Tool("lézer");
site48 = new Site("site48");
site48.description = "<p>A manócska vidáman kezdi zabálni a billentyűzetet.<br/>-Mmmm már nagyon éhes voltam.- közli miközben bedobja az Esc gombot,  mint egy cukorkát. - Kedvencem az Enter, azt  mindig a végére hagyom... - kacsint rád. - Hadd adjak neked cserébe valamit ..-sipítja miután végzett az ebédjével. Felpattan és guberálni kezd a kacatokban.<br/>-Nézd, ezt a kis felkapcsolható lézert nemrég találtam az erdőben, valószínűleg UFO eredetű, még hasznodra lehet ! - azzal átnyújt egy kis lézereszközt, melyet úgy tűnik fel lehet erősíteni valamire.</p><p> Megköszönöd, majd jobbnak látod magára hagyni az örökké éhes kis zabagépet.</p>";
site48.openAction = function(){
	lazer.owned = true;
	klaviatura.owned = false;
};
site48.addOption("Visszatérsz a színpad elé flangálni.", function(){
	site40.removeOption(site40o_d);
	jump(site40);
});

var sajtreszelo = new Tool("sajtreszelő");
site49 = new Site("site49");
site49.description = "<p>Óóóó- hördülnek fel a parasztok a nagycsöcsös CD borító láttán. - Nem tudunk cserébe adni semmit, talán ezt az ócska sajtreszelőt, ezzel szoktam reszelni a lábamról a sárga bőrkeményedéseket..- mondja a beszélni tudó troglodita.</p><p>Fintorogva beleegyezel a cserébe.</p>";
site49.openAction = function(){
	erikac64cdje.owned = false;
	sajtreszelo.owned = true;
};
site49.addOption("magukra hagyod a fellelkesült rajongókat", function(){
	site40.removeOption(site40o_b);
	jump(site40);
});

site50 = new Site("site50");
site50.description = "<p>Beledugod a kis ember ujjait a makaróniba és azok lassanként felengednek, lepuffadnak. <br/>- A nedves tészta jót tesz kezeinek ! <br/>- Köszönöm a segítséget ! Hogyan hálálhatnám meg ? - kurjongat a kivirult zenész.- Fogadd el kérlek kedvenc nagyítómat, még segíthet neked !<p>Megköszönöd az ajándékot</p>";
site50.addOption("visszatérsz a színpad elé.", function(){
	makaronio.owned = false;
	nagyito.owned = true;
	site40.removeOption(site40o_a);
	jump(site40);
});



site55 = new Site("ZENESÁTOR");
site55.description = "<p>Egy igénytelen, szakadtas katonai sátor közelébe érsz. Körülötte és benne padok és asztalok szanaszét. Az asztalok csordultig vannak sörösdobozokkal, borosüvegekkel, rögtönzött hamutartókkal és mindenféle szeméttel. Jópáran üldögélnek itt és úgy tűnik nem most kezdték a piálást. Üvöltözve röhögcsélnek és bárgyú történeteket mesélnek. A sátor hátsó sarkában különböző zenecuccokat látsz, meg egy rakat CD-t. Az egész sátrat és környékét betölti a dübörgő metál zene. Valaki a sátor mögött a saját hányásában fekszik és egy kissrácot is látsz rohangálni vízipisztollyal. Idelátszik a focipálya és a tornaterem főbejárata.</p>";
addFieldaction(site55);
site55o_a = site55.addOption("Beszédbe elegyedsz a részegeskedőkkel", function(){
	jump(site56);
});
site55o_b = site55.addOption("Beszélsz a szaladgáló gyerekkel", function(){
	jump(site57);
});
site55o_c = site55.addOption("Keresel pia és cigimaradékokat és feléled", function(){
	jump(site58);
});
site55o_d = site55.addOption("Megvizsgálod a zenecuccot és a lemezeket", function(){
	jump(site59);
});
site55o_e = site55.addOption("Megvizsgálod a hányásában fekvő alakot", function(){
	jump(site60);
});

var limonade = new Tool("limonádé");
site56 = new Site("site56");
site56.description = "<p>Kiderül, hogy a hangoskodó társaság csak egy csapat kiscserkész és limonádéval is megkínálnak. Mivel részeg vagy, most nem kívánod. Elteszed későbbre.</p>";
site56.addOption("visszatérsz a sátor elé nézelődni.", function(){
	limonade.owned = true;
	site55.removeOption(site55o_a);
	jump(site55);
});

site57 = new Site("site57");
site57.description = "<p>Hé. kiscsávó ! - szólsz a kölöknek, mire nevetve fejbelő a vízipisztollyal és elszalad. Egy darabig kergeted a sátor körül, majd feladod.</p>";
site57.addOption("Visszatérsz nézelődni a sátor elé.", function(){
	site55.removeOption(site55o_b);
	jump(site55);
});


site58 = new Site("site58");
site58.description = "<p>Módszeresen átvizsgálod az asztalokat, míg találsz még viszonylag hideg söröket, amik nem fáradtak be. Összeöntöd őket egy félig megivott borral, majd letarhálsz valakit cigivel. Elégedetten pöfékelsz a piát kortyolgatva.</p>";
var site58o_a = site58.addOption("Tovább piálgatsz", function(){
	jump(site61);
});
site58.addOption("Készítesz egy dobit", function(){
	jump(site62);
});
site58.addOption("Visszatérsz a sátor elé nézelődni", function(){
	jump(site55);
});

site59 = new Site("site59");
site59.description = "<p>Közelebb mész a sarokban álló padhoz, ahol a hangfalak dübörögnek: A közepén egy számítógép és mindenféle lemezek. Hirtelen egy kis köpcös alak ugrik fel a túloldalán.<br/>- Hé, mi van pöcs ? Itt én vagyok a dj. Na húzzál innen !</p>";
site59.addOption("oké", function(){
	jump(site55);
});	
site59.addToolRelay("kiscica", function(){
	kiscica.owned = false;
	site55.removeOption(site55o_d);
	jump(site68);
});

site60 = new Site("site60");
site60.description = "<p>Úgy tűnik, hogy a fekvő részegnek nem sok ideje van hátra. Kiveszed a kezéből a sörösüveget és megiszod a maradékot. Ne menjen kárba ! Leböffented a fejét és rácsulázol.</p>";
site60.addOption("Beletaposod a fejét a sárba", function(){
	jump(site69);
});
site60.addOption("Átkutatod", function(){
	jump(site70);
});
site60.addOption("Visszatérsz nézelődni a sátor elé", function(){
	site58.removeOption(site58o_a);
	jump(site55);
});

site61 = new Site("site61");
site61.description = "A többiek hoznak neked pár sört, mert látják, hogy csóróskodsz és tekernek cigit is. Kellemes órácskát töltesz el üldögéléssel.";
site61.addOption("Most készítesz egy dobit", function(){
	jump(site62);
});
site61.addOption("Visszatérsz a sátor elé nézelődni", function(){
	jump(site55);
});


site62 = new Site("site62");
site62.description = "<p>Az elszívott cigicsikkeket beledobálod egy befőttesüvegnyi lébe, majd kicsit ázni hagyod. Kész is a dobi ! Jó ízzel nekilátsz az elfogyasztásának és érzed, hogy rohadtul felpörögsz a sárgás, nikotinos löttytől. Elkezdesz őrjöngeni és átmész berserker módba. Szétütsz egy asztalt, amiről a piák szanaszét repülnek, majd szaggatni kezded a sátrat.<br/>Hé nyugodj már le ! - szól rád valaki.</p>";
site62.addOption("Szót fogadsz és lenyugszol", function(){
	jump(site55);
});
site62.addOption("hagyod dolgozni a dobit és tovább őrjöngesz", function(){
	jump(site63);
});

site63 = new Site("site63");
site63.description = "<p>Hirtelen megjelenik Jean-Claude Van Damme és kirúgja a lábad, majd a fejedet beletapossa a sárba. <br/>- Gyere csicska ! - kiáltja és az egyik lábát a levegőbe emeli.</p><p>Szóval ezért volt annyira ismerős a JCVD rendszám, az ő autóját láttad !</p>";
site63.addOption("Harcolsz vele", function(){
	jump(site64);
});
site63.addOption("Meghunyászkodsz és visszatérsz nézelődni", function(){
	jump(site55);
});

site64 = new Site("site64");
site64.description = "<p>- Gyere csicska, széthasítom a fejed, mint a dinnyét ! - Rárúgsz a lábára, mire fordulatból megpróbál lábat söpörni. Te felugrasz előle egy asztalra és feléhajítasz 3 sörösüveget. Kettő elől félrehajol, de a harmadik telibekapja. Vérzik az arca és vicsorog.<br/>- Tirpák geci ! - kiáltja és mint a tigris rugaszkodik feléd. Elkapja a lábaid és bukfencben levisz az asztalról. Valaki felsikít. Jean-Claude megpróbálja leharapni a füled, mire te a nyakát téped a fogaiddal.<br/>- Öööee, te vérgödény ! - prüszkölöd és egy adag hányadékos vért köpsz az arcába.<br/>- Add fel digóóó !- hörgi utolsó erejével.</p>";
site64.addOption("Feladod", function(){
	jump(site65);
});
site64.addOption("Leszakítod a tökeit", function(){
	jump(site66);
});

var antennaskapcsolo = new Tool("antennás kapcsoló");
site65 = new Site("site65");
site65.description = "<p>Feladom ! - nyöszörgöd és JCVD lepattan rólad. Jól van barátom, nagy harcos vagy, de tudod hol a határ ! Meghajol előtted és csinál valami hülye harcművészeti köszönést.<br/>- Ezennel meghívlak téged a titkos mesterek tornájára, mely ezen tábor alatt van egy titkos helyen. - ezzel átnyújt neked egy kis antennás kapcsolót. Ezt használd a megfelelő helyen ! - mondja és elhátrabukfencezik.</p>";
site65.addOption("Fakkyeah!", function(){
	antennaskapcsolo.owned = true;
	site55.removeOption(site55o_c);
	jump(site55);
});

site66 = new Site("site66");
site66.description = "<p>Rámarkolsz a golyókra és leszakítod. Ekkor JCVD szétrobban. Egy önmegsemmisítő volt beépítve a heréibe ! A robbanás téged és az egész Árok partit is miszlikbe szakítja.</p><p>Kalandod egy füstfelhő kíséretében véget ért !</p>";
site66.deadend = true;

site67 = new Site("site67");
site67.description = "<p>- Júdea papja vagyok ! - mondja a furcsa dj. - És nem érdekel a mondanivalód  !...</p>";
site67.addOption("Csalódottan térsz vissza a sátor elé.", function(){
	jump(site55);
});
site67.addToolRelay("kiscica", function(){
	kiscica.owned = false;
	jump(site68);
});

site68 = new Site("site68");
site68.description = "<p>Elengeded az aranyos kiscicát, hogy játszadozzon. A macsek felugrik az asztalra és elkezdi borítgatni a felszerelést. A dj riadtan kiabál és próbálja elhajkurászni az állatot. Azonban az egyik CD-je lecsússzan a kupacból, gyorsan zsebre teszed. Egy Erika C64 lemez az !</p>";
site68.addOption("fakkyeah!", function(){
	erikac64cdje.owned = true;
	jump(site55);
});


site69 = new Site("site69");
site69.description = "<p>Kicsit ráállsz a fejére és az arcát a földbe passzírozod. Elégedetten nevetsz vicceden.</p>";
site69.addOption("Átkutatod", function(){
	jump(site70);
});
site69.addOption("Visszatérsz a sátor elé nézelődni", function(){
	jump(site55);
});

var kulcs = new Tool("kulcs");
site70 = new Site("site70");
site70.description = "<p>Egy kis kulcsot találsz a fickónál, vajon honnan szerezhette ?</p>";
site70.addOption("Elteszed majd visszatérsz a sátor elé nézelődni", function(){
	site55.removeOption(site55o_e);
	kulcs.owned = true;
	jump(site55);
});

site75 = new Site("FOCIPÁLYA");
site75.description = "<p>A focipályán fekszenek néhányan akik a hőségtől szívinfarktust kaptak, egyébként a terep elég elhagyatottnak tűnik.  Hortyogás üti meg a füled és egy dagadt kékzöld macskamackó szerű pokémont veszel észre az egyik fa alatt szundítani. Snorlax az ! Tőle nem messze vakondtúrásokat látsz, az egyik kapuban pedig egy leeresztett futball labdát.</p>";
addFieldaction(site75);
var site75o_a = site75.addOption("Megvizsgálod a Snorlaxot", function(){
	jump(site76);
});
var site75o_b = site75.addOption("Megvizsgálod a vakondtúrásokat", function(){
	jump(site77);
});
var site76o_c = site75.addOption("Végigsétálsz a focipálya vonalain", function(){
	jump(site78);
});
var site75o_d = site75.addOption("Bemész az erdőbe kakálni", function(){
	jump(site79);
});
var site75o_e = site75.addOption("Kicsit lasztizol", function(){
	jump(site80);
});
site75.addToolRelay("antennás kapcsoló", function(){
	jump(site85);
});


site76 = new Site("site76");
site76.description = "<p>Úgy tűnik Snorlax nagyon mélyen alszik. Hortyogása betölti az egész focipályát. Talán fel tudnád ébreszteni valahogyan, de egyelőre nincs ötleted.</p>";
site76.addOption("Visszatérsz a focipálya szélére", function(){
	jump(site75);
});
site76.addToolRelay("megfőtt kutya", function(){
	megfottkutya.owned = false;
	jump(site81);
});

var nutella = new Tool("nutella");
site77 = new Site("site77");
site77.description = "<p>Több vakondlyukat is látsz itt, melyből kíváncsi fejek merednek rád. Játékos vakondok fickándoznak a túrásokban, de ahogy közeledsz riadtabban mélyebbre ássák magukat.</p>";
site77.addOption("Belepisálsz a járatokba", function(){
	jump(site82);
});
site77.addOption("Megpróbálsz beszélgetni a vakondokkal", function(){
	jump(site83);
});
site77.addOption("Visszatérsz a focipálya szélére", function(){
	jump(site75);
});

site78 = new Site("site78");
site78.description = "<p>Elindulsz az egyik szöglettől, azonban nem veszed észre, hogy egy kosárpálya vonalait is felfestették. Figyelmetlenséged eredményeképpen sajnos eltévedsz és sosem találsz ki a beton focipályáról. Sikolyod az erdő sodorja  holdfényes éjszakákon. Sajnáljuk, de ez a meccs számodra véget ért !</p>";
site78.deadend = true;

site79 = new Site("site79");
site79.description = "<p>Érzed, hogy a sörözős életmódod eredményeképpen valami folyós, híg folyadék akar távozni hátsó lukadon. Gyorsan kioldod a gatyád ahogy szaladsz, de sajnos a térdedre csúszik és elesel. Közben összefosod magad és az árokba gurulsz. A fosszagra előjön egy farkas aki nyalogatni kezdi a frissen leszart lábaidat, majd bevonszol odújába, ahol arra kényszerít, hogy a kölykeit neveld.</p><p>Évekig ott tart és teljesen elveszted a kapcsolatot a külvilággal, elállatiasodsz. Hörögve kommunikálsz a farkasokkal és vadászni is velük jársz. Kijártok a faluba, és hébe hóba egy-egy embert is elejtetek. Majd elüt téged egy autó és a tested bekerül egy múzeumba. 150 év múlva egy tudós mintát vesz belőled, klónoz, majd visszaküld a múltba a focipályára. Az emlékek nyomasztanak.</p>";
site79.addOption("Folytatod küldetésed", function(){
	site75.removeOption(site75o_d);
	jump(site75);
});

site80 = new Site("site80");
site80.description = "<p>Próbálgatod a leeresztett focilabdát, de rájössz, hogy ez egy hülye játék és inkább iszol egy sört.</p>";
site80.addOption("Visszatérsz a focipálya elé nézelődni.", function(){
	site75.removeOption(site75o_e);
	jump(site75);
});

var kodrus = new Tool("kód RUS");
site81 = new Site("site81");
site81.description = "<p>Legyömöszölöd Snorlax torkán a főtt kutyát, mert olvastad valami hülye pokémon kézikönyvben, hogy ő nagyon szereti a kutyákat. :) Erre abbahagyja a hortyogást és kipattannak a szemei.<br/>-ÁÁáá te vagy az ?! - ásítja cseppet sem meglepetten, majd folytatja - Nos én a játék készítője vagyok, meglehetősen lusta teremtés. De tudtam, hogy jönni fogsz és ezért át kell adnom neked valamit. Tulajdonképpen azért alszom itt a játékban és van nálam ez a tárgy, mert lusta voltam még ezt is beleírni a játék történetébe. Szóval tessék ! - azzal átnyújt neked egy cetlit a következő felirattal : RUS. Hmmm ez is valami kód lehet... - nézegeted a cetlit majd bedobod a felszerelésed közé.</p>";
site81.openAction = function(){
	kodrus.owned = true;
}
site81.addOption("hagyod Snorluxot hadd pihenjen tovább", function(){
	site75.removeOption(site75o_a);
	jump(site75);
});

site82 = new Site("site82");
site82.description = "<p>Elkezded kiengedni a napi söradagot lerombolva ezzel a vakondokok nyílásait.  Azonban hirtelen az egyik kiugrik a föld alól és ráharap a locsolócsődre. Éles fogaival súlyos sebeket ejt és gyorsan elvérzel. Ezután a vakondokok behúznak a járataikba és elraktároznak télire. Vakondvacsora lettél !</p>";
site82.deadend = true;

site83 = new Site("site83");
site83.description = "<p>Habla espanol ? - kérdezed a vakondoktól. <br/>- Si si - felelik - de beszélünk jól magyarul is. Még Castro miatt költöztünk ide Kubából. Az amerikai autók pedig áthajtanak a fejünkön. A járatainkba rendszeresen betör a tengervíz. Magyarország sokkal kedvezőbb tájfekvésű. És itt Ajkarendeken semmi nem zavar minket, csak a hülye számítógépesek évente egyszer. De ők is rendesek, néha hoznak nekünk ennivalót. - A vakondok nagyon közlékenynek bizonyulnak.</p>";
site83.addOption("Lepisálod a járataikat", function(){
	jump(site82);
});
site83.addOption("Visszatérsz a focipálya széléhez", function(){
	jump(site75);
});
site83.addToolRelay("nutella", function(){
	jump(site84);
});

var godzillababa = new Tool("godzilla baba");
site84 = new Site("site84");
site84.description = "<p>Kiöntöd a nutellát a vakondtúrások mellé. A vakondokok megvárják míg arrébb mész, majd félénken elfogyasztják kedvenc csemegéjüket. Visszamásznak a lukakba, ahonnan ekkor egy kis bábú repül ki. Leporolod és egy kis godzilla baba az ! Valószínűleg a vakondokokokok így hálálják meg neked, hogy megetetted őket. Kedvenc babájukat adják neked !</p>";
site84.addOption("fakkyeah", function(){
	site75.removeOption(site75o_b);
	godzillababa.owned = true;
	nutella.owned = false;
	jump(site75);
});

site85 = new Site("site85");
site85.description = "<p>Bepattintod a kapcsolót és ekkor a focipálya közepe félrehúzódik, majd egy lift emelkedik a magasba. Érdeklődve szállsz be. Az ajtók becsukódnak és a lift elindul veled lefele. Mikor kinyílik az ajtaja egy gyönyörű réten találod magad, melyet virágzó japán cseresznyefák ölelnek körbe. A rózsaszín levelek puhán hullámoznak a szélben, a nap vakítóan ragyog. Nem tudod ez hogyan lehetséges, de a látvány teljesen elvarázsol. Kilépsz a liftből és ekkor egy alacsony kínai embert veszel észre előtted törökülésben.</p><p><b>Mit teszel?</b></p>";
site85.addOption("Lerúgod a fejét", function(){
	jump(site86);
});
site85.addOption("Kérdezel őle valamit kínaiul", function(){
	jump(site87);
});
site85.addOption("Átugrod", function(){
	jump(site88);
});

site86 = new Site("site86");
site86.description = "<p>A kínai feje fémből van. Amint belerúgsz a lábad véres péppé válik. Legközelebb dönts okosabban. Ha ha ha.</p>";
site86.deadend = true;

site87 = new Site("site87");
site87.description = "<p>Csing Csöng ! - mondod az üldögélő kínainak. Ő kinyítja szemeit és így felel : Én lenni Láá Lee a kínai cigány. Nekem jut Nukupina csak Csa Csi. A fiam Kup Lung hozott a taxiján.</p>";
site87.addOption("Megunod és lerúgod a fejét", function(){
	jump(site86);
});
site87.addOption("Átugrod", function(){
	jump(site88);
});

site88 = new Site("site88");
site88.description = "<p>Átrepülöd a kis törpét, aki hiába kap utánad. Lehuppansz a földre és ekkor a fákon egy fekete ninját szúrsz ki. Valami villan a kezében.</p>";
site88.addOption("Vársz egy kicsit mi történik", function(){
	jump(site89);
});
site88.addOption("Félrebukfencezel", function(){
	jump(site90);
});
site88.addOption("Felédobsz egy tárgyat a zsebedből", function(){
	jump(site91);
});

site89 = new Site("site89");
site89.description = "<p>A ninja belédhajít egy dobótőrt ami mérgezett. Hahaha ismét meghaltál.</p>";
site89,deadend = true;

site90 = new Site("site90");
site90.description = "<p>Mint a villám cselekedsz régi mestered tanítására emlékezve, aki azt mondta : Jobb ma egy túzok, mintha holnap púzok. Felpattansz és észreveszed, hogy a ninja közben leugrott mögéd a tisztásra. <br/>- Az utolsó ninja vagyok - sziszegi feléd. - Életre keltem a C64 játékokból. Hatalmam végtelen, csak a tisztelet állíthat meg. Válaszolj hát őszintén : Végigjátszottad valaha valamelyik Last Ninja részt ?</p>";
site90.addOption("Igen", function(){
	jump(site92);
});
site90.addOption("Nem", function(){
	jump(site93);
});


site91 = new Site("site91");
site91.description = "<p>Mielőtt elhajítanád a tárgyat egy mérgezett dobótőr fúródik a nyakadba. Azonnal meghalsz és még meg is mérgeződsz. A róka ami majd belőled eszik szintén meghal. Te és a róka meghaltatok.</p>";
site91.deadend = true;


site92 = new Site("site92");
site92.description = "<p>Az Utolsó Ninja meghajol előtted majd dob magára egy füstbombát és eltűnik. Még hallod a füstben suttogását : Keresd az igazi tudást, tiszteld a régieket!  Szavai értelmén filózol, amikor a sűrű fehérségből egy sárkányalak támad neked !!!</p>";
site92.addOption("Karatézol vele", function(){
	jump(site94);
});
site92.addOption("Megpróbálsz láthatatlanná válni", function(){
	jump(site95);
});
site92.addOption("Hagyod, hadd győzzön le", function(){
	jump(site96);
});

site93 = new Site("site93");
site93.description = "<p>Térj vissza ha már tanultál egy kis ninjatudást ! - mondja az Utolsó Ninja és a fejedbe köp egy mérgezett bambusztűt.</p>";
site93.deadend = true;


var shuriken = new Tool("shuriken");
site94 = new Site("site94");
site94.description = "<p>Hadzsime ! -  kiáltod és védekezni kezdesz. A sárkány meglepetésszerűen érkezett, de most, hogy számítasz rá már nem ellenfél. Gyorsan széttöröd a sárkánymaszkot és a benne megbújó embert. Ekkor megjelenik Jean-Claude Van Damme. <br/>- Gratulálok ! Végigjártad a titkos mesterek próbáját. Ajándékod egy ősi ninja shuriken !.... - azzal elenyészik a füstben és még hallod a következőket <br/>- Sajnos az új filmjeim már elég bénák, ne nézd meg őket, inkább járj te is karatézni filmnézés helyett. És kérem vissza az antennás kapcsolót.</p></p>Megfogadod a jótanácsotó, majd visszaliftezel a focipálya szélére.</p>";
site94.addOption("fakkyeah", function(){
	shuriken.owned = true;
	antennaskapcsolo.owned = false;
	jump(site75);
});

site95 = new Site("site95");
site95.description = "<p>Beleolvadsz a ködbe, de a sárkányalak rád talál !!!</p>";
site95.addOption("Karatézol vele", function(){
	jump(site95);
});
site95.addOption("Hagyod, hadd győzzön le", function(){
	jump(site96);
});

site96 = new Site("site96");
site96.description = "<p>A sárkány lekaratéjoz, mert nem védekezel. Hahahaha te hülye mit gondoltál, tényleg ez a megoldás ?:)</p>";
site96.deadend = true;

site100 = new Site("TUSOLÓK");
site100.description = "<p>Egy elhagyatott mellékszárny előtt állsz. A falak romosak, az ablakok néhol betörve, de mindenhol rács. Kísérteties fény szűrődik ki. A falon egy graffitit látsz : Az Árok egy szar.. felirattal. Előtted egy ajtó, megpróbálod, de zárva van. A bokorban viszont mintha mocorogna valami.</p>";
addFieldaction(site100);
var site100o_a = site100.addOption("Megvizsgálod a bokrot", function(){
	jump(site101);
});
var site100o_b = site100.addOption("Rárúgsz az ajtóra", function(){
	jump(site102);
});
site100.addToolRelay("budikulcs", function(){
	jump(site104);
});

site101 = new Site("site101");
site101.description = "<p>A bokorban egy letolt gatyájú alakot látsz, aki épp egy kibelezett C64 floppy lejátszóba tömködi a micsodáját. Ez az, mindjárt betöltődik ! Loading, run, kicsim run ! - hirtelen vér fröcsköl ki a gépből . - Syntax error - üvölti a perverz és eldől.</p>";
site101.addOption("Úgy érzed eleget láttál.", function(){
	site100.description = "Egy elhagyatott mellékszárny előtt állsz. A falak romosak, az ablakok néhol betörve, de mindenhol rács. Kísérteties fény szűrődik ki. A falon egy graffitit látsz : Az Árok egy szar.. felirattal. Előtted egy ajtó, megpróbálod, de zárva van. A bokor mozgását kizárja a tudatod."
	site100.removeOption(site100o_a);
	jump(site100);
});

site102 = new Site("site102");
site102.description = "<p>Nekifutsz és megcélzod egy szép repülőrúgással az ajtó közepét. A lábad áttöri a deszkát, a térded reccsen egy hatalmasat. Az ajtó felé zuhansz, a lábad még mindig bent van. Ekkor valaki megszólal bentről <br/>- Magának igen erős lába van, majdnem leütötte vele a szemüvegem</p>";
site102.addOption("Beszédbe elegyedsz a hanggal", function(){
	jump(site103);
});
site102.addOption("Ijedtedben kihúzod a lábad", function(){
	site100.removeOption(site100o_b);
	jump(site100);
});

site103 = new Site("site103");
site103.description = "<p>- Ki maga ? - kérdezed érdeklődve és megemeled a benti lábad kérdőn. Ekkor olyan hangot hallasz, mintha valaki egy szamurájkardot húzna elő. Bizsergető, égető érzés tör rád és bent valami a földre zuhan. Meleg ragacs folyik a lábadon. Kihúzod és észreveszed, hogy térdből hiányzik !!!! <br/>- ÁÁÁÁhhh mentőt !!! - kiáltod, majd elájulsz, s többet fel se kelsz, hahaha a gyilkos elkapott.</p>";
site103.deadend = true;

site104 = new Site("site104");
site104.description = "<p>A kulcs passzol a zárba.Kinyitod az ajtót és egy romos folyosóra érsz. Egy lámpa pislákol néha-néha felvillantva a szétszórt törmeléket, de így is sok sötét sarok marad. Mögüled a sötétből valami morgást hallasz.</p><p><b>Merre indulsz?</b></p>";
site104.addOption("A sötétbe", function(){
	jump(site105);
});
site104.addOption("Előre a folyosón ", function(){
	jump(site106);
});

site105 = new Site("site105");
site105.description = "<p>Egyre beljebb mész a bársonyos sűrű mélysötétbe. Egy idő után nem érzékeled a falakat magad körül és megszűnik az időérzéked. Olyan sötétbe kerülsz, hogy azt sem tudod elolvasni mi van ide írva. Ezért meghaltál ! :)</p>";
site105.deadend = true;

site106 = new Site("site106");
site106.description = "<p>Elindulsz előre és egy félig behajtott ajtóhoz érsz. Furcsa szag árad ki, mint a saját szobád pár hét után. Óvatosan benyitsz és elhűlsz a látványtól. Egy mocskos wc-t látsz, melynek közepén egy felakasztott takarítónő lóg. Virágos ruhácskája feszül tottyadt testén, lábáról lehullott a vastag fehér papucs. Szódásszifon szemüvege alatt látod kidülledt, felnagyított szemgolyóit. Enyhén körbeforog, mint egy ventillátor és halkan nyikorog.</p><p>A wc szélén egy kis pénzszedő asztalka van, rajta egy nyitott könyv.</p>";
var site106o_a = site106.addOption("Elolvasod a könyvet", function(){
	jump(site107);
});
var site106o_b = site106.addOption("Pénzt dobsz a tálkába és wczel ", function(){
	jump(site108);
});
var site106o_c = site106.addOption("Átkutatod a néni testét", function(){
	jump(site109);
});
var site106o_d = site106.addOption("Bokszolsz kicsit a néni testén", function(){
	jump(site110);
});
var site106o_e = site106.addOption("Visszatérsz a tusoló épülete elé", function(){
	jump(site100);
});

site107 = new Site("site107");
site107.description = "<p>A kis könyv címlapján felirat : <b>A wc-s néni naplója</b>  Beleolvasol.</p> <p class='handwrite'>Nem bírom tovább ! Eddig tűrtem, sikáltam a szart, a hányást. Az árok partisok telekakálták az épületet, Undorító gyrosos mócsingokat hagyva, sok meg nem emésztett hagyma, bűzös galacsinok halma. És én tűrtem, nyeltem a szart. De van valaki, egy titkos férfi. Feltételezem, hogy férfi, de még sosem láttam. Beoson ide és szétszar mindent, telekeni a falakat, a csapokat, a székemet, még a Füles rejtvényújságomat is ! Pedig majdnem teljesen megfejtettem. Ez az idegen olyan dögletes trottyintásokat hagy maga után, hogy nem bírom tovább. A víz nem mossa le. A wc kefét szétmarja. Gumikesztyűvel tömködöm le a lukba. A térgykalácsom teljesen kikészült. Reumás és vízszeres vagyok.</p><p>Erzsikém nem bírom tovább. Nem lesz több zsírosdeszka a kisonokámnak ! Felmondok !</p><p>.... Itt véget ér a napló. Szomorúan bámulsz a szegény wc-s néni testére, aki mellett mindenki elsétált és akivel nem törődött senki. De vajon ki lehetett az a titokzatos idegen akiről beszélt ?</p><p> Körbeszagolsz és magad is valami állatias bűzt érzel a helyiségben. Úgy döntesz kinyomozod ki lehet ez a titokzatos idegen, aki hasonló különleges eseményeket produkál a táborban.</p><p> Ez lesz játékod célja kedves játékos !!! Nyomozz és találd meg kivel állsz szemben !! Jó játékot !!!</p>";
site107.addOption("tovább nézelődsz a helyiségben", function(){
	site106.removeOption(site106o_a);
	jump(site106);
});

site108 = new Site("site108");
site108.description = "<p>Dobsz egy 50-est a tálkába, majd meggondolod magad és kicseréled egy 20-asra. Elvégre mégis halott a néni..- gondolod szolidárisan. Majd indulnál pössenteni, de szörnyülködve veszed észre, hogy a néni megmozdul. Lába kapálózik, keze kinyúlik, szemét kinyitja. A pedáns wc-s néni még holtában is teljesíteni akarja feladatkörét. Leszakítja magát a lámpáról és feléd indul. Ledermedsz félelmedben. A wc-s zombi néni elér és lerángatja a gatyád. Pisikaki ! - hörgi és letépi a pöcsöd, miközben púzódba helyezi karmos kezét, ami a szádon bukkan ki. Feltrancsíroztak !</p>";
site108.deadend = true;

site109 = new Site("site109");
site109.description = "<p>A néni zsákként nyikorog a pislákoló villanykörte zsinórjáról. Köpenye zsebeiben semmit nem találsz, kicsit megtapogatod a melleit. Majd a lejjebb haladsz , de a pállott harisnyája se rejt titkokat. Azonban a vastag, kérges, puffadt, sárgás, sajtszerű talpain észreveszel valamit.  Mintha valaki csinált volna valamit a néni sarkaival, azonban olyan vastag a felesleges bőrréteg rajta, hogy nem tudod megállapítani mi az.</p>";
site109.addOption("Visszatérsz a helyiségbe nézelődni.", function(){
	jump(site106);
});
site109.addToolRelay("sajtreszelő", function(){
	sajtreszelo.owned = false;
	jump(site111);
});

site110 = new Site("site110");
site110.description = "<p>Rocky !!!! - kiáltod - érted tettem ... Belököd kicsit a nénit, majd elkezded kloffolni. Helyezgeted az ütéseket a zsíros szétmállott testére. Nagy lila foltokat hagysz. Tehetetlen teste hatalmasakat csattan és valami zöld lé is fröcsög belőle. Kigyakorlod magad, majd elégedetten körbetáncolod.</p><p>Rockyyy !!</p>";
site110.addOption("Tovább nézelődsz a wc-ben.", function(){
	site106.removeOption(site106o_d);
	jump(site106);
});

var kodosau = new Tool("kód OSAU");
site111 = new Site("site111");
site111.description = "<p>Lereszeled a néni lábáról a felesleges bőrdarabkákat és ekkor nyilvánvaló lesz, hogy valaki egy üzenetet rejtett a néni sarkába. Pontosabban egy cetlit melyen a következő felirat olvasható : OSAU   Hmm ez talán egy kód. elteszed a cetlit, eldobod a budikulcsot, majd elhagyod az épületet</p>";
site111.openAction = function(){
	kodosau.owned = true;
	budikulcs.owned = false;
};
site111.addOption("fakkyeah!", function(){
	site106.removeOption(site106o_c);
	jump(site106);
});


site120 = new Site("TORNATEREM");
site120.description = "<p>Besétálsz az Árok party fő helyiségébe. A tornaterem tömve van asztalokkal, melyeket C64ek, Amigák és különböző retrokütyük borítanak, az egész egy kábeldzsungel. Szemben a kisszínpad felett egy kivetítő van, amin valami retro játékverseny folyik. Alatta az egyik sarokban pedig Elvira a 2017-es év házigazdanője feszít szokásosan elragadó, csábós, testhezálló , combnál felhasított fekete gönceiben és harisnyában, óriási dekoltázzsal párosítva hozzá való dinnyékkel. Épp egy interjú előtt van valakivel és a részleteket beszélik meg. A hozzád közeli sarokban egy hűtőt veszel észre. Komoly számítógépezés is folyik, egy joystickot, klaviatúrát püfölő figura hívja fel a figyelmed, valamint egy óriási agy előtt kuporgó zseni kinézetű programozó.</p>";
addFieldaction(site120);
var site120o_a = site120.addOption("Beszállsz a retro játékversenybe", function(){
	jump(site123);
});
var site120o_b = site120.addOption("Beszélsz Elvirával", function(){
	jump(site131);
});
var site120o_c = site120.addOption("Megnézed min ügyködik a programozó", function(){
	jump(site140);
});
var site120o_d = site120.addOption("Megnézed a másik ordibáló figurát", function(){
	jump(site135);
});
var site120o_e = site120.addOption("Megvizsgálod a hűtőt", function(){
	jump(site121);
});


site121 = new Site("site121");
site121.description = "<p>A hűtőn egy lakatot veszel észre és hiába próbálod, nem nyílik.</p>";
site121.addOption("Visszatérsz nézelődni  a terem többi részébe", function(){
	jump(site120);
});
site121.addToolRelay("kulcs", function(){
	jump(site122);
});

site122 = new Site("site122");
site122.description = "<p>Bepattintod a zárba a kis elzett kulcsot és leoldod a lakatot.</p><p>Pár hetes ételmaradékok szaga csapja meg az orrod, ahogy kitárod a hűtő ajtaját. Miután beleeszel egy már szöszös jégkrémbe és leöblíted egy kis penészes kólával, csupán 2 hasznosnak tűnő dolgot találsz. Egy nutellás üveget és egy adag makarónit. Elteszed őket későbbre.</p>";
site122.openAction = function(){
	makaronio.owned = true;
	nutella.owned = true;
	kulcs.owned = false;
};
site122.addOption("visszatérsz a tornaterem többi részébe vegyülni.", function(){
	site120.removeOption(site120o_e);
	jump(site120);
});

site123 = new Site("site123");
site123.description = "<p>A többiek épp az Űrutazó 3000 nevű fantasztikus scifijátékkal lövöldöznek, valami olyasmi lehet a cél, hogy hamarabb szállítsd le a piros plutóniumot a Xerox bolygó valamelyik bázisára.</p>";
site123.addOption("Elindulsz az űrhajóddal a többieket követve", function(){
	jump(site124);
});
site123.addOption("Elkezdesz lövöldözni összevissza mindenkire", function(){
	jump(site125);
});
site123.addOption("Megunod a játékot és inkább vegyülsz a tömegben", function(){
	jump(site120);
});

site124 = new Site("site124");
site124.description = "<p>Elhagyjátok a Jupiter holdjait és kilőttök fénysebességgel. A plutóniumod nagyon rázkódik. A fénysebességből kiléptek a Xerox mellett.</p>";
site124.addOption("Lassítasz", function(){
	jump(site130);
});
site124.addOption("Kockáztatsz, hogy megelőzd a többieket", function(){
	jump(site129);
});

site125 = new Site("site125");
site125.description = "<p>Egy kis zavar támad, mert nem számítanak a trollkodásodra. Kilősz 2 játékost, de a többiek összefognak ellened és kénytelen vagy menekülni</p>";
site125.addOption("Kamikaze módra nekirepülsz a többieknek", function(){
	jump(site126);
});
site125.addOption("Elbújsz egy aszteroida mögött, míg a többiek lövöldöznek rád", function(){
	jump(site127);
});

site126 = new Site("site126");
site126.description = "<p>Szembefordulsz üldözőiddel és belehajtasz a gépükbe. Sikeresen leszedsz a robbanással még 2 játékost, de neked is kampec. Lerakod a kontrollert.</p>";
site126.addOption("Visszatérsz vegyülni a tornaterembe", function(){
	jump(site120);
});

site127 = new Site("site127");
site127.description = "<p>Egy 3as fokozatú aszteroida mezőbe hajtasz.Legjobb pilótaképességeidre van szükséged, hogy a géped ne ütközzön az űrben repkedő kőzettörmelékekkel. Megvárod míg elül a balhé, majd bekapcsolod a turbóhajtóműveket és a többiek után repülsz. Elhagyod a Jupiter holdjait és a Xerox mellett lépsz ki a fénysebességből. A többiek már megkezdték a leereszkedést!</p>";
site127.addOption("Elkezdesz lövöldözni a leereszkedőkre", function(){
	jump(site128);
});
site127.addOption("Próbálod megelőzni őket egy veszélyesebb ívű landolással az ionoszszférán át", function(){
	jump(site129);
});

site128 = new Site("site128");
site128.description = "<p>A leereszkedő űrhajók könnyű célpontok, de az egyik játékos megelégeli a trollkodásod és ellened fordul. Már nem is a céljával törődik, csak hogy téged levadásszon. Egy szerencsés lövedékkel megkarcolja hajód rakterét, amire a veszélyes plutónium robbanással reagál. Sajnos kiestél az izgalmas játékból.</p>";
site128.addOption("Visszatérsz vegyülni a tornaterembe", function(){
	jump(site120);
});

site129 = new Site("site129");
site129.description = "<p>Hajódat meredek ívben engeded bele a Xerox légkörébe, az égő oxigénmező körbeöleli járműved. Ekkor elmegy az áram és a monitorról eltűnik a kép.Mindenki felnevet. Majd legközelebb !</p>";
site129.addOption("Visszatérsz a tornaterembe nézelődni", function(){
	jump(site120);
});

site130 = new Site("site130");
site130.description = "<p>Visszaveszel a sebességből és óvatosan ereszkedsz lefele. A többiek elhagynak, de a kapkodásuk miatt néhányan túl gyorsan ereszkednek a légkörbe, így elégnek. A többiek pedig nem mérik fel egy ionvihar helyzetét és a villámok végeznek hajóikkal. Te kényelmesen kiszámolod a megfelelő érkezési pont koordinátáit és leteszed a gépet. Sikeres küldetés ! Leszállítottad a piros plutóniumot. A többiek gratulálnak !</p>";
site130.addOption("Visszatérsz a tornaterem egyéb részeibe nézelődni", function(){
	site120.removeOption(site120o_a);
	jump(site120);
});

site131 = new Site("site131");
site131.description = "<p>Hello kedvesem ! Én vagyok az , Elvira a sötétség úrnője ! - villantja rád csábos mosolyát Elvira és harisnyás lábait is megtáncoltatja.</p>";
site131.addOption("Itt helyben magadévá teszed", function(){
	jump(site132);
});
site131.addOption("Megkérdezed mikor lesz Elvira 3 amigára", function(){
	jump(site133);
});
site131.addOption("Inkább viszatérsz a tornaterem egyéb részeire", function(){
	jump(site120);
});

site132 = new Site("site132");
site132.description = "<p>Magadhoz rántod Elvirát és letéped éjfekete bugyiját. A pokol gyönyörei várnak rád ! Gratulálok  ! Elérted a játékban elérhető maximális pontszámot.</p>";
site132.openAction = function(){
	site120.removeOption(site120o_b);
};
site132.addOption("Megkérdezed mikor lesz Elvira 3 amigára", function(){
	jump(site133);
});
site132.addOption("Viszatérsz a tornaterem egyéb részeire", function(){
	jump(site120);
});

site133 = new Site("site133");
site133.description = "<p>Ó, kedvesem ! - mosolyog rád - A Viaszművek játék amolyan folytatása volt az Elvira játékoknak. Próbáld meg azt ! :)  Elvira elbűvöl intelligenciájával és könnyedségével.</p>";
site133.addOption("Itt helyben magadévá teszed", function(){
	jump(site132);
});
site133.addOption("Visszatérsz a tornaterem egyéb részeire", function(){
	jump(site120);
});

site135 = new Site("site135");
site135.description = "<p>A kiabáló figura egy TOHO feliratú pólóban van. A billentyűzeten kalimpál és a joystickot csapdossa, miközben vitatkozik valakivel <br/>- A Monty on the runnak csak a zenéje jó ! Amúgy kikészültem a sok hülye, repkedő teáskannától meg fűnyírótól ! Ráadásul azt se tudod milyen tárgyakat kell az elején választanod, hogy végigjátszd ! Mondom egy szar !  </p><p>A haverja erre válaszol - Ó ha ott nem tudtad melyik tárgy mire jó, akkor te nem játszottál a Spellbounddal ! Na az volt csak igazán kibaszás.  Volt benne vagy 50 tárgy, mindegyik valami értelmetlen hülyeség és fogalmad se volt melyiket hova kell vinni és miért, kb mint ez a játék ! Na és ha mégis sikerült eljutnod a végéig, akkor egyszerűen éhen haltál, mert épp elfelejtettél vizet inni. Baromság !  Mosolyogva hagyod őket vitatkozni.</p>";
site135.addOption("Megkérdezed tőle mit jelent a TOHO felirat a pólóján", function(){
	jump(site136);
});
site135.addOption("Visszamész a tornaterem egyéb részeibe nézelődni" , function(){
	jump(site120);
});
site135.addToolRelay("godzilla baba", function(){
	jump(site137);
});
site135.addToolRelay("limonádé", function(){
	jump(site138);
});

site136 = new Site("site136");
site136.description = "<p>Műveletlen tahó ! - vicsorog rád a tag és nem is foglalkozik veled tovább.</p>";
site136.addOption("Visszatérsz a tornaterem egyéb részeibe nézelődni", function(){
	jump(site120);
});
site136.addToolRelay("godzilla baba", function(){
	jump(site137);
});
site136.addToolRelay("limonádé", function(){
	jump(site138);
});

var joystick = new Tool("joystick");
site137 = new Site("site137");
site137.description = "<p>Látod, hogy a fickó szeme könnybe lábad, ahogy a Godzilla babáért nyúl. Ó kicsikém, mi történt veled ? Még tavaly vesztettem őt el itt a táborban, nem is reméltem, hogy előkerül. Fogadd cserébe ezt a joystickot.</p>";
site137.openAction = function(){
	joystick.owned = true;
	godzillababa.owned = false;
};
site137.addOption("Visszatérsz a tornaterem egyéb részeibe nézelődni", function(){
	if (klaviatura.owned || lazer.owned){
		site120.removeOption(site120o_d);
	}
	jump(site120);
});
site137.addToolRelay("limonádé", function(){
	jump(site138);
});

var klaviatura = new Tool("klaviatúra");
site138 = new Site("site138");
site138.description = "<p>Úgy teszel mintha véletlen lenne és rálögybölöd a limonádét a figura billentyűzetére. Ő sűrűn káromkodik, te pedig szabadkozol. Kihajítja a klaviatúrát egy kukába és elővesz egy másikat. Elteszed a klaviatúrát a felszerelésed közé.</p>";
site138.openAction = function(){
	klaviatura.owned = true;
	limonade.owned = false;
};
site138.addOption("fakkyeah!", function(){
	if (joystick.owned) {
		site120.removeOption(site120o_d);
	}
	jump(site120);
});

site140 = new Site("site140");
site140.description = "<p>A programozó örömmel veszi, hogy érdeklődsz gépezete iránt. Egy óriási agy előtt ül, mely egy tartályban lebeg. A tartály oldalán különböző nyílások vannak, ahol adatokat lehet betáplálni. Ez a találmány- kezdi lelkesen a zseninek tűnő egyén- arra szolgál, hogy megtalálja azt az eszközt mellyel legyőzhetőek különböző veszélyek. Előbb be kell táplálnod a veszélyforrás megnevezését, majd a gép utasításai alapján készíthetsz ellene egy fegyvert !-  fejezi be mondókáját, majd izgatottan üldögél.</p>";
site140.addOption("Visszatérsz a tornaterem egyéb részeibe nézelődni", function(){
	jump(site120);
});
site140.addToolRelay("kód DIN", function(){
	jump(site141);
});
site140.addToolRelay("Kód DINOSAURUS", function(){
	jump(site143);
});

site141 = new Site("site141");
site141.description = "<p>Az agy beolvassa a cetlid és megjelenik előtte egy felirat : DIN. Úgy tűnik további adatokra vár.</p>";
site141.addOption("Visszatérsz a tornaterem egyéb részeibe nézelődni", function(){
	jump(site120);
});
site141.addToolRelay("kód OSAU", function(){
	jump(site142);
});

site142 = new Site("site142");
site142.description = "<p>Az agy beolvassa a második cetlit is és a következő felirat jelenik meg: DINOSAU... Úgy tűnik további adatokra vár.</p>";
site142.addOption("Visszatérsz a tornaterem egyéb részeibe nézelődni", function(){
	jump(site120);
});
site142.addToolRelay("kód RUS", function(){
	jump(site143);
});

var koddinosaurus = new Tool("Kód DINOSAURUS");
site143 = new Site("site143");
site143.description = "<p>Az agy beolvassa a harmadik cetlidet is. A következő felirat kezd el villogni a képernyőjén : DINOSAURUS   Az Ön ellenfele egy dinoszaurusz- mondja az agy gépies hangon. Pár percig kattog és füstöl, majd egy kép jelenik meg a kijelzőn. Alatta a dinoszaurusz elleni fegyver felirat olvasható. Úgy néz ki, mint egy botkormány, melyből valamilyen zöld színű csillagok repkednek ki. Kérem helyezze be a fegyver első alkatrészét ! - mondja az agy.</p>";
site143.openAction = function(){
	koddin.owned = false;
	kodosau.owned = false;
	kodrus.owned = false;
	koddinosaurus.owned = true;
};
site143.addOption("Visszatérsz a tornaterem egyéb részeibe nézelődni", function(){
	jump(site120);
});
site143.addToolRelay("joystick", function(){
	jump(site144);
});
site143.addToolRelay("LézetShurikenLövő-Joystick", function(){
	jump(site146);
});

site144 = new Site("site144");
site144.description = "<p>Behelyezed a fegyver első alkatrészét. Kérem helyezze be a fegyver második alkatrészét !</p>";
site144.addOption("Visszatérsz a tornaterem egyéb részeibe nézelődni", function(){
	jump(site120);
});
site144.addToolRelay("shuriken", function(){
	jump(site145);
});


site145 = new Site("site145");
site145.description = "<p>Behelyezed a fegyver második alkatérszét is. Kérem helyezze be a fegyver harmadik alkatrészét ! </p>";
site145.addOption("Visszatérsz a tornaterem egyéb részeibe nézelődni", function(){
	jump(site120);
});
site145.addToolRelay("lézer", function(){
	jump(site146);
});


var lazershurikenlovojoystick = new Tool("LézetShurikenLövő-joystick");
site146 = new Site("site146");
site146.description = "<p>Fegyver kész ! - mondja az agy és kiad magából egy LézerShurikenlövő Joystickot ! Elteszed a hiperfegyvert.Ebben a pillanatban azonban óriási döndülés hallatszik az épületen kívülről !</p>";
site146.openAction = function(){
	lazer.owned = false;
	joystick.owned = false;
	shuriken.owned = false;
	lazershurikenlovojoystick.owned = true;
};
site146.addOption("Szaladsz a kijárat felé", function(){
	jump(site147);
});
site146.addOption("Próbálsz figyelni mi történik, de nem pánikolsz", function(){
	jump(site150);
});
site146.addOption("Elkezdesz lövöldözni a Lézershuriken lövő Joystickkal", function(){
	jump(site149);
});

site147 = new Site("site147");
site147.description = "<p>A tömeg is megindul veled és nekiszaladnak a tartógerendáknak. Az épület nem bírja a nyomást és összeroskad ! </p>";
site147.deadend = true;

site149 = new Site("site149");
site149.description = "<p>Addig lövöldözöl míg rászakad az emberekre az épület és téged is összepaszíroz egy gerenda.</p>";
site149.deadend = true;

site150 = new Site("site150");
site150.description = "<p>Megveted a talpad és bekészíted a LézerShuriken lövő Joystickot. A bejárat ekkor összeomlik és a tetőszerkezet is megremeg. Több tucat ember sikoltozik, ahogy leszakadnak a testrészeik, majd a szájuk is, így nem sikoltoznak tovább. Úgy érzed magad, mint egy kibaszott szuperhős.</p><p>Eddig eljutottál ebben a szar játékban, most nem fogod feladni, várjon rád bármi.</p><p>A tornaterem teteje recseg-ropog és a kivetítőnél egy dinoszaurusz dugja be a pofáját. Mintha csak egy megelevenedett játék lenne, egy rémálom 3D-s verziója. Rád tátja ocsmány, fél méteres fogszilánkokkal tűzdelt pofáját és szédítő hangorkán kíséretében felvisít, dögletes hússzagot lehelve magából. Elvira felsikít.<br/>- Ments meg, ments meg ! - csábosan izgeti magát, harisnyája felszakadt. </p>";
site150.addOption("Odaszaladsz, hogy megmentsd Elvirát", function(){
	jump(site151);
});

site151 = new Site("site151");
site151.description = "<p>Áttörsz a tömegen Elvira felé, félrerúgva az utadba kerülő C64 rajongókat. Valakinek kiütöd a fogát, valakinek betöröd az orrát, egy másiknak a hátára ugrasz és onnan rugaszkodsz álmaid asszonya felé.<br/>- Elviraaaaa - bömbölöd lassított felvételként, mint egy rossz akcióhős.  - Szerelmem.... ! - látod, hogy Elvira szemében könnyek csillognak ekkora önfeláldozás láttán. De azért a combokért bármit megtennél. Egy olyan nőci, mint ő, aki a horrorfilmes és a játékiparba is betört, megérdemli, hogy megmentsék és hogy benne legyen ebben a játékban. Ráadásul még pár szar videoklipet is készített.</p><p>Ebben a pillanatban a dinoszaurusz bekapja Elvira felső testét és kettéharapja. Reccsenés hallatszik, ahogy Elvira darázsdereka elválik szép hosszú combjaitól. </p>";
site151.addOption("Megpróbálod megmenteni Elvira maradék lábait", function(){
	jump(site152);
});
site151.addOption("Dühödten a dínó ellen fordulsz", function(){
	jump(site153);
});
site151.addOption("Megölöd magad kétségbeesésedben", function(){
	jump(site154);
});

site152 = new Site("site152");
site152.description = "<p>Egy elterelő löveget lősz a dínó felé és Elvira megmaradt combjaiért rohansz. A vállaidra veted őket, majd egy lyukat robbantasz a falba és kirohansz rajta az erdőbe. Életed hátralevő részét vademberként töltöd a Bakonyban, a dínóról nem hallasz. Elvira lábait egy trónra helyezed, felsőtestét gallyakból újraépíted, lábai közé puha mohát teszel és holdfényes éjszakákon hajnalig szeretkeztek. Gratulálok, teljesítetted a játékot ! Bár boldogságod nem teljes, hős lettél ! Köszönjük, hogy játszottál ezzel a baromsággal, ha eddig eljutottál akkor értékelésünk alapján egy csillagos ötös arc vagy !</p>";
site152.deadend = "THE END"

site153 = new Site("site153");
site153.description = "<p>Megdöglesz ! - üvöltöd őrjöngve és elkezded sorozni a dínót. A LézerShuriken lövő Joystick véres húscafatokat szakít ki testéből. Az arca kezd széthullani egy gusztustalan masszává. Dögölj meg, pusztulj ! A dínónak az arca helyén már kikandikál a koponyája, de tovább küldöd belé a lézershurikeneket, míg az egész feje szét nem robban és agyának cafatjai szétfröccsennek a teremben. Legyőzted ezt az undorító teremtményt. Dühöd forrong ! Az árok partisok megünnepelnek, felmossák a dzsuvát. Elvira maradékát eltemetik hátul a focipályánál. Elvira elvesztése felett érzett bánatodban inni kezdesz és alkoholista leszel. Gratulálok !!! Sikeresen végigjátszottad a játékot és megnyitottad az alkoholista endinget. Bonts egy sört, büszke lehetsz magadra ! Köszi, hogy időt szántál a játékunkra, reméljük jól szórakoztál, nyisd meg a többi befejezést is !</p>";
site153.deadend = "THE END"

site154 = new Site("site154");
site154.description = "<p>Magad ellen fordítod a LézerShuriken lövő Joystickot. A lézershuriken könnyedén és fájdalommentesen leviszi a fejed. Meghaltál, bár megértjük döntésedet. Elvira nélkül nem érdemes élni !!!</p>";
site154.deadend = true

site156 = new Site("site156");
site156.description = "<p>Ó te plecoidkorszak vastagbőrű ocsmánypofájú történelmi képződménye!<br/>Ó te Jurassic Park lakó alsóbbrendű hollywoodi rabszolgaállat!<br/>Ó te nőgyalázó gitáron tanuló gördeszkás buckalakó!<br/>Ó te csontokkal múzeumban öregedő emléktünemény! Takarodnál vissza ezredéves sírodba régészek martalékául!<br/>Ó te Indiana Jones által feltárt semmirekellő ősemberirtó zöld gyíklény!<br/> Bárcsak csökött kis kezeiddel írnál verseket a meteoritról, mely kipusztította fajodat!</p><p>Szavalod neki válogatott káromkodásaidat.A dinoszaurusz parányi agyával próbálja feldolgozni mit mondasz, majd egy elektromos csóvát köp feléd.</p>";
site156.addOption("Félregurulsz ", function(){
	jump(site157);
});
site156.addOption("Tovább káromkodsz neki", function(){
	jump(site158);
});

site157 = new Site("site157");
site157.description = "<p>Balra gurulsz, majd rögötn jobbra a második lövedék elől. Sortűzzel viszonzod a köpeteket, azonban a dinoszaurusz ide-oda mozgatja a fejét . Egyre közelebb érsz hozzá, átugrasz egy újabb elektromos csóvát és az asztalok tetején futsz az óriási szörny felé. Előtted tornyosul félelmetes pofája, bömböl dühében, ahogy próbál leszámolni veled.</p>";
site157.addOption("Beugrasz a pofájába, hogy a hasából lődd cafatokra", function(){
	jump(site159);
});
site157.addOption("Becsúszol a hasa alá, miközben egy sortűzzel feltéped a beleit", function(){
	jump(site160);
});

site158 = new Site("site158");
site158.description = "<p>Ó te Godzilla utánzat... - kezded majd a rád áramló energiaköpettől elektromos hamuvá olvadsz.</p>";
site158.deadend = true;

site159 = new Site("site159");
site159.description = "<p>Beugrasz a dínó tátott pofájába és ő vidáman elrágcsál félméteres hegyes fogaival. :) Jó étvágyat !</p>";
site159.deadend = true;

site160 = new Site("site160");
site160.description = "<p>Pusztuuuulj ! - kiáltod és nekirontasz a dínónak. Próbál elnyelni, de az utolsó pillanatban becsúszol és az állkapcsa feletted zárul össze. Lenyomod a fegyver elsütőbillentyűjét és a Joystick ontani kezdi magából a lézershurikeneket. Végigvágódnak az állat nyakán le a hasáig, végigtépve a dínó páncélzatát és húsát. Bumm Bumm Óriási lukakat robbantasz védtelenebb alsó részén. A nyakából kiállnak csigolyái, a hasából kifordulnak belei. Ömlik rád a sűrű vér és és a belsőségek. Majd a dínó megremeg és egy végső sikoly kíséretében összeroskad. Hatalmas teste majdnem agyonnyom, de a többiek kirángatnak és a vállaikra vesznek!</p><p>Hős lettél ! Legyőzted a dínót, aki a tábort terrorizálta. Megtaláljátok naplóját, amiben bevallja, hogy ő ejtette a parkolóban az autót a táborozókra és ő kergette förtelmes fekáliájával kétségbeesésbe a takarítónőt.</p><p> 3 napig tartó ünneplés kezdődik, melynek végén elveszed Elvirát feleségül ! Majd boldogan éltek , míg meg meg nem haltok és sok kis porontyotok lesz ! Neved örökké dicső marad az Árok partik történelmében.</p><p>Köszönjük, hogy játszottál játékunkkal ! Találkozzunk jövőre is !</p>";
site160.deadend = "THE END"

site162 = new Site("site162");
site162.description = "<p>Megveted a lábad és mint Duke Nukem sorozni kezded az Árok partit tönkretevő ősgyíkot. A lézershurikenek óriási sebeket ejtenek a dínó tátongó pofáján. Hé bébi ' - mondod -, kinek van nagyob tojása ?  Heréidet kellemes érzés feszíti, amint megaturbó fegyvereddel szétsorozod a dínópicsát.Felüvölt fájdalmában, majd menekülőre fogja a dolgot.</p>";
site162.addOption("Üldözőbe veszed", function(){
	jump(site163);
});
site162.addOption("Hősként tetszelegsz és ünnepelteted magad", function(){
	jump(site164);
});

site163 = new Site("site163");
site163.description = "<p>Utánaveted magad az erdőbe menekülő szörnyetegnek.Preadtorként vadásztok egymásra hónapokig, sárral kened arcod és békákat eszel. Végül ások egy óriási gödröt, melyet óriási levelekkel fedsz le, a dínó meg beleesik. Mielőtt lesújtanál rá megsajnálod őt és összebarátkoztok. Elnevezed Denvernek és meggyógyítod sebeit. Együtt tanultok gitározni is. Éjszakánként hallani, ahogy az erdőben végigdübürögtük és természetesen az Árok partit is rendszeresen látogatjátok, ezúttal békésen. A dínó bevallja, hogy ő volt aki a parkolóban ráejtette az autót a bámészkodókra és ő járt be a wcbe is titokban kakálni, ami miatt a takarítónő felakasztotta magát. De ezeket megbánta. Azóta Árok partin ő a csúszda. Happy End ! Gratula, végigjátszottad a játékot ! Köszönjük neked mi , a készítők !Reméljük jól szórakoztál és ne felejtsd el a többi végigjátszást is megnézni ! ÁROK RULEZ</p>";
site163.deadend = "THE END"

site164 = new Site("site164");
site164.description = "<p>Elkezdesz vagizni a törmelékkupac tetején, mint a 4572es egomérettel rendelkező Duke Nukem. Az árok parti közönsége még elég véres és megviselt a félig rájuk omlott épület alatt, páran vértócsában fekszenek és segítségért nyöszörögnek. Néhányan megtapsolnak és ünnepelnek, mert elüldözted a dínót. Elvira a lábaid elé veti magát és megöleli combjaid, puha mellei szorosan neked nyomódnak.<br>- Ó hősöm - szipogja. Vagányan emeled fel a megaturbó fegyveredet a magasba, azonban ekkor megremeg az épület és óriási bömbölés hallatszik. A dinoszaurusz visszatért ! Kirohansz a hátsó ajtón és a tornaterem mögötti színpadon találod magad ! Előtted Ajkarendek fekszik és látod, hogy a fél falu ég , emberek sikoltoznak, a dínó pedig le-lecsap az emberek csoportjaira és élvezettel tömködi húsukat a pofájába. Hangos csámcsogása áthallatszik a tüzek ropogásán és az emberi szenvedés hangjain. Mint a kibaszott apokalipszis <br/>- Te ! Hé te ocsmány szarkupac ! - kiáltod és a dínóra mutatsz. A prehisztorikus lény felüvölt sértésed hallatán és dühödten tombolva indul feléd. Egyre gyorsítja iramát és dübörög alatta a föld, házakon gázol át, a boltot is legyalázza. <br/>- AAAAAaaargghhhh- üvölti feléd.</p>";
site164.addOption("Felszaltózol a háztetőre és onnan nézel szembe a veszéllyel", function(){
	jump(site165);
});
site164.addOption("Benyomod  az erősítőket és énekelni kezdesz", function(){
	jump(site166);
});

site165 = new Site("site165");
site165.description = "<p>Elrugaszkodsz a levegőbe de a dinoszaurusz gyorsabb nálad. A levegőben kettéharap és jóízűen elrágcsál, majd a háztetőn lévő kis szélkakassal kipiszkálja a fogait. Ezután folytatja Ajkarendek módszeres lemészárlását. Másnap elfoglalja a világot és kilép az űrbe. Harmadnap megküzd Supermannel és őt is legyőzi. Negyedik nap legyőzi Istent és a világ, ahogy ismertük, nincs többé. Elérkezik a végső visszaszámlálás kora. Majd az is elmúlik. És mi történik ezután? Megtudhatod az Árok FirPg! 2ből !!</p><p> De most sajnos meghaltál...</p>";
site165.deadend = true;

site166 = new Site("site166");
site166.description = "<p>Ó jee - adod a ritmust a lábaddal, a hangosítók csutkán vannak. Elkezded pengetni a LézerShuriken lövő Joystickot mint valami űrgitárt a jövőből. Megjelenik melletted a zenész, akinek a kezein segítettél és ő is gitározni kezd. Ekkor megjelenik a doboknál a takarítónő szelleme a és félelmetes dobolásba kezd. A dínó volt, mondja, aki miatt ő felakasztotta magát, mert titokban összekakálta a WC-t fertelmes bűzével. És a dínó dobta a parkolóban az autót a népekre. Oldalról beszalad az István a király pólós csöves is.<br/>- Eladtam az összes limonádét ! - kiáltja boldogan és felkap egy gitárt. Immár teljes a banda.</p><p>Elkezditek a prehisztorikus ősrockot !! Badunga, badunga Dinoszaur haza !</p><p>A felétek rohamozó dinoszaurusz már csak méterekre van, amikor különleges energiapajzs veszi körbe a zenekarotokat . A zenélés erejével életre hívtatok egy ősi mágiát. Egy óriási energianyaláb csap ki a titeket övező felhőből és nekivágódik a dínónak pont mielőtt egészben bekapná az egész színpadot.</p><p>Egy pillanatra visszautaztok az időben és látjátok, hogy a dinoszaurusz saját korába érkezett, ahol boldogan játszik a dinoszaurusz családjával. Ekkor ti újra a színpadra kerültök és a veszélyből feocsúdott árok partisok és ajkarendeki vendégek odagyűlnek elétek.</p><p>A zenekar pedig hajnalig játszik, majd tovább, 3 napon keresztül. Óriási buli keveredik, összeházasodsz Elvirával, több gyereketek születik, az egyik közülük feltalálja a világbékét.</p><p>A zenekar első lemeze Barlangrajzok címen megjelenik és hatalmas sikert arat a világ fejletlenebb pontjain, főként az Aamazonas vidékén, ahol következő kannibálos játékunk fog játszódni. Figyeld a reklámokat!</p><p>Gratulálok, teljesítetted a gamét és minden jó ha jó a vége. Köszönjük a ráfordított idődet, reméljük szórakoztatónak találtad.</p><p>Nézd meg a többi befejezést is, találkozunk jövőre is az Árok parton... bocs, partin. </p>";
site166.deadend = "THE END"

resursite = new Site("resurr");
resursite.description = "<p>Szent Péter megvető pillantást vet rád.<br/>-Azt hitted fiam, hogy ennyivel megúsztad? Dehogy! Takarodj vissza a homályba, és folytasd a kalandot!";
resursite.addOption("Vissza az életbe", function(){
	deathcounter++;
	jump(checkpoint);
	printc("feltámadások száma: " + deathcounter);
});
