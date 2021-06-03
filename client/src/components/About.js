import styled from 'styled-components';

const AboutRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  margin-bottom: 0;

  @media(min-width: 800px) {
    flex-direction: row${props => props.direction || ''};
    margin-bottom: 2em;
    text-align: right;
  }
`

function About(props) {
  return (
    <div className='aboutPage'>
      <h1 className='aboutHeader'>אודות</h1>
      <AboutRow>
        <p className='aboutParagraph'>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
        </p>
        <div className='aboutImageContainer'>
          <img
            className='aboutImage'
            src='https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/e35/76891435_2474757219441958_6357827190142673452_n.jpg?tp=1&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=AoEtYn0QvTYAX8YaXXV&edm=AP_V10EAAAAA&ccb=7-4&oh=ef766eff630ec3ac5e30e4ce08d7f356&oe=6094FB3A&_nc_sid=4f375e'
            alt='whistle'
          />
        </div>
      </AboutRow>
      <AboutRow direction='-reverse'>
        <p className='aboutParagraph'>
          קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
        </p>
        <div className='aboutImageContainer'>
          <img
            className='aboutImage'
            src='https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/82934048_2490620984520755_5785601649286606595_n.jpg?tp=1&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=0PGCuceCia0AX85eTgr&edm=AP_V10EAAAAA&ccb=7-4&oh=7b238733ef8e60cc6d326452488e4862&oe=6094F633&_nc_sid=4f375e'
            alt='dozen'
          />
        </div>
      </AboutRow>
      <AboutRow>
        <p className='aboutParagraph'>
          קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה לפמעט.
        </p>
        <div className='aboutImageContainer'>
          <img
            className='aboutImage'
            src='https://instagram.fiev22-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/81350831_1042296252773841_7857348127148290488_n.jpg?tp=1&_nc_ht=instagram.fiev22-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=8kTDf66JM9AAX_zQl5N&edm=AP_V10EAAAAA&ccb=7-4&oh=b6a76c63310758d875eb8ec9b216a808&oe=609424C4&_nc_sid=4f375e'
            alt='telephone'
          />
        </div>
      </AboutRow>
      <AboutRow direction='-reverse'>
        <p className='aboutParagraph'>
          נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק?
        </p>
        <div className='aboutImageContainer'>
          <img
            className='aboutImage'
            src='https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/e35/80647094_1153091138229536_4079417474465447628_n.jpg?tp=1&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=xF5NDCBsJDoAX97Ry46&edm=AP_V10EAAAAA&ccb=7-4&oh=1f57a5114e7889cc04ef56b80db883a3&oe=6095F3D4&_nc_sid=4f375e'
            alt='trouble'
          />
        </div>
      </AboutRow>
    </div>
  );
}

export default About;
