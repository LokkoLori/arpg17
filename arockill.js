var starts = new Site("start");
starts.description  = "<p>2017, nyár, augusztus. Árok party. Nemrég fedezted fel ezt az egész retromizériát az interneten és bejelölted a naptáradban. Már alig vártad, hogy jöjjön az augusztus. A főnököd nem akart szabadságot adni, de egy kis patkányméreg  a kávéjába megoldotta a dolgot. Az egoista majom most valamelyik rohadt kórház lepukkant kórtermében imádkozik. Ha öntudatánál van és persze ha tud beszélni. Nem adtál neki halálos adagot csak annyit, hogy kicsit habozzon a szája. A hülyéje úgy nézett ki, mint egy mosópor reklám. De gyorsan eltereled a gondolataidat a főnöködről.</p><p>Nyár van, buli. Eddig is jól telt, elégedetten pillantasz barna sörhasadra ami kilóg a szakadt atlétádból. Érzed magadon a száradt sörszagot. de a Balaton friss levegője lemossa az egészet. Életed első Árok partijára készülsz és érzed, hogy ez nagy dobás lesz. Évek óta értelmet kerestél életednek, talán most megtalálod. Tövig nyomod a gázt és kihajítod a kiürült sörösdobozt az abalkon. Pechedre pont telibetalálsz egy az út mellett parkoló motors rendőrt. A sörösdoboz csattanva üti le a fejéről az ócska szemüveget. A megszédült fickó rögtön motorra pattan és utánad ered. Villogva húz el a kocsid mellett, majd leparkol előtted 100 méterrel, leszáll a motorról és int, hogy húzódj le. Nem sok jót sejtesz.</p><p><b>Mit teszel?</b></p>";
starts.addOption("megpróbálod elütni ezt a szarjankó", function(){
	jump(site3);
});
starts.addOption("lehúzódsz mielőtt nagyobb baj lenne", function(){
	jump(site6);
});


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
site7.addOption("jobb zsebedben keresed", function(){
	jump(site9);
});

var soroskupak = new Tool("söröskupak");
var fogpiszkalo = new Tool("fogpiszkáló");
var diszkoszseton = new Tool("diszkós zseton");
var fikaszsepi = new Tool("fikás zsepi");
fikaszsepi.defaction = function(){
	printc("egészségedre bammeg :)");
}
var kutyakakizacsko = new Tool("kutyakakis zsacskó");
var bolcsessegfog = new Tool("bölcsesség fog");

var site8 = new Site("site7");
site8.description = "<p>Keresgéled a zsebedben hova is tetted. Egy söröskupak, egy fogpiszkáló, valami diszkós zseton,egy iszonyat fikás zsebkendő, kutyakaki zacskó, a bölcsességfogad meg valami kenyérmorzsa után végre ráakadsz. Ufónak hívják és valami lila cucc. Egy holland sztriptíztáncostól vetted, úgy hívták Van melle de Hol. Elpattintod a zsöllyét és máris mintha egy sárga tengeralattjárón utaznál a Beatlesszel. Vagy az Iron Maiden magángépén Dallas felett. Tök mindegy, most még Ellie fél csöcse is tetszene. Szar ez a világ és minden amit tőled érdemel az a hányásod. Nihilisztikus filozofálgatásod közben egy verda zavar meg, amely hajmeresztő sebességgel tép el melletted. A kormány után kapsz, le ne sodorjon az útról. A rendszámtáblát látod egy pillanatra : JCVD. Ki lehet ez a barom ?</p>";
site8.openAction = function(){
	soroskupak.owned = true;
	fogpiszkalo.owned = true;
	diszkoszseton.owned = true;
	fikaszsepi.owned = true;
	kutyakakizacsko.owned = true;
	bolcsessegfog.owned = true;
	refresh();
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
site10.description = "<p>Nincs turbód te barom, ez nem egy autós játék. Vegyél nascart paraszt !</p>";
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
	site11.removeOption(site11_b);
};
site12.addOption("Nincs kedved kihányni a sörödet és ott hagyod", function(){
	jump(site11);
});
site12.addOption("Megiszod", function(){
	jump(site13);
});

var kitortfog = new Tool("kitört fog");
site13 = new Site("site13");
site13.description = "<p>Szinte lassítva látod, ahogy a poharat a szádhoz emeled. Gyomrodban riadtan ugrik egyet egy ideg, amint a limonádéban úszó egyik morzsaszigetről egy meghatározatlan 9 lábú xenomorph bab fejest ugrik a limonádé mélyebb vizeibe. Egész kis strand van itt a poharadban !</p><p>Mmm, az első korty olyan, mintha sugárfertőzött fagyállót innál, a szemeid körbefordulnak a helyükön és helyet cserélnek. Agyadban elpattan egy ér és orrodból egy szomorú vércsepp hullik a limonádé tetejére. Bánatosan nézed, de anyád arra tanított, hogy ne végezz félmunkát, így lenyeled a maradékot. Az első hullámok mintha önálló életet élnének, majd valami töményebbet érzel ami a fogaid közé akad. A fogaidhoz nyúlsz, hogy lekapargasd a szennyeződést és egy óriási, csimbókos hajszálat fedezel fel, mely valószínűleg a koldus bőrkiütéses fejéről származik. Ahogy húzod kifele a fogaid közül a rárakódott csimbókrengeteg a szádban marad, kisebb falat sörkorcsolyaként. Virsli ízt is érzel és valami keményet. Ahogy ráharapsz kitörik egy fogad.</p><p>Phú mi esz?-kérded pöszén. Meglepetésedre a szádban egy budikulcsot találsz ! Kitört fogadat is megtartod.</p>";
site13.openAction = function(){
	kitortfog.owned = true;
	refresh();
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
site17.description = "<p>Belefújsz a rebdőrsípba, mire a limonádéárus a tolvaj elé veti magát. Összegabalyodnak és elgurulnak egy lejtőn egy káromkodó porfelhőben.</p>";
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
	refresh();
};
site18.addOption("irány a tábor", function(){
	jump(site22);
});

