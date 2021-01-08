Link al corso https://app.pluralsight.com/library/courses/angular-2-getting-started-update
https://github.com/DeborahK/Angular-GettingStarted
http://blogs.msmvps.com/deborahk/angular-2-getting-started-problem-solver/

Introduzione
	Le parole chiavi
		Component - e' composto da un 
			template (HTML di una parte di UI)
			classe (codice associato alla view), e' un insieme di proprieta', dati e metodi (chiamati x rispondere ad una azione dell'utente)
			metadata, dati aggiuntivi che fornisce il componente ad angular, i metadati sono usati x marcare la classe in un componente angular
		Module - usato x unire piu' componenti, aiuta ad organizzare la nostra app in blocchi di funzionalita'
			in angluar abbiamo al minimo un modulo - Application Root Model, che a sua volta puo' contenere altri modulo, x esempio i moduli di 
			funzionalita'
	Preparazione ambiente di sviluppo
		Linguaggio di programmazione
			ECMAScript (ES) - e' la specifica x il linguaggio di programmazione Javascript
			la versione e' definita con un numero progressivo, es. ES3, ES5, ES6 -> ES2015 (hanno rinominato)
			tutti browser supportano ES3 e ES5, invece per quanto riguarda ES2015 dobbiamo compilare il codice al meno in ES5, prima che il browser
			eseguira il codice
			A livello di sviluppo riusciamo sfruttare le nuove funzionalita' di ES2015!
			TypeScript e' la scelta piu' appropriata per scrivere le app in Angular (NOTA: deve essere compilato)
				strong typing, open source, compilato in JS
				file *.d.ts, typescript type definitional file
				forste supporto a livello di IDE
				TypeScript implementa i concetti di una classe, interfaccia, ereditarieta'
				online editor x provare il codice in TS https://www.typescriptlang.org/play/
		IDE
			usiamo Visual Studio Code
		Ambiente di sviluppo
			NPM - Node Package Manager, package manager x JS
			serve x impostare il progetto iniziale di angular
			Possiamo usare Angular CLI x generare i file di configurazione e il codice boilerplate
		Struttura di progetto
			cartella src x il codice dell'app
			vari file di configurazione nella cartella root
		Usiamo nodejs e npm per buildare, deployare e testare l'app
			uso node version manager nodist per passare tra diverse versioni di node
	Modules
		con JS abbiamo sempre il problema con dei namespace, e' facile dichiarare delle variabili o metodi che finiscono nello scope globale
		i moduli introdotti in ES2015 sono usati x risolvere questa issue
		un modulo e' un file e un file e' un modulo, e' sufficiente scrivere il codice JS, fare export/import ed e' file diventa un modulo
		in piu' Angular ha i propri moduli 
			angular usa i moduli di ES2015
			i moduli in Angular permettono organizzare l'app in blocchi di funzionalita'
			possiamo definire anche i moduli condivisi con altri moduli (shared modules)
			i moduli sono iniettati in altri moduli
			un componente appartiene solo ad un modulo
		differenza tra moduli angular e ES2015:
			i moduli di angular funzionano ad un livello piu' alto di astrazione
			permettono organizzare le funzionalita' dell app, invece i moduli 2015 e' una organizzazione del codice
Introduzione ai componenti
	un componente e' costituito da
		template (view)
		codice associato alla view, typescript
		metadati, dichiarati usando un decoratore (e' una funzione, decoratore, che aggiunge dei dati nella classe, agli attributi, metodi, i parametri dei metodi)
		il componente esporta la sua classe che lo fa diventare un modulo ES2015
	decoratore e' una funzionalita' del linguaggio JS, implementata in TypeScript
		ci sono dei decoratori di default
		e' possibile implementare i propri decoratori
		i decoratori piu' usati sono
			@Component - per rendere una classe un componente angular
			NOTA: ricordiamo che il decoratore e' una funzione!!!
			nell'oggetto che passiamo al decoratore definiamo
				selector - il nome di direttiva del componente (tag name)
				template - la view del componente
	importazione 
		viene usato lo statement import
		import fa parte di ES2015 ed e' sviluppato in TypeScript
		angular e' modulare, i moduli disponibili sono qui https://www.npmjs.com/~angular
	bootstraping
		tutto parte da index.html
		angular e' una SPA
		selettore viene 'piazzato' nel HTML, che poi e' anche una direttiva
		direttiv @NgModule applicata sulla classe AppModule, definisce
			imports - quello che vogliamo importare dall'esterno
			declarations - componenti dichiarati nel modulo
			bootstrap - AppComponent, component eseguito nel momento di avvio app (startup component)
		una volta che l'app e' avviata, possiamo espezionare HTML e il codice in esecuzione usando i tool di sviluppo del nostro browser
		NOTA: possiamo eseguire il debug del nostro codice TypeScript, ci sono le mappe JS caricate nel browser che lo permettono
	checklist relativa ai componenti
		class - la classe con il codice del nostro componente
		metadata, specifichiamo il selettore x poter aggiungere il componente in una pagina HTML, se non e' usato in HTML non serve specificare il selettore`
		import di quello che ci serve, dai nostri moduli o da quelli esterni
		usiamo pascalCasing
		e' meglio aggiungere il suffisso Component ad ogni classe componente, x capire che classe e'
		export per rendere la classe usabile anche dagli altri componenti
		typescript data typing
		importiamo quello che serve al componente
		debug usando tool di sviluppo del browser
		angular directives sono case sensitive!!!
Template, interpolation, e direttive
	possiamo definire inline template
	back ticks di ES2015 x creare html multiline nella fn di metadati
	e' meglio cmq definire un link template e avere il codice HTML in un file dedicato
		usiamo templateUrl 
	x facilitare lo sviluppo usiamo font-awesone e bootstrap
		nel mail.css importiamo i stili usando @import 
	quando creiamo un nuovo componente, per usarlo all'interno di altri, dobbiamo registrarlo all'interno del modulo 
	binding e interpolazione
		{{ }} - one way binding dalla classe verso il template
		tutto quello che si trova all'interno {{ }} e' una espressione del template, angular la valuta all'interno del contesto di componente
	direttive sono degli attributi custom che possiamo usare nelle nostre pagine HTML
	direttive angular 
		sono direttive strutturali
		logica, for loops
		*ngIf, *ngFor
Data binding e pipes
	property binding - il binding che cambia lo stile di elementi HTML
	la proprieta' dell'elemento viene racchiusa tra [], binding source e' inclusa tra '' (espressione) - one way data binding, usato per le proprieta' di elementi HTML, e' un one way databinding
	invece se il valore e' racchiuso tra {{}}, abbiamo one way data binding, e' in questo caso il valore dalla proprieta' della classe viene associato al valore dell'attributi di elemento
	event binding
		tra () definiamo l'evento
		tra '' il gestore dell'evento
		NOTA: per convenzione, i metodi sono dichiarati dopo tutte le proprieta' della classe
	two way data binding
		usiamo [(ngModel)]='classProp', dobbiamo includere FormsModule in modo da poter usare la direttiva ngModel
	trasformazione dati con pipe
		trasofrmazione bound properties prima di loro visualizzazione
		built-in pipes (date, number, json, decimal, percent, etc..)
Piu' dettagli sugli componenti
	quando sviluppiamo vogliamo essere sicuri che 
		- tutto e' stato tipizzato
		- il nostro stile e' incapsulato
		- rispondiamo in modo opportuno agli eventi del ciclo di vita (lifecycle events)
		- trasformiamo i dati in una visualizzazione user friendly
	angular fornisce una seria di lifecycle hooks per ogni componente 
	uno di vantaggi di usare il TypeScript e' strong typing 
	x specificare un tipo custom possiamo definire un interfaccia
		e' una specifica che definisce una seria di proprieta' e metodi
		la classe si dichiara di rispettare l'interfaccia quando la implementa
		NOTA: ES5 e ES2015 NON supportano le interfacce
		quindi, le interfacce sono di TypeScript, e sono compilati in pure JS
		uso di interfacce e' solo nel momento di sviluppo, aiuta a gestire meglio la tipizzazione e avere un supporto miglire in IDE che usiamo
		x esportare interfaccia usiamo export, x importare, import
	incapsulamento dello stile del componente
		abbiamo possibilita' di referenziare un stile dedicato all'interno del decoratore del Componente
	lifecycle hooks
		create, render, create and render children, process changes, destroy
		OnInit - qui possiamo inizializzare il nostro componente, recuperare i dati necessari
		OnChanges - azioni che possiamo eseguire dopo il cambiamento del valore di una casella di input
		OnDestroy - cleanup, pulizia dopo la distruzione del componente
		si aggancia agli hook implementando relativa interfaccia
			es. OnInit, dobbiamo implementare il metodo ngOnInit()
	pipes
		viene usata la direttiva @Pipe
		e' implementata interfaccia contenente il metodo/hook da implementare
		implementiamo interfaccia PipeTransofrm, metodo transform
	filtering a list
		NOTA: angular consiglia di spostare la logica di filtri a livello di componente
		un proprieta' privata tipo _filter, contiene il valore del filtro, e definiamo get e set di questa proprieta', nel metodo set applichiamo il filtro sulla collection
		nel costruttore inizializziamo il default del filtro e il default della collection 
Costruzione componenti innestati
	definiamo un componente nuovo, lo registriamo nel modulo, e possiamo usarlo nel template del padre
	implementando interfaccia OnChanges, riusciamo a definire la funzione che scatta su ogni modifica dei parametri di input del componente
	definiamo le proprieta' di input, x passare i dati dal padre al figlio
		il componente figlio deve definire le proprieta' di input usando il decoratore @Input
	passaggio dei dati dal figlio al padre
		x inviare i dati fuori il componente figlio deve inviare un evento
		viene usato il decoratore @Output
		i dati da passare sono il payload dell'evento
		EventEmitter viene usato in angular x inviare eventi, definito l'evento, possiamo chiamare la funzione emit() passando i dati necessari
		NOTA: TypeScript supporta Generics, es. EventEmitter<string>
		il componente padre che riceve l'evento deve definire il gestore nella lista di attributi del componente figlio referenziato sulla view del padre (es. (ratingClick)='fnEventClicked($event)')
			ratingClick e' il nome dell'evento
Service and dependency injection
	quando abbiamo una logica che non ha una view associata e che vogliamo condividere con piu' componenti, creiamo i servizi 
	es. ProductsService, LoggingService
	i servizi sono iniettati in ogni componente che li richiede
	un servizio e' 
		una classe con uno scopo dedicato
		indipendente dai componenti
		puo' incapsulare una iterazione esterna (es. chiamate al BE)
		facilita il riuso del codice, testing e debugging
	il servizio viene registrato in angular
		angular ci pensa a creare unica istanza di servizio (singleton), angular fornisce un meccanismo di injection, l'istanza del servizio viene creata dal container
		la dipendenza viene iniettata nel momento di creazione del componente
		NOTA: i dati di un servizio sono condivisi con tutti gli utilizzatori, e' un singleton!!!
	Angular Injector e' il container IoC
	quando creiamo un servizio
		creiamo la classe contenente la logica
		specifichiamo i metadati necessari, @Injectable()
		importiamo dipendenze
	esiste Root Application Injector
	esistono Component Specific Injectors 
	NOTA: se il servizio e' stato registrato a livello di Root Injector, puo' essere iniettato in qualsiasi componente/servizio
		  se e' stato registrato a livello di un componente (Component Specific Injector), puo' essere iniettato nel componente stesso e in tutti figli
	es. registrazione srv a livello di Root Injector
		@Injectable({ providedIn: 'root' }) - sintassi da Angular6, e' consigliato usare proprio questa, che favorisce il tree shaking, meccanismo di angular che elimina il codice inutilizzato 
		nel momento di costruzione dei bundler
	es. registrazione servizio a livello di Component Injector 
		nel metadati specifichiamo providers: [ProductService], il servizio e' disponibile per il componente corrente e per tutti i suoi figli
	le dipendenze sono iniettate nel costruttore
		es. constructor(private productService: ProductService) // sintassi TypeScript, viene creata una variabile privata _productService che possiamo usarla nei metodi 
		se il servizio recupera i dati dal BE, la sua chiamata possiamo mettere nel metodo di inizializzazione del componente, Init Hook.
Recupero dati usando HTTP
	Observables e Reactive extensions
		Reactive extensions rappresenza la sequenza di dati come una sequenza observable, chiamata di solito come 'osservata'
		osservatori aiutano a gestire i dati assincroni, quelli che arrivano dal BE
		eventi sono visti come una collezione, dove elementi arrivano in modo assincrono nel corso del tempo
		possiamo sottoscriversi agli osservatori in modo da intercettare l'arrivo dei dati
		osservatori aiutano a gestire un set di eventi usando gli operatori
			operatori sono dei metodi che compongono altri osservatori
			operatori non attendono la ricezione di tutti elementi, e processano i dati man mano che arrivano
			es. di operatori: map, filter, take, marge
		possiamo comporre osservatori usando operatore pipe
		x convenzione, la variabile di tipo Observable ha il suffisso $ (es. source$)
		il package di riferimento e' rxjs, operatori sono in rxs/operators
		operatore pipe() accetta piu' operatori
		per eseguire tutti gli operatori dobbiamo definire al meno un subscriber (va dopo la chiamata a pipe)
	Observables sono differenti dalle Promises di JS 
		Promises
			fornisce singolo valore futuro
			non sono lazy
			non sono cancellabili
		Observables
			immettono piu' eventi nel corso del tempo
			sono lazy (serve un subscriber prima che un observable inizia ad immettere gli eventi)
			possano essere cancellati, definendo un unsubscribe
			supporta operatori come map, filter, reduce, etc..
	per eseguire le chiamate http angular fornisce il servizio HttpClient
		importiamo il corrispondente modulo nel nostro modulo root
		iniettiamo HttpClient nel costruttore del componente che esegue la chiamata http
		il servizio HttpClient ritorna un observable 
		abbiamo il metodo generico get<>() che ci consente di specificare il tipo di ritorno e esegue la deserializzazione automatica da JSON al oggetto specificato
		ricordiamoci che il risultato del metodo get() e' un oggetto Observable, che a sua volta un tipo generico dove specifichiamo il tipo concreto di ritorno
		se get() ritorna la lista di oggetti, observable fornira' al chiamante un elemento alla volta
	operatore tap(), consente iniettare nello stream di evento una arrow fn che viene eseguita in sola lettura, nessuna trasformazione dello stream
		e' utile x debugging e logging
	sottoscrizione agli osservatori
		NOTA: nessun valore viene ritornato finche' non esiste un sottoscrittore
		fn subscribe riceve un oggetto che definisce gestori di seguenti eventi
			{ 
				nextFn, /* processa ogni singolo elemento */
				errorFn, /* se ci sono errori */
				completeFn /* quando osservatore termina */
			}
		subscribe() ritorn la subscription, che possiamo usare per cancellare la sottoscrizione 
			NOTA: la chiamata HTTP e' una chiamata assincrona e singola, solo un elemento viene emmesso, che e' la risposta HTTP, che contiene i dati ricevuti, mappati per esempio in un array di oggetti
		NOTA: e' sempre meglio mettere le chiamate HTTP in un servizio dedicato
		x approfondire rxjs https://app.pluralsight.com/library/courses/rxjs-angular-reactive-development/table-of-contents
							https://app.pluralsight.com/library/courses/angular-http-communication/table-of-contents
Navigazione e Routing
	Le rotte (routes) servono x navigare tra diverse view della nostra app
	aggiungiamo nuovi componenti (usando angular cli x esempio)
	NOTA: usiamo operatore di navigazione sicura ? sulle variabili che possano essere undefined (per es. quelli che sono valorizzati con le chiamate HTTP assincrone)
		? ritorna null al posto di undefined 
		alternativa a ? e' usare la direttiva *ngIf e renderizzare la parte di HTML solo quando abbiamo tutti oggetti valorizzati
	aggiungiamo il routing
		angular app e' una SPA 
		tutto e' nell'index.html
		per definire la sequenza di visualizzazione delle view usiamo angular routing
		attivando una rotta comporta alla visualizzazione della corrispondente view
		x aggiungere il routing viene usata la direttiva routerLink
		di default angular usa lo stile di navigazione di HTML5, facciamo senza usare #
			dobbiamo cmq configurare il nostro web server x abilitare URL rewriting
			angular continua a supportare hash style (es. http://localhost/#/products) che non richiedere URL rewriting
		quando cambia URL del nostro browser, angular router verifica se esiste una configurazione della rotta, la definizione della rotta contiene il riferimento al componente da caricare 
			una volta individuato il componente che gestisce la rotta, angular carica la relativa view, il caricamento avviene nell'area <router-outlet /> 
	Angular Router Service e' il servizio responsabile della gestione delle rotte
		NOTA: prima di usare il servizio, dobbiamo registrare il suo provider nel modulo di angular
		il modulo contenente il servizio di routing contiene anche le direttive che usiamo a livello della view
		NOTA: ordine con quale registriamo le rotte conta! viene ritornato il primo match che ha esito positivo!
		la registrazione avviene nel modulo padre (es. root module), specifichiamo per ogni rotta il componente di riferimento
		x eseguire la navigazione definiamo i componenti tipo il menu
		il componente deve contenere la direttiva [routerLink], e' una direttiva dell'attributo del tag <a/>
			serve per impostare il link di destinazione quando si esegue una azione sul componente (es.[routerLink]
	es. uso direttiva di RouterModule sull'elemento <a/>
		[routerLink]="['./products']"
Navigazione e impostazioni aggiuntive di routing
	attivazione rotta dal codice, passaggio di parametri, proteggere le rotte... vedi sotto...
	abbiamo due modi x recuperare i parametri
		- usando gli snapshots (da usare se vogliamo recuperare il valore iniziale del parametro, per es. se il componente viene visualizzato per ogni nuovo valore, va bene)
		- usando gli observables (da usare se il valore del parametro cambia senza cambiare Url/View)
	per leggere i parametri dall'Url usiamo il servizio di angular Router, iniettabile nel costruttore del componente
	limitare accesso alle rotte
		si usano i guards 
		si usano anche per chiedere una conferma all'utente prima di ricaricare la pagina
		ci sono diversi guards
			- CanActivate guard, scatta prima di aprire un indirizzo/Url
			- CanDeactivate guard, scatta prima di lasciare un indirizzo/Url
			- Resolve, caricamento dati prima di aprire un indirizzo/Url
			- CanLoad, per prevenire il routing assincrono
		un guard puo' essere implementato come un servizio, usando il decoratore @Injectable
		implementiamo inerfaccia CanActivate per esempio, implementando il metodo canActivate(), che nei casi piu' complessi puo' ritornare una Promise o un Observable
		il guard viene registrato nella configurazione di rotte, proprieta' canActivate dopo path.
		usiamo angular cli x creare un nuovo guard (ng g g products/product-detail)
		vedi https://app.pluralsight.com/library/courses/angular-routing/table-of-contents x approfondimenti
Moduli 
	viene usato il decoratore @NgModule
	aggregatore delle classi per esportare una funzionlita' in modo conveniente
	puo' essere caricato in modo assincrono (es. quando una rotta viene richiesta)
	un modulo contiene Componenti, Pipes, Guards, Directives.
	viene definito il componente di avvio (bootstrap)
	un modulo importa e esporta altri componenti
	per ogni componente all'interno di un modulo, modulo fornisce un ambiente di risuluzione delle dipendenze
	dettagli di un modulo
		Bootstrap array
			un app ha al meno un modulo (es. AppModule)
			questo modulo DEVE contenere al meno un Componente di partenza 
			solo il modulo ROOT puo' devinire il componente di avvio
		Declaration array
			definisce elenco di componenti che appartengono al modulo
			ogni componente/direttiva/pipe puo' appartenere solo ad un modulo
			NON aggiungere altri servizi al declaration array! SOLO component, directive o pipe
			i componenti/direttive/pipes, di default, sono accessibili solo all'interno del modulo
				x condividerli e' necessario esportarli
		Exports array
			condivisione componenti/direttive/pipe con altri 
			qualche regola x quanto riguarda l'esportazione
				esportiamo solo se quanlcun altro lo vuote usare 
		Imports array
			importazione dipendenze del nostro componente
			per es. possiamo separare la configurazione di rotte in un modulo dedicato
			importiamo solo quello che ci serve
			il modulo puo' registrare il provider di un servizio x la nostra app
		Providers array 
			se vogliamo registrare un componente/servizio a livello di un componente, lo dobbiamo aggiungere nel providers array del corrispondente componente
			NON aggiungere i servizi al Provider Array di un modulo condiviso
			E' consigliato creare un modulo dedicato x i servizi condivisi
				assicura che il servizio viene registrato solo 1 volta (singleton)
	usando i moduli dedicati alle funzionalita' aiuta a organizzare meglio il codice della nostra app
	creiamo il modulo usando la cli 
		ng g m products/product --flat -m app
	creiamo il modulo condiviso dove centralizziamo import e export dei moduli usati in diversi componenti
	RICORDIAMO: ogni app cmq ha un modulo ROOT che x convenzione e' chiamato app.module
		orchestra altri moduli
	possiamo continuare il refactoring dell'app creando un modulo dedicato al routing
	NOTA: angular registra i moduli in base loro dichiarazione all'interno di Imports array
		quindi se piu' moduli registrano le rotte, la sequenza di registrazione rotte e' in base ai relativi moduli 
		ATTENZIONE: assicurarsi che la registrazione delle rotte piu' specifiche avviene prima 
Angular CLI
	ng new hello-world // creazione di una nuova app
	ng new hello-world --help 
	ng serve -o // avvio dell'app aprendo il browser di default
	ng serve --help
	ng generate // generazione nuovi oggetti della nostra app
	ng generate --help 
	ng test // testing e config spec generati dalla CLI
			// esecuzione unit tests
	ng e2e  // esecuzione integration tests usando il protractor
	ng build // preparazione app per il deploy
		produce i file sia per ES5 che per ES2015, il browser scarica la versione opportuna
		app pronta per il deploy e' nella cartella /dist
		x otimizzare l'app possiamo eseguire minify/uglify + tree shaking (rimozione codice non utilizzato)
		   possiamo precompilare i nostri template, in modo da evitare una compilazione lato browser che comporta anche a scaricare piu' JS, oltre il tempo speso x la compilazione
	ng build --prod  // produce i file pronti per ambiente di produzione, ogni file contiene un suffisso che e' la hash del file, in modo da versionare le risorse scaricate dal browser, 
		e presenti nella cache del browser
	ng build --help
	