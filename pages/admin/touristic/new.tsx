import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import isEmpty from 'validator/lib/isEmpty';

import { secureString } from '../../../ts/tools';
import { useAdminContext } from '../../../context';

let file: any;
let base64String: string | ArrayBuffer;

const New = () => {
    const {
        isAdmin,
    } = useAdminContext()!;
    const router = useRouter();

    useEffect(() => {
        if (!isAdmin) {
            router.push('/');
        }
    }, [isAdmin, router]);

    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const [image, setImage] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(false);
    const [linkToReadMore, setLinkToReadMore] = useState<string>('');
    const [mapSource, setMapSource] = useState<string>('');
    const [mapLink, setMapLink] = useState<string>('');
    
    //Arabic
    const [titleAR, setTitleAR] = useState<string>('');
    const [descriptionAR, setDescriptionAR] = useState<string>('');
    const [locationAR, setLocationAR] = useState<string>('');
    const [categoryAR, setCategoryAR] = useState<string>('');

    //English
    const [titleEN, setTitleEN] = useState<string>('');
    const [descriptionEN, setDescriptionEN] = useState<string>('');
    const [locationEN, setLocationEN] = useState<string>('');
    const [categoryEN, setCategoryEN] = useState<string>('');

    const reset = (): void => {
        setImage(false);
        setStatus(false);
        setLinkToReadMore('');
        setMapSource('');
        setMapLink('');

        setTitleAR('');
        setDescriptionAR('');
        setLocationAR('');
        setCategoryAR('');

        setTitleEN('');
        setDescriptionEN('');
        setLocationEN('');
        setCategoryEN('');
    }

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { files } : {
            files: FileList | null
        } = e.target!;

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmit(true);
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

        const reader = new FileReader();
        //console.log(file);

        reader.onload = async () => {
            //base64String = reader!.result!;
            //console.log(base64String);
            
            console.log(JSON.stringify({
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
            }));
            
            await fetch(`/api/touristic/new`, {
                method: "POST",
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
                    alert("Your data has been added to database!!!");
                    reset();
                    return;
                }
                alert("The item has not been added");
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
                method="POST"
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
                                required
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
                                Add
                            </button>
                        )
                    }
                    {
                        isSubmit && (
                            <button type='submit' disabled>
                                Add
                            </button>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default New