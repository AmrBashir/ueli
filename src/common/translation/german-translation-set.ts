import { TranslationSet } from "./translation-set";

// tslint:disable:object-literal-sort-keys for better readability
export const germanTranslationSet: TranslationSet = {
    trayIconShow: "Öffnen",
    trayIconSettings: "Einstellungen",
    trayIconQuit: "Beenden",

    userConfirmationProceed: "Fortfahren?",

    noSearchResultsFoundDescription: "",
    noSearchResultsFoundTitle: "Keine Suchergebnisse gefunden",

    refreshingIndexesPending: "Indexe werden aktualisiert",

    ueliCommandClearCaches: "Caches löschen",
    ueliCommandClearCachesDescription: "Löscht alle Zwischenspeicher von allen Plugins",
    ueliCommandEditSettingsFile: "Einstellungsdatei bearbeiten",
    ueliCommandEditSettingsFileDescription: "Bearbeite die Einstellungsdatei in deinem Standardtexteditor",
    ueliCommandExit: "Beenden",
    ueliCommandExitDescription: "Ueli beenden",
    ueliCommandOpenSettings: "Einstellungen",
    ueliCommandOpenSettingsDescription: "Einstellungen bearbeiten",
    ueliCommandRefreshIndexes: "Indexe aktualisieren",
    ueliCommandRefreshIndexesDescription: "Alle Indexe von allen Plugins aktualisieren",
    ueliCommandReload: "Neu laden",
    ueliCommandReloadDescription: "Ueli neu laden",

    generalErrorTitle: "Es ist ein Fehler aufgetreten",
    generalErrorDescription: "Überprüfe den Log für mehr Details",

    successfullyRefreshedIndexes: "Erfolgreich alle Indexe aktualisiert",
    successfullyClearedCaches: "Erfolgreich alle Zwischenspeicher gelöscht",
    successfullyUpdatedconfig: "Erfolgreich Einstellungen aktualisiert",
    successfullyClearedExecutionLog: "Erfolgreich den Ausführungslog gelöscht",

    commandlineSearchResultDescription: "{{command}} ausführen",

    noFavoritesFoundDescription: "Dein Ausführungslog ist leer",
    noFavoritesFoundTitle: "Keine Favoriten gefunden",

    // settings
    settings: "Einstellungen",

    generalSettingsMenuSection: "Allgemein",
    pluginSettingsMenuSection: "Plugins",

    generalSettings: "Allgemein",
    generalSettingsLanguage: "Sprache",
    generalSettingsLogExecution: "Ausführungen loggen",
    generalSettingsPersistentUserInput: "Persistente Benutzereingabe",
    generalSettingsAutostartApp: "App bei Systemstart starten",
    generalSettingsShowTrayIcon: "Symbol im Systemtray anzeigen",
    generalSettingsClearCachesOnExit: "Zwischenspeicher beim Beenden löschen",
    generalSettingsHotKey: "Hot Key",
    generalSettingsRescanIntervalEnabled: "Periodischer Rescan aktiviert",
    generalSettingsRescanInterval: "Rescan Intervall (in Sekunden)",
    generalSettingsShowAlwaysOnPrimaryDisplay: "Immer auf primärem Bildschirm anzeigen",
    generalSettingsRememberWindowPosition: "Fensterposition merken",
    generalSettingsExportSettings: "Aktuelle Einstellungen exportieren",
    generalSettingsSuccessfullyExportedSettings: "Erfolgreich Einstellungen exportiert",
    generalSettingsImportSettings: "Einstellungen importieren",
    generalSettingsImportFileFilterJsonFiles: "JSON Dateien",
    generalSettingsImportErrorInvalidConfig: "Einstellungsimport fehlgeschlagen: Dateiinhalt scheint ungültig zu sein",
    generalSettingsResetAllSettings: "Alle Einstellungen auf Standard zurücksetzen",
    generalSettingsResetWarning: "Du bist dabei alle allgemeinen Einstellungen auf Standard zurückzusetzen. Willst du fortfahren?",
    generalSettingsResetAllSettingsWarning: "Du bist dabei ALLE Einstellungen auf Standard zurückzusetzen. Willst du fortfahren?",
    generalSettingsClearExecutionLogWarning: "Du bist dabei den Ausführungslog zu löschen. Willst du fortfahren?",
    generalSettingsHideMainWindowAfterExecution: "Fenster nach Ausführung verstecken",
    generalSettingsHideMainWindowOnBlur: "Fenster verstecken, wenn es den Fokus verliert",
    generalSettingsDecimalSeparator: "Dezimaltrennzeichen",
    generalSettingsCheckingForUpdate: "Überprüfen",
    generalSettingsDownloadUpdate: "Update herunterladen",
    generalSettingsDownloadingUpdate: "Update wird heruntergeladen",
    generalSettingsLatestVersion: "Du hast die neuste Version!",
    generalSettingsErrorWhileCheckingForUpdate: "Fehler während des Updatechecks",
    clearExecutionLog: "Ausführungslog löschen",
    openDebugLog: "Debug log öffnen",
    openTempFolder: "Temporärer Ordner öffnen",

    hotkeyKeyBackspace: "Rücktaste",
    hotkeyKeyDelete: "Entfernen",
    hotkeyKeyDown: "Down",
    hotkeyKeyEnd: "End",
    hotkeyKeyEscape: "Escape",
    hotkeyKeyHome: "Home",
    hotkeyKeyInsert: "Insert",
    hotkeyKeyLeft: "Left",
    hotkeyKeyPageDown: "PageDown",
    hotkeyKeyPageUp: "PageUp",
    hotkeyKeyPlus: "Plus",
    hotkeyKeyReturn: "Enter",
    hotkeyKeyRight: "Right",
    hotkeyKeySpace: "Leertaste",
    hotkeyKeyTab: "Tab",
    hotkeyKeyUp: "Up",
    hotkeyModifierAlt: "Alt",
    hotkeyModifierAltGr: "AltGr",
    hotkeyModifierCommand: "Cmd",
    hotkeyModifierControl: "Strg",
    hotkeyModifierOption: "Option",
    hotkeyModifierShift: "Shift",
    hotkeyModifierSuper: "Super",

    appearanceSettings: "Erscheinungsbild",
    appearanceSettingsWindowWidth: "Fensterbreite (in Pixel)",
    appearanceSettingsMaxSearchResultsPerPage: "Max Suchergebnisse (pro Seite)",
    appearanceSettingsSearchResultHeight: "Suchergebnishöhe (in Pixel)",
    appearanceSettingsSmoothScrolling: "Weiches Scrollen",
    appearanceSettingsUserInputHeight: "Eingabefeld (in Pixel)",
    appearanceSettingsShowDescriptionOnAllSearchResults: "Beschreibung bei allen Suchresultaten anzeigen",
    appearanceSettingsShowSearchIcon: "Suchsymbol in der Suchleiste anzeigen",
    appearanceSettingsShowSearchResultNumbers: "Nummern für Suchergebnisse anzeigen",
    appearanceSettingsResetWarningMessage: "Du bist dabei alle Erscheiungsbildeinstellungen auf Standard zurückzusetzen. Willst du fortfahren?",
    appearanceSettingsAllowTransparentBackground: "Transparenter Hintergrund erlauben",
    appearanceSettingsFontFamily: "Schriftart",
    appearanceSettingsUserInputBorderRadius: "Benutzereingabe Randradius",
    appearanceSettingsUserInputBottomMargin: "Benutzereingabe unterer Rand (in Pixel)",
    appearanceSettingsSearchResultsBorderRadius: "Suchergebnisse Rahmenradius",
    appearanceSettingsScrollbarBorderRadius: "Randradius der Bildlaufleiste",
    appearanceSettingsBorderRadiusDescription: "Dies ist ein CSS-Wert, daher müssen Sie 'px' wie diesen '10px' oder separate Ecken wie diesen '10px 0px 10px 5px' hinzufügen.",

    settingsUserInputTitle: "Benutzereingabe",
    settingsSearchResultsBoxTitle: "Suchergebnisfeld",
    settingsScrollbarTitle: "Scrollleiste",
    settingsGeneralTitle: "Allgemein",

    colorThemeSettings: "Farbschema",
    colorThemeSettingsImportColorTheme: "Farbschema importieren",
    colorThemeSettingsExportColorTheme: "Farbschema exportieren",
    colorThemeSettingsResetWarning: "Du bist dabei alle Farbschemaeinstellungen auf Standard zurückzusetzen. Willst du fortfahren?",
    colorThemeExportSucceeded: "Erfolgreich Farbschema exportiert",
    colorThemeExportFailed: "Farbschemaexport fehlgeschlagen",
    colorThemeImportSucceeded: "Erfolgreich Farbschema importiert",
    colorThemeImportFailed: "Farbschemaimport fehlgeschlagen",
    colorThemeInvalidColorTheme: "Ungültiges Farbschema",
    colorThemePresets: "Vorlagen",
    colorthemeUserInputBackgroundColor: "Suchfeld Hintergrundfarbe",
    colorThemeUserInputTextColor: "Suchfeld Textfarbe",
    colorThemeSearchResultsBackgroundColor: "Suchergebnisse Hintergrundfarbe",
    colorThemeSearchResultsItemActiveBackgroundColor: "Aktives Suchergebnis Hintergrundfarbe",
    colorThemeSearchResultsItemActiveTextColor: "Aktives Suchergebnis Textfarbe",
    colorThemeSearchResultsItemActiveDescriptionColor: "Aktives Suchergebnis Beschreibungsfarbe",
    colorThemeSearchResutlsItemNameTextColor: "Suchergebnis Name Textfarbe",
    colorThemeSearchResultsItemDescriptionTextColor: "Suchergebnis Beschreibung Textfarbe",
    colorThemeScrollbarForegroundColor: "Scrollbar Vordergrundfarbe",
    colorThemeScrollbarBackgroundColor: "Scrollbar Hintergrundfarbe",

    colorPicker: "Farbwähler",

    applicationSearchSettings: "Programmsuche",
    applicationSearchSettingsDescription: `Dieses Plugin sucht nach Programmen auf deinem Computer. Du kannst Ordner definieren, wo nach Applikationen gesucht werden soll und anhand welcher Dateiendung ein Programm erkennt werden soll.`,
    applicationSearchSettingsApplicationFolders: "Programmverzeichnisse",
    applicationSearchSettingsApplicationFolder: "Programmverzeichnis",
    applicationSearchSettingsFolderPath: "Ordnerpfad",
    applicationSearchSettingsRemoveAction: "Entfernen",
    applicationSearchSettingsAddApplicationFolder: "Programmverzeichnis hinzufügen",
    applicationSearchSettingsApplicationFileExtensions: "Programmdateierweiterung",
    applicationSearchSettingsApplicationFileExtension: "Erweiterung",
    applicationSearchSettingsAddApplicationFileExtension: "Erweiterung hinzufügen",
    applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" ist keine gültige Dateierweiterung`,
    applicationSearchSettingsNotAFolderErrorMessage: `"{{value}}" ist kein Ordner`,
    applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}}" existiert nicht`,
    applicationSearchSettingsFolderValidationError: `Während der Validierung von "{{value}}" ist ein Fehler aufgetreten`,
    applicationSearchSettingsUseNativeIcons: "Native Icons verwenden (deaktiviert führt evt. zu besserer Performance)",

    searchEngineSettings: "Suchmaschine",
    searchEngineSettingsDescription: `Die Suchmaschine wird für vorindexierte Inhalte benutzt, z.B. Programme, Shortcuts und Betriebssystembefehle und -einstellungen.`,
    searchEngineSettingsFuzzyness: "Fuzzyness",
    searchEngineSettingsFuzzynessDescription: "0 = strikt, 1 = fuzzy",
    searchEngineSettingsStrict: "Strikt",
    searchEngineSettingsFuzzy: "Fuzzy",
    searchEngineSettingsBlacklist: "Blacklist",
    searchEngineSettingsMaxSearchResults: "Maximale Suchergebnisse",
    searchEngineSettingsResetWarning: "Du bist dabei alle Suchmaschineneinstellungen auf Standard zurückzusetzen. Willst du fortfahren?",

    shortcutSettings: "Shortcuts",
    shortcutSettingsDescription: `Dieses Plugin erlaubt es dir Dateien und Webseiten schnell zu öffnen indem du eigene Shorctus erstellst.`,
    shortcutSettingsTableType: "Typ",
    shortcutSettingsTableName: "Name",
    shortcutSettingsTableExecutionArgument: "Ausführungsargument",
    shortcutSettingsTableDescription: "Beschreibung",
    shortcutSettingsTableTags: "Tags",
    shortcutSettingsTableIcon: "Icon",
    shortcutSettingsTableEdit: "Bearbeiten",
    shortcutSettingsTableDelete: "Löschen",
    shortcutSettingsAddShortcut: "Shortcut hinzufügen",
    shortcutSettingsEditModalImageUrl: "Bild URL",
    shortcutSettingsEditModalSvgString: "SVG Zeichenkette",
    shortcutSettingsEditModalColor: "Farbe",
    shortcutSettingsEditModalGoogleWebsite: "Google Webseite",
    shortcutSettingsEditModalDownloadsFolder: "Downloads Ordner",
    shortcutSettingsEditModalCommand: "Befehl",
    shortcutSettingsInvalidShortcutErrorMessage: "Ungültiger Shortcut",
    shortcutSettingsTagPlaceholder: "Füge einen Tag hinzu und drücke Enter",
    shortcutSettingsTypeUrl: "URL",
    shortcutSettingsTypeCommandlineTool: "Kommandozeilenprogramm",
    shortcutSettingsEditModalCommandLinetoolDescription: "Datei mit Visual Studio Code bearbeiten",
    shortcutSettingsNeedsUserConfirmation: "Braucht eine Bestätigung vor der Ausführung",

    translationSettingsTranslation: "Übersetzung",
    translationSettingsDescription: `Dieses Plugin erlaubt es dir schnell Wörter und kurze Sätze zu übersetzen. Es benutzt eine inoffizielle API (https://github.com/imankulov/linguee-api) für Linguee (https://github.com/imankulov/linguee-api) und kann daher instabil sein.`,
    translationSettingsDebounceDelay: "Debounce Verzögerung (in Millisekunden)",
    translationSettingsMinSearchTermLength: "Minimum Suchbegrifflänge",
    translationSettingsPrefix: "Präfix",
    translationSettingsSourceLanguage: "Quellsprache",
    translationSettingsTargetLanguage: "Zielsprache",

    everythingSearch: "Everything Suche",
    everythingSearchSettingDescription: `Dieses Plugin erlaubt es dir lokale Dateien und Ordner mit Everthing search zu finden. Du musst "Everything" und "Everything Command-line Interface" von https://www.voidtools.com/downloads/ installieren. Nachdem beides installiert ist musst du den Dateipfad zu 'es.exe' unten angeben.`,
    everythingSearchPathToBinary: `Dateipfad zu "es.exe"`,
    everythingSearchPrefix: "Präfix",
    everythingSearchMaxSearchResults: "Maximale Suchergebnisse",
    everythingSearchPathToBinaryFilterName: "Ausführbare Dateien",

    mdfindSearch: "mdfind Suche",
    mdfindSettingsDescription: "Dieses Plugin erlaubt es dir mithilfe der nativen macOS-Suche Dateien und Ordner in deinem lokalen Dateisystem zu finden.",
    mdfindSearchDebounceDelay: "Debounce Verzögerung (in Millisekunden)",
    mdfindSearchPrefix: "Präfix",
    mdfindSearchMaxSearchResults: "Maximale Suchergebnisse",

    websearch: "Websuche",
    websearchSettingDescription: `Dieses Plugin erlaubt es dir schnell das Internet mit deiner Lieblings-Websuchmaschine zu durchsuchen, indem du deine eigenen Websuchamschinen erstellst.`,
    websearchEngines: "Websuchmaschinen",
    websearchEditingModalTitleAdd: "Websuchmaschine hinzufügen",
    websearchEditingModalTitleEdit: "Websuchmaschine bearbeiten",
    websearchName: "Name",
    websearchPrefix: "Präfix",
    websearchUrl: "URL",
    websearchSuggestionUrl: "Vorschlag URL",
    websearchIcon: "Icon",
    websearchPriority: "Priorität",
    websearchIsFallback: "Fallback",
    websearchEncodeSearchTerm: "Suchbegriff kodieren",
    websearchInvalidWebsearchEngine: "Ungültige Websuchmaschine",
    websearchDescription: `Suche auf {{websearch_engine}} nach "{{search_term}}"`,

    fileBrowser: "Dateibrowser",
    fileBrowserSettingsDescription: `Dieses Plugin erlaubt es dir dein lokales Dateisystem zu durchsuchen. Um zu starten musst du einen validen absoluten Dateipfad angeben.`,
    fileBrowserSettingsMaxSearchResults: "Maximale Suchergebnisse",
    fileBrowserOptionsShowHiddenFiles: "Versteckte Dateien anzeigen",
    fileBrowserOptionsBlackList: "Blacklist",
    fileBrowserOptionsBlackListPlaceholder: "Datei- oder Ordnername",

    operatingSystemCommands: "Betriebssystembefehle",
    operatingSystemCommandsSettingsDescription: `Betriebssystembefehle sind simple Befehle um das Betriebssystem zu steuern, z.B. Herunterfahren, Neustart.`,

    operatingSystemSettings: "Betriebssystemeinstellungen",
    operatingSystemSettingsSettingsDescription: "Dieses Plugin erlaubt es dir schnell nach Betriebssystemeinstellungen zu suchen.",

    macOsShutdown: "Ausschalten",
    macOsShutdownDescription: "Computer ausschalten",
    macOsRestart: "Neustart",
    macOsRestartDescription: "Computer neu starten",
    macOsLogout: "Abmelden",
    macOsLogoutDescription: "Aktuellen Benutzer abmelden",
    macOsSleep: "Ruhemodus aktivieren",
    macOsSleepDescription: "Ruhemodus",
    macOsLock: "Sperren",
    macOsLockDescription: "Computer sperren",

    windowsShutdown: "Herunterfahren",
    windowsShutdownDescription: "Computer herunterfahren",
    windowsRestart: "Neu starten",
    windowsRestartDescription: "Computer neu starten",
    windowsSignout: "Abmelden",
    windowsSignoutDescription: "Aktuellen Benutzer abmelden",
    windowsLock: "Sperren",
    windowsLockDescription: "Computer sperren",
    windowsSleep: "Energie sparen",
    windowsSleepDescription: "Computer in Energiesparmodus versetzen",
    windowsHibernation: "Ruhezustand",
    windowsHibernationDescription: "Computer in Ruhezustand versetzen",

    calcuator: "Rechner",
    calculatorCopyToClipboard: "Drücke Enter um in die Zwischenablage zu kopieren",
    calculatorDescription: "Dieses Plugin erlaubt es dir schnell einfache Rechnungen zu machen.",
    calculatorPrecision: "Präzision",

    openUrlWithBrowser: "Im Webbrowser öffnen",
    url: "URL",
    urlDescription: "Dieses Plugin erlaubt es dir Webseiten schnell aufzurufen, indem du eine URL eingibst",
    urlDefaultProtocol: "Standardprotokoll",

    email: "Email",
    emailSettingsDescription: "Dieses Plugin erlaubt es dir schnell Email zu schreiben indem du eine Emailadresse eingibst",
    openNewMail: "Neues Email öffnen",

    currencyConverter: "Währungsumrechnung",
    currencyConverterDescription: "Dieses Plugin erlaubt es dir schnell Währungsumrechnungen zu machen. Aktuelle Wechselkurse werden von https://exchangeratesapi.io/ bereit gestellt.",
    currencyConverterPrecision: "Präzision",
    currencyConverterCopyToClipboard: "Drücke Enter um in die Zwischenablage zu kopieren",

    workflows: "Workflows",
    workflowSettingsDescription: "Dieses Plugin erlaubt es dir schnell mehrere Dinge auf einmal auszuführen",
    workflowSettingsAddWorkflow: "Workflow hinzufügen",
    workflowName: "Name",
    workflowNamePlaceholder: "Füge den Namen deines Workflows hier ein",
    workflowDescription: "Beschreibung",
    workflowDescriptionPlaceholder: "Füge die Beschreibung deines Workflows hier ein",
    workflowTags: "Tags",
    workflowIcon: "Icon",
    workflowExecutionSteps: "Ausführungsschritte",
    workflowExecutionArgumentType: "Ausführungsargumenttyp",
    wofkflowExecutionArgumentTypeCommandlineTool: "Kommandozeilenprogramm",
    workflowExecutionArgumentTypeUrl: "URL",
    workflowInvalidExecutionStep: "Ungültiger Ausführungsschritt",
    workflowInvalidWorkflow: "Ungültiger Workflow",
    workflowNeedsUserConfirmationBeforeExecution: "Braucht Bestätigung vor der Ausführung",

    commandline: "Kommandozeile",
    commandlinePrefix: "Präfix",
    commandlineSettingsDescription: "Dieses Plugin erlaubt es dir schnell Kommandozeilenbefehle auszuführen.",
    commandlineShell: "Shell",

    simpleFolderSearch: "Einfache Ordnersuche",
    simpleFolderSearchDescription: "Dieses Plugin erlaubt es dir, schnell Dateien und Ordner zu finden.",
    simpleFolderSearchRecursive: "Rekursiver Dateiscan",
    simpleFolderSearchExcludeHiddenFiles: "Versteckte Dateien ausblenden",
    simpleFolderSearchFolderPath: "Dateipfad",
    simpleFolderSearchAddFolder: "Ordner hinzufügen",
    simpleFolderSearchEditFolder: "Ordner bearbeiten",

    uwpSettingsDescription: "Dieses Plugin erlaubt es dir vorinstallierte UWP-Apps zu finden.",

    colorConverter: "Farbkonverter",
    colorConverterDescription: "Dieses Plugin erlaubt es dir Farben in verschiedene Formate zu konvertieren.",
    colorConverterShowColorPreview: "Farbvorschau anzeigen",

    dictionary: "Wörterbuch",
    dictionaryDescription: "Dieses Plugin erlaubt es dir die Definition und Synonyme eines Wortes nachzuschlagen. Es benutzt eine inoffizielle API für Google Dictionary (https://googledictionaryapi.eu-gb.mybluemix.net/)",
    dictionaryPrefix: "Präfix",
    dictionaryMinSearchTermLength: "Minimum Suchbegrifflänge",
    dictionaryDebounceDelay: "Debounce Verzögerung (in Millisekunden)",

    browserBookmarks: "Browser Lesezeichen",
    browserBookmarksDescription: "Dieses Plugin erlaubt es dir die Lesezeichen deines Browser zu durchsuchen.",
    browserBookmarksBrowser: "Browser",
    browserBookmarksUseFavicons: "Favicons benutzen",
    browserBookmark: "Lesezeichen",

    cancel: "Abbrechen",
    save: "Speichern",
    add: "Hinzufügen",
    remove: "Entfernen",
    edit: "Bearbeiten",
    forExample: "Zum Beispiel",
    example: "Beispiel",
    iconType: "Icontyp",
    iconTypeColor: "Farbe",
    showFullFilePath: "Vollständiger Dateipfad anzeigen",
    yes: "Ja",
    no: "Nein",
    resetToDefault: "Auf Standard zurücksetzen?",
    resetPluginSettingsToDefaultWarning: "Du bist dabei alle Einstellungen dieses Plugins auf Standard zurückzusetzen. Willst du fortfahren?",
    filePath: "Dateipfad",
    folderPath: "Ordnerpfad",
    chooseFile: "Datei auswählen",
    chooseFolder: "Ordner auswählen",
    restartRequired: "Neustart erforderlich",

    controlPanel: "Systemsteuerung",
    controlPanelSettingsDescription: "Dieses Plugin erlaubt es dir, Elemente der Systemsteuerung schnell zu finden.",

    iconsSettings: "Symbole",
    iconsSettingsResetWarningMessage: "Sie sind dabei, alle Symboleinstellungen auf die Standardeinstellungen zurückzusetzen.Möchten Sie fortfahren?",
};
