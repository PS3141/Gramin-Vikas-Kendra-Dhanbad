/* ================================================================
   TRANSLATIONS.JS — GVK Dhanbad NGO Bilingual Language System
   ================================================================
   HOW TO EDIT TRANSLATIONS:
   - Find the key you want to edit under the 'hi' (Hindi) or
     'en' (English) object below.
   - Change only the VALUE (the text after the colon).
   - Do NOT change the KEY names — they must match data-i18n
     attributes in index.html exactly.
   - Default language is Hindi (hi).
   ================================================================ */

'use strict';

/* ----------------------------------------------------------------
   TRANSLATION DATA OBJECT
   Structure: translations[languageCode][keyName] = 'text'
   ---------------------------------------------------------------- */
const translations = {

  /* ==============================================================
     HINDI (हिन्दी) — DEFAULT LANGUAGE
     ============================================================== */
  hi: {
    /* --- Navbar Links --- */
    'nav-home':         'होम',
    'nav-about':        'हमारे बारे में',
    'nav-activities':   'गतिविधियाँ',
    'nav-team':         'टीम',
    'nav-gallery':      'गैलरी',
    'nav-volunteer':    'स्वयंसेवक',
    'nav-contact':      'संपर्क',
    'nav-donate':       'दान करें',

    /* --- Language Switcher --- */
    'lang-btn-label':   'भाषा बदलें',

    /* --- Hero Section --- */
    'hero-badge':       'स्थापित 2008 · पंजीकृत एनजीओ',
    'hero-title':       'ग्रामीण विकास केंद्र, धनबाद',
    'hero-tagline':     'समुदायों को सशक्त बनाना, जीवन बदलना, भविष्य बनाना',
    'hero-description': 'हम एक पंजीकृत गैर-सरकारी संगठन हैं जो शिक्षा, स्वास्थ्य सेवा और सतत विकास कार्यक्रमों के माध्यम से वंचित समुदायों को ऊपर उठाने के लिए अथक प्रयास करते हैं। साथ मिलकर हम बदलाव ला सकते हैं।',
    'hero-btn-donate':  'अभी दान करें',
    'hero-btn-volunteer': 'स्वयंसेवक बनें',

    /* --- Hero Stats Labels --- */
    'stat-lives':       'लाभान्वित जीवन',
    'stat-projects':    'पूर्ण परियोजनाएँ',
    'stat-volunteers':  'स्वयंसेवक',
    'stat-districts':   'जिले',

    /* --- Scroll Indicator --- */
    'scroll-down':      'नीचे स्क्रॉल करें',

    /* --- About Section --- */
    'about-badge':      'हम कौन हैं',
    'about-subtitle':   'उन समुदायों में स्थायी परिवर्तन लाने के लिए समर्पित जिन्हें इसकी सबसे अधिक आवश्यकता है।',
    'about-text-1':     'ग्रामीण विकास केंद्र धनबाद, झारखंड में स्थित एक गैर-सरकारी संगठन (एनजीओ) है जो सामाजिक विकास और सामुदायिक कल्याण के लिए समर्पित है। वंचित और ग्रामीण समुदायों को ऊपर उठाने के दृष्टिकोण से स्थापित यह संगठन शिक्षा, सामाजिक जागरूकता, कौशल विकास और सामुदायिक सहायता सेवाओं के क्षेत्र में सक्रिय रूप से कार्य करता है।',
    'about-text-2':     'यह संगठन बच्चों, छात्रों, महिलाओं और समाज के आर्थिक रूप से कमजोर वर्गों की सहायता पर ध्यान केंद्रित करता है। ग्रामीण विकास केंद्र धनबाद सामूहिक भागीदारी, सामाजिक जिम्मेदारी और सतत विकास के माध्यम से आत्मनिर्भर और प्रगतिशील समाज बनाने में विश्वास रखता है।',

    /* --- About Tabs --- */
    'tab-mission':      'मिशन',
    'tab-vision':       'विज़न',
    'tab-objectives':   'उद्देश्य',

    'mission-heading':  'हमारा मिशन',
    'mission-text':     'संगठन का मिशन सभी नागरिकों को अच्छी शिक्षा, अच्छी स्वास्थ्य सेवाओं, कौशल और आजीविका के समान अवसर प्रदान करना है ताकि लोग आत्मनिर्भर बनें और शांति एवं सौहार्द के साथ जी सकें।',

    'vision-heading':   'हमारी विज़न',
    'vision-text':      'ग्रामीण विकास केंद्र धनबाद एक समतावादी समाज बनाना चाहता है जहाँ जाति, पंथ, रंग, धर्म आदि के आधार पर भूख, शोषण और असमानता न रहे।',

    'objectives-heading': 'हमारे उद्देश्य',
    'obj-1':  'ग्रामीण और पिछड़े क्षेत्रों में शैक्षिक सहायता सेवाओं को बढ़ावा देना',
    'obj-2':  'सामाजिक कल्याण और सामुदायिक विकास के लिए कार्य करना',
    'obj-3':  'शैक्षिक पहलों और जागरूकता कार्यक्रमों के माध्यम से बच्चों का समर्थन करना',
    'obj-4':  'युवाओं में कौशल विकास और आत्मनिर्भरता को प्रोत्साहित करना',
    'obj-5':  'आर्थिक रूप से कमजोर समुदायों के उत्थान में योगदान देना',
    'obj-6':  'सार्वजनिक लाभ के लिए सामाजिक सेवा और कल्याण गतिविधियाँ आयोजित करना',
    'obj-7':  'शिक्षा, स्वास्थ्य और सामाजिक विकास से संबंधित जागरूकता को बढ़ावा देना',
    'obj-8':  'समाज में समावेशी विकास और समान अवसरों का समर्थन करना',
    'obj-9':  'सतत ग्रामीण विकास और सशक्तिकरण की दिशा में कार्य करना',
    'obj-10': 'मानवीय और सामुदायिक भागीदारी गतिविधियों को प्रोत्साहित करना',

    /* --- Activities Section --- */
    'activities-badge':    'हम क्या करते हैं',
    'activities-title':    'हमारी <span class="highlight">गतिविधियाँ</span> और परियोजनाएँ',
    'activities-subtitle': 'शिक्षा, स्वास्थ्य, पर्यावरण और आजीविका क्षेत्रों में प्रभाव डालना।',

    /* Activity Card 1 - Education */
    'act1-badge':   'शिक्षा',
    'act1-title':   'उज्ज्वल भविष्य शिक्षा कार्यक्रम',
    'act1-text':    'ग्रामीण क्षेत्रों में 300 से अधिक वंचित बच्चों को निःशुल्क ट्यूशन, अध्ययन सामग्री और छात्रवृत्ति प्रदान करना, उन्हें स्कूल में बनाए रखने और शैक्षणिक उत्कृष्टता प्राप्त करने में सहायता करना।',
    'act1-meta1':   '300+ लाभार्थी',
    'act1-meta2':   '5 गाँव',

    /* Activity Card 2 - Health */
    'act2-badge':   'स्वास्थ्य सेवा',
    'act2-title':   'सामुदायिक स्वास्थ्य शिविर',
    'act2-text':    'मासिक निःशुल्क चिकित्सा जाँच शिविर आयोजित करना, दवाइयाँ वितरित करना और उन समुदायों को स्वास्थ्य जागरूकता कार्यशालाएँ प्रदान करना जिनके पास गुणवत्तापूर्ण स्वास्थ्य सुविधाओं तक पहुँच नहीं है।',
    'act2-meta1':   '500+ सेवित',
    'act2-meta2':   'मासिक',

    /* Activity Card 3 - Women */
    'act3-badge':   'महिला सशक्तिकरण',
    'act3-title':   'महिला कौशल विकास',
    'act3-text':    'सिलाई, हस्तशिल्प और डिजिटल साक्षरता में व्यावसायिक प्रशिक्षण कार्यक्रम चलाना, जिससे महिलाएँ आर्थिक रूप से स्वतंत्र और आत्मनिर्भर बन सकें।',
    'act3-meta1':   '150+ महिलाएँ',
    'act3-meta2':   'प्रमाणित',

    /* Activity Card 4 - Environment */
    'act4-badge':   'पर्यावरण',
    'act4-title':   'हरित पृथ्वी पहल',
    'act4-text':    'स्थानीय समुदायों में स्थिरता और पारिस्थितिक जिम्मेदारी की संस्कृति को बढ़ावा देने के लिए वृक्षारोपण, स्वच्छता अभियान और पर्यावरण शिक्षा कार्यक्रम चलाना।',
    'act4-meta1':   '5000+ पेड़',
    'act4-meta2':   'पारिस्थितिक प्रभाव',

    /* Activity Card 5 - Food */
    'act5-badge':   'खाद्य सहायता',
    'act5-title':   'पोषण और खाद्य समर्थन',
    'act5-text':    'प्रवासी मजदूरों, दिहाड़ी मजदूरों और वरिष्ठ नागरिकों को आपात स्थितियों में और नियमित आधार पर पौष्टिक खाद्य किट वितरित करना।',
    'act5-meta1':   '1000+ किट',
    'act5-meta2':   'जारी',

    /* Activity Card 6 - Digital */
    'act6-badge':   'डिजिटल',
    'act6-title':   'डिजिटल साक्षरता अभियान',
    'act6-text':    'वंचित क्षेत्रों के युवाओं और वयस्कों को डिजिटल विभाजन को प्रभावी ढंग से पाटने के लिए बुनियादी कंप्यूटर कौशल, इंटरनेट सुरक्षा और डिजिटल वित्तीय साक्षरता सिखाना।',
    'act6-meta1':   '200+ छात्र',
    'act6-meta2':   'तकनीक-सक्षम',

    /* --- Team Section --- */
    'team-badge':    'हमारे लोग',
    'team-title':    'हमारी <span class="highlight">टीम</span> से मिलें',
    'team-subtitle': 'वे समर्पित व्यक्ति जो प्रतिदिन हमारे मिशन को आगे बढ़ाते हैं।',

    'team1-role': 'अध्यक्ष',
    'team1-bio':  '17+ वर्षों का सामाजिक कार्य अनुभव, ग्रामीण विकास में पीएचडी। समुदाय उत्थान के प्रति समर्पित दूरदर्शी नेता।',
    'team2-role': 'सचिव',
    'team2-bio':  'संगठनात्मक प्रबंधन, सचिवीय अनुपालन, परियोजना शेड्यूलिंग और सामुदायिक कल्याण परियोजनाओं के लिए दैनिक कार्यों को सुव्यवस्थित करने में विशेषज्ञ।',
    'team3-role': 'कोषाध्यक्ष',
    'team3-bio':  'एनजीओ वित्त, अनुपालन और पारदर्शी निधि प्रबंधन में वर्षों का अनुभव।',
    'team4-role': 'उपाध्यक्ष',
    'team4-bio':  'क्षेत्र संचालन, स्वयंसेवक समन्वय और सतत सामुदायिक विकास कार्यक्रमों में विशेषज्ञ।',
    'team5-role': 'मुख्य टीम सदस्य',
    'team5-bio':  'जमीनी स्तर पर सामुदायिक आउटरीच, कार्यक्रम प्रबंधन और वंचित युवाओं के लिए सतत विकास पहलों में विशेषज्ञ।',
    'team6-role': 'मुख्य टीम सदस्य',
    'team6-bio':  'रणनीतिक एनजीओ साझेदारी, संसाधन जुटाने और बड़े पैमाने पर सामाजिक कल्याण अभियान चलाने में विशेषज्ञ।',
    'team7-role': 'मुख्य टीम सदस्य',
    'team7-bio':  'शैक्षिक पाठ्यक्रम डिजाइन, व्यावसायिक प्रशिक्षण कार्यक्रमों और छात्र परामर्श में विशेषज्ञ।',

    /* --- Gallery Section --- */
    'gallery-badge':    'हमारा कार्य तस्वीरों में',
    'gallery-title':    'फोटो <span class="highlight">गैलरी</span>',
    'gallery-subtitle': 'वे क्षण जो हमारे प्रभाव और यात्रा की कहानी बताते हैं।',
    'gallery-item1-p':  'शिक्षा कार्यक्रम',
    'gallery-item1-span': 'शिक्षा अभियान 2024',
    'gallery-item2-p':  'स्वास्थ्य शिविर',
    'gallery-item2-span': 'चिकित्सा शिविर 2024',
    'gallery-item3-p':  'महिला सशक्तिकरण',
    'gallery-item3-span': 'कौशल प्रशिक्षण 2024',
    'gallery-item4-p':  'वृक्षारोपण',
    'gallery-item4-span': 'हरित पृथ्वी अभियान 2024',
    'gallery-item5-p':  'छात्रवृत्ति कार्यक्रम',
    'gallery-item5-span': 'छात्रवृत्ति वितरण 2024',
    'gallery-item6-p':  'खाद्य वितरण',
    'gallery-item6-span': 'खाद्य सहायता शिविर 2024',

    /* --- Donate Section --- */
    'donate-badge':     'फर्क करें',
    'donate-title':     'हमारे <span class="highlight-light">उद्देश्य</span> का समर्थन करें',
    'donate-subtitle':  'आपका योगदान, चाहे कितना भी छोटा हो, बदलाव की लहर पैदा करता है।',
    'donate-why':       'दान क्यों करें?',
    'donate-b1':        '₹500 एक बच्चे के लिए एक साल की स्टेशनरी प्रदान करता है',
    'donate-b2':        '₹1,000 एक परिवार के लिए चिकित्सा सहायता प्रदान करता है',
    'donate-b3':        '₹2,500 एक लड़की की एक सत्र की छात्रवृत्ति को वित्त पोषित करता है',
    'donate-b4':        '₹5,000 एक महिला के लिए व्यावसायिक प्रशिक्षण का समर्थन करता है',
    'donate-b5':        '₹10,000 50+ लोगों के लिए एक स्वास्थ्य शिविर प्रायोजित करता है',
    'donate-tax':       'दान <strong>80जी कर छूट</strong> के लिए पात्र हैं।',

    /* Bank Details */
    'bank-title':       'बैंक हस्तांतरण विवरण',
    'bank-acc-name':    'खाता नाम',
    'bank-acc-num':     'खाता संख्या',
    'bank-ifsc':        'आईएफएससी कोड',
    'bank-bank-name':   'बैंक का नाम',
    'bank-branch':      'शाखा',
    'bank-acc-type':    'खाता प्रकार',
    'bank-acc-type-val': 'चालू खाता',
    'bank-contact':     'संपर्क नंबर',

    /* UPI / QR */
    'upi-title':    'UPI से भुगतान करें',
    'qr-note':      'अपना UPI QR कोड यहाँ लगाएँ',
    'btn-upi':      'UPI पे',
    'btn-netbank':  'नेट बैंकिंग',
    'btn-card':     'कार्ड भुगतान',
    'payment-note': 'सभी लेनदेन 100% सुरक्षित और एन्क्रिप्टेड हैं।',

    /* Payment Alerts */
    'alert-upi-msg':     'कृपया अपना UPI ऐप खोलें और QR कोड स्कैन करें, या ऊपर दिखाए गए UPI ID पर ट्रांसफर करें।',
    'alert-bank-msg':    'कृपया NEFT/RTGS ट्रांसफर करने के लिए ऊपर दिए गए बैंक विवरण का उपयोग करें।',
    'alert-card-msg':    'क्रेडिट/डेबिट कार्ड पेमेंट गेटवे। यहाँ Razorpay, PayU, या CCAvenue एकीकृत करें।',

    /* --- Volunteer Section --- */
    'volunteer-badge':    'आंदोलन में शामिल हों',
    'volunteer-title':    '<span class="highlight">स्वयंसेवक</span> बनें',
    'volunteer-subtitle': 'आपका समय और कौशल जीवन बदल सकता है। वह बदलाव बनें जो आप देखना चाहते हैं।',
    'volunteer-why':      'हमारे साथ स्वयंसेवक क्यों बनें?',

    'vol-cert-h':   'आधिकारिक प्रमाणपत्र',
    'vol-cert-p':   '20+ घंटे पूरे करने पर एक मान्यता प्राप्त स्वयंसेवक प्रमाणपत्र प्राप्त करें।',
    'vol-net-h':    'सामुदायिक नेटवर्क',
    'vol-net-p':    '120+ समान विचारधारा वाले स्वयंसेवकों और सामाजिक परिवर्तनकर्ताओं से जुड़ें।',
    'vol-skill-h':  'कौशल विकास',
    'vol-skill-p':  'सामाजिक कार्य, प्रबंधन और संचार में वास्तविक दुनिया का अनुभव प्राप्त करें।',
    'vol-award-h':  'पहचान और पुरस्कार',
    'vol-award-p':  'शीर्ष स्वयंसेवकों को हमारे वार्षिक सामुदायिक सम्मान समारोह में पहचाना जाता है।',

    'volunteer-need': 'हमें चाहिए:',
    'role-teacher':   'शिक्षक',
    'role-doctor':    'डॉक्टर',
    'role-designer':  'ग्राफिक डिजाइनर',
    'role-worker':    'सामाजिक कार्यकर्ता',
    'role-fundraiser':'फंडरेजर',
    'role-photo':     'फोटोग्राफर',
    'role-translator':'अनुवादक',
    'role-event':     'इवेंट मैनेजर',

    'vol-cta-h':    'क्या आप फर्क करने के लिए तैयार हैं?',
    'vol-cta-p':    'हमारा स्वयंसेवक पंजीकरण फॉर्म भरें और हमारी टीम शीघ्र ही आपसे संपर्क करेगी।',
    'vol-form-btn': 'स्वयंसेवक फॉर्म भरें',
    'vol-form-note':'आपको हमारे सुरक्षित Google फॉर्म पर रीडायरेक्ट किया जाएगा।',
    'vol-contact-direct': 'या सीधे हमसे संपर्क करें:',

    /* --- Contact Section --- */
    'contact-badge':    'संपर्क करें',
    'contact-title':    'हमसे <span class="highlight">संपर्क</span> करें',
    'contact-subtitle': 'हम आपसे सुनना पसंद करेंगे। साझेदारी, दान या जानकारी के लिए संपर्क करें।',
    'contact-addr-h':   'हमारा पता',
    'contact-phone-h':  'फ़ोन नंबर',
    'contact-email-h':  'ईमेल पता',
    'contact-follow':   'हमें फॉलो करें',
    'map-heading':      'Google मानचित्र',

    /* --- Footer --- */
    'footer-tagline':   'समुदायों को सशक्त बनाना, जीवन बदलना, भविष्य बनाना।',
    'footer-reg':       'रजि. संख्या:',
    'footer-80g':       '80जी रजि.:',
    'footer-12a':       '12ए रजि.:',

    'footer-quick-links': 'त्वरित लिंक',
    'footer-home':      'होम',
    'footer-about':     'हमारे बारे में',
    'footer-activities':'गतिविधियाँ',
    'footer-events':    'कार्यक्रम',
    'footer-certificates':'प्रमाणपत्र',
    'footer-team':      'हमारी टीम',
    'footer-gallery':   'गैलरी',
    'footer-partners':  'हमारे साझेदार',
    'footer-featured':  'मीडिया कवरेज',
    'footer-donate':    'दान करें',
    'footer-volunteer': 'स्वयंसेवक',
    'footer-feedback':  'प्रतिक्रिया',
    'footer-contact':   'संपर्क',
    'footer-faq':       'सामान्य प्रश्न',

    'footer-programs':  'हमारे कार्यक्रम',
    'footer-prog1':     'शिक्षा कार्यक्रम',
    'footer-prog2':     'स्वास्थ्य शिविर',
    'footer-prog3':     'महिला सशक्तिकरण',
    'footer-prog4':     'हरित पृथ्वी अभियान',
    'footer-prog5':     'खाद्य सहायता कार्यक्रम',
    'footer-prog6':     'डिजिटल साक्षरता',

    'footer-contact-info': 'संपर्क जानकारी',
    'footer-copyright':  '© <span id="currentYear"></span> ग्रामीण विकास केंद्र, धनबाद। सर्वाधिकार सुरक्षित।',
    'footer-credit':     'पंजीकृत एनजीओ | गैर-लाभकारी संगठन | 80जी और 12ए प्रमाणित',

    /* --- Events & Achievements Section --- */
    'events-badge':      'हमारी यात्रा',
    'events-title':      'कार्यक्रम और <span class="highlight">उपलब्धियाँ</span>',
    'events-subtitle':   'वे मील के पत्थर जो हमारे समुदाय की वृद्धि और हमारे मिशन को दर्शाते हैं।',
    'event1-title':      'वार्षिक सामुदायिक स्वास्थ्य शिविर',
    'event1-desc':       'धनबाद जिले के 5 गाँवों में 500 से अधिक परिवारों की सेवा करने वाला निःशुल्क चिकित्सा शिविर आयोजित किया। चिकित्सा विशेषज्ञों ने मुफ्त परामर्श, दवाइयाँ और स्वास्थ्य जागरूकता सत्र प्रदान किए।',
    'event2-title':      'छात्रवृत्ति वितरण समारोह',
    'event2-desc':       'आर्थिक रूप से कमजोर वर्ग के 80 मेधावी छात्रों को छात्रवृत्ति वितरित की गई, जिससे वे उच्च शिक्षा जारी रख सकें। समारोह में स्थानीय गणमान्य व्यक्ति और सामुदायिक नेता भी सम्मिलित हुए।',
    'event3-title':      'हरित पृथ्वी वृक्षारोपण अभियान',
    'event3-desc':       '200 से अधिक स्वयंसेवकों ने धनबाद क्षेत्र में 1,500 पौधे लगाए। यह पहल पर्यावरणीय स्थिरता के प्रति हमारी दीर्घकालिक प्रतिबद्धता का हिस्सा है।',

    /* --- Certificates & Recognition Section --- */
    'cert-badge':        'पुरस्कार और मान्यता',
    'cert-title':        'प्रमाणपत्र और <span class="highlight">मान्यता</span>',
    'cert-subtitle':     'समुदाय सेवा और उत्कृष्टता के प्रति हमारी प्रतिबद्धता की गर्वपूर्ण स्वीकृतियाँ।',
    'cert1-title':       'एनजीओ दर्पण पंजीकरण',
    'cert1-auth':        'नीति आयोग, भारत सरकार',
    'cert2-title':       '80जी कर छूट प्रमाणपत्र',
    'cert2-auth':        'आयकर विभाग, भारत',
    'cert3-title':       '12ए पंजीकरण प्रमाणपत्र',
    'cert3-auth':        'आयकर विभाग, भारत',
    'cert4-title':       'सोसायटी पंजीकरण',
    'cert4-auth':        'सोसायटी पंजीयक, झारखंड',

    /* --- Partners Section --- */
    'partners-badge':    'सहयोग',
    'partners-title':    'हमारे <span class="highlight">साझेदार</span>',
    'partners-subtitle': 'वे संस्थाएँ और संगठन जो हमारे साथ स्थायी प्रभाव बनाने में खड़े हैं।',

    /* --- Featured In Section --- */
    'featured-badge':    'मीडिया कवरेज',
    'featured-title':    'में <span class="highlight">प्रदर्शित</span>',
    'featured-subtitle': 'प्रमुख समाचार पत्रों और मीडिया संगठनों द्वारा हमारे कार्य की पहचान।',

    /* --- Feedback & Suggestions Section --- */
    'feedback-badge':        'हम सुन रहे हैं',
    'feedback-title':        'प्रतिक्रिया और <span class="highlight">सुझाव</span>',
    'feedback-subtitle':     'आपकी आवाज़ हमारे लिए महत्वपूर्ण है। कोई भी प्रश्न, सुझाव या प्रतिक्रिया हो तो नीचे दिए गए फॉर्म के माध्यम से हमें संदेश भेजें।',
    'feedback-info1-h':      'अपने विचार साझा करें',
    'feedback-info1-p':      'आपके सुझाव हमें समुदाय की बेहतर सेवा करने में मदद करते हैं। हम हर संदेश पढ़ते हैं।',
    'feedback-info2-h':      'साझेदारी की जानकारी',
    'feedback-info2-p':      'क्या आप हमारे साथ सहयोग करने में रुचि रखते हैं? इस फॉर्म का उपयोग हमारी टीम तक पहुँचने के लिए करें।',
    'feedback-info3-h':      'त्वरित प्रतिक्रिया',
    'feedback-info3-p':      'हम सभी संदेशों का उत्तर सामान्यतः 2–3 कार्य दिवसों के भीतर देते हैं।',
    'feedback-name-label':   'पूरा नाम',
    'feedback-name-ph':      'अपना पूरा नाम दर्ज करें',
    'feedback-email-label':  'ईमेल पता',
    'feedback-email-ph':     'अपना ईमेल पता दर्ज करें',
    'feedback-subject-label':'विषय',
    'feedback-subject-ph':   'आपका संदेश किस बारे में है?',
    'feedback-message-label':'संदेश',
    'feedback-message-ph':   'यहाँ अपना संदेश लिखें...',
    'feedback-submit':       'संदेश भेजें',

    /* --- FAQ Section --- */
    'faq-badge':    'सामान्य प्रश्न',
    'faq-title':    'अक्सर पूछे जाने वाले <span class="highlight">प्रश्न</span>',
    'faq-subtitle': 'हमारे कार्य, स्वयंसेवा और दान के बारे में सबसे सामान्य प्रश्नों के उत्तर यहाँ पाएं।',
    'faq1-q':       'ग्रामीण विकास केंद्र, धनबाद को दान कैसे करें?',
    'faq1-a':       'आप UPI, नेट बैंकिंग या ऊपर दान अनुभाग में हमारा QR कोड स्कैन करके दान कर सकते हैं। हम "ग्रामीण विकास केंद्र" के नाम से चेक भी स्वीकार करते हैं। ₹500 से अधिक के सभी दान 80जी कर छूट के लिए पात्र हैं।',
    'faq2-q':       'क्या मेरा दान धारा 80जी के तहत कर छूट के योग्य है?',
    'faq2-a':       'हाँ! GVK धनबाद आयकर अधिनियम की धारा 80जी के तहत पंजीकृत है (पंजीकरण संख्या: AAAAG6642 DF20217)। आपको एक आधिकारिक दान रसीद प्राप्त होगी जिसका उपयोग आय कर रिटर्न दाखिल करते समय कर लाभ के लिए किया जा सकता है।',
    'faq3-q':       'GVK के साथ स्वयंसेवक कैसे बनें?',
    'faq3-a':       'स्वयंसेवक अनुभाग में उपलब्ध हमारा पंजीकरण फॉर्म भरें। या हमें +91 6207999525 पर कॉल करें या gvkdhanbad1@gmail.com पर ईमेल करें। हम सभी उम्र और कौशल के स्वयंसेवकों का स्वागत करते हैं।',
    'faq4-q':       'GVK धनबाद किन क्षेत्रों में सेवा करता है?',
    'faq4-a':       'हम मुख्यतः झारखंड के धनबाद जिले में सेवा करते हैं। हमारे कार्यक्रम 8 जिलों में फैले हैं और ग्रामीण व अर्ध-शहरी क्षेत्रों में शिक्षा, स्वास्थ्य, महिला सशक्तिकरण और पर्यावरण संरक्षण पर केंद्रित हैं।',
    'faq5-q':       'दान का उपयोग संगठन द्वारा कैसे किया जाता है?',
    'faq5-a':       'सभी दान समुदायिक कार्यक्रमों के लिए पारदर्शी रूप से उपयोग किए जाते हैं जिनमें शिक्षा छात्रवृत्ति, मुफ्त स्वास्थ्य शिविर, कौशल विकास, वृक्षारोपण और खाद्य सहायता शामिल हैं।',
    'faq6-q':       'क्या संस्थाएँ या कंपनियाँ GVK के साथ साझेदारी कर सकती हैं?',
    'faq6-a':       'बिल्कुल! हम CSR साझेदारी और संस्थागत सहयोग का स्वागत करते हैं। कृपया ऊपर दिए गए प्रतिक्रिया फॉर्म का उपयोग करें या gvkdhanbad1@gmail.com पर सीधे संपर्क करें।',
  },


  /* ==============================================================
     ENGLISH
     ============================================================== */
  en: {
    /* --- Navbar Links --- */
    'nav-home':         'Home',
    'nav-about':        'About',
    'nav-activities':   'Activities',
    'nav-team':         'Team',
    'nav-gallery':      'Gallery',
    'nav-volunteer':    'Volunteer',
    'nav-contact':      'Contact',
    'nav-donate':       'Donate',

    /* --- Language Switcher --- */
    'lang-btn-label':   'Change Language',

    /* --- Hero Section --- */
    'hero-badge':       'Est. 2008 · Registered NGO',
    'hero-title':       'GRAMIN VIKAS KENDRA, DHANBAD',
    'hero-tagline':     'Empowering Communities, Changing Lives, Building Futures',
    'hero-description': 'We are a registered non-governmental organization working tirelessly to uplift underprivileged communities through education, healthcare, and sustainable development programs. Together, we can make a difference.',
    'hero-btn-donate':  'Donate Now',
    'hero-btn-volunteer': 'Become a Volunteer',

    /* --- Hero Stats Labels --- */
    'stat-lives':       'Lives Impacted',
    'stat-projects':    'Projects Done',
    'stat-volunteers':  'Volunteers',
    'stat-districts':   'Districts Covered',

    /* --- Scroll Indicator --- */
    'scroll-down':      'Scroll Down',

    /* --- About Section --- */
    'about-badge':      'Who We Are',
    'about-subtitle':   'Dedicated to creating lasting change in communities that need it most.',
    'about-text-1':     'Gramin Vikash Kendra Dhanbad is a non-governmental organization (NGO) based in Dhanbad, Jharkhand, dedicated to social development and community welfare. Established with the vision of uplifting underprivileged and rural communities, the organization actively works in the fields of education, social awareness, skill development, and community support services.',
    'about-text-2':     'The organization focuses on supporting children, students, women, and economically weaker sections of society by promoting educational assistance, awareness programs, and community development activities. Gramin Vikash Kendra Dhanbad believes in building a self-reliant and progressive society through collective participation, social responsibility, and sustainable development.',

    /* --- About Tabs --- */
    'tab-mission':      'Mission',
    'tab-vision':       'Vision',
    'tab-objectives':   'Objectives',

    'mission-heading':  'Our Mission',
    'mission-text':     'Mission of organization is to give equal opportunity to all citizens in term of good education, good health services, skills and livelihood for made people self reliance and live with peace and harmony.',

    'vision-heading':   'Our Vision',
    'vision-text':      'Gramin Vikas Kendra Dhanbad wants to create an egalitarian society where not remains hunger, exploitation, disparity on the basis of caste, creed, colour, religion etc.',

    'objectives-heading': 'Our Objectives',
    'obj-1':  'To promote educational support services in rural and backward areas',
    'obj-2':  'To work for social welfare and community development',
    'obj-3':  'To support children through educational initiatives and awareness programs',
    'obj-4':  'To encourage skill development and self-reliance among youth',
    'obj-5':  'To contribute towards the upliftment of economically weaker communities',
    'obj-6':  'To organize social service and welfare activities for public benefit',
    'obj-7':  'To promote awareness related to education, health, and social development',
    'obj-8':  'To support inclusive growth and equal opportunities in society',
    'obj-9':  'To work towards sustainable rural development and empowerment',
    'obj-10': 'To encourage humanitarian and community participation activities',

    /* --- Activities Section --- */
    'activities-badge':    'What We Do',
    'activities-title':    'Our <span class="highlight">Activities</span> &amp; Projects',
    'activities-subtitle': 'Driving impact across education, health, environment, and livelihood sectors.',

    /* Activity Card 1 */
    'act1-badge':   'Education',
    'act1-title':   'Bright Futures Education Program',
    'act1-text':    'Providing free tutoring, study materials, and scholarships to over 300 underprivileged children in rural areas, helping them stay in school and achieve academic excellence.',
    'act1-meta1':   '300+ Beneficiaries',
    'act1-meta2':   '5 Villages',

    /* Activity Card 2 */
    'act2-badge':   'Healthcare',
    'act2-title':   'Community Health Camps',
    'act2-text':    'Organizing monthly free medical checkup camps, distributing medicines, and providing health awareness workshops to communities lacking access to quality healthcare facilities.',
    'act2-meta1':   '500+ Served',
    'act2-meta2':   'Monthly',

    /* Activity Card 3 */
    'act3-badge':   'Women Empowerment',
    'act3-title':   'Women Skill Development',
    'act3-text':    'Running vocational training programs in tailoring, handicrafts, and digital literacy, enabling women to become financially independent and self-reliant contributors to their families.',
    'act3-meta1':   '150+ Women',
    'act3-meta2':   'Certified',

    /* Activity Card 4 */
    'act4-badge':   'Environment',
    'act4-title':   'Green Earth Initiative',
    'act4-text':    'Leading tree plantation drives, clean-up campaigns, and environmental education programs to foster a culture of sustainability and ecological responsibility in local communities.',
    'act4-meta1':   '5000+ Trees',
    'act4-meta2':   'Eco-Impact',

    /* Activity Card 5 */
    'act5-badge':   'Food Aid',
    'act5-title':   'Nutrition & Food Support',
    'act5-text':    'Distributing nutritional food kits to migrant workers, daily-wage laborers, and senior citizens during emergencies and on a regular basis to combat food insecurity.',
    'act5-meta1':   '1000+ Kits',
    'act5-meta2':   'Ongoing',

    /* Activity Card 6 */
    'act6-badge':   'Digital',
    'act6-title':   'Digital Literacy Drive',
    'act6-text':    'Teaching basic computer skills, internet safety, and digital financial literacy to youth and adults in underserved areas to bridge the digital divide effectively.',
    'act6-meta1':   '200+ Students',
    'act6-meta2':   'Tech-Enabled',

    /* --- Team Section --- */
    'team-badge':    'Our People',
    'team-title':    'Meet Our <span class="highlight">Team</span>',
    'team-subtitle': 'The dedicated individuals who drive our mission forward every day.',

    'team1-role': 'President',
    'team1-bio':  '17+ years in social work Ph.D. in Rural Development. Visionary leader committed to community upliftment.',
    'team2-role': 'Secretary',
    'team2-bio':  'Specialist in organizational management, secretarial compliance, project scheduling, and streamlining daily operations for community welfare projects.',
    'team3-role': 'Treasurer',
    'team3-bio':  'Years of experience in NGO finance, compliance, and transparent fund management.',
    'team4-role': 'Vice President',
    'team4-bio':  'Specialist in field operations, volunteer coordination, and sustainable community development programs.',
    'team5-role': 'Core Team Member',
    'team5-bio':  'Specialist in grassroots community outreach, program management, and sustainable development initiatives for underprivileged youth.',
    'team6-role': 'Core Team Member',
    'team6-bio':  'Specialist in strategic NGO partnerships, resource mobilization, and executing large-scale social welfare campaigns.',
    'team7-role': 'Core Team Member',
    'team7-bio':  'Specialist in educational curriculum design, vocational training programs and student mentorship.',

    /* --- Gallery Section --- */
    'gallery-badge':    'Our Work in Pictures',
    'gallery-title':    'Photo <span class="highlight">Gallery</span>',
    'gallery-subtitle': 'Moments that tell the story of our impact and journey.',
    'gallery-item1-p':  'Education Program',
    'gallery-item1-span': 'Education Drive 2024',
    'gallery-item2-p':  'Health Camp',
    'gallery-item2-span': 'Medical Camp 2024',
    'gallery-item3-p':  'Women Empowerment',
    'gallery-item3-span': 'Skill Training 2024',
    'gallery-item4-p':  'Tree Plantation',
    'gallery-item4-span': 'Green Earth Drive 2024',
    'gallery-item5-p':  'Scholarship Event',
    'gallery-item5-span': 'Scholarship Distribution 2024',
    'gallery-item6-p':  'Food Distribution',
    'gallery-item6-span': 'Food Aid Camp 2024',

    /* --- Donate Section --- */
    'donate-badge':     'Make a Difference',
    'donate-title':     'Support Our <span class="highlight-light">Cause</span>',
    'donate-subtitle':  'Your contribution, no matter how small, creates a ripple of change.',
    'donate-why':       'Why Donate?',
    'donate-b1':        '₹500 provides stationery for one child for a year',
    'donate-b2':        '₹1,000 covers medical aid for a family',
    'donate-b3':        '₹2,500 funds a girl\'s scholarship for one term',
    'donate-b4':        '₹5,000 supports vocational training for one woman',
    'donate-b5':        '₹10,000 sponsors a health camp for 50+ people',
    'donate-tax':       'Donations are eligible for <strong>80G tax exemption</strong>.',

    /* Bank Details */
    'bank-title':       'Bank Transfer Details',
    'bank-acc-name':    'Account Name',
    'bank-acc-num':     'Account Number',
    'bank-ifsc':        'IFSC Code',
    'bank-bank-name':   'Bank Name',
    'bank-branch':      'Branch',
    'bank-acc-type':    'Account Type',
    'bank-acc-type-val': 'Current Account',
    'bank-contact':     'Contact number',

    /* UPI / QR */
    'upi-title':    'Pay via UPI',
    'qr-note':      'Replace with your UPI QR Code',
    'btn-upi':      'UPI Pay',
    'btn-netbank':  'Net Banking',
    'btn-card':     'Card Payment',
    'payment-note': 'All transactions are 100% secure and encrypted.',

    /* Payment Alerts */
    'alert-upi-msg':     'Please open your UPI app and scan the QR code, or transfer to the UPI ID shown above.\n\nREPLACE THIS: Connect your payment gateway here.',
    'alert-bank-msg':    'Please use the bank details above to make an NEFT/RTGS transfer.\n\nREPLACE THIS: Connect your payment gateway here.',
    'alert-card-msg':    'Credit/Debit card payment gateway.\n\nREPLACE THIS: Integrate Razorpay, PayU, or CCAvenue here.',

    /* --- Volunteer Section --- */
    'volunteer-badge':    'Join the Movement',
    'volunteer-title':    'Become a <span class="highlight">Volunteer</span>',
    'volunteer-subtitle': 'Your time and skills can transform lives. Be the change you wish to see.',
    'volunteer-why':      'Why Volunteer with Us?',

    'vol-cert-h':   'Official Certificate',
    'vol-cert-p':   'Receive a recognized volunteer certificate upon completing 20+ hours.',
    'vol-net-h':    'Community Network',
    'vol-net-p':    'Connect with 120+ like-minded volunteers and social change makers.',
    'vol-skill-h':  'Skill Development',
    'vol-skill-p':  'Gain real-world experience in social work, management, and communication.',
    'vol-award-h':  'Recognition & Awards',
    'vol-award-p':  'Top volunteers are recognized annually at our community felicitation event.',

    'volunteer-need': 'We Need:',
    'role-teacher':   'Teachers',
    'role-doctor':    'Doctors',
    'role-designer':  'Graphic Designers',
    'role-worker':    'Social Workers',
    'role-fundraiser':'Fundraisers',
    'role-photo':     'Photographers',
    'role-translator':'Translators',
    'role-event':     'Event Managers',

    'vol-cta-h':    'Ready to Make a Difference?',
    'vol-cta-p':    'Fill out our volunteer registration form and our team will contact you Shortly to discuss how you can contribute best to our mission.',
    'vol-form-btn': 'Fill Volunteer Form',
    'vol-form-note':'You will be redirected to our secure Google Form.',
    'vol-contact-direct': 'Or contact us directly:',

    /* --- Contact Section --- */
    'contact-badge':    'Get in Touch',
    'contact-title':    'Contact <span class="highlight">Us</span>',
    'contact-subtitle': 'We\'d love to hear from you. Reach out for partnerships, donations, or inquiries.',
    'contact-addr-h':   'Our Address',
    'contact-phone-h':  'Phone Numbers',
    'contact-email-h':  'Email Address',
    'contact-follow':   'Follow Us',
    'map-heading':      'Google Maps',

    /* --- Footer --- */
    'footer-tagline':   'Empowering Communities, Changing Lives, Building Futures.',
    'footer-reg':       'Reg. No:',
    'footer-80g':       '80G Reg:',
    'footer-12a':       '12A Reg:',

    'footer-quick-links': 'Quick Links',
    'footer-home':      'Home',
    'footer-about':     'About Us',
    'footer-activities':'Activities',
    'footer-events':    'events',
    'footer-certificates':'Certificates',
    'footer-team':      'Our Team',
    'footer-gallery':   'Gallery',
    'footer-partners':  'Our Partners',
    'footer-featured':  'Featured In',
    'footer-donate':    'Donate',
    'footer-volunteer': 'Volunteer',
    'footer-feedback':  'Suggestions',
    'footer-contact':   'Contact',
    'footer-faq':       'FAQs',

    'footer-programs':  'Our Programs',
    'footer-prog1':     'Education Program',
    'footer-prog2':     'Health Camps',
    'footer-prog3':     'Women Empowerment',
    'footer-prog4':     'Green Earth Drive',
    'footer-prog5':     'Food Aid Program',
    'footer-prog6':     'Digital Literacy',

    'footer-contact-info': 'Contact Info',
    'footer-copyright':  '© <span id="currentYear"></span> Gramin Vikash Kendra, Dhanbad. All Rights Reserved.',
    'footer-credit':     'Registered NGO | Non-Profit Organization | 80G &amp; 12A Certified',

    /* --- Events & Achievements Section --- */
    'events-badge':      'Our Journey',
    'events-title':      'Events &amp; <span class="highlight">Achievements</span>',
    'events-subtitle':   'Milestones that celebrate our community\'s growth and our mission in action.',
    'event1-title':      'Annual Community Health Camp',
    'event1-desc':       'Organized a free medical camp serving over 500 families across 5 villages in Dhanbad district. Medical professionals volunteered their time to provide free consultations, medicines, and health awareness sessions for the community.',
    'event2-title':      'Scholarship Distribution Ceremony',
    'event2-desc':       'Distributed scholarships to 80 meritorious students from economically weaker backgrounds, enabling them to continue their higher education. The ceremony was attended by local dignitaries and community leaders.',
    'event3-title':      'Green Earth Tree Plantation Drive',
    'event3-desc':       'More than 200 volunteers came together to plant 1,500 saplings across barren land in the Dhanbad region, as part of our long-term commitment to environmental sustainability.',

    /* --- Certificates & Recognition Section --- */
    'cert-badge':        'Awards &amp; Recognition',
    'cert-title':        'Certificates &amp; <span class="highlight">Recognition</span>',
    'cert-subtitle':     'Proud acknowledgements of our commitment to community service and excellence.',
    'cert1-title':       'NGO Darpan Registration',
    'cert1-auth':        'NITI Aayog, Government of India',
    'cert2-title':       '80G Tax Exemption Certificate',
    'cert2-auth':        'Income Tax Department, India',
    'cert3-title':       '12A Registration Certificate',
    'cert3-auth':        'Income Tax Department, India',
    'cert4-title':       'Society Registration',
    'cert4-auth':        'Registrar of Societies, Jharkhand',

    /* --- Partners Section --- */
    'partners-badge':    'Collaborations',
    'partners-title':    'Our <span class="highlight">Partners</span>',
    'partners-subtitle': 'Organizations and institutions who stand with us in creating lasting impact.',

    /* --- Featured In Section --- */
    'featured-badge':    'Media Coverage',
    'featured-title':    'Featured <span class="highlight">In</span>',
    'featured-subtitle': 'Our work recognized by leading newspapers and media organizations.',

    /* --- Feedback & Suggestions Section --- */
    'feedback-badge':         'We\'re Listening',
    'feedback-title':         'Feedback &amp; <span class="highlight">Suggestions</span>',
    'feedback-subtitle':      'Your voice matters to us. Whether you have a question, suggestion, or feedback, please send us a message using the form below.',
    'feedback-info1-h':       'Share Your Thoughts',
    'feedback-info1-p':       'Your suggestions help us serve the community better. We read every message.',
    'feedback-info2-h':       'Partnership Inquiries',
    'feedback-info2-p':       'Interested in collaborating with us? Use this form to reach out to our team.',
    'feedback-info3-h':       'Quick Response',
    'feedback-info3-p':       'We typically respond to all messages within 2–3 business working days.',
    'feedback-name-label':    'Full Name',
    'feedback-name-ph':       'Enter your full name',
    'feedback-email-label':   'Email Address',
    'feedback-email-ph':      'Enter your email address',
    'feedback-subject-label': 'Subject',
    'feedback-subject-ph':    'What is your message about?',
    'feedback-message-label': 'Message',
    'feedback-message-ph':    'Write your message here...',
    'feedback-submit':        'Send Message',

    /* --- FAQ Section --- */
    'faq-badge':    'Common Questions',
    'faq-title':    'Frequently Asked <span class="highlight">Questions</span>',
    'faq-subtitle': 'Find answers to the most common questions about our work, volunteering, and donations.',
    'faq1-q':       'How can I donate to Gramin Vikas Kendra, Dhanbad?',
    'faq1-a':       'You can donate through UPI, Net Banking, or by scanning our QR code in the Donation section above. We also accept cheques in the name of "Gramin Vikash Kendra". All donations above ₹500 are eligible for 80G tax exemption.',
    'faq2-q':       'Is my donation eligible for tax exemption under Section 80G?',
    'faq2-a':       'Yes! GVK Dhanbad is registered under Section 80G of the Income Tax Act (Reg. No: AAAAG6642 DF20217). You will receive an official donation receipt that you can use to claim tax benefits when filing your income tax return.',
    'faq3-q':       'How can I become a volunteer with GVK?',
    'faq3-a':       'Fill out our volunteer registration form available in the Volunteer section. Alternatively, call us at +91 6207999525 or email gvkdhanbad1@gmail.com. We welcome volunteers of all ages and skills.',
    'faq4-q':       'What areas does GVK Dhanbad serve?',
    'faq4-a':       'We primarily serve communities in the Dhanbad district of Jharkhand. Our programs extend across 8 districts covering rural and semi-urban areas, focusing on education, healthcare, women\'s empowerment, environmental conservation, and digital literacy.',
    'faq5-q':       'How are donations utilized by the organization?',
    'faq5-a':       'All donations are used transparently for community programs including education scholarships, free health camps, skill development workshops, tree plantation drives, and food aid. We are happy to share annual reports upon request.',
    'faq6-q':       'Can organizations or companies partner with GVK?',
    'faq6-a':       'Absolutely! We welcome CSR partnerships and institutional collaborations. Please use the Feedback & Suggestions form above or contact us directly at gvkdhanbad1@gmail.com to discuss how we can work together.',

  }, /* end en */

}; /* end translations */


