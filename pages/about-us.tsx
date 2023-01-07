import React from 'react'

import { useLanguageContext } from '../context'
import { AR } from '../constants';

const AboutUs = () => {
  const { language } = useLanguageContext()!;

  return (
    <div className='aboutUs'>
      <div className='aboutUs__container container f-center'>
        <div className='aboutUs__container-objectives'>
          <h1>
            {
              (language?.toLowerCase() === AR) ? (`اهداف الجمعية`) : (`Objectives of the Association`)
            }
          </h1>
          <ul>
            <li>
              {
                (language?.toLowerCase() === AR) ? (` إحياء التراث والعمل على التعريف به في المجال الثقافي والسياحي
                `) : (`Reviving heritage and promoting it in the cultural and tourism sphere`)
              }
            </li>
            <li>
              {
                (language?.toLowerCase() === AR) ? (` المحافظة على التراث الثقافي والحرفي وترقيته
                `) : (`Preservation and promotion of cultural and artistic heritage`)
              }
            </li>
            <li>
              {
                (language?.toLowerCase() === AR) ? (`إجراء بحوث تاريخية و اجتماعية ونشرها
                `) : (`Conducting and disseminating historical and social research`)
              }
            </li>
            <li>
              {
                (language?.toLowerCase() === AR) ? (`جمع التحف الأثرية القديمة وصيانتها
                `) : (`Collection and maintenance of ancient antiques`)
              }
            </li>
            <li>
              {
                (language?.toLowerCase() === AR) ? (`إحياء الحرف المهن القديمة`) : (`Revival of crafts old professions Encouragement and moral reinforcement of the young craftsman`)
              }
              
            </li>
            <li>
            {
              (language?.toLowerCase() === AR) ? (`المحافظة على الحرف التقليدية القديمة من خطر النسيان
              `) : (`Preserving ancient traditional crafts from the risk of forgetting`)
            }
            </li>
            <li>
            {
              (language?.toLowerCase() === AR) ? (`القيام بمحاضرات تحسيسية بالعادات والتقاليد الشعبية
              `) : (`Conducting sensitization lectures in folk customs and traditions`)
            }
            </li>
            <li>
            {
              (language?.toLowerCase() === AR) ? (`عرض وثائق اشهارية خاصة بأعمال الحرفي عن طريق مقالات صحفية وأفلام وثائقية ووضعها
              تحت تصرف الإعلام االسمعي والبصري
              `) : (`Presentation of monthly documents on craftsman's work through newspaper articles and documentaries and their development At the 
              disposal of audiovisual media`)
            }
            </li>
            <li>
            {
              (language?.toLowerCase() === AR) ? (` التبادل الثقافي السياحي والحرفي محليا وطنيا ودوليا
              `) : (`Tourism and artisanal cultural exchanges nationally and internationally`)
            }
            </li>
          </ul>
        </div>
        <div className='aboutUs__container-assembly'>
          <h1>
            {
              (language?.toLowerCase() === AR) ? (`مسار الجمعية`) : (`Assembly Course`)
            }
          </h1>
          <p>
            {  
              (language?.toLowerCase() === AR) ? (`          تأسست جمعية الأصالة في ماي 1995 من طرف الفقيدة السيدة بودية عمارية وكانت تحمل اسم جمعية الاصالة للفنون التقليدية وقد عملت منذ تأسيسها على المحافظة على تراث مدينة تلمسان والتعريف به داخل وخارج الولاية حيث قامت بعدة خرجات في العديد من ولاية الوطن وحصدت العديد من الجوائز في عدة مدن منها : قسنطينة, تبازة, العاصمة ,بجاية ,بشار...
            
              كما كان لها الفضل في اظهار عدة مواهب في الموسيقى ذات الطابع الاندلسي والذين أصبحوا من الفنانين البارزين في مدينة تلمسان
              
              ولعل انصع بصمة لجمعية الأصالة للفنون والصناعات التقليدية لولاية تلمسان المساهمة الفعالة تحت اشراف وزارة الثقافة ,في المشروع الذي زاد لتراث هذه المدينة رمزية خاصة حيث اصبح اللباس التلمساني مصنف عالميا من طرف منظمة اليونسكو UNESCO كموروث عالمي مرسما عبر الاجيال
              
              ومنذ سنة2011 دأبت الجمعية على تنظيم تظاهرات التراث حيث كانت ذات طابع محلي الى أن أصبحت ذات طابع وطني في الطبعة الأخيرة والذي كان تحت عنوان
              
              "لباسنا رمز هويتنا" الذي كان مناسبة لفتح " مدرسة للنسيج" التقليدي بكل انواعه للحفاظ على هذا الموروث الذي توارثته الأجيال منذ القدم
              
              كما ابرمت عدة اتفاقيات توأمة قصد التبادل الثقافي والسياحي
              
              ولاتزال جمعية الأصالة للفنون والصناعات التقليدية لمدينة تلمسان تشارك في كل التظاهرات والمناسبات من اجل ابراز التراث والتعريف به للاجيال الصاعدة`) : (`The Association of Authenticity was founded in May 1995 by the faithful Mrs. Budiya Amariyah and was named the Traditional Arts Association. Since its founding, it has worked to preserve and publicize the heritage of the city of Tlemcen inside and outside the state. It has made several grades in many of the state of the homeland and has won many awards in several cities, including Constantine, Baza, Baza,...
            
              She was also credited with showing several talents in Andalusian-themed music who became a prominent artist in the city of Tlemsan
              
              Perhaps the fingerprint of the Association of Authenticity for Arts and Traditional Industries of the State of Tlemcen actively contributes under the auspices of the Ministry of Culture, to the project that has increased the heritage of this city is especially symbolic as the tactile dress has become universally classified by UNESCO as a global heritage painted across generations
              
              Since 2011, the Association has been organizing heritage events where they were of a local nature until they became of a national character in the last edition, which was entitled "
              
              " our dress is the symbol of our identity " which was appropriate to open the " textile school " Traditional in all its kinds to preserve this inheritance that has been inherited by generations since ancient times
              
              It has also concluded several twinning agreements for cultural and tourism exchanges.
              
              The Asalah Society of Traditional Arts and Industries of the City of Tlemcen continues to participate in all events and events to highlight and publicize heritage for the emerging generations.`)
              }
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs