// Copyright 2008 Google Inc.
// All Rights Reserved.

/**
 * @fileoverview (ernestd): This file is a snapshot taken from the original APIs dictionary
 * available at code.google.com. The periodic table uses some of this data to make the groups.
 * Day of the snapshot: 1-5?-11
 * @author jacobm@google.com (Jacob Moon)
 */


(function() {

  /**
   * Meta data used for the Site Directory page
   * @type {object}
   */
  var siteDirectoryMetaData = {

    /**
     * Site Directory meta data for products
     * @type {object}
     */
    products: {

      /**
       * Section title in the left nav (e.g. 'Products', 'Productos')
       * This string must be translated for intl pages
       * @type {string}
       */
      sectionTitle: 'Products',

      /**
       * List of external(translated) labels for products, in the order they
       * should appear in the left nav of the Site Directory page
       * The labels in list must be translated for intl pages
       * @type {array}
       */
      labels: [
          'All',
          'Ads',
          'Browser',
          'Geo',
          'Mobile',
          'Search',
          'Social',
          'Labs'
      ],

      /**
       * Mapping of external(translated) labels to internal(non-translated)
       * labels, used in GWT
       * The keys on the left must be translated for intl pages, and they
       * should be the same as the labels defined above.
       * @type {object}
       */
      labelsMapExternalToInternal: {
          'All': 'products',
          'Ads': 'ads',
          'Browser': 'browser',
          'Geo': 'geo',
          'Mobile': 'mobile',
          'Search': 'search',
          'Social': 'social',
          'Labs': 'labs'
      },

      /**
       * Mapping of internal(non-translated) labels to external(translated)
       * labels, used in GWT
       * The values on the right must be translated for intl pages, and they
       * should be the same as the labels defined above.
       * @type {object}
       */
      labelsMapInternalToExternal: {
          'products': 'All',
          'ads': 'Ads',
          'browser': 'Browser',
          'geo': 'Geo',
          'mobile': 'Mobile',
          'search': 'Search',
          'social': 'Social',
          'labs': 'Labs'
      },

      /**
       * List of all resource keys in the order they should appear
       * in the long description panel
       * Each product can define a subset of these resources.
       * @type {array}
       */
      resourceKeys: [
          'home',
          'doc',
          'group',
          'blog'
      ],

      /**
       * Mapping of internal(non-translated) resource keys to
       * external(translated) keys
       * The values on the right must be translated for intl pages.
       * @type {object}
       */
      resourceKeysMap: {
          'home': 'Home',
          'doc': 'Documentation',
          'group': 'Group',
          'blog': 'Blog'
      }
    },

    /**
     * Site Directory meta data for programs
     * @type {object}
     */
    programs: {

      /**
       * Section title in the left nav (e.g. 'Programs', 'Programas')
       * This string must be translated for intl pages.
       * @type {string}
       */
      sectionTitle: 'Resources',

      /**
       * List of external(translated) labels for programs, in the order they
       * should appear in the left nav of the Site Directory page
       * This list must be translated for intl pages.
       * @type {array}
       */
      labels: [
          'All',
          'Open Source',
          'Education',
          'Events',
          'Tools & Tips'
      ],

      /**
       * Mapping of external(translated) labels to internal(non-translated)
       * labels, used in GWT
       * The keys on the left must be translated for intl pages, and they
       * should be the same as the labels defined above.
       * @type {object}
       */
      labelsMapExternalToInternal: {
          'All': 'resources',
          'Open Source': 'opensource',
          'Education': 'education',
          'Events': 'events',
          'Tools & Tips': 'tools'
      },

      /**
       * Mapping of internal(non-translated) labels to external(translated)
       * labels, used in GWT
       * The values on the right must be translated for intl pages, and they
       * should be the same as the labels defined above.
       * @type {object}
       */
      labelsMapInternalToExternal: {
          'resources': 'All',
          'opensource': 'Open Source',
          'education': 'Education',
          'events': 'Events',
          'tools': 'Tools & Tips'
      }
    },

    /**
     * Various texts used in the Site Directory page, not tied to any
     * specific product
     * @type {object}
     */
    messages: {

      /**
       * Text used to indicate new products in red text in the
       * short description panel
       * @type {string}
       */
      NEW: 'New!',

      /**
       * Header of the long description panel
       * @type {string}
       */
      LONG_DESC_PANEL_TITLE: 'Details',

      /**
       * Text shown before listing resources in the long description panel
       * @type {string}
       */
      FOR_MORE: 'For more information',

      /**
       * Text shown for Labs APIs.
       * @type {string}
       */
      LABS_NOTICE: 'This is a <a href="/labs/">Labs API</a>.'
    }
  };

  // Add siteDirectoryMetaData to the global scope
  window['CODESITE_siteDirectoryMetaData'] = siteDirectoryMetaData;

  /**
   * Product data dictionary
   * @type {array}
   */
  var productDictionary  = {

    /**
     * List of dictionaries
     * Theese strings should not be translated for intl pages.
     * @type {array}
     */
    dictionariesList: [
      'products',
      'programs',
      'searchSuggest',
      'searchResultTabs'
    ],

    /**
     * Data dictionary for products
     * Entries in this dictionary will appear in search suggest and the
     * Site Directory page.
     * @type {object}
     */
    'products': {

      /**
       * This dictionary is for products.
       * This string should not be translated.
       * @type {string}
       */
      dictionaryType: 'products',

      /**
       * The products listed in this section should be included in
       * the Site Directory page
       * @type {boolean}
       */
      includeInSiteDirectory: true,

      /**
       * The products listed in this section should be included in
       * the search suggest
       * @type {boolean}
       */
      includeInSearchSuggest: true,

      /**
       * Meta data used for the Site Directory page,
       * defined in var siteDirectoryMetaData above
       * @type {object}
       */
      siteDirectoryMetaData: siteDirectoryMetaData.products,

      /**
       * List of product IDs in the order they should appear on the
       * Site Directory page
       * The keys in this list should not be translated.
       * @type {array}
       */
      keys: [
          'mobile',
          'accounts',
          'adsense',
          'afma',
          'admob',
          'adwords',
          'afa',
          'afsadsonly',
          'ajaxfeeds',
          'ajaxlanguage',
          'blogsearch',
          'imagesearch',
          'newssearch',
          'patentsearch',
          'websearch',
          'videosearch',
          'analytics',
          'analyticsmobile',
          'android',
          'appengine',
          'appsscript',
          'bigquery',
          'googleapps',
          'marketplace',
          'gmail',
          'base',
          'blogger',
          'books',
          'buzz',
          'calendar',
          'charttools',
          'checkout',
          'chrome',
          'chromium',
          'chromeframe',
          'chromeextensions',
          'chromeapps',
          'chromewebstore',
          'chromedevtools',
          'closure',
          'cloudprint',
          'codesearch',
          'commercesearch',
          'contacts',
          'customsearch',
          'dfa',
          'dfp',
          'gdata',
          'desktop',
          'documents',
          'ima',
          'earth',
          'eclipse',
          'feedburner',
          'finance',
          'friendconnect',
          'fusion',
          'gadgets',
          'googletv',
          'health',
          'igoogle',
          'javadevtools',
          'themes',
          'kml',
          'latitude',
          'libraries',
          'moderator',
          'geocoding',
          'directions',
          'maps',
          'flashmaps',
          'mapspremier',
          'opensocial',
          'orkut',
          'projecthosting',
          'picasaweb',
          'powermeter',
          'predict',
          'pubsubhubbub',
          'recaptcha',
          'safebrowsing',
          'securedataconnector',
          'sidewiki',
          'sites',
          'sketchup',
          'socialgraph',
          'spreadsheets',
          'staticmaps',
          'storage',
          'talk',
          'transit',
          'gtt',
          'v8',
          'wave',
          'webelements',
          'webtoolkit',
          'webmastertools',
          'youtube'
      ],

      /**
       * Entries for products
       *
       * Each entry is declared using one of the keys defined above.
       *
       * Each entry consists of the following:
       *
       *   title:
       *       Required; must be translated
       *       Title of the product
       *
       *   searchTabTitle:
       *       Optional; must be translated
       *       Title for its search results tab if it should be different from
       *       the title of the product. (e.g. 'Google Desktop Search APIs' vs
       *       'Google Desktop APIs')
       *
       *   groupsTitle:
       *       Optional; must be translated
       *       Title of discussion group if available
       *       This will be shown as a search result tab.
       *
       *   url:
       *       Required; must be localized
       *       URL of the product landing page
       *
       *   productId:
       *       Required; should not be translated
       *       Unique product ID, same as the key for this entry
       *
       *   labels:
       *       Required; should not be translated
       *       A product may include different labels from the English version
       *       of this file.
       *       List of internal(non-translated yet localized list) labels
       *
       *   keywords:
       *       Required; must be translated
       *       List of keywords for search suggest
       *       These take the form of {'keyword':n, ...}.
       *       keyword is what triggers the entry to be included in the
       *       search suggest list as a user types a query in the search box,
       *       and n is the weight of the keyword used for determining the
       *       rank of this entry within list of entries shown in the search
       *       suggest list. The higher the number, the higher the likelihood
       *       of showing this entry as the first one in the search suggest.
       *
       *   shortDesc:
       *       Required; must be translated
       *       Short description of the product shown in the Site Directory
       *       page
       *
       *   resources:
       *       Optional; must be localized
       *       Mapping of internal(non-translated) resource keys to actual
       *       resource URLs
       *
       * @type {object}
       */
      entries: {

        'afa': {
          title: 'AdSense for Ajax',
          url: '/apis/afa/',
          productId: 'afa',
          labels: ['products', 'ads'],
          keywords: {'ads': 10, 'adsense': 10},
          shortDesc: 'Target ads to dynamic page content.',
          resources: {
            'home': '/apis/afa/'
          }
        },

        'afsadsonly': {
          title: 'AdSense for Search Ads Only',
          url: '/apis/afs-ads-only/',
          productId: 'afsadsonly',
          labels: ['products', 'ads'],
          keywords: {'ads': 10, 'adsense': 10},
          shortDesc: 'Target ads to search results.',
          resources: {
            'home': '/apis/afs-ads-only/'
          }
        },

        'charttools': {
          title: 'Chart Tools',
          url: '/apis/charttools/',
          productId: 'charttools',
          labels: ['products'],
          keywords: {'chart': 10, 'graph': 10},
          shortDesc: 'Add charts and graphs to your web page.',
          resources: {
            'home': '/apis/charttools/',
            'doc': '/apis/charttools/docs/about.html'
          }
        },

        'android': {
          title: 'Android',
          groupsTitle: 'Android Groups',
          url: '/android/',
          productId: 'android',
          labels: ['products'],
          keywords: {'mobile': 10},
          shortDesc: 'Build mobile apps for Android, a software stack for mobile devices.',
          resources: {
            'home': '/android/',
            'doc': '/android/documentation.html',
            'group': 'http://groups.google.com/group/android-developers',
            'blog': 'http://android-developers.blogspot.com/'
          }
        },

        'gdata': {
          title: 'Google Data Protocol',
          groupsTitle: 'Google Data Protocol Groups',
          url: '/apis/gdata/',
          productId: 'gdata',
          labels: ['products'],
          keywords: {'feed': 1, 'entry': 1, 'entries': 6, 'data api': 10, 'gdata': 10, 'data': 6, 'protocol': 4, 'atom': 1, 'atompub': 1, 'json': 1},
          shortDesc: 'A simple, standard protocol for reading and writing data on the web.',
          resources: {
            'home': '/apis/gdata/',
            'doc': '/apis/gdata/overview.html',
            'group': 'http://groups.google.com/group/google-help-dataapi',
            'blog': 'http://googledataapis.blogspot.com/'
          }
        },

        'blogger': {
          title: 'Blogger Data API (Labs)',
          groupsTitle: 'Blogger Data API Groups',
          url: '/apis/blogger/',
          productId: 'blogger',
          labels: ['products', 'social', 'labs'],
          keywords: {'apis': 1, 'feed': 1, 'entries': 2, 'gentries': 1, 'data apis': 4},
          shortDesc: 'Enable your apps to view and update Blogger content.',
          resources: {
            'home': '/apis/blogger/',
            'doc': '/apis/blogger/developers_guide_protocol.html',
            'group': 'http://groups.google.com/group/bloggerDev',
            'blog': 'http://googledataapis.blogspot.com/'
          }
        },

        'buzz': {
          title: 'Google Buzz API (Labs)',
          groupsTitle: 'Google Buzz API Groups',
          url: '/apis/buzz/',
          productId: 'buzz',
          labels: ['products', 'social', 'labs'],
          keywords: {'apis': 1, 'feed': 1, 'entries': 2, 'social': 1, 'gentries': 1},
          shortDesc: 'Google Buzz is a new way to share updates, photos, videos and more, and start conversations about the things you find interesting',
          resources: {
            'home': '/apis/buzz/',
            'group': 'http://groups.google.com/group/google-buzz-api',
            'blog': 'http://googlesocialweb.blogspot.com/'
          }
        },

        'chrome': {
          title: 'Google Chrome',
          groupsTitle: 'Chrome Groups',
          url: '/chrome/',
          productId: 'chrome',
          labels: ['products', 'browser'],
          keywords: {'browser': 10, 'chrome': 10, 'chrome os': 5, 'HTML5': 7, 'web standards': 1, 'open web': 1},
          shortDesc: 'Create interactive, high-performance web apps for Google Chrome and other browsers.',
          resources: {
            'home': '/chrome/',
            'group': 'https://groups.google.com/a/chromium.org/group/chromium-apps/topics?pli=1',
            'blog': 'http://blog.chromium.org/'
          }
        },

        'chromium': {
          title: 'Chromium',
          groupsTitle: 'Chromium Groups',
          url: '/chromium/',
          productId: 'chromium',
          labels: ['products', 'browser'],
          keywords: {'browser': 10, 'chrome': 1, 'chromium': 10, 'v8': 1},
          shortDesc: 'Contribute to the open source project behind Google Chrome.',
          resources: {
            'home': '/chromium/',
            'doc': 'http://dev.chromium.org',
            'group': 'http://groups.google.com/a/chromium.org/group/chromium-discuss',
            'blog': 'http://blog.chromium.org'
          }
        },

        'chromeframe': {
          title: 'Google Chrome Frame',
          groupsTitle: 'Chrome Frame Groups',
          url: '/chrome/chromeframe/',
          productId: 'chromeframe',
          labels: ['products', 'browser'],
          keywords: {'browser': 5, 'chrome': 4, 'chromium': 1, 'v8': 1, 'html5': 3, 'ie': 1, 'internet explorer': 1},
          shortDesc: 'Enable open web technologies and Google Chrome\’s fast JavaScript implementation within Internet Explorer.',
          resources: {
            'home': '/chrome/chromeframe/',
            'doc': '/chrome/chromeframe/developers_guide.html',
            'group': 'http://groups.google.com/group/google-chrome-frame'
          }
        },

        'chromeextensions': {
          title: 'Google Chrome Extensions (Labs)',
          groupsTitle: 'Google Chrome Extensions Groups',
          url: '/chrome/extensions/',
          productId: 'chromeextensions',
          labels: ['products', 'browser', 'labs'],
          keywords: {'chrome': 5, 'chromium': 1, 'browser':1, 'html5': 1, 'extensions': 8},
          shortDesc: 'Modify and enhance the functionality of Google Chrome',
          resources: {
            'home': '/chrome/extensions/',
            'doc': '/chrome/extensions/docs.html',
            'group': 'http://groups.google.com/a/chromium.org/group/chromium-extensions',
            'blog': 'http://blog.chromium.org'
          }
        },

        'chromeapps': {
          title: 'Installable Web Apps (Labs)',
          groupsTitle: 'Web App Groups',
          url: '/chrome/apps/',
          productId: 'chromeapps',
          labels: ['products', 'browser', 'labs'],
          keywords: {'chrome': 5, 'chromium': 1, 'html5': 2, 'app': 8, 'chrome web store': 5, 'store': 2},
          shortDesc: 'Package your web apps for installation in Google Chrome.',
          resources: {
            'home': '/chrome/apps/',
            'doc': '/chrome/apps/docs/',
            'group': 'http://groups.google.com/a/chromium.org/group/chromium-apps',
            'blog': 'http://blog.chromium.org'
          }
        },

        'chromewebstore': {
          title: 'Chrome Web Store (Labs)',
          groupsTitle: 'Chrome Web Store Groups',
          url: '/chrome/webstore/',
          productId: 'chromewebstore',
          labels: ['products', 'browser', 'labs'],
          keywords: {'chrome': 5, 'chromium': 1, 'app': 5, 'extension': 5, 'chrome web store': 10, 'store': 8},
          shortDesc: 'Publish your web apps where Google Chrome users can find them.',
          resources: {
            'home': '/chrome/webstore/',
            'doc': '/chrome/webstore/docs/',
            'group': 'http://groups.google.com/a/chromium.org/group/chromium-apps',
            'blog': 'http://blog.chromium.org'
          }
        },

       'chromedevtools': {
          title: 'Chrome Developer Tools',
          groupsTitle: 'Chromium Groups',
          url: '/chrome/devtools/',
          productId: 'chromedevtools',
          labels: ['products', 'browser'],
          keywords: {'chrome': 5, 'chromium': 1, 'html5': 2, 'firebug': 5, 'developer tools': 10, 'web inspector': 5},
          shortDesc: 'Design, debug and optimize your web pages using integrated Chrome Developer Tools.',
          resources: {
            'home': '/chrome/devtools/',
            'doc': '/chrome/devtools/docs/overview.html',
            'group': 'http://groups.google.com/a/chromium.org/group/chromium-discuss',
            'blog': 'http://blog.chromium.org'
          }
        },

        'feedburner': {
          title: 'Feedburner APIs (Labs)',
          groupsTitle: 'FeedBurner Groups',
          url: '/apis/feedburner/',
          productId: 'feedburner',
          labels: ['products', 'labs'],
          keywords: {'feed': 10},
          shortDesc: 'Interact with FeedBurner\'s feed management and awareness-generating capabilities.',
          resources: {
            'home': '/apis/feedburner/',
            'doc': '/apis/feedburner/developers_guide.html',
            'group': 'http://forums.feedburner.com',
            'blog': 'http://blogs.feedburner.com'
          }
        },

        'accounts': {
          title: 'Google Account Authentication',
          groupsTitle: 'Google Account Authentication Groups',
          url: '/apis/accounts/',
          productId: 'accounts',
          labels: ['products'],
          keywords: {'apis': 1, 'feed': 1, 'entries': 1, 'gentries': 1},
          shortDesc: 'Get access into desktop or mobile applications.',
          resources: {
            'home': '/apis/accounts/index.html',
            'group': 'http://groups.google.com/group/Google-Accounts-API'
          }
        },

        'adsense': {
          title: 'Google AdSense API',
          groupsTitle: 'Google AdSense API Groups',
          url: '/apis/adsense/',
          productId: 'adsense',
          labels: ['products', 'ads'],
          keywords: {'ads': 1, 'apis': 1},
          shortDesc: 'Generate revenue for you and your users by placing ads on your website.',
          resources: {
            'home': '/apis/adsense/',
            'doc': '/apis/adsense/developer/index.html',
            'group': 'http://groups.google.com/group/adsense-api',
            'blog': 'http://adsense.blogspot.com/'
          }
        },

        'adwords': {
          title: 'Google AdWords API',
          groupsTitle: 'Google AdWords API Groups',
          url: '/apis/adwords/',
          productId: 'adwords',
          labels: ['products', 'ads'],
          keywords: {'ads': 2, 'apis': 1},
          shortDesc: 'Automate and streamline your campaign management activities.',
          resources: {
            'home': '/apis/adwords/',
            'doc': '/apis/adwords/docs/developer/',
            'group': 'http://groups.google.com/group/adwords-api',
            'blog': 'http://adwordsapi.blogspot.com/'
          }
        },

        'ajaxfeeds': {
          title: 'Google Feed API',
          groupsTitle: 'Google Feed API Groups',
          url: '/apis/feed/',
          productId: 'ajaxfeeds',
          labels: ['products'],
          keywords: {'apis': 5, 'feed': 6},
          shortDesc: 'Easily mash up public feeds using JavaScript.',
          resources: {
            'home': '/apis/feed/',
            'doc': '/apis/feed/v1/iindex.html',
            'group': 'http://groups.google.com/group/Google-AJAX-Search-API'
          }
        },

        'ajaxlanguage': {
          title: 'Google Language API',
          groupsTitle: 'Google Language API Groups',
          url: '/apis/language/',
          productId: 'ajaxlanguage',
          labels: ['products'],
          keywords: {'apis': 5, 'language': 10},
          shortDesc: 'Easily translate and detect multiple languages using JavaScript.',
          resources: {
            'home': '/apis/language/',
            'doc': '/apis/language/',
            'group': 'http://groups.google.com/group/Google-AJAX-Search-API'
          }
        },

        'libraries': {
          title: 'Google Libraries API',
          groupsTitle: 'Google AJAX APIs Groups',
          url: '/apis/libraries/',
          productId: 'libraries',
          labels: ['products'],
          keywords: {'apis': 5, 'libraries': 6, 'chrome frame': 4, 'dojo': 4, 'ext core': 4, 'jquery': 4, 'jqueryui': 4, 'mootools': 4, 'prototype': 4, 'scriptaculous': 4, 'SWFObject': 4, 'yahoo user interface library': 4, 'YUI': 4, 'webfont': 4},
          shortDesc: 'Load open source JavaScript libraries.',
          resources: {
            'home': '/apis/libraries/',
            'doc': '/apis/libraries/documentation/',
            'group': 'http://groups.google.com/group/Google-AJAX-Search-API',
            'blog': 'http://googlecode.blogspot.com/'
          }
        },

        'analytics': {
          title: 'Google Analytics',
          groupsTitle: 'Google Analytics Groups',
          url: '/apis/analytics/',
          productId: 'analytics',
          labels: ['products', 'ads'],
          keywords: {'tools': 1, 'apis': 1, 'data apis': 1},
          shortDesc: 'Track your site traffic, and write your own client applications that use Analytics data in the form of Google Data API feeds.',
          resources: {
            'home': '/apis/analytics/',
            'doc': '/apis/analytics/docs/',
            'group': '/apis/analytics/groups.html',
            'blog': 'http://analytics.blogspot.com/'
          }
        },

        'appengine': {
          title: 'Google App Engine',
          groupsTitle: 'Google App Engine Groups',
          url: '/appengine/',
          productId: 'appengine',
          labels: ['products'],
          keywords: {'apis': 5, 'tools': 1, 'java':8, 'eclipse':1, 'app':8, 'app engine':10, 'plugin':1},
          shortDesc: 'Run your web applications on Google\'s infrastructure.',
          resources: {
            'home': '/appengine/',
            'doc': '/appengine/docs/',
            'group': '/appengine/groups.html'
          }
        },

        'appsscript': {
          title: 'Google Apps Script',
          url: '/googleapps/appsscript/',
          productId: 'appsscript',
          labels: ['products'],
          keywords: {'google apps': 1, 'apps script': 10, 'scripts': 10, 'enterprise': 1, 'javascript': 1, 'business': 1, 'automation': 1, 'automate': 1},
          shortDesc: 'Automate tasks across Google Products.',
          resources: {
            'home': '/googleapps/appsscript/',
            'blog': 'http://googleappsscript.blogspot.com/',
            'doc': '/googleapps/appsscript/guide.html',
            'group': 'http://www.google.com/support/forum/p/apps-script/'
          }
        },

        'storage': {
          title: 'Google Storage for Developers (Labs)',
          url: '/apis/storage/',
          productId: 'storage',
          labels: ['products', 'labs'],
          keywords: {'storage': 10, 'google storage': 10, 'apis': 1, 'storage apis': 10},
          shortDesc: 'Store and share your data in the Google cloud.',
          resources: {
            'home': '/apis/storage/',
            'doc': '/apis/storage/docs/getting-started.html',
            'group': '/apis/storage/docs/getting-started.html#support'
          }
        },

        'predict': {
          title: 'Google Prediction API (Labs)',
          url: '/apis/predict/',
          productId: 'predict',
          labels: ['products', 'labs'],
          keywords: {'prediction': 10, 'machine learning': 10, 'predictive modelling': 10, 'data analysis': 5},
          shortDesc: 'Add predictions to your applications.',
          resources: {
            'home': '/apis/predict/',
            'doc': '/apis/predict/docs/getting-started.html',
            'group': '/apis/predict/docs/getting-started.html#support'
          }
        },

        'bigquery': {
          title: 'BigQuery (Labs)',
          url: '/apis/bigquery/',
          productId: 'bigquery',
          labels: ['products', 'labs'],
          keywords: {'data analysis': 10, 'data modelling': 10, 'structured data': 5},
          shortDesc: 'Interactively analyze large datasets.',
          resources: {
            'home': '/apis/bigquery/',
            'doc': '/apis/bigquery/docs/getting-started.html',
            'group': 'http://groups.google.com/group/bigquery-discuss'
          }
        },

        'googleapps': {
          title: 'Google Apps',
          url: '/googleapps/',
          productId: 'googleapps',
          labels: ['products'],
          keywords: {'google apps': 10, 'gadgets': 1, 'enterprise': 1, 'app engine': 1, 'business': 1, 'firewall': 1, 'sdc': 1},
          shortDesc: 'Extend Google Apps, integrate with other systems, or build new apps.',
          resources: {
            'home': '/googleapps/',
            'blog': 'http://googleappsdeveloper.blogspot.com/',
            'doc': '/googleapps/docs/',
            'group': '/googleapps/support/'
          }
        },

        'marketplace': {
          title: 'Google Apps Marketplace',
          url: '/googleapps/marketplace/',
          productId: 'marketplace',
          labels: ['products'],
          keywords: {'google apps': 9, 'marketplace': 10, 'enterprise': 1, 'business': 1, 'saas': 1, 'isv': 1},
          shortDesc: 'Sell integrated applications to millions of Google Apps users.',
          resources: {
            'home': '/googleapps/marketplace/',
            'blog': 'http://googleappsdeveloper.blogspot.com/',
            'doc': '/googleapps/marketplace/',
            'group': '/googleapps/support/'
          }
        },

        'gmail': {
          title: 'Gmail APIs and Tools (Labs)',
          url: '/apis/gmail/',
          productId: 'gmail',
          labels: ['products', 'labs'],
          keywords: {'gmail': 10, 'contextual': 10, 'gadgets': 1},
          shortDesc: 'Create gadgets for Gmail and interact with the inbox.',
          resources: {
            'home': '/apis/gmail/',
            'doc': '/apis/gmail/docs/'
          }
        },

        'base': {
          title: 'Google Base Data API (Labs)',
          groupsTitle: 'Google Base Data API Groups',
          url: '/apis/base/',
          productId: 'base',
          labels: ['products', 'labs'],
          keywords: {'apis': 1, 'feed': 1, 'entries': 2, 'gentries': 1, 'data apis': 2},
          shortDesc: 'Manage Google Base content programmatically.',
          resources: {
            'home': '/apis/base/',
            'doc': '/apis/base/starting-out.html',
            'group': 'http://groups.google.com/group/Google-Base-data-API',
            'blog': 'http://googlebase.blogspot.com'
          }
        },

        'books': {
          title: 'Google Book Search APIs (Labs)',
          groupsTitle: 'Google Book Search APIs Groups',
          url: '/apis/books/',
          productId: 'books',
          labels: ['products', 'search', 'labs'],
          keywords: {'ajax': 9, 'apis': 10, 'search': 1, 'feeds': 1, 'books': 1},
          shortDesc: 'Search the complete index of Book Search and integrate with its social features.',
          resources: {
            'home': '/apis/books/',
            'doc': '/apis/books/docs/getting-started.html',
            'group': 'http://groups.google.com/group/booksearch-apis-main',
            'blog': 'http://booksearch.blogspot.com'
          }
        },

        'calendar': {
          title: 'Google Calendar APIs and Tools',
          groupsTitle: 'Google Calendar APIs and Tools Groups',
          url: '/apis/calendar/',
          productId: 'calendar',
          labels: ['products', 'social'],
          keywords: {'apis': 1, 'feed': 5, 'entries': 2, 'gadgets': 3, 'gentries': 1, 'data apis': 3, 'tools': 1},
          shortDesc: 'Create and manage events, calendars, and gadgets for Google Calendar.',
          resources: {
            'home': '/apis/calendar/',
            'doc': '/apis/calendar/developers_guide_protocol.html',
            'group': 'http://groups.google.com/group/google-calendar-help-dataapi',
            'blog': 'http://googledataapis.blogspot.com/'
          }
        },

        'checkout': {
          title: 'Google Checkout',
          groupsTitle: 'Google Checkout API Groups',
          url: '/apis/checkout/',
          productId: 'checkout',
          labels: ['products'],
          keywords: {'apis': 5, 'sell': 5, 'buy': 5, 'ecommerce': 5},
          shortDesc: 'Start selling on your website.',
          resources: {
            'home': '/apis/checkout/',
            'doc': '/apis/checkout/developer/index.html',
            'group': 'http://www.google.com/support/forum/p/checkout-merchants/',
            'blog': 'http://googlecheckoutapi.blogspot.com/'
          }
        },

        'closure': {
          title: 'Closure Tools (Labs)',
          url: '/closure/',
          productId: 'closure',
          labels: ['products','labs'],
          keywords: {'javascript': 1, 'template': 1, 'compiler': 1, 'minifier':1},
          shortDesc: 'Create powerful and efficient JavaScript.',
          resources: {
            'home': '/closure/'
          }
        },

        'cloudprint': {
          title: 'Google Cloud Print (Labs)',
          url: '/apis/cloudprint/',
          productId: 'cloudprint',
          labels: ['products', 'browser', 'labs'],
          keywords: {'chrome': 5, 'chromium': 1, 'html5': 2, 'app': 8},
          shortDesc: 'Enables any app (web, desktop, mobile) on any device to print to any printer.',
          resources: {
            'home': '/apis/cloudprint/',
            'doc': '/apis/cloudprint/docs/overview.html'
          }
        },

        'codesearch': {
          title: 'Google Code Search Data API (Labs)',
          groupsTitle: 'Google Code Search Data API Groups',
          url: '/apis/codesearch/',
          productId: 'codesearch',
          labels: ['products', 'search', 'labs'],
          keywords: {'apis': 1, 'feed': 1, 'entries': 1, 'gentries': 1, 'search': 1},
          shortDesc: 'Enable your apps to view data from Code Search.',
          resources: {
            'home': '/apis/codesearch/',
            'doc': '/apis/codesearch/gdata.html',
            'group': 'http://groups.google.com/group/Google-Code-Search',
            'blog': 'http://googledataapis.blogspot.com/'
          }
        },

        'commercesearch': {
          title: 'Google Commerce Search',
          url: '/apis/commercesearch/',
          productId: 'commercesearch',
          labels: ['products'],
          keywords: {'commercesearch': 10, 'commerce search': 10, 'enterprise': 1, 'gcs': 1, 'product': 1},
          shortDesc: 'Commerce Search helps shoppers find the right product on your retail site',
          resources: {
            'home': '/apis/commercesearch/',
            'blog': 'http://googlemerchantblog.blogspot.com/',
            'doc': '/apis/commercesearch/docs/overview.html'
          }
        },

        'customsearch': {
          title: 'Google Custom Search API',
          groupsTitle: 'Google Custom Search API Groups',
          url: '/apis/customsearch/',
          productId: 'customsearch',
          labels: ['products', 'ads', 'search'],
          keywords: {'apis': 1, 'ads': 1, 'custom': 1, 'search': 3, 'cse': 1},
          shortDesc: 'Create a custom search engine for your website or a collection of websites',
          resources: {
            'home': '/apis/customsearch/',
            'doc': '/apis/customsearch/docs/start.html',
            'group': 'http://groups.google.com/group/google-custom-search',
            'blog': 'http://googlecustomsearch.blogspot.com/'
          }
        },

        'contacts': {
          title: 'Google Contacts APIs',
          groupsTitle: 'Google Contacts APIs Groups',
          url: '/apis/contacts/',
          productId: 'contacts',
          labels: ['products', 'social'],
          keywords: {'apis': 1, 'feed': 1, 'entries': 2, 'gentries': 1, 'contacts': 1, 'data apis': 4},
          shortDesc: 'Allow your apps to view and update user contacts.',
          resources: {
            'home': '/apis/contacts/',
            'doc': '/apis/contacts/developers_guide_protocol.html',
            'group': 'http://groups.google.com/group/google-contacts-api',
            'blog': 'http://googledataapis.blogspot.com'
          }
        },

        'desktop': {
          title: 'Google Desktop APIs (Labs)',
          searchTabTitle: 'Google Desktop APIs',
          groupsTitle: 'Google Desktop APIs Groups',
          url: '/apis/desktop/',
          productId: 'desktop',
          labels: ['products', 'search', 'labs'],
          keywords: {'gadgets': 1, 'search': 1},
          shortDesc: 'Create gadgets and indexing plug-ins for Google Desktop.',
          resources: {
            'home': '/apis/desktop/',
            'doc': '/apis/desktop/docs/',
            'group': 'http://groups.google.com/group/Google-Desktop-Developer',
            'blog': 'http://googledesktopapis.blogspot.com/'
          }
        },

        'dfa': {
          title: "Google's DoubleClick for Advertisers",
          groupsTitle: "Google's DoubleClick for Advertisers API Forum",
          url: '/apis/dfa/',
          productId: 'dfa',
          labels: ['products', 'ads'],
          keywords: {'ads': 2, 'apis': 1},
          shortDesc: "Build applications to manage your DFA account.",
          resources: {
            'home': '/apis/dfa/',
            'doc': '/apis/dfa/docs/overview.html',
            'group': 'http://groups.google.com/group/google-doubleclick-for-advertisers-api/',
            'blog': 'http://doubleclickpublishersapi.blogspot.com/'
          }
        },

        'dfp': {
          title: "Google's DoubleClick for Publishers (Labs)",
          groupsTitle: "Google's DoubleClick for Publishers API Forum",
          url: '/apis/dfp/',
          productId: 'dfp',
          labels: ['products', 'ads', 'labs'],
          keywords: {'ads': 2, 'apis': 1},
          shortDesc: "Build applications that interact directly with Google's next-generation display advertising platform.",
          resources: {
            'home': '/apis/dfp/',
            'doc': '/apis/dfp/docs/start.html',
            'group': 'http://groups.google.com/group/google-doubleclick-for-publishers-api/',
            'blog': 'http://doubleclickpublishersapi.blogspot.com/'
          }
        },

        'documents': {
          title: 'Google Documents List Data API',
          groupsTitle: 'Google Documents List Data API Groups',
          url: '/apis/documents/',
          productId: 'documents',
          labels: ['products'],
          keywords: {'apis': 1, 'feed': 1, 'entries': 2, 'gentries': 1, 'data apis': 3},
          shortDesc: 'Enable your apps to view and update your list of Google Documents.',
          resources: {
            'home': '/apis/documents/',
            'doc': '/apis/documents/developers_guide_protocol.html',
            'group': 'http://groups.google.com/group/google-documents-list-api',
            'blog': 'http://googledataapis.blogspot.com/'
          }
        },

        'gtt': {
          title: 'Google Translator Toolkit Data API (Labs)',
          groupsTitle: 'Google Translator Toolkit Data API Help Forum',
          url: '/apis/gtt/',
          productId: 'gtt',
          labels: ['products', 'labs'],
          keywords: {'apis': 1, 'feed': 1, 'entries': 2, 'data apis': 3, 'toolkit': 5, 'translate': 8, 'translator toolkit': 10},
          shortDesc: 'Build applications that can access and update translation-related data.',
          resources: {
            'home': '/apis/gtt/',
            'doc': '/apis/gtt/docs/',
            'group': 'http://www.google.com/support/forum/p/translator-toolkit-api'
          }
        },

        'ima': {
          title: 'Google Interactive Media Ads (Labs)',
          url: '/apis/ima/',
          productId: 'ima',
          labels: ['products', 'ads', 'labs'],
          keywords: {'apis': 1, 'DoubleClick': 10, 'interactive media ads': 10, 'ima': 10, 'ads': 1, 'video': 1, 'flash': 1, 'silverlight': 1},
          shortDesc: 'Google Interactive Media Ads enable publishers to request and display ads into video, audio and game content.',
          resources: {
            'home': '/apis/ima/',
            'doc': '/apis/ima/docs/'
          }
        },

        'earth': {
          title: 'Google Earth API',
          groupsTitle: 'Google Earth API Groups',
          url: '/apis/earth/',
          productId: 'earth',
          labels: ['products', 'geo'],
          keywords: {'apis': 4, 'developer': 1,'developer day': 1, 'geo': 6, 'maps': 6, 'kml': 6},
          shortDesc: 'Embed Google Earth into your web page.',
          resources: {
            'home': '/apis/earth/',
            'doc': '/apis/earth/documentation/',
            'group': 'http://groups.google.com/group/kml-support/topics',
            'blog': 'http://googlegeodevelopers.blogspot.com/'
          }
        },

        'eclipse': {
          title: 'Google Plugin for Eclipse',
          url: '/eclipse/',
          productId: 'eclipse',
          labels: ['products'],
          keywords: {'java': 3, 'gwt': 1, 'app engine': 1, 'plug-in': 10},
          shortDesc: 'Simplifies development of GWT and App Engine projects in the Eclipse IDE.',
          resources: {
            'home': '/eclipse/',
            'doc': '/eclipse/docs/users_guide.html'
          }
        },

        'finance': {
          title: 'Google Finance Data API (Labs)',
          url: '/apis/finance/',
          productId: 'finance',
          labels: ['products', 'labs'],
          keywords: {'apis': 4, 'feeds': 1,'data apis': 1},
          shortDesc: 'View and update Finance content in the form of Google Data API feeds.',
          resources: {
            'home': '/apis/finance/',
            'doc': '/apis/finance/developers_guide_java.html'
          }
        },

        'flashmaps': {
          title: 'Google Maps API For Flash',
          url: '/apis/maps/documentation/flash/',
          productId: 'flashmaps',
          labels: ['products', 'geo'],
          keywords: {'ajax': 7, 'apis': 4, 'actionscript': 1, 'geo': 6, 'maps': 6},
          shortDesc: 'Integrate Google Maps in Flash applications.',
          resources: {
            'home': '/apis/maps/documentation/flash/index.html',
            'doc': '/apis/maps/documentation/flash/intro.html',
            'group': 'http://groups.google.com/group/google-maps-api-for-flash',
            'blog': 'http://googlegeodevelopers.blogspot.com/'
          }
        },

        'friendconnect': {
          title: 'Google Friend Connect APIs (Labs)',
          url: '/apis/friendconnect/',
          productId: 'friendconnect',
          labels: ['products', 'social', 'labs'],
          keywords: {'apis': 5, 'gadgets': 5, 'social': 10, 'friend': 10},
          shortDesc: 'JS and REST/RPC API\'s to Google Friend Connect',
          resources: {
            'home': '/apis/friendconnect/',
            'doc': '/apis/friendconnect/getting_started.html',
            'group': 'http://groups.google.com/group/google-friend-connect-developers/',
            'blog': 'http://googlesocialweb.blogspot.com/'
          }
        },

        'fusion': {
          title: 'Google Fusion Tables API (Labs)',
          url: '/apis/fusiontables/',
          productId: 'fusion',
          labels: ['products', 'labs'],
          keywords: {'tables': 1},
          shortDesc: 'Manage Google Fusion Tables content programmatically.',
          resources: {
            'home': '/apis/fusiontables/',
            'doc': '/apis/fusiontables/docs/developers_guide.html',
            'group': 'http://groups.google.com/group/fusion-tables-users-group'
          }
        },

        'gadgets': {
          title: 'Gadgets API',
          groupsTitle: 'Gadgets API Groups',
          url: '/apis/gadgets/',
          productId: 'gadgets',
          labels: ['products', 'social'],
          keywords: {'finance': 1, 'apis': 8, 'gadgets': 6},
          shortDesc: 'Build mini-apps that run on multiple sites including iGoogle, Google Desktop, or any webpage.',
          resources: {
            'home': '/apis/gadgets/',
            'doc': '/apis/gadgets/docs/dev_guide.html',
            'group': 'http://groups.google.com/group/Google-Gadgets-API',
            'blog': 'http://googlegadgetsapi.blogspot.com'
          }
        },

        'googletv': {
          title: 'Google TV Optimization Guides',
          url: '/tv/',
          productId: 'googletv',
          labels: ['products', 'browser'],
          keywords: {'googletv': 10, 'google tv': 10, 'tv': 10},
          shortDesc: 'Optimization Guides for Google TV',
          resources: {
            'home': '/tv/',
            'doc': '/tv/web/docs/design_for_tv.html',
            'blog': 'http://googletv.blogspot.com',
            'group': '/tv/web/forum/'
          }
        },

        'health': {
          title: 'Google Health API',
          groupsTitle: 'Google Health Developers Groups',
          url: '/apis/health/',
          productId: 'health',
          labels: ['products'],
          keywords: {'data apis': 3, 'feed': 1, 'health': 1, 'java': 1},
          shortDesc: 'Manage your personal health information with Google.',
          resources: {
            'home': '/apis/health/',
            'doc': '/apis/health/developers_guide_protocol.html',
            'group': 'http://groups.google.com/group/googlehealthdevelopers/'
          }
        },

        'igoogle': {
          title: 'iGoogle Developer Home (Labs)',
          groupsTitle: 'iGoogle Developers Groups',
          url: '/apis/igoogle/',
          productId: 'igoogle',
          labels: ['products', 'social', 'labs'],
          keywords: {'ads': 3, 'apis': 1, 'gadgets': 1, 'social': 1},
          shortDesc: 'Build and test your gadget in the new sandbox for iGoogle.',
          resources: {
            'home': '/apis/igoogle/',
            'doc': '/apis/igoogle/docs/igoogledevguide.html',
            'group': 'http://groups.google.com/group/Google-Gadgets-API/',
            'blog': 'http://googlegadgetsapi.blogspot.com/'
          }
        },

       'javadevtools': {
          title: 'Google Java Developer Tools',
          url: '/javadevtools',
          productId: 'javadevtools',
          labels: ['products'],
          keywords: {'Java': 10, 'WindowBuilder':10, 'WindowTester':10, 'CodePro': 10, 'GUI Building': 7, 'testing': 7, 'eclipse': 7, 'GWT Designer': 10, 'SWT Designer': 10, 'Swing Designer': 10, 'Instantiations': 10, 'GWT': 5, 'Google Web Toolkit': 5, 'Java Developer Tools': 10},
          shortDesc: 'Using the Eclipse IDE, quickly build and test Java GUIs and employ automated code quality and security testing for any Java code.',
          resources: {
            'home': '/javadevtools',
            'group': 'http://groups.google.com/group/google-developer-tools-notify'
          }
        },
 

        'themes': {
          title: 'iGoogle Themes API (Labs)',
          url: '/apis/themes/',
          productId: 'themes',
          labels: ['products', 'labs'],
          keywords: {'apis': 1},
          shortDesc: 'Design a dynamic theme for the iGoogle homepage.',
          resources: {
            'home': '/apis/themes/',
            'doc': '/apis/themes/docs/dev_guide.html'
          }
        },

        'kml': {
          title: 'KML',
          groupsTitle: 'KML Groups',
          url: '/apis/kml/',
          productId: 'kml',
          labels: ['products', 'geo'],
          keywords: {'apis': 1, 'geo': 4, 'maps': 1},
          shortDesc: 'Create and share content with Google Earth, Maps, and Maps for mobile.',
          resources: {
            'home': '/apis/kml/',
            'doc': '/apis/kml/documentation/',
            'group': 'http://groups.google.com/group/kml-support',
            'blog': 'http://googlegeodevelopers.blogspot.com/'
          }
        },

        'latitude': {
          title: 'Google Latitude API (Labs)',
          groupsTitle: 'Google Latitude API Group',
          url: '/apis/latitude/',
          productId: 'latitude',
          labels: ['products', 'geo', 'labs'],
          keywords: {'apis': 1, 'geo': 4, 'maps': 1, 'mobile': 3, 'location': 10},
          shortDesc: 'Build applications that read and update user locations and location histories.',
          resources: {
            'home': '/apis/latitude/',
            'doc': '/apis/latitude/overview.html',
            'group': 'https://groups.google.com/group/google-latitude-api'
          }
        },

        'moderator': {
          title: 'Google Moderator API (Labs)',
          groupsTitle: 'Google Moderator API Group',
          url: '/apis/moderator/',
          productId: 'moderator',
          labels: ['products', 'labs'],
          keywords: {'apis': 1, 'moderator': 1, 'question': 3, 'vote': 2},
          shortDesc: 'Collect ideas, questions, and recommendations from audiences of any size.',
          resources: {
            'home': '/apis/moderator/',
            'doc': '/apis/moderator/',
            'group': 'https://groups.google.com/group/google-moderator-api'
          }
        },

        'geocoding': {
          title: 'Google Geocoding API',
          groupsTitle: 'Google Maps API Group',
          url: '/apis/maps/documentation/geocoding/',
          productId: 'geocoding',
          labels: ['products', 'geo'],
          keywords: {'maps': 7, 'geo': 6, 'geocoding': 10, 'apis': 3},
          shortDesc: 'Convert addresses from geographic coordinates.',
          resources: {
            'home': '/apis/maps/documentation/geocoding/',
            'doc': '/apis/maps/documentation/geocoding/',
            'group': 'http://groups.google.com/group/Google-Maps-API',
            'blog': 'http://googlegeodevelopers.blogspot.com/'
          }
        },

        'directions': {
          title: 'Google Directions API',
          groupsTitle: 'Google Maps API Group',
          url: '/apis/maps/documentation/directions/',
          productId: 'directions',
          labels: ['products', 'geo'],
          keywords: {'maps': 7, 'geo': 6, 'directions': 10, 'apis': 3},
          shortDesc: 'Plot directions using a variety of transportation options.',
          resources: {
            'home': '/apis/maps/documentation/geocoding/',
            'doc': '/apis/maps/documentation/geocoding/',
            'group': 'http://groups.google.com/group/Google-Maps-API',
            'blog': 'http://googlegeodevelopers.blogspot.com/'
          }
        },

        'maps': {
          title: 'Google Javascript Maps API',
          groupsTitle: 'Google Maps Javascript API V3 Group',
          url: '/apis/maps/documentation/javascript/',
          productId: 'maps',
          labels: ['products', 'geo'],
          keywords: {'maps': 7, 'geo': 6, 'ajax': 3, 'apis': 3, 'mobile': 5},
          shortDesc: 'Integrate Google\'s interactive maps with data on your site.',
          resources: {
            'home': '/apis/maps/documentation/javascript/',
            'doc': '/apis/maps/documentation/javascript/basics.html',
            'group': 'http://groups.google.com/group/google-maps-js-api-v3',
            'blog': 'http://googlegeodevelopers.blogspot.com/'
          }
        },

        'projecthosting': {
          title: 'Google Project Hosting',
          groupsTitle: 'Hosting at Google Code Group',
          url: '/projecthosting/',
          productId: 'projecthosting',
          labels: ['products'],
          keywords: {'web hosting': 6, 'code hosting': 10, 'subversion': 6},
          shortDesc: 'Host your open source project on Google Code.',
          resources: {
            'home': '/projecthosting/',
            'doc': 'http://code.google.com/p/support/w/list',
            'group': 'http://groups.google.com/group/google-code-hosting'
          }
        },

        'opensocial': {
          title: 'OpenSocial',
          groupsTitle: 'OpenSocial Groups',
          url: '/apis/opensocial/',
          productId: 'opensocial',
          labels: ['products', 'social'],
          keywords: {'social': 10, 'open source': 2, 'apis': 8},
          shortDesc: 'Build social applications that work across many websites.',
          resources: {
            'home': '/apis/opensocial/',
            'doc': '/apis/opensocial/docs/index.html',
            'group': 'http://groups.google.com/group/opensocial-api/',
            'blog': 'http://opensocialapis.blogspot.com/'
          }
        },

        'orkut': {
          title: 'Orkut Developer Home',
          searchTabTitle: 'Orkut',
          groupsTitle: 'Orkut Groups',
          url: '/apis/orkut/',
          productId: 'orkut',
          labels: ['products', 'social'],
          keywords: {'social': 8},
          shortDesc: 'Create social applications for the millions of global Orkut users.',
          resources: {
            'home': '/apis/orkut/'
          }
        },

        'safebrowsing': {
          title: 'Google Safe Browsing APIs (Labs)',
          groupsTitle: 'Google Safe Browsing APIs Groups',
          url: '/apis/safebrowsing/',
          productId: 'safebrowsing',
          labels: ['products', 'labs'],
          keywords: {'apis': 1, 'feed': 1, 'entries': 1, 'gentries': 1},
          shortDesc: 'Download lists of suspected phishing and malware URLs.',
          resources: {
            'home': '/apis/safebrowsing/',
            'doc': '/apis/safebrowsing/developers_guide.html',
            'group': 'http://groups.google.com/group/google-safe-browsing-api',
            'blog': 'http://googleonlinesecurity.blogspot.com/'
          }
        },

        'securedataconnector': {
          title: 'Google Secure Data Connector',
          groupsTitle: 'Google Apps API Discussion Groups',
          url: '/securedataconnector/',
          productId: 'securedataconnector',
          labels: ['products'],
          keywords: {'data apis': 3, 'sdc': 10, 'gadgets': 1, 'firewall': 10, 'enterprise': 1, 'app engine': 1, 'network': 1, 'google apps': 2},
          shortDesc: 'Connect data from behind the firewall to Google Apps.',
          resources: {
            'home': '/securedataconnector/',
            'doc': '/securedataconnector/docs/',
            'group': 'http://www.google.com/support/forum/p/apps-apis/'
          }
        },

        'sidewiki': {
          title: 'Google Sidewiki API (Labs)',
          groupsTitle: 'Google Sidewiki API Groups',
          url: '/apis/sidewiki/',
          productId: 'sidewiki',
          labels: ['products', 'labs', 'social'],
          keywords: {'toolbar': 1, 'gdata': 1},
          shortDesc: 'Enable your apps to view data from Google Sidewiki.',
          resources: {
            'home': '/apis/sidewiki/',
            'doc': '/apis/sidewiki/docs/2.0/developers_guide.html',
            'group': 'http://groups.google.com/group/google-sidewiki-api'
          }
        },

        'sites': {
          title: 'Google Sites Data API (Labs)',
          groupsTitle: 'Google Sites Data API Groups',
          url: '/apis/sites/',
          productId: 'sites',
          labels: ['products', 'labs'],
          keywords: {'toolbar': 1, 'gdata': 1},
          shortDesc: 'Enable your apps to modify content within a Google Site.',
          resources: {
            'home': '/apis/sites/',
            'doc': '/apis/sites/docs/developers_guide.html',
            'group': 'http://groups.google.com/group/google-sites-data-api'
          }
        },

        'sketchup': {
          title: 'Google SketchUp Ruby API',
          groupsTitle: 'Google SketchUp Ruby API Groups',
          url: '/apis/sketchup/',
          productId: 'sketchup',
          labels: ['products', 'geo'],
          keywords: {'apis': 1, 'geo': 3},
          shortDesc: 'Extend Google SketchUp with Ruby.',
          resources: {
            'home': '/apis/sketchup/',
            'doc': '/apis/sketchup/docs/gsrubyapi_examples.html',
            'group': 'http://groups.google.com/group/sketchupruby/topics',
            'blog': 'http://sketchupapi.blogspot.com/'
          }
        },

        'socialgraph': {
          title: 'Social Graph API (Labs)',
          groupsTitle: 'Social Graph API Groups',
          url: '/apis/socialgraph/',
          productId: 'socialgraph',
          labels: ['products', 'social', 'labs'],
          keywords: {'social': 9},
          shortDesc: 'Enable users to quickly add their public social connections to your site.',
          resources: {
            'home': '/apis/socialgraph/',
            'doc': '/apis/socialgraph/docs/',
            'group': 'http://groups.google.com/group/social-graph-api'
          }
        },

        'spreadsheets': {
          title: 'Google Spreadsheets Data API (Labs)',
          groupsTitle: 'Google Spreadsheets Data API Groups',
          url: '/apis/spreadsheets/',
          productId: 'spreadsheets',
          labels: ['products', 'labs'],
          keywords: {'apis': 1, 'feed': 1, 'entries': 2, 'gentries': 1, 'data apis': 4},
          shortDesc: 'Enable your apps to view and update Google Spreadsheets content.',
          resources: {
            'home': '/apis/spreadsheets/',
            'doc': '/apis/spreadsheets/developers_guide_protocol.html',
            'group': 'http://groups.google.com/group/Google-Docs-Data-APIs',
            'blog': 'http://googledataapis.blogspot.com/'
          }
        },

        'staticmaps': {
          title: 'Google Static Maps API',
          url: '/apis/maps/documentation/staticmaps/',
          productId: 'staticmaps',
          labels: ['products', 'geo'],
          keywords: {'apis': 1, 'geo': 6, 'maps': 2},
          shortDesc: 'Embed a Google Maps image on your webpage without requiring JavaScript or any dynamic page loading.',
          resources: {
            'home': '/apis/maps/documentation/staticmaps/',
            'doc': '/apis/maps/documentation/staticmaps/',
            'group': 'http://groups.google.com/group/Google-Maps-API',
            'blog': 'http://googlegeodevelopers.blogspot.com/'
          }
        },

        'talk': {
          title: 'Google Talk for Developers (Labs)',
          groupsTitle: 'Google Talk XMPP Groups',
          url: '/apis/talk/',
          productId: 'talk',
          labels: ['products', 'social', 'labs'],
          keywords: {'apis': 1},
          shortDesc: 'Connect your client or network to the Google Talk network, add chatback, or customize the Google Talk gadget.',
          resources: {
            'home': '/apis/talk/',
            'doc': '/apis/talk/talk_developers_home.html',
            'group': 'http://groups.google.com/group/google-talk-open'
          }
        },

        'transit': {
          title: 'Google Transit Feed Specification',
          groupsTitle: 'Google Transit Feed Groups',
          url: '/transit/spec/transit_feed_specification.html',
          productId: 'transit',
          labels: ['products', 'geo'],
          keywords: {'feed': 1, 'geo': 1, 'maps': 1},
          shortDesc: 'Provide public transit route and schedule information for Google Maps and more.',
          resources: {
            'home': '/transit/spec/transit_feed_specification.html',
            'doc': '/transit/spec/transit_feed_specification.html',
            'group': 'http://groups.google.com/group/googletransit/'
          }
        },

        'webtoolkit': {
          title: 'Google Web Toolkit',
          groupsTitle: 'Google Web Toolkit Groups',
          url: '/webtoolkit/',
          productId: 'webtoolkit',
          labels: ['products', 'browser'],
          keywords: {'ajax': 6, 'java': 1, 'tools': 6, 'eclipse': 1, 'gwt':10},
          shortDesc: 'Build AJAX apps in the Java language.',
          resources: {
            'home': '/webtoolkit/',
            'doc': '/webtoolkit/documentation/',
            'group': 'http://groups.google.com/group/Google-Web-Toolkit',
            'blog': 'http://googlewebtoolkit.blogspot.com/'
          }
        },

        'picasaweb': {
          title: 'Picasa Web Albums Data API',
          groupsTitle: 'Picasa Web Albums Data API Groups',
          url: '/apis/picasaweb/',
          productId: 'picasaweb',
          labels: ['products', 'social'],
          keywords: {'feed': 1, 'entries': 1, 'gentries': 1, 'data apis': 3},
          shortDesc: 'Include Picasa Web Albums in your application or website.',
          resources: {
            'home': '/apis/picasaweb/',
            'doc': '/apis/picasaweb/gdata.html',
            'group': 'http://groups.google.com/group/Google-Picasa-Data-API',
            'blog': 'http://googledataapis.blogspot.com/'
          }
        },

        'powermeter': {
          title: 'Google PowerMeter API (Labs)',
          url: '/apis/powermeter/',
          productId: 'powermeter',
          labels: ['products', 'labs'],
          keywords: {'apis': 1, 'feed': 1, 'entries': 2, 'gentries': 1, 'data apis': 2},
          shortDesc: 'Integrate with Google PowerMeter.',
          resources: {
            'home': '/apis/powermeter/',
            'doc': '/apis/powermeter/docs/getting_started.html'
          }
        },

        'pubsubhubbub': {
          title: 'PubSubHubbub (Labs)',
          url: '/apis/pubsubhubbub/',
          productId: 'pubsubhubbub',
          labels: ['products', 'social', 'labs'],
          keywords: {'feed': 4, 'atom': 8, 'rss': 8, 'real time': 10},
          shortDesc: 'Turn your Atom and RSS feeds into real-time streams',
          resources: {
            'home': '/apis/pubsubhubbub/',
            'doc': 'http://code.google.com/p/pubsubhubbub/'
          }
        },

        'recaptcha': {
          title: 'reCAPTCHA (Labs)',
          url: '/apis/recaptcha/',
          productId: 'recaptcha',
          labels: ['products', 'labs'],
          keywords: {'apis': 1, 'ajax': 1, 'captcha': 5, 'recaptcha': 5,
            'mailhide': 5, 'security': 3},
          shortDesc: 'An anti-bot service that helps digitize books.',
          resources: {
            'home': '/apis/recaptcha/',
            'doc': '/apis/recaptcha/intro.html'
          }
        },

        'v8': {
          title: 'V8',
          url: '/apis/v8/',
          productId: 'v8',
          labels: ['products', 'browser'],
          keywords: {'apis': 1, 'browser': 1, 'chrome': 1, 'chromium': 1, 'tools': 1},
          shortDesc: 'Google\'s high performance, open source, JavaScript engine.',
          resources: {
            'home': '/apis/v8/',
            'doc': '/apis/v8/intro.html'
          }
        },

        'wave': {
          title: 'Google Wave API (Labs)',
          groupsTitle: 'Google Wave API Groups',
          url: '/apis/wave',
          productId: 'wave',
          labels: ['products', 'social', 'labs'],
          keywords: {'wave': 10, 'robots': 5, 'gadgets': 1, 'embed': 3, 'extensions': 1},
          shortDesc: 'Build extensions for Google Wave or embed Google Waves in your site.',
          resources: {
            'home': '/apis/wave/',
            'doc': '/apis/wave/guide.html',
            'group': 'http://groups.google.com/group/google-wave-api',
            'blog': 'http://googlewavedev.blogspot.com/'
          }
        },

        'webelements': {
          title: 'Google Web Elements',
          url: 'http://www.google.com/webelements/',
          productId: 'webelements',
          labels: ['products'],
          keywords: {'elements': 10, 'news': 1, 'calendar': 1, 'maps': 1, 'youtube': 1, 'spreadsheets': 1, 'presentations': 1, 'search': 1},
          shortDesc: 'Google Web Elements allow you to easily add your favorite Google products onto your own website.',
          resources: {
            'home': 'http://www.google.com/webelements/'
          }
        },

        'webmastertools': {
          title: 'Google Webmaster Tools Data API (Labs)',
          groupsTitle: 'Webmaster Tools Data API Groups',
          url: '/apis/webmastertools/',
          productId: 'webmastertools',
          labels: ['products', 'search', 'labs'],
          keywords: {'data apis': 1, 'search': 1, 'tools': 1},
          shortDesc: 'View and update site information and Sitemaps in the form of feeds.',
          resources: {
            'home': '/apis/webmastertools/',
            'doc': '/apis/webmastertools/docs/developers_guide.html',
            'group': 'http://groups.google.com/group/Google_Webmaster_Help',
            'blog': 'http://googlewebmastercentral.blogspot.com/'
          }
        },

        'youtube': {
          title: 'YouTube APIs',
          groupsTitle: 'YouTube Data API Groups',
          url: '/apis/youtube/',
          productId: 'youtube',
          labels: ['products', 'social'],
          keywords: {'feed': 4, 'entries': 2, 'gentries': 6},
          shortDesc: 'Integrate YouTube videos into your website or application.',
          resources: {
            'home': '/apis/youtube/',
            'doc': '/apis/youtube/developers_guide_protocol.html',
            'group': 'http://groups.google.com/group/youtube-api',
            'blog': 'http://apiblog.youtube.com/'
          }
        },

        'mobile': {
          title: 'Mobile Homepage',
          url: '/mobile/',
          productId: 'mobile',
          labels: ['products', 'mobile'],
          keywords: {'mobile': 10 },
          shortDesc: 'Bring the power of Google technology to your user\'s pocket: Google mobile developer technologies for geo, social, monetization, and more.',
          resources: {
            'home': '/mobile/'
          }
        },

        'afma': {
          title: 'AdSense for Mobile Applications (Labs)',
          groupsTitle: 'AFMA Developer Group',
          url: '/mobile/ads',
          productId: 'afma',
          labels: ['products', 'ads', 'mobile', 'labs'],
          keywords: {'ads': 10, 'mobile': 9},
          shortDesc: 'Generate revenue by placing AdSense and DoubleClick ads directly into your native Android- and iOS-based applications.',
          resources: {
            'home': '/mobile/ads',
            'doc': '/mobile/ads/docs',
            'group': 'http://groups.google.com/group/afma-developers'
          }
        },

        'admob': {
          title: 'AdMob',
          groupsTitle: 'AdMob Publisher Discuss',
          url: 'http://www.admob.com',
          productId: 'admob',
          labels: ['products', 'ads', 'mobile'],
          keywords: {'ads': 10, 'mobile': 10},
          shortDesc: 'Monetize your mobile properties by tapping into AdMob\'s network of advertisers.',
          resources: {
            'home': 'http://www.admob.com',
            'doc': 'http://www.admob.com/appdevs',
            'group': 'http://groups.google.com/group/admob-publisher-discuss',
            'blog': 'http://blog.admob.com/'
          }
        },

        'analyticsmobile': {
          title: 'Google Analytics for Mobile (Labs)',
          url: '/mobile/analytics',
          productId: 'analyticsmobile',
          labels: ['products', 'ads', 'mobile', 'labs'],
          keywords: {'tools': 1, 'apis': 1, 'data apis': 1, 'mobile': 7},
          shortDesc: 'Track user interaction with your application. View most popular screens, retention rates, and more.',
          resources: {
            'home': '/mobile/analytics',
            'doc': '/mobile/analytics/docs',
            'blog': 'http://analytics.blogspot.com/'
          }
        },

        'mapspremier': {
          title: 'Google Maps API Premier',
          url: '/apis/maps/documentation/premier/',
          productId: 'mapspremier',
          labels: ['products', 'geo'],
          keywords: {'maps': 10, 'premier': 10, 'enterprise': 10},
          shortDesc: 'Use the Google Maps APIs within your enterprise with more features, an SLA, and custom support.',
          resources: {
            'home': '/apis/maps/documentation/premier/',
            'doc': '/apis/maps/documentation/premier/guide.html',
            'group': 'http://groups.google.com/group/Google-Maps-API',
            'blog': 'http://googleenterprise.blogspot.com/'
          }
        },

        'blogsearch': {
          title: 'Blog Search API',
          url: '/apis/blogsearch/',
          productId: 'blogsearch',
          labels: ['products', 'search'],
          keywords: {'blog': 10, 'search': 5},
          shortDesc: 'Display Google Blog Search results on your website.',
          resources: {
            'home': '/apis/blogsearch/',
            'doc': '/apis/blogsearch/v1/index.html',
            'group': 'http://groups.google.com/group/Google-AJAX-Search-API'
          }
        },

        'imagesearch': {
          title: 'Image Search API',
          url: '/apis/imagesearch/',
          productId: 'imagesearch',
          labels: ['products', 'search'],
          keywords: {'image': 10, 'search': 5},
          shortDesc: 'Display Google Image Search results on your website.',
          resources: {
            'home': '/apis/imagesearch/',
            'doc': '/apis/imagesearch/v1/index.html',
            'group': 'http://groups.google.com/group/Google-AJAX-Search-API'
          }
        },

        'newssearch': {
          title: 'News Search API',
          url: '/apis/newssearch/',
          productId: 'newssearch',
          labels: ['products', 'search'],
          keywords: {'news': 10, 'search': 5},
          shortDesc: 'Display Google News Search results on your website.',
          resources: {
            'home': '/apis/newssearch/',
            'doc': '/apis/newssearch/v1/index.html',
            'group': 'http://groups.google.com/group/Google-AJAX-Search-API'
          }
        },

        'patentsearch': {
          title: 'Patent Search API',
          url: '/apis/patentsearch/',
          productId: 'patentsearch',
          labels: ['products', 'search'],
          keywords: {'patent': 10, 'search': 5},
          shortDesc: 'Display Google Patent Search results on your website.',
          resources: {
            'home': '/apis/patentsearch/',
            'doc': '/apis/patentsearch/v1/index.html',
            'group': 'http://groups.google.com/group/Google-AJAX-Search-API'
          }
        },

        'websearch': {
          title: 'Web Search API (Deprecated)',
          url: '/apis/websearch/',
          productId: 'websearch',
          labels: ['products', 'search'],
          keywords: {'web': 10, 'search': 5},
          shortDesc: 'Display Google Web Search results on your website.',
          resources: {
            'home': '/apis/websearch/',
            'doc': '/apis/websearch/v1/index.html',
            'group': 'http://groups.google.com/group/Google-AJAX-Search-API'
          }
        },

        'videosearch': {
          title: 'Video Search API',
          url: '/apis/videosearch/',
          productId: 'videosearch',
          labels: ['products', 'search'],
          keywords: {'video': 10, 'search': 5},
          shortDesc: 'Display Google Video Search results on your website.',
          resources: {
            'home': '/apis/videosearch/',
            'doc': '/apis/videosearch/v1/index.html',
            'group': 'http://groups.google.com/group/Google-AJAX-Search-API'
          }
        }

      }
    },

    /**
     * Data dictionary for programs
     * Entries in this dictionary will appear in search suggest and the
     * Site Directory page.
     * @type {object}
     */
    'programs': {

      /**
       * This dictionary is for programs.
       * This string should not be translated.
       * @type {string}
       */
      dictionaryType: 'programs',

      /**
       * The programs listed in this section should be included in
       * the Site Directory page
       * @type {boolean}
       */
      includeInSiteDirectory: true,

      /**
       * The programs listed in this section should be included in
       * the search suggest
       * @type {boolean}
       */
      includeInSearchSuggest: true,

      /**
       * Meta data used for the Site Directory page,
       * defined in var siteDirectoryMetaData above
       * @type {object}
       */
      siteDirectoryMetaData: siteDirectoryMetaData.programs,

      /**
       * List of program IDs in the order they should appear on the
       * Site Directory page
       * The keys in this list should not be translated.
       * @type {array}
       */
      keys: [
          'campfire',
          'codejam',
          'csearch',
          'developerday',
          'doctype',
          'edu',
          'events',
          'go',
          'googleio',
          'gtug',
          'hosting',
          'html5rocks',
          'opensource',
          'page-speed',
          'playground',
          'publicdns',
          'qualify',
          'soc',
          'speed',
          'webmaster',
          'webp'
      ],

      /**
       * Entries for programs
       *
       * Each entry is declared using one of the keys defined above.
       *
       * Each entry consists of the following:
       *
       *   title:
       *       Required; must be translated
       *       Title of the program
       *
       *   searchTabTitle:
       *       Optional; must be translated
       *       Title for its search results tab if it should be different from
       *       the title of the program. (e.g. 'Google Desktop Search APIs' vs
       *       'Google Desktop APIs')
       *
       *   groupsTitle:
       *       Optional; must be translated
       *       Title of discussion group if available
       *       This will be shown as a search result tab.
       *
       *   url:
       *       Required; must be localized
       *       URL of the program landing page
       *
       *   productId:
       *       Required; should not be translated
       *       Unique program ID, same as the key for this entry
       *
       *   labels:
       *       Required; should not be translated
       *       A product may include different labels from the English version
       *       of this file.
       *       List of internal(non-translated yet localized list) labels
       *
       *   keywords:
       *       Required; must be translated
       *       List of keywords for search suggest
       *       These take the form of {'keyword':n, ...}.
       *       keyword is what triggers the entry to be included in the
       *       search suggest list as a user types a query in the search box,
       *       and n is the weight of the keyword used for determining the
       *       rank of this entry within list of entries shown in the search
       *       suggest list. The higher the number, the higher the likelihood
       *       of showing this entry as the first one in the search suggest.
       *
       *   shortDesc:
       *       Required; must be translated
       *       Short description of the program shown in the Site Directory
       *       page
       *
       * @type {object}
       */
      entries: {

        'publicdns': {
          title: 'Public DNS',
          url: '/speed/public-dns/',
          productId: 'publicdns',
          labels: ['resources'],
          keywords: {'public dns': 10},
          shortDesc: 'Speed up your Internet experience with Google\'s free DNS resolution service.'
        },

        'opensource': {
          title: 'OpenSource',
          url: '/opensource/',
          productId: 'opensource',
          labels: ['resources', 'opensource'],
          keywords: {'open source': 10},
          shortDesc: 'Google\'s contribution back to the Open Source community.'
        },

        'soc': {
          title: 'Google Summer of Code',
          url: '/soc/',
          productId: 'soc',
          labels: ['resources', 'opensource', 'events'],
          keywords: {'open source': 5},
          shortDesc: 'Introduce students to open source development'
        },

        'codejam': {
          title: 'Google Code Jam',
          url: '/codejam/',
          productId: 'codejam',
          labels: ['resources', 'events'],
          keywords: {'competition': 6},
          shortDesc: 'Google Code Jam is a coding competition'
        },

        'playground': {
          title: 'Code Playground',
          url: '/apis/ajax/playground/',
          productId: 'playground',
          labels: ['resources', 'tools'],
          keywords: {'samples': 10, 'sample code': 10, 'run code': 1},
          shortDesc: 'Run, edit and debug sample code from lots of products'
        },

        'hosting': {
          title: 'Project Hosting on Google Code',
          url: '/hosting/',
          productId: 'hosting',
          labels: ['resources', 'opensource'],
          keywords: {'open source': 6},
          shortDesc: 'Host your open source project on Google Code.'
        },

        'edu': {
          title: 'Google Code University',
          groupsTitle: 'Google Code University Groups',
          url: '/edu/',
          productId: 'edu',
          labels: ['resources', 'education'],
          keywords: {'educators': 1},
          shortDesc: 'Materials Created Especially for CS educators.'
        },

        'doctype': {
          title: 'Google DocType',
          groupsTitle: 'Google DocType Groups',
          url: '/doctype/',
          productId: 'doctype',
          labels: ['resources', 'education'],
          keywords: {'educators': 1},
          shortDesc: 'An encyclopedia of the open web.'
        },

        'speed': {
          title: 'Let\'s make the web faster',
          groupsTitle: 'Make the web fast',
          url: '/speed/',
          productId: 'speed',
          labels: ['resources', 'tools'],
          keywords: {'speed': 8, 'performance': 9},
          shortDesc: 'An initiative to speed up the web.'
        },

        'page-speed': {
          title: 'Page Speed',
          groupsTitle: 'Page Speed Community',
          url: '/speed/page-speed/',
          productId: 'page-speed',
          labels: ['resources', 'tools'],
          keywords: {'speed': 8, 'performance': 9},
          shortDesc: 'Speed up your web pages with this performance diagnostic tool'
        },

        'webmaster': {
          title: 'Google Webmaster Central',
          url: 'http://www.google.com/webmasters/',
          productId: 'webmaster',
          labels: ['resources', 'tools'],
          keywords: {'crawling': 1, 'indexing': 1},
          shortDesc: 'Improve traffic with Google Webmaster Tools'
        },

        'csearch': {
          title: 'Google Code Search (Labs)',
          url: 'http://www.google.com/codesearch',
          productId: 'csearch',
          labels: ['resources', 'tools'],
          keywords: {'search': 1},
          shortDesc: 'Search public source code.'
        },

        'events': {
          title: 'Developer Events',
          url: '/events/',
          productId: 'events',
          labels: ['resources', 'events'],
          keywords: {'developer': 1, 'gdd':1, 'developer day':1 },
          shortDesc: 'Learn about upcoming developer events.'
        },

        'googleio': {
          title: 'Google I/O',
          url: '/events/io/',
          productId: 'googleio',
          labels: ['resources', 'events'],
          keywords: {'apis': 1, 'gentries': 1, 'google io': 10, 'events': 10,
              'io': 10},
          shortDesc: 'Google\'s largest developer gathering'
        },

        'gtug': {
          title: 'Google Technology User Groups',
          url: 'http://www.gtugs.org/',
          productId: 'gtug',
          labels: ['resources', 'events'],
          keywords: {'gtug': 10, 'events': 9, 'group': 1, 'technology': 1,
              'user': 1},
          shortDesc: 'GTUGs are user groups for people who are interested in Google\'s developer technology'
        },

        'developerday': {
          title: 'Developer Days',
          url: '/events/developerday/',
          productId: 'developerday',
          labels: ['resources', 'events'],
          keywords: {'developer': 1, 'developer days': 1, 'gdd': 10,
              'events': 2, 'google developer day': 10},
          shortDesc: 'Developer Days take place in various countries around the world. Join us to learn the latest on Google developer products from Googlers themselves.'
        },

        'qualify': {
          title: 'Developer Qualification',
          url: '/qualify/',
          productId: 'qualify',
          labels: ['resources'],
          keywords: {'qualify': 10, 'certification': 10, 'training': 10},
          shortDesc: 'Browse our directory to find an expert to help with your development needs. Or, become a Google Qualified Developer yourself.'
        },

        'campfire': {
          title: 'Google Campfire One',
          url: '/campfire/',
          productId: 'campfire',
          labels: ['resources', 'events'],
          keywords: {'developer': 1},
          shortDesc: 'Conversations with the developer community.'
        },

        'go': {
          title: 'Go Programming Language',
          url: 'http://www.golang.org',
          productId: 'go',
          labels: ['resources', 'opensource'],
          keywords: {'golang': 2, 'language':3, 'compiler':2, 'parallel':1, 'concurrent':1, 'concurrency':1},
          shortDesc: 'Expressive, concurrent, garbage-collected.'
        },

        'html5rocks': {
          title: 'HTML5 Rocks',
          url: 'http://www.html5rocks.com',
          productId: 'html5rocks',
          labels: ['resources', 'tools', 'education'],
          keywords: {'html5': 10, 'css3': 8, 'webapps': 8, 'samples': 5,
                     'sample code': 5, 'webgl': 4, 'chrome': 1, 'chromium': 1,
                     'webkit': 2, 'opensource': 1},
          shortDesc: 'A site dedicated to building the next generation web ' +
                     'applications using HTML5++. Contains tutorials, ' +
                     'demos, resources, and a JS playground.'
        },

        'webp': {
          title: 'WebP Image Format',
          url: '/speed/webp',
          productId: 'webp',
          labels: ['resources', 'tools'],
          keywords: {'image': 7, 'WebP': 10},
          shortDesc: 'A lossy image format based on the VP8 codec, which ' +
                     'aims to reduce image file size by an average of 40% ' +
                     'over JPEG.'
        }
      }
    },

    /**
     * Data dictionary for search suggest entries that should not be included
     * in the Site Directory page
     * @type {object}
     */
    'searchSuggest': {

      /**
       * This dictionary is for search suggest only.
       * This string should not be translated.
       * @type {string}
       */
      dictionaryType: 'searchSuggest',

      /**
       * The entries listed in this section should not be included in
       * the Site Directory page
       * @type {boolean}
       */
      includeInSiteDirectory: false,

      /**
       * The products listed in this section should be included in
       * the search suggest
       * @type {boolean}
       */
      includeInSearchSuggest: true,

      /**
       * List of keys for the entries in this section
       * The keys in this list should not be translated.
       * @type {array}
       */
      keys: [
        'support',
        'codeblog',
        'featuredprojects',
        'labs',
        'opensourceprojects',
        'protocolbuffers'
      ],

      /**
       * Entries for search suggest not included in products or programs
       * dictionaries
       *
       * Each entry is declared using one of the keys defined above.
       *
       * Each entry consists of the following:
       *
       *   title:
       *       Required; must be translated
       *       Title of the product
       *
       *   url:
       *       Required; must be localized
       *       URL of the product landing page
       *
       *   keywords:
       *       Required; must be translated
       *       List of keywords for search suggest
       *       These take the form of {'keyword':n, ...}.
       *       keyword is what triggers the entry to be included in the
       *       search suggest list as a user types a query in the search box,
       *       and n is the weight of the keyword used for determining the
       *       rank of this entry within list of entries shown in the search
       *       suggest list. The higher the number, the higher the likelihood
       *       of showing this entry as the first one in the search suggest.
       *
       * @type {object}
       */
      entries: {

        'adsenseforaudio': {
          title: 'Google AdSense for Audio API (Deprecated)',
          url: '/apis/adsenseforaudio/',
          keywords: {'ads': 1, 'apis': 1}
        },

        'notebook': {
          title: 'Google Notebook Data API (Deprecated)',
          url: '/apis/notebook/',
          keywords: {'apis': 1, 'feed': 1, 'entries': 1, 'gentries': 1, 'data apis': 3}
        },

        'gra': {
          title: 'Google Radio Automation API (Deprecated)',
          url: '/apis/gra/',
          keywords: {'java': 1, 'apis': 1,'radio': 10, 'automation': 3}
        },

        'support': {
          title: 'Knowledge Base',
          url: '/support/',
          keywords: {'faq': 1}
        },

        'codeblog': {
          title: 'Google Code Blog',
          url: 'http://google-code-updates.blogspot.com/',
          keywords: {'developer': 1}
        },

        'featuredprojects': {
          title: 'Featured Projects',
          url: 'http://google-code-featured.blogspot.com/',
          keywords: {'developer': 1}
        },

        'labs': {
          title: 'Google Code Labs',
          url: '/labs/',
          keywords: {'labs': 10, 'experimental': 1}
        },

        'opensourceprojects': {
          title: 'Open Source Projects',
          url: '/hosting/projects.html',
          keywords: {'open source': 1}
        },

        'protocolbuffers': {
          title: 'Protocol Buffers',
          groupsTitle: 'Protocol Buffers Groups',
          url: '/apis/protocolbuffers/',
          productId: 'protocolbuffers',
          keywords: {'serialization': 10, 'open source': 4, 'apis': 8, 'structured data': 10, 'data': 1}
        }
      }
    },

    /**
     * Data dictionary for default search result tabs that should not be
     * included in neither the search suggest nor the Site Directory page
     * @type {object}
     */
    'searchResultTabs': {

      /**
       * This dictionary is for search result tabs.
       * This string should not be translated.
       * @type {string}
       */
      dictionaryType: 'searchResultTabs',

      /**
       * The entries listed in this section should not be included in
       * the Site Directory page
       * @type {boolean}
       */
      includeInSiteDirectory: false,

      /**
       * The entries listed in this section should not be included in
       * the search suggest
       * @type {boolean}
       */
      includeInSearchSuggest: false,

      /**
       * List of keys for default search result tabs
       * The keys in this list should not be translated.
       * @type {array}
       */
      keys: [
        'google_code',
        'discussion',
        'project_hosting',
        'developer_videos'
      ],

      /**
       * Entries for default search result tabs
       *
       * Each entry is declared using one of the keys defined above.
       *
       * Each entry consists of the following:
       *
       *   title:
       *       Required; must be translated
       *       Title of the product
       *
       * @type {object}
       */
      entries: {

        'google_code': {
          title: 'Google Code Website'
        },

        'discussion': {
          title: 'Google Code Groups',
          groupsTitle: 'Google Code Groups'
        },

        'project_hosting': {
          title: 'Project Hosting'
        },

        'developer_videos': {
          title: 'Developer Videos'
        }
      }
    }
  };

  // Create a global scope var that will be used in case intl version is not
  // defined
  window['CODESITE_productDictionary_default'] = productDictionary;

  // Create another global scope var that is to be replaced by intl version
  // of productDictionary for intl pages
  window['CODESITE_productDictionary'] = productDictionary;

})();
