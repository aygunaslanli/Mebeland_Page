import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init




const resources = {

AZE:{
    translation:{
        home:'ANA SƏHİFƏ',
        about:'HAQQIMIZDA',
        shop:'MAĞAZA',
        features:'XÜSUSİYYƏTLƏR',
        contact:'ƏLAQƏ',
        blog:'BLOQ',
        concept:'Yeni İnteryer Konsepti',
        collection:'MEBELAND KOLLEKSİYASI',
        collectionwords:'Bizim seçilmiş mebel seçimimiz dünyanın ən hörmətli bəzi hissələrini əhatə edir.',
        collectionwords1:'dizayn atelyeləri, eləcə də sevimli gələcək dizaynerlərimiz. Materiallıq, forma və sənətkarlığa diqqət yetirməklə, mebelimiz bir bəyanat verir. Onları həyatınıza necə əlavə edə biləcəyinizi görmək üçün fərdi parçalara tək və ya seçilmiş məkanda baxın.',
        words1:'Mebel Dizaynını kəşf edin',
        words2:'Hər Dəfə Yeni İnnovasiya Dizaynı',
        words3:'Mebel Tələbləri Bazara Görə Dəyişir',
        words4:'Bazar tendensiyalarının və ehtiyaclarının prioritetləşdirilməsi',
        about2:'MEBELAND HAQQINDA',
        collection2:'Mebeland Yeni Kolleksiyasına Hazırsınız?',
        start:'Yalnız 125 dollardan başlayır',
        designed:'Dizayn edib',
        new:'Yeni Dizayn 2023',
        furniture:'2023-cü ildə mebel dizaynları əyri xətləri olan yumşaq, üzvi formalara meyl edir. Bu tendensiya son illərdə məşhur olan düz xətlərdən və kəskin bucaqlardan fasilə təklif edir, istənilən məkana rahatlıq və rahatlıq hissi gətirir.',
        furniture2:'Belə bir tendensiya, yaradıcı olmağın və sənətinizin parlamasına icazə verməyin vaxtının gəldiyini göstərir. Əyri büzməli divan və kreslolardan yuvarlaqlaşdırılmış sehpalara və osmanlılara qədər klassik orta əsr dizaynına müasir bir görünüş verir.',
        furniture3:'Tünd rənglər həmişə interyer dizaynında yer tutsa da, 2023-cü ildə çap və naxışlı mebel dizaynlarının axını müşahidə olunacaq. ',
        hot:'TRENDLƏR',
        trend:'Bu Həftənin Trend Mebelləri',
        trendabout:'Yeni ev dekorasiyası və mebel üçün alış-veriş, tam təmir etmədən məkanınızı yeniləmək üçün əla yoldur. Ən rahat divanlardan tutmuş yan masalara qədər istənilən parça otağın hisslərini dəyişdirə və öz üslubunuzun şəxsi əksi ola bilər. ',
        modern:'Müasir Qonaq Otağı',
        items:'$448 Tam Dəst Əşyalar',
        livingroom:'Müasir qonaq otağı sadə, zərif və zərifdir. Hündür tavanlar, laylı işıqlandırma və minimalist mebel gündəlik zövq və istirahət üçün müasir qonaq otağının yaradılmasında vacib aspektlərdir.Əlbəttə ki, mebel müasir qonaq otağının dizaynında əsas rol oynayır və bir sıra vacib hissələr var ki, heç bir yaşayış sahəsi olmadan edə bilməz.',
        luxury:'Lüks Mebel',
        more:'DAHA ÇOX OXUYUN',
        items2:'$521 Tam Dəst Əşyalar',
        art:'Lüks mebel təsviri nədir?Lüks Mebel Brendlərinin Keyfiyyətləri Nələrdir? İncəsənət - Dəbdəbəli mebel parçaları fabrikdə yığılmaq əvəzinə əllə hazırlanır. Onlar sənayenin bəzi tanınmış adları tərəfindən hazırlanmış və həyatlarını ağac emalı, əl ilə rəngləmə və mebel sənətkarlığının digər aspektlərinə həsr etmiş mütəxəssislər tərəfindən birləşdirilmişdir.',
        why:'NİYƏ BİZİ SEÇİRSİNİZ',
        trending:'Biz Bütün Dünyada Tanınırıq',
        express:'Təcili Çatdırılma',
        premium:'Premium Qablaşdırma',
        service:'Gülərüz Servis',
        payment:'Təhlükəsiz Ödəniş',
        delivery:'Ekspress çatdırılma ən sürətli göndərmə formasıdır. Müştəri bu növ çatdırılma üçün əlavə göndərmə haqqı ödəyir, çünki göndərmə 24 ilə 72 saat arasında istənilən yerə daşınacaq.',
        premium2:'Premium qablaşdırma brendlər üçün dəyər yaradır və onların kateqoriya lideri kimi seçilməsinə kömək edir. Premium qablaşdırmanın yaratdığı fərq budur.',
        project:'Layihələr',
        expert:'Ekspert İşçilər',
        clients:'Məmnun Müştərilər',
        awards:'Qalib Mükafatlar',
        branch:'Filial Mağazası',
        play:'VİDEONU OYNADIN',
        architecture:'Memarlıq Yalnız Vizual Təcrübədən Deyil',
        architecture2:'Memarlığın mürəkkəb fenomeni həddən artıq çox barışmaz və düşüncə, niyyət, duyğu, qarşılıqlı təsir və hərəkətin ziddiyyətli kateqoriyaları vahid memarlıq nəzəriyyəsi çərçivəsində sıxlaşdırılmışdır. Bundan başqa, incəsənət və memarlıq yerinə onların zehni qarşılaşması və təcrübələri meydana gəlir material özü işləyir',
        architecture3:'Memarlıq adətən başa düşülür, öyrədilir, tətbiq edilir və ilk növbədə qiymətləndirilir  vizual sənət növü kimi. Ancaq binalar və mühitlər vasitəsilə qarşılaşırıq  bütün varlıq duyğumuz. Qavramalar yaddaş və təxəyyül ilə qarşılıqlı əlaqədə olur  mənası və müvəqqəti müddəti olan bir təcrübə təşkil edir. ',
        team:'MEBELAND KOMANDASI',
        expert1:'Mebel Mütəxəssisimiz',
        contact1:'Əlaqə',
        call:'Telefon',
        hour:'İş vaxtı',
        mon:'Bazar ert. - Cümə axş.',
        fri:'Cümə',
        park:'Parkinq',
        parking:'İstifadəniz üçün geniş, dəbdəbəli və pulsuz parkinq təqdim edirik.',
        location:'Məkan',
        location1:'Yaşayış yerimiz çox stratejidir,',
        location2:'çəltik tarlalarına, dağlara və şəhərlərə yaxındır.',
        message:'Mesaj buraxın',
        message1:'Təklif və iradlarınız üçün bizə mesaj buraxın.',
        name:'Ad',
        email:'E-poçt',
        subject:'Mövzu',
        message2:'Mesaj',
        send:'Göndər',
        ask:'Tez-tez soruşulan suallar',
        card:'Sifarişim üçün kartımdan nə vaxt pul tutulacaq?',
        answer:'Məhsullar paylama mərkəzimizdən göndərildiyi üçün kredit kartınızdan ödəniş tutulacaq. Ödənişlər paketdəki əşyaları, habelə daşınma və rəftarları əks etdirir. Amerika Birləşmiş Ştatları və onun ərazilərindəki təyinat məntəqələri üçün hər bir sifariş üçün yalnız bir dəfə göndərmə və işləmə haqqı ödənilir. ',
        delivery:"Evə çatdırılma nə qədər vaxt aparır??",
        credit:"Hansı kredit kartlarını qəbul edirsiniz?",
        outside:"Xaricdə yaşasam, idxal xərcləri nə qədər olacaq?",
        customs:"Sifariş verərkən Gömrük ödəməliyəmmi? ",
        shipping:"Hansı Göndərmə Metodları Mövcuddur?",
        ship:"Beynəlxalq göndərişlər edirsiniz?",
        account:"Sifariş vermək üçün hesaba ehtiyacım varmı?",
        order:"Sifarişimi necə ləğv edə və ya dəyişdirə bilərəm? ",
        my:"Mənim Hesabım",
        policies:"Şirkət Siyasətləri və Prosedurları",
        options:"Ödəniş Seçimləri",
        gift:"Hədiyyə Kartı",
        terms:"Şərtlər və Qaydalar",
        how:"Necə daxil ola bilərəm",
        works:"Çatdırılma Necə İşləyir"
    }
}, 

ENG:{
    translation:{
        home:'HOME',
        about:'ABOUT',
        shop:'SHOP',
        features:'FEATURES',
        contact:'CONTACT',
        blog:'BLOG',
        concept:'New Interior Concept',
        collection:'MEBELAND COLLECTION',
        collectionwords:'Our curated selection of furniture includes pieces from some of the worlds most respected  ',
        collectionwords1:'design ateliers as well as our favorite up-and-coming designers. With a focus on materiality, form, and craftsmanship, our furniture makes a statement.View individual pieces alone or in a curated space to see how you can add them to your life. Of course, furniture plays a key role in designing a modern living room and there are a number of essential pieces that no living space can do without',
        words1:'Discover Inspiration Furniture Design',
        words2:'New Innovation Design Every Times',
        words3:'Furniture Needs Varies By Market',
        words4:'Prioritizing Market Trends & Needs',
        about2:'ABOUT MEBELAND',
        collection2:'Ready For Mebeland New Collection?',
        start:'Starting from $125 only',
        designed:'Designed By',
        new:'New Design 2023',
        furniture:'In 2023, furniture designs lean towards soft, organic shapes with curved lines. This trend offers a break from the straight lines and sharp angles that have been popular in recent years, bringing a sense of comfort and relaxation to any space.',
        furniture2:'Such a trend signals that it’s time to be creative, and let your artistic self shine. From curvaceous sofas and armchairs to rounded coffee tables and ottomans, it gives a modern take on the classic mid-century design.',
        furniture3:'While solid colours will always have a place in interior design, 2023 will see an influx of furniture designs with prints and patterns. ',
        hot:'TRENDİNG',
        trend:'Trending Furniture This Weeks',
        trendabout:'Shopping for new home decor and furniture is a great way to refresh your space without having to do a total remodel. From the most comfortable sofas to side tables, any piece can change the way a room feels and be a personal reflection of your own style. ',
        modern:'Modern Living Room',
        items:'$448 Full Set Items',
        livingroom:'A modern living room is simple, sleek and elegant. High ceilings, layered lighting and minimalistic furniture are all essential aspects in creating a modern living room for everyday enjoyment and relaxation.',
        luxury:'Luxury Furniture',
        more:'READ MORE',
        items2:'$521Full Set Items',
        art:'What is luxury furniture description?What Are the Qualities of Luxury Furniture Brands?  Art -Luxury furniture pieces are hand-crafted instead of being assembled in a factory. They are designed by some of the top names in the industry and put together by experts who have dedicated their lives to woodworking, hand-painting, and other aspects of furniture crafting.',
        why:'WHY CHOOSE US',
        trending:'We Trusted All Over The World',
        express:'Express Delivery',
        premium:'Premium Packaging',
        service:'Firendly Services',
        payment:'Safe Payment',
        delivery:'Express delivery is the fastest form of shipping. The customer pays an extra shipping cost for this type of delivery, as the shipment will get transported to him anywhere between 24 to 72 hours.',
        premium2:'Premium packaging drives value for brands and helps them to stand out as a category leader. Heres the difference premium packaging makes.',
        project:'Complate Project',
        expert:'Expert Employees',
        clients:'Satisfied Clients',
        awards:'Winning Awards',
        branch:'Branch Shop',
        play:'PLAY VIDEO',
        architecture:'Architecture Is About Experience Not Only Visual',
        architecture2:'The complex phenomenon of architecture consists of too many irreconcilable and conflicting categories of thought, intention, emotion, interaction and action to be condensed into the framework of a single theory of architecture. Besides, art and architecture are constituted in their mental encounter and experience instead of the material works themselves',
        architecture3:'Architecture is commonly understood, taught, practiced and evaluated primarily as a visual art form. However, we encounter buildings and environments through  our entire sense of being. Perceptions interact with memory and imagination to  constitute an experience with meaning and temporal duration. Art and architecture are essentially relational phenomena as they express our being in  the world instead of themselves or their authors. ',
        team:'MEBELAND TEAM',
        expert1:'Our Furniture Expert',
        contact1:'Contact',
        call:'Call',
        hour:'Hours',
        mon:'Mon - Thu',
        fri:'Fri',
        park:'Parking',
        parking:'We provide spacious, luxurious, and free parking for you to use.',
        location:'Location',
        location1:'Our residence is very strategic,',
        location2:'close to rice fields, mountains and cities.',
        message:'Leave A Message',
        message1:'Leave us a message for your suggestions and comments.',
        name:'Name',
        email:'E-mail',
        subject:'Subject',
        message2:'Message',
        send:'Send',
        ask:'Frequently Asked Questions',
        card:'When will my card be charged for my order ?',
        answer:'Your credit card will be charged as items are shipped from our distribution center. Charges reflect the items in the package as well as shipping and handling. You are only charged shipping and handling once per order for destinations within the United States of America and its territories.',
        delivery:"How long does it take for home delivery ?",
        credit:"Which credit cards do you accept ?",
        outside:"How much import charges if I live outside ?",
        customs:"Do I have to pay Customs when ordering ?",
        shipping:"What Shipping Methods Are Available ?",
        ship:"Do you ship internationally?",
        account:"Do I need an account to place an order?",
        order:"How Can I Cancel Or Change My Order?",
        my:"My Account",
        policies:"Company Policies & Procedures",
        options:"Payment Options",
        gift:"Gift Cart",
        terms:"Terms & Conditions",
        how:"How do I Login",
        works:"How Delivery Works"
    }  
    },
}


i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: localStorage.getItem("lng") || "ENG",
    resources,
    debug: true,
    whitelist:resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;