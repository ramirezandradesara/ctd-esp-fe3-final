import MediaCard from 'dh-marvel/components/CardDetails';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';
import { getCharacterByComic, getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect } from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getComics()

  const paths = response.data.results.map(({ id }: { id: any }) => ({
    params: {
      id: id?.toString()
    }
  }));

  return {
    paths,
    fallback: false // cualquier pagina que no se especifique en los paths va a arrojar un 404
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string)
  const comic = await getComic(id)
  const characters = await getCharacterByComic(id)

  return {
    props: {
      comic,
      characters
    }
  }
};

function ComicDetails({ comic, characters }: { comic: any, characters: any }) {
  return (
    <LayoutGeneral>
      <BodySingle title='Detalle cómic'>
        <MediaCard
          title={comic.title}
          description={comic.description}
          image={`${comic?.images[0]?.path}.${comic?.images[0]?.extension}`}
          id={comic.id}
          price={comic.price}
          oldPrice={comic.oldPrice}
          stock={comic.stock}
          characters={characters}
        />
      </BodySingle>
    </LayoutGeneral>
  )
}

export default ComicDetails