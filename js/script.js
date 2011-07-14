new Ya.share({
  element: 'ya-share',
      elementStyle: {
    'type': 'button',
        'border': false,
        'text': 'Поделиться с друзьями',
        'quickServices': ['vkontakte', 'odnoklassniki', 'liveinternet', 'facebook', 'twitter', 'lj', 'moimir', 'yaru']
        },
      link: 'http://elena.mikhnova.ru',
      title: 'Сайт умницы и красавицы',
      popupStyle: {
    blocks: {
      'Поделитесь с друзьями': ['facebook', 'twitter', 'friendfeed', 'lj', 'vkontakte', 'odnoklassniki', 'liveinternet', 'yaru', 'gbuzz', 'juick', 'moikrug', 'moimir', 'blogger', 'linkedin']
          },
        copyPasteField: false
        },
      serviceSpecific: {
    twitter: {
      title: 'уиии =) #mikhnova'
          }
    }
  });
