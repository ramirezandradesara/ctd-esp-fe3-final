import type { NextPage } from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import { useEffect, useState } from 'react';
import ResponsiveGrid from 'dh-marvel/components/Grid';
import PaginationOutlined from 'dh-marvel/components/Pagination';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';

const Index: NextPage = () => {
    const [comics, setComics] = useState([])
    const [page, setPage] = useState<number>(1);
    const [total, settotal] = useState<number>(0);
    const LIMIT: number = 12

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        let offset = LIMIT * (page - 1)
        getComics(offset, LIMIT).then(response => {
            setComics(response?.data?.results)
            settotal(response?.data?.total)
        })
    }, [page])

    return (
        <>
            <Head>
                <title>Inicio | DH MARVEL</title>
                <meta name="description" content="Marvel Store Sitio Web" />
            </Head>
            <LayoutGeneral>
                <BodySingle title={"¡Bienvenidx a Marvel Store!"}>
                    <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
                    <ResponsiveGrid data={comics} />
                    <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
                </BodySingle>
            </LayoutGeneral>
        </>
    )
}

export default Index