/* ================================================================
   LANGUAGE ENGINE
   ================================================================
   applyLanguage(lang):
     - Reads all elements with [data-i18n] attribute
     - Looks up their key in translations[lang]
     - Sets innerHTML (supports bold tags etc.)
   ================================================================ */


/**
 * Apply a language to the entire page without reloading.
 * @param {string} lang - Language code: 'hi' or 'en'
 */
function applyLanguage(lang) {
  // Fallback to Hindi if unsupported lang requested
  if (!translations[lang]) lang = 'hi';

  // Save selected language to localStorage for persistence
  localStorage.setItem('gvk-language', lang);

  // Update the <html lang> attribute for accessibility & SEO
  document.documentElement.lang = (lang === 'hi') ? 'hi' : 'en';

  // Mark the active button in the language switcher
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('lang-active', btn.getAttribute('data-lang') === lang);
  });

  /* -- Translate all elements with [data-i18n] attribute -- */
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];

    if (value !== undefined) {
      // Use innerHTML to allow <strong>, <span>, &amp; etc. in translations
      el.innerHTML = value;
    }
  });

  /* -- Translate placeholder attributes -- */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = translations[lang][key];
    if (value !== undefined) {
      el.placeholder = value;
    }
  });

  /* -- Translate aria-label attributes -- */
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-aria');
    const value = translations[lang][key];
    if (value !== undefined) {
      el.setAttribute('aria-label', value);
    }
  });

  // Re-set copyright year after innerHTML reset on footer copyright span
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}


/* ================================================================
   LANGUAGE SWITCHER INITIALIZATION
   Run after DOM is ready
   ================================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ---- Build the language switcher UI ---- */
  const langSwitcher = document.getElementById('langSwitcher');
  if (!langSwitcher) return;

  // Render the two buttons inside the switcher
  langSwitcher.innerHTML = `
    <button class="lang-btn" data-lang="hi" aria-label="हिन्दी में बदलें" title="हिन्दी">
      हिन्दी
    </button>
    <span class="lang-divider">|</span>
    <button class="lang-btn" data-lang="en" aria-label="Switch to English" title="English">
      English
    </button>
  `;

  // Attach click handlers
  langSwitcher.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(this.getAttribute('data-lang'));
    });
  });

  /* ---- Determine starting language ----
     Priority: localStorage → default Hindi               */
  const savedLang = localStorage.getItem('gvk-language') || 'hi';
  applyLanguage(savedLang);
});
