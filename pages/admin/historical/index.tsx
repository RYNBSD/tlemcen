import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useGetAllHistoricalQuery } from '../../../store/reducers/getData';
import { useAdminContext, useLanguageContext } from '../../../context';
import { AR } from '../../../constants';
import { LoadingAR, LoadingEN, ConnectionErrorAR, ConnectionErrorEN } from '../../../components/global';
import { isNum } from '../../../ts/tools';

// Types
import type { historicalInterface } from '../../../ts/types';

const Index = () => {
    const router = useRouter();
    const {
        isAdmin
    } = useAdminContext()!;
    const {
        language
    } = useLanguageContext()!;
    const { data, isError, isLoading, error } = useGetAllHistoricalQuery({ language });
    const [historicalItems, setHistoricalItems] = useState<historicalInterface[]>(data?.items!);
    
    useEffect(() => {
        if (!isAdmin) {
            router.push("/");
        }
        setHistoricalItems(data?.items!);
    }, [data?.items, isAdmin, language, router]);

    if (isLoading) {
        return (
            (language?.toLocaleLowerCase() === AR) ? (
                <LoadingAR />
            ) : (
                <LoadingEN />
            )
        );
    }

    if (isError || error) {
        return (
            (language?.toLocaleLowerCase() === AR) ? (
                <ConnectionErrorAR />
            ) : (
                <ConnectionErrorEN />
            )
        );
    }

    const deleteHistoricalItem = async (id: string): Promise<void> => {
        if (!isNum.test(id)) {
            alert("Invalid id");
            return;
        }

        await fetch(`/api/historical/delete/${parseInt(id)}`, {
            method: "DELETE",
        }).then(response => {
            if (response.ok) {
                alert("Item delete successfully");

                const deletedItem = historicalItems.filter(item => item.id !== parseInt(id));
                setHistoricalItems(deletedItem);
                return;
            }
            alert("There is an error");
        }).catch(e => {
            if (e) {
                alert(e.msg);
            }
        });
    }

    const updateHistoricalItem = (id: string): void => {
        if (!isNum.test(id)) {
            alert("Invalid id");
            return;
        }

        router.push(`/admin/historical/${id}`);
    }

    return (
        <section className='admin__historical'>
            <div className="admin__historical-items container f-center">
                {
                    historicalItems?.map((item, i) => (
                        <div className='admin__historical-items_item' key={i}>
                            <div className="admin__historical-items_item-img">
                                <Image
                                    src={new Buffer(item.image).toString()}
                                    alt={item.title}
                                    width={300}
                                    height={250}
                                />
                            </div>
                            <div className="admin__historical-items_item-info">
                                <div className="admin__historical-items_item-info_title">
                                    <h1>{item.title}</h1>
                                </div>
                                <div className="admin__historical-items_item-info_options f-center">
                                    <button
                                        type='button'
                                        className='update'
                                        onClick={() => updateHistoricalItem(String(item.id))}
                                    >
                                        Update
                                    </button>
                                    <button
                                        type='button'
                                        className='delete'
                                        onClick={() => deleteHistoricalItem(String(item.id))}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Index