var openfield = function(){
	sites["PARKOLÓ"].reachable = true;
	sites["SZÍNPAD"].reachable = true;
	sites["ZENESÁTOR"].reachable = true;
	sites["FOCIPÁLYA"].reachable = true;
	sites["TUSOLÓK"].reachable = true;
	sites["TORNATEREM"].reachable = true;
	refresh();
}

var closefiled = function(){
	sites["PARKOLÓ"].reachable = false;
	sites["SZÍNPAD"].reachable = false;
	sites["ZENESÁTOR"].reachable = false;
	sites["FOCIPÁLYA"].reachable = false;
	sites["TUSOLÓK"].reachable = false;
	sites["TORNATEREM"].reachable = false;
	refresh();
}

site22 = new Site("PARKOLÓ");
site22.description = "<p>A parkolóban vagy. Ide hallatszik a tábor jövés-menése, zsongása. Táborozók pakolják ki-be cuccaikat az autókból. Érdeklődve pillantasz az egyik rendszámtáblára : JCVD ! Hmm ez már ismerős az útról, ez a barom száguldott el melletted. Az egyik autó alól viszont pár lábat látsz kikandikálni. Valószínűleg valaki ráhajtott a parkolóban beszélgetőkre. Innen könnyen megközelítheted a tábor többi helyszínét, valamint egy ajtó is nyílik a neked jobbra eső épületen, mely úgy tűnik nyitva lehet. Az épület tetején egy barátságis kiscica ugrándozik.</p>";
site22.openAction = openfield

site40 = new Site("SZÍNPAD");
site40.description = "<p>Kisétálsz a központi épület mögé, ahol a hátsó falhoz egy színpad kapcsolódik. A színpadon szétszórva egy-két hangláda és hangszer pihen. Valószínűleg itt buli lesz este ! Már a gondolatra is megszomjazol ! Az egyik erősítőn valaki üldögél, arca a kezeibe temetve és mintha sírna. A színpad oldalában pedig egy furcsa kis ajtót látsz. Néhány ajkai polgár is lézeng a színpad környékén, akik valószínűleg az esti koncertekre kíváncsiak.Az épület tetején, a színpad felett egy rozsdás szélkakas nyikorog. Furcsa hűvös szél árad a fák felől. Érzed, hogy valami készül, valamilyen rossz akarat lebeg a hely felett. Érzed, hogy valami történni fog mikor leszáll az est, de az még odébb van.</p><p><b>Mit teszel?</b></p>";

site55 = new Site("ZENESÁTOR");
site55.description = "<p>Egy igénytelen, szakadtas katonai sátor közelébe érsz. Körülötte és benne padok és asztalok szanaszét. Az asztalok csordultig vannak sörösdobozokkal, borosüvegekkel, rögtönzött hamutartókkal és mindenféle szeméttel. Jópáran üldögélnek itt és úgy tűnik nem most kezdték a piálást. Üvöltözve röhögcsélnek és bárgyú történeteket mesélnek. A sátor hátsó sarkában különböző zenecuccokat látsz, meg egy rakat CD-t. Az egész sátrat és környékét betölti a dübörgő metál zene. Valaki a sátor mögött a saját hányásában fekszik és egy kissrácot is látsz rohangálni vízipisztollyal. Idelátszik a focipálya és a tornaterem főbejárata.</p>";

site75 = new Site("FOCIPÁLYA");
site75.description = "<p>A focipályán fekszenek néhányan akik a hőségtől szívinfarktust kaptak, egyébként a terep elég elhagyatottnak tűnik.  Hortyogás üti meg a füled és egy dagadt kékzöld macskamackó szerű pokémont veszel észre az egyik fa alatt szundítani. Snorlax az ! Tőle nem messze vakondtúrásokat látsz, az egyik kapuban pedig egy leeresztett futball labdát.</p>";

site100 = new Site("TUSOLÓK");
site100.description = "<p>Egy elhagyatott mellékszárny előtt állsz. A falak romosak, az ablakok néhol betörve, de mindenhol rács. Kísérteties fény szűrődik ki. A falon egy graffitit látsz : Az Árok egy szar.. felirattal. Előtted egy ajtó, megpróbálod, de zárva van. A bokorban viszont mintha mocorogna valami.</p>";

site120 = new Site("TORNATEREM");
site120.description = "<p>Besétálsz az Árok party fő helyiségébe. A tornaterem tömve van asztalokkal, melyeket C64ek, Amigák és különböző retrokütyük borítanak, az egész egy kábeldzsungel. Szemben a kisszínpad felett egy kivetítő van, amin valami retro játékverseny folyik. Alatta az egyik sarokban pedig Elvira a 2017-es év házigazdanője feszít szokásosan elragadó, csábós, testhezálló , combnál felhasított fekete gönceiben és harisnyában, óriási dekoltázzsal párosítva hozzá való dinnyékkel. Épp egy interjú előtt van valakivel és a részleteket beszélik meg. A hozzád közeli sarokban egy hűtőt veszel észre. Komoly számítógépezés is folyik, egy joystickot, klaviatúrát püfölő figura hívja fel a figyelmed, valamint egy óriási agy előtt kuporgó zseni kinézetű programozó.</p>";




