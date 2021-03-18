import React, {useState} from 'react';
import ImageGallery from 'react-image-gallery';




import s from './Gallery.module.css'
import {languageFunc} from "../../common/functions/functions";
import Rater from "../../Containers/RateContainer";
import Modal from "../Modal/Modal";



const Gallery = ({allArr, lang, id, token, countryInfo, isAuthenticated}) => {

    const [modal, setModal] = useState(false)

    //console.log('countryInfo',countryInfo.galleries)

    const [indexdesc, setIndex] = useState(0)
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


    let dima = []
    if (!allArr) {
        return <div></div>
    }

    allArr.forEach(el => dima.push(el.description))

    let photos = [];
    allArr.forEach(el => photos.push({
        original: el.img,
        thumbnail: el.img,
    }))




/*
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
            description  :`${lang === 'Русский' && allArr[id].descriptionAboutCountry.ru}`
                + `${lang === 'English' && allArr[id].descriptionAboutCountry.eng}`
                + `${lang === 'Deutsche' && allArr[id].descriptionAboutCountry.gr}`,
            originalClass:`${s.mainImg}`,
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
            description  :'Коза',
            originalClass:`${s.mainImg}`,


        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
            description  :'Мука',
            originalClass:`${s.mainImg}`,


        },
    ];
*/


    return (
        <div>
            <h1 className={s.h1}>{languageFunc(lang,
                'Достопримичательности',
                'Description',
                'Beschreibung')}</h1>
            <div className={s.gall}>
                <ImageGallery thumbnailClass={s.dima}  onSlide={(currentIndex) => setIndex(currentIndex)} items={photos} />

            </div>
            <div>
                <ul className={s.ul}>
                    {dima.map((el, index ) => {
                        if (index === indexdesc) {
                            return <li className={s.active} key={el}>
                                {el}
                                <div>
                                    {!!isAuthenticated && <Rater  setModal={ setModal} galleryId={countryInfo.galleries[index]._id}
                                           token={token} id={id} />}
                                    {!modal && <div className={s.pointer} onClick={() => {
                                        setModal(true)
                                           }}> {languageFunc(lang,
                                        'Посмотреть проголосовавших',
                                        'View Voters',
                                        'Wähler anzeigen')}</div>}
                                    {!!modal && !countryInfo.galleries[index].ratings && <div>{languageFunc(lang,
                                        'Проголосовавших нету',
                                        'No one voted ',
                                        'Niemand stimmte ab ')}</div>}


                                    {!!modal && !!countryInfo.galleries[index].ratings && <div>{countryInfo.galleries[index].ratings.map(r => <div key={r.user.email}>
                                        {languageFunc(lang,
                                            'Почта',
                                            'Email',
                                            'Email')}: {r.user.email}, {languageFunc(lang,
                                        'оценка',
                                        'raiting',
                                        'Bewertung ')}: {r.rating}

                                    </div>)}
                                        <div className={s.pointer} onClick={() => setModal(false)}>{languageFunc(lang,
                                            'Скрыть голосовавших',
                                            'Hide voters',
                                            'Wähler verstecken')}</div>

                                    </div> }

                                </div>

                            </li>
                        } else {
                            return <li key={el}>
                                {el}
                            </li>
                        }

                    }
                        )}
                </ul>
            </div>

        </div>
    );
};

export default Gallery;