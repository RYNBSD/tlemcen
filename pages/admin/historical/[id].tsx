import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import isEmpty from 'validator/lib/isEmpty';

import { useAdminContext, useLanguageContext } from '../../../context';
import { isNum, secureString } from '../../../ts/tools';

let file: any = null;

const HistoricalUpdate = ({ dataAR, dataEN }: any) => {
  const { isAdmin } = useAdminContext()!;
  const router = useRouter();
  let { id } = router.query;
  
  const { language } = useLanguageContext()!;

  useEffect(() => {
    if (!isAdmin) {
      router.push('/');
    }
  }, [router, isAdmin]);

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const [image, setImage] = useState<boolean>(true);
  const [status, setStatus] = useState<boolean>(dataEN?.item[0]?.status as boolean);
  const [linkToReadMore, setLinkToReadMore] = useState<string>(dataEN?.item[0]?.link_to_read_more as string);
  const [mapSource, setMapSource] = useState<string>(dataEN?.item[0]?.map_source as string);
  const [mapLink, setMapLink] = useState<string>(dataEN?.item[0]?.map_link as string);
  
  //Arabic
  const [titleAR, setTitleAR] = useState<string>(dataAR?.item[0]?.title as string);
  const [descriptionAR, setDescriptionAR] = useState<string>(dataAR?.item[0]?.description as string);
  const [locationAR, setLocationAR] = useState<string>(dataAR?.item[0]?.location as string);
  const [categoryAR, setCategoryAR] = useState<string>(dataAR?.item[0]?.category as string);
  
  //English
  const [titleEN, setTitleEN] = useState<string>(dataEN?.item[0]?.title as string);
  const [descriptionEN, setDescriptionEN] = useState<string>(dataEN?.item[0]?.description as string);
  const [locationEN, setLocationEN] = useState<string>(dataEN?.item[0]?.location as string);
  const [categoryEN, setCategoryEN] = useState<string>(dataEN?.item[0]?.category as string);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } : {
      files: FileList | null
    } = e.target!;
    
    setImage(false);
    //console.log(files);

    if (!(files![0]) || files!.length === 0) {
      setImage(false);
      alert("Please enter an image!!!");
      return;
    }

    const { type } = files![0];

    const types = type.split('/');

    if (types[0] !== "image") {
      setImage(false);
      alert("Make sure to enter an image!!!");
      return;
    }

    const imageTypes = ['png', 'jpg', 'jpeg'];

    for (const imageType of imageTypes) {
      if (imageType === types[1]) {
        setImage(true);
        file = files![0];
        return;
      }
    }
    
    setImage(false);
    alert("Make sure to enter an image with one of these types (png, jpg, jpeg)!!!");
  }

  const filterInputs = (): void => {
    setDescriptionAR(prevDescription => secureString(prevDescription));
    setLinkToReadMore(prevLinkToReadMore => secureString(prevLinkToReadMore));
    setMapSource(prevMapSource => secureString(prevMapSource));

    setTitleAR(prevTitleAR => secureString(prevTitleAR));
    setMapLink(prevMapLinkAR => secureString(prevMapLinkAR));
    setLocationAR(prevLocationAR => secureString(prevLocationAR));
    setCategoryAR(prevCategoryAR => secureString(prevCategoryAR));

    setTitleEN(prevTitleEn => secureString(prevTitleEn));
    setDescriptionEN(prevDescriptionEN => secureString(prevDescriptionEN));
    setLocationEN(prevLocationEN => secureString(prevLocationEN));
    setCategoryEN(prevCategoryEN => secureString(prevCategoryEN));
  }

  const isThereAnyEmptyField = (): boolean => {
    return (
      isEmpty(titleAR) || isEmpty(descriptionAR) || isEmpty(linkToReadMore) ||
      isEmpty(mapSource) || isEmpty(mapLink) || isEmpty(locationAR) ||
      isEmpty(categoryAR) || isEmpty(titleEN) || isEmpty(descriptionEN) ||
      isEmpty(locationEN) || isEmpty(categoryEN)
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmit(true);

    if (!isNum.test(String(id as string))) {
        alert("Make sure of element id");
        return;
    }

    filterInputs();

    if (isThereAnyEmptyField()) {
      setIsSubmit(false);
      alert("Make sure to fill all fields correctly!!!");
      return;
    }

    if (!image) {
      setIsSubmit(false);
      alert("Make sure to enter a image!!!");
      return;  
    }

    if (file === null) {
      await fetch(`/api/historical/update/${id}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            english: {
                titleEN,
                descriptionEN,
                linkToReadMore,
                mapSource,
                mapLink,
                image: '',
                locationEN,
                categoryEN,
                status,
            },
            arabic: {
                titleAR,
                descriptionAR,
                locationAR,
                categoryAR,
            }
        }),
      }).then(response => {
            if (response.ok) {
                setIsSubmit(false);
                alert("Your data has been updated to database!!!");
                router.push('/admin/historical');
                return;
            }
          alert("The item has not been updated");
      }).catch(e => {
            if (e) {
                alert("There is an error!!!");
            }
      });
      return;
    }

    const reader = new FileReader();
    //console.log(file);

    reader.onload = async () => {
        //base64String = reader!.result!;
        //console.log(base64String);
        
        // console.log(JSON.stringify({
        //     english: {
        //         titleEN,
        //         descriptionEN,
        //         linkToReadMore,
        //         image: reader!.result!,
        //         mapSource,
        //         mapLink,
        //         locationEN,
        //         categoryEN,
        //         status,
        //     },
        //     arabic: {
        //         titleAR,
        //         descriptionAR,
        //         locationAR,
        //         categoryAR,
        //     }
        // }));
        
        await fetch(`/api/historical/update/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                english: {
                    titleEN,
                    descriptionEN,
                    linkToReadMore,
                    image: reader!.result!,
                    mapSource,
                    mapLink,
                    locationEN,
                    categoryEN,
                    status,
                },
                arabic: {
                    titleAR,
                    descriptionAR,
                    locationAR,
                    categoryAR,
                }
            }),
        }).then(response => {
            if (response.ok) {
                setIsSubmit(false);
                alert("Your data has been updated to database!!!");
                router.push('/admin/historical');
                return;
            }
            alert("The item has not been updated");
        }).catch(e => {
            if (e) {
                alert("There is an error!!!");
            }
        });
    }
    
    reader.readAsDataURL(file);

    //console.log(english, arabic);
    setIsSubmit(false);
  }

  return (
      <div className='historicalNew'>
          <form
              method="PUT"
              className="historicalNew__form container f-center"
              onSubmit={handleSubmit}
              encType='multipart/form-data'
          >
              <div className="historicalNew__form-firstData f-center">
                  <div className="historicalNew__form-firstData_left">
                      <div className="historicalNew__form-firstData_left-title">
                          <label htmlFor="title">Title:</label>
                          <input
                              type="text"
                              name='title'
                              placeholder='Enter your title'
                              value={titleEN}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleEN(e.target.value)}
                              required
                          />
                      </div>
                      <div className="historicalNew__form-firstData_left-linkToReadMore">
                          <label htmlFor="linkToReadMore">Link to read more:</label>
                          <input
                              type="text"
                              name='linkToReadMore'
                              placeholder='Enter your link'
                              value={linkToReadMore}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLinkToReadMore(e.target.value)}
                              required
                          />
                      </div>
                      <div className="historicalNew__form-firstData_left-image">
                          <input
                              type="file"
                              name="image"
                              onChange={handleImage}
                          />
                      </div>
                  </div>
                  <div className="historicalNew__form-firstData_right">
                      <label htmlFor="description">Description:</label>
                      <textarea
                          name='description'
                          placeholder='Enter your description'
                          value={descriptionEN}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescriptionEN(e.target.value)}
                          required
                          rows={8}
                      ></textarea>
                  </div>
              </div>
              <div className="historicalNew__form-secondData">
                  <div className="historicalNew__form-secondData_left">
                      <div className="historicalNew__form-secondData_left-mapSource">
                          <label htmlFor="map_source">Map source:</label>
                          <input
                              type="text"
                              name='map_source'
                              placeholder='Enter your map source'
                              value={mapSource}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMapSource(e.target.value)}
                              required
                          />
                      </div>
                      <div className="historicalNew__form-secondData_left-location">
                          <label htmlFor="location">Location:</label>
                          <input
                              type="text"
                              name='location'
                              placeholder='Enter the location'
                              value={locationEN}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocationEN(e.target.value)}
                              required
                          />
                      </div>
                      <div className="historicalNew__form-secondData_left-category">
                          <label htmlFor="category">Category:</label>
                          <input
                              type="text"
                              name='category'
                              placeholder='Enter the Category'
                              value={categoryEN}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategoryEN(e.target.value)}
                              required
                          />
                      </div>
                  </div>
                  <div className="historicalNew__form-secondData_right">
                      <div className="historicalNew__form-secondData_right-mapLink">
                          <label htmlFor="map_link">Map link:</label>
                          <input
                              type="text"
                              name='map_link'
                              placeholder='Enter the map link'
                              value={mapLink}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMapLink(e.target.value)}
                              required
                          />
                      </div>
                      <div className="historicalNew__form-secondData_right-status">
                          <label htmlFor="status">Status:</label>
                          <div>
                              <input
                                  type="checkbox"
                                  name='status'
                                  checked={status}
                                  onChange={() => setStatus(prevStatus => !prevStatus)}
                              />
                              <h3>is active?</h3>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="historicalNew__form-firstData f-center">
                  <div className="historicalNew__form-firstData_left">
                      <div className="historicalNew__form-firstData_left-title">
                          <label htmlFor="title_ar">عنوان:</label>
                          <input
                              type="text"
                              name='title_ar'
                              placeholder='أدخل عنوانك'
                              value={titleAR}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleAR(e.target.value)}
                              required
                          />
                      </div>
                      <div className="historicalNew__form-firstData_left-location">
                          <label htmlFor="location">موقع:</label>
                          <input
                              type="text"
                              name='location'
                              placeholder='أدخل الموقع'
                              value={locationAR}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocationAR(e.target.value)}
                              required
                          />
                      </div>
                      <div className="historicalNew__form-firstData_left-category">
                          <label htmlFor="category">فئة:</label>
                          <input
                              type="text"
                              name='category'
                              placeholder='أدخل الفئة'
                              value={categoryAR}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategoryAR(e.target.value)}
                              required
                          />
                      </div>
                  </div>
                  <div className="historicalNew__form-firstData_right">
                      <label htmlFor="description_ar">وصف:</label>
                      <textarea
                          name='description_ar'
                          placeholder='أدخل وصفك'
                          value={descriptionAR}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescriptionAR(e.target.value)}
                          required
                          rows={8}
                      ></textarea>
                  </div>
              </div>
              <div className="historicalNew__form-btn">
                  {
                      !isSubmit && (
                          <button type='submit'>
                              Update
                          </button>
                      )
                  }
                  {
                      isSubmit && (
                          <button type='submit' disabled>
                              Update
                          </button>
                      )
                  }
              </div>
          </form>
      </div>
  )
}

export async function getServerSideProps(context: any) {
    const dataEN = await (await fetch(`http://127.0.0.1:3000/api/historical/${context.params.id}?language=en`)).json();
    const dataAR = await (await fetch(`http://127.0.0.1:3000/api/historical/${context.params.id}?language=ar`)).json();

    return {
        props: {
            dataAR,
            dataEN
        }
    }
}

export default HistoricalUpdate