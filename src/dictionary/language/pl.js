export const pl = {
  title: {
    welcome: 'Strona powitalna',
    about: 'O nas',
    signIn: 'Logowanie',
    signUp: 'Rejestracja',
    remindPassword: 'Przypomnij hasło',
    changePassword: 'Zmień hasło',
    start: 'Start',
    temporaryPoints: 'Punkty czasowe',
    collectPoint: 'Zbierz punkt',
    collectedPoints: 'Zebrane punkty',
    map: 'Mapa',
    editEvent: 'Edycja wydarzenia',
    setMapPosition: 'Ustawienia mapy',
    short: {
      temporaryPoints: 'Czasowe',
      collectPoint: 'Zbierz pkt',
      collectedPoints: 'Zebrane',
      editEvent: 'Wydarzenie',
    },
  },
  general: {
    showMore: 'pokaż&nbsp;więcej...',
    pointUnit: 'pkt',
    backToStart: 'Przejdź do startowej',
  },
  form: {
    field: {
      email: 'E-mail',
      password: 'Hasło',
      rePassword: 'Powtórz hasło',
      newPassword: 'Nowe hasło',
      reNewPassword: 'Powtórz nowe hasło',
      userTeam: 'Nazwa patrolu',
      eventName: 'Nazwa wydarzenia',
      eventId: 'Kod wydarzenia',
      pointId: 'Kod punktu',
    },
    assist: {
      eventId: 'Kod wydarzenia jest generowany automatycznie',
    },
    validation: {
      required: 'Pole jest wymagane.',
      email: 'Musisz podać poprawny adres email.',
      min: 'Pole musi składać się z co najmniej {length} znaków.',
      max: 'Pole musi składać się z co najmniej {length} znaków.',
      confirmed: 'Pole nie zgadza się z polem potwierdzającym {target}.',
      length: 'Pole musi mieć długość {length}.',
      hasNumber: 'Pole powinno zawierać co najmniej jedną cyfrę.',
      hasCapitalize: 'Pole powinno zawierać co najmniej jedną wielką literę.',
    },
    button: {
      save: 'Zapisz',
      next: 'Dalej',
      goToLogin: 'Przejdź do logowania',
      setDefaultMapPositionAndZoom: 'Ustaw domyślną pozycję mapy',
    },
  },
  page: {
    about: {
      appInfo: `to aplikacja przeznaczona do przeprowadzania gier terenowych dla harcerzy i nie tylko. Pomysłodawcą
        projektu jest drużynowy z Hufca ZHP Gdynia`,
      more: `Dominik Betka, który jest z zawodu programistą. Zebrał on zespół osób z branży,
        które chciały pomóc w formie wolontariatu. Poniżej możecie poznać ludzi, którzy poświęcili swój 
        czas na stworzenie tak ciekawego projektu. Dziękuję tym osobą za tą ciężką pracę.`,
      authors: 'O twórcach',
      leader: 'Team leader',
      frontDev: 'Front-end Developer',
      backDev: 'Back-end Developer',
      uxDesigner: 'UX Designer',
    },
    start: {
      search: 'Rozpocznij poszukiwania!',
      checkResults: 'Sprawdź swoje wyniki',
      alreadyCollected: 'Zebraliście już',
      nothingCollected: 'Nie zebraliście jeszcze żadnych punktów',
    },
    remindPassword: {
      content: `Wpisz swój e-mail, naciśnij przycisk „Dalej”, a my wyślemy 
        na niego link do zmiany twojego hasła.`,
      success: 'Link do odzyskania hasła wysłano na podany email.',
    },
    error: {
      content: `Cześć! <br>
        Wygląda na to, że znajdujesz się nie tam gdzie trzeba... <br>
        <br>
        Poszukaj innej drogi! :)`,
    },
    collectedPoints: {
      sumTitle: 'Suma punktów wg kategorii',
      listTitle: 'Lista zebranych punktów',
    },
    collectPoint: {
      content: `Aby zebrać punkt, udaj się do miejsca oznaczonego na mapie
        i wpisz do poniższego pola tekstowego kod z koperty znajdującej się 
        na miejscu. Następnie wciśnij przycisk „Dalej”.`,
    },
    changePassword: {
      content: `Żeby zmienić swoje hasło, wpisz nowe hasło w poniższe pola, 
        a następnie naciśnij przycisk „Dalej”.`,
    },
    editEvent: {
      content: `Żeby zmienić swoje hasło, wpisz nowe hasło w poniższe pola, 
        a następnie naciśnij przycisk „Dalej”.`,
    },
    signUp: {
      registrationDone: 'Rejestracja przebiegła pomyślnie!',
      linkHasBeenSent: 'Link aktywacyjny został wysłany na wskazany adres e-mail:',
    },
    admin: {
      setMapPosition: {
        content: 'Ustaw mapę w wybranej pozycji i zapisz.',
      },
    },
  },
  error: {
    eventIdIsRequired: 'Kod wydarzenia jest wymagany',
    elementIdIsRequiredForMap: 'Kod wydarzenia jest wymagany, by uruchomić mapę',
    fakeErrorInMockApi: 'Fałszywy błąd mockApi',
    dataAfterSignIn: 'Logowanie nie powiodło się ze względu na problem z pobraniem danych dotyczących konta.',
  },
  apiError: {
    undefined: 'Wystąpił niezdefiniowany błąd. Skontaktuj się z twórcą aplikacji.',

    getEventById: 'Pobieranie danych wydarzenia się nie powiodło.',
    getPointsByEventId: 'Pobieranie punktów dla wybranego wydarzenia się nie powiodło.',
    getCategoriesByEventId: 'Pobieranie kategorii dla wybranego wydarzenia się nie powiodło.',
    updateEvent: 'Edycja danych dla wybranego wydarzenia się nie powiodła',
    collectPoint: 'Pobieranie kategorii dla wybranego wydarzenia się nie powiodło.',
    pointCollectedEarlier: 'Punkt o podanym kodzie został zebrany już wcześniej.',
    pointNoExist: 'Punkt o podanym kodzie nie istnieje.',

    signIn: 'Logowanie nie powiodło się ze względu na błąd serwera.',
    signInData: 'Logowanie nie powiodło się z powodu błędnego e-mail lub hasła.',
    checkYourLoginSession: 'Twoja sesja jest pusta — nie jesteś zalogowany.',
    signUp: 'Rejestracja nie powiodła się ze względu na błąd serwera.',
    remindPassword: 'Wysyłanie przypomnienia hasła nie powiodło się ze względu na błąd serwera.',
    signOut: 'Wylogowanie po stronie serwera nie powiodło. Zostałeś wylogowany lokalnie.',
    changePassword: 'Zmiana hasła się nie powiodła ze względu na błąd serwera.',
  },
  table: {
    numberOfCollected: 'Ilość zebranych',
    sumOfValues: 'Suma wartości',
    shortCategory: 'Kat.',
    category: 'Kategoria',
    shortPointId: 'Kod',
    value: 'Wartość',
    place: 'Miejsce',
    expand: 'Rozwiń',
  },
  communicate: {
    collectPoint: {
      congratulation: 'Gratulujemy!',
      youCollectedPoint: 'Zdobyłeś punkt!',
    },
    changePassword: {
      success: 'Twoje hasło zostało zmienione!',
    },
  },
  features: {
    timer: {
      toUpdate: 'Aktualizacja',
    },
  },
};