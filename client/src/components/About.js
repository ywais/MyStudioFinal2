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
            src='https://cdn3.dumpor.com/view?q=%3D%3DwMwYDZzgTPkl2cfNmbfZSQ3IDOFJEM20TZvZyN1EWOkdDZhRjNxIGMjJTYkBTZhJWYyADOhJTZkhDMk1DavZCNtcTPiN2YmEUQBFkQVpmdCJUQB1TbkVmJOZ0dwMzXYFUWYp2cLZlZ2AXOH1zYo92Xj52XmATMx0DdhN2Xj52Xm02bj5SbhJ3ZhR3culmbkNmLx0SM3F2dtQnblRnbvN2c9QHafNmbfZSM9AHd%2FcGcq5ibfJTN0MzN2IDNxATOxcjM4cTNzYzX4UTOxQDN5EjM3UzN0cDNy8VNzQTM5gjN38SNzU2L1ETL1gDOy4SM1Q3L29SbvNmLtFmcnFGdz5WauR2YuETLxcXY31CduVGdu92Yz9yL6MHc0RHa'
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
            src='https://cdn1.dumpor.com/view?q=lVzNzYGN9QWaz91Yu9lJzIkMFVkQwYTPl9mJhdzN3MjMxQWZzYTMkJTO0ADNhFzNhZmMjVTN1MTNmFWPo9mJ00yN9I2YjZSQBFUQCVEMxY1XQFUPtRWZmY2dahXWfhVQZFHRMJXeIpUQTxUPjh2bfNmbfZSMxETP0F2YfNmbfZCdl5mLuR2YiZmLh5mZuITLyIjdllmZu0WYydWY0Nnbp1Ddo91Yu9lJx0Dc09zZwpmLu9VN5UjNwYjN4ITO0YTMwYTN4cTNfVTN3AjM1QDO5AjM2ATO0IzX4QDM0MTOygzLwgDMxgHM4ATMz9SNzU2L1ETL1gDOy4SM1Q3L29Cdl5mLuR2YiZmLh5mZuITLyIjdllmZu0WYydWY0Nnbp9yL6MHc0RHa'
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
            src='https://cdn1.dumpor.com/view?q=lVzNzYGN9QWaz91Yu9lJ0ATM0YkQwYTPl9mJxEWNmZWN2IDO0gDN5gjN0MjZxUDOkBDMwEjMyUjYiNWPo9mJ00yN9I2YjZSQBFUQCVEMxY1XQFUPtRWZmYULrZHT5gVQ3lTe4skRrZjUmlWPjh2bfNmbfZSOwETP0F2YfNmbfZCdl5mLuR2YiZmLh5mZuETLyIjdllmZu0WYydWY0Nnbp1Ddo91Yu9lJx0Dc09zZwpmLu9FO4QDM5IDO0EzNyEDO0MzN1gzNfFDN4MzN3ITNyYTOyIDNwEzXxMDOwUzMxgzLwgDMxgHM4ATMz9SNzU2L1ETL1gDOy4SM1Q3L29Cdl5mLuR2YiZmLh5mZuETLyIjdllmZu0WYydWY0Nnbp9yL6MHc0RHa'
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
            src='https://cdn3.dumpor.com/view?q=%3D%3DwMwYDZzgTPkl2cfNmbfZCNEVTMGJEM20TZvZiYhhDO2gTZlVTYkBTOhJmYmBDOzEGN5YTOjNWN0EmZ00DavZCNtcTPiN2YmEUQBFkQVpmdCJUQB1TbkVmJHpVWlVzXYFUVSNUQydXQ5RVdh1zYo92Xj52XmgDMx0DdhN2Xj52Xm02bj5SbhJ3ZhR3culmbkNmLx0yMsVGatQnblRnbvN2c9QHafNmbfZSM9AHd%2FcGcq5ibfhjM2cDN0UjN0QzN0cTM0kzNwQzX2MTN5IjM4MTMxkDMzUTMx8FN5AzN0YDM48SNzU2L1ETL1gDOy4SM1Q3L29SbvNmLtFmcnFGdz5WauR2YuETLzwWZo1CduVGdu92Yz9yL6MHc0RHa'
            alt='trouble'
          />
        </div>
      </AboutRow>
    </div>
  );
}

export default About;